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
  activateI18n(enMessages, nbMessages, fiMessages, daMessages);

  const { active, completed, children } = props;
  const StepsProps = useContext(StepsContext);
  const vertical = !StepsProps.horizontal;
  const left = !StepsProps.right;

  const stepClasses = classNames(ccStep.container, {
    [ccStep.vertical]: vertical,
    [ccStep.alignLeft]: vertical && left,
    [ccStep.alignRight]: vertical && !left,
    [ccStep.horizontal]: !vertical,
  });

  const lineHorizontalClasses = classNames(ccStep.line, ccStep.lineHorizontalAlignLeft, {
    [ccStep.lineHorizontal]: !vertical,
    [ccStep.lineIncomplete]: !active && !completed,
    [ccStep.lineComplete]: active || completed,
  });

  const dotClasses = classNames(ccStep.dot, {
    [ccStep.dotAlignRight]: vertical && !left,
    [ccStep.dotHorizontal]: !vertical,
    [ccStep.dotIncomplete]: !(active || completed),
    [ccStep.dotActive]: active || completed,
  });

  const lineClasses = classNames(ccStep.line, ccStep.lineHorizontalAlignRight, {
    [ccStep.lineVertical]: vertical,
    [ccStep.lineAlignRight]: vertical && !left,
    [ccStep.lineHorizontal]: !vertical,
    [ccStep.lineIncomplete]: !completed,
    [ccStep.lineComplete]: completed,
  });

  const contentClasses = classNames(ccStep.content, {
    [ccStep.contentVertical]: vertical,
    [ccStep.contentHorizontal]: !vertical,
  });

  return (
    <li className={stepClasses}>
      {!vertical && <div className={lineHorizontalClasses} />}
      <div className={dotClasses} role="img" aria-label={getAriaLabel(props)} {...(active && { 'aria-current': 'step' })}>
        {completed && <IconCheck16 data-testid="completed-icon" />}
      </div>
      <div className={lineClasses} />
      <div className={contentClasses}>{children}</div>
    </li>
  );
}
