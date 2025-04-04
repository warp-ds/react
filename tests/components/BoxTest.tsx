import React from 'react';

import { render, screen } from '@testing-library/react';

import { Box } from '../../packages/box/src/component';

describe('Box', () => {
  test('renders Box component', () => {
    render(
      <Box bleed={true} info={true}>
        Test Box
      </Box>,
    );
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByRole('region')).toHaveTextContent('Test Box');
  });
  test('renders Box component with nullable children', () => {
    const conditionalVariable = false;
    render(
      <Box bleed={true} info={true}>
        Test Box
        {conditionalVariable && <div>abc123</div>}
      </Box>,
    );
    expect(screen.getByText('abc123')).toBeInTheDocument();
  });

  test('renders Box component with correct classes when bleed is true', () => {
    const { container } = render(<Box bleed={true}>Test Box</Box>);
    expect(container.firstChild).toHaveClass(
      'group block relative break-words last-child:mb-0 p-16 rounded-8 -mx-16 sm:mx-0 rounded-l-0 rounded-r-0 sm:rounded-8',
    );
  });

  test('renders Box component with correct classes when info is true', () => {
    const { container } = render(<Box info={true}>Test Box</Box>);
    expect(container.firstChild).toHaveClass('group block relative break-words last-child:mb-0 p-16 rounded-8 s-bg-info-subtle');
  });

  test('renders Box component with correct classes when neutral is true', () => {
    const { container } = render(<Box neutral={true}>Test Box</Box>);
    expect(container.firstChild).toHaveClass('group block relative break-words last-child:mb-0 p-16 rounded-8 s-surface-sunken');
  });

  test('renders Box component with correct classes when bordered is true', () => {
    const { container } = render(<Box bordered={true}>Test Box</Box>);
    expect(container.firstChild).toHaveClass('group block relative break-words last-child:mb-0 p-16 rounded-8 border-2 s-border s-bg');
  });
});
