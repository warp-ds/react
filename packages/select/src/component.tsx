import * as React from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { helpText as ccHelpText, label as ccLabel, select as ccSelect } from '@warp-ds/css/component-classes';
import IconChevronDown16 from '@warp-ds/icons/react/chevron-down-16';

import { activateI18n } from '../../i18n.js';
import { useId } from '../../utils/src/index.js';

import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import type { SelectProps } from './props.js';

const setup = (props: SelectProps) => {
  const { className, invalid, id, hint, always, label, style, optional, readOnly, disabled, ...rest } = props;

  activateI18n(enMessages, nbMessages, fiMessages);

  const helpId = hint ? `${id}__hint` : undefined;

  return {
    attrs: {
      div: {
        style,
      },
      label: {
        htmlFor: id,
        children: label,
      },
      select: {
        ...rest,
        'aria-describedby': helpId,
        'aria-errormessage': invalid && helpId ? helpId : undefined,
        'aria-invalid': invalid,
        disabled,
        id,
      },
      optional,
      help:
        always || invalid
          ? {
              children: hint,
              id: helpId,
            }
          : null,
    },
    wrapperClasses: classNames(ccSelect.wrapper, className),

    selectClasses: classNames(ccSelect.base, {
      [ccSelect.default]: !invalid && !disabled && !readOnly,
      [ccSelect.invalid]: invalid,
      [ccSelect.disabled]: disabled,
      [ccSelect.readOnly]: readOnly,
    }),

    helpTextClasses: classNames(ccHelpText.helpText, {
      [ccHelpText.helpTextColor]: !invalid,
      [ccHelpText.helpTextColorInvalid]: invalid,
    }),
    chevronClasses: classNames(ccSelect.chevron, {
      [ccSelect.chevronDisabled]: disabled,
    }),
  };
};

function Select(props: SelectProps, ref: React.Ref<HTMLSelectElement>) {
  const id = useId(props.id);
  const { attrs, wrapperClasses, selectClasses, helpTextClasses, chevronClasses } = setup({ ...props, id });
  const { div, label, select, help, optional } = attrs;

  const handleKeyDown = (event) => {
    if (props.readOnly && (event.key === ' ' || event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
      event.preventDefault();
    }
  };

  return (
    <div className={wrapperClasses} {...div}>
      {label.children && (
        <label htmlFor={label.htmlFor} className={ccLabel.label}>
          {label.children}
          {optional && (
            <span className={ccLabel.optional}>
              {i18n._(
                /*i18n*/ {
                  id: 'select.label.optional',
                  message: '(optional)',
                  comment: 'Shown behind label when marked as optional',
                },
              )}
            </span>
          )}
        </label>
      )}
      <div className={ccSelect.selectWrapper}>
        <select ref={ref} {...select} className={selectClasses} onKeyDown={handleKeyDown} />
        <div className={classNames(chevronClasses)}>
          <IconChevronDown16 />
        </div>
      </div>
      {help && <div className={helpTextClasses} {...help} />}
    </div>
  );
}

const _Select = React.forwardRef(Select);
export { _Select as Select };
