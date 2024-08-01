import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { pill as ccPill } from '@warp-ds/css/component-classes';
import IconClose16 from '@warp-ds/icons/react/close-16';

import { activateI18n } from '../../i18n.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import type { PillProps } from './props.js';

export function Pill(props: PillProps) {
  activateI18n(enMessages, nbMessages, fiMessages, daMessages);
  return (
    <div className={ccPill.wrapper}>
      <button
        type="button"
        onClick={props.onClick}
        className={classNames(!props.canClose ? props.className : '', {
          [ccPill.button]: true,
          [props.suggestion ? ccPill.suggestion : ccPill.filter]: true,
          [ccPill.label]: true,
          [props.canClose ? ccPill.labelWithClose : ccPill.labelWithoutClose]: true,
        })}>
        <span className={ccPill.a11y}>
          {props.openSRLabel ||
            i18n._(
              /*i18n*/ {
                id: 'pill.aria.openFilter',
                message: 'Open filter',
                comment: 'Fallback screenreader message for open filter',
                values: { label: props.label },
              },
            )}
        </span>
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
          onClick={props.onClose}>
          <span className={ccPill.a11y}>
            {props.closeSRLabel ||
              i18n._(
                /*i18n*/ {
                  id: 'pill.aria.removeFilter',
                  message: 'Remove filter {label}',
                  comment: 'Fallback screenreader message for removal of the filter',
                  values: { label: props.label },
                },
              )}
          </span>
          <IconClose16 />
        </button>
      )}
    </div>
  );
}
