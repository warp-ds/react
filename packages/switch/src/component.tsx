import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { switchToggle as ccSwitch } from '@warp-ds/css/component-classes';

import { SwitchProps } from './props.js';

export function Switch({ id, value, onClick, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, ...attrs }: SwitchProps) {
  const switchFocus = 'focusable rounded-full';

  return (
    <div className={ccSwitch.switch}>
      <button
        id={id}
        type="button"
        role="switch"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-checked={value}
        onClick={onClick}
        className={classNames([ccSwitch.label, switchFocus])}
        {...attrs}>
        <span className={classNames([ccSwitch.track, value ? ccSwitch.trackActive : ccSwitch.trackInactive])} />
        <span
          className={classNames([ccSwitch.handle, ccSwitch.handleNotDisabled], {
            [ccSwitch.handleSelected]: value,
          })}
        />
      </button>
    </div>
  );
}
