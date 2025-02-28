import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import { classNames } from '@chbphone55/classnames';
import { slider as ccSlider } from '@warp-ds/css/component-classes';

import { SliderProps } from './props.js';
import { TextField } from '../../index.js';
import { clamp, clampValues, round } from './math.js';

const thumbWidth = 28;

const style = `
.wrapper {
  display: grid;
  width: 500px;
  max-width: 100%;
  margin: 8px 0px;
}
.input-wrapper {
  grid-row: 1;
  grid-column: 1;
  display: grid;
}
input[type='range'] {
  appearance: none;
  height: 44px;
  grid-row: 1;
  grid-column: 1;
  pointer-events: none;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 28px;
  height: 28px;
  background-color: var(--w-s-color-background-primary);
  border-radius: 0%;
  cursor: pointer;
  transform: translateY(-12.5px);
  border-radius: 14px;
  pointer-events: all !important;
}
input[type='range']:focus::-webkit-slider-thumb {
  box-shadow: var(--w-shadow-slider-handle-active);
}
input[type='range']::-webkit-slider-thumb:active {
  background: #2f98f9;
  box-shadow: var(--w-shadow-slider-handle-active);
}
input[type='range']::-webkit-slider-runnable-track {
  height: 4px;
  border: 0px solid #b2b2b2;
  background: #efefef;
  box-shadow: none;
  pointer-events: none;
  border-radius: 2px;
}
.active-track {
  background-color: var(--w-s-color-background-primary);
  height: 6px;
  border-radius: 3px;
  width: 50%;
  pointer-events: none;
  transform: translateY(19px);
  grid-row: 1;
  grid-column: 1;
  z-index: 0;
  pointer-events: none;
  display: grid;
  width: 0px;
  .tooltip {
    grid-row: 1;
    grid-column: 1;
    color: white;
    padding: 5px 12px;
    position: fixed;
    text-align: center;
    background-color: grey;
  }
  .tooltip:nth-child(1) {
    left: 0;
  }
  .tooltip:nth-child(2) {
    right: 0;
  }


  svg{
    grid-row: 1;
    grid-column: 1;
    position: fixed;
    z-index: 557;
  }
  :nth-child(3) {
    left: 0;
  }
  :nth-child(4) {
    right: 0;
  }

}
.steps {
  display: grid;
  transform: translateY(-4px);
  grid-auto-flow: column;
  grid-template-columns: max-content;
  justify-items: end;
  color: rgb(138, 138, 138);
  pointer-events: none;
  grid-column: 1;
  align-self: end;
  margin: 0px 11.5px;
  grid-auto-columns: minmax(0, 1fr);

  .marker {
    display: grid;
    justify-items: center;
    grid-row-gap: 3.5px;

    > div:nth-child(1) {
      overflow: hidden;
    }
    > div:nth-child(2) {
      width: 0;
      overflow: visible;
      display: grid;
      justify-content: center;
    }
  }
}
.marker-line {
  display: block;
  overflow: hidden;
  width: 4px;
  height: 8px;
  border-radius: 2px;
  background-color: rgb(224, 224, 224);
}
.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.inputs.dual {
  grid-gap: 2rem;
}
.markervalues {
  display: grid;
  color: rgb(138, 138, 138);
  grid-template-columns: auto auto;
  margin-bottom: 3.5px;
  > div:nth-child(1) {
    justify-self: start;
  }
  > div:nth-child(2) {
    justify-self: end;
  }
}
`;

/* 
New slider component, capable of being used as either a standard slider (one value) or a range slider (using an array of two values).
Uses function overloading to provide two interfaces (for one or two values).

The slider component uses the native input type="range" feature to render the slider, as well as additional
overlay elements to render the progress bar.

In the case of two values, two input elements are rendered, allowing setting a range using two draggable points.

For rangeValues:
The internal values represent the numerical index of each value in the array.
Where the value is displayed in the UI, the full value is looked up (in the array) and used.
Values that are passed in (as props) are converted to the array index (using a find), and used that way.
*/
// Default slider.
export function Slider(
  props: {
    max?: number;
    min?: number;
    value: number;
    onChange?: (value: number) => void;
    onChangeAfter?: (value: number) => void;
  } & SliderProps,
);
export function Slider(
  props: { rangeValues: any[]; value: any; onChange?: (value: any) => void; onChangeAfter?: (value: any) => void } & SliderProps,
);

