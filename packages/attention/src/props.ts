import { MutableRefObject } from 'react';

export type Directions = 'top' | 'right' | 'bottom' | 'left';

export type AttentionVariants = {
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
   * Render highlight
   */
  highlight?: boolean;
}

export type ArrowProps = {
  /**
   * Opposite direction of which the arrow should point
   */
  direction: Directions;

  /**
   * Forward arrow ref so Attention element can use it
   */
  ref?: React.Ref<HTMLDivElement>;
} & AttentionVariants;

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
   * Sets the aria-label attribute for the Attention component
   */
 'aria-label'?: string;
 
 /**
   * Sets the role attribute for the Attention component
   */
 role?: string;
 
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

  /**
   * id used for relationship ARIA attributes
   */
  id?: string;

  /**
   * Whether a close button is shown
   */
  canClose?: boolean;

  /**
   * Handler that is called when the close button is clicked
   */
  onDismiss?: () => void;
} & AttentionVariants;
