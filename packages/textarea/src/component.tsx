import { classNames } from '@chbphone55/classnames';
import React, { forwardRef, useRef } from 'react';
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
      <div
        style={style}
      >
        {label && (
          <label htmlFor={id}>
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
            [input.helpText]: true,
            [input.helpTextValid]: !isInvalid,
            [input.helpTextInvalid]: isInvalid
          })}
          >{helpText}</div>}
      </div>
    );
  },
);
