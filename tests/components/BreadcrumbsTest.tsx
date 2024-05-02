import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Breadcrumbs } from '../../packages/breadcrumbs/src/component';

describe('Breadcrumbs', () => {
  it('renders without crashing', () => {
    render(
      <Breadcrumbs>
        <a href="#/url/1">Page 1</a>
        <a href="#/url/2">Page 2</a>
      </Breadcrumbs>,
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <Breadcrumbs>
        <a href="#/url/1">Page 1</a>
        <a href="#/url/2">Page 2</a>
      </Breadcrumbs>,
    );
    expect(screen.getByText('Page 1')).toBeInTheDocument();
    expect(screen.getByText('Page 2')).toBeInTheDocument();
  });

  it('applies custom class name', () => {
    render(
      <Breadcrumbs className="custom-class">
        <a href="#/url/1">Page 1</a>
        <a href="#/url/2">Page 2</a>
      </Breadcrumbs>,
    );
    expect(screen.getByRole('navigation')).toHaveClass('custom-class');
  });

  it('flattens children correctly', () => {
    render(
      <Breadcrumbs>
        <a href="/home">Home</a>
        <div>
          <a href="/about">About</a>
        </div>
      </Breadcrumbs>,
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('applies aria-label correctly', () => {
    render(
      <Breadcrumbs aria-label="Custom label">
        <a href="#/url/1">Page 1</a>
        <a href="#/url/2">Page 2</a>
      </Breadcrumbs>,
    );
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Custom label');
  });

  it('applies default aria-label correctly', () => {
    render(
      <Breadcrumbs>
        <a href="#/url/1">Page 1</a>
        <a href="#/url/2">Page 2</a>
      </Breadcrumbs>,
    );
    expect(screen.getByText('You are here')).toBeInTheDocument();
  });
});
