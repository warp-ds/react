import * as React from 'react';

import { action } from '@storybook/addon-actions';

import { Select as WarpSelect } from '../src';

const metadata = { title: 'Forms/Select' };
export default metadata;

const Select = (props) => (
  <WarpSelect label="Berries" onChange={action('change')} onFocus={action('focus')} onBlur={action('blur')} {...props}>
    <option>Strawberries</option>
    <option>Raspberries</option>
    <option>Cloudberries</option>
  </WarpSelect>
);

export const Standard = () => <Select />;

export const Hint = () => <Select hint="We assume this is your jam preference" always />;

export const Invalid = () => {
  const [value, setValue] = React.useState('');
  const [valid, setValid] = React.useState(true);
  React.useEffect(() => {
    setValid(value === 'Cloudberries');
  }, [value]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
    return action('change');
  };

  return (
    <div className="flex flex-col space-y-32">
      <WarpSelect
        label="Berries"
        invalid={!valid}
        hint={!valid ? 'Wrong choice' : ''}
        onChange={handleOnChange}
        onFocus={action('focus')}
        onBlur={action('blur')}
        aria-label="You're selection is berry nice!">
        <option value={'Strawberries'}>Strawberries</option>
        <option value={'Raspberries'}>Raspberries</option>
        <option value={'Cloudberries'}>Cloudberries</option>
      </WarpSelect>
    </div>
  );
};

export const Disabled = () => (
  <div className="flex flex-col space-y-32">
    <Select disabled />
  </div>
);

export const NoLabel = () => (
  <div className="flex flex-col space-y-32">
    <WarpSelect onChange={action('change')} onFocus={action('focus')} onBlur={action('blur')} aria-label="You're selection is berry nice!">
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
      aria-labelledby="select-label">
      <option>Strawberries</option>
      <option>Raspberries</option>
      <option>Cloudberries</option>
    </WarpSelect>
  </div>
);

export const Optional = () => <Select optional />;
