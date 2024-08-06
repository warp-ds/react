import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { Tab } from '../../packages/tabs/src/component-tab';
import { TabPanel } from '../../packages/tabs/src/component-tab-panel';
import { Tabs } from '../../packages/tabs/src/component-tabs';
import { debounce } from '../../packages/tabs/src/utils';

describe('Tabs component', () => {
  const children = [<Tab label="Tab 1" name="one" isActive />, <Tab label="Tab 2" name="two" />, <Tab label="Tab 3" name="three" />];

  it('renders the tabs', () => {
    render(<Tabs>{children}</Tabs>);
    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 3' })).toBeInTheDocument();
  });

  it('renders the selectionIndicator', () => {
    render(<Tabs>{children}</Tabs>);
    expect(screen.getByTestId('selection-indicator')).toBeInTheDocument();
  });

  it('updates the selectionIndicator position on resize', () => {
    render(<Tabs>{children}</Tabs>);
    const selectionIndicator = screen.getByTestId('selection-indicator');
    expect(selectionIndicator.style.left).toBe('');
    expect(selectionIndicator.style.width).toBe('');
    global.innerWidth = 800;
    global.dispatchEvent(new Event('resize'));
    waitFor(() => {
      expect(selectionIndicator.style.left).not.toBe('');
      expect(selectionIndicator.style.width).not.toBe('');
    });
  });

  it('changes the active tab on click', () => {
    render(<Tabs>{children}</Tabs>);
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab2).not.toHaveAttribute('aria-selected', 'true');
    fireEvent.click(tab2);
    expect(tab1).not.toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'true');
  });

  it('changes the active tab on keyboard navigation', () => {
    render(<Tabs>{children}</Tabs>);
    const tab1 = screen.getByRole('tab', { name: 'Tab 1' });
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab2).not.toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(tab1, { key: 'ArrowRight' });
    expect(tab1).not.toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('aria-selected', 'true');
  });

  it('calls the onChange callback when the active tab changes', () => {
    const onChange = vi.fn();
    render(<Tabs onChange={onChange}>{children}</Tabs>);
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    fireEvent.click(tab2);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('two');
  });
});

describe('Tab component', () => {
  const setActive = vi.fn();
  const onClick = vi.fn();
  const name = 'tab-1';
  const label = 'Tab 1';
  const children = <div className="dummy-warp-class">Icon</div>;

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<Tab name={name} label={label} setActive={setActive} onClick={onClick} isActive={true} />);
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(label).closest('button')).toHaveClass(
      'grid items-center font-bold gap-8 focusable antialias p-16 pb-8 border-b-4 bg-transparent border-transparent hover:s-text-link hover:s-border-primary s-text-link',
    );
    expect(screen.getByText(label).closest('button')).toHaveAttribute('role', 'tab');
    expect(screen.getByText(label).closest('button')).toHaveAttribute('aria-selected', 'true');
  });

  it('renders with icon and label', () => {
    render(<Tab name={name} label={label} setActive={setActive} onClick={onClick} isActive={true} children={children} over={true} />);
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText('Icon')).toBeInTheDocument();
    expect(screen.getByText('Icon').closest('span')).toHaveClass('mx-auto');
    expect(screen.getByText(label).closest('span')).toHaveClass('content-underlined');
  });

  it('renders with children and no label', () => {
    render(<Tab name={name} setActive={setActive} onClick={onClick} isActive={true} children={children} over={false} />);
    expect(screen.getByText('Icon')).toBeInTheDocument();
    expect(screen.getByText('Icon').closest('div')).toHaveClass('dummy-warp-class');
  });

  it('calls setActive and onClick when clicked', () => {
    render(<Tab name={name} label={label} setActive={setActive} onClick={onClick} isActive={true} />);
    const button = screen.getByText(label).closest('button');
    fireEvent.click(button);
    expect(setActive).toHaveBeenCalledTimes(1);
    expect(setActive).toHaveBeenCalledWith(name);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when no onClick prop is provided', () => {
    render(<Tab name={name} label={label} setActive={setActive} isActive={true} />);
    const button = screen.getByText(label).closest('button');
    fireEvent.click(button);
    expect(setActive).toHaveBeenCalledTimes(1);
    expect(setActive).toHaveBeenCalledWith(name);
  });
});

describe('TabPanel', () => {
  it('renders children', () => {
    render(<TabPanel name="one">Tab one selected!</TabPanel>);
    expect(screen.getByText('Tab one selected!')).toBeInTheDocument();
  });

  it('has correct role and aria attributes', () => {
    render(<TabPanel name="one">Tab one selected!</TabPanel>);
    const tabPanel = screen.getByRole('tabpanel', { hidden: true });
    expect(tabPanel).toHaveAttribute('aria-labelledby', 'warp-tab-one');
    expect(tabPanel).toHaveAttribute('id', 'warp-tabpanel-one');
  });

  it('is hidden by default if no active tab is found', () => {
    render(<TabPanel name="test-tab" />);
    const tabPanel = screen.getByRole('tabpanel', { hidden: true });
    expect(tabPanel).toHaveAttribute('hidden', '');
  });

  it('is not hidden if hidden prop is false', () => {
    render(<TabPanel name="test-tab" hidden={false} />);
    const tabPanel = screen.getByRole('tabpanel', { hidden: true });
    expect(tabPanel).not.toHaveAttribute('hidden');
  });

  it('is hidden if hidden prop is true', () => {
    render(<TabPanel name="test-tab" hidden={true} />);
    const tabPanel = screen.getByRole('tabpanel', { hidden: true });
    expect(tabPanel).toHaveAttribute('hidden', '');
  });
});

describe('debounce function', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('debounces a function call', () => {
    const func = vi.fn();

    const debouncedFunc = debounce(func, 100);
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('debounces multiple function calls', () => {
    const func = vi.fn();
    const debouncedFunc = debounce(func, 100);
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    expect(func).not.toHaveBeenCalled();
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('calls the function immediately if immediate is true', () => {
    const func = vi.fn();
    const debouncedFunc = debounce(func, 100, true);
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('does not call the function if the debounced function is called multiple times with immediate true', () => {
    const func = vi.fn();
    const debouncedFunc = debounce(func, 100, true);
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('calls the function with the correct context and arguments', () => {
    const func = vi.fn();
    const debouncedFunc = debounce(func, 100);
    const context = { foo: 'bar' };
    const args = [1, 2, 3];
    debouncedFunc.apply(context, args);
    vi.advanceTimersByTime(100);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith(1, 2, 3);
    expect(func.mock.instances[0]).toBe(context);
  });
});
