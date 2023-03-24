import React from 'react';
import { classNames as cn } from '@chbphone55/classnames';
import { tab as c } from '@warp-ds/component-classes';
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
    [c.tab]: true,
    [c.tabActive]: isActive,
    [c.tabContained]: contained,
    [c.tabContainedActive]: contained && isActive,
  }),
  icon: cn({
    [c.icon]: true,
    [c.iconUnderlined]: !contained,
    [isActive ? c.iconUnderlinedActive : c.iconUnderlinedInactive]: !contained,
  }),
  content: cn({
    [c.contentUnderlined]: !contained,
    [isActive ? c.contentUnderlinedActive : c.contentUnderlinedInactive]:
      !contained,
    [c.contentContainedActive]: contained && isActive,
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
