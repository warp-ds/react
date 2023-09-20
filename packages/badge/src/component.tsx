import { classNames } from '@chbphone55/classnames';
import { badge as ccBadge } from '@warp-ds/css/component-classes';
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
