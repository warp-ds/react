import React from 'react';

import { toggle as ccToggle } from '@warp-ds/css/component-classes';

import { useId } from '../../utils/src/index.js';

import { ToggleEntry } from './props.js';

interface ItemProps extends Pick<HTMLInputElement, 'type' | 'name'> {
  controlled: boolean;
  option?: ToggleEntry;
  children?: React.ReactNode;
  indeterminate?: boolean;
  checked?: boolean;
  value?: string; // value for dead toggle
  defaultChecked?: boolean;
  invalid?: boolean;
  helpId?: string;
  noVisibleLabel?: boolean;
  label?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  groupClassName?: string;
  multiple?: boolean;
  disabled?: boolean;
  onChange: (data: ToggleEntry | boolean) => void;
}

export function Item({
  controlled,
  option,
  children,
  label,
  invalid,
  value,
  helpId,
  indeterminate = false,
  checked,
  defaultChecked,
  noVisibleLabel,
  labelClassName,
  inputClassName,
  groupClassName,
  multiple,
  disabled,
  ...props
}: ItemProps) {
  const id = useId();
  const checkboxRef = React.useRef<HTMLInputElement | null>(null);

  const labelContent = !children ? label || option?.label : children;

  React.useEffect(() => {
    if (!checkboxRef.current) {
      return;
    }
    // 'indeterminate' state of checkbox cannot be assigned via HTML: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
    checkboxRef.current.indeterminate = indeterminate;
  }, [indeterminate, checkboxRef]);

  const Item = (
    <>
      <input
        ref={checkboxRef}
        id={id}
        checked={controlled ? checked : undefined}
        defaultChecked={defaultChecked}
        aria-invalid={invalid}
        aria-errormessage={invalid ? helpId : undefined}
        value={label ? undefined : value ?? undefined}
        className={inputClassName}
        disabled={disabled}
        data-testid={option?.value}
        {...props}
        onChange={(e) => props.onChange(label ? e.target.checked : option ? { label: option?.label, value: option?.value } : false)}
      />

      <label htmlFor={id} className={labelClassName}>
        {noVisibleLabel ? <span className={ccToggle.a11y}>{labelContent}</span> : labelContent}
      </label>
    </>
  );

  if (multiple) {
    return <div className={groupClassName}>{Item}</div>;
  }

  return Item;
}
