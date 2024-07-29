import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { card as ccCard } from '@warp-ds/css/component-classes';

import { CardProps } from './props.js';

export function Card(props: CardProps) {
  const { as = 'div', children, flat, selected, ...rest } = props;

  let backgroundClass: string;
  if (selected) {
    backgroundClass = flat ? ccCard.cardFlatSelected : ccCard.cardSelected;
  } else {
    backgroundClass = flat ? ccCard.cardFlatUnselected : ccCard.cardShadowBackground;
  }

  return React.createElement(
    as,
    {
      ...rest,
      className: classNames(props.className, [ccCard.card, props.flat ? ccCard.cardFlat : ccCard.cardShadow, backgroundClass]),
    },
    <>
      {!props.flat && (
        <div className={classNames([ccCard.cardOutline, props.selected ? ccCard.cardOutlineSelected : ccCard.cardOutlineUnselected])} />
      )}

      {children}
    </>,
  );
}
