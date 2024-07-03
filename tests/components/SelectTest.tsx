import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { Select } from '../../packages/select/src/component';

describe('Select', () => {
  let props;

  beforeEach(() => {
    props = {
      className: 'testClass',
      invalid: false,
      id: 'testId',
      hint: 'testHint',
      always: true,
      label: 'testLabel',
      style: {},
      optional: true,
      readOnly: false,
      disabled: false,
      // Add other props here as needed
    };
  });

  it('renders without crashing', () => {
    render(<Select {...props} />);
    expect(screen.getByText('testLabel')).toBeInTheDocument();
  });

  it('handles select change', () => {
    render(
      <Select {...props}>
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>,
    );
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 's' } });
    expect(select.value).toBe('s');
  });

  it('renders label', () => {
    render(<Select {...props} />);
    expect(screen.getByText('testLabel')).toBeInTheDocument();
  });

  it('renders hint when always is true', () => {
    render(<Select {...props} />);
    expect(screen.getByText('testHint')).toBeInTheDocument();
  });

  it('does not render hint when always is false and invalid is false', () => {
    props.always = false;
    props.invalid = false;
    render(<Select {...props} />);
    expect(screen.queryByText('testHint')).toBeNull();
  });

  it('renders hint when always is false and invalid is true', () => {
    props.always = false;
    props.invalid = true;
    render(<Select {...props} />);
    expect(screen.getByText('testHint')).toBeInTheDocument();
  });

  it('supports required prop', () => {
    render(<Select aria-label="label" required />);

    expect(screen.queryByLabelText('label')).toBeRequired();
  });

  it('supports disabled prop', () => {
    const tree = render(<Select aria-label="label" disabled />);

    expect(screen.queryByLabelText('label')).toBeDisabled();
    expect(tree.container.firstChild).toHaveClass('relative');
  });

  it('forwards ref to the select element', () => {
    let ref = React.createRef<HTMLSelectElement>();

    render(<Select aria-label="label" ref={ref} />);

    expect(screen.queryByRole('combobox')).toEqual(ref.current);
  });

  it('supports labeling', () => {
    const labelText = 'labelText';
    render(<Select label={labelText} />);

    const label = screen.getByText(labelText);
    const input = screen.getByLabelText(labelText);

    expect(label).toHaveAttribute('for', input.id);
  });
});
