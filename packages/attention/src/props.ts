import { MutableRefObject } from 'react';
import { Directions } from '@warp-ds/core/attention'

export type VirtualElement = {getBoundingClientRect: () => ClientRect | DOMRect, contextElement?: Element};

export type ReferenceElement = Element | VirtualElement

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
  placement?: Directions;

  /**
   * Container the Attention component is rendered relatively to
   */
  targetEl?: MutableRefObject<ReferenceElement | null>;

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

  /**
   * The distance from which to offset the attentionEl from the targetEl vertically
   */
distance?: number;
 /**
   * The distance from which to offset the attentionEl along its targetEl horizontally
   */
 skidding?: number;
   /**
   * Whether Attention element should flip its placement in order to keep it in view
   */
flip?: boolean;
  /**
   * Whether Attention element should ignore cross axis overflow when flip is enabled
   */
  crossAxis?: boolean;
/**
  * Choose which preferred placements the Attention element should flip to
  */
fallbackPlacements?: Directions[];

} & AttentionVariants;
