import React, { PropsWithChildren, ReactElement } from 'react';

import { classNames } from '@chbphone55/classnames';
import { alert as ccAlert } from '@warp-ds/css/component-classes';
import IconError16 from '@warp-ds/icons/react/error-16';
import IconInfo16 from '@warp-ds/icons/react/info-16';
import IconSuccess16 from '@warp-ds/icons/react/success-16';
import IconWarning16 from '@warp-ds/icons/react/warning-16';

import { ExpandTransition } from '../../_helpers/index.js';

import type { AlertProps } from './props.js';

export function Alert({ show, type, role = 'alert', children, ...props }: PropsWithChildren<AlertProps>) {
  const variantClasses = ccAlert[type];
  const iconVariantClasses = ccAlert[`${type}Icon`];

  return (
    <ExpandTransition show={show}>
      <div role={role} className={classNames(props.className, [ccAlert.wrapper, variantClasses])} style={props.style}>
        <div className={classNames([ccAlert.icon, iconVariantClasses])}>{iconMap[type]}</div>
        <div className={ccAlert.textWrapper}>{children}</div>
      </div>
    </ExpandTransition>
  );
}

const iconMap: {
  // eslint-disable-next-line
  [key in AlertProps['type']]: ReactElement;
} = {
  negative: <IconError16 />,
  positive: <IconSuccess16 />,
  warning: <IconWarning16 />,
  info: <IconInfo16 />,
};
