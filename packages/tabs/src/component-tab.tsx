import React from 'react';
import { classNames } from '@chbphone55/classnames';
import { tab as ccTab } from '@warp-ds/component-classes';
import type { TabProps } from './props';

const setup = ({ className, isActive, setActive, ...rest }: any) => ({
  tab: classNames(ccTab.tab, {
    [className]: !!className,
    [ccTab.tabActive]: isActive,
  }),
  icon: classNames(ccTab.icon, ccTab.iconUnderlined, isActive ? ccTab.iconUnderlinedActive : ccTab.iconUnderlinedInactive),
  content: classNames(ccTab.contentUnderlined, {
    [ccTab.contentUnderlinedActive]: isActive,
    [ccTab.contentUnderlinedInactive]: !isActive,
  }),
  attrs: { ...rest },
});

export function Tab(props: TabProps) {
  const {
    children,
    label,
    setActive = () => {},
    name,
    onClick,
    isActive,
  } = props;
  const { tab, icon, content, attrs } = setup(props);
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
      onClick={handleClick}
    >
      {!children && <span className={content}>{label}</span>}

      {children && over && (
        <>
          <span className={icon}>{children}</span>
          <span className={content}>{label}</span>
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
