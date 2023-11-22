import React from 'react';
import { i18n } from '@lingui/core';
import { label as ccLabel, helpText as ccHelpText, toggle as ccToggle } from '@warp-ds/css/component-classes';
import { useId } from '../../utils/src/index.js';
import { ToggleEntry, ToggleProps } from './props.js';
import { classNames } from '@chbphone55/classnames';
import { Item } from './item.js';
import { messages as nbMessages} from './locales/nb/messages.mjs';
import { messages as enMessages} from './locales/en/messages.mjs';
import { messages as fiMessages} from './locales/fi/messages.mjs';
import { activateI18n } from '../../i18n.js';

function Title({ id, isInvalid, title, optional }) {
  activateI18n(enMessages, nbMessages, fiMessages);

  return (
    <legend
      id={`${id}__title`}
      className={classNames({
        [ccLabel.label]: true,
        [ccLabel.labelInvalid]: isInvalid,
      })}
    >
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
        [ccHelpText.helpText]: true,
        [ccHelpText.helpTextInvalid]: isInvalid
      })}
    >
      {helpText}
    </div>
  );
}

export function Toggle(props: ToggleProps) {
  const id = useId();
  const helpId = props.helpText ? `${id}__hint` : undefined;
  const isInvalid = props.invalid;
  const isRadio = props.type === 'radio';
  const isCheckbox = props.type === 'checkbox';
  const isRadioButton = props.type === 'radio-button';
  const isRadioGroup = isRadio || isRadioButton;
  const isControlled =
    props.selected !== undefined || props.checked !== undefined;  

  const labelClasses = classNames({
    [ccToggle.indeterminate]: props.indeterminate,
    [ccToggle.label]: !isRadioButton,
    [ccToggle.focusable]: !isRadioButton,
    [ccToggle.noContent]: !props.indeterminate,
    [`${ccToggle.radio} ${ccToggle.labelRadioBorder} ${ccToggle.radioChecked}`]: isRadio,
    [ccToggle.radioInvalid]: isRadio && isInvalid,
    [`${ccToggle.checkbox} ${ccToggle.labelCheckboxBorder} ${ccToggle.checkboxChecked}`]: isCheckbox,
    [ccToggle.icon]: isCheckbox && !props.indeterminate,
    [ccToggle.checkboxInvalid]: isCheckbox && isInvalid,
    [ccToggle.radioButtonsLabel]: isRadioButton,
    [ccToggle.radioButtonsLabelSmall]: props.small,
  });
  const inputClasses = classNames({
    [ccToggle.input]: true,
    [ccToggle.a11y]: true,
  });

  const wrapperClasses = classNames(props.className, {
    [ccToggle.wrapper]: true,
    [`${ccToggle.radioButtons} ${ccToggle.focusableWithin}`]: isRadioButton,
    [ccToggle.radioButtonsJustified]: props.equalWidth,
  });

  const groupClasses = classNames({
    [ccToggle.radioButtonsGroup]: true,
    [ccToggle.radioButtonsGroupJustified]: props.equalWidth,
  })

  return (
    <fieldset
      role={isRadioGroup ? 'radiogroup' : undefined}
      aria-invalid={isRadioGroup ? isInvalid : undefined}
      aria-errormessage={isRadioGroup && isInvalid ? helpId : undefined}
      aria-describedby={helpId}
      className={ccToggle.field}
    >
      {props.title && (
        <Title
          id={id}
          title={props.title}
          isInvalid={isInvalid}
          optional={props.optional}
        />
      )}
      <div
        className={wrapperClasses}
      >
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
              defaultChecked={props.defaultSelected?.some(
                (s) => s.value === option.value,
              )}
              inputClassName={inputClasses}
              labelClassName={labelClasses}  
              groupClassName={groupClasses}  
              option={option}
              // @ts-ignore TODO: typecheck
              onChange={(e: ToggleEntry) => props.onChange(e)}
              name={`${id}:toggle`}
              key={`${id + i + props.type}`}
              invalid={isInvalid}
              helpId={helpId}
              type={isRadioGroup ? 'radio' : 'checkbox'}
              noVisibleLabel={props.noVisibleLabel}
              multiple
            />
          ))
        )}
      </div>

      {props.helpText && (
        <HelpText
          helpId={helpId}
          helpText={props.helpText}
          isInvalid={isInvalid}
        />
      )}
    </fieldset>
  );
}
