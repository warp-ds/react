import React, { useEffect, useRef } from "react";

import { classNames } from "@chbphone55/classnames";
import { modal as ccModal } from "@warp-ds/css/component-classes";
import IconArrowLeft16 from "@warp-ds/icons/react/arrow-left-16";
import IconClose16 from "@warp-ds/icons/react/close-16";
import FocusLock from "react-focus-lock/dist/es2015";
import { setup, teardown } from "scroll-doctor";

import { activateI18n, i18n } from "../../i18n.js";
import { useId } from "../../utils/src/index.js";

import { messages as daMessages } from "./locales/da/messages.mjs";
import { messages as enMessages } from "./locales/en/messages.mjs";
import { messages as fiMessages } from "./locales/fi/messages.mjs";
import { messages as nbMessages } from "./locales/nb/messages.mjs";
import { messages as svMessages } from "./locales/sv/messages.mjs";
import type { ModalProps } from "./props.js";

activateI18n(enMessages, nbMessages, fiMessages, daMessages, svMessages);

/**
 * A Modal dialog that renders on top of the page
 */
export const Modal = ({
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: ModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const id = useId(props.id);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(
    () =>
      // Cleanup scroll lock if component unmounts before it receives an updated
      // open prop and is closed. Can happen if the host conditionally renders the
      // modal.
      () =>
        teardown(),
    []
  );

  useEffect(() => {
    teardown();
    if (!contentRef.current) return;
    props.open && setup(contentRef.current);
  }, [props.open, contentRef]);

  useEffect(() => {
    if (!props.initialFocusRef) {
      props.right && closeButtonRef.current?.focus();
    } else {
      props.initialFocusRef.current?.focus();
    }
  }, [props.open, props.initialFocusRef, props.right]);

  if (!props.open) return <></>;

  return (
    <FocusLock>
      <div
        onClick={props.onDismiss}
        className={classNames(props.className, ccModal.backdrop)}
        style={{ ...props.style }}
      >
        <div
          role="dialog"
          aria-modal="true"
          id={id}
          onClick={(e) => e.stopPropagation()}
          aria-label={ariaLabel}
          aria-labelledby={
            ariaLabelledBy ??
            (props.title && !ariaLabel ? `${id}__title` : undefined)
          }
          onKeyDown={(event) => {
            if (!props.onDismiss) return;
            if (event.key === "Escape") {
              props.onDismiss();
            }
          }}
          className={ccModal.base}
          tabIndex={-1}
        >
          <div className={ccModal.title}>
            {typeof props.left === "boolean" && props.left ? (
              <button
                type="button"
                aria-label={i18n._({
                  id: "modal.aria.back",
                  message: "Back",
                  comment: "Aria label for the back button in modal",
                })}
                className={classNames([
                  ccModal.transitionTitle,
                  ccModal.titleButton,
                  ccModal.titleButtonLeft,
                ])}
                onClick={
                  props.onLeftClick ? props.onLeftClick : props.onDismiss
                }
              >
                <IconArrowLeft16 className={ccModal.titleButtonIcon} />
              </button>
            ) : (
              props.left
            )}

            <div
              id={`${id}__title`}
              className={classNames([
                ccModal.transitionTitle,
                !!props.left
                  ? ccModal.transitionTitleCenter
                  : ccModal.transitionTitleColSpan,
              ])}
            >
              {typeof props.title === "string" ? (
                <h1 className={ccModal.titleText}>{props.title}</h1>
              ) : (
                props.title
              )}
            </div>

            {typeof props.right === "boolean" && props.right ? (
              <button
                ref={closeButtonRef}
                type="button"
                aria-label={i18n._({
                  id: "modal.aria.close",
                  message: "Close",
                  comment: "Aria label for the close button in modal",
                })}
                onClick={props.onDismiss}
                className={classNames([
                  ccModal.transitionTitle,
                  ccModal.titleButton,
                  ccModal.titleButtonRight,
                ])}
              >
                <IconClose16 className={ccModal.titleButtonIcon} />
              </button>
            ) : (
              props.right
            )}
          </div>
          <div ref={contentRef} className={ccModal.content}>
            {props.children}
          </div>

          {!!props.footer && (
            <div className={ccModal.footer}>{props.footer}</div>
          )}
        </div>
      </div>
    </FocusLock>
  );
};
