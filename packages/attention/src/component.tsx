import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { arrowDirectionClassname, opposites, useRecompute as recompute } from '@warp-ds/core/attention';
import { attention as ccAttention } from '@warp-ds/css/component-classes';
import IconClose16 from '@warp-ds/icons/react/close-16';

import { activeAttentionType, getVariant, pointingAtDirection, useAutoUpdatePosition } from '../../_helpers/attention.js';
import { activateI18n } from '../../i18n.js';

import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import type { ArrowProps, AttentionProps, ReferenceElement } from './props.js';

const variantClasses = {
  callout: {
    wrapper: ccAttention.callout,
    arrow: ccAttention.arrowCallout,
  },
  highlight: {
    wrapper: ccAttention.highlight,
    arrow: ccAttention.arrowHighlight,
  },
  tooltip: {
    wrapper: ccAttention.tooltip,
    arrow: ccAttention.arrowTooltip,
  },
  popover: {
    wrapper: ccAttention.popover,
    arrow: ccAttention.arrowPopover,
  },
};

export function Attention(props: AttentionProps) {
  let {
    noArrow,
    isShowing,
    children,
    role,
    'aria-label': ariaLabel,
    placement = 'bottom',
    targetEl: initialTargetEl,
    className,
    canClose,
    onDismiss,
    distance = 8,
    skidding = 0,
    flip = false,
    crossAxis = false,
    fallbackPlacements,
    ...rest
  } = props;

  activateI18n(enMessages, nbMessages, fiMessages);

  const wrapperClasses = classNames(ccAttention.base, variantClasses[getVariant(rest, variantClasses)].wrapper);

  const [actualDirection, setActualDirection] = useState(placement);
  // Don't show attention element before its position is computed on first render
  const [isVisible, setIsVisible] = useState<boolean | undefined>(false);

  const isMounted = useRef(true);
  const attentionEl = useRef<HTMLDivElement | null>(null);
  const arrowEl = useRef<HTMLDivElement | null>(null);
  const targetElRef = useRef<ReferenceElement | null>(initialTargetEl?.current || null);

  const attentionState = useMemo(
    () => ({
      get isShowing() {
        return isShowing;
      },
      get isCallout() {
        return rest.callout;
      },
      get actualDirection() {
        return actualDirection;
      },
      set actualDirection(v) {
        setActualDirection(v);
      },
      get directionName() {
        return placement;
      },
      get arrowEl() {
        return arrowEl.current;
      },
      get attentionEl() {
        return attentionEl.current;
      },
      set attentionEl(v) {
        attentionEl.current = v;
      },
      get targetEl() {
        return targetElRef?.current;
      },
      get noArrow() {
        return props.noArrow;
      },
      get distance() {
        return distance;
      },
      get skidding() {
        return skidding;
      },
      get flip() {
        return flip;
      },
      get crossAxis() {
        return crossAxis;
      },
      get fallbackPlacements() {
        return fallbackPlacements;
      },
    }),
    [
      isShowing,
      rest.callout,
      actualDirection,
      placement,
      arrowEl,
      attentionEl,
      targetElRef,
      props.noArrow,
      distance,
      skidding,
      flip,
      crossAxis,
      fallbackPlacements,
    ],
  );

  const defaultAriaLabel = () => `${activeAttentionType(props)} ${!props.noArrow ? pointingAtDirection(actualDirection) : ''}`;

  useEffect(() => {
    // targetEl can be undefined if props.callout is true.
    // However, useAutoUpdatePosition hook is using @warp-ds/core, which uses Floating-ui's computePosition(). Floating-ui's computePosition() requires a defined targetEl to be able to compute the attentionEl's position and the attentionEl's arrow position.
    // When props.callout is true, we only need computePosition() to calculate the callout's arrow position. So, we create a default targetEl for callout that we can pass to the useAutoUpdatePosition hook, in order to avoid Floating-ui from throwing an error.
    if (props.callout && initialTargetEl === undefined) {
      targetElRef.current = document?.createElement('div');
    } else {
      targetElRef.current = initialTargetEl?.current || null;
    }
  }, [props.callout, initialTargetEl]);

  useEffect(() => {
    recompute(attentionState);
  }, [attentionState]);

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
      // update attention's visibility after first render if showing by default or it's of type callout
      if (isShowing || props.callout) {
        setIsVisible(isShowing);
      }
    } else {
      setIsVisible(isShowing);
    }
  }, [isShowing, props.callout]);

  useAutoUpdatePosition(targetElRef, isShowing, attentionEl, attentionState);

  return !props.callout && initialTargetEl === undefined ? null : (
    <div
      data-testid="attention-el"
      className={classNames(
        {
          [ccAttention.notCallout]: !props.callout,
          invisible: !isVisible && !props.callout,
          hidden: !isVisible && !props.tooltip,
        },
        className,
      )}
      ref={attentionEl}>
      <div
        role={props.role === '' ? undefined : props.tooltip ? 'tooltip' : 'img'}
        aria-label={ariaLabel === '' ? undefined : ariaLabel ?? defaultAriaLabel()}
        className={wrapperClasses}
        id={props.id}>
        {!props.noArrow && <Arrow {...props} ref={arrowEl} direction={actualDirection} />}
        <div className={ccAttention.content}>{props.children}</div>
        {canClose && (
          <button
            type="button"
            aria-label={i18n._(
              /*i18n*/ {
                id: 'attention.aria.close',
                message: 'Close',
                comment: 'Aria label for the close button in attention',
              },
            )}
            onClick={onDismiss}
            onKeyDown={(event) => {
              if (!props.onDismiss) return;
              if (event.key === 'Escape') {
                props.onDismiss();
              }
            }}
            className={ccAttention.closeBtn}>
            <IconClose16 />
          </button>
        )}
      </div>
    </div>
  );
}

const Arrow = forwardRef<HTMLDivElement, ArrowProps>(({ direction, ...rest }, ref) => {
  const arrowDirection = opposites[direction];
  const arrowClasses = classNames(
    ccAttention.arrowBase,
    ccAttention[`arrowDirection${arrowDirectionClassname(arrowDirection)}`],
    variantClasses[getVariant(rest, variantClasses)].arrow,
  );

  return <div data-testid="attention-arrow-el" ref={ref} className={arrowClasses} />;
});
