import React from 'react'
import { classNames } from '@chbphone55/classnames'
import { PillProps } from '.'
import { pill as ccPill } from '@warp-ds/css/component-classes'

export function Pill(props: PillProps) {
  return (
    <div className={ccPill.pill}>
      <button
        type='button'
        onClick={props.onClick}
        aria-label={props['aria-label']}
        className={classNames(!props.canClose ? props.className : '', {
          [ccPill.button]: true,
          [props.suggestion ? ccPill.suggestion : ccPill.filter]: true,
          [ccPill.label]: true,
          [props.canClose ? ccPill.labelWithClose : ccPill.labelWithoutClose]:
            true,
        })}
      >
        {props.icon || <span>{props.label}</span>}
      </button>
      {props.canClose && (
        <button
          type='button'
          className={classNames(props.className, {
            [ccPill.button]: true,
            [props.suggestion ? ccPill.suggestion : ccPill.filter]: true,
            [ccPill.close]: true,
          })}
          onClick={props.onClose}
        >
          <span>x</span>
        </button>
      )}
    </div>
  )
}
