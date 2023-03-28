import React, { forwardRef, Ref } from 'react';
// import { button as c } from '@warp-ds/component-classes';
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

  const button = {
    // Buttontypes
    buttonSecondary:
      'py-10 px-14 border-2 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-secondary-text i-border-$color-button-secondary-border i-bg-$color-button-secondary-background hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active', // .button, .button--secondary, .button--default. using tailwind ease-in-out instead of fabric transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96)
    buttonPrimary:
      'py-12 px-16 border-0 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-primary-text i-bg-$color-button-primary-background hover:i-bg-$color-button-primary-background-hover! active:i-bg-$color-button-primary-background-active', // .button--primary, .button--cta
    buttonFlat:
      'py-12 px-16 border-0! font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-quiet-background i-text-$color-button-quiet-text hover:i-bg-$color-button-quiet-background-hover active:i-bg-$color-button-quiet-background-active', // .button--quiet, .button--flat
    buttonDestructive:
      'py-12 px-16 border-0 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-negative-background i-text-$color-button-negative-text hover:i-bg-$color-button-negative-background-hover! active:i-bg-$color-button-negative-background-active!', // .button--destructive
    buttonDestructiveFlat:
      'py-12 px-16 border-0 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-negative-quiet-background! i-text-$color-button-negative-quiet-text! hover:i-bg-$color-button-negative-quiet-background-hover! active:i-bg-$color-button-negative-quiet-background-active!', // .button--destructive-flat
    buttonUtility:
      'px-[15px] py-[11px] font-bold leading-24 max-w-max focusable justify-center transition-colors ease-in-out border rounded-4 i-text-$color-button-utility-text i-bg-$color-button-utility-background i-border-$color-button-utility-border hover:i-bg-$color-button-utility-background hover:i-border-$color-button-utility-border-hover! active:i-border-$color-button-utility-border-active!', // .button--utility
    buttonUtilityFlat:
      'py-12 px-16 bg-transparent border-0 font-bold leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-utility-text i-bg-$color-button-utility-background hover:i-bg-$color-button-utility-background-hover rounded-4', // .button--utility-flat
    buttonPill:
      'font-bold leading-24 max-w-max focusable justify-center transition-colors ease-in-out rounded-full! min-h-[44px] min-w-[44px] border-0! p-4 i-text-$color-button-favorite-text i-bg-$color-button-favorite-background hover:i-bg-$color-button-favorite-background-hover acive:i-bg-$color-button-favorite-background-active inline-flex items-center justify-center hover:bg-clip-padding', // .button--pill   missing:  hover:background-color: rgba(var(--f-blue-600-rgb), 0.1) , and:  hover:border-color: hsla(0, 0%, 100%, 0.4);
    buttonLink:
      'leading-24 max-w-max focusable ease-in-out inline i-text-$color-text-link hover:i-text-$color-text-link-hover hover:underline active:underline', //.button--link /* Buttons pretending to be links, (Should rather inherit the actual link setup in the future?)  */
    // Sizestuff
    buttonSmall: 'px-16 py-6 text-12 leading-16', // .button--small
    buttonSmallOverride: 'py-8', // .button--small.button--primary, .button--small.button--destructive, .button--small.button--destructive-flat, .button--small.button--order, .button--small.button--quiet
    buttonSmallSecondary: 'py-6', // .button--small.button--secondary
    buttonSmallUtility: 'py-7 px-15', // .button--small.button--secondary
    buttonSmallButtonPill: 'p-4 min-h-32 min-w-32', // .button--small.button--pill
    buttonSmallButtonLink: 'p-0', // .button--small.button--link
    // Disabled
    buttonIsDisabled:
      'py-10 px-14 font-bold leading-24 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-disabled-background! i-text-$color-button-disabled-text! cursor-default pointer-events-none', // .button:disabled, .button--is-disabled
    // Progress indicator
    buttonInProgress:
      'py-10 px-14 border-0 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out animate-inprogress i-text-$color-button-loading-text! pointer-events-none i-bg-$color-button-loading-background!', // .button--in-progress, a.button--in-progress:visited
  };

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