// Range slider.
export function Slider(
  props: {
    max?: number;
    min?: number;
    values: number[];
    onChange?: (values: number[]) => void;
    onChangeAfter?: (value: number[]) => void;
  } & SliderProps,
);
export function Slider(
  props: { rangeValues: any[]; values: any[]; onChange?: (values: any[]) => void; onChangeAfter?: (value: any[]) => void } & SliderProps,
);

export function Slider({
  min = 0,
  max = 100,
  rangeValues,
  step = 1,
  value,
  values,
  disabled,
  onChange,
  onChangeAfter,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-valuetext': ariaValueText,
  keyboardStepFactor = 0.04,
  showTooltip = false,
  markers = false,
  showInputs = false,
  markAlignment = 'center',
}: {
  max?: number;
  min?: number;
  rangeValues?: any[];
  value?: number | any;
  values?: number[] | any[];
  onChange?: any;
  onChangeAfter?: any;
} & SliderProps) {
  // Determine type.
  const type = values ? 'range' : 'standard';
  const isRange = type === 'range';

  const stepValue = step;

  if (rangeValues) {
    min = 0;
    max = rangeValues.length - 1;
  }

  // For a given range value (that appears in the rangevalue array), get the index.
  const getRangeValueIndex = (value) => {
    if (rangeValues) {
      return rangeValues?.findIndex((v) => v === value);
    } else {
      return 0;
    }
  };

  // Get initial values. Like getValueArray, but converts range values to index values as well.
  const getInitialValues = () => {
    let initialValues: any;
    if (rangeValues) {
      if (isRange && values) {
        initialValues = [getRangeValueIndex(values[0]), getRangeValueIndex(values[1])];
      } else {
        initialValues = [min, getRangeValueIndex(value)];
      }
    } else {
      initialValues = isRange && values ? getAdjustedValueArray(values, stepValue) : [min, getAdjustedValue(value as number, stepValue)];
    }
    return initialValues;
  };

  // Get values in array form, using either the value or values prop.
  const getValueArray = () => (values ? getAdjustedValueArray(values, stepValue) : [min, getAdjustedValue(value as number, stepValue)]);

  // Current slider values.
  // In the rangeValues case, this represents the index (or indices) of the current values.
  const [currentValues, setCurrentValues] = useState<number[]>(() => getInitialValues());
  const [textInputValues, setTextInputValues] = useState<number[]>(() => getValueArray());

  const [isMoving, setIsMoving] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Input refs.
  const input0 = useRef<HTMLElement>(null);
  const input1 = useRef<HTMLElement>(null);

  // Text field refs.
  const textField0 = useRef<any>(null);
  const textField1 = useRef<any>(null);

  const timeoutId = useRef<any>(0);

  const renderToolTip = true; //showTooltip && isMoving;

  // Get value offset due to thumb width.
  const getValueOffset = useCallback(
    (values: number[]) => {
      const wrapperWidth = wrapperRef.current?.clientWidth || 500;

      const widthFraction = (values[1] - values[0]) / (max - min);

      // Width in pxs.
      const width = widthFraction * wrapperWidth;

      if (width < thumbWidth) {
        const valPerPx = (max - min) / wrapperWidth;

        return valPerPx * thumbWidth;
      } else {
        return 0;
      }
    },
    [wrapperRef.current],
  );

  // Update current values on prop change.
  useEffect(() => {
    // Validation.
    validate(value, values, min, max);

    // Update values if the slider isn't currently selected.
    if (!(document.activeElement === input0.current || document.activeElement === input1.current)) {
      // If range values, lookup value index.
      if (rangeValues) {
        if (isRange && values) {
          values = [getRangeValueIndex(values[0]), getRangeValueIndex(values[1])];
        } else {
          value = getRangeValueIndex(value);
        }
      }

      const valueArray = getValueArray();

      setCurrentValues(valueArray);

      if (values) {
        setTextInputValues(values);
      } else if (value) {
        setTextInputValues([0, value]);
      }

      setStyle(trackRef, valueArray, wrapperRef, isRange, max, min);

      updateInputValues({ values, value }, isRange, input0, input1);
    }
  }, [values, value]);

  // Init values.
  useEffect(() => {
    let val = value;
    let vals = values;
    if (rangeValues) {
      if (isRange && values) {
        vals = [getRangeValueIndex(values[0]), getRangeValueIndex(values[1])];
      } else {
        val = getRangeValueIndex(value);
      }
    }
    updateInputValues({ values: vals, value: val }, isRange, input0, input1);
  }, [input0.current, input1.current]);

  // Call onchangeafter.
  useEffect(() => {
    if (!isMoving && onChangeAfter) {
      onChangeAfter(isRange ? currentValues : currentValues[1]);
    }
  }, [isMoving, currentValues]);

  // Set value attributes.
  useEffect(() => {
    if (input0.current) input0.current.setAttribute('value', currentValues[0].toString());
    if (input1.current) input1.current.setAttribute('value', currentValues[1].toString());
  }, [currentValues]);

  const moveSlider = useCallback(
    (direction: 'left' | 'right', i: number) => {
      const multiplier = {
        left: -1,
        right: 1,
      };

      const d = max * keyboardStepFactor;

      const value = currentValues[i] + multiplier[direction] * d;

      const values = getAsValueArray(value, i, isRange, currentValues, min, max, stepValue, true);

      updateInputValues({ values, value }, isRange, input0, input1);

      setNewValues(values, i);
    },
    [currentValues],
  );

  const onKeyDown = useCallback(
    (e: any, i: number) => {
      if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
      }

      if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
        setIsMoving(true);
        if (e.key === 'ArrowLeft') {
          moveSlider('left', i);
        }
        if (e.key === 'ArrowRight') {
          moveSlider('right', i);
        }
      }
    },
    [moveSlider],
  );

  // Handle range click.
  // Ensures the range endpoints are moved according to where in the range the user clicked.
  const onWrapperClick = useCallback(
    (e: any) => {
      setIsMoving(true);

      // Clicking on the input thumb triggers the event for the input element.
      // Here, only handle click for clicking on the range, outside the thumb slider.
      if (!disabled && e.target.nodeName !== 'INPUT') {
        const x = e.touches ? getX(e) : e.nativeEvent.offsetX;

        const width = (wrapperRef.current as HTMLDivElement).clientWidth;

        const v = getAdjustedValue((x / width) * (max - min) + min, stepValue);

        const midPoint = (currentValues[0] + currentValues[1]) / 2;

        // Update values.
        const index = v > getAdjustedValue(midPoint, stepValue) ? 1 : 0;

        const values = getAsValueArray(v, index, isRange, currentValues, min, max, stepValue);

        setNewValues(values, index);

        updateInputValues({ values, value: values[1] }, isRange, input0, input1);
      }
    },
    [values, value, currentValues],
  );

  // Set slider values.
  // Runs onchange/setvalues asynchronously, with a cancelling timeout, to optimize performance.
  // Use 'preserveTextInputs' to keep text field input values unchanged.
  const setNewValues = useCallback((values: number[], i: number, updateTextInputs = true) => {
    // Clear any previous timeout.
    clearTimeout(timeoutId.current);

    // Stop slider values from overlapping.
    if (isRange) {
      const offset = getValueOffset(values);

      if (offset > 0) {
        if (i == 0) {
          values[0] = getAdjustedValue(values[1] - offset, step);
        } else {
          values[1] = getAdjustedValue(values[0] + offset, step);
        }
      }

      updateInputValues({ values, value: values[1] }, isRange, input0, input1);
    }

    // Run update and onchange async.
    timeoutId.current = setTimeout(() => {
      values = clampValues(values, min, max);

      setCurrentValues(values);

      // Update text input fields.
      if (showInputs && updateTextInputs) {
        setTextInputValues(values);
      }

      if (onChange) {
        let returnValue: any;

        if (!rangeValues) {
          returnValue = isRange ? [round(values[0]), round(values[1])] : Math.round(values[1]);
        } else {
          returnValue = isRange ? [rangeValues[values[0]], rangeValues[values[1]]] : rangeValues[values[1]];
        }

        onChange(returnValue);
      }
    }, 1);

    setStyle(trackRef, values, wrapperRef, isRange, max, min);
  }, []);

  const onInputChange = useCallback(
    (e: any, index: number) => {
      const values = getAsValueArray(+e.target.value, index, isRange, currentValues, min, max, stepValue);

      setNewValues(values, index);
    },
    [currentValues],
  );

  const onInputComplete = () => setIsMoving(false);

  // Get input element. Index corresponds to the slider thumb index (0 for the 1st one, 1 for the 2nd one).
  const inputElement = useCallback(
    (index: number, ref: RefObject<any>) => {
      if (!disabled) {
        return (
          <input
            ref={ref}
            type="range"
            step={stepValue}
            min={min}
            max={max}
            onKeyDown={(e) => onKeyDown(e, index)}
            onKeyUp={() => setIsMoving(false)}
            onChange={(e) => onInputChange(e, index)}
            {...ariaData({ ariaLabel, ariaLabelledBy, ariaValueText })}
          />
        );
      } else {
        return <input type="range" disabled={true} value={currentValues[index]} min={min} max={max} />;
      }
    },
    [currentValues],
  );

  // On change for a text input field (text box) under the slider.
  // Handles multiple scenarios to allow users to edit values (that may be outside the range) and keep editing until values are valid.
  // This involves keeping separate state between the input fields and the slider (adding quite a bit of complexity).
  // It does however lead to quite usable UX (so maybe worth it..!).
  const onTextInputChange = useCallback((e: any, i: number, currentValues: number[], textInputValues: number[]) => {
    // Get current input values.
    const value = +e.target.value;
    const currentInputValues = i == 0 ? [value, textInputValues[1]] : [textInputValues[0], value];

    // Update the values.
    setTextInputValues(currentInputValues);

    // Update slider input values.
    // Only update the value if the value is in the slider range.
    const offset = getValueOffset(currentInputValues);

    // Update first slider.
    if (i == 0) {
      const sliderValues = [value, currentValues[1]];

      if (value >= min && value <= currentValues[1] - offset) {
        setNewValues(sliderValues, i, false);
      }
    }
    // Update second slider.
    else if (i == 1) {
      const sliderValues = [currentValues[0], value];

      const inSpecifiedRange = isRange ? value <= max && value >= currentValues[0] + offset : value <= max;

      if (inSpecifiedRange) {
        setNewValues(sliderValues, i, false);
      }
    }
  }, []);

  const getMarkerDiv = () => {
    if (markAlignment === 'center') {
      return <div className="steps">{getMarkers()}</div>;
    } else {
      return (
        <div className="steps2">
          <div className="steps">{getMarkerLines()}</div>
          <div className="markervalues">{getMarkerValues()}</div>
        </div>
      );
    }
  };

  // Markers + values used for justified values.
  const getMarkerLines = () => Array.from(Array(2).keys()).map(() => <div className="marker-line"></div>);

  const getMarkerValues = () =>
    Array.from(Array(2).keys()).map((k) => {
      let displayValue: string | number = '';

      displayValue = (max - min) * k + min;

      return <div>{displayValue}</div>;
    });

  // Get slider markers (steps), showing step values below the slider.
  // Used for center-aligned display values.
  const getMarkers = useCallback(
    () =>
      Array.from(Array(2).keys()).map((k) => {
        let displayValue: string | number = '';

        displayValue = (max - min) * k + min;

        return (
          <div key={k} className="marker">
            <div className="marker-line"></div>
            <div>{displayValue}</div>
          </div>
        );
      }),
    [],
  );

  // Get tooltip offsets.
  const [offset1, offset2] = renderToolTip ? getToolTipOffsets(getValueArray(), max, min) : [0, 0];

  // Get the state of the input fields, to display an error state if a value is outside the range.
  const inputValidState = showInputs
    ? getInputValidState(textInputValues, min, max, [textField0, textField1], getValueOffset)
    : [true, true];

  const getFullValue = (index: number) => {
    // Default case: use numerical value
    if (!rangeValues) {
      return currentValues[index];
    }
    // Range values: lookup value.
    else {
      const i = currentValues[index];

      return rangeValues[i];
    }
  };

  // Render the range input, text fields and tool tips.
  // For a range slider, render two sets of elements: one for the lower and one for the upper value.
  // For a standard (non-range) slider, only render the second (top) value elements.
  return (
    <>
      <style>{style}</style>
      <div className={'ccSlider.wrapper' + ' wrapper'} onContextMenu={(e) => e.preventDefault()}>
        <div className="active-track" ref={trackRef}>
          <ToolTip
            display={renderToolTip && isRange}
            top={document.activeElement === input0.current}
            transform={`translateY(-54px) translateX(calc(-50% + ${offset1}px))`}
          >
            {getFullValue(0)}
          </ToolTip>
          <ToolTip
            display={renderToolTip}
            top={document.activeElement === input1.current}
            transform={`translateY(-54px) translateX(calc(50% + ${offset2}px))`}
          >
            {getFullValue(1)}
          </ToolTip>
          <ToolTipArrow
            transform={`translateY(-22.5px) translateX(calc(-50% + ${offset1}px))`}
            display={isRange && renderToolTip}
            top={document.activeElement === input0.current}
          />

          <ToolTipArrow
            transform={`translateY(-22.5px) translateX(calc(50% + ${offset2}px))`}
            display={renderToolTip}
            top={document.activeElement === input0.current}
          />
        </div>
        <div
          className="input-wrapper"
          ref={wrapperRef}
          onMouseDown={onWrapperClick}
          onTouchStart={onWrapperClick}
          onKeyUp={onInputComplete}
          onMouseUp={onInputComplete}
          onTouchEnd={onInputComplete}
          onMouseOut={onInputComplete}
        >
          {isRange && inputElement(0, input0)}
          {inputElement(1, input1)}
          {markers && getMarkerDiv()}
        </div>
        {showInputs && (
          <div className={`inputs ${isRange ? 'dual' : ''}`}>
            {isRange && (
              <TextField
                value={textInputValues[0].toString()}
                ref={textField0}
                invalid={!inputValidState[0]}
                onChange={(e) => onTextInputChange(e, 0, currentValues, textInputValues)}
              />
            )}
            <TextField
              value={textInputValues[1].toString()}
              ref={textField1}
              invalid={!inputValidState[1]}
              onChange={(e) => onTextInputChange(e, 1, currentValues, textInputValues)}
            />
          </div>
        )}
      </div>
    </>
  );
}

