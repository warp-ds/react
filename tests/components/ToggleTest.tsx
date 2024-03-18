import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { toggle as ccToggle, label as ccLabel, helpText as ccHelpText } from '@warp-ds/css/component-classes';

import { Toggle } from '../../packages/toggle/src/index.js';

const classesToSelectors = (classes: string) => classes.split(' ').map((c) => {
  // some classes may contain brackets for passing arbitrary values, so we need to escape them
  const withEscapedBrackets = c.replace(/\[/g, '\\[').replace(/\]/g, '\\]');
  return `.${withEscapedBrackets}`
}).join('');

const onChangeFunction = vi.fn();


// Checkbox
describe('Toggle checkbox component', () => {
  beforeEach(() => {
    render(
      <Toggle
        onChange={onChangeFunction}
        checked
        type="checkbox"
        label="Toggle X"
      />
    );
  })
  
  afterEach(() => {
    vi.resetAllMocks();
  })

  it('renders', () => {
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders a label', () => {
    const label = screen.getByText('Toggle X');
    expect(label).toBeInTheDocument();
  });

  it('calls on change function on click', () => {
    fireEvent.click(screen.getByRole('checkbox'));

    expect(onChangeFunction).toHaveBeenCalledTimes(1);
    expect(onChangeFunction).toHaveBeenCalledWith(false);
  });
});

it('renders checkbox with title', () => {
  render(
    <Toggle
      type="checkbox"
      title="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      label="Toggle X"
    />
  );
  expect(screen.getByText('Favorite color')).toBeInTheDocument();
});

it('renders checkbox with optional', () => {
  render(
    <Toggle
      optional
      type="checkbox"
      title="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      label="Toggle X"
    />
  );
  expect(screen.getByText('Favorite color')).toHaveTextContent('Favorite color(optional)');
});

it('renders checkbox with help text', () => {
  render(
    <Toggle
      type="checkbox"
      title="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      helpText="Choose your favorite color"
      label="Toggle X"
    />
  );
  expect(screen.getByText('Choose your favorite color')).toBeInTheDocument();
});

it('renders checkbox with invalid', () => {
  render(
    <Toggle
      type="checkbox"
      title="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      invalid
      label="Toggle X"
      helpText="This is an error message"
    />
  );
  expect(screen.getByText('Favorite color')).toHaveClass(ccLabel.label);
  expect(screen.getByText('This is an error message')).toHaveClass(ccHelpText.helpTextColorInvalid);
});

it('renders checkbox with disabled', () => {
  render(
    <Toggle
      type="checkbox"
      label="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      disabled
    />
  );
  expect(screen.getByRole('checkbox')).toBeDisabled();
});

it('renders checkbox with indeterminate', () => {
  render(
    <Toggle
      type="checkbox"
      title="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      indeterminate
      label="Toggle X"
    />
  );
  expect(screen.getByText('Toggle X')).toHaveClass(ccToggle.indeterminate);
});

it('renders checkbox with indeterminate invalid', () => {
  render(
    <Toggle
      type="checkbox"
      title="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      indeterminate
      invalid
      label="Toggle X"
    />
  );
  expect(screen.getByText('Toggle X')).toHaveClass(ccToggle.indeterminateInvalid);
});

it('renders checkbox with indeterminate disabled', () => {
  render(
    <Toggle
      type="checkbox"
      title="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      indeterminate
      disabled
      label="Toggle X"
    />
  );
  expect(screen.getByText('Toggle X')).toHaveClass(ccToggle.indeterminateDisabled);
});

it('renders checkbox with no visible label', () => {
  render(
    <Toggle
      type="checkbox"
      label="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      noVisibleLabel
    />
  );
  expect(screen.getByText('Favorite color')).toHaveClass(ccToggle.a11y);
});

