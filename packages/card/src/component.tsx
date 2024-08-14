import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { card as ccCard } from '@warp-ds/css/component-classes';

import { CardProps } from './props.js';

export function Card(props: CardProps) {
  const { as = 'div', children, flat, selected, ...rest } = props;

  return React.createElement(
    as,
    {
      ...rest,
      className: classNames(props.className, [
        ccCard.base,
        flat ? ccCard.flat : ccCard.shadow,
        selected && !flat && ccCard.selected,
        selected && flat ? ccCard.flatSelected : ccCard.flatUnselected,
      ]),
    },
    <>
      {!props.flat && <div className={classNames([ccCard.outline, props.selected ? ccCard.outlineSelected : ccCard.outlineUnselected])} />}

      {children}
    </>,
  );
}
