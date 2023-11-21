import React, { forwardRef } from 'react';
import { i18n } from '@lingui/core';
import { classNames } from '@chbphone55/classnames';
import { label as ccLabel, helpText as ccHelpText } from '@warp-ds/css/component-classes';
import { useId } from '../../utils/src';
import { TextFieldProps } from './props';
import { messages as nbMessages} from './locales/nb/messages.mjs';
import { messages as enMessages} from './locales/en/messages.mjs';
import { messages as fiMessages} from './locales/fi/messages.mjs';
import { activateI18n } from '../../i18n';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
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

    const suffix = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.props.suffix,
    );
    const prefix = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.props.prefix,
    );

    return (
        <div 
          className={className}
          style={style}
        >
          <style>{`
            .s-outline-focused {
              outline-color: var(--w-s-color-focused);
            }`}
          </style>
          {label && (
            <label htmlFor={id} className={classNames({
              [ccLabel.label]: true,
              [ccLabel.labelInvalid]: isInvalid
            })} >
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
          <div className="s-outline-focused focus-within:outline focus-within:-outline-offset-2 focus-within:outline-2 relative i-bg-$color-input-background i-border-$color-input-border hover:i-border-$color-input-border-hover rounded-4 overflow-hidden border-1 flex">
            {prefix}
            <input
            className={`text-m mb-0 leading-m i-text-$color-input-text-filled py-12 ${(prefix && suffix) ? "px-0" : prefix ? "pl-0 pr-8" : suffix ? "pl-8 pr-0" : "px-8"} block w-full caret-current outline-0`}
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
            <div className={classNames({
              [ccHelpText.helpText]: true,
              [ccHelpText.helpTextInvalid]: isInvalid
            })} id={helpId}>
              {helpText}
            </div>
          )}
        </div>
    );
  },
);
