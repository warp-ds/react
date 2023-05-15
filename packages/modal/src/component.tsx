import { classNames } from '@chbphone55/classnames';
import { modal as ccModal, button as ccButton } from '@warp-ds/component-classes';
import React, { useEffect, useRef } from 'react';
import { useId } from '../../utils/src';
import FocusLock from 'react-focus-lock';
import { ModalProps } from './props';
import { setup, teardown } from 'scroll-doctor';

/**
 * A Modal dialog that renders on top the page
 */
export const Modal = ({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...props
}: ModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const id = useId(props.id);

  useEffect(() => {
    teardown();
    if (!contentRef.current) return;
    props.open && setup(contentRef.current);
  }, [props.open, contentRef]);

  useEffect(() => {
    if (!props.initialFocusRef) return;
    props.initialFocusRef.current?.focus();
  }, [props.open, props.initialFocusRef]);

  if (!props.open) return <></>;
  const ccModal = {
    backdrop:
      `before:i-bg-$color-modal-backdrop-background before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-25 fixed inset-0 flex sm:place-content-center sm:place-items-center items-end z-20 `,
    modal:
      'f-modal w-[640px] max-h-4/5 relative transition-300 backface-hidden will-change-height rounded-8 mx-0 sm:mx-16 i-bg-$color-modal-background flex flex-col overflow-hidden outline-none space-y-16 pt-8 sm:pt-32 sm:pb-32 rounded-b-0 sm:rounded-b-8',
    content:
      'block overflow-y-auto overflow-x-hidden last:mb-0 flex-grow flex-shrink px-16 sm:px-32 relative',
    footer: 'flex justify-end flex-shrink-0 px-16 sm:px-32',
    transitionTitle: 'transition-all duration-300',
    title:
      '-mt-4 sm:-mt-8 h-40 sm:h-48 grid f-grid gap-8 sm:gap-16 grid-cols-[auto_1fr_auto] items-center px-16 sm:px-32 border-b sm:border-b-0 flex-shrink-0',
    titleText: 'mb-0 h4 sm:h3',
    titleButton: `${ccButton.buttonPill} sm:min-h-[32px] sm:min-w-[32px]`,
    titleButtonLeft: '-ml-8 sm:-ml-12',
    titleButtonRight: '-mr-8 sm:-mr-12',
    titleButtonIcon: 'h-16 w-16 sm:h-24 sm:w-24',
  };
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
          onClick={(e) => {
            e.stopPropagation();
          }}
          aria-label={ariaLabel}
          aria-labelledby={
            ariaLabelledBy ??
            (props.title && !ariaLabel ? `${id}__title` : undefined)
          }
          onKeyDown={(event) => {
            if (!props.onDismiss) return;
            if (event.key === 'Escape') {
              props.onDismiss();
            }
          }}
          className={ccModal.modal}
          tabIndex={-1}
        >
          <div className={ccModal.title}>
            {typeof props.left === 'boolean' && props.left ? (
              <button
                type="button"
                aria-label="Tilbake"
                className={classNames([
                  ccModal.transitionTitle,
                  ccModal.titleButton,
                  ccModal.titleButtonLeft,
                  'justify-self-start',
                ])}
                onClick={props.onDismiss}
              >
                <svg
                  className={classNames([
                    ccModal.titleButtonIcon,
                    'transform rotate-90',
                  ])}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fillRule="nonzero"
                    d="M8 2.25a.75.75 0 01.743.648L8.75 3v8.189l3.72-3.72a.75.75 0 011.133.977l-.073.084-5 5a.747.747 0 01-.374.204l-.104.014h-.104a.747.747 0 01-.478-.218l-5-5a.75.75 0 01.976-1.133l.084.073 3.72 3.719V3A.75.75 0 018 2.25z"
                  ></path>
                </svg>
              </button>
            ) : (
              props.left
            )}

            <div
              id={`${id}__title`}
              className={classNames({
                [ccModal.transitionTitle]: true,
                'justify-self-center': !!props.left,
                'col-span-2': !!!props.left,
              })}
            >
              {typeof props.title === 'string' ? (
                <p className={ccModal.titleText}>{props.title}</p>
              ) : (
                props.title
              )}
            </div>

            {typeof props.right === 'boolean' && props.right ? (
              <button
                type="button"
                aria-label="Lukk"
                onClick={props.onDismiss}
                className={classNames([
                  ccModal.transitionTitle,
                  ccModal.titleButton,
                  ccModal.titleButtonRight,
                  'justify-self-end',
                ])}
              >
                <svg
                  className={ccModal.titleButtonIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M12 12l6 6-6-6-6 6 6-6zm0 0L6 6l6 6 6-6-6 6z"
                  />
                </svg>
              </button>
            ) : (
              props.right
            )}
          </div>
          <div ref={contentRef} className={ccModal.content}>
            {props.children}
          </div>

          {!!props.footer && <div className={ccModal.footer}>{props.footer}</div>}
        </div>
      </div>
    </FocusLock>
  );
};
