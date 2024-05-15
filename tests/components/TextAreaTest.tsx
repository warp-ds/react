import React, { createRef } from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import { TextArea } from '../../packages/textarea/src/component.tsx';

describe('TextArea component', () => {
  const defaultProps = {
    label: 'Test Label',
    type: 'text',
  };

  it('renders correctly', () => {
    render(<TextArea {...defaultProps} />);
    expect(screen.getByText(defaultProps.label)).toBeInTheDocument();
  });

  it('renders input field with correct class names', () => {
    render(<TextArea {...defaultProps} />);
    expect(screen.getByRole('textbox')).toHaveClass(
      'block text-m mb-0 leading-m s-text s-bg s-border hover:s-border-hover active:s-border-selected rounded-4 py-12 px-8 block border-1 w-full focusable focus:[--w-outline-offset:-2px] caret-current',
    );
  });

  it('renders label with optional text when optional is true', () => {
    const props = { ...defaultProps, optional: true };
    render(<TextArea {...props} />);
    expect(screen.getByText('(optional)')).toBeInTheDocument();
  });

  it('renders help text when helpText is provided', () => {
    const props = { ...defaultProps, helpText: 'Help text' };
    render(<TextArea {...props} />);
    expect(screen.getByText(props.helpText)).toBeInTheDocument();
  });

  it('renders input field with invalid class when invalid is true', () => {
    const props = { ...defaultProps, invalid: true };
    render(<TextArea {...props} />);
    expect(screen.getByRole('textbox')).toHaveClass(
      'block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current border-1 s-text-negative s-bg s-border-negative hover:s-border-negative-hover outline-[--w-s-color-border-negative]!',
    );
  });

  it('renders input field with disabled class when disabled is true', () => {
    const props = { ...defaultProps, disabled: true };
    render(<TextArea {...props} />);
    expect(screen.getByRole('textbox')).toHaveClass(
      'block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current border-1 s-text-disabled s-bg-disabled-subtle s-border-disabled pointer-events-none',
    );
  });

  it('renders input field with read-only class when readOnly is true', () => {
    const props = { ...defaultProps, readOnly: true };
    render(<TextArea {...props} />);
    expect(screen.getByRole('textbox')).toHaveClass(
      'block text-m leading-m mb-0 px-8 py-12 rounded-4 w-full focusable focus:[--w-outline-offset:-2px] caret-current pl-0 bg-transparent pointer-events-none',
    );
  });

  it('calls onChange callback when input value changes', () => {
    const onChange = vi.fn();
    const props = { ...defaultProps, onChange };
    render(<TextArea {...props} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New value' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('ref is correctly assigned to the textarea element', () => {
    // Create a ref using React.createRef
    const textAreaRef = createRef<HTMLTextAreaElement>();

    // Render the TextArea component and pass the ref as forwardRef
    // eslint-disable-next-line
    const { container } = render(<TextArea ref={textAreaRef} />);

    // Use the ref to check the current element
    const textAreaElement = textAreaRef.current;

    // Verify that the ref is correctly assigned to the textarea element
    expect(textAreaElement).toBeInTheDocument();

    // Check if the ref points to the correct textarea element
    const textareaInDOM = screen.getByRole('textbox');
    expect(textAreaElement).toBe(textareaInDOM);
  });
  it('forwardRef function is called with the textarea node', () => {
    // Create a mock function to use as the forwardRef
    const forwardRefFunction = vi.fn();

    // Render the TextArea component and pass the mock function as forwardRef
    render(<TextArea ref={forwardRefFunction} />);

    // Verify that the mock function is called with the correct textarea element
    const textareaElement = screen.getByRole('textbox');
    expect(forwardRefFunction).toHaveBeenCalledWith(textareaElement);
  });

  it('aria-errormessage is set correctly', () => {
    // Test case when isInvalid is true and helpId is defined
    const { rerender } = render(<TextArea invalid={true} helpText="This is an error" />);

    // Retrieve the textarea element
    const textareaElement = screen.getByRole('textbox');

    // Check that the aria-errormessage attribute is set to the helpId
    const helpId = textareaElement.getAttribute('aria-describedby');
    expect(textareaElement.getAttribute('aria-errormessage')).toBe(helpId);

    // Test case when isInvalid is false
    rerender(<TextArea invalid={false} helpText="This is an error" />);

    // Check that the aria-errormessage attribute is undefined
    expect(textareaElement.getAttribute('aria-errormessage')).toBe(null);
  });
});
