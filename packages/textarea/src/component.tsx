import React, { forwardRef, useRef } from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { input as ccInput, label as ccLabel } from '@warp-ds/css/component-classes';

import { HelpText } from '../../_helpers/helpText.js';
import { activateI18n } from '../../i18n.js';
import { useId } from '../../utils/src/index.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { TextAreaProps } from './props.js';
import useTextAreaHeight from './useTextAreaHeight.js';
/**
 * A textarea component that automatically resizes as content changes.
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, forwardRef) => {
  const {
    className,
    disabled,
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
    placeholder,
    ...rest
  } = props;

  activateI18n(enMessages, nbMessages, fiMessages, daMessages);

  const id = useId(providedId);
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const helpId = helpText ? `${id}__hint` : undefined;
  const isInvalid = invalid;

  const textareaClasses = classNames([
    ccInput.base,
    ccInput.textArea,
    !!placeholder && ccInput.placeholder,
    !isInvalid && !disabled && !readOnly && ccInput.default,
    isInvalid && !disabled && !readOnly && ccInput.invalid,
    !isInvalid && disabled && !readOnly && ccInput.disabled,
    !isInvalid && !disabled && readOnly && ccInput.readOnly,
  ]);

  useTextAreaHeight({
    ref,
    value,
    maximumRows,
    minimumRows,
  });

  return (
    <div className={className} style={style}>
      {label && (
        <label htmlFor={id} className={ccLabel.base}>
          {label}
          {optional && (
            <span className={ccLabel.optional}>
              {i18n._({
                id: 'textarea.label.optional',
                message: '(optional)',
                comment: 'Shown behind label when marked as optional',
              })}
            </span>
          )}
        </label>
      )}
      <textarea
        className={textareaClasses}
        {...rest}
        placeholder={placeholder}
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
      {props.helpText && <HelpText helpId={helpId} helpText={helpText} isInvalid={isInvalid} />}
    </div>
  );
});
