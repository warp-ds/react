import React from "react";
import { classNames } from "@chbphone55/classnames";
import { step as ccStep } from "@warp-ds/css/component-classes";
import { useContext } from "react";
import { StepsContext } from "./component";
import { IconCheck16 } from "@warp-ds/icons/react";
import { i18n } from '@lingui/core';

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

  const stepClasses = classNames({
    [ccStep.stepVertical]: vertical,
    [ccStep.stepVerticalLeft]: vertical && left,
    [ccStep.stepVerticalRight]: vertical && !left,
    [ccStep.stepHorizontal]: !vertical,
  });

  const stepLineHorizontalClasses = classNames({
    [ccStep.stepLine]: true,
    [ccStep.stepLineHorizontalLeft]: true,
    [ccStep.stepLineHorizontal]: !vertical,
    [ccStep.stepLineIncomplete]: !active && !completed,
    [ccStep.stepLineComplete]: active || completed,
  });

  const stepDotClasses = classNames({
    [ccStep.stepDot]: true,
    [ccStep.stepDotVerticalRight]: vertical && !left,
    [ccStep.stepDotHorizontal]: !vertical,
    [ccStep.stepDotIncomplete]: !(active || completed),
    [ccStep.stepDotActive]: active || completed,
  });

  const stepLineClasses = classNames({
    [ccStep.stepLine]: true,
    [ccStep.stepLineHorizontalRight]: true,
    [ccStep.stepLineVertical]: vertical,
    [ccStep.stepLineVerticalRight]: vertical && !left,
    [ccStep.stepLineHorizontal]: !vertical,
    [ccStep.stepLineIncomplete]: !completed,
    [ccStep.stepLineComplete]: completed,
  });

  const stepContentClasses = classNames({
    [ccStep.content]: true,
    [ccStep.contentVertical]: vertical,
    [ccStep.contentHorizontal]: !vertical,
  });

  return (
    <li className={stepClasses}>
      {!vertical && <div className={stepLineHorizontalClasses} />}
      <div className={stepDotClasses}
      {...(!active && !completed && { 
        role: 'img', 
      'aria-label': i18n._(
        /*i18n*/ {
          id: "steps.aria.emptyCircle",
          message: "Empty circle",
          comment: "Empty circle",
        }
      )})}
      {...(active && { 'aria-current': 'step'})}>{completed && <IconCheck16 />}</div>
      <div className={stepLineClasses} />
      <div className={stepContentClasses}>{children}</div>
    </li>
  );
}
