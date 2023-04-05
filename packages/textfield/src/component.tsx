import { classNames } from '@chbphone55/classnames';
import React, { forwardRef } from 'react';
import { useId } from '../../utils/src';
import { TextFieldProps } from './props';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
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

    const id = useId(providedId);

    const helpId = helpText ? `${id}__hint` : undefined;
    const isInvalid = invalid || error;

    const hasSuffix = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.props.suffix,
    );
    const hasPrefix = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.props.prefix,
    );

    const input = {
      default: 'block text-16 mb-0 leading-22 i-text-$color-input-text-filled i-bg-$color-input-background i-border-$color-input-border hover:i-border-$color-input-border-hover active:i-border-$color-input-border-active rounded-4 py-12 px-8 block border-1 w-full focusable',
      optional: 'pl-8 font-normal text-14 i-text-$color-label-optional-text',
      disabled: 'i-bg-$color-input-background-disabled i-border-$color-input-border-disabled i-text-$color-input-text-disabled pointer-events-none',
      invalid: 'focusable i-border-$color-input-border-error i-text-$color-input-text-error',
      readOnly: 'pl-0 bg-transparent border-0 pointer-events-none i-text-$color-input-text-read-only',
      label: 'antialiased block relative text-14 font-bold pb-4 cursor-pointer',
      labelValid: 'i-text-$color-label-text',
      labelInvalid: 'i-text-$color-helptext-error-text',
      helpText: 'text-12 mt-4 block',
      helpTextValid: 'i-text-$color-helptext-text',
      helpTextInvalid: 'i-text-$color-helptext-error-text'
    }

    return (
        <div>
          {label && (
            <label htmlFor={id} className={classNames({
              [input.label]: true,
              [input.labelValid]: !isInvalid,
              [input.labelInvalid]: isInvalid
            })} >
              {label}
              {optional && (
                <span className={input.optional}>
                  (valgfritt)
                </span>
              )}
            </label>
          )}
          <div className="relative">
            <input
            className={classNames({
              [input.default]: true,
              [input.invalid]: isInvalid,
              [input.disabled]: disabled,
              [input.readOnly]: readOnly,
              'pr-40': hasSuffix,
              'pl-40': hasPrefix,    
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
            {children}
          </div>

          {helpText && (
            <div className={classNames({
              [input.helpText]: true,
              [input.helpTextValid]: !isInvalid,
              [input.helpTextInvalid]: isInvalid
            })} id={helpId}>
              {helpText}
            </div>
          )}
        </div>
    );
  },
);
