import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Select as WarpSelect } from '../src';

const metadata = { title: 'Forms/Select' };
export default metadata;

const Select = (props) => (
  <WarpSelect
    label="Berries"
    onChange={action('change')}
    onFocus={action('focus')}
    onBlur={action('blur')}
    {...props}
  >
    <option>Strawberries</option>
    <option>Raspberries</option>
    <option>Cloudberries</option>
  </WarpSelect>
);

export const standard = () => <Select />;

export const hint = () => (
  <Select hint="We assume this is your jam preference" always />
);

export const invalid = () => (
  <div className="flex flex-col space-y-32">
    <Select invalid />
    <Select invalid hint="Wrong choice" />
  </div>
);

export const disabled = () => (
  <div className="flex flex-col space-y-32">
    <Select disabled />
    <Select disabled hint="Wrong choice" />
  </div>
);

export const noLabel = () => (
  <div className="flex flex-col space-y-32">
    <WarpSelect
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
      aria-label="You're selection is berry nice!"
    >
      <option>Strawberries</option>
      <option>Raspberries</option>
      <option>Cloudberries</option>
    </WarpSelect>

    <label id="select-label" htmlFor="warp-aria-labelledby-example">
      You're berry good at selecting!
    </label>
    <WarpSelect
      id="warp-aria-labelledby-example"
      onChange={action('change')}
      onFocus={action('focus')}
      onBlur={action('blur')}
      aria-labelledby="select-label"
    >
      <option>Strawberries</option>
      <option>Raspberries</option>
      <option>Cloudberries</option>
    </WarpSelect>
  </div>
);

export const optional = () => <Select optional />;
