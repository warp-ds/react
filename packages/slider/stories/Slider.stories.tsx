import * as React from "react";

import { Slider } from "../src";

const metadata = { title: "Forms/Slider" };
export default metadata;

export const Regular = () => {
  /* const [value, setValue] = React.useState(10000);
  const [resetValue, setResetValue] = React.useState(10000);

  return (
    <div>
      <output style={{ display: "inline-block", width: "60px" }}>{value}</output>
      <Slider onChange={(value) => (setResetValue(value), setValue(value))} value={resetValue} min={1000} max={60000} step={10} />
      <button onClick={() => (setResetValue(6000), setValue(6000))}>Reset</button>
    </div>
  ); */
  const [value, setValue] = React.useState(2_500_000);

  return (
    <div>
      <output style={{ display: "inline-block", width: "1000px" }}>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={1000} max={10_000_000} step={1000} />
      <button onClick={() => setValue(2_500_000)}>Reset</button>
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
