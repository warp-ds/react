import React, {
  useState,
  useRef,
  useEffect,
  cloneElement,
  Children,
} from 'react';
import { classNames } from '@chbphone55/classnames';
import { gridLayout, tabs as ccTabs } from '@warp-ds/css/component-classes';
import { debounce } from './utils';
import type { TabsProps } from './props';

const setup = (
  { className, children, onClick, active, ...rest }: any,
  tabsRef,
  wunderbarRef
) => ({
  nav: classNames(ccTabs.wrapperUnderlined, {
    [className]: !!className,
  }),
  div: classNames(ccTabs.tabContainer,{
    [gridLayout[`cols${children.length}`]]: true,
  }),
  wunderbar: classNames(ccTabs.wunderbar),
  attrs: rest,
  updateWunderbar: () => {
    window.requestAnimationFrame(() => {
      try {
        const activeEl = tabsRef.current.querySelector(
          'button[role="tab"][aria-selected="true"]'
        );
        const { left: parentLeft } = tabsRef.current.getBoundingClientRect();
        const { left, width } = activeEl.getBoundingClientRect();
        wunderbarRef.current.style.left = `${left - parentLeft}px`;
        wunderbarRef.current.style.width = `${width}px`;
      } catch (err) {
        console.warn('Problem updating tabs', err);
      }
    });
  },
});

export const Tabs = (props: TabsProps) => {
  const isBrowser = Boolean(
    typeof document === 'object' && document?.createElement
  );
  const tabsRef = useRef(null);
  const wunderbarRef = useRef(null);
  const { children, onChange } = props;
  const { nav, div, wunderbar, attrs, updateWunderbar } = setup(
    props,
    tabsRef,
    wunderbarRef
  );
  useEffect(() => {
    // Server-side rendering must handle TabPanel state manually (outside the Tabs component).
    isBrowser && updatePanels();
    updateWunderbar();
    const updateDebounced = debounce(updateWunderbar, 100);
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
          (child) => child?.props?.isActive
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
          `warp-tabpanel-${child?.props?.name}`
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
    updateWunderbar();
    onChange && onChange(name);
  };

  const handleKeyDown = (event) => {
    if (
      !event.altKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)
    ) {
      try {
        const tabs = [
          // @ts-ignore: semantic error
          ...tabsRef.current.querySelectorAll('button[role="tab"]'),
        ];
        const current = tabs.findIndex((tab) => tab.name === active);
        const next = (() => {
          switch (event.key) {
            case 'Home':
              return 0;
            case 'End':
              return tabs.length - 1;
            case 'ArrowLeft':
              return Math.max(0, current - 1);
            case 'ArrowRight':
              return Math.min(tabs.length - 1, current + 1);
            default:
              return current;
          }
        })();
        if (current !== next) {
          event.preventDefault();
          change(tabs[next].name);
          tabs[next].focus();
        }
      } catch (err) {
        console.warn('Problem handling keydown', err);
      }
    }
  };

  return (
    <div {...attrs} className={nav}>
      <div
        role="tablist"
        className={div}
        ref={tabsRef}
        onKeyDown={handleKeyDown}
      >
        {Children.map(children, (child: any) => {
          return child && cloneElement(child, {
                setActive: change,
                isActive: child?.props?.name === active,
          });
        })}
        {<span className={wunderbar} ref={wunderbarRef} />}
      </div>
    </div>
  );
};
