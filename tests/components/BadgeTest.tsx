import React from 'react';

import { render, screen } from '@testing-library/react';

import { Badge } from '../../packages/badge/src/component';

describe('Badge', () => {
  test('renders Badge component', () => {
    render(
      <Badge variant="neutral" position="top-left">
        Test Badge
      </Badge>,
    );
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  test('renders Badge component with correct classes when variant is neutral', () => {
    const { container } = render(<Badge variant="neutral">Test Badge</Badge>);
    expect(container.firstChild).toHaveClass(
      'py-4 px-8 border-0 rounded-4 text-xs inline-flex bg-[--w-color-badge-neutral-background] s-text',
    );
  });

  test('renders Badge component with correct classes when position is top-left', () => {
    const { container } = render(<Badge position="top-left">Test Badge</Badge>);
    expect(container.firstChild).toHaveClass(
      'py-4 px-8 border-0 rounded-4 text-xs inline-flex bg-[--w-color-badge-neutral-background] s-text absolute backdrop-blur rounded-tl-0 rounded-tr-0 rounded-bl-0 top-0 left-0',
    );
  });

  test('renders Badge component with correct classes when position is top-right', () => {
    const { container } = render(<Badge position="top-right">Test Badge</Badge>);
    expect(container.firstChild).toHaveClass(
      'py-4 px-8 border-0 rounded-4 text-xs inline-flex bg-[--w-color-badge-neutral-background] s-text absolute backdrop-blur rounded-tl-0 rounded-tr-0 rounded-br-0 top-0 right-0',
    );
  });

  test('renders Badge component with correct classes when position is bottom-right', () => {
    const { container } = render(<Badge position="bottom-right">Test Badge</Badge>);
    expect(container.firstChild).toHaveClass(
      'py-4 px-8 border-0 rounded-4 text-xs inline-flex bg-[--w-color-badge-neutral-background] s-text absolute backdrop-blur rounded-tr-0 rounded-br-0 rounded-bl-0 bottom-0 right-0',
    );
  });

  test('renders Badge component with correct classes when position is bottom-left', () => {
    const { container } = render(<Badge position="bottom-left">Test Badge</Badge>);
    expect(container.firstChild).toHaveClass(
      'py-4 px-8 border-0 rounded-4 text-xs inline-flex bg-[--w-color-badge-neutral-background] s-text absolute backdrop-blur rounded-tl-0 rounded-br-0 rounded-bl-0 bottom-0 left-0',
    );
  });
});
