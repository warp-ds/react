import React from 'react';
import { Toggle } from '../src';

const metadata = { title: 'Forms/Toggle/Radio' };
export default metadata;

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
];

export const MultipleOptions = () => <Toggle type="radio" options={options} onChange={(selected) => console.log(selected)} />;

export const WithTitle = () => <Toggle type="radio" title="Favorite color" options={options} onChange={(selected) => console.log(selected)} />;

export const Optional = () => <Toggle optional type="radio" title="Favorite color" options={options} onChange={(selected) => console.log(selected)} />;

export const HelpText = () => <Toggle type="radio" title="Favorite color" helpText="Choose your absolute favorite color" options={options} onChange={(selected) => console.log(selected)} />;

export const Invalid = () => <Toggle type="radio" title="Favorite color" helpText="No way you like blue" invalid selected={[options[1]]} options={options} onChange={(selected) => console.log(selected)} />;

export const Disabled = () => <Toggle type="radio" title="Favorite color" helpText="No way you like blue" disabled selected={[options[1]]} options={options} onChange={(selected) => console.log(selected)} />;

export const SelectedDefaultControlled = () => <Toggle type="radio" title="Favorite color" helpText="Last selected by default" selected={[options[options.length - 1]]} options={options} onChange={(selected) => console.log(selected)} />;

export const SelectedDefaultUncontrolled = () => <Toggle type="radio" title="Favorite color" helpText="Last selected by default" defaultSelected={[options[options.length - 1]]} options={options} onChange={(selected) => console.log(selected)} />;
