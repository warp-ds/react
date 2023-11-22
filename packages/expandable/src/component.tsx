import { classNames } from "@chbphone55/classnames";
import {
  box as ccBox,
  expandable as ccExpandable,
} from "@warp-ds/css/component-classes";
import React from "react";
import { ExpandTransition, UnstyledHeading } from "../../_helpers/index.js";
import { ExpandableProps } from "./props.js";
import IconChevronDown16 from '@warp-ds/icons/react/chevron-down-16';
import IconChevronUp16 from '@warp-ds/icons/react/chevron-up-16';

export function Expandable(props: ExpandableProps) {
  const {
    children,
    expanded = false,
    title = "",
    info = false,
    box = false,
    bleed = false,
    buttonClass = "",
    contentClass = "",
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
            [buttonClass || ""]: true,
            [ccExpandable.button]: true,
            [ccExpandable.buttonBox]: box,
          })}
          onClick={() => toggleExpandable(stateExpanded)}
        >
          <div className={ccExpandable.title}>
            {typeof title === "string" ? (
              <span className={ccExpandable.titleType}>{title}</span>
            ) : (
              title
            )}
            {chevron && (
              <div
                className={classNames({
                  [ccExpandable.chevron]: true,
                  [ccExpandable.chevronBox]: box,
                  [ccExpandable.chevronNonBox]: !box,
                })}
              >
                {showChevronUp ? (
                  <IconChevronUp16
                    className={classNames({
                      [ccExpandable.chevronTransform]: true,
                      [ccExpandable.chevronCollapse]:
                        !stateExpanded && showChevronUp,
                    })}
                  />
                ) : (
                  <IconChevronDown16
                    className={classNames({
                      [ccExpandable.chevronTransform]: true,
                      [ccExpandable.chevronExpand]:
                        stateExpanded && !showChevronUp,
                    })}
                  />
                )}
              </div>
            )}
          </div>
        </button>
      </UnstyledHeading>
      <ExpansionBehaviour animated={animated} stateExpanded={stateExpanded}>
        <div
          className={classNames({
            [contentClass || ""]: true,
            [ccBox.box]: box,
            [ccExpandable.paddingTop]: box && title,
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
        [ccExpandable.expansion]: true,
        [ccExpandable.expansionNotExpanded]: !stateExpanded,
      })}
      aria-hidden={!stateExpanded ? true : undefined}
    >
      {children}
    </div>
  );
}
