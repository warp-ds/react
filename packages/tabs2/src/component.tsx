import React, { useRef, useState } from "react";
import { ReactElement, KeyboardEvent } from "react";

type TabsProps = {
  fadeout?: boolean;
  showArrows?: boolean;
  children?: ReactElement[];
  startTab?: number; // default 0
};

type TabProps = {
  children?: ReactElement | ReactElement[] | string;
};

export const Tab = (props: TabProps) => {
  return <div>{props.children}</div>;
};

type TabPanelProps = {
  children?: ReactElement | ReactElement[] | string;
  active?: boolean;
};

export const TabPanel = (props: TabPanelProps) => {
  return <>{props.children}</>;
};

/**
 * Tabs component.
 *
 * Displays a number of tabs, and takes options for how to handle content on smaller screens.
 * fadeout: fades tabs if they're out of view.
 * showArrows: shows small arrows if tabs are out of view.
 */
export const Tabs = (props: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const style = `
   .tabs-component{
      display:grid;
      grid-auto-flow: row;
    }
   .tabs{
      display:grid;
      grid-auto-flow: column;
    }
    .tab{
      display:grid;
      grid-auto-flow: row;
    }
  `;

  if (props.children) {
    const ch = props.children;
    const chl = props.children?.length;

    const tabs = ch.slice(0, chl / 2).map((c, i) => (
      <div
        key={`tab-${i}`}
        onClick={() => setActiveTab(i)}
        className="tab"
        style={i === activeTab ? { backgroundColor: "rgb(230,230,230)" } : {}}
        {...getTabData(i, activeTab)}
      >
        {c}
      </div>
    ));

    const tabPanels = ch.slice(chl / 2, chl).map((c, i) => (
      <div
        key={`panel-${i}`}
        className="tab-panel"
        style={i === activeTab ? {} : { display: "none" }}
        {...getPanelData(i, activeTab)}
      >
        {c}
      </div>
    ));

    function keyDown(e: KeyboardEvent<HTMLDivElement>): void {
      if (e.key === "Tab" || e.key.includes("Arrow")) {
        e.preventDefault();

        let newValue =
          e.key === "ArrowLeft" || e.key === "ArrowUp"
            ? activeTab - 1
            : activeTab + 1;

        if (newValue > chl / 2 - 1) {
          newValue = 0;
        }
        if (newValue < 0) {
          newValue = chl / 2 - 1;
        }

        setActiveTab(newValue);

        if (tabsRef && tabsRef.current) {
          (tabsRef.current?.children?.[newValue] as HTMLElement)?.focus();
        }
      }
    }

    return (
      <div className="tabs-component" onKeyDown={keyDown}>
        <style>{style}</style>
        <div ref={tabsRef} className="tabs" role="tablist">
          {tabs}
        </div>
        <div className="tab-panels">{tabPanels}</div>
      </div>
    );
  } else {
    return;
  }
};

/**
 * Aria data. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role#example.
 */
const getTabData = (i: number, activeTab: number) => ({
  id: `tab-${i}`,
  role: "tab",
  tabIndex: i === activeTab ? 0 : -1,
  "aria-selected": i === activeTab ? true : false,
  "aria-controls": `panel-${i}`,
});

const getPanelData = (i: number, activeTab: number) => ({
  id: `panel-${i}`,
  role: "tabpanel",
  tabIndex: i === activeTab ? 0 : -1,
  "aria-labelledby": `tab-${i}`,
  hidden: i !== activeTab,
});