// Radio
describe('Toggle radio component', () => {
    beforeEach(() => {
        render(<Toggle
            onChange={onChangeFunction}
            checked={false}
            type="radio"
            label="Toggle X"
          />);
    })
    
    afterEach(() => {
        vi.resetAllMocks();
    })

    it('renders', () => {
        expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('renders a label', () => {
        const label = screen.getByText('Toggle X');
        expect(label).toBeInTheDocument();
    });

    it('calls on change function on click', () => {
        fireEvent.click(screen.getByRole('radio'));

        expect(onChangeFunction).toHaveBeenCalledTimes(1);
        expect(onChangeFunction).toHaveBeenCalledWith(true);
    });
});

it('renders radio with title', () => {
  render(
    <Toggle
      type="radio"
      title="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      label="Toggle X"
    />
  );
  expect(screen.getByText('Favorite color')).toBeInTheDocument();
});

it('renders radio with optional', () => {
  render(
    <Toggle
      optional
      type="radio"
      title="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      label="Toggle X"
    />
  );
  expect(screen.getByText('Favorite color')).toHaveTextContent('Favorite color(optional)');
});

it('renders radio with help text', () => {
  render(
    <Toggle
      type="radio"
      title="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      helpText="Choose your favorite color"
      label="Toggle X"
    />
  );
  expect(screen.getByText('Choose your favorite color')).toBeInTheDocument();
});

it('renders radio with invalid', () => {
  render(
    <Toggle
      type="radio"
      title="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      invalid
      label="Toggle X"
      helpText="This is an error message"
    />
  );
  expect(screen.getByText('Favorite color')).toHaveClass(ccLabel.label);
  expect(screen.getByText('This is an error message')).toHaveClass(ccHelpText.helpTextColorInvalid);
});

it('renders radio with no visible label', () => {
  render(
    <Toggle
      type="radio"
      label="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      noVisibleLabel
    />
  );
  expect(screen.getByText('Favorite color')).toHaveClass(ccToggle.a11y);
});

it('renders radio with disabled', () => {
  render(
    <Toggle
      type="radio"
      label="Favorite color"
      onChange={(selected) => onChangeFunction(selected)}
      disabled
    />
  );
  expect(screen.getByRole('radio')).toBeDisabled();
});

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
];

// Radio button
describe('Toggle radio button component', () => {
  beforeEach(() => {
    render(
      <Toggle
        type="radio-button"
        options={options}
        onChange={(selected) => onChangeFunction(selected)}
        label="Toggle X"
      />
    );
  })
  
  afterEach(() => {
      vi.resetAllMocks();
  })

  it('renders', () => {
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
  });

  it('renders 3 radio input', () => {
    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('renders correct labels', () => {
    expect(() => screen.getByText('Toggle X')).toThrow();
    expect(screen.getAllByRole('radio')[0].nextElementSibling?.textContent).toBe('Red');
    expect(screen.getAllByRole('radio')[1].nextElementSibling?.textContent).toBe('Blue');
    expect(screen.getAllByRole('radio')[2].nextElementSibling?.textContent).toBe('Green');
  });

  it('calls on change function on click', () => {
    fireEvent.click(screen.getAllByRole('radio')[0]);

    expect(onChangeFunction).toHaveBeenCalledTimes(1);
    expect(onChangeFunction).toHaveBeenCalledWith(options[0]);
  });
});

it('renders radio button with equal width', () => {
  const { container } = render(
    <Toggle
      type="radio-button"
      equalWidth
      options={options}
      onChange={(selected) => onChangeFunction(selected)}
    />
  );
  const justifiedRadioButtonClasses = classesToSelectors(ccToggle.radioButtonsGroupJustified);
  expect(container.querySelector(justifiedRadioButtonClasses)).toBeInTheDocument();
});

it('renders radio button with small size', () => {
  const { container } = render(
    <Toggle
      type="radio-button"
      small
      options={options}
      onChange={(selected) => onChangeFunction(selected)}
    />
  );
  const smallRadioButtonClasses = classesToSelectors(ccToggle.radioButtonsSmall);

  expect(container.querySelector(smallRadioButtonClasses)).toBeInTheDocument();
});

it('renders radio button with title', () => {
  render(
    <Toggle
      type="radio-button"
      title="Favorite color"
      options={options}
      onChange={(selected) => onChangeFunction(selected)}
    />
  );
  expect(screen.getByText('Favorite color')).toBeInTheDocument();
});

it('renders radio button with optional', () => {
  render(
    <Toggle
      optional
      type="radio-button"
      title="Favorite color"
      options={options}
      onChange={(selected) => onChangeFunction(selected)}
    />
  );
  expect(screen.getByText('Favorite color')).toHaveTextContent('Favorite color(optional)');
});

it('renders radio button with help text', () => {
  render(
    <Toggle
      type="radio-button"
      title="Favorite color"
      options={options}
      onChange={(selected) => onChangeFunction(selected)}
      helpText="Choose your favorite color"
    />
  );
  expect(screen.getByText('Choose your favorite color')).toBeInTheDocument();
});