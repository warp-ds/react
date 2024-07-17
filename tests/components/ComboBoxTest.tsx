import React, { useState } from 'react';

import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { beforeEach, vi } from 'vitest';

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
    const [value, setValue] = useState(props.value || '');

    return (
      <Combobox
        {...defaultProps}
        {...props}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          if (defaultProps?.onChange) defaultProps.onChange(newValue);
          if (props.onChange) props.onChange(newValue);
        }}
        onSelect={(selectedValue) => {
          if (defaultProps?.onSelect) defaultProps.onSelect(selectedValue);
          if (props.onSelect) props.onSelect(selectedValue);
        }}
      />
    );
  };

  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

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
    expect(option1).toBeInTheDocument();
    expect(option2).toBeNull();
  });

  it('selects an option on click', async () => {
    render(<ComboboxWrapper />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    const option = await screen.findByText('Option 1');
    fireEvent.click(option);
    await waitFor(() => expect(defaultProps.onSelect).toHaveBeenCalledWith('Option 1'));
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

  it('closes options list on blur', async () => {
    render(<ComboboxWrapper />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(screen.queryByRole('listbox')).toBeNull();
  });

  it('does not close options list on blur if clicked inside', async () => {
    render(<ComboboxWrapper />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    const option = await screen.findByText('Option 1');
    fireEvent.mouseDown(option);
    setTimeout(() => {
      fireEvent.blur(input);
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    }, 0);
  });

  it('filters options based on input value when static filtering is disabled', async () => {
    render(<ComboboxWrapper disableStaticFiltering />);
    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'Option 1' } });
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.queryByText('Option 2')).toBeInTheDocument();
  });

  it('navigates options with keyboard and selects an option', async () => {
    render(<ComboboxWrapper />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(defaultProps.onSelect).toHaveBeenCalledWith('Option 1');
  });

  it('navigates options with keyboard and closes list on Escape', async () => {
    render(<ComboboxWrapper />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Escape' });
    expect(screen.queryByRole('listbox')).toBeNull();
  });

  it('handles special keys without breaking', async () => {
    render(<ComboboxWrapper />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'PageDown' });
    fireEvent.keyDown(input, { key: 'Home' });
    fireEvent.keyDown(input, { key: 'End' });
    fireEvent.keyDown(input, { key: 'PageUp' });
    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('handles onChange and onBlur correctly', async () => {
    const onChange = vi.fn();
    const onBlur = vi.fn();
    render(<ComboboxWrapper onChange={onChange} onBlur={onBlur} />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'Option 2' } });
    fireEvent.blur(input);
    expect(onChange).toHaveBeenCalledWith('Option 2');
    expect(onBlur).toHaveBeenCalled();
  });

  it('handles Backspace key', async () => {
    render(<ComboboxWrapper value="Option 1" />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.keyDown(input, { key: 'Backspace' });
    await waitFor(() => expect(defaultProps.onChange).toHaveBeenCalledWith(''));
  });

  it('handles Enter key without navigation option', async () => {
    render(<ComboboxWrapper value="" />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: 'Enter' });
    await waitFor(() => expect(defaultProps.onSelect).not.toHaveBeenCalled());
  });

  it('handles input blur with selectOnBlur set to false', async () => {
    render(<ComboboxWrapper selectOnBlur={false} />);
    const input = screen.getByRole('combobox');
    fireEvent.focus(input);
    fireEvent.blur(input);
    await waitFor(() => expect(defaultProps.onSelect).not.toHaveBeenCalled());
  });
});
