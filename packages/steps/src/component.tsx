import React, { createContext } from 'react';

import { classNames } from '@chbphone55/classnames';
import { steps as ccSteps } from '@warp-ds/css/component-classes';

import { StepsProps } from './props.js';

export const StepsContext = createContext<{
  horizontal?: boolean;
  right?: boolean;
}>({
  horizontal: false,
  right: false,
});

export function Steps({ horizontal, right, children }: StepsProps) {
  return (
    <StepsContext.Provider value={{ horizontal, right }}>
      <ul className={classNames([ccSteps.wrapper, horizontal && ccSteps.horizontal])}>{children}</ul>
    </StepsContext.Provider>
  );
}
