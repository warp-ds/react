import React, { forwardRef } from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { input as ccInput, label as ccLabel, helpText as ccHelpText } from '@warp-ds/css/component-classes';

import { activateI18n } from '../../i18n.js';
import { useId } from '../../utils/src/index.js';

import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { TextFieldProps } from './props.js';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    className,
    disabled,
    id: providedId,
    children,
    invalid,
    error,
    helpText,
    label,
    readOnly,
    type = 'text',
    style,
    optional,
    ...rest
  } = props;

  activateI18n(enMessages, nbMessages, fiMessages);

  const id = useId(providedId);
  const helpId = helpText ? `${id}__hint` : undefined;
  const isInvalid = invalid || error;

  const suffix = React.Children.toArray(children).find((child) => React.isValidElement(child) && child.props.suffix);
  const prefix = React.Children.toArray(children).find((child) => React.isValidElement(child) && child.props.prefix);

  return (
    <div className={className} style={style}>
      {label && (
        <label htmlFor={id} className={ccLabel.label}>
          {label}
          {optional && (
            <span className={ccLabel.optional}>
              {i18n._(
                /*i18n*/ {
                  id: 'textfield.label.optional',
                  message: '(optional)',
                  comment: 'Shown behind label when marked as optional',
                },
              )}
            </span>
          )}
        </label>
      )}
      <div className={ccInput.wrapper}>
        {prefix}
        <input
          className={classNames({
            [ccInput.base]: true,
            [ccInput.default]: !isInvalid && !disabled && !readOnly,
            [ccInput.invalid]: isInvalid && !disabled && !readOnly,
            [ccInput.disabled]: !isInvalid && disabled && !readOnly,
            [ccInput.readOnly]: !isInvalid && !disabled && readOnly,
            [ccInput.placeholder]: !!props.placeholder,
            [ccInput.suffix]: !!suffix,
            [ccInput.prefix]: !!prefix,
          })}
          {...rest}
          aria-describedby={helpId}
          aria-errormessage={isInvalid && helpId ? helpId : undefined}
          aria-invalid={isInvalid}
          disabled={disabled}
          id={id}
          readOnly={readOnly}
          ref={ref}
          type={type}
        />
        {suffix}
      </div>

      {helpText && (
        <div
          className={classNames({
            [ccHelpText.helpText]: true,
            [ccHelpText.helpTextColor]: !isInvalid,
            [ccHelpText.helpTextColorInvalid]: isInvalid,
          })}
          id={helpId}>
          {helpText}
        </div>
      )}
    </div>
  );
});
