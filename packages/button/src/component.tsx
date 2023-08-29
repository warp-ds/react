import React, { forwardRef, Ref } from 'react';
import { button as ccButton } from '@warp-ds/css/component-classes';
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

  const buttonStyling = {
    default: 'font-bold max-w-max focusable justify-center transition-colors ease-in-out'
  };

  const buttonColors = {
    primary: 'i-text-$color-button-primary-text hover:i-text-$color-button-primary-text i-bg-$color-button-primary-background hover:i-bg-$color-button-primary-background-hover active:i-bg-$color-button-primary-background-active',
    secondary: 'i-text-$color-button-secondary-text hover:i-text-$color-button-secondary-text i-border-$color-button-secondary-border i-bg-$color-button-secondary-background hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active',
    utility: 'i-text-$color-button-utility-text hover:i-text-$color-button-utility-text i-bg-$color-button-utility-background i-border-$color-button-utility-border hover:i-bg-$color-button-utility-background hover:i-border-$color-button-utility-border-hover active:i-border-$color-button-utility-border-active',
    destructive: 'i-bg-$color-button-negative-background i-text-$color-button-negative-text hover:i-text-$color-button-negative-text hover:i-bg-$color-button-negative-background-hover active:i-bg-$color-button-negative-background-active',
    pill: 'i-text-$color-button-pill-icon hover:i-text-$color-button-pill-icon-hover active:i-text-$color-button-pill-icon-active i-bg-$color-button-pill-background hover:i-bg-$color-button-pill-background-hover active:i-bg-$color-button-pill-background-active',
    disabled: 'i-text-$color-button-disabled-text i-bg-$color-button-disabled-background',
    flat: 'i-bg-$color-button-quiet-background i-text-$color-button-quiet-text hover:i-bg-$color-button-quiet-background-hover active:i-bg-$color-button-quiet-background-active',
    utilityFlat: 'i-text-$color-button-utility-quiet-text i-bg-$color-button-utility-quiet-background hover:i-bg-$color-button-utility-quiet-background-hover',
    negativeFlat: 'i-bg-$color-button-negative-quiet-background i-text-$color-button-negative-quiet-text hover:i-bg-$color-button-negative-quiet-background-hover active:i-bg-$color-button-negative-quiet-background-active',
    loading: '',
  };

  const buttonTypes = {
    primary: `border-0 rounded-8 ${buttonStyling.default}`,
    secondary: `border-2 rounded-8 ${buttonStyling.default}`,
    utility: `border rounded-4 ${buttonStyling.default} ${buttonColors.utility}`,
    negative: `border-0 rounded-8 ${buttonStyling.default}`,
    pill:
    `p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${buttonStyling.default}`, // .button--pill
    link: 'max-w-max bg-transparent focusable ease-in-out inline i-text-$color-button-link-text active:underline hover:underline', // .button--link
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

  const buttonVariants = {
    // secondary: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary}`,
    buttonInProgress:
      'border-transparent animate-inprogress pointer-events-none i-text-$color-button-loading-text i-bg-$color-button-loading-background', // .button--in-progress, a.button--in-progress:visited
    buttonFlat:
      `border-0 rounded-8 ${buttonStyling.default}`, // .button--quiet, .button--flat
    buttonUtilityFlat: `bg-transparent border-0 rounded-4 ${buttonStyling.default}`, // .button--utility.button--quiet, .button--flat
    negativeFlat: `border-0 rounded-8 ${buttonStyling.default}`, // .button--utility.button--quiet, .button--flat
    // Disabled
    buttonIsDisabled:
      'font-bold max-w-max justify-center transition-colors ease-in-out cursor-default pointer-events-none', // .button:disabled, .button--is-disabled
  }
  const ccButton = {
    // Buttontypes
    buttonSecondary:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonColors.secondary}`,
    buttonSecondarySmall: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonColors.secondary}`,
    buttonSecondaryQuiet:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat} ${buttonColors.flat}`,
    buttonSecondarySmallQuiet: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.buttonFlat} ${buttonColors.flat}`,
    buttonSecondaryLoading:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonVariants.buttonInProgress}`,
    buttonSecondarySmallLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonVariants.buttonInProgress}`,
    buttonSecondarySmallQuietLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.buttonFlat} ${buttonVariants.buttonInProgress}`,
    buttonSecondaryQuietLoading:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat} ${buttonVariants.buttonInProgress}`,

    buttonPrimary: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.primary} ${buttonColors.primary}`,
    buttonPrimarySmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.primary} ${buttonColors.primary}`,
    buttonPrimaryQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat} ${buttonColors.flat}`,
    buttonPrimarySmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonFlat} ${buttonColors.flat}`,
    buttonPrimaryLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonInProgress} ${buttonTypes.primary}`,
    buttonPrimarySmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonInProgress} ${buttonTypes.primary}`,
    buttonPrimarySmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonFlat} ${buttonVariants.buttonInProgress} ${buttonTypes.primary}`,
    buttonPrimaryQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat} ${buttonVariants.buttonInProgress}`,

    buttonUtility: `${buttonSizes.custom} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonColors.utility}`,
    buttonUtilityQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonUtilityFlat} ${buttonColors.utilityFlat}`,
    buttonUtilitySmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonColors.utility}`,
    buttonUtilitySmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonUtilityFlat} ${buttonColors.utilityFlat}`,
    buttonUtilityLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonVariants.buttonInProgress}`,
    buttonUtilitySmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonVariants.buttonInProgress}`,
    buttonUtilityQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonInProgress} ${buttonVariants.buttonUtilityFlat}`,
    buttonUtilitySmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonInProgress} ${buttonVariants.buttonUtilityFlat}`,

    buttonNegative: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonColors.destructive}`,
    buttonNegativeQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeFlat} ${buttonColors.negativeFlat}`,
    buttonNegativeSmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.negative} ${buttonColors.destructive}`,
    buttonNegativeSmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeFlat} ${buttonColors.negativeFlat}`,
    buttonNegativeLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonVariants.buttonInProgress}`,
    buttonNegativeSmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonInProgress} ${buttonTypes.negative}`,
    buttonNegativeQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeFlat} ${buttonTypes.negative} ${buttonVariants.buttonInProgress}`,
    buttonNegativeSmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeFlat} ${buttonVariants.buttonInProgress}`,

    pill: `${buttonSizes.pill} ${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonColors.pill}`,
    pillSmall: `${buttonSizes.pillSmall} ${buttonTextSizes.xsmall} ${buttonTypes.pill} ${buttonColors.pill}`,
    pillLoading: `${buttonSizes.pill} ${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonVariants.buttonInProgress}`,
    pillSmallLoading: `${buttonSizes.pillSmall} ${buttonTextSizes.xsmall} ${buttonTypes.pill} ${buttonVariants.buttonInProgress}`,

    link: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.link}`,
    linkSmall: `${buttonSizes.linkSmall} ${buttonTextSizes.xsmall} ${buttonTypes.link}`,
    linkAsButton: `${buttonSizes.medium} ${buttonTextSizes.medium} inline-block hover:no-underline`,
    buttonIsDisabled: buttonVariants.buttonIsDisabled,
    a11y: 'sr-only',
  };

  const buttonType = Object.keys(buttonTypes).find(b => !!props[b]);
  
  const classes = classNames(props.className, {
    // [!loading && !props.disabled && buttonType ? buttonColors[buttonType] : (loading ? buttonColors.loading : buttonColors.disabled)]: true,
    [ccButton.buttonSecondary]: (secondary || !buttonType) && !small && !quiet && !loading,
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

    [ccButton.buttonNegative]: negative && !small && !quiet && !loading,
    [ccButton.buttonNegativeSmall]: negative && small && !quiet && !loading,
    [ccButton.buttonNegativeSmallQuiet]: negative && small && quiet && !loading,
    [ccButton.buttonNegativeSmallLoading]: negative && small && !quiet && loading,
    [ccButton.buttonNegativeSmallQuietLoading]: negative && small && quiet && loading,
    [ccButton.buttonNegativeQuiet]: negative && !small && quiet && !loading,
    [ccButton.buttonNegativeQuietLoading]: negative && !small && quiet && loading,
    [ccButton.buttonNegativeLoading]: negative && !small && !quiet && loading,

    [ccButton.pill]: pill && !small && !loading,
    [ccButton.pillSmall]: pill && small && !loading,
    [ccButton.pillLoading]: pill && !small && loading,
    [ccButton.pillSmallLoading]: pill && small && loading,
    [ccButton.link]: link && !small,
    [ccButton.linkSmall]: link && small,
    // [ccButton.buttonIsDisabled]: props.disabled,
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
