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
  const [showChevronUp, setShowChevronUp] = React.useState(expanded);

  React.useEffect(() => {
    setStateExpanded(expanded);
  }, [expanded]);

  const toggleExpandable = (state) => {
    setStateExpanded(!state);
    // We need a slight delay for the animation since it has a transition-duration of 150ms:
    setTimeout(() => {
      setShowChevronUp(!state);
    }, 200);
    if (onChange) onChange(!state);
  };

  const wrapperClasses = classNames([ccExpandable.wrapper, box && ccExpandable.box, bleed && ccExpandable.bleed]);

  const buttonClasses = classNames(buttonClass, [ccExpandable.button, box && ccExpandable.buttonBox]);

  const chevronClasses = classNames([ccExpandable.chevron, !box && ccExpandable.chevronNonBox]);

  const chevronIcon = () => {
    const upClasses = classNames([ccExpandable.chevronTransform, !stateExpanded && showChevronUp && ccExpandable.chevronCollapse]);
    const downClasses = classNames([ccExpandable.chevronTransform, stateExpanded && !showChevronUp && ccExpandable.chevronExpand]);

    return showChevronUp ? <IconChevronUp16 className={upClasses} /> : <IconChevronDown16 className={downClasses} />;
  };

  const contentClasses = classNames(contentClass, [box && ccBox.base, box && title && ccExpandable.contentWithTitle]);

  return (
    <div {...rest} className={wrapperClasses}>
      <UnstyledHeading level={headingLevel}>
        <button type="button" aria-expanded={stateExpanded} className={buttonClasses} onClick={() => toggleExpandable(stateExpanded)}>
          <div className={ccExpandable.title}>
            {typeof title === 'string' ? <span className={ccExpandable.titleType}>{title}</span> : title}
            {chevron && <div className={chevronClasses}>{chevronIcon()}</div>}
          </div>
        </button>
      </UnstyledHeading>
      <ExpansionBehaviour animated={animated} stateExpanded={stateExpanded}>
        <div className={contentClasses}>{children}</div>
      </ExpansionBehaviour>
    </div>
  );
}

function ExpansionBehaviour({ animated, stateExpanded, children }) {
  const expansionClasses = classNames([ccExpandable.expansion, !stateExpanded && ccExpandable.expansionNotExpanded]);

  return animated ? (
    <ExpandTransition show={stateExpanded}>{children}</ExpandTransition>
  ) : (
    <div className={expansionClasses} data-testid="expandable-content" aria-hidden={!stateExpanded ? true : undefined}>
      {children}
    </div>
  );
}
