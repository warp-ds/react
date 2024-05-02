import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from '../../packages/card/src/component';

describe('Card', () => {
  it('renders without crashing', () => {
    render(<Card as="article" />);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(<Card>Test</Card>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies custom class name', () => {
    render(<Card as="article" className="custom-class" />);
    expect(screen.getByRole('article')).toHaveClass('custom-class');
  });

  it('renders flat card correctly', () => {
    render(<Card as="article" flat />);
    expect(screen.getByRole('article')).toHaveClass('cursor-pointer overflow-hidden relative transition-all border-2 rounded-4 s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active');
  });

  it('renders selected card correctly', () => {
    render(<Card as="article" selected />);
    expect(screen.getByRole('article')).toHaveClass('cursor-pointer overflow-hidden relative transition-all group rounded-8 s-surface-elevated-200 hover:s-surface-elevated-200-hover active:s-surface-elevated-200-active !s-bg-selected !hover:s-bg-selected-hover !active:s-bg-selected-active');
  });

  it('renders flat selected card correctly', () => {
    render(<Card as="article" flat selected />);
    expect(screen.getByRole('article')).toHaveClass('cursor-pointer overflow-hidden relative transition-all border-2 rounded-4 s-bg-selected hover:s-bg-selected-hover active:s-bg-selected-active s-border-selected hover:s-border-selected-hover active:s-border-selected-active');
  });

  it('handles onKeyDown events', () => {
    const handleClick = vi.fn();
    render(<Card as="article" onClick={handleClick} />);
    fireEvent.keyDown(screen.getByRole('article'), { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(screen.getByRole('article'), { key: ' ', code: 'Space' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('does not call onClick for other keys', () => {
    const handleClick = vi.fn();
    render(<Card as="article" onClick={handleClick} />);
    fireEvent.keyDown(screen.getByRole('article'), { key: 'ArrowRight', code: 'ArrowRight' });
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders sr-only button when onClick is provided', () => {
    render(<Card as="article" onClick={() => {}} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('does not render sr-only button when onClick is not provided', () => {
    render(<Card />);
    expect(screen.queryByRole('button')).toBeNull();
  });
});
