import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Pill } from '../../packages/pill/src/component';

describe('Pill component', () => {
  const defaultProps = {
    label: 'Test Label',
    onClick: vi.fn(),
    onClose: vi.fn(),
    canClose: true,
    suggestion: false,
  };

  it('renders correctly', () => {
    render(<Pill {...defaultProps} />);
    expect(screen.getByText(defaultProps.label)).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    render(<Pill {...defaultProps} />);
    const button = screen.getByText(defaultProps.label);
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('renders close button when canClose is true', () => {
    render(<Pill {...defaultProps} />);
    const closeButton = screen.getByRole('button', { name: 'Remove filter Test Label' });
    expect(closeButton).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(<Pill {...defaultProps} />);
    const closeButton = screen.getByRole('button', { name: 'Remove filter Test Label' });
    fireEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it('renders suggestion class when suggestion is true', () => {
    const props: PillProps = { ...defaultProps, suggestion: true };
    render(<Pill {...props} />);
    expect(screen.getAllByRole('button')[0]).toHaveClass(
      'inline-flex items-center focusable text-xs transition-all bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold pl-12 py-8 rounded-l-full pr-2',
    );
    expect(screen.getAllByRole('button')[1]).toHaveClass(
      'inline-flex items-center focusable text-xs transition-all bg-[--w-color-pill-suggestion-background] hover:bg-[--w-color-pill-suggestion-background-hover] active:bg-[--w-color-pill-suggestion-background-active] s-text font-bold pr-12 pl-4 py-8 rounded-r-full',
    );
  });

  it('renders filter class when suggestion is false', () => {
    render(<Pill {...defaultProps} />);
    expect(screen.getAllByRole('button')[0]).toHaveClass(
      'inline-flex items-center focusable text-xs transition-all s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted pl-12 py-8 rounded-l-full pr-2',
    );
    expect(screen.getAllByRole('button')[1]).toHaveClass(
      'inline-flex items-center focusable text-xs transition-all s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted pr-12 pl-4 py-8 rounded-r-full',
    );
  });

  it('renders label without close class when canClose is false', () => {
    const props: PillProps = { ...defaultProps, canClose: false };
    render(<Pill {...props} />);
    expect(screen.getByRole('button')).toHaveClass(
      'inline-flex items-center focusable text-xs transition-all s-bg-primary hover:s-bg-primary-hover active:s-bg-primary-active s-text-inverted pl-12 py-8 rounded-l-full pr-12 rounded-r-full',
    );
  });

  it('renders icon when icon prop is provided', () => {
    const props: PillProps = { ...defaultProps, icon: <div>Icon</div> };
    render(<Pill {...props} />);
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });
});
