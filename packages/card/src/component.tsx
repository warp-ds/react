import React from 'react';
import { card as ccCard } from '@warp-ds/css/component-classes';
import { classNames } from '@chbphone55/classnames';
import { CardProps } from './props.js';
import { useLogDeprecationWarning } from '../../utils/src/index.js';

export function Card(props: CardProps) {
  const { as = 'div', children, flat, ...rest } = props;

  useLogDeprecationWarning({
    condition: !!props.onClick,
    message:
      "'onClick' prop in Card is deprecated. Use Clickable component to handle click events in Cards.",
  });

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
      // @balbinak(08.11.22): onClick support in Card is deprecated. Remove when Fabric React users are ready for this major change
      tabIndex: props.onClick ? 0 : undefined,
      onKeyDown: props.onClick
        ? (e) => {
            if (
              typeof props.onClick === 'function' &&
              (e.key === 'Enter' || e.key === ' ')
            ) {
              e.preventDefault();
              props.onClick();
              return;
            }
          }
        : undefined,
    },
    <>
      {props.onClick && (
        <button
          className="sr-only"
          aria-pressed={props.selected}
          tabIndex={-1}
          type="button"
        >
          Velg
        </button>
      )}

      {!props.flat && (
        <div
          className={classNames([
            ccCard.cardOutline,
            props.selected ? ccCard.cardOutlineSelected : ccCard.cardOutlineUnselected,
          ])}
        />
      )}

      {children}
    </>,
  );
}
