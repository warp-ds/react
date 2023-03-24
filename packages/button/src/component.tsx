import React, { forwardRef, Ref } from 'react';
// import { button as c } from '@warp-ds/component-classes';
import { classNames } from '@chbphone55/classnames';
import type { ButtonProps } from './props';

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
    button:
      'py-10 px-14 border-2 font-bold rounded-8 leading-24 max-w-max focusable justify-center transition-colors ease-in-out', // .button, .button--secondary, .button--default. using tailwind ease-in-out instead of fabric transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96)
    buttonSecondary:
      'i-text-$color-button-secondary-text i-border-$color-button-secondary-border hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active', // .button, .button--secondary, .button--default. using tailwind ease-in-out instead of fabric transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96)
    buttonPrimary:
      'py-12 px-16 border-0 i-text-$color-button-primary-text i-bg-$color-button-primary-background hover:i-bg-$color-button-primary-background-hover! active:i-bg-$color-button-primary-background-active;', // .button--primary, .button--cta
    buttonFlat:
      'py-12 px-16 border-0! i-bg-$color-button-quiet-background i-text-$color-button-quiet-text hover:i-bg-$color-button-quiet-background-hover active:i-bg-$color-button-quiet-background-active;', // .button--quiet, .button--flat
    buttonDestructive:
      'py-12 px-16 border-0! i-bg-$color-button-negative-background i-text-$color-button-negative-text hover:i-bg-$color-button-negative-background-hover! active:i-bg-$color-button-negative-background-active!;', // .button--destructive
    buttonDestructiveFlat:
      'py-12 px-16 border-0! i-bg-$color-button-negative-quiet-background! i-text-$color-button-negative-quiet-text! hover:i-bg-$color-button-negative-quiet-background-hover! active:i-bg-$color-button-negative-quiet-background-active!;', // .button--destructive-flat
    buttonOrder:
      'py-12 px-16 border-0 text-gray-900 bg-green-400 hover:bg-green-500 active:bg-green-600;', // .button--order
    buttonUtility:
      'padding: 11px 15px i-text-$i-border-$color-button-utility-text i-bg-$color-button-utility-background i-border-$color-button-utility-border border hover:i-bg-$color-button-utility-background hover:i-border-$color-button-utility-border-hover! active:i-border-$color-button-utility-border-active! rounded-4;', // .button--utility
    buttonUtilityFlat:
      'padding: 12px 16px bg-transparent text-gray-800 border-0 hover:bg-gray-100 active:border-gray-500 active:bg-gray-200 rounded-4;', // .button--utility-flat
    buttonPill:
      'rounded-full! min-h-[44px] min-w-[44px] border-0! p-4 i-text-$color-button-quiet-text! i-bg-$color-button-quiet-background hover:i-bg-$color-button-quiet-background-hover! acive:i-bg-$color-button-quiet-background-active! inline-flex items-center justify-center hover:bg-clip-padding', // .button--pill   missing:  hover:background-color: rgba(var(--f-blue-600-rgb), 0.1) , and:  hover:border-color: hsla(0, 0%, 100%, 0.4);
    buttonLink:
      'font-normal border-0! inline i-bg-$color-button-quiet-background p-0 m-0 hover:underline active:underline hover:i-bg-$color-button-quiet-background! active:i-bg-$color-button-quiet-background!;', //.button--link /* Buttons pretending to be links, (Should rather inherit the actual link setup in the future?)  */
    LinkButton:
      'no-underline active:hover:no-underline inline-flex active:hover:inline-flex;', //  a.button /* Overrides for links pretending to be buttons */
    // Sizestuff
    buttonSmall: 'px-16 py-6 text-12 leading-16;', // .button--small
    buttonSmallOverride: 'py-8', // .button--small.button--primary, .button--small.button--destructive, .button--small.button--destructive-flat, .button--small.button--order, .button--small.button--quiet
    buttonSmallSecondary: 'py-6', // .button--small.button--secondary
    buttonSmallUtility: 'py-7 px-15', // .button--small.button--secondary
    buttonSmallButtonPill: 'p-4 min-h-32 min-w-32', // .button--small.button--pill
    buttonSmallButtonLink: 'p-0', // .button--small.button--link
    // Disabled
    buttonIsDisabled:
      'bg-bluegray-300 border-bluegray-300 text-white bg-none cursor-default pointer-events-none;', // .button:disabled, .button--is-disabled
    // Progress indicator
    buttonInProgress:
      'i-text-$color-button-loading-text! pointer-events-none border-0! i-bg-$color-button-loading-background! !bg-[length:30px_30px];', // .button--in-progress, a.button--in-progress:visited {
    //  buttonInProgress also needs support for the following (add support to warp-drive):
    //     background-image: linear-gradient(
    //         135deg,
    //         rgba(0, 0, 0, 0.05) 25%,
    //         transparent 0,
    //         transparent 50%,
    //         rgba(0, 0, 0, 0.05) 0,
    //         rgba(0, 0, 0, 0.05) 75%,
    //         transparent 0,
    //         transparent
    //     ) !important;
    //     animation: animate-inprogress 3s linear infinite;
    //
    // @keyframes animate-inprogress {
    //     0% {
    //         background-position: 0 0;
    //     }
    //     to {
    //         background-position: 60px 0;
    //     }
    // }
  };

  const classes = classNames(props.className, {
    [button.button]: true,
    [button.buttonSecondary]: secondary,
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
