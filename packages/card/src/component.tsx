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
      className: classNames(props.className, [
        ccCard.card,
        props.flat ? ccCard.cardFlat : ccCard.cardShadow,
        props.selected ? (props.flat ? ccCard.cardFlatSelected : ccCard.cardSelected) : props.flat && ccCard.cardFlatUnselected,
      ]),
    },
    <>
      {!props.flat && (
        <div className={classNames([ccCard.cardOutline, props.selected ? ccCard.cardOutlineSelected : ccCard.cardOutlineUnselected])} />
      )}

      {children}
    </>,
  );
}
