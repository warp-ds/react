import * as React from "react";

import { Slider } from "../src";

const metadata = { title: "Forms/Slider" };
export default metadata;

export const Regular = () => {
  const [value, setValue] = React.useState(10000);

  return (
    <div>
      <output style={{ display: "inline-block", width: "60px" }}>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={1000} max={60000} step={10} />
      <button onClick={() => setValue(6000)}>Reset</button>
    </div>
  );
};

export const Range = () => {
  const [values, setValues] = React.useState([1000, 5008970]);

  return (
    <div>
      <output style={{ display: "inline-block", width: "1000px" }}>{values[0]} - {values[1]}</output>
      <Slider values={values} onChange={nums => setValues(nums)} min={1000} max={10_000_000} step={1000} />
      <button onClick={() => setValues([2, 5008970])}>Reset</button>
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
