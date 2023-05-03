import React from 'react';
import { classNames } from '@chbphone55/classnames';
import { step as ccStep } from '@warp-ds/component-classes';
import { useContext } from 'react';
import { StepsContext } from './component';

export interface StepProps {
  /**
   * Step is active
   * @default false
   */
  active?: boolean;

  /**
   * Step is completed
   * @default false
   */
  completed?: boolean;

  /**
   * Contents of Step
   */
  children: JSX.Element | JSX.Element[];
}

export function Step({ active, completed, children }: StepProps) {
  const StepsProps = useContext(StepsContext);
  const vertical = !StepsProps.horizontal;
  const left = !StepsProps.right;

  return (
    <div
      className={classNames({
        'f-step': true,
        [ccStep.stepVertical]: vertical,
        [ccStep.stepVerticalLeft]: vertical && left,
        [ccStep.stepVerticalRight]: vertical && !left,
        [ccStep.stepHorizontal]: !vertical,
      })}
    >
      {!vertical && (
        <div
          className={classNames({
            'step-line-h-l': true,
            [ccStep.stepLine]: true,
            [ccStep.stepLineHorizontal]: !vertical,
            [ccStep.stepLineIncomplete]: !active && !completed,
            [ccStep.stepLineComplete]: active || completed,
          })}
        />
      )}
      <div
        className={classNames({
          [ccStep.stepDot]: true,
          [ccStep.stepDotVertical]: vertical,
          [ccStep.stepDotVerticalLeft]: vertical && left,
          [ccStep.stepDotVerticalRight]: vertical && !left,
          [ccStep.stepDotHorizontal]: !vertical,
          [ccStep.stepDotIncomplete]: !(active || completed),
          [ccStep.stepDotActive]: active,
          [ccStep.stepDotComplete]: completed,
        })}
      >
        {completed && (
          <svg
            role="img"
            aria-label="✓"
            aria-current={active ? 'step' : undefined}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M13.007 4.447a.75.75 0 01.046 1.06l-5.5 6a.75.75 0 01-1.083.023l-3-3a.75.75 0 011.06-1.06l2.446 2.446 4.971-5.423a.75.75 0 011.06-.046z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </div>
      <div
        className={classNames({
          'step-line-h-r': true,
          [ccStep.stepLine]: true,
          [ccStep.stepLineVertical]: vertical,
          [ccStep.stepLineVerticalLeft]: vertical && left,
          [ccStep.stepLineVerticalRight]: vertical && !left,
          [ccStep.stepLineHorizontal]: !vertical,
          [ccStep.stepLineIncomplete]: !completed,
          [ccStep.stepLineComplete]: completed,
        })}
      />
      <div
        className={classNames({
          [ccStep.content]: true,
          [ccStep.contentVertical]: vertical,
          [ccStep.contentHorizontal]: !vertical,
        })}
      >
        {children}
      </div>
    </div>
  );
}
