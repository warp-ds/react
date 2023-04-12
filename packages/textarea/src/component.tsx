import React, { forwardRef, useRef } from 'react';
import { classNames } from '@chbphone55/classnames';
import { input, helpText as h, label as l } from '@warp-ds/component-classes';
import { useId } from '../../utils/src';
import { TextAreaProps } from './props';
import useTextAreaHeight from './useTextAreaHeight';

/**
 * A textarea component that automatically resizes as content changes.
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, forwardRef) => {
    const {
      className,
      disabled,
      error,
      helpText,
      id: providedId,
      invalid,
      label,
      maximumRows,
      minimumRows,
      readOnly,
      style,
      value,
      optional,
      ...rest
    } = props;

    const id = useId(providedId);
    const ref = useRef<HTMLTextAreaElement | null>(null);

    const helpId = helpText ? `${id}__hint` : undefined;
    const isInvalid = invalid ?? error;

    useTextAreaHeight({
      ref,
      value,
      maximumRows,
      minimumRows,
    });

    return (
      <div
        className={className}
        style={style}
      >
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
        <textarea
          className={classNames({
            [input.default]: true,
            [input.invalid]: isInvalid,
            [input.disabled]: disabled,
            [input.readOnly]: readOnly,
          })}
          {...rest}
          aria-describedby={helpId}
          aria-errormessage={isInvalid && helpId ? helpId : undefined}
          aria-invalid={isInvalid}
          disabled={disabled}
          id={id}
          // Support both our own ref and any forwarded ref
          ref={(node) => {
            ref.current = node;
            if (forwardRef) {
              if (typeof forwardRef === 'function') {
                forwardRef(node);
              } else {
                forwardRef.current = node;
              }
            }
          }}
          readOnly={readOnly}
          value={value}
        />
        {helpText && <div 
          className={classNames({
            [h.helpText]: true,
            [h.helpTextValid]: !isInvalid,
            [h.helpTextInvalid]: isInvalid
          })}
          >{helpText}</div>}
      </div>
    );
  },
);
