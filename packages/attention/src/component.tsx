import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { classNames } from '@chbphone55/classnames'
import {
  opposites,
  rotation,
  useRecompute as recompute,
} from '@warp-ds/core/attention'
import {
  computePosition,
  flip,
  offset,
  shift,
  arrow,
  autoUpdate,
  ReferenceElement
} from '@floating-ui/dom'
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
  const {
    noArrow,
    isShowing,
    children,
    role,
    'aria-label': ariaLabel,
    placement,
    targetEl,
    className,
    canClose,
    onDismiss,
    ...rest
  } = props

  activateI18n(enMessages, nbMessages, fiMessages)

  const wrapperClasses = classNames(
    ccAttention.base,
    variantClasses[getVariant(rest)].wrapper
  )

  const [actualDirection, setActualDirection] = useState(placement)
  // Don't show attention element before its position is computed on first render
  const [isVisible, setIsVisible] = useState<Boolean | undefined>(false)

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
  }
  
  const referenceEl = props.targetEl?.current as ReferenceElement
  const floatingEl = attentionEl?.current as unknown as HTMLElement

 function update() {
  if (!floatingEl) return
    computePosition(referenceEl, floatingEl, {
          placement: props.placement,
          middleware: [
            offset(8),
            flip(),
            shift({ padding: 16 }),
            !props.noArrow && arrowEl && arrow({ element: arrowEl.current as unknown as HTMLElement })]
        }).then(({ x, y, middlewareData, placement}) => {
          setActualDirection(placement)
          Object.assign(floatingEl.style, {
            left: `${x}px`,
            top: `${y}px`,
          })
      
          if (middlewareData.arrow) {
            const { x, y } = middlewareData.arrow
            Object.assign(arrowEl?.current?.style || {}, {
              // TODO: temporary fix, for some reason left-start and right-start positions the arrowEL slightly too far from the attentionEl
              left: x ? placement.includes("-start") ? `${x - 12}px` : `${x}px` : '',
              top: y ? placement.includes("-start") ? `${y - 12}px` : `${y}px` : '',
            });
          }
        });    
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
  const arrowDirectionClassname = (dir: string) => {
    let direction: string
    if (/-/.test(dir)) {
      direction = dir
        .split('-')
        .map((d) => d.charAt(0).toUpperCase() + d.slice(1))
        .join('')
    } else {
      direction = dir.charAt(0).toUpperCase() + dir.slice(1)
    }
    return `arrowDirection${direction}`
  }
  
  useEffect(() => {
    recompute(attentionState, update)
  }, [attentionState])
    
  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false

      // update attention's visibility after first render if showing by default or it's of type callout
      if (isShowing === true || props.callout) {
        setIsVisible(isShowing)
      }
    } else {
      setIsVisible(isShowing)
    }
  }, [isShowing, props.callout])
  
  useEffect(() => {
    if (isShowing === true && referenceEl && floatingEl) {
      // starts the autoUpdate, making sure the attention elements's position stays anchored to the target element 
      const cleanup = autoUpdate(referenceEl, floatingEl, update)
      // we need to return cleanup in order to stop the autoUpdate once the attention element is no longer visible
      return cleanup
    } 
    return () => {};
  }, [referenceEl, isShowing, floatingEl])

  
  

  

  const Arrow = forwardRef<HTMLDivElement, ArrowProps>(
    ({ direction, ...rest }, ref) => {
      const arrowDirection = opposites[direction];
      const arrowClasses = classNames(
        ccAttention.arrowBase,
        ccAttention[arrowDirectionClassname(arrowDirection)],
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
            // border alignment is off by a fraction of a pixel, this fixes it
            [`margin${arrowDirectionClassname(arrowDirection)}`]: '-0.5px',
            transform: `rotate(${rotation[arrowDirection]}deg)`,
          }}
        />
      )
    }
  )
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


