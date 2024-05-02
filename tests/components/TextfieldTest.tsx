import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { TextField } from '../../packages/textfield/src/component';
import { Affix } from '../../packages/_helpers/affix.tsx';

describe('TextField component', () => {
  const defaultProps = {
    label: 'Test Label',
    type: 'text',
  };

  it('renders correctly', () => {
    render(<TextField {...defaultProps} />);
    expect(screen.getByText(defaultProps.label)).toBeInTheDocument();
  });

  it('renders input field with correct class names', () => {
    render(<TextField {...defaultProps} />);
    expect(screen.getByRole('textbox')).toHaveClass('block text-m mb-0 leading-m s-text s-bg s-border hover:s-border-hover active:s-border-selected rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] caret-current');
  });

  it('renders label with optional text when optional is true', () => {
    const props = { ...defaultProps, optional: true };
    render(<TextField {...props} />);
    expect(screen.getByText('(optional)')).toBeInTheDocument();
  });

  it('renders help text when helpText is provided', () => {
    const props = { ...defaultProps, helpText: 'Help text' };
    render(<TextField {...props} />);
    expect(screen.getByText(props.helpText)).toBeInTheDocument();
  });

  it('renders input field with invalid class when invalid is true', () => {
    const props = { ...defaultProps, invalid: true };
    render(<TextField {...props} />);
    expect(screen.getByRole('textbox')).toHaveClass('block text-m mb-0 leading-m s-text s-bg s-border hover:s-border-hover active:s-border-selected rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] caret-current s-border-negative s-text-negative! hover:s-border-negative-hover! outline-[--w-s-color-border-negative]!');
  });

  it('renders input field with disabled class when disabled is true', () => {
    const props = { ...defaultProps, disabled: true };
    render(<TextField {...props} />);
    expect(screen.getByRole('textbox')).toHaveClass('block text-m mb-0 leading-m s-text s-bg s-border hover:s-border-hover active:s-border-selected rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] caret-current s-bg-disabled-subtle s-border-disabled hover:s-border-disabled! s-text-disabled pointer-events-none');
  });

  it('renders input field with read-only class when readOnly is true', () => {
    const props = { ...defaultProps, readOnly: true };
    render(<TextField {...props} />);
    expect(screen.getByRole('textbox')).toHaveClass('block text-m mb-0 leading-m s-text s-bg s-border hover:s-border-hover active:s-border-selected rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] caret-current pl-0 bg-transparent! border-0! pointer-events-none');
  });

  it('calls onChange callback when input value changes', () => {
    const onChange = vi.fn();
    const props = { ...defaultProps, onChange };
    render(<TextField {...props} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New value' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('renders prefix or suffix elements when provided', () => {
    render(
      <TextField {...defaultProps}>
        {' '}
        <Affix suffix label="kr" />{' '}
      </TextField>,
    );
    expect(screen.getByText('kr')).toBeInTheDocument();
  });
});
