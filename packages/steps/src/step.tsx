import React, { useContext } from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { step as ccStep } from '@warp-ds/css/component-classes';
import IconCheck16 from '@warp-ds/icons/react/check-16';

import { activateI18n } from '../../i18n.js';

import { StepsContext } from './component.js';
import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';

type StepClassKeys = keyof typeof ccStep;

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

const availableAriaLabels = {
  completed: i18n._({
    id: 'steps.aria.completed',
    message: 'Step indicator completed circle',
    comment: 'Completed circle',
  }),
  active: i18n._({
    id: 'steps.aria.active',
    message: 'Step indicator active circle',
    comment: 'Active circle',
  }),
  default: i18n._({
    id: 'steps.aria.emptyCircle',
    message: 'Empty circle',
    comment: 'Empty circle',
  }),
};

const getAriaLabel = (props: StepProps) => {
  const ariaLabel = Object.keys(availableAriaLabels).find((a) => props[a as keyof StepProps]);
  return ariaLabel ? availableAriaLabels[ariaLabel] : availableAriaLabels.default;
};

/**
 * getClassNames() returns a combined class string based on a base class and conditional classes.
 *
 * @param {StepClassKeys} baseClass - The base class to be included.
 * @param {Partial<Record<StepClassKeys, boolean>>} conditions - An object with class names as keys and booleans as values indicating whether to include the class.
 * @returns {string} - A combined class string.
 */
const getClassNames = (baseClass: StepClassKeys, conditions: Partial<Record<StepClassKeys, boolean>>): string => {
  return classNames({
    [ccStep[baseClass]]: true,
    ...Object.entries(conditions).reduce(
      (acc, [key, value]) => {
        if (value) {
          acc[ccStep[key as StepClassKeys]] = value;
        }
        return acc;
      },
      {} as Record<string, boolean>,
    ),
  });
};

export function Step(props: StepProps) {
  activateI18n(enMessages, nbMessages, fiMessages, daMessages);

  const { active, completed, children } = props;
  const StepsProps = useContext(StepsContext);
  const vertical = !StepsProps.horizontal;
  const left = !StepsProps.right;

  const stepClasses = getClassNames('step', {
    vertical,
    alignLeft: vertical && left,
    alignRight: vertical && !left,
    horizontal: !vertical,
  });

  const stepLineHorizontalClasses = getClassNames('stepLine', {
    lineHorizontalAlignLeft: true,
    lineHorizontal: !vertical,
    lineIncomplete: !active && !completed,
    lineComplete: active || completed,
  });

  const stepDotClasses = getClassNames('stepDot', {
    dotAlignRight: vertical && !left,
    dotHorizontal: !vertical,
    dotIncomplete: !(active || completed),
    dotActive: active || completed,
  });

  const stepLineClasses = getClassNames('stepLine', {
    lineHorizontalAlignRight: true,
    lineVertical: vertical,
    lineAlignRight: vertical && !left,
    lineHorizontal: !vertical,
    lineIncomplete: !completed,
    lineComplete: completed,
  });

  const stepContentClasses = getClassNames('content', {
    contentVertical: vertical,
    contentHorizontal: !vertical,
  });

  return (
    <li className={stepClasses}>
      {!vertical && <div className={stepLineHorizontalClasses} />}
      <div className={stepDotClasses} role="img" aria-label={getAriaLabel(props)} {...(active && { 'aria-current': 'step' })}>
        {completed && <IconCheck16 data-testid="completed-icon" />}
      </div>
      <div className={stepLineClasses} />
      <div className={stepContentClasses}>{children}</div>
    </li>
  );
}
