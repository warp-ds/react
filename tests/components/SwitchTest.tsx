import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Switch } from '../../packages/switch/src/component';

describe('Switch component', () => {
  it('renders a button element', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('sets the aria-label attribute when ariaLabel prop is provided', () => {
    render(<Switch aria-label="My Switch" />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-label', 'My Switch');
  });

  it('sets the aria-labelledby attribute when ariaLabelledBy prop is provided', () => {
    render(<Switch aria-labelledby="my-label" />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-labelledby', 'my-label');
  });

  it('sets the aria-checked attribute based on the value prop', () => {
    render(<Switch value />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('calls the onClick function when the button is clicked', () => {
    const onClickSpy = vi.fn();
    render(<Switch onClick={onClickSpy} />);
    const button = screen.getByRole('switch');
    fireEvent.click(button);
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it('renders the correct class names for switch', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toHaveClass('block relative h-24 w-44 cursor-pointer group focusable rounded-full');
  });

  it('renders the correct track and handle elements', () => {
    render(<Switch />);
    expect(screen.getByTestId('track')).toBeInTheDocument();
    expect(screen.getByTestId('handle')).toBeInTheDocument();
  });

  it('renders the correct class names for track and handle elements', () => {
    render(<Switch />);
    expect(screen.getByTestId('track')).toHaveClass(
      'absolute top-0 left-0 h-full w-full rounded-full transition-colors bg-[--w-color-switch-track-background] group-hover:bg-[--w-color-switch-track-background-hover]',
    );
    expect(screen.getByTestId('handle')).toHaveClass(
      'absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform s-bg shadow-s',
    );
  });

  it('updates the handle element class name based on the value prop', () => {
    const handleSelected = 'absolute transform-gpu h-16 w-16 top-4 left-4 rounded-full transition-transform s-bg shadow-s translate-x-20';
    const { rerender } = render(<Switch value={false} />);
    expect(screen.getByTestId('handle')).not.toHaveClass(handleSelected);
    rerender(<Switch value />);
    expect(screen.getByTestId('handle')).toHaveClass(handleSelected);
  });

  it('passes through additional props to the button element', () => {
    render(<Switch data-test="my-test" />);
    expect(screen.getByRole('switch')).toHaveAttribute('data-test', 'my-test');
  });

  it('does not call the onClick function when the button is disabled and clicked', () => {
    const onClickSpy = vi.fn();
    render(<Switch onClick={onClickSpy} disabled />);
    const button = screen.getByRole('switch');
    fireEvent.click(button);
    expect(onClickSpy).not.toHaveBeenCalled();
  });

  it('sets the aria-disabled attribute when disabled', () => {
    render(<Switch disabled />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-disabled', 'true');
  });

  it('sets the disabled attribute on the button when disabled', () => {
    render(<Switch disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('sets tabIndex to -1 when disabled', () => {
    render(<Switch disabled />);
    expect(screen.getByRole('switch')).toHaveAttribute('tabIndex', '-1');
  });
});
