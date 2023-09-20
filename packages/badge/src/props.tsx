import React from 'react';
export interface BadgeProps {
  /**
   * Expand element children
   */
  children: JSX.Element | JSX.Element[] | string;

  /**
   * Additional classes to include
   */
  className?: string;

  /**
   * CSS styles to inline on the component
   */
  style?: React.CSSProperties;

  /**
   * Allows customization of the underlying HTML element
   * @default div
   */
  as?: string;

  /**
   * Type of badge
   @default neutral
   */
  variant?: 'neutral' | 'info' | 'positive' | 'warning' |'negative' | 'disabled' | 'notification' | 'price';

  /**
   * Position of badge
   */
  position?: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
}
