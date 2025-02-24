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
      <Slider
        onChange={(value) => setValue(value)}
        value={value}
        min={10000}
        max={60000}
        showTooltip
        markers
        markerCount={30}
        step="auto"
      />
      <button onClick={() => setValue(15000)}>Reset</button>
    </div>
  );
};

export const Regular3 = () => {
  const [value, setValue] = React.useState(20000);

  return (
    <div>
      <output>{value}</output>
      <Slider
        onChange={(value) => setValue(value)}
        value={value}
        min={10000}
        max={60000}
        showTooltip
        markers
        markerCount="auto"
        step={2000}
      />
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
      <Slider
        values={values}
        onChange={(nums) => setValues(nums)}
        min={0}
        max={10000}
        step={100}
        markerCount={3}
        showTooltip
        markers
        showInputs
      />
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
      <Slider values={values} onChange={(nums) => setValues(nums)} min={0} max={4000} showTooltip markers showInputs markerCount={3} />
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
      <Slider
        values={values}
        onChange={(nums) => setValues(nums)}
        min={0}
        max={10000}
        showTooltip
        markers
        showInputs
        markerCount={21}
        step={100}
      />
      <button onClick={() => setValues([0, 10000])}>Reset</button>
    </div>
  );
};

export const Range7 = () => {
  const [values, setValues] = React.useState([1, 15]);

  return (
    <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider
        values={values}
        onChange={(nums) => setValues(nums)}
        min={0}
        max={20}
        step={1}
        markerCount={5}
        showTooltip
        markers
        showInputs
      />
      <button onClick={() => setValues([1, 15])}>Reset</button>
    </div>
  );
};

export const RegularRangeValues = () => {
  const [value, setValue] = React.useState('yes');

  //const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //const range = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 110];
  const range = ['hi', 'haha', 'yes', 'nr', 'ok', '1', '2'];

  return (
    <div>
      <output>{value}</output>
      <Slider onChange={(value) => setValue(value)} value={value} rangeValues={range} showTooltip />
      <button onClick={() => setValue('yes')}>Reset</button>
    </div>
  );
};

export const DualRangeValues = () => {
  const [values, setValues] = React.useState(['yes', '1']);

  //const range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //const range = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 110];
  const range = ['hi', 'haha', 'yes', 'nr', 'ok', '1', '2'];

  return (
    <div>
      <output>
        {values[0]} - {values[1]}
      </output>
      <Slider onChange={(values) => setValues(values)} values={values} rangeValues={range} showTooltip />
      <button onClick={() => setValues(['yes', '1'])}>Reset</button>
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
      <Slider
        onChange={(val) => setValue(val)}
        onChangeAfter={(val) => setValueAfter(val)}
        value={value}
        min={1000}
        max={10_000_000}
        step={1000}
      />
    </div>
  );
};