// Get tooltip offsets, needed to center the tooltip over the thumb (which doesn't follow the active track exactly; see default input type="range" behavior.)
const getToolTipOffsets = (values: number[], max: number, min: number) => {
  const tooltipOffset1 = -((values[0] - min) / (max - min) - 0.5) * thumbWidth;
  const tooltipOffset2 = -((values[1] - min) / (max - min) - 0.5) * thumbWidth;

  return [tooltipOffset1, tooltipOffset2];
};

// Aria label data for the slider.
// https://www.digitala11y.com/slider-role/.
// https://www.w3.org/WAI/ARIA/apg/practices/range-related-properties/.
function ariaData({ ariaLabel, ariaLabelledBy, ariaValueText }: Record<string, string | undefined>) {
  return {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-valuetext': ariaValueText,
  };
}

// Validate the inputs.
function validate(value: number | undefined, values: number[] | undefined, min: number, max: number) {
  if ((value && value < min) || (values && values[0] < min)) {
    console.warn('Value too low.');
  }
  if ((value && value > max) || (values && values[1] > max)) {
    console.warn('Value too high.');
  }
}

// Set the value for the input elements.
function updateInputValues({ value, values }: { value?: number; values?: number[] }, isRange: boolean, ref0: any, ref1: any) {
  if (isRange) {
    if (ref0.current) {
      ref0.current.value = (values as number[])[0];
    }
    if (ref1.current) {
      ref1.current.value = (values as number[])[1];
    }
  } else {
    if (ref1.current) {
      ref1.current.value = value;
    }
  }
}

