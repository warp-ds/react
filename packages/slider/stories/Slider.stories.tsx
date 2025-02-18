import * as React from 'react';

import { Slider } from '../src';

const metadata = { title: 'Forms/Slider' };
export default metadata;

export const Regular = () => {
  const [value, setValue] = React.useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={10000} max={60000} step={10} showInputs />
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

export const Regular4 = () => {
  const [value, setValue] = React.useState(3);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={0} max={6} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
    </div>
  );
};

export const Regular5 = () => {
  const [value, setValue] = React.useState(3);

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} min={1} max={8} showTooltip markers markerCount="auto" showInputs />
      <button onClick={() => setValue(3)}>Reset</button>
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
      <Slider values={values} onChange={(nums) => setValues(nums)} min={1000} max={10_000_000} step={1000} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 5008970])}>Reset</button>
    </div>
  );
};

export const Range2 = () => {
  const [values, setValues] = React.useState([100, 1500]);

  return (
    <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={(nums) => setValues(nums)} min={100} max={1500} step={10} showTooltip markers showInputs />
      <button onClick={() => setValues([100, 1500])}>Reset</button>
    </div>
  );
};

// wip.
/* export const Range3 = () => {
  const [values, setValues] = React.useState([-100, 100]);

  return (
    <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={(nums) => setValues(nums)} min={-80} max={80} step={1} showTooltip markers showInputs />
      <button onClick={() => setValues([-100, 100])}>Reset</button>
    </div>
  );
}; */

export const Range4 = () => {
  const [values, setValues] = React.useState([1000, 9000]);

  return (
    <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={(nums) => setValues(nums)} min={0} max={10000} step={100} showTooltip markers showInputs />
      <button onClick={() => setValues([1000, 9000])}>Reset</button>
    </div>
  );
};

export const Range5 = () => {
  const [values, setValues] = React.useState([10, 1000]);

  return (
    <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={(nums) => setValues(nums)} min={0} max={4000} showTooltip markers showInputs markerCount={9} />
      <button onClick={() => setValues([10, 1000])}>Reset</button>
    </div>
  );
};

export const Range6 = () => {
  const [values, setValues] = React.useState([0, 10000]);

  return (
    <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider values={values} onChange={(nums) => setValues(nums)} min={0} max={10000} showTooltip markers showInputs markerCount={21} step={100} />
      <button onClick={() => setValues([0, 10000])}>Reset</button>
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
