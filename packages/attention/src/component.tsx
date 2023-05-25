import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { classNames } from '@chbphone55/classnames';
import {
  opposites,
  rotation,
  useRecompute as recompute,
  arrowLabels,
} from '@warp-ds/core/attention';
import { attention as ccAttention } from '@warp-ds/component-classes';
import { ArrowProps, AttentionProps } from './props';

export function Attention(props: AttentionProps) {
  const {
    noArrow,
    isShowing,
    children,
    placement,
    targetEl,
    className,
    ...rest
  } = props;

  const wrapperClasses = classNames(
    ccAttention.base,  
    {
      [ccAttention.tooltip]: props.tooltip,
      [ccAttention.callout]: props.callout,
      [ccAttention.popover]: props.popover,
    }
  );

  const [actualDirection, setActualDirection] = useState(placement);
  // Don't show attention element before its position is computed on first render
  const [isVisible, setIsVisible] = useState<Boolean | undefined>(false);

  const isMounted = useRef(true);
  const attentionRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  const attentionState = {
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
      return arrowRef.current;
    },
    get attentionEl() {
      return attentionRef.current;
    },
    set attentionEl(v) {
      attentionRef.current = v;
    },
    get targetEl() {
      return targetEl?.current;
    },
    get noArrow() {
      return props.noArrow;
    },
  };

  // Recompute on re-render
  useEffect(() => {
    recompute(attentionState);
  });

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;

      // update attention's visibility after first render if showing by default or it's of type callout
      if (isShowing === true || props.callout) {
        setIsVisible(isShowing);
      }
    } else {
      setIsVisible(isShowing);
    }
  }, [isShowing, props.callout]);

  return (
    <div
      className={classNames(
        {
          'absolute z-50': !props.callout,
          invisible: !isVisible && !props.callout,
          hidden: !isVisible && !props.tooltip,
        },
        className,
      )}
      ref={attentionRef}
    >
      <div className={wrapperClasses}>
        {!props.noArrow && (
          <Arrow {...props} ref={arrowRef} direction={placement} />
        )}
        <div className={ccAttention.content}>{props.children}</div>
      </div>
    </div>
  );
}

const arrowDirectionClassname = (dir: string) => {
  const direction = dir.charAt(0).toUpperCase() + dir.slice(1);

  return `arrowDirection${direction}`;
}

const Arrow = forwardRef<HTMLDivElement, ArrowProps>((props, ref) => {
  const { callout, direction, popover, tooltip } = props;
  const arrowDirection = opposites[direction];

  const arrowClasses = classNames(
    ccAttention.arrowBase,
    ccAttention[arrowDirectionClassname(arrowDirection)],
    {
      [ccAttention.arrowTooltip]: tooltip,
      [ccAttention.arrowCallout]: callout,
      [ccAttention.arrowPopover]: popover,
    },
  );

  return (
    <div
      aria-label={arrowLabels[arrowDirection]}
      ref={ref}
      className={arrowClasses}
      style={{
        // TW doesn't let us specify exactly one corner, only whole sides
        borderTopLeftRadius: '4px',
        zIndex: 1,
        // border alignment is off by a fraction of a pixel, this fixes it
        [`margin${arrowDirectionClassname(arrowDirection)}`]: '-0.5px',
        transform: `rotate(${rotation[arrowDirection]}deg)`,
      }}
    />
  );
});
