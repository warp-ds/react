import React from 'react';
import { render, screen } from '@testing-library/react';
import { Alert } from '../../packages/alert/src/component';

describe('Alert', () => {
  test('renders Alert component', () => {
    render(
      <Alert show={true} type="success">
        Test Alert
      </Alert>,
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent('Test Alert');
  });

  test('renders Alert component with correct icon when type is negative', () => {
    render(
      <Alert show={true} type="negative">
        Test Alert
      </Alert>,
    );
    expect(screen.getByTitle('Octagon with exclamation point')).toBeInTheDocument();
  });

  test('renders Alert component with correct icon when type is positive', () => {
    render(
      <Alert show={true} type="positive">
        Test Alert
      </Alert>,
    );
    expect(screen.getByTitle('Circle with checkmark')).toBeInTheDocument();
  });

  test('renders Alert component with correct icon when type is warning', () => {
    render(
      <Alert show={true} type="warning">
        Test Alert
      </Alert>,
    );
    expect(screen.getByTitle('Warning triangle with exclamation point')).toBeInTheDocument();
  });

  test('renders Alert component with correct icon when type is info', () => {
    render(
      <Alert show={true} type="info">
        Test Alert
      </Alert>,
    );
    expect(screen.getByTitle('Information circle')).toBeInTheDocument();
  });

  test('does not render Alert component when show is false', () => {
    render(
      <Alert show={false} type="success">
        Test Alert
      </Alert>,
    );
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
