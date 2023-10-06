import * as React from 'react';
import { i18n } from '@lingui/core';
import { select as ccSelect, label as ccLabel, helpText as ccHelpText } from '@warp-ds/css/component-classes';
import { useId } from '../../utils/src';
import { classNames } from '@chbphone55/classnames';
import type { SelectProps } from './props';
import { messages as nbMessages} from './locales/nb/messages.mjs';
import { messages as enMessages} from './locales/en/messages.mjs';
import { messages as fiMessages} from './locales/fi/messages.mjs';
import { activateI18n } from '../../i18n';

const setup = (props) => {
  const {
    className,
    invalid,
    id,
    hint,
    always,
    label,
    style,
    optional,
    readOnly,
    disabled,
    ...rest
  } = props;

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
    selectClasses:  classNames({
      [ccSelect.default]: true,
      [ccSelect.invalid]: invalid,
      [ccSelect.disabled]: disabled,
      [ccSelect.readOnly]: readOnly
    }),
    selectWrapperClasses: classNames({
      [ccSelect.selectWrapper]: true,
    }),
    helpTextClasses: classNames({
      [ccHelpText.helpText]: true,
      [ccHelpText.helpTextInvalid]: invalid
    }),
    labelClasses: classNames({
      [ccLabel.label]: true,
      [ccLabel.labelInvalid]: invalid
    }),
    chevronClasses: classNames({
      [ccSelect.chevron]: true,
      [ccSelect.chevronDisabled]: disabled,
    })
  };
};

function Select(props: SelectProps, ref: React.Ref<HTMLSelectElement>) {
  const id = useId(props.id);
  const { attrs, wrapperClasses, selectClasses, selectWrapperClasses, helpTextClasses, labelClasses, chevronClasses } = setup({ ...props, id });
  const { div, label, select, help, optional } = attrs;

  return (
    <div className={wrapperClasses} {...div}>
      {label.children && (
        <label htmlFor={label.htmlFor} className={labelClasses}>
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
      <div className={selectWrapperClasses}>
        <select ref={ref} {...select} className={selectClasses}/>
          <div
            className={classNames(chevronClasses)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.5 5.5L8 11L13.5 5.5"
              />
            </svg>
          </div>
      </div>
      {help && <div className={helpTextClasses} {...help} />}
    </div>
  );
}

const _Select = React.forwardRef(Select);
export { _Select as Select };
