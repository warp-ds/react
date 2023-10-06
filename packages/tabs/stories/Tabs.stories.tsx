import * as React from "react";
import { Tab, TabPanel, Tabs } from "../src";
import { IconPlus16 } from "@warp-ds/icons/react";

const metadata = { title: "Navigation/Tabs" };
export default metadata;

export const Default = () => {
  return (
    <Tabs onChange={(e) => console.log(e)}>
      <Tab label="Tab 1" name="one" />
      {false && <Tab label="Tab 2" name="two" />}
      <Tab label="Tab 3" name="three" isActive />
    </Tabs>
  );
};

export const DefaultWithPanel = () => {
  return (
    <>
      <Tabs>
        <Tab label="Tab 1" name="one" />
        <Tab label="Tab 2" name="two" />
        <Tab label="Tab 3" name="three" />
      </Tabs>
      <div className="mb-16">
        <TabPanel name="one">Tab one selected!</TabPanel>
        <TabPanel name="two">Tab two selected!</TabPanel>
        <TabPanel name="three">Tab three selected!</TabPanel>
      </div>
    </>
  );
};

export const DefaultWithExternalLinks = () => {
  return (
    <>
      <Tabs>
        <Tab label="Tab 1" name="one" />
        <Tab
          label="Tab 2 (www.finn.no)"
          name="two"
          onClick={(e) => window.open("https://www.finn.no/", "_blank")}
        />
        <Tab
          label="Tab 3 (www.schibsted.com without panel)"
          name="three"
          onClick={(e) => window.open("https://www.schibsted.com/", "_blank")}
        />
      </Tabs>
      <div className="mb-16">
        <TabPanel name="one">Tab one selected!</TabPanel>
        <TabPanel name="two">Tab two selected!</TabPanel>
      </div>
    </>
  );
};

export const Icon = () => {
  return (
    <Tabs>
      <Tab label="Tab 1" name="one" isActive>
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 2" name="two">
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 3" name="three">
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 4" name="four">
        <IconPlus16 />
      </Tab>
    </Tabs>
  );
};

export const IconOvertop = () => {
  return (
    <Tabs>
      <Tab label="Tab 1" name="one" over isActive>
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 2" name="two" over>
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 3" name="three" over>
        <IconPlus16 />
      </Tab>
      <Tab label="Tab 4" name="four" over>
        <IconPlus16 />
      </Tab>
    </Tabs>
  );
};

export const IconWithPanel = () => {
  return (
    <>
      <Tabs>
        <Tab label="Tab 1" name="one" isActive>
          <IconPlus16 />
        </Tab>
        <Tab label="Tab 2" name="two">
          <IconPlus16 />
        </Tab>
        <Tab label="Tab 3" name="three">
          <IconPlus16 />
        </Tab>
        <Tab label="Tab 4" name="four">
          <IconPlus16 />
        </Tab>
      </Tabs>
      <div className="mb-16">
        <TabPanel name="one">Tab one selected!</TabPanel>
        <TabPanel name="two">Tab two selected!</TabPanel>
        <TabPanel name="three">Tab three selected!</TabPanel>
        <TabPanel name="four">Tab four selected!</TabPanel>
      </div>
    </>
  );
};
