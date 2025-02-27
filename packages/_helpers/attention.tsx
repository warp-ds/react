import { MutableRefObject, useCallback, useEffect } from "react";

import { autoUpdatePosition, opposites } from "@warp-ds/core/attention";
import type { AttentionState, Directions } from "@warp-ds/core/attention";

import { messages as daMessages } from "../attention/src/locales/da/messages.mjs";
import { messages as enMessages } from "../attention/src/locales/en/messages.mjs";
import { messages as fiMessages } from "../attention/src/locales/fi/messages.mjs";
import { messages as nbMessages } from "../attention/src/locales/nb/messages.mjs";
import { messages as svMessages } from "../attention/src/locales/sv/messages.mjs";
import type {
  AttentionProps,
  AttentionVariants,
  ReferenceElement,
} from "../attention/src/props.js";
import { activateI18n, i18n } from "../i18n.js";

activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

export const getVariant = (
  variantProps: AttentionVariants,
  variantClasses: any
) => Object.keys(variantClasses).find((b) => !!variantProps[b]) || "";
export const pointingAtDirection = (actualDirection: Directions) => {
  switch (opposites[actualDirection]) {
    case "top-start":
    case "top":
    case "top-end":
      return i18n._({
        id: "attention.aria.pointingUp",
        message: "pointing up",
        comment:
          "Default screenreader message for top direction in the attention component",
      });
    case "right-start":
    case "right":
    case "right-end":
      return i18n._({
        id: "attention.aria.pointingRight",
        message: "pointing right",
        comment:
          "Default screenreader message for right direction in the attention component",
      });
    case "bottom-start":
    case "bottom":
    case "bottom-end":
      return i18n._({
        id: "attention.aria.pointingDown",
        message: "pointing down",
        comment:
          "Default screenreader message for bottom direction in the attention component",
      });
    case "left-start":
    case "left":
    case "left-end":
      return i18n._({
        id: "attention.aria.pointingLeft",
        message: "pointing left",
        comment:
          "Default screenreader message for left direction in the attention component",
      });
    default:
      return "";
  }
};

export const activeAttentionType = (props: AttentionProps) => {
  switch (true) {
    case props.tooltip:
      return i18n._({
        id: "attention.aria.tooltip",
        message: "tooltip",
        comment:
          "Default screenreader message for tooltip in the attention component",
      });
    case props.callout:
      return i18n._({
        id: "attention.aria.callout",
        message: "callout speech bubble",
        comment:
          "Default screenreader message for callout speech bubble in the attention component",
      });
    case props.popover:
      return i18n._({
        id: "attention.aria.popover",
        message: "popover speech bubble",
        comment:
          "Default screenreader message for popover speech bubble in the attention component",
      });
    case props.highlight:
      return i18n._({
        id: "attention.aria.highlight",
        message: "highlighted speech bubble",
        comment:
          "Default screenreader message for highlighted speech bubble in the attention component",
      });
    default:
      return "";
  }
};

export const useAutoUpdatePosition = (
  targetEl: MutableRefObject<ReferenceElement | null> | undefined,
  isShowing: boolean | undefined,
  attentionEl: MutableRefObject<HTMLDivElement | null>,
  attentionState: AttentionState
) => {
  const memoizedAutoUpdatePosition = useCallback(
    () => autoUpdatePosition(attentionState),
    [attentionState]
  );

  useEffect(() => {
    if (isShowing && targetEl?.current && attentionEl?.current) {
      const cleanup = memoizedAutoUpdatePosition();
      return cleanup;
    }
    // We should return a cleanup function to maintain consistent return type and handle potential cleanups explicitly.
    // This ensures compatibility with TypeScript's type expectations and React's cleanup mechanism.
    // Therefore we return an empty function here:
    return () => {};
  }, [targetEl, isShowing, attentionEl, memoizedAutoUpdatePosition]);
};
