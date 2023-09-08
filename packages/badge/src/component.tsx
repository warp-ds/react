import { classNames } from '@chbphone55/classnames';
//import { badge as ccBadge } from '@warp-ds/css/component-classes';
const ccBadge = {
    base: 'py-4 px-8 border-0 rounded-4 text-xs inline-flex',
    neutral: 'i-bg-$color-badge-neutral-background i-text-$color-badge-neutral-text',
    info: 'i-bg-$color-badge-info-background i-text-$color-badge-info-text',
    positive: 'i-bg-$color-badge-positive-background i-text-$color-badge-positive-text',
    warning: 'i-bg-$color-badge-warning-background i-text-$color-badge-warning-text',
    negative: 'i-bg-$color-badge-negative-background i-text-$color-badge-negative-text',
    disabled: 'i-bg-$color-badge-disabled-background i-text-$color-badge-disabled-text',
    price: 'i-bg-$color-badge-price-background i-text-$color-badge-price-text',
    notification: 'i-bg-$color-badge-notification-background i-text-$color-badge-notification-text',
    positionBase: 'absolute backdrop-blur',
    positionTL: 'rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0',
    positionTR: 'rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0',
    positionBR: 'rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0',
    positionBL: 'rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0',
};
import React from 'react';
import { BadgeProps } from './props';

export function Badge(props: BadgeProps) {
  const {
    children,
    as = 'div',
    type = 'neutral',
    position,
    ...rest
  } = props;

  return React.createElement(
    as,
    {
      ...(rest as Omit<BadgeProps, 'children'> as {}),
      className: classNames(
        ccBadge.base,
        ccBadge[type],
        {
            [ccBadge.positionBase]: !!position,
            [ccBadge.positionTL]: position === 'tl',
            [ccBadge.positionTR]: position === 'tr',
            [ccBadge.positionBR]: position === 'br',
            [ccBadge.positionBL]: position === 'bl',
        },
        props.className,
      ),
    },
    children,
  );
}
