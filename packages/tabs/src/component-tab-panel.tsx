import React from 'react';
import { tab as c } from '@fabric-ds/css/component-classes';
import type { TabPanelProps } from './props';

export function TabPanel(props: TabPanelProps) {
  const { children, name, hidden, ...rest } = props;

  return (
    <div
      tabIndex={-1}
      {...rest}
      role="tabpanel"
      aria-labelledby={`warp-tab-${name}`}
      id={`warp-tabpanel-${name}`}
      hidden={
        hidden === undefined && typeof document === 'object'
          ? !document
              ?.getElementById(`warp-tab-${name}`)
              ?.classList?.contains(c.tabActive)
          : hidden
      }
    >
      {children}
    </div>
  );
}
