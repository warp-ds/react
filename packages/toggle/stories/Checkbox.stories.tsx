import React, { useState } from 'react';

import { Toggle } from '../src';

const metadata = { title: 'Forms/Toggle/Checkbox' };
export default metadata;

type Option = { label: string; value: string };
const options: Option[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Microsoft', value: 'microsoft' },
  { label: 'Amazon', value: 'amazon' },
];

export const SingleOptionWithInvisibleLabel = () => {
  const [value, setValue] = useState(false);

  return <Toggle onChange={() => setValue(!value)} checked={value} type="checkbox" label="Toggle X" noVisibleLabel />;
};

export const SingleOption = () => <Toggle type="checkbox" label="Apple" onChange={(checked) => console.log(checked)} />;

export const SingleOptionCheckedControlledDefault = () => (
  <Toggle type="checkbox" label="Apple" checked onChange={(checked) => console.log(checked)} />
);

export const SingleOptionCheckedUncontrolledDefault = () => (
  <Toggle type="checkbox" label="Apple" defaultChecked onChange={(checked) => console.log(checked)} />
);

export const IndeterminateState = ({ isInvalid = false, isDisabled = false }: { isInvalid?: boolean; isDisabled?: boolean }) => {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([options[0]]);

  const handleSelectAll = (checked: boolean) => {
    if (checked === false) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(options);
    }
    setSelectAllChecked(checked);
  };

  const handleSelect = (selected: Option) => {
    let updatedSelected = selectedOptions;

    if (selectedOptions.some((option) => option.value === selected.value)) {
      updatedSelected = selectedOptions.filter((option) => option.value !== selected.value);
    } else {
      updatedSelected = [...selectedOptions, selected];
    }

    if (selectedOptions.length === options.length) setSelectAllChecked(false);
    if (updatedSelected.length === options.length) setSelectAllChecked(true);

    setSelectedOptions(updatedSelected);
  };

  return (
    <>
      <Toggle
        onChange={handleSelectAll}
        checked={selectAllChecked}
        type="checkbox"
        label="Select all companies"
        indeterminate={selectedOptions.length > 0 && selectedOptions.length !== options.length}
        invalid={isInvalid}
        disabled={isDisabled}
      />
      <Toggle
        type="checkbox"
        title="Companies"
        options={options}
        selected={selectedOptions}
        onChange={handleSelect}
        invalid={isInvalid}
        helpText={isInvalid ? 'This is an error message' : undefined}
        disabled={isDisabled}
      />
    </>
  );
};

export const Invalid = () => <IndeterminateState isInvalid={true} />;
export const Disabled = () => <IndeterminateState isDisabled={true} />;

export const SingleOptionHelpText = () => (
  <Toggle type="checkbox" label="Apple" helpText="This is helper text" onChange={(selected) => console.log(selected)} />
);

export const MultipleOptions = () => <Toggle type="checkbox" options={options} onChange={(selected) => console.log(selected)} />;

export const WithTitle = () => (
  <Toggle type="checkbox" title="Companies" options={options} onChange={(selected) => console.log(selected)} />
);

export const Optional = () => (
  <Toggle optional type="checkbox" title="Companies" options={options} onChange={(selected) => console.log(selected)} />
);

export const HelpText = () => (
  <Toggle
    type="checkbox"
    title="Companies"
    helpText="Select a random company"
    options={options}
    onChange={(selected) => console.log(selected)}
  />
);

export const SelectedDefault = () => (
  <Toggle
    type="checkbox"
    title="Companies"
    helpText="Everything but first is selected by default"
    selected={[...options].splice(1)}
    options={options}
    onChange={(selected) => console.log(selected)}
  />
);
