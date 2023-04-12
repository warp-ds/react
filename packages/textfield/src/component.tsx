import React, { forwardRef } from 'react';
import { classNames } from '@chbphone55/classnames';
import { input, label as l, helpText as h } from '@warp-ds/component-classes';
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

    return (
        <div>
          {label && (
            <label htmlFor={id} className={classNames({
              [l.label]: true,
              [l.labelValid]: !isInvalid,
              [l.labelInvalid]: isInvalid
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
              [h.helpText]: true,
              [h.helpTextValid]: !isInvalid,
              [h.helpTextInvalid]: isInvalid
            })} id={helpId}>
              {helpText}
            </div>
          )}
        </div>
    );
  },
);
