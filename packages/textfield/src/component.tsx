import React, { forwardRef } from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { input as ccInput, label as ccLabel } from '@warp-ds/css/component-classes';

import { HelpText } from '../../_helpers/help-text.js';
import { activateI18n } from '../../i18n.js';
import { useId } from '../../utils/src/index.js';

import { messages as daMessages } from './locales/da/messages.mjs';
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
    helpText,
    label,
    readOnly,
    type = 'text',
    style,
    optional,
    ...rest
  } = props;

  activateI18n(enMessages, nbMessages, fiMessages, daMessages);

  const id = useId(providedId);
  const helpId = helpText ? `${id}__hint` : undefined;
  const isInvalid = invalid;

  const suffix = React.Children.toArray(children).find((child) => React.isValidElement(child) && child.props.suffix);
  const prefix = React.Children.toArray(children).find((child) => React.isValidElement(child) && child.props.prefix);

  const inputClasses = classNames([
    ccInput.base,
    !!props.placeholder && ccInput.placeholder,
    !!suffix && ccInput.suffix,
    !!prefix && ccInput.prefix,
    !isInvalid && !disabled && !readOnly && ccInput.default,
    isInvalid && !disabled && !readOnly && ccInput.invalid,
    !isInvalid && disabled && !readOnly && ccInput.disabled,
    !isInvalid && !disabled && readOnly && ccInput.readOnly,
  ]);

  return (
    <div className={className} style={style}>
      {label && (
        <label htmlFor={id} className={ccLabel.base}>
          {label}
          {optional && (
            <span className={ccLabel.optional}>
              {i18n._({
                id: 'textfield.label.optional',
                message: '(optional)',
                comment: 'Shown behind label when marked as optional',
              })}
            </span>
          )}
        </label>
      )}
      <div className={ccInput.wrapper}>
        {prefix}
        <input
          className={inputClasses}
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

      {props.helpText && <HelpText helpId={helpId} helpText={helpText} isInvalid={isInvalid} />}
    </div>
  );
});
