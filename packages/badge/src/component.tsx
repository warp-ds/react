import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { badge as ccBadge } from '@warp-ds/css/component-classes';

import { BadgeProps } from './props.js';

export function Badge(props: BadgeProps) {
  const { children, as = 'div', variant = 'neutral', position, ...rest } = props;

  const wrapperClasses = classNames(props.className, [
    ccBadge.base,
    ccBadge[variant],
    !!position && ccBadge.positionBase,
    position === 'top-left' && ccBadge.positionTL,
    position === 'top-right' && ccBadge.positionTR,
    position === 'bottom-right' && ccBadge.positionBR,
    position === 'bottom-left' && ccBadge.positionBL,
  ]);

  return React.createElement(
    as,
    {
      ...(rest as Omit<BadgeProps, 'children'> as {}),
      className: wrapperClasses,
    },
    children,
  );
}
