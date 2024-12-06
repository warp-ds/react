import * as React from 'react';

import { Tab, TabPanel, Tabs } from '../src/component';

const metadata = { title: 'Navigation/Tabs2' };
export default metadata;

// Order between tabs and tab panels should match.
export const Default = () => (
  <Tabs>
    <Tab>Title</Tab>
    <Tab>Title 2</Tab>
    <Tab>Title 3</Tab>
    <TabPanel>{panel1}</TabPanel>
    <TabPanel>{panel2}</TabPanel>
    <TabPanel>{panel3}</TabPanel>
  </Tabs>
);

const panel1 = <div>Content 1</div>;
const panel2 = <div>Content 2</div>;
const panel3 = <div>Content 3</div>;
