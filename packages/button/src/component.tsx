import React, { forwardRef, Ref } from 'react';
import { button as ccButton } from '@warp-ds/css/component-classes';
import { i18n } from '@lingui/core';
import { classNames } from '@chbphone55/classnames';
import type { ButtonProps } from './props';
import { messages as enMessages} from './locales/en/messages.mjs';
import { messages as nbMessages} from './locales/nb/messages.mjs';
import { messages as fiMessages} from './locales/fi/messages.mjs';
import { activateI18n } from '../../i18n';

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

  const buttonDefaultStyling = 'font-bold max-w-max focusable justify-center transition-colors ease-in-out';

  const buttonColors = {
    primary: 'i-text-$color-button-primary-text hover:i-text-$color-button-primary-text i-bg-$color-button-primary-background hover:i-bg-$color-button-primary-background-hover active:i-bg-$color-button-primary-background-active',
    secondary: 'i-text-$color-button-secondary-text hover:i-text-$color-button-secondary-text i-border-$color-button-secondary-border i-bg-$color-button-secondary-background hover:i-bg-$color-button-secondary-background-hover hover:i-border-$color-button-secondary-border-hover active:i-bg-$color-button-secondary-background-active',
    utility: 'i-text-$color-button-utility-text hover:i-text-$color-button-utility-text i-bg-$color-button-utility-background i-border-$color-button-utility-border hover:i-bg-$color-button-utility-background hover:i-border-$color-button-utility-border-hover active:i-border-$color-button-utility-border-active',
    destructive: 'i-bg-$color-button-negative-background i-text-$color-button-negative-text hover:i-text-$color-button-negative-text hover:i-bg-$color-button-negative-background-hover active:i-bg-$color-button-negative-background-active',
    pill: 'i-text-$color-button-pill-icon hover:i-text-$color-button-pill-icon-hover active:i-text-$color-button-pill-icon-active i-bg-$color-button-pill-background hover:i-bg-$color-button-pill-background-hover active:i-bg-$color-button-pill-background-active',
    disabled: 'i-text-$color-button-disabled-text i-bg-$color-button-disabled-background',
    quiet: 'i-bg-$color-button-quiet-background i-text-$color-button-quiet-text hover:i-bg-$color-button-quiet-background-hover active:i-bg-$color-button-quiet-background-active',
    utilityQuiet: 'i-text-$color-button-utility-quiet-text i-bg-$color-button-utility-quiet-background hover:i-bg-$color-button-utility-quiet-background-hover',
    negativeQuiet: 'i-bg-$color-button-negative-quiet-background i-text-$color-button-negative-quiet-text hover:i-bg-$color-button-negative-quiet-background-hover active:i-bg-$color-button-negative-quiet-background-active',
    loading: 'i-text-$color-button-loading-text i-bg-$color-button-loading-background',
    link: 'i-text-$color-button-link-text',
  };

  const buttonTypes = {
    primary: `border-0 rounded-8 ${buttonDefaultStyling}`,
    secondary: `border-2 rounded-8 ${buttonDefaultStyling}`,
    utility: `border rounded-4 ${buttonDefaultStyling}`,
    negative: `border-0 rounded-8 ${buttonDefaultStyling}`,
    pill:
    `p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding ${buttonDefaultStyling}`, // .button--pill
    link: `max-w-max bg-transparent focusable ease-in-out inline active:underline hover:underline ${buttonColors.link}`, // .button--link
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
    inProgress:
      `border-transparent animate-inprogress pointer-events-none ${buttonColors.loading}`, // .button--in-progress, a.button--in-progress:visited
    quiet:
      `border-0 rounded-8 ${buttonDefaultStyling}`, // .button--quiet, .button--flat
    utilityQuiet: `bg-transparent border-0 rounded-4 ${buttonDefaultStyling}`, // .button--utility.button--quiet, .button--flat
    negativeQuiet: `border-0 rounded-8 ${buttonDefaultStyling}`, // .button--utility.button--quiet, .button--flat
    // Disabled
    isDisabled:
      `font-bold max-w-max justify-center transition-colors ease-in-out cursor-default pointer-events-none ${buttonColors.disabled}`, // .button:disabled, .button--is-disabled
  }

  const ccButton = {
    // Buttontypes
    secondary:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonColors.secondary}`, // .button--secondary, .button--default, .button
    secondaryHref:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonColors.secondary}`, // .button--secondary, .button--default, .button
    secondaryDisabled:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonVariants.isDisabled}`,
    secondarySmall: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonColors.secondary}`,
    secondarySmallDisabled: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonTypes.secondary} ${buttonVariants.isDisabled}`,
    secondaryQuiet:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonColors.quiet}`,
    secondaryQuietDisabled:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
    secondarySmallQuiet: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.quiet} ${buttonColors.quiet}`,
    secondarySmallQuietDisabled: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
    secondaryLoading:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.secondary} ${buttonVariants.inProgress}`,
    secondarySmallLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall}  ${buttonTypes.secondary} ${buttonVariants.inProgress}`,
    secondarySmallQuietLoading: `${buttonTextSizes.xsmall} ${buttonSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.inProgress}`,
    secondaryQuietLoading:
    `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.inProgress}`,

    primary: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.primary} ${buttonColors.primary}`,
    primaryDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.isDisabled} ${buttonTypes.primary}`,
    primarySmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.primary} ${buttonColors.primary}`,
    primarySmallDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.isDisabled} ${buttonTypes.primary} `,
    primaryQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonColors.quiet}`,
    primaryQuietDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
    primarySmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.quiet} ${buttonColors.quiet}`,
    primarySmallQuietDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.isDisabled}`,
    primaryLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.inProgress} ${buttonTypes.primary}`,
    primarySmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.inProgress} ${buttonTypes.primary} `,
    primarySmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.quiet} ${buttonVariants.inProgress} ${buttonTypes.primary}`,
    primaryQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.quiet} ${buttonVariants.inProgress}`,

    utility: `${buttonSizes.utility} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonColors.utility}`,
    utilityDisabled: `${buttonSizes.utility} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonVariants.isDisabled}`,
    utilityQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.utilityQuiet} ${buttonColors.utilityQuiet}`,
    utilityQuietDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.utilityQuiet} ${buttonVariants.isDisabled}`,
    utilitySmall: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonColors.utility}`,
    utilitySmallDisabled: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonVariants.isDisabled}`,
    utilitySmallQuiet: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonVariants.utilityQuiet} ${buttonColors.utilityQuiet}`,
    utilitySmallQuietDisabled: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonVariants.utilityQuiet} ${buttonVariants.isDisabled}`,
    utilityLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.utility} ${buttonVariants.inProgress}`,
    utilitySmallLoading: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonTypes.utility} ${buttonVariants.inProgress}`,
    utilityQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.inProgress} ${buttonVariants.utilityQuiet}`,
    utilitySmallQuietLoading: `${buttonSizes.smallUtility} ${buttonTextSizes.xsmall} ${buttonVariants.inProgress} ${buttonVariants.utilityQuiet}`,

    negative: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonColors.destructive}`,
    negativeDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonVariants.isDisabled}`,
    negativeQuiet: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeQuiet} ${buttonColors.negativeQuiet}`,
    negativeQuietDisabled: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeQuiet}${buttonVariants.isDisabled}`,
    negativeSmall: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.negative} ${buttonColors.destructive}`,
    negativeSmallDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonTypes.negative} ${buttonVariants.isDisabled}`,
    negativeSmallQuiet: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeQuiet} ${buttonColors.negativeQuiet}`,
    negativeSmallQuietDisabled: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeQuiet} ${buttonVariants.isDisabled}`,
    negativeLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonTypes.negative} ${buttonVariants.inProgress}`,
    negativeSmallLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.inProgress} ${buttonTypes.negative}`,
    negativeQuietLoading: `${buttonSizes.large} ${buttonTextSizes.medium} ${buttonVariants.negativeQuiet} ${buttonTypes.negative} ${buttonVariants.inProgress}`,
    negativeSmallQuietLoading: `${buttonSizes.small} ${buttonTextSizes.xsmall} ${buttonVariants.negativeQuiet} ${buttonVariants.inProgress}`,

    pill: `${buttonSizes.pill} ${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonColors.pill}`,
    pillSmall: `${buttonSizes.pillSmall} ${buttonTextSizes.xsmall} ${buttonTypes.pill} ${buttonColors.pill}`,
    pillLoading: `${buttonSizes.pill} ${buttonTextSizes.medium} ${buttonTypes.pill} ${buttonVariants.inProgress}`,
    pillSmallLoading: `${buttonSizes.pillSmall} ${buttonTextSizes.xsmall} ${buttonTypes.pill} ${buttonVariants.inProgress}`,

    link: `${buttonSizes.medium} ${buttonTextSizes.medium} ${buttonTypes.link}`,
    linkSmall: `${buttonSizes.linkSmall} ${buttonTextSizes.xsmall} ${buttonTypes.link}`,
    linkAsButton: 'inline-block hover:no-underline',
    a11y: 'sr-only',
  };

  const buttonType = Object.keys(buttonTypes).find(b => !!props[b]);
  
  const classes = classNames(props.className, {
    [ccButton.secondary]: (secondary || !buttonType) && !small && !quiet && !loading && !props.disabled,
    [ccButton.secondaryDisabled]: (secondary || !buttonType) && !small && !quiet && !loading && props.disabled,
    [ccButton.secondarySmall]: secondary && small && !quiet && !loading && !props.disabled,
    [ccButton.secondarySmallDisabled]: secondary && small && !quiet && !loading && props.disabled,
    [ccButton.secondarySmallLoading]: secondary && small && !quiet && loading,
    [ccButton.secondarySmallQuiet]: secondary && small && quiet && !loading && !props.disabled,
    [ccButton.secondarySmallQuietDisabled]: secondary && small && quiet && !loading && props.disabled,
    [ccButton.secondarySmallQuietLoading]: secondary && small && quiet && loading,
    [ccButton.secondaryQuiet]: secondary && !small && quiet && !loading && !props.disabled,
    [ccButton.secondaryQuietDisabled]: secondary && !small && quiet && !loading && props.disabled,
    [ccButton.secondaryQuietLoading]: secondary && !small && quiet && loading,
    [ccButton.secondaryLoading]: secondary && !small && !quiet && loading,
    
    [ccButton.primary]: primary && !small && !quiet && !loading && !props.disabled,
    [ccButton.primaryDisabled]: primary && !small && !quiet && !loading && props.disabled,
    [ccButton.primarySmall]: primary && small && !quiet && !loading && !props.disabled,
    [ccButton.primarySmallDisabled]: primary && small && !quiet && !loading && props.disabled,
    [ccButton.primarySmallQuiet]: primary && small && quiet && !loading && !props.disabled,
    [ccButton.primarySmallQuietDisabled]: primary && small && quiet && !loading && props.disabled,
    [ccButton.primarySmallLoading]: primary && small && !quiet && loading,
    [ccButton.primarySmallQuietLoading]: primary && small && quiet && loading,
    [ccButton.primaryQuiet]: primary && !small && quiet && !loading && !props.disabled,
    [ccButton.primaryQuietDisabled]: primary && !small && quiet && !loading && props.disabled,
    [ccButton.primaryQuietLoading]: primary && !small && quiet && loading,
    [ccButton.primaryLoading]: primary && !small && !quiet && loading,

    [ccButton.utility]: utility && !small && !quiet && !loading && !props.disabled,
    [ccButton.utilityDisabled]: utility && !small && !quiet && !loading && props.disabled,
    [ccButton.utilitySmall]: utility && small && !quiet && !loading && !props.disabled,
    [ccButton.utilitySmallDisabled]: utility && small && !quiet && !loading && props.disabled,
    [ccButton.utilitySmallQuiet]: utility && small && quiet && !loading && !props.disabled,
    [ccButton.utilitySmallQuietDisabled]: utility && small && quiet && !loading && props.disabled,
    [ccButton.utilitySmallLoading]: utility && small && !quiet && loading,
    [ccButton.utilitySmallQuietLoading]: utility && small && quiet && loading,
    [ccButton.utilityQuiet]: utility && !small && quiet && !loading && !props.disabled,
    [ccButton.utilityQuietDisabled]: utility && !small && quiet && !loading && props.disabled,
    [ccButton.utilityQuietLoading]: utility && !small && quiet && loading,
    [ccButton.utilityLoading]: utility && !small && !quiet && loading,

    [ccButton.negative]: negative && !small && !quiet && !loading && !props.disabled,
    [ccButton.negativeDisabled]: negative && !small && !quiet && !loading && props.disabled,
    [ccButton.negativeSmall]: negative && small && !quiet && !loading && !props.disabled,
    [ccButton.negativeSmallDisabled]: negative && small && !quiet && !loading && props.disabled,
    [ccButton.negativeSmallQuiet]: negative && small && quiet && !loading && !props.disabled,
    [ccButton.negativeSmallQuietDisabled]: negative && small && quiet && !loading && props.disabled,
    [ccButton.negativeSmallLoading]: negative && small && !quiet && loading,
    [ccButton.negativeSmallQuietLoading]: negative && small && quiet && loading,
    [ccButton.negativeQuiet]: negative && !small && quiet && !loading && !props.disabled,
    [ccButton.negativeQuietDisabled]: negative && !small && quiet && !loading && props.disabled,
    [ccButton.negativeQuietLoading]: negative && !small && quiet && loading,
    [ccButton.negativeLoading]: negative && !small && !quiet && loading,

    [ccButton.pill]: pill && !small && !loading,
    [ccButton.pillSmall]: pill && small && !loading,
    [ccButton.pillLoading]: pill && !small && loading,
    [ccButton.pillSmallLoading]: pill && small && loading,
    [ccButton.link]: link && !small,
    [ccButton.linkSmall]: link && small,
    [ccButton.linkAsButton]: !!props.href,
  });

  activateI18n(enMessages, nbMessages, fiMessages);

  const ariaValueTextLoading = i18n._(
    /*i18n*/ {
      id: 'button.aria.loading',
      message: 'Loading...',
      comment: 'Screenreader message for buttons that are loading',
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
          aria-valuetext={ariaValueTextLoading}
        />
      ) : null}
    </>
  );
});