// Use the given value to get full value array.
// Returns the value as an adjusted value (rounded, etc.).
const getAsValueArray = (
  value: number,
  index = 1,
  isRange: boolean,
  currentValues: number[],
  min: number,
  max: number,
  stepValue: number | string,
  clamp = false,
) => {
  let values: number[];

  value = Math.round(value);

  if (isRange) {
    if (index === 1) {
      values = [currentValues[0], value];
    } else {
      values = [value, currentValues[1]];
    }
  } else {
    values = [min, value];
  }

  if (clamp) {
    return clampValues(getAdjustedValueArray(values, stepValue), min, max);
  } else {
    return getAdjustedValueArray(values, stepValue);
  }
};

const getTrackStyle = (currentValues, wrapperRef, isRange, max, min) => {
  let widthFraction = (currentValues[1] - currentValues[0]) / (max - min);

  const width = wrapperRef.current?.clientWidth || 500;

  // Warn if values are incorrect.
  if (widthFraction < 0 || widthFraction > 1) {
    console.warn('Values outside of range.');
    widthFraction = clamp(widthFraction, 0, 1);
  }

  const left = isRange ? ((currentValues[0] - min) / (max - min)) * width : 0;

  return `
    width: ${widthFraction * 100 + '%'};
    margin-left: ${left + 'px'};`;
};

