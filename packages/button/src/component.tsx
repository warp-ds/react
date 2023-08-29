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
    utility: `border rounded-4 ${buttonStyling.default}`,
    negative: `border-0 rounded-8 ${buttonStyling.default}`,
    pill:
    `p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${buttonStyling.default}`, // .button--pill
    link: 'max-w-max bg-transparent focusable ease-in-out inline i-text-$color-button-link-text active:underline hover:underline', // .button--link
  }

  const buttonSizes = {
    xsmall: 'py-6 px-16',
    small: 'py-8 px-16',
    medium: 'py-10 px-14',
    large: 'py-12 px-16',
    utility: 'py-[11px] px-[15px]',
    smallUtility: 'py-[7px] px-[15px]',
    pill: 'min-h-[44px] min-w-[44px]',
    pillSmall: 'min-h-32 min-w-32',
    linkSmall: 'p-0',
  }

  const buttonTextSizes = {
    medium: 'text-m leading-[24]',
    xsmall: 'text-xs'
  }

  const buttonVariants = {
    buttonInProgress:
      'border-transparent animate-inprogress pointer-events-none i-text-$color-button-loading-text i-bg-$color-button-loading-background', // .button--in-progress, a.button--in-progress:visited
    buttonFlat:
      `border-0 rounded-8 ${buttonStyling.default}`, // .button--quiet, .button--flat
    buttonUtilityFlat: `bg-transparent border-0 rounded-4 ${buttonStyling.default}`, // .button--utility.button--quiet, .button--flat
    negativeFlat: `border-0 rounded-8 ${buttonStyling.default}`, // .button--utility.button--quiet, .button--flat
    // Disabled
    buttonIsDisabled:
      'font-bold max-w-max justify-center transition-colors ease-in-out cursor-default pointer-events-none i-text-$color-button-disabled-text i-bg-$color-button-disabled-background', // .button:disabled, .button--is-disabled
  }
  const ccButton = {
    // Buttontypes
    buttonSecondary:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonColors.secondary}`, // .button--secondary, .button--default, .button
    buttonSecondaryHref:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonColors.secondary}`, // .button--secondary, .button--default, .button
    buttonSecondaryDisabled:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonVariants.buttonIsDisabled}`,
    buttonSecondarySmall: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonColors.secondary}`,
    buttonSecondarySmallDisabled: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonVariants.buttonIsDisabled}`,
    buttonSecondaryQuiet:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat} ${buttonColors.flat}`,
    buttonSecondaryQuietDisabled:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat} ${buttonVariants.buttonIsDisabled}`,
    buttonSecondarySmallQuiet: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.buttonFlat} ${buttonColors.flat}`,
    buttonSecondarySmallQuietDisabled: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.buttonFlat} ${buttonVariants.buttonIsDisabled}`,
    buttonSecondaryLoading:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonVariants.buttonInProgress}`,
    buttonSecondarySmallLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonVariants.buttonInProgress}`,
    buttonSecondarySmallQuietLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.buttonFlat} ${buttonVariants.buttonInProgress}`,
    buttonSecondaryQuietLoading:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat} ${buttonVariants.buttonInProgress}`,

    buttonPrimary: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.primary} ${buttonColors.primary}`,
    buttonPrimaryDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonIsDisabled} ${buttonTypes.primary}`,
    buttonPrimarySmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.primary} ${buttonColors.primary}`,
    buttonPrimarySmallDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonIsDisabled} ${buttonTypes.primary} `,
    buttonPrimaryQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat} ${buttonColors.flat}`,
    buttonPrimaryQuietDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat} ${buttonVariants.buttonIsDisabled}`,
    buttonPrimarySmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonFlat} ${buttonColors.flat}`,
    buttonPrimarySmallQuietDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonFlat} ${buttonVariants.buttonIsDisabled}`,
    buttonPrimaryLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonInProgress} ${buttonTypes.primary}`,
    buttonPrimarySmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonInProgress} ${buttonTypes.primary}`,
    buttonPrimarySmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.buttonFlat} ${buttonVariants.buttonInProgress} ${buttonTypes.primary}`,
    buttonPrimaryQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonFlat} ${buttonVariants.buttonInProgress}`,

    buttonUtility: `${buttonSizes.utility} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonColors.utility}`,
    buttonUtilityDisabled: `${buttonSizes.utility} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonVariants.buttonIsDisabled}`,
    buttonUtilityQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonUtilityFlat} ${buttonColors.utilityFlat}`,
    buttonUtilityQuietDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonUtilityFlat} ${buttonVariants.buttonIsDisabled}`,
    buttonUtilitySmall: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonColors.utility}`,
    buttonUtilitySmallDisabled: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonVariants.buttonIsDisabled}`,
    buttonUtilitySmallQuiet: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonVariants.buttonUtilityFlat} ${buttonColors.utilityFlat}`,
    buttonUtilitySmallQuietDisabled: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonVariants.buttonUtilityFlat} ${buttonVariants.buttonIsDisabled}`,
    buttonUtilityLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonVariants.buttonInProgress}`,
    buttonUtilitySmallLoading: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonVariants.buttonInProgress}`,
    buttonUtilityQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.buttonInProgress} ${buttonVariants.buttonUtilityFlat}`,
    buttonUtilitySmallQuietLoading: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonVariants.buttonInProgress} ${buttonVariants.buttonUtilityFlat}`,

    buttonNegative: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonColors.destructive}`,
    buttonNegativeDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonVariants.buttonIsDisabled}`,
    buttonNegativeQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeFlat} ${buttonColors.negativeFlat}`,
    buttonNegativeQuietDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeFlat}${buttonVariants.buttonIsDisabled}`,
    buttonNegativeSmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.negative} ${buttonColors.destructive}`,
    buttonNegativeSmallDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.negative} ${buttonVariants.buttonIsDisabled}`,
    buttonNegativeSmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeFlat} ${buttonColors.negativeFlat}`,
    buttonNegativeSmallQuietDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeFlat} ${buttonVariants.buttonIsDisabled}`,
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
    linkAsButton: 'inline-block hover:no-underline',
    buttonIsDisabled: buttonVariants.buttonIsDisabled,
    a11y: 'sr-only',
  };

  const buttonType = Object.keys(buttonTypes).find(b => !!props[b]);
  
  const classes = classNames(props.className, {
    [ccButton.buttonSecondary]: (secondary || !buttonType) && !small && !quiet && !loading && !props.disabled,
    [ccButton.buttonSecondaryDisabled]: (secondary || !buttonType) && !small && !quiet && !loading && props.disabled,
    [ccButton.buttonSecondarySmall]: secondary && small && !quiet && !loading && !props.disabled,
    [ccButton.buttonSecondarySmallDisabled]: secondary && small && !quiet && !loading && props.disabled,
    [ccButton.buttonSecondarySmallLoading]: secondary && small && !quiet && loading,
    [ccButton.buttonSecondarySmallQuiet]: secondary && small && quiet && !loading && !props.disabled,
    [ccButton.buttonSecondarySmallQuietDisabled]: secondary && small && quiet && !loading && props.disabled,
    [ccButton.buttonSecondarySmallQuietLoading]: secondary && small && quiet && loading,
    [ccButton.buttonSecondaryQuiet]: secondary && !small && quiet && !loading && !props.disabled,
    [ccButton.buttonSecondaryQuietDisabled]: secondary && !small && quiet && !loading && props.disabled,
    [ccButton.buttonSecondaryQuietLoading]: secondary && !small && quiet && loading,
    [ccButton.buttonSecondaryLoading]: secondary && !small && !quiet && loading,
    
    [ccButton.buttonPrimary]: primary && !small && !quiet && !loading && !props.disabled,
    [ccButton.buttonPrimaryDisabled]: primary && !small && !quiet && !loading && props.disabled,
    [ccButton.buttonPrimarySmall]: primary && small && !quiet && !loading && !props.disabled,
    [ccButton.buttonPrimarySmallDisabled]: primary && small && !quiet && !loading && props.disabled,
    [ccButton.buttonPrimarySmallQuiet]: primary && small && quiet && !loading && !props.disabled,
    [ccButton.buttonPrimarySmallQuietDisabled]: primary && small && quiet && !loading && props.disabled,
    [ccButton.buttonPrimarySmallLoading]: primary && small && !quiet && loading,
    [ccButton.buttonPrimarySmallQuietLoading]: primary && small && quiet && loading,
    [ccButton.buttonPrimaryQuiet]: primary && !small && quiet && !loading && !props.disabled,
    [ccButton.buttonPrimaryQuietDisabled]: primary && !small && quiet && !loading && props.disabled,
    [ccButton.buttonPrimaryQuietLoading]: primary && !small && quiet && loading,
    [ccButton.buttonPrimaryLoading]: primary && !small && !quiet && loading,

    [ccButton.buttonUtility]: utility && !small && !quiet && !loading && !props.disabled,
    [ccButton.buttonUtilityDisabled]: utility && !small && !quiet && !loading && props.disabled,
    [ccButton.buttonUtilitySmall]: utility && small && !quiet && !loading && !props.disabled,
    [ccButton.buttonUtilitySmallDisabled]: utility && small && !quiet && !loading && props.disabled,
    [ccButton.buttonUtilitySmallQuiet]: utility && small && quiet && !loading && !props.disabled,
    [ccButton.buttonUtilitySmallQuietDisabled]: utility && small && quiet && !loading && props.disabled,
    [ccButton.buttonUtilitySmallLoading]: utility && small && !quiet && loading,
    [ccButton.buttonUtilitySmallQuietLoading]: utility && small && quiet && loading,
    [ccButton.buttonUtilityQuiet]: utility && !small && quiet && !loading && !props.disabled,
    [ccButton.buttonUtilityQuietDisabled]: utility && !small && quiet && !loading && props.disabled,
    [ccButton.buttonUtilityQuietLoading]: utility && !small && quiet && loading,
    [ccButton.buttonUtilityLoading]: utility && !small && !quiet && loading,

    [ccButton.buttonNegative]: negative && !small && !quiet && !loading && !props.disabled,
    [ccButton.buttonNegativeDisabled]: negative && !small && !quiet && !loading && props.disabled,
    [ccButton.buttonNegativeSmall]: negative && small && !quiet && !loading && !props.disabled,
    [ccButton.buttonNegativeSmallDisabled]: negative && small && !quiet && !loading && props.disabled,
    [ccButton.buttonNegativeSmallQuiet]: negative && small && quiet && !loading && !props.disabled,
    [ccButton.buttonNegativeSmallQuietDisabled]: negative && small && quiet && !loading && props.disabled,
    [ccButton.buttonNegativeSmallLoading]: negative && small && !quiet && loading,
    [ccButton.buttonNegativeSmallQuietLoading]: negative && small && quiet && loading,
    [ccButton.buttonNegativeQuiet]: negative && !small && quiet && !loading && !props.disabled,
    [ccButton.buttonNegativeQuietDisabled]: negative && !small && quiet && !loading && props.disabled,
    [ccButton.buttonNegativeQuietLoading]: negative && !small && quiet && loading,
    [ccButton.buttonNegativeLoading]: negative && !small && !quiet && loading,

    [ccButton.pill]: pill && !small && !loading,
    [ccButton.pillSmall]: pill && small && !loading,
    [ccButton.pillLoading]: pill && !small && loading,
    [ccButton.pillSmallLoading]: pill && small && loading,
    [ccButton.link]: link && !small,
    [ccButton.linkSmall]: link && small,
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
