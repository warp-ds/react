import { classNames } from "@chbphone55/classnames";
import React, { PropsWithChildren, ReactElement } from "react";
import { alert as ccAlert } from "@warp-ds/css/component-classes";
import { AlertProps } from ".";
import { ExpandTransition } from "../../_helpers";
import {
  IconAlertError16,
  IconAlertInfo16,
  IconAlertSuccess16,
  IconAlertWarning16,
} from "@warp-ds/icons/react";

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
