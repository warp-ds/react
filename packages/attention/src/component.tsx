import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { classNames } from '@chbphone55/classnames'
import {
  opposites,
  autoUpdatePosition,
  arrowDirectionClassname,
  useRecompute as recompute
} from '@warp-ds/core/attention'
import { attention as ccAttention } from '@warp-ds/css/component-classes'
import { ArrowProps, AttentionProps, AttentionVariants } from './props.js'
import { i18n } from '@lingui/core'
import { messages as nbMessages } from './locales/nb/messages.mjs'
import { messages as enMessages } from './locales/en/messages.mjs'
import { messages as fiMessages } from './locales/fi/messages.mjs'
import { activateI18n } from '../../i18n.js'
import IconClose16 from '@warp-ds/icons/react/close-16'

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
}

const getVariant = (variantProps: AttentionVariants) => {
  return Object.keys(variantClasses).find((b) => !!variantProps[b]) || ''
}

export function Attention(props: AttentionProps) {
  let {
    noArrow,
    isShowing,
    children,
    role,
    'aria-label': ariaLabel,
    placement = 'bottom',
    targetEl,
    className,
    canClose,
    onDismiss,
    distance = 8,
    skidding = 0,
    flip = false,
    fallbackPlacements = undefined,
    ...rest
  } = props

  activateI18n(enMessages, nbMessages, fiMessages)

  const wrapperClasses = classNames(
    ccAttention.base,
    variantClasses[getVariant(rest)].wrapper
  )

  const [actualDirection, setActualDirection] = useState(placement)
  // Don't show attention element before its position is computed on first render
  const [isVisible, setIsVisible] = useState<boolean | undefined>(false)

  const isMounted = useRef(true)
  const attentionEl = useRef<HTMLDivElement | null>(null)
  const arrowEl = useRef<HTMLDivElement | null>(null)
  
  const attentionState = {
    get isShowing() {
      return isShowing
    },
    get isCallout() {
      return rest.callout
    },
    get actualDirection() {
      return actualDirection
    },
    set actualDirection(v) {
      setActualDirection(v)
    },
    get directionName() {
      return placement
    },
    get arrowEl() {
      return arrowEl.current
    },
    get attentionEl() {
      return attentionEl.current
    },
    set attentionEl(v) {
      attentionEl.current = v
    },
    get targetEl() {
      return targetEl?.current
    },
    get noArrow() {
      return props.noArrow
    },
    get distance(){
      return distance
    },
    get skidding(){
      return skidding
    },
    get flip(){
      return flip
    },
    get fallbackPlacements(){
      return fallbackPlacements
    }
  }

  //TODO: See if we can move this function to the core-repo:
  const pointingAtDirection = (() => {
    switch (opposites[actualDirection]) {
      case 'top-start':
      case 'top':
      case 'top-end':
        return i18n._({
          id: 'attention.aria.pointingUp',
          message: 'pointing up',
          comment:
            'Default screenreader message for top direction in the attention component',
        })
      case 'right-start':
      case 'right':
      case 'right-end':
        return i18n._({
          id: 'attention.aria.pointingRight',
          message: 'pointing right',
          comment:
            'Default screenreader message for right direction in the attention component',
        })
      case 'bottom-start':
      case 'bottom':
      case 'bottom-end':
        return i18n._({
          id: 'attention.aria.pointingDown',
          message: 'pointing down',
          comment:
            'Default screenreader message for bottom direction in the attention component',
        })
      case 'left-start':
      case 'left':
      case 'left-end':
        return i18n._({
          id: 'attention.aria.pointingLeft',
          message: 'pointing left',
          comment:
            'Default screenreader message for left direction in the attention component',
        })
      default:
        return ''
    }
  })()

  // TODO: See if we can move this function to the core repo:
  const activeAttentionType = (() => {
    switch (true) {
      case props.tooltip:
        return i18n._({
          id: 'attention.aria.tooltip',
          message: 'tooltip',
          comment:
            'Default screenreader message for tooltip in the attention component',
        })
      case props.callout:
        return i18n._({
          id: 'attention.aria.callout',
          message: 'callout speech bubble',
          comment:
            'Default screenreader message for callout speech bubble in the attention component',
        })
      case props.popover:
        return i18n._({
          id: 'attention.aria.popover',
          message: 'popover speech bubble',
          comment:
            'Default screenreader message for popover speech bubble in the attention component',
        })
      case props.highlight:
        return i18n._({
          id: 'attention.aria.highlight',
          message: 'highlighted speech bubble',
          comment:
            'Default screenreader message for highlighted speech bubble in the attention component',
        })
      default:
        return ''
    }
  })()

  // TODO: See if we can move this function to the core repo:
  const defaultAriaLabel = () => {
    return `${activeAttentionType} ${!props.noArrow ? pointingAtDirection : ''}`
  }
  
  useEffect(() => {
    recompute(attentionState)
  }, [attentionState])
    
  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false
      // update attention's visibility after first render if showing by default or it's of type callout
      if (isShowing || props.callout) {
        setIsVisible(isShowing)
      }
    } else {
      setIsVisible(isShowing)
    }
  }, [isShowing, props.callout])
  
  // @ts-ignore
  useEffect(() => {
    if (isShowing && targetEl && attentionEl) {
        // starts the autoUpdate, making sure the attention elements's position stays anchored to the target element 
       const cleanup = autoUpdatePosition(attentionState);

       return cleanup
    } 
  }, [targetEl, isShowing, attentionEl])
  
  return (
    <div
      className={classNames(
        {
          [ccAttention.notCallout]: !props.callout,
          invisible: !isVisible && !props.callout,
          hidden: !isVisible && !props.tooltip,
        },
        className
      )}
      ref={attentionEl}
    >
      <div
        role={props.role === '' ? undefined : props.tooltip ? 'tooltip' : 'img'}
        aria-label={
          ariaLabel === '' ? undefined : ariaLabel ?? defaultAriaLabel()
        }
        className={wrapperClasses}
        id={props.id}
      >
        {!props.noArrow && (
          <Arrow {...props} ref={arrowEl} direction={actualDirection} />
        )}
        <div className={ccAttention.content}>{props.children}</div>
        {canClose && (
          <button
            type='button'
            aria-label={i18n._(
              /*i18n*/ {
                id: 'attention.aria.close',
                message: 'Close',
                comment: 'Aria label for the close button in attention',
              }
            )}
            onClick={onDismiss}
            onKeyDown={(event) => {
              if (!props.onDismiss) return
              if (event.key === 'Escape') {
                props.onDismiss()
              }
            }}
            className={ccAttention.closeBtn}
          >
            <IconClose16 />
          </button>
        )}
      </div>
    </div>
  )
}

const Arrow = forwardRef<HTMLDivElement, ArrowProps>(
  ({ direction, ...rest }, ref) => {
    const arrowDirection = opposites[direction];
    const arrowClasses = classNames(
      ccAttention.arrowBase,
      ccAttention[`arrowDirection${arrowDirectionClassname(arrowDirection)}`],
      variantClasses[getVariant(rest)].arrow
    )

    return (
      <div
        ref={ref}
        className={arrowClasses}
        style={{
          // TW doesn't let us specify exactly one corner, only whole sides
          borderTopLeftRadius: '4px',
          zIndex: 1,
        }}
      />
    )
  }
)


