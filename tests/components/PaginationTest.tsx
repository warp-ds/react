import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { Pagination } from '../../packages/pagination/src/index.js';

const onChangeFunction = vi.fn();

describe('Pagination component', () => {
  beforeEach(() => {
    render(<Pagination currentPage={0} numPages={3} lastPage={3} createHref={(page) => `?page=${page}`} onChange={onChangeFunction} />);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders', () => {
    expect(screen.getByText('Pages')).toBeInTheDocument();
  });

  it('renders an H1', () => {
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Pages');
  });

  it('renders correct number of links', () => {
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });

  it('calls on change function on click of next page', () => {
    expect(screen.getByRole('link', { name: 'Next page, Rightward arrow icon' })).toHaveTextContent('Rightward arrow');
    fireEvent.click(screen.getByRole('link', { name: 'Next page, Rightward arrow icon' }));
  
    expect(onChangeFunction).toHaveBeenCalledTimes(1);
    expect(onChangeFunction).toHaveBeenCalledWith(1);
  });
});

it('calls on change function on click of previous page', () => {
  render(<Pagination currentPage={13} numPages={13} lastPage={13} createHref={(page) => `?page=${page}`} onChange={onChangeFunction} />);

  expect(screen.getByRole('link', { name: 'Previous page, Leftward arrow icon' })).toHaveTextContent('Leftward arrow');
  fireEvent.click(screen.getByRole('link', { name: 'Previous page, Leftward arrow icon' }));

  expect(onChangeFunction).toHaveBeenCalledTimes(1);
  expect(onChangeFunction).toHaveBeenCalledWith(12);
});

it('should throw error if currentPage is not a number', () => {
  // @ts-ignore
  expect(() =>
    render(<Pagination currentPage={undefined} lastPage={2} createHref={(page) => `?page=${page}`} onChange={onChangeFunction} />),
  ).toThrowError('Invalid currentPage: undefined');
});

it('should throw error if lastPage is not a number', () => {
  // @ts-ignore
  expect(() =>
    render(<Pagination currentPage={1} lastPage={undefined} createHref={(page) => `?page=${page}`} onChange={onChangeFunction} />),
  ).toThrowError('Invalid lastPage: undefined');
});

it('should throw error if createHref is not a function', () => {
  // @ts-ignore
  expect(() => render(<Pagination currentPage={1} lastPage={2} createHref={undefined} onChange={onChangeFunction} />)).toThrowError(
    'createHref is undefined',
  );
});
