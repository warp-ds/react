import { classNames } from '@chbphone55/classnames';
import {
  box as ccBox,
  expandable as ccExpandable,
} from '@warp-ds/component-classes';
import React from 'react';
import { ExpandTransition, UnstyledHeading } from '../../_helpers';
import { ExpandableProps } from './props';

export function Expandable(props: ExpandableProps) {
  const {
    children,
    expanded = false,
    title = '',
    info = false,
    box = false,
    bleed = false,
    buttonClass = '',
    contentClass = '',
    className,
    onChange,
    chevron = true,
    animated,
    headingLevel,
    ...rest
  } = props;

  const [stateExpanded, setStateExpanded] = React.useState(expanded);

  React.useEffect(() => {
    setStateExpanded(expanded);
  }, [expanded]);

  const toggleExpandable = (state) => {
    setStateExpanded(!state);
    if (onChange) onChange(!state);
  };

  return (
    <div
      {...rest}
      className={classNames(className, {
        [ccExpandable.expandable]: true,
        [ccExpandable.expandableBox]: box,
        [ccExpandable.expandableBleed]: bleed,
      })}
    >
      <UnstyledHeading level={headingLevel}>
        <button
          type="button"
          aria-expanded={stateExpanded}
          className={classNames({
            [buttonClass || '']: true,
            [ccExpandable.button]: true,
            [ccExpandable.buttonBox]: box,
          })}
          onClick={() => toggleExpandable(stateExpanded)}
        >
          <div className="flex justify-between align-center">
            {typeof title === 'string' ? (
              <span className="h4">{title}</span>
            ) : (
              title
            )}
            {chevron && (
              <div
                className={classNames({
                  [ccExpandable.chevron]: true,
                  [ccExpandable.chevronExpanded]: stateExpanded,
                  [ccExpandable.chevronBox]: box,
                  [ccExpandable.chevronNonBox]: !box,
                })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M2.5 5.5L8 11l5.5-5.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </button>
      </UnstyledHeading>
      <ExpansionBehaviour animated={animated} stateExpanded={stateExpanded}>
        <div
          className={classNames({
            [contentClass || '']: true,
            [ccBox.box + (title ? ' pt-0' : '')]: box,
          })}
        >
          {children}
        </div>
      </ExpansionBehaviour>
    </div>
  );
}

function ExpansionBehaviour({ animated, stateExpanded, children }) {
  return animated ? (
    <ExpandTransition show={stateExpanded}>{children}</ExpandTransition>
  ) : (
    <div
      className={classNames({
        'overflow-hidden': true,
        'h-0 invisible': !stateExpanded,
      })}
      aria-hidden={!stateExpanded ? true : undefined}
    >
      {children}
    </div>
  );
}
