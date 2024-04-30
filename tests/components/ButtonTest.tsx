import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../packages/button/src/component';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders primary button correctly', () => {
    render(<Button primary />);
    expect(screen.getByRole('button')).toHaveClass('py-12 px-16 text-m leading-[24] border-0 rounded-8 font-bold focusable justify-center transition-colors ease-in-out s-text-inverted bg-[--w-color-button-primary-background] hover:bg-[--w-color-button-primary-background-hover] active:bg-[--w-color-button-primary-background-active] max-w-max');
  });

  it('renders secondary button correctly', () => {
    render(<Button secondary />);
    expect(screen.getByRole('button')).toHaveClass('py-10 px-14 text-m leading-[24] border-2 rounded-8 font-bold focusable justify-center transition-colors ease-in-out s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active max-w-max');
  });

  it('renders negative button correctly', () => {
    render(<Button negative />);
    expect(screen.getByRole('button')).toHaveClass('py-12 px-16 text-m leading-[24] border-0 rounded-8 font-bold focusable justify-center transition-colors ease-in-out s-bg-negative s-text-inverted hover:s-bg-negative-hover active:s-bg-negative-active max-w-max');
  });

  it('renders utility button correctly', () => {
    render(<Button utility />);
    expect(screen.getByRole('button')).toHaveClass('py-[11px] px-[15px] text-m leading-[24] border rounded-4 font-bold focusable justify-center transition-colors ease-in-out s-text s-bg hover:s-bg-hover active:s-bg-active s-border hover:s-border-hover active:s-border-active max-w-max');
  });

  it('renders quiet button correctly', () => {
    render(<Button quiet />);
    expect(screen.getByRole('button')).toHaveClass('py-10 px-14 text-m leading-[24] border-0 rounded-8 font-bold focusable justify-center transition-colors ease-in-out bg-transparent s-text-link hover:s-bg-hover active:s-bg-active max-w-max');
  });

  it('renders small button correctly', () => {
    render(<Button small />);
    expect(screen.getByRole('button')).toHaveClass('text-xs py-6 px-16 border-2 rounded-8 font-bold focusable justify-center transition-colors ease-in-out s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active max-w-max');
  });

  it('renders link button correctly', () => {
    render(<Button link />);
    expect(screen.getByRole('link')).toHaveClass('p-0 text-m leading-[24] bg-transparent focusable ease-in-out inline active:underline hover:underline focus:underline s-text-link max-w-max');
  });

  it('renders pill button correctly', () => {
    render(<Button pill />);
    expect(screen.getByRole('button')).toHaveClass('min-h-[44px] min-w-[44px] text-m leading-[24] p-4 rounded-full border-0 inline-flex items-center justify-center hover:bg-clip-padding font-bold focusable justify-center transition-colors ease-in-out s-icon hover:s-icon-hover active:s-icon-active bg-transparent hover:bg-[--w-color-button-pill-background-hover] active:bg-[--w-color-button-pill-background-active] max-w-max');
  });

  it('renders loading button correctly', () => {
    render(<Button loading />);
    expect(screen.getByRole('button')).toHaveClass('py-10 px-14 text-m leading-[24] border-2 rounded-8 font-bold focusable justify-center transition-colors ease-in-out border-transparent animate-inprogress pointer-events-none s-text s-bg-subtle max-w-max');
  });

  it('renders fullWidth button correctly', () => {
    render(<Button fullWidth />);
    expect(screen.getByRole('button')).toHaveClass('py-10 px-14 text-m leading-[24] border-2 rounded-8 font-bold focusable justify-center transition-colors ease-in-out s-text-link s-border s-bg hover:s-bg-hover hover:s-border-hover active:s-bg-active w-full max-w-full');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('renders anchor when href is provided', () => {
    render(<Button href="https://example.com" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('handles click events on anchor', () => {
    const handleClick = vi.fn();
    render(<Button href="https://example.com" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders loading state correctly', () => {
    render(<Button loading />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});