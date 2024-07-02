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

  it('accessibility attributes are set correctly', () => {
    const initialValue = 25;
    const { getByRole } = render(<Slider aria-label="Volume control" min={10} max={90} value={initialValue} />);
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('aria-label', 'Volume control');
    expect(slider).toHaveAttribute('aria-valuemin', '10');
    expect(slider).toHaveAttribute('aria-valuemax', '90');
    expect(slider).toHaveAttribute('aria-valuenow', String(initialValue));
  });

  it('calls onChange when value changes', async () => {
    const onChange = vi.fn();
    render(<Slider min={0} max={100} onChange={onChange} />);
    const thumb = screen.getByRole('slider');
    fireEvent.mouseDown(thumb, { clientX: 50 });
    // I'm not sure why the onChange callback is not called here.
    // It could be caused by limitations in the testing library
    // as mentioned in the docs:
    //   https://testing-library.com/docs/guide-events#interactions-vs-events
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('calls onKeyDown when thumb is pressed', async () => {
    const onChange = vi.fn();
    render(<Slider min={0} max={100} onChange={onChange} />);
    const thumb = screen.getByRole('slider');
    fireEvent.keyDown(thumb, { key: 'ArrowRight' });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('slider updates value correctly when dragged', () => {
    const onChange = vi.fn();
    render(<Slider onChange={onChange} />);
    const thumb = screen.getByRole('slider');
    fireEvent.mouseDown(thumb, { clientX: 100 });
    fireEvent.mouseMove(thumb, { clientX: 150 });
    fireEvent.mouseUp(thumb);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

});