import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { helpText as ccHelpText } from '@warp-ds/css/component-classes';

interface HelpTextProps {
  /** Id for helpText */
  helpId?: string;

  /** The content to display as the help text. */
  helpText?: React.ReactNode;

  /** Whether to display the helpText in an invalid or valid state */
  isInvalid?: boolean;
}

export function HelpText(props: HelpTextProps) {
  const helpTextClasses = classNames([ccHelpText.base, props.isInvalid ? ccHelpText.colorInvalid : ccHelpText.color]);

  return (
    <div id={props.helpId} className={helpTextClasses}>
      {props.helpText}
    </div>
  );
}
