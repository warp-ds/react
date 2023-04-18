import React, { forwardRef } from 'react';
import { classNames } from '@chbphone55/classnames';
import { input as ccInput, label as ccLabel, helpText as ccHelpText } from '@warp-ds/component-classes';
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
              [ccLabel.label]: true,
              [ccLabel.labelValid]: !isInvalid,
              [ccLabel.labelInvalid]: isInvalid
            })} >
              {label}
              {optional && (
                <span className={ccLabel.optional}>
                  (valgfritt)
                </span>
              )}
            </label>
          )}
          <div className={ccInput.wrapper}>
            <input
            className={classNames({
              [ccInput.default]: true,
              [ccInput.invalid]: isInvalid,
              [ccInput.disabled]: disabled,
              [ccInput.readOnly]: readOnly,
              [ccInput.placeholder]: !!props.placeholder,
              [ccInput.suffix]: hasSuffix,
              [ccInput.prefix]: hasPrefix,    
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
