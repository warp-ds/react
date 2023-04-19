import * as React from 'react';
import { label as ccLabel, helpText as ccHelpText } from '@warp-ds/component-classes';
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
  const selectChevron = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='i-bg-$color-select-icon' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`;

  const select = {
    default: 'block text-16 mb-0 leading-22 i-text-$color-select-text i-bg-$color-select-background i-border-$color-select-border hover:i-border-$color-select-border-hover active:i-border-$color-select-border-active rounded-4 py-12 px-8 block border-1 w-full focusable appearance-none pr-32 cursor-pointer focus:caret',
    disabled: 'i-bg-$color-select-background-disabled i-border-$color-select-border-disabled hover:i-border-$color-select-border-disabled! active:i-border-$color-select-border-disabled! i-text-$color-select-text-disabled pointer-events-none',
    invalid: 'focusable i-border-$color-select-border-negative',
    readOnly: 'pl-0 bg-transparent border-0 pointer-events-none before:hidden',
    wrapper: 'relative',
    wrap: `relative before:block before:absolute before:right-0 before:bottom-0 before:w-32 before:h-full before:content-[''] before:bg-[${selectChevron}] before:bg-no-repeat before:bg-center before:pointer-events-none `,
    wrapDisabled: 'before:opacity-25',
    chevron: 'absolute top-[30%] right-16',
  }
  
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
      [select.wrapper]: true,
      className
    }),
    selectClasses:  classNames({
      [select.default]: true,
      [select.invalid]: invalid,
      [select.disabled]: disabled,
      [select.readOnly]: readOnly
    }),
    selectWrapClasses: classNames({
      [select.wrap]: true,
      [select.wrapDisabled]: disabled,
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
      [select.chevron]: true
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
