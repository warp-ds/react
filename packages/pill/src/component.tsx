import React from 'react';
import { classNames } from '@chbphone55/classnames';
import { PillProps } from '.';
import { pill as ccPill } from '@warp-ds/component-classes';

export function Pill(props: PillProps) {
  return (
    <div className={ccPill.pill}>
      <button
        type="button"
        onClick={props.onClick}
        className={classNames(!props.canClose ? props.className : '', {
          [ccPill.button]: true,
          [props.suggestion ? ccPill.suggestion : ccPill.filter]: true,
          [ccPill.label]: true,
          [props.canClose ? ccPill.labelWithClose : ccPill.labelWithoutClose]: true,
        })}
      >
        <span className={ccPill.a11y}>{props.openSRLabel || 'Åpne filter'}</span>
        {props.icon || <span>{props.label}</span>}
      </button>
      {props.canClose && (
        <button
          type="button"
          className={classNames(props.className, {
            [ccPill.button]: true,
            [props.suggestion ? ccPill.suggestion : ccPill.filter]: true,
            [ccPill.close]: true,
          })}
          onClick={props.onClose}
        >
          <span className={ccPill.a11y}>
            {props.closeSRLabel || `Fjern filter ${props.label}`}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="none"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
}
