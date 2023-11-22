import React, { forwardRef, Ref, AnchorHTMLAttributes, MouseEvent } from 'react';
import { button as ccButton } from '@warp-ds/css/component-classes';
import { i18n } from '@lingui/core';
import { classNames } from '@chbphone55/classnames';
import type { ButtonProps } from './props.js';
import { messages as enMessages} from './locales/en/messages.mjs';
import { messages as nbMessages} from './locales/nb/messages.mjs';
import { messages as fiMessages} from './locales/fi/messages.mjs';
import { activateI18n } from '../../i18n.js';

const buttonVariants = [
  'primary',
  'secondary',
  'negative',
  'utility',
  'pill',
  'link',
] as const;

export const Button = forwardRef<
  HTMLButtonElement | AnchorHTMLAttributes<HTMLAnchorElement>,
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
    fullWidth,
    ...rest
  } = props;

  const defaultVariant = secondary || !buttonVariants.find(b => !!props[b]);

  const classes = classNames(props.className, {
    [ccButton.secondary]: defaultVariant && !small && !quiet && !loading && !props.disabled,
    [ccButton.secondaryDisabled]: defaultVariant && !small && !quiet && !loading && props.disabled,
    [ccButton.secondarySmall]: defaultVariant && small && !quiet && !loading && !props.disabled,
    [ccButton.secondarySmallDisabled]: defaultVariant && small && !quiet && !loading && props.disabled,
    [ccButton.secondarySmallLoading]: defaultVariant && small && !quiet && loading,
    [ccButton.secondarySmallQuiet]: defaultVariant && small && quiet && !loading && !props.disabled,
    [ccButton.secondarySmallQuietDisabled]: defaultVariant && small && quiet && !loading && props.disabled,
    [ccButton.secondarySmallQuietLoading]: defaultVariant && small && quiet && loading,
    [ccButton.secondaryQuiet]: defaultVariant && !small && quiet && !loading && !props.disabled,
    [ccButton.secondaryQuietDisabled]: defaultVariant && !small && quiet && !loading && props.disabled,
    [ccButton.secondaryQuietLoading]: defaultVariant && !small && quiet && loading,
    [ccButton.secondaryLoading]: defaultVariant && !small && !quiet && loading,
    
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
    [ccButton.fullWidth]: fullWidth,
    [ccButton.contentWidth]: !fullWidth,
  });

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };

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
          onClick={handleClick}
          aria-current={props['aria-current']}
          href={props.disabled ? undefined : props.href}
          target={props.target}
          rel={
            props.target === '_blank'
              ? props.rel || 'noopener'
              : undefined
          }
          ref={ref as Ref<HTMLAnchorElement>}
          className={classes}
          role='button'
          aria-disabled={props.disabled}
        >
          {props.children}
        </a>
      ) : (
        <button
          {...rest}
          type={props.type || 'button'}
          ref={ref as Ref<HTMLButtonElement>}
          className={classes}
          role={props.link ? 'link' : 'button'}
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
