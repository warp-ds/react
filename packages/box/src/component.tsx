import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { box as ccBox } from '@warp-ds/css/component-classes';

import { BoxProps } from './props.js';

export function Box(props: BoxProps) {
  const { children, as = 'div', bleed, neutral, bordered, info, role, ...rest } = props;

  return React.createElement(
    as,
    {
      ...(rest as Omit<BoxProps, 'children'> as {}),
      role: role ?? 'region',
      className: classNames(
        ccBox.box,
        {
          [ccBox.bleed]: bleed,
          [ccBox.info]: info,
          [ccBox.neutral]: neutral,
          [ccBox.bordered]: bordered,
        },
        props.className,
      ),
    },
    children,
  );
}
