import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { box as ccBox, expandable as ccExpandable } from '@warp-ds/css/component-classes';
import IconChevronDown16 from '@warp-ds/icons/react/chevron-down-16';
import IconChevronUp16 from '@warp-ds/icons/react/chevron-up-16';

import { ExpandTransition, UnstyledHeading } from '../../_helpers/index.js';

import type { ExpandableProps } from './props.js';

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

  const toggleExpandable = () => {
    setStateExpanded(!stateExpanded);

    if (onChange) onChange(!stateExpanded);
  };

  const chevronIcon = () => {
    const upClasses = classNames([ccExpandable.chevronTransform, !stateExpanded && ccExpandable.chevronCollapse]);

    const downClasses = classNames([ccExpandable.chevronTransform, stateExpanded && ccExpandable.chevronExpand]);

    return stateExpanded ? <IconChevronUp16 className={upClasses} /> : <IconChevronDown16 className={downClasses} />;
  };

  return (
    <div
      {...rest}
      className={classNames(className, [
        ccExpandable.expandable,
        box && ccExpandable.expandableBox,
        info && box && ccExpandable.expandableInfo,
        bleed && ccExpandable.expandableBleed,
      ])}>
      <UnstyledHeading level={headingLevel}>
        <button
          type="button"
          aria-expanded={stateExpanded}
          className={classNames(buttonClass, [ccExpandable.button, box && ccExpandable.buttonBox])}
          onClick={toggleExpandable}>
          <div className={ccExpandable.title}>
            {typeof title === 'string' ? <span className={ccExpandable.titleType}>{title}</span> : title}
            {chevron && <div className={classNames([ccExpandable.chevron, !box && ccExpandable.chevronNonBox])}>{chevronIcon()}</div>}
          </div>
        </button>
      </UnstyledHeading>
      <ExpansionBehaviour animated={animated} stateExpanded={stateExpanded}>
        <div
          className={classNames(contentClass, {
            [ccBox.box]: box,
            [ccExpandable.paddingTop]: box && title,
          })}>
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
      className={classNames([ccExpandable.expansion, !stateExpanded && ccExpandable.expansionNotExpanded])}
      data-testid="expandable-content"
      aria-hidden={!stateExpanded ? true : undefined}>
      {children}
    </div>
  );
}
