import React, { AnchorHTMLAttributes, forwardRef, MouseEvent, Ref } from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { button as ccButton } from '@warp-ds/css/component-classes';

import { activateI18n } from '../../i18n.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import type { ButtonProps } from './props.js';

const buttonVariants = ['primary', 'secondary', 'negative', 'utility', 'pill', 'link'] as const;

export const Button = forwardRef<HTMLButtonElement | AnchorHTMLAttributes<HTMLAnchorElement>, ButtonProps>((props, ref) => {
  const { primary, secondary, negative, utility, quiet, small, link, href, pill, loading, disabled, fullWidth, ...rest } = props;

  const defaultVariant = secondary || !buttonVariants.find((b) => !!props[b]);

  const primaryClasses = [
    !small && !quiet && !loading && (disabled ? ccButton.primaryDisabled : ccButton.primary),
    small && !quiet && !loading && (disabled ? ccButton.primarySmallDisabled : ccButton.primarySmall),
    small && quiet && !loading && (disabled ? ccButton.primarySmallQuietDisabled : ccButton.primarySmallQuiet),
    small && loading && (quiet ? ccButton.primarySmallQuietLoading : ccButton.primarySmallLoading),
    !small && quiet && !loading && (disabled ? ccButton.primaryQuietDisabled : ccButton.primaryQuiet),
    !small && loading && (quiet ? ccButton.primaryQuietLoading : ccButton.primaryLoading),
  ];

  const secondaryClasses = [
    !small && !quiet && !loading && (disabled ? ccButton.secondaryDisabled : ccButton.secondary),
    small && !quiet && !loading && (disabled ? ccButton.secondarySmallDisabled : ccButton.secondarySmall),
    small && quiet && !loading && (disabled ? ccButton.secondarySmallQuietDisabled : ccButton.secondarySmallQuiet),
    small && loading && (quiet ? ccButton.secondarySmallQuietLoading : ccButton.secondarySmallLoading),
    !small && quiet && !loading && (disabled ? ccButton.secondaryQuietDisabled : ccButton.secondaryQuiet),
    !small && loading && (quiet ? ccButton.secondaryQuietLoading : ccButton.secondaryLoading),
  ];

  const utilityClasses = [
    !small && !quiet && !loading && (disabled ? ccButton.utilityDisabled : ccButton.utility),
    small && !quiet && !loading && (disabled ? ccButton.utilitySmallDisabled : ccButton.utilitySmall),
    small && quiet && !loading && (disabled ? ccButton.utilitySmallQuietDisabled : ccButton.utilitySmallQuiet),
    small && loading && (quiet ? ccButton.utilitySmallQuietLoading : ccButton.utilitySmallLoading),
    !small && quiet && !loading && (disabled ? ccButton.utilityQuietDisabled : ccButton.utilityQuiet),
    !small && loading && (quiet ? ccButton.utilityQuietLoading : ccButton.utilityLoading),
  ];

  const negativeClasses = [
    !small && !quiet && !loading && (disabled ? ccButton.negativeDisabled : ccButton.negative),
    small && !quiet && !loading && (disabled ? ccButton.negativeSmallDisabled : ccButton.negativeSmall),
    small && quiet && !loading && (disabled ? ccButton.negativeSmallQuietDisabled : ccButton.negativeSmallQuiet),
    small && loading && (quiet ? ccButton.negativeSmallQuietLoading : ccButton.negativeSmallLoading),
    !small && quiet && !loading && (disabled ? ccButton.negativeQuietDisabled : ccButton.negativeQuiet),
    !small && loading && (quiet ? ccButton.negativeQuietLoading : ccButton.negativeLoading),
  ];

  const pillClasses = [
    !loading && (!small ? ccButton.pill : ccButton.pillSmall),
    loading && (!small ? ccButton.pillLoading : ccButton.pillSmallLoading),
  ];

  const linkClasses = [small ? ccButton.linkSmall : ccButton.link];

  const classes = classNames(props.className, [
    primary && primaryClasses,
    defaultVariant && secondaryClasses,
    utility && utilityClasses,
    negative && negativeClasses,
    pill && pillClasses,
    link && linkClasses,
    href && ccButton.linkAsButton,
    fullWidth ? ccButton.fullWidth : ccButton.contentWidth,
  ]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };

  activateI18n(enMessages, nbMessages, fiMessages, daMessages);

  const ariaValueTextLoading = i18n._({
    id: 'button.aria.loading',
    message: 'Loading...',
    comment: 'Screenreader message for buttons that are loading',
  });

  return (
    <>
      {href ? (
        <a
          onClick={handleClick}
          aria-current={props['aria-current']}
          href={disabled ? undefined : href}
          target={props.target}
          rel={props.target === '_blank' ? props.rel || 'noopener' : undefined}
          ref={ref as Ref<HTMLAnchorElement>}
          className={classes}
          role="button"
          aria-disabled={disabled}>
          {props.children}
        </a>
      ) : (
        <button
          {...rest}
          type={props.type || 'button'}
          ref={ref as Ref<HTMLButtonElement>}
          className={classes}
          role={props.link ? 'link' : 'button'}
          disabled={disabled}>
          {props.children}
        </button>
      )}
      {props.loading ? <span className="sr-only" role="progressbar" aria-valuenow={0} aria-valuetext={ariaValueTextLoading} /> : null}
    </>
  );
});
