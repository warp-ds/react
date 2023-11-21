import React from "react";
import { IconClose16, IconSearch16 } from "@warp-ds/icons/react";

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

  return React.createElement(
    props.label ? "div" : "button",
    {
      "aria-label": !props.label ? props["aria-label"] : undefined,
      type: props.search ? "submit" : props.clear ? "reset" : undefined,
      onClick: props.onClick,
      className: props.label ? `flex justify-center items-center focusable focus:[--w-outline-offset:-2px] bg-transparent ${props.prefix ? "pl-12 pr-10" : "pl-10 pr-12"}` : "flex justify-center items-center focusable focus:[--w-outline-offset:-2px] bg-transparent min-w-40",
    },
    <>
      {props.clear && <IconClose16 />}

      {props.search && <IconSearch16 />}

      {props.label && <span className="antialiased block relative cursor-default pb-0 font-bold text-xs i-text-$color-label-text">{props.label}</span>}
    </>
  );
}

/*
className: props.label ? `flex justify-center items-center focusable focus:[--w-outline-offset:-2px] bg-transparent ${props.prefix ? "pl-12 pr-10" : "pl-10 pr-12"}` : "flex justify-center items-center focusable focus:[--w-outline-offset:-2px] bg-transparent min-w-40",

{props.label && <span className="antialiased block relative cursor-default pb-0 font-bold text-xs i-text-$color-label-text">{props.label}</span>}
*/