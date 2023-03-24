import { classNames } from '@chbphone55/classnames';
import React, { PropsWithChildren, ReactElement } from 'react';
import { AlertProps } from '.';
import { ExpandTransition } from '../../_helpers';

export function Alert({
  show,
  type,
  role = 'alert',
  children,
  ...props
}: PropsWithChildren<AlertProps>) {

  const variantClasses = alert[type]
  const iconVariantClasses = alert[`${type}Icon`]

  return (
    <ExpandTransition show={show}>
      <div
        role={role}
        className={classNames(
          props.className,
         `${alert.alert} ${variantClasses}`,
        )}
        style={{ borderLeftColor: `var(--w-color-alert-${type}-border)`, ...props.style }}
      >
        <div
          className={`${alert.icon} ${iconVariantClasses}`}
          style={{ minWidth: '16px' }}
        >
          {iconMap[type]}
        </div>
        <div className="last-child:mb-0 text-14">{children}</div>
      </div>
    </ExpandTransition>
  );
}

// TODO(@balbinak): export this from warp-ds/component-classes
// TODO(@balbinak): add border-left-color token when fixed in warp-ds/drive
const alert: Record<string, string> = {
  alert: "flex p-16 border border-l-4 rounded-4",
  icon: "w-16 mr-8 pt-4",
  critical:  "i-border-$color-alert-critical-subtle-border i-bg-$color-alert-critical-background i-text-$color-alert-critical-text",
  criticalIcon: "i-text-$color-alert-critical-icon",
  success:  "i-border-$color-alert-success-subtle-border i-bg-$color-alert-success-background i-text-$color-alert-success-text",
  successIcon: "i-text-$color-alert-success-icon",
  warning:  "i-border-$color-alert-warning-subtle-border i-bg-$color-alert-warning-background i-text-$color-alert-warning-text",
  warningIcon: "i-text-$color-alert-warning-icon",
  info:  "i-border-$color-alert-info-subtle-border i-bg-$color-alert-info-background i-text-$color-alert-info-text",
  infoIcon: "i-text-$color-alert-info-icon"
}

const iconMap: {
  [key in AlertProps['type']]: ReactElement;
} = {
  critical: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
    >
      <path
        d="M4.1.586A2 2 0 0 1 5.516 0h4.97A2 2 0 0 1 11.9.586L15.413 4.1A2 2 0 0 1 16 5.514v4.97a2 2 0 0 1-.586 1.415L11.9 15.413a2 2 0 0 1-1.415.586h-4.97a2 2 0 0 1-1.414-.586L.586 11.9A2 2 0 0 1 0 10.485v-4.97A2 2 0 0 1 .586 4.1L4.1.586Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V4A.75.75 0 0 1 8 3.25Z"
        fill="#fff"
      />
      <path d="M8.8 11.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0Z" fill="#fff" />
    </svg>
  ),
  success: (
    <svg
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8"
        cy="8"
        r="8"
        transform="rotate(180 8 8)"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 4.94c.3.27.34.75.06 1.06l-4 4.5a.75.75 0 0 1-1.09.03l-2-2a.75.75 0 0 1 1.06-1.06l1.44 1.44L10.44 5a.75.75 0 0 1 1.06-.07Z"
        fill="#fff"
      />
    </svg>
  ),
  warning: (
    <svg
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M.24 12 6.16 1.09a2.1 2.1 0 0 1 3.68 0l5.92 10.93c.73 1.36-.28 2.99-1.85 2.99H2.1a2.04 2.04 0 0 1-1.85-3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 3.25c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0V4c0-.41.34-.75.75-.75Z"
        fill="#fff"
      />
      <path d="M8.8 11.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0Z" fill="#fff" />
    </svg>
  ),
  info: (
    <svg
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 12a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v4ZM8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        fill="#fff"
      />
    </svg>
  ),
};
