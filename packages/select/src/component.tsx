import * as React from 'react';
import { select as ccSelect, label as ccLabel, helpText as ccHelpText } from '@warp-ds/component-classes';
import { useId } from '../../utils/src';
import { classNames } from '@chbphone55/classnames';
import type { SelectProps } from './props';

const setup = (props) => {
  const {
    className,
    invalid,
    id,
    hint,
    always,
    label,
    style,
    optional,
    readOnly,
    disabled,
    ...rest
  } = props;

  const helpId = hint ? `${id}__hint` : undefined;

  return {
    attrs: {
      div: {
        style,
      },
      label: {
        htmlFor: id,
        children: label,
      },
      select: {
        ...rest,
        'aria-describedby': helpId,
        'aria-errormessage': invalid && helpId ? helpId : undefined,
        'aria-invalid': invalid,
        id,
      },
      optional,
      help:
        always || invalid
          ? {
              children: hint,
              id: helpId,
            }
          : null,
    },
    classes: classNames({
      [ccSelect.wrapper]: true,
      className
    }),
    selectClasses:  classNames({
      [ccSelect.default]: true,
      [ccSelect.invalid]: invalid,
      [ccSelect.disabled]: disabled,
      [ccSelect.readOnly]: readOnly
    }),
    selectWrapClasses: classNames({
      [ccSelect.selectWrapper]: true,
    }),
    helpTextClasses: classNames({
      [ccHelpText.helpText]: true,
      [ccHelpText.helpTextInvalid]: invalid
    }),
    labelClasses: classNames({
      [ccLabel.label]: true,
      [ccLabel.labelValid]: !invalid,
      [ccLabel.labelInvalid]: invalid
    }),
    chevronClasses: classNames({
      [ccSelect.chevron]: true,
      [ccSelect.chevronDisabled]: disabled,
    })
  };
};

function Select(props: SelectProps, ref: React.Ref<HTMLSelectElement>) {
  const id = useId(props.id);
  const { attrs, classes, selectClasses, selectWrapClasses, helpTextClasses, labelClasses, chevronClasses } = setup({ ...props, id });
  const { div, label, select, help, optional } = attrs;

  return (
    <div className={classes} {...div}>
      {label.children && (
        <label htmlFor={label.htmlFor} className={labelClasses}>
          {label.children}
          {optional && (
            <span className={ccLabel.optional}>
              (valgfritt)
            </span>
          )}
        </label>
      )}
      <div className={selectWrapClasses}>
        <select ref={ref} {...select} className={selectClasses}/>
          <div
            className={classNames(chevronClasses)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M2.5 5.5L8 11L13.5 5.5"
              />
            </svg>
          </div>
      </div>
      {help && <div className={helpTextClasses} {...help} />}
    </div>
  );
}

const _Select = React.forwardRef(Select);
export { _Select as Select };
