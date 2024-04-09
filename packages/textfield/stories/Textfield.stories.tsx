import React from 'react';
import { action } from '@storybook/addon-actions';
import { TextField as WarpTextField } from '../src';
import { Affix } from '../../_helpers';

export default { title: 'Forms/TextField', component: WarpTextField };

const Template = (args) => <WarpTextField label="Address"
  onChange={action('change')}
  onFocus={action('focus')}
  onBlur={action('blur')} {...args} />;
export const Default = Template.bind({});
Default.args = {
  value: 'test',
};

const TextField = (args) => (
  <WarpTextField
    label="Address"
    onChange={action('change')}
    onFocus={action('focus')}
    onBlur={action('blur')}
    {...args}
  />
);

export const standard = () => <TextField />;

export const valueUncontrolled = () => <TextField defaultValue="Test" />;

export const valueControlled = () => <TextField value="Test" />;

export const required = () => <TextField required />;

export const placeholder = () => <TextField placeholder="Sesame street" />;

export const disabled = () => <TextField disabled />;

export const readOnly = () => <TextField readOnly value="puse@finn.no" />;

export const autoFocus = () => <TextField autoFocus />;

export const clearPrefix = () => (
  <TextField>
    <Affix prefix clear aria-label="Clear text" onClick={() => alert('clear')} />
  </TextField>
);

export const searchPrefix = () => (
  <TextField>
    <Affix prefix search aria-label="Search" onClick={() => alert('search')} />
  </TextField>
);

export const labelPrefix = () => (
  <TextField>
    <Affix prefix label="kr" />
  </TextField>
);

export const longLabelPrefix = () => (
  <TextField className="[--w-prefix-width:90px]" value="With some value">
    <Affix prefix label="Long prefix" />
  </TextField>
    );

export const clearSuffix = () => (
  <TextField>
    <Affix suffix clear aria-label="Clear text" onClick={() => alert('clear')} />
  </TextField>
);

export const searchSuffix = () => (
  <TextField>
    <Affix suffix search aria-label="Search" onClick={() => alert('search')} />
  </TextField>
);

export const labelSuffix = () => (
  <TextField>
    <Affix suffix label="kr" />
  </TextField>
);
export const suffixAndPrefix = () => (
  <TextField>
    <Affix prefix label="kr" />
    <Affix suffix clear aria-label="Clear text" onClick={() => alert('clear')} />
  </TextField>
);

export const helpText = () => (
  <TextField helpText="Necessary because of reasons" />
);

export const invalid = () => <TextField helpText="Error text" invalid />;

export const optional = () => (
  <div className="flex flex-col space-y-48">
    <TextField label="Address" optional />
  </div>
);
