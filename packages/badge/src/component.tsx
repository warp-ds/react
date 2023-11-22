import { classNames } from '@chbphone55/classnames';
import { badge as ccBadge } from '@warp-ds/css/component-classes';
import React from 'react';
import { BadgeProps } from './props.js';

export function Badge(props: BadgeProps) {
  const {
    children,
    as = 'div',
    variant = 'neutral',
    position,
    ...rest
  } = props;

  return React.createElement(
    as,
    {
      ...(rest as Omit<BadgeProps, 'children'> as {}),
      className: classNames(
        ccBadge.base,
        ccBadge[variant],
        {
            [ccBadge.positionBase]: !!position,
            [ccBadge.positionTL]: position === 'top-left',
            [ccBadge.positionTR]: position === 'top-right',
            [ccBadge.positionBR]: position === 'bottom-right',
            [ccBadge.positionBL]: position === 'bottom-left',
        },
        props.className,
      ),
    },
    children,
  );
}
