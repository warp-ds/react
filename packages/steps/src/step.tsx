import React from 'react';
import { classNames } from '@chbphone55/classnames';
import { step as ccStep } from '@warp-ds/css/component-classes';
import { useContext } from 'react';
import { StepsContext } from './component.js';
import IconCheck16 from '@warp-ds/icons/react/check-16';
import { i18n } from '@lingui/core';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { activateI18n } from '../../i18n.js';

const availableAriaLabels = {
  completed: i18n._(
    /*i18n*/ {
      id: 'steps.aria.completed',
      message: 'Step indicator completed circle',
      comment: 'Completed circle',
    },
  ),
  active: i18n._(
    /*i18n*/ {
      id: 'steps.aria.active',
      message: 'Step indicator active circle',
      comment: 'Active circle',
    },
  ),
  default: i18n._(
    /*i18n*/ {
      id: 'steps.aria.emptyCircle',
      message: 'Empty circle',
      comment: 'Empty circle',
    },
  ),
};

const getAriaLabel = (props: StepProps) => {
  const ariaLabel = Object.keys(availableAriaLabels).find((a) => props[a]);
  return ariaLabel ? availableAriaLabels[ariaLabel] : availableAriaLabels.default;
};
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

export function Step(props: StepProps) {
  activateI18n(enMessages, nbMessages, fiMessages);

  const { active, completed, children } = props;
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
      <div className={stepDotClasses} role="img" aria-label={getAriaLabel(props)} {...(active && { 'aria-current': 'step' })}>
        {completed && <IconCheck16 />}
      </div>
      <div className={stepLineClasses} />
      <div className={stepContentClasses}>{children}</div>
    </li>
  );
}
