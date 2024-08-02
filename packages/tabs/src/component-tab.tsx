import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { tab as ccTab } from '@warp-ds/css/component-classes';

import type { TabProps } from './props.js';

const setup = ({ className, isActive, setActive, ...rest }: any) => ({
  tab: classNames(!!className && className, [ccTab.base, isActive ? ccTab.active : ccTab.inactive]),
  attrs: { ...rest },
});

export function Tab(props: TabProps) {
  const { children, label, setActive = () => {}, name, onClick, isActive } = props;
  const { tab, attrs } = setup(props);
  const { over, ...rest } = attrs;

  const handleClick = (e) => {
    setActive(name);
    onClick && onClick(e);
  };

  return (
    <button
      type="button"
      {...rest}
      role="tab"
      aria-selected={isActive ? 'true' : 'false'}
      aria-controls={isActive ? `warp-tabpanel-${name}` : undefined}
      id={`warp-tab-${name}`}
      tabIndex={isActive ? 0 : -1}
      className={tab}
      onClick={handleClick}>
      {!children && <span className={ccTab.contentUnderlined}>{label}</span>}

      {children && over && (
        <>
          <span className={ccTab.icon}>{children}</span>
          <span className={ccTab.contentUnderlined}>{label}</span>
        </>
      )}

      {children && !over && (
        <div className={ccTab.content}>
          {children}
          {label}
        </div>
      )}
    </button>
  );
}
