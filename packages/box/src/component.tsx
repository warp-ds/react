import { classNames } from '@chbphone55/classnames';
import { box as ccBox } from '@warp-ds/css/component-classes';
import React from 'react';
import { BoxProps } from './props';

export function Box(props: BoxProps) {
  const {
    children,
    as = 'div',
    bleed,
    clickable,
    neutral,
    bordered,
    info,
    ...rest
  } = props;

  return React.createElement(
    as,
    {
      ...(rest as Omit<BoxProps, 'children'> as {}),
      className: classNames(
        ccBox.box,
        {
          [ccBox.bleed]: bleed,
          [ccBox.info]: info,
          [ccBox.neutral]: neutral,
          [ccBox.bordered]: bordered,
          [ccBox.infoClickable]:clickable && info,
          [ccBox.neutralClickable]: clickable && neutral,
          [ccBox.borderedClickable]: clickable && bordered,
        },
        props.className,
      ),
    },
    children,
  );
}