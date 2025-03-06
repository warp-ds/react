export type SliderProps = {
  /** Specifies the value granularity */
  step?: number;

  /** Whether the slider is disabled */
  disabled?: boolean;

  /** String value that labels the slider */
  'aria-label'?: string;

  /** Identifies the element that labels the slider */
  'aria-labelledby'?: string;

  /**  Human readable text alternative for the value */
  'aria-valuetext'?: string;

  keyboardStepFactor?: number;

  markers?: boolean;

  showTooltip?: boolean;

  markAlignment?: 'center' | 'justified';
};
