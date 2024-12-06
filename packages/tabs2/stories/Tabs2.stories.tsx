import * as React from "react";

import { Tab, TabPanel, Tabs } from "../src/component";

const metadata = { title: "Navigation/Tabs2" };
export default metadata;

// Order between tab list and tab panels should match.
export const Default = () => (
  <Tabs>
    <Tab>Title</Tab>
    <Tab>Title 2</Tab>
    <Tab>Title 3</Tab>
    <TabPanel>Item One</TabPanel>
    <TabPanel>Item Two</TabPanel>
    <TabPanel>Item Three</TabPanel>
  </Tabs>
);
