import React from 'react';

import { render, screen } from '@testing-library/react';

import { Steps } from '../../packages/steps/src/component';
import { Step } from '../../packages/steps/src/step';

describe('Steps component', () => {
  it('renders a ul element with the correct class names for horizontal steps', () => {
    const { container } = render(<Steps horizontal={true} right={false} />);
    const ulElement = container.querySelector('ul');
    expect(ulElement).toHaveClass('w-full flex');
  });

  it('renders a ul element with the correct class names for vertical steps', () => {
    const { container } = render(<Steps horizontal={false} right={false} />);
    const ulElement = container.querySelector('ul');
    expect(ulElement).toHaveClass('w-full');
  });

  it('renders children elements', () => {
    const childElement = <li>Child element</li>;
    const { container } = render(<Steps>{childElement}</Steps>);
    expect(container.querySelector('li')).toBeInTheDocument();
  });
});

describe('Step component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Step>Step content</Step>);
    // DOM is a bit complicated hence snapshot testing
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with active prop', () => {
    const { container } = render(<Step active>Step content</Step>);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with completed prop', () => {
    const { container } = render(<Step completed>Step content</Step>);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly with both active and completed props', () => {
    const { container } = render(
      <Step active completed>
        Step content
      </Step>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders correct aria-label', () => {
    render(<Step active>Step content</Step>);
    const stepDot = screen.getByRole('img');
    expect(stepDot).toHaveAttribute('aria-label', 'Step indicator active circle');
  });

  it('renders correct aria-current attribute', () => {
    render(<Step active>Step content</Step>);
    const stepDot = screen.getByRole('img');
    expect(stepDot).toHaveAttribute('aria-current', 'step');
  });

  it('renders IconCheck16 when completed prop is true', () => {
    render(<Step completed>Step content</Step>);
    const icon = screen.getByTestId('completed-icon');
    expect(icon).toBeInTheDocument();
  });
});