const setStyle = (trackRef, values, wrapperRef, isRange, max, min) => {
  if (trackRef.current) trackRef.current.style.cssText = getTrackStyle(values, wrapperRef, isRange, max, min);
};

const ToolTipArrow = ({ transform, display, top }) => {
  return (
    <svg
      style={{ transform, visibility: display ? 'visible' : 'hidden', zIndex: top ? 10 : 1 }}
      width="24"
      height="8"
      viewBox="0 0 24 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5858 6.58579L6.34315 2.34315C4.84285 0.842855 2.80802 0 0.686291 0H23.3137C21.192 0 19.1571 0.842852 17.6569 2.34314L13.4142 6.58579C12.6332 7.36684 11.3668 7.36684 10.5858 6.58579Z"
        fill="#1B1B1F"
      />
    </svg>
  );
};

// Get the x coordinate for the event target (using getBoundingClientRect).
const getX = (event: any) => {
  const e = event.target.getBoundingClientRect();
  const xCoordinate = event.touches[0].clientX - e.left;

  return round(xCoordinate);
};

// Get value adjusted with step amount.
const getAdjustedValue = (value: number, step: number | string) => {
  if (!(typeof step === 'string') && step > 1) {
    return round(value / step) * step;
  } else {
    return round(value);
  }
};

// Adjust array values.
const getAdjustedValueArray = (values: number[], step: number | string) => {
  return [getAdjustedValue(values[0], step), getAdjustedValue(values[1], step)];
};

// Toolip component that shows a given value above the slider thumb.
const ToolTip = ({ transform, display, top, children }) => {
  return (
    <div className="tooltip" style={{ transform, visibility: display ? 'visible' : 'hidden', zIndex: top ? 10 : 1 }}>
      {children}
    </div>
  );
};

// Get the state (error or OK) for the text input fields.
function getInputValidState(
  [val0, val1]: number[],
  min: number,
  max: number,
  [textField0, textField1]: RefObject<HTMLElement>[],
  getValueOffset: any,
) {
  let state0 = true;
  let state1 = true;

  if (val0 < min || val0 > max) {
    state0 = false;
  }

  if (val1 > max || val1 < min) {
    state1 = false;
  }

  if (document.activeElement === textField0.current) {
    const offset = getValueOffset([val0, val1]);

    if (val0 + offset > val1) {
      state0 = false;
    }
  }

  if (document.activeElement === textField1.current) {
    const offset = getValueOffset([val0, val1]);

    if (val1 < val0 + offset) {
      state1 = false;
    }
  }

  return [state0, state1];
}
