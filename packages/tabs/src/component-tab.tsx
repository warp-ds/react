import React from 'react';
import { classNames as cn } from '@chbphone55/classnames';
import { tab as ccTab } from '@warp-ds/component-classes';
import type { TabProps } from './props';

const setup = ({
  className,
  isActive,
  setActive,
  contained,
  ...rest
}: any) => ({
  tab: cn({
    [className]: !!className,
    [ccTab.tab]: true,
    [ccTab.tabActive]: isActive,
    [ccTab.tabContained]: contained,
    [ccTab.tabContainedActive]: contained && isActive,
  }),
  icon: cn({
    [ccTab.icon]: true,
    [ccTab.iconUnderlined]: !contained,
    [isActive ? ccTab.iconUnderlinedActive : ccTab.iconUnderlinedInactive]: !contained,
  }),
  content: cn({
    [ccTab.contentUnderlined]: !contained,
    [isActive ? ccTab.contentUnderlinedActive : ccTab.contentUnderlinedInactive]:
      !contained,
    [ccTab.contentContainedActive]: contained && isActive,
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
        <div className="flex items-center justify-center gap-8">
          {children}
          {label}
        </div>
      )}
    </button>
  );
}
