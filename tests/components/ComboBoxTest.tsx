import React, { useState } from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import { Combobox } from '../../packages/combobox/src/component';
import type { ComboboxProps } from '../../packages/combobox/src/props';

describe('Combobox', () => {
  const defaultProps: ComboboxProps = {
    id: 'combobox',
    options: [{ value: 'Option 1' }, { value: 'Option 2' }, { value: 'Option 3' }],
    value: '',
    label: 'Test Combobox',
    onChange: vi.fn(),
    onSelect: vi.fn(),
  };

  const ComboboxWrapper = (props: Partial<ComboboxProps>) => {
    const [value, setValue] = useState('');

    return (
      <Combobox
        {...defaultProps}
        {...props}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          if (props.onChange) props.onChange(newValue);
        }}
      />
    );
  };

  it('renders without crashing', () => {
    render(<ComboboxWrapper />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('opens the options list on input focus', () => {
    render(<ComboboxWrapper openOnFocus />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('filters options based on user input', async () => {
    render(<ComboboxWrapper />);
    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'Option 1' } });

    const option1 = screen.queryByText('Option 1');
    const option2 = screen.queryByText('Option 2');
    console.log('Option 1:', option1);
    console.log('Option 2:', option2);
    expect(option1).toBeInTheDocument();
    expect(option2).toBeNull();
  });

  it('selects an option on click', async () => {
    render(<ComboboxWrapper />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    const option = await screen.findByText('Option 1');
    fireEvent.click(option);
    expect(defaultProps.onSelect).toHaveBeenCalledWith('Option 1');
  });

  it('navigates options with arrow keys', async () => {
    render(<ComboboxWrapper />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(screen.getByText('Option 1')).toHaveClass('block cursor-pointer p-8 hover:s-bg-hover w-react-combobox-option');
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(screen.getByText('Option 2')).toHaveClass('block cursor-pointer p-8 hover:s-bg-hover w-react-combobox-option');
    fireEvent.keyDown(input, { key: 'ArrowUp' });
    expect(screen.getByText('Option 1')).toHaveClass('block cursor-pointer p-8 hover:s-bg-hover w-react-combobox-option');
  });

  it('closes the options list on escape key press', async () => {
    render(<ComboboxWrapper />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'Escape' });
    expect(screen.queryByRole('listbox')).toBeNull();
  });
});
