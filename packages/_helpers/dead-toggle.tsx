import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { deadToggle as ccDeadToggle } from '@warp-ds/css/component-classes';

import { Item } from '../toggle/src/item.js';

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

  /**
   * Name of the toggle input
   */
  name?: string;
}

export function DeadToggle(props: DeadToggleProps) {
  const type = props.radio ? 'radio' : 'checkbox';

  return (
    <div className={classNames(props.className, ccDeadToggle.wrapper)} aria-hidden="true">
      <Item
        type={type}
        inputClassName={ccDeadToggle.input}
        labelClassName={classNames(props.labelClassName, [
          props.radio && ccDeadToggle.labelRadio,
          props.checkbox && ccDeadToggle.labelCheckbox,
        ])}
        name={props.name ? `${props.name}:dead-toggle` : 'dead-toggle'}
        controlled={true}
        onChange={() => undefined}
        value={props.value}
        checked={props.checked}
      />
    </div>
  );
}
