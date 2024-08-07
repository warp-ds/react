import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { switchToggle as ccSwitch } from '@warp-ds/css/component-classes';

import { SwitchProps } from './props.js';

export function Switch({
  id,
  value,
  disabled,
  onClick,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...attrs
}: SwitchProps) {
  const baseClasses = classNames([ccSwitch.base, disabled && ccSwitch.disabled]);

  const trackClasses = classNames([
    ccSwitch.track,
    disabled && ccSwitch.trackDisabled,
    !disabled && (value ? ccSwitch.trackActive : ccSwitch.trackInactive),
  ]);

  const handleClasses = classNames([
    ccSwitch.handle,
    value && ccSwitch.handleSelected,
    disabled ? ccSwitch.handleDisabled : ccSwitch.handleNotDisabled,
  ]);

  return (
    <div>
      <button
        id={id}
        type="button"
        role="switch"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-checked={value}
        onClick={onClick}
        className={baseClasses}
        aria-disabled={disabled}
        disabled={disabled}
        {...attrs}>
        <span data-testid="track" className={trackClasses} />
        <span data-testid="handle" className={handleClasses} />
      </button>
    </div>
  );
}
