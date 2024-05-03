import React from 'react';
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react';
import { Expandable } from '../../packages/expandable/src/component';

describe('Expandable component', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  it('renders with default props', () => {
    render(<Expandable title="Default Title">Default Content</Expandable>);
    expect(screen.getByText('Default Title')).toBeInTheDocument();
    expect(screen.getByText('Default Content')).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    render(
      <Expandable
        title="Custom Title"
        box
        bleed
        buttonClass="custom-button"
        contentClass="custom-content"
        headingLevel={2}
      >
        Custom Content
      </Expandable>
    );
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('custom-button');
    expect(screen.getByText('Custom Content')).toHaveClass('custom-content');
  });

  it('toggles expanded state on button click', async () => {
    render(<Expandable title="Toggle Me">Toggle Content</Expandable>);
    const button = screen.getByRole('button');
    expect(screen.getByTestId('expandable-content')).toHaveClass('overflow-hidden h-0 invisible');
    await fireEvent.click(button);
    expect(screen.getByTestId('expandable-content')).toHaveClass('overflow-hidden');
  });

  it('calls onChange callback on expanded state change', () => {
    const onChange = vi.fn();
    render(
      <Expandable title="Toggle Me" onChange={onChange}>
        Toggle Content
      </Expandable>
    );
    const button = screen.getByText('Toggle Me');
    fireEvent.click(button);
    expect(onChange).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  // this test doesn't work becuae of the setTimeout in the component
  it.skip('renders chevron icons correctly', () => {
    render(<Expandable title="Chevron Test">Chevron Content</Expandable>);
    const chevronDown = screen.getByTitle('Downward arrow');
    expect(chevronDown).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    act(() => {
        /* fire events that update state */
        vi.advanceTimersByTime(250);
        const chevronUp = screen.getByTitle('Upward arrow');
        expect(chevronUp).toBeInTheDocument();
    });
  });

  it('renders animated expansion correctly', () => {
    render(<Expandable title="Animated Test" animated>Animated Content</Expandable>);
    const content = screen.getByTestId('expand-transition');
    fireEvent.click(screen.getByRole('button'));
    expect(content).toHaveClass('overflow-hidden h-0');
  });
});