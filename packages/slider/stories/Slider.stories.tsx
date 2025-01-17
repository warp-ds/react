import * as React from "react";

import { Slider } from "../src";

const metadata = { title: "Forms/Slider" };
export default metadata;

export const Regular = () => {
  const [value, setValue] = React.useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} step={10} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>
  );
};

export const Regular2 = () => {
  const [value, setValue] = React.useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount={30} step="auto" />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>
  );
};

export const Regular3 = () => {
  const [value, setValue] = React.useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} showTooltip markers markerCount="auto" step={2000} />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>
  );
};

export const Range = () => {
  const [values, setValues] = React.useState([1000, 5008970]);

  return (
    <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={(nums) => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>
  );
};

export const Disabled = () => {
  const [value, setValue] = React.useState(625_000);
  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(val) => setValue(val)} value={value} disabled min={1000} max={10_000_000} step={1000} />
    </div>
  );
};

export const ChangeAfter = () => {
  const [value, setValue] = React.useState(625_000);
  const [valueAfter, setValueAfter] = React.useState(value);

  return (
    <div>
      <output>{valueAfter}</output>
      <Slider onChange={(val) => setValue(val)} onChangeAfter={(val) => setValueAfter(val)} value={value} min={1000} max={10_000_000} step={1000} />
    </div>
  );
};
