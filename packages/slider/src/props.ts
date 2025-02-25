export type SliderProps = {
  /** Specifies the value granularity */
  step?: number;

  /** The current value */
  //value: number;

  /** Whether the slider is disabled */
  disabled?: boolean;

  /** Handler that is called when the value of the slider changes */
  //onChange?: (value: number) => void;

  /** Handler that is called after moving the slider has ended. Will only be
   * called if the action resulted in a change. */
  //onChangeAfter?: (value: number) => void;

  /** String value that labels the slider */
  'aria-label'?: string;

  /** Identifies the element that labels the slider */
  'aria-labelledby'?: string;

  /**  Human readable text alternative for the value */
  'aria-valuetext'?: string;

  keyboardStepFactor?: number;

  markers?: boolean;

  showTooltip?: boolean;

  showInputs?: boolean;
};
