import { classNames } from "@chbphone55/classnames";
import React, { PropsWithChildren, ReactElement } from "react";
import { alert as ccAlert } from "@warp-ds/css/component-classes";
import { AlertProps } from "./props.js";
import { ExpandTransition } from "../../_helpers/index.js";
import IconAlertError16 from '@warp-ds/icons/react/alert-error-16';
import IconAlertInfo16 from '@warp-ds/icons/react/alert-info-16';
import IconAlertSuccess16 from '@warp-ds/icons/react/alert-success-16';
import IconAlertWarning16 from '@warp-ds/icons/react/alert-warning-16';

export function Alert({
  show,
  type,
  role = "alert",
  children,
  ...props
}: PropsWithChildren<AlertProps>) {
  const variantClasses = ccAlert[type];
  const iconVariantClasses = ccAlert[`${type}Icon`];

  return (
    <ExpandTransition show={show}>
      <div
        role={role}
        className={classNames(
          props.className,
          `${ccAlert.alert} ${variantClasses}`
        )}
        style={props.style}
      >
        <div className={`${ccAlert.icon} ${iconVariantClasses}`}>
          {iconMap[type]}
        </div>
        <div className={ccAlert.textWrapper}>{children}</div>
      </div>
    </ExpandTransition>
  );
}

const iconMap: {
  [key in AlertProps["type"]]: ReactElement;
} = {
  negative: <IconAlertError16 />,
  positive: <IconAlertSuccess16 />,
  warning: <IconAlertWarning16 />,
  info: <IconAlertInfo16 />,
};
