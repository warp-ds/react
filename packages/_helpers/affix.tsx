import React from "react";
import { suffix, prefix } from "@warp-ds/css/component-classes";
import { classNames } from "@chbphone55/classnames";
import IconClose16 from "@warp-ds/icons/react/close-16";
import IconSearch16 from "@warp-ds/icons/react/search-16";

interface AffixProps {
  /** Defines a string value that labels the affix element. */
  "aria-label"?: string;

  /** Affix added at the beginning of input */
  prefix?: boolean;

  /** Affix added at the end of input */
  suffix?: boolean;

  /** Displays a clear icon */
  clear?: boolean;

  /** Displays a search icon */
  search?: boolean;

  /** Displays a string */
  label?: string;

  /** Click handler paired with clear or search */
  onClick?: () => void;
}

export function Affix(props: AffixProps) {
  const classBase = props.prefix ? prefix : suffix;

  return React.createElement(
    props.label ? "div" : "button",
    {
      "aria-label": !props.label ? props["aria-label"] : undefined,
      type: props.search ? "submit" : props.clear ? "reset" : undefined,
      onClick: props.onClick,
      className: classNames({
        [classBase.wrapper]: true,
        [classBase.wrapperWithLabel]: props.label,
        [classBase.wrapperWithIcon]: !props.label,
      }),
    },
    <>
      {props.clear && <IconClose16 />}

      {props.search && <IconSearch16 />}

      {props.label && <span className={classBase.label}>{props.label}</span>}
    </>
  );
}
