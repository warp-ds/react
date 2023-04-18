import React, { forwardRef, Ref } from 'react';
import { button as ccButton } from '@warp-ds/component-classes';
import { classNames } from '@chbphone55/classnames';
import type { ButtonProps } from './props';

const buttonTypes = [    
  'primary',
  'secondary',
  'negative',
  'utility',
  'pill',
  'link',
] as const;
export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    primary,
    secondary,
    negative,
    utility,
    quiet,
    small,
    link,
    pill,
    loading,
    ...rest
  } = props;

  const classes = classNames(props.className, {
    [ccButton.buttonSecondary]: secondary && !quiet || !buttonTypes.find(b => !!props[b]),
    // primary buttons
    [ccButton.buttonPrimary]: primary,
    [ccButton.buttonDestructive]: negative && !quiet,
    // quiet
    [ccButton.buttonFlat]: secondary && quiet,
    [ccButton.buttonDestructiveFlat]: negative && quiet,
    [ccButton.buttonUtilityFlat]: utility && quiet,
    // others
    [ccButton.buttonSmall]: small,
    [ccButton.buttonUtility]: utility && !quiet,
    [ccButton.buttonLink]: link,
    [ccButton.buttonPill]: pill,
    [ccButton.buttonInProgress]: loading,
    [ccButton.buttonIsDisabled]: props.disabled,
    ['inline-block']: !!props.href
  });

  return (
    <>
      {props.href ? (
        <a
          href={props.href}
          target={props.target}
          rel={
            props.target === '_blank'
              ? props.rel || 'noopener'
              : undefined
          }
          ref={ref as Ref<HTMLAnchorElement>}
          className={classes}
        >
          {props.children}
        </a>
      ) : (
        <button
          {...rest}
          type={props.type || 'button'}
          ref={ref as Ref<HTMLButtonElement>}
          className={classes}
        >
          {props.children}
        </button>
      )}
      {props.loading ? (
        <span
          className="sr-only"
          role="progressbar"
          aria-valuenow={0}
          aria-valuetext="Laster..."
        />
      ) : null}
    </>
  );
});
