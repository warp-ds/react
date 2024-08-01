import React, { Children, cloneElement, RefObject, useEffect, useRef, useState } from 'react';

import { classNames } from '@chbphone55/classnames';
import { tabs as ccTabs, gridLayout } from '@warp-ds/css/component-classes';

import type { TabsProps } from './props.js';
import { debounce } from './utils.js';

const setup = ({ className, children, onClick, active, ...rest }: any, tabsRef, selectionIndicatorRef) => ({
  nav: classNames(ccTabs.wrapper, {
    [className]: !!className,
  }),
  div: classNames(ccTabs.container, {
    [gridLayout[`cols${children.filter((node) => node).length}`]]: true,
  }),
  selectionIndicator: classNames(ccTabs.selectionIndicator),
  attrs: rest,
  updateSelectionIndicator: () => {
    window.requestAnimationFrame(() => {
      if (tabsRef.current && selectionIndicatorRef.current) {
        const activeEl = tabsRef.current.querySelector('button[role="tab"][aria-selected="true"]');
        if (activeEl) {
          const parentLeft = tabsRef.current.getBoundingClientRect().left;
          const { left, width } = activeEl.getBoundingClientRect();
          selectionIndicatorRef.current.style.left = `${left - parentLeft}px`;
          selectionIndicatorRef.current.style.width = `${width}px`;
        }
      }
    });
  },
});

export const Tabs = (props: TabsProps) => {
  const isBrowser = Boolean(typeof document === 'object' && document?.createElement);
  const tabsRef: RefObject<HTMLDivElement> = useRef(null);
  const selectionIndicatorRef = useRef(null);
  const { children, onChange } = props;
  const { nav, div, selectionIndicator, attrs, updateSelectionIndicator } = setup(props, tabsRef, selectionIndicatorRef);

  useEffect(() => {
    // Server-side rendering must handle TabPanel state manually (outside the Tabs component).
    isBrowser && updatePanels();
    updateSelectionIndicator();
    const updateDebounced = debounce(updateSelectionIndicator, 100);
    window.addEventListener('resize', updateDebounced);
    return () => window.removeEventListener('resize', updateDebounced);
  });

  const findActive = (): string => {
    if (props.active) {
      return String(props.active);
    } else if (Children.count(children) > 0) {
      const childrenArray = Children.toArray(children);
      const activeChild =
        childrenArray?.find(
          // @ts-ignore: semantic error
          (child) => child?.props?.isActive,
        ) || childrenArray[0];
      // @ts-ignore: semantic error
      return String(activeChild?.props?.name || '');
    }
    return '';
  };
  const [active, setActive] = useState(findActive());

  const updatePanels = () => {
    Children.forEach(children, (child) => {
      if (typeof child === 'object') {
        const panel = document.getElementById(
          // @ts-ignore: semantic error
          `warp-tabpanel-${child?.props?.name}`,
        );
        if (panel) {
          // @ts-ignore: semantic error
          panel.hidden = child?.props?.name !== active;
        }
      }
    });
  };

  const change = (name) => {
    setActive(name);
    updateSelectionIndicator();
    onChange && onChange(name);
  };

  const handleKeyDown = (event) => {
    if (!event.altKey && !event.ctrlKey && !event.shiftKey && ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      const tabs: HTMLButtonElement[] = Array.from(tabsRef?.current?.querySelectorAll('button[role="tab"]') ?? []);
      const activeTabIndex = tabs.findIndex((tab) => tab.name === active);
      if (activeTabIndex >= 0) {
        const nextIndex = (() => {
          switch (event.key) {
            case 'Home':
              return 0;
            case 'End':
              return tabs.length - 1;
            case 'ArrowLeft':
              return Math.max(0, activeTabIndex - 1);
            case 'ArrowRight':
              return Math.min(tabs.length - 1, activeTabIndex + 1);
            default:
              return activeTabIndex;
          }
        })();
        if (activeTabIndex !== nextIndex && tabs[nextIndex]?.name) {
          event.preventDefault();
          change(tabs[nextIndex].name);
          tabs[nextIndex].focus();
        }
      }
    }
  };

  return (
    <div {...attrs} className={nav}>
      <div role="tablist" className={div} ref={tabsRef} onKeyDown={handleKeyDown}>
        {Children.map(
          children,
          (child: any) =>
            child &&
            cloneElement(child, {
              setActive: change,
              isActive: child?.props?.name === active,
            }),
        )}
        {<span className={selectionIndicator} ref={selectionIndicatorRef} />}
      </div>
    </div>
  );
};
