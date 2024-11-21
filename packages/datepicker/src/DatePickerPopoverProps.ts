export type DatePickerPopoverProps = {
  /**
   * A string representing an HTML element or a React component that will tell the DatePickerPopover what element to render.
   * @default div
   */
  as?: keyof JSX.IntrinsicElements | React.ComponentType;
  className?: string;
  children: React.ReactNode;

  /**
   * Which input field the popover should attach to.
   *
   * Only used for DateRangePicker.
   */
  attachTo?: 'startDate' | 'endDate' | 'focusedDate';
};
