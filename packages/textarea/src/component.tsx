import React, { forwardRef, useRef } from 'react';
import { i18n } from '@lingui/core';
import { classNames } from '@chbphone55/classnames';
import { input as ccInput, label as ccLabel, helpText as ccHelpText } from '@warp-ds/css/component-classes';
import { useId } from '../../utils/src/index.js';
import { TextAreaProps } from './props.js';
import useTextAreaHeight from './useTextAreaHeight.js';
import { messages as nbMessages} from './locales/nb/messages.mjs';
import { messages as enMessages} from './locales/en/messages.mjs';
import { messages as fiMessages} from './locales/fi/messages.mjs';
import { activateI18n } from '../../i18n.js';
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
      placeholder,
      ...rest
    } = props;

    activateI18n(enMessages, nbMessages, fiMessages);

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
          <label htmlFor={id} className={ccLabel.label} >
            {label}
            {optional && (
              <span className={ccLabel.optional}>
                {i18n._(
                  /*i18n*/ {
                    id: 'textarea.label.optional',
                    message: '(optional)',
                    comment: 'Shown behind label when marked as optional',
                  },
                )}
              </span>
            )}
          </label>
        )}
        <textarea
          className={classNames({
            [`${ccInput.default} ${ccInput.textArea}`]: true,
            [ccInput.placeholder]: !!placeholder,
            [ccInput.invalid]: isInvalid,
            [ccInput.disabled]: disabled,
            [ccInput.readOnly]: readOnly,
          })}
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
        {helpText && <div 
          className={classNames({
            [ccHelpText.helpText]: true,
            [ccHelpText.helpTextColor]: !isInvalid,
            [ccHelpText.helpTextColorInvalid]: isInvalid
          })}
          id={helpId}
          >{helpText}</div>}
      </div>
    );
  },
);
