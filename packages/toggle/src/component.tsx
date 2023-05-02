import React from 'react';
import { label as ccLabel, helpText as ccHelpText } from '@warp-ds/component-classes';
import { useId } from '../../utils/src';
import { ToggleEntry, ToggleProps } from './props';
import { classNames } from '@chbphone55/classnames';
import { Item } from './item';

function Title({ id, isInvalid, title, optional }) {
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
          (valgfritt)
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
  const isRadioButton = props.type === 'radio-button';
  const isRadioGroup = props.type === 'radio' || isRadioButton;
  const isControlled =
    props.selected !== undefined || props.checked !== undefined;
  const toggle = {
    field: 'text-16 relative',
    wrapper: 'relative py-1',
    input: 'sr-only peer',
    inputDisabled: 'pointer-events-none',
    focusable: 'peer-focus:focusable:focus peer-focus-visible:focusable:focus-visible peer-not-focus-visible:focusable:focus:not(:focus-visible)',
    focusableWithin: 'focus-within:focusable:focus focus-within:focusable:focus-visible',
    label: `cursor-pointer text-16 i-text-$color-label-text py-2 pl-28 select-none relative block before:block before:border before:i-border-$color-checkbox-border before:absolute before:transition-all before:left-0 before:w-20 before:h-20 before:top-2`,
    noContent: `before:content-['']`,
    indeterminate: `before:i-text-$color-text-inverted before:text-center before:font-bold before:content-['–'] peer-indeterminate:before:i-border-$color-checkbox-border-active peer-indeterminate:before:i-bg-$color-checkbox-background-active peer-indeterminate:hover:before:i-border-$color-checkbox-border-hover peer-indeterminate:hover:before:i-bg-$color-checkbox-background-active-hover`,
    labelDisabled: 'pointer-events-none',
    checkbox: `peer-checked:before:i-border-$color-checkbox-border-active peer-checked:before:i-bg-$color-checkbox-background-active peer-checked:peer-hover:before:i-border-$color-checkbox-border-active-hover peer-checked:peer-hover:before:i-bg-$color-checkbox-background-active-hover before:rounded-2 hover:before:i-border-$color-checkbox-border-hover hover:before:i-bg-$color-checkbox-background-hover`,
    checkboxInvalid: 'before:i-bg-$color-checkbox-negative-background hover:before:i-bg-$color-checkbox-negative-background-hover before:i-border-$color-checkbox-negative-border! hover:before:color-checkbox-negative-border-hover! peer-checked:before:i-bg-$color-checkbox-negative-background-active! peer-checked:peer-hover:before:i-bg-$color-checkbox-negative-background-active-hover! peer-checked:peer-hover:before:i-border-$color-checkbox-negative-border-active-hover!',
    labelCheckboxColors: 'i-bg-$color-checkbox-background i-border-$color-checkbox-border',
    radio: 'before:rounded-full peer-checked:before:i-border-$color-radio-border-active peer-checked:before:border-[6]! peer-checked:peer-hover:before:i-border-$color-radio-border-active-hover peer-hover:before:i-border-$color-radio-border-hover peer-hover:before:i-bg-$color-radio-background-hover',
    radioInvalid: 'before:i-bg-$color-radio-negative-background peer-hover:before:i-bg-$color-radio-negative-background-hover! before:i-border-$color-radio-negative-border! peer-hover:before:color-radio-negative-border-hover! peer-checked:before:i-border-$color-radio-negative-border-active! peer-checked:peer-hover:before:i-border-$color-radio-negative-border-active-hover! ',
    labelRadioColors: 'i-bg-$color-radio-background i-border-$color-radio-border',
    segmentControl: 'inline-flex relative font-bold rounded-8',
    scLabel: 'peer-hover:i-bg-$color-button-group-background-hover peer-checked:i-text-$color-button-group-text-active peer-checked:i-bg-$color-button-group-background-active peer-checked:i-border-$color-button-group-border-active block relative text-14 font-bold pb-4 cursor-pointer i-text-$color-button-group-text text-center i-bg-$color-background border-2 i-border-$color-button-group-border py-10 px-14 group-first-of-type:rounded-tl-8 group-first-of-type:rounded-bl-8 group-last-of-type:rounded-tr-8 group-last-of-type:rounded-br-8 group-not-last-of-type:border-r-0 ',
    scJustified: 'flex',
    scLabelJustified: 'grow-0 shrink-0 basis-auto',
    scLabelSmall: 'text-12 py-[5px]! px-[8px]!',
    icon: `peer-checked:before:bg-center before:bg-[var(--x-form-check-mark)]`,
    a11y: 'sr-only',
  };

  const labelClasses = 
    classNames({
      [toggle.label]: !isRadioButton,
      [toggle.focusable]: !isRadioButton,
      [toggle.noContent]: !props.indeterminate,
      [toggle.indeterminate]: props.indeterminate,
      [`${toggle.radio} ${toggle.labelRadioColors}`]: props.type === 'radio',
      [toggle.radioInvalid]: props.type === 'radio' && isInvalid,
      [`${toggle.checkbox} ${toggle.labelCheckboxColors} ${toggle.icon}`]: props.type === 'checkbox',
      [toggle.checkboxInvalid]: props.type === 'checkbox' && isInvalid,
      [toggle.scLabel]: isRadioButton,
      [toggle.scLabelJustified]: props.equalWidth,
      [toggle.scLabelSmall]: props.small,
    });
  const inputClasses = 
    classNames({
      [toggle.input]: true,
    });

  return (
    <fieldset
      role={isRadioGroup ? 'radiogroup' : undefined}
      aria-invalid={isRadioGroup ? isInvalid : undefined}
      aria-errormessage={isRadioGroup && isInvalid ? helpId : undefined}
      aria-describedby={helpId}
      className={toggle.field}
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
        className={classNames(props.className, {
          [toggle.wrapper]: true,
          [`${toggle.segmentControl} ${toggle.focusableWithin}`]: isRadioButton,
          [toggle.scJustified]: props.equalWidth,
        })}
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
              option={option}
              // @ts-ignore TODO: typecheck
              onChange={(e: ToggleEntry) => props.onChange(e)}
              name={`${id}:toggle`}
              key={`${id + i + props.type}`}
              invalid={isInvalid}
              helpId={helpId}
              type={isRadioGroup ? 'radio' : 'checkbox'}
              noVisibleLabel={props.noVisibleLabel}
              multiple={!isRadioButton}
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
