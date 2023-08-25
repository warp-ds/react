import React, { forwardRef, Ref } from 'react';
import { button as ccButton } from '@warp-ds/css/component-classes';
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

  const buttonVariants = {
    buttonInProgress:
      'border-transparent! animate-inprogress i-text-$color-button-loading-text! pointer-events-none i-bg-$color-button-loading-background!', // .button--in-progress, a.button--in-progress:visited
    buttonFlat:
      'border-0!  rounded-8 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-quiet-background! i-text-$color-button-quiet-text! hover:i-bg-$color-button-quiet-background-hover! active:i-bg-$color-button-quiet-background-active!', // .button--quiet, .button--flat
    // Disabled
    buttonIsDisabled:
      'font-bold max-w-max justify-center transition-colors ease-in-out i-bg-$color-button-disabled-background! i-text-$color-button-disabled-text cursor-default pointer-events-none', // .button:disabled, .button--is-disabled
    primaryDefault: 'border-0 rounded-8 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-primary-text hover:i-text-$color-button-primary-text i-bg-$color-button-primary-background hover:i-bg-$color-button-primary-background-hover! active:i-bg-$color-button-primary-background-active',
    secondaryDefault: 'border-2 font-bold rounded-8 max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-secondary-text hover:i-text-$color-button-secondary-text i-border-$color-button-secondary-border i-bg-$color-button-secondary-background hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active'
  }
    
  const ccButton = {
    // Buttontypes
    buttonSecondary:
    'py-10 px-14 text-m leading-[24] ' + buttonVariants.secondaryDefault,
    buttonSecondarySmall:
    'py-6 px-16 text-xs ' + buttonVariants.secondaryDefault,
    buttonSecondaryQuiet:
    'py-10 px-14 text-m leading-[24] ' + buttonVariants.buttonFlat ,
    buttonSecondarySmallQuiet:
    'py-6 px-16 text-xs ' + buttonVariants.buttonFlat,
    buttonSecondaryLoading:
    'py-10 px-14 text-m leading-[24] ' + buttonVariants.secondaryDefault + buttonVariants.buttonInProgress,
    buttonSecondarySmallLoading:
    'py-6 px-16 text-xs ' + buttonVariants.secondaryDefault + buttonVariants.buttonInProgress,
    buttonSecondarySmallQuietLoading:
    'py-6 px-16 text-xs ' + buttonVariants.buttonFlat + buttonVariants.buttonInProgress,
    buttonSecondaryQuietLoading:
    'py-10 px-14 text-m leading-[24] ' + buttonVariants.buttonFlat + buttonVariants.buttonInProgress,
    buttonPrimary:
      'py-12 px-16 text-m leading-[24] ' + buttonVariants.primaryDefault,
    buttonPrimaryQuiet:
      'py-12 px-16 text-m leading-[24] ' + buttonVariants.buttonFlat,
    buttonPrimarySmall:
      'py-8 px-16 text-xs ' + buttonVariants.primaryDefault,
    buttonPrimarySmallQuiet:
      'py-8 px-16 text-xs ' + buttonVariants.buttonFlat,
    buttonPrimaryLoading:
      'py-12 px-16 text-m leading-[24] ' + buttonVariants.primaryDefault + buttonVariants.buttonInProgress,
    buttonPrimarySmallLoading:
      'py-8 px-16 text-xs  ' + buttonVariants.primaryDefault + buttonVariants.buttonInProgress,
    buttonPrimaryQuietLoading:
      'py-12 px-16 text-m leading-[24]  ' + buttonVariants.buttonFlat + buttonVariants.buttonInProgress,
    buttonPrimarySmallQuietLoading:
      'py-8 px-16 text-xs  ' + buttonVariants.buttonFlat + buttonVariants.buttonInProgress,
    a11y: 'sr-only',
  };

  const classes = classNames(props.className, {
    [ccButton.buttonSecondary]: secondary && !small && !quiet && !loading,
    [ccButton.buttonSecondarySmall]: secondary && small && !quiet && !loading,
    [ccButton.buttonSecondarySmallLoading]: secondary && small && !quiet && loading,
    [ccButton.buttonSecondarySmallQuiet]: secondary && small && quiet && !loading,
    [ccButton.buttonSecondarySmallQuietLoading]: secondary && small && quiet && loading,
    [ccButton.buttonSecondaryQuiet]: secondary && !small && quiet && !loading,
    [ccButton.buttonSecondaryQuietLoading]: secondary && !small && quiet && loading,
    [ccButton.buttonSecondaryLoading]: secondary && !small && !quiet && loading,

    [ccButton.buttonPrimary]: primary && !small && !quiet && !loading,
    [ccButton.buttonPrimarySmall]: primary && small && !quiet && !loading,
    [ccButton.buttonPrimarySmallQuiet]: primary && small && quiet && !loading,
    [ccButton.buttonPrimarySmallLoading]: primary && small && !quiet && loading,
    [ccButton.buttonPrimarySmallQuietLoading]: primary && small && quiet && loading,
    [ccButton.buttonPrimaryQuiet]: primary && !small && quiet && !loading,
    [ccButton.buttonPrimaryQuietLoading]: primary && !small && quiet && loading,
    [ccButton.buttonPrimaryLoading]: primary && !small && !quiet && loading,
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
