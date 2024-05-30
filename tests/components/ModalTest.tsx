import React from 'react';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import { Modal } from '../../packages/modal/src/component';

describe('Modal', () => {
  it('renders correctly', () => {
    render(
      <Modal title="Test Modal" open={true}>
        Modal content
      </Modal>,
    );
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
  });

  it('calls onDismiss when pressing Escape key', () => {
    const onDismiss = vi.fn();
    render(
      <Modal title="Test Modal" open={true} onDismiss={onDismiss}>
        Modal content
      </Modal>,
    );
    const modal = screen.getByRole('dialog');
    fireEvent.keyDown(modal, { key: 'Escape' });
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('focuses on the close button when initialFocusRef is not provided', () => {
    render(
      <Modal title="Test Modal" open={true} right={true}>
        Modal content
      </Modal>,
    );
    const closeButton = screen.getByRole('button', { name: 'Close' });
    expect(document.activeElement).toBe(closeButton);
  });

  it('renders the left button correctly', () => {
    const onLeftClick = vi.fn();
    render(
      <Modal title="Test Modal" open={true} left={true} onLeftClick={onLeftClick}>
        Modal content
      </Modal>,
    );
    const leftButton = screen.getByRole('button', { name: 'Back' });
    fireEvent.click(leftButton);
    expect(onLeftClick).toHaveBeenCalledTimes(1);
  });

  it('renders the right button correctly', () => {
    const onDismiss = vi.fn();
    render(
      <Modal title="Test Modal" open={true} right={true} onDismiss={onDismiss}>
        Modal content
      </Modal>,
    );
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('renders the footer correctly', () => {
    const footer = 'Footer content';
    render(
      <Modal title="Test Modal" open={true} footer={footer}>
        Modal content
      </Modal>,
    );
    expect(screen.getByText(footer)).toBeInTheDocument();
  });
});
