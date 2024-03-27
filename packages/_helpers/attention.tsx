import { AttentionState, Directions, opposites } from '@warp-ds/core/attention'
import { AttentionVariants, AttentionProps, ReferenceElement } from '../attention/src/props.js'
import { i18n } from '@lingui/core'
import { MutableRefObject, useEffect } from 'react'

export const getVariant = (variantProps: AttentionVariants, variantClasses: any) => {
  return Object.keys(variantClasses).find((b) => !!variantProps[b]) || ''
}
export const pointingAtDirection = (actualDirection: Directions) => {
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
}

export const activeAttentionType = (props: AttentionProps) => {
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
}

export const useAutoUpdatePosition = (
  targetEl:  MutableRefObject<ReferenceElement | null> | undefined,
  isShowing: boolean | undefined,
  attentionEl: MutableRefObject<HTMLDivElement | null>,
  autoUpdatePosition: (state: AttentionState) => void,
  attentionState: AttentionState) => {
  useEffect(() => {
    if (isShowing && targetEl && attentionEl) {
       // starts the autoUpdate, making sure the attention elements's position stays anchored to the target element
      const cleanup = autoUpdatePosition(attentionState)
      return cleanup
    }
  }, [targetEl, isShowing, attentionEl])
}