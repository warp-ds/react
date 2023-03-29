import React, { forwardRef, Ref } from 'react';
import { button } from '@warp-ds/component-classes';
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
    [button.buttonSecondary]: !buttonTypes.find(b => !!props[b]) || secondary,
    // primary buttons
    [button.buttonPrimary]: primary,
    [button.buttonDestructive]: negative && !quiet,
    // quiet
    [button.buttonFlat]: secondary && quiet,
    [button.buttonDestructiveFlat]: negative && quiet,
    [button.buttonUtilityFlat]: utility && quiet,
    // others
    [button.buttonSmall]: small,
    [button.buttonUtility]: utility && !quiet,
    [button.buttonLink]: link,
    [button.buttonPill]: pill,
    [button.buttonInProgress]: loading,
    [button.buttonIsDisabled]: props.disabled,
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
