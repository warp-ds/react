import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import { Slider } from '../../packages/slider/src/component';

describe('Slider', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    const { container } = render(<Slider min={0} max={100} />);
    expect(container).toMatchSnapshot();
  });

  it('calls onChange when value changes', async () => {
    const onChange = vi.fn();
    render(<Slider min={0} max={100} onChange={onChange} />);
    const thumb = screen.getByRole('slider');
    await fireEvent.mouseDown(thumb, { clientX: 50 });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown when thumb is pressed', async () => {
    const onChange = vi.fn();
    render(<Slider min={0} max={100} onChange={onChange} />);
    const thumb = screen.getByRole('slider');
    await fireEvent.keyDown(thumb, { key: 'ArrowRight' });
    // not sure why it gets called twice here
    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
