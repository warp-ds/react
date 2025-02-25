import * as React from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { label as ccLabel, select as ccSelect } from '@warp-ds/css/component-classes';
import IconChevronDown16 from '@warp-ds/icons/react/chevron-down-16';

import { HelpText } from '../../_helpers/help-text.js';
import { activateI18n } from '../../i18n.js';
import { useId } from '../../utils/src/index.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as svMessages } from './locales/sv/messages.mjs';
import type { SelectProps } from './props.js';

activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

const setup = (props: SelectProps) => {
  const { className, invalid, id, hint, always, label, style, optional, readOnly, disabled, ...rest } = props;

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
      help: always || invalid ? { helpText: hint, helpId, isInvalid: invalid } : null,
    },
    wrapperClasses: classNames(className, ccSelect.wrapper),
    selectClasses: classNames([
      ccSelect.base,
      !invalid && !disabled && !readOnly && ccSelect.default,
      invalid && ccSelect.invalid,
      disabled && ccSelect.disabled,
      readOnly && ccSelect.readOnly,
    ]),
    chevronClasses: classNames([ccSelect.chevron, disabled && ccSelect.chevronDisabled]),
  };
};

function Select(props: SelectProps, ref: React.Ref<HTMLSelectElement>) {
  const id = useId(props.id);
  const { attrs, wrapperClasses, selectClasses, chevronClasses } = setup({ ...props, id });
  const { div, label, select, help, optional } = attrs;

  const handleKeyDown = (event) => {
    if (props.readOnly && (event.key === ' ' || event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
      event.preventDefault();
    }
  };

  return (
    <div className={wrapperClasses} {...div}>
      {label.children && (
        <label htmlFor={label.htmlFor} className={ccLabel.base}>
          {label.children}
          {optional && (
            <span className={ccLabel.optional}>
              {i18n._({
                id: 'select.label.optional',
                message: '(optional)',
                comment: 'Shown behind label when marked as optional',
              })}
            </span>
          )}
        </label>
      )}
      <div className={ccSelect.selectWrapper}>
        <select ref={ref} {...select} className={selectClasses} onKeyDown={handleKeyDown} />
        <div className={chevronClasses}>
          <IconChevronDown16 />
        </div>
      </div>
      {help && <HelpText helpId={help.helpId} helpText={help.helpText} isInvalid={help.isInvalid} />}
    </div>
  );
}

const _Select = React.forwardRef(Select);
export { _Select as Select };
