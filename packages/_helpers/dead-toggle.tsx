import React from 'react';
import { classNames } from '@chbphone55/classnames';
import { toggle as ccToggle } from '@warp-ds/css/component-classes';
import { Item } from '../toggle/src/item';

export interface DeadToggleProps {
  /**
   * Passes radio type to the underlying toggle
   */
  radio?: boolean;

  /**
   * Passes checkbox type to the underlying toggle
   */
  checkbox?: boolean;

  /**
   * Value for the input
   */
  value?: string;

  /**
   * Whether the toggle is checked
   */
  checked?: boolean;

  /**
   * Additional classnames to the toggle wrapper
   */
  className?: string;

  /**
   * Additional classnames to the toggle label
   */
  labelClassName?: string;
}

export function DeadToggle(props: DeadToggleProps) {
  const type = props.radio ? 'radio' : 'checkbox';

  const labelClasses = classNames(props.labelClassName, {
    [ccToggle.label]: true,
    [ccToggle.focusable]: true,
    [ccToggle.noContent]: true,
    [`${ccToggle.radio} ${ccToggle.labelRadioBorder} ${ccToggle.radioChecked}`]: props.radio,
    [`${ccToggle.checkbox} ${ccToggle.labelCheckboxBorder} ${ccToggle.checkboxChecked}`]: props.checkbox,
    [ccToggle.icon]: props.checkbox,
  });
  const inputClasses = classNames({
    [ccToggle.input]: true,
    [ccToggle.a11y]: true,
    [ccToggle.deadToggleInput]: true,
  });

  const wrapperClasses = {
    [ccToggle.wrapper]: true,
    [ccToggle.deadToggleWrapper]: true,
  };
  return (
    <div
      className={classNames(props.className, wrapperClasses)}
      aria-hidden="true"
    >
      <Item
        type={type}
        className={inputClasses}
        labelClassName={labelClasses}
        name="dead-toggle"
        controlled={true}
        onChange={() => undefined}
        value={props.value}
        checked={props.checked}
      />
    </div>
  );
}
