import { MutableRefObject } from 'react';

export type Directions = 'top' | 'right' | 'bottom' | 'left';

export type ArrowProps = {
  /**
   * Opposite direction of which the arrow should point
   */
  direction: Directions;

  /**
   * Render tooltip
   */
  tooltip?: boolean;

  /**
   * Render callout
   */
  callout?: boolean;

  /**
   * Render popover
   */
  popover?: boolean;

  /**
   * Forward arrow ref so Attention element can use it
   */
  ref?: React.Ref<HTMLDivElement>;
};

export type AttentionProps = {
  /**
   * Render Attention element without arrow
   */
  noArrow?: Boolean;

  /**
   * Whether Attention element is shown
   * Used for tooltip
   */
  isShowing?: boolean;

  /**
   * Elements inside of the Attention component
   */
  children?: JSX.Element[] | JSX.Element;
  
 /**
   * Sets the aria-describedby attribute for the Attention component to associate it with the target element
   */
 ariaDescribedby?: string;
 
  /**
   * Placement according to the target element
   * Arrow would be on the opposite side of this position
   */
  placement: Directions;

  /**
   * Container the Attention component is rendered relatively to
   */
  targetEl?: MutableRefObject<unknown>;

  /**
   * Extend the Attention component container styling
   */
  className?: string;
} & Omit<ArrowProps, 'direction'>;
