import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { helpText as ccHelpText, label as ccLabel, toggle as ccToggle } from '@warp-ds/css/component-classes';

import { activateI18n } from '../../i18n.js';
import { useId } from '../../utils/src/index.js';

import { Item } from './item.js';
import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { ToggleProps } from './props.js';
import type { ToggleEntry } from './props.js';

function Title({ id, title, optional }) {
  activateI18n(enMessages, nbMessages, fiMessages, daMessages);

  return (
    <legend id={`${id}__title`} className={ccLabel.base}>
      {title}
      {optional && (
        <span className={ccLabel.optional}>
          {i18n._(
            /*i18n*/ {
              id: 'toggle.label.optional',
              message: '(optional)',
              comment: 'Shown behind label when marked as optional',
            },
          )}
        </span>
      )}
    </legend>
  );
}

function HelpText({ isInvalid, helpId, helpText }: any) {
  return (
    <div
      id={helpId}
      className={classNames({
        [ccHelpText.base]: true,
        [ccHelpText.color]: !isInvalid,
        [ccHelpText.colorInvalid]: isInvalid,
      })}>
      {helpText}
    </div>
  );
}

export function Toggle(props: ToggleProps) {
  const id = useId();
  const helpId = props.helpText ? `${id}__hint` : undefined;
  const isRadio = props.type === 'radio';
  const isCheckbox = props.type === 'checkbox';
  const isRadioButton = props.type === 'radio-button';
  const isRadioGroup = isRadio || isRadioButton;
  const isIndeterminate = isCheckbox && props.indeterminate;
  const isInvalid = props.invalid;
  const isDisabled = !isRadioButton && props.disabled;
  const isControlled = props.selected !== undefined || props.checked !== undefined;

  const labelClasses = classNames({
    [ccToggle.label]: !isRadioButton,
    [ccToggle.labelBefore]: !isRadioButton && !isIndeterminate,
    [ccToggle.checkbox]: isCheckbox && !isIndeterminate && !isInvalid && !isDisabled,
    [ccToggle.checkboxInvalid]: isCheckbox && !isIndeterminate && isInvalid && !isDisabled,
    [ccToggle.checkboxDisabled]: isCheckbox && !isIndeterminate && !isInvalid && isDisabled,
    [ccToggle.indeterminate]: isCheckbox && isIndeterminate && !isInvalid && !isDisabled,
    [ccToggle.indeterminateInvalid]: isCheckbox && isIndeterminate && isInvalid && !isDisabled,
    [ccToggle.indeterminateDisabled]: isCheckbox && isIndeterminate && !isInvalid && isDisabled,
    [ccToggle.radio]: isRadio && !isInvalid && !isDisabled,
    [ccToggle.radioInvalid]: isRadio && isInvalid && !isDisabled,
    [ccToggle.radioDisabled]: isRadio && !isInvalid && isDisabled,
    [ccToggle.radioButtonsLabel]: isRadioButton,
    [ccToggle.radioButtonsRegular]: isRadioButton && !props.small,
    [ccToggle.radioButtonsSmall]: isRadioButton && props.small,
  });
  const inputClasses = classNames({
    [ccToggle.input]: true,
    [ccToggle.a11y]: true,
  });

  const wrapperClasses = classNames(props.className, {
    [ccToggle.wrapper]: true,
    [ccToggle.wrapperRadioButtons]: isRadioButton && !props.equalWidth,
    [ccToggle.wrapperRadioButtonsJustified]: isRadioButton && props.equalWidth,
  });

  const groupClasses = classNames({
    [ccToggle.radioButtonsGroup]: true,
    [ccToggle.radioButtonsGroupJustified]: props.equalWidth,
  });

  return (
    <fieldset
      role={isRadioGroup ? 'radiogroup' : undefined}
      aria-invalid={isRadioGroup ? isInvalid : undefined}
      aria-errormessage={isRadioGroup && isInvalid ? helpId : undefined}
      aria-describedby={helpId}
      className={ccToggle.field}>
      {props.title && <Title id={id} title={props.title} optional={props.optional} />}
      <div className={wrapperClasses}>
        {!props.options && props.label ? (
          <Item
            controlled={isControlled}
            label={props.label}
            inputClassName={inputClasses}
            labelClassName={labelClasses}
            checked={props.checked}
            defaultChecked={props.defaultChecked}
            indeterminate={props.indeterminate}
            // @ts-ignore TODO: typecheck
            onChange={(e: boolean) => props.onChange(e)}
            name={`${id}:toggle`}
            key={`${id + props.type}`}
            invalid={isInvalid}
            disabled={isDisabled}
            helpId={helpId}
            type={isRadioGroup ? 'radio' : 'checkbox'}
            noVisibleLabel={props.noVisibleLabel}
          />
        ) : (
          props.options &&
          props.options.map((option, i) => (
            <Item
              controlled={isControlled}
              checked={props.selected?.some((s) => s.value === option.value)}
              defaultChecked={props.defaultSelected?.some((s) => s.value === option.value)}
              inputClassName={inputClasses}
              labelClassName={labelClasses}
              groupClassName={groupClasses}
              option={option}
              // @ts-ignore TODO: typecheck
              onChange={(e: ToggleEntry) => props.onChange(e)}
              name={`${id}:toggle`}
              key={`${id + i + props.type}`}
              invalid={isInvalid}
              disabled={isDisabled}
              helpId={helpId}
              type={isRadioGroup ? 'radio' : 'checkbox'}
              noVisibleLabel={props.noVisibleLabel}
              multiple
            />
          ))
        )}
      </div>

      {props.helpText && <HelpText helpId={helpId} helpText={props.helpText} isInvalid={isInvalid} />}
    </fieldset>
  );
}
