import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { card as ccCard } from '@warp-ds/css/component-classes';

import { CardProps } from './props.js';

export function Card(props: CardProps) {
  const { as = 'div', children, flat, ...rest } = props;


  return React.createElement(
    as,
    {
      ...rest,
      className: classNames(props.className, {
        [ccCard.card]: true,
        [ccCard.cardShadow]: !props.flat,
        [ccCard.cardSelected]: !props.flat && props.selected,
        [ccCard.cardFlat]: props.flat,
        [props.selected ? ccCard.cardFlatSelected : ccCard.cardFlatUnselected]: props.flat,
      }),
    },
    <>
      {!props.flat && (
        <div className={classNames([ccCard.cardOutline, props.selected ? ccCard.cardOutlineSelected : ccCard.cardOutlineUnselected])} />
      )}

      {children}
    </>,
  );
}
