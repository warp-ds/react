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
      'border-0! rounded-8 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-quiet-background! i-text-$color-button-quiet-text! hover:i-bg-$color-button-quiet-background-hover! active:i-bg-$color-button-quiet-background-active!', // .button--quiet, .button--flat
    buttonUtilityFlat: ' bg-transparent border-0 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-utility-quiet-text i-bg-$color-button-utility-quiet-background hover:i-bg-$color-button-utility-quiet-background-hover rounded-4', // .button--utility.button--quiet, .button--flat
    buttonDestructiveFlat: 'border-0 font-bold rounded-8 max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-negative-quiet-background! i-text-$color-button-negative-quiet-text! hover:i-bg-$color-button-negative-quiet-background-hover! active:i-bg-$color-button-negative-quiet-background-active!', // .button--utility.button--quiet, .button--flat
    // Disabled
    buttonIsDisabled:
      'font-bold max-w-max justify-center transition-colors ease-in-out i-bg-$color-button-disabled-background! i-text-$color-button-disabled-text cursor-default pointer-events-none', // .button:disabled, .button--is-disabled
  }
  
  const buttonTypes = {
    primaryDefault: 'border-0 rounded-8 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-primary-text hover:i-text-$color-button-primary-text i-bg-$color-button-primary-background hover:i-bg-$color-button-primary-background-hover! active:i-bg-$color-button-primary-background-active',
    secondaryDefault: 'border-2 rounded-8 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-text-$color-button-secondary-text hover:i-text-$color-button-secondary-text i-border-$color-button-secondary-border i-bg-$color-button-secondary-background hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active',
    utilityDefault: 'font-bold max-w-max focusable justify-center transition-colors ease-in-out border rounded-4 i-text-$color-button-utility-text hover:i-text-$color-button-utility-text i-bg-$color-button-utility-background i-border-$color-button-utility-border hover:i-bg-$color-button-utility-background hover:i-border-$color-button-utility-border-hover! active:i-border-$color-button-utility-border-active!',
    destructiveDefault: 'border-0 rounded-8 font-bold max-w-max focusable justify-center transition-colors ease-in-out i-bg-$color-button-negative-background i-text-$color-button-negative-text hover:i-text-$color-button-negative-text hover:i-bg-$color-button-negative-background-hover! active:i-bg-$color-button-negative-background-active!',
    buttonPill:
    'p-4 font-bold max-w-max focusable justify-center transition-colors ease-in-out rounded-full! border-0! i-text-$color-button-pill-icon hover:i-text-$color-button-pill-icon-hover active:i-text-$color-button-pill-icon-active i-bg-$color-button-pill-background hover:i-bg-$color-button-pill-background-hover active:i-bg-$color-button-pill-background-active inline-flex items-center justify-center hover:bg-clip-padding', // .button--pill
    buttonLink: 'max-w-max bg-transparent focusable ease-in-out inline i-text-$color-button-link-text active:underline hover:underline', // .button--link
  }

  const buttonSizes = {
    large: 'py-12 px-16',
    medium: 'py-10 px-14',
    custom: 'px-[15px] py-[11px]',
    small: 'py-8 px-16',
    xsmall: 'py-6 px-16',
    pill: 'min-h-[44px] min-w-[44px]',
    pillSmall: 'min-h-32 min-w-32',
    linkSmall: 'p-0',
  }

  const buttonTextSizes = {
    medium: 'text-m leading-[24]',
    xsmall: 'text-xs'
  }

  const ccButton = {
    // Buttontypes
    buttonSecondary:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondaryDefault}`,
    buttonSecondarySmall: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondaryDefault}`,
    buttonSecondaryQuiet:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat}`,
    buttonSecondarySmallQuiet: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.buttonFlat}`,
    buttonSecondaryLoading:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondaryDefault} ${buttonVariants.buttonInProgress}`,
    buttonSecondarySmallLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondaryDefault} ${buttonVariants.buttonInProgress}`,
    buttonSecondarySmallQuietLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.buttonFlat} ${buttonVariants.buttonInProgress}`,
    buttonSecondaryQuietLoading:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat} ${buttonVariants.buttonInProgress}`,
    buttonPrimary: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.primaryDefault}`,
    buttonPrimaryQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat}`,
    buttonPrimarySmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.primaryDefault}`,
    buttonPrimarySmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonFlat}`,
    buttonPrimaryLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.primaryDefault} ${buttonVariants.buttonInProgress}`,
    buttonPrimarySmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.primaryDefault} ${buttonVariants.buttonInProgress}`,
    buttonPrimaryQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat} ${buttonVariants.buttonInProgress}`,
    buttonPrimarySmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonFlat} ${buttonVariants.buttonInProgress}`,
    buttonUtility: `${buttonSizes.custom} ${buttonTextSizes.medium} ${buttonTypes.utilityDefault}`,
    buttonUtilityQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonUtilityFlat}`,
    buttonUtilitySmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.utilityDefault}`,
    buttonUtilitySmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonUtilityFlat}`,
    buttonUtilityLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.utilityDefault} ${buttonVariants.buttonInProgress}`,
    buttonUtilitySmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.utilityDefault} ${buttonVariants.buttonInProgress}`,
    buttonUtilityQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonUtilityFlat} ${buttonVariants.buttonInProgress}`,
    buttonUtilitySmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonUtilityFlat} ${buttonVariants.buttonInProgress}`,
    buttonDestructive: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.destructiveDefault}`,
    buttonDestructiveQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonDestructiveFlat}`,
    buttonDestructiveSmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.destructiveDefault}`,
    buttonDestructiveSmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonDestructiveFlat}`,
    buttonDestructiveLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.destructiveDefault} ${buttonVariants.buttonInProgress}`,
    buttonDestructiveSmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.destructiveDefault} ${buttonVariants.buttonInProgress}`,
    buttonDestructiveQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonDestructiveFlat} ${buttonVariants.buttonInProgress}`,
    buttonDestructiveSmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonUtilityFlat} ${buttonVariants.buttonInProgress}`,

    buttonPill: `${buttonSizes.pill} ${buttonTextSizes.medium} ${buttonTypes.buttonPill}`,
    buttonPillSmall: `${buttonSizes.pillSmall} ${buttonTextSizes.xsmall} ${buttonTypes.buttonPill}`,

    buttonLink: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.buttonLink}`,
    buttonLinkSmall: `${buttonSizes.linkSmall} ${buttonTextSizes.xsmall} ${buttonTypes.buttonLink}`,
    linkAsButton: `${buttonSizes.medium} ${buttonTextSizes.medium} inline-block hover:no-underline`,
    buttonIsDisabled: buttonVariants.buttonIsDisabled,
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

    [ccButton.buttonUtility]: utility && !small && !quiet && !loading,
    [ccButton.buttonUtilitySmall]: utility && small && !quiet && !loading,
    [ccButton.buttonUtilitySmallQuiet]: utility && small && quiet && !loading,
    [ccButton.buttonUtilitySmallLoading]: utility && small && !quiet && loading,
    [ccButton.buttonUtilitySmallQuietLoading]: utility && small && quiet && loading,
    [ccButton.buttonUtilityQuiet]: utility && !small && quiet && !loading,
    [ccButton.buttonUtilityQuietLoading]: utility && !small && quiet && loading,
    [ccButton.buttonUtilityLoading]: utility && !small && !quiet && loading,

    [ccButton.buttonDestructive]: negative && !small && !quiet && !loading,
    [ccButton.buttonDestructiveSmall]: negative && small && !quiet && !loading,
    [ccButton.buttonDestructiveSmallQuiet]: negative && small && quiet && !loading,
    [ccButton.buttonDestructiveSmallLoading]: negative && small && !quiet && loading,
    [ccButton.buttonDestructiveSmallQuietLoading]: negative && small && quiet && loading,
    [ccButton.buttonDestructiveQuiet]: negative && !small && quiet && !loading,
    [ccButton.buttonDestructiveQuietLoading]: negative && !small && quiet && loading,
    [ccButton.buttonDestructiveLoading]: negative && !small && !quiet && loading,

    [ccButton.buttonPill]: pill && !small,
    [ccButton.buttonPillSmall]: pill && small,
    [ccButton.buttonLink]: link && !small,
    [ccButton.buttonLinkSmall]: link && small,
    [ccButton.buttonIsDisabled]: props.disabled,
    [ccButton.linkAsButton]: !!props.href,
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
