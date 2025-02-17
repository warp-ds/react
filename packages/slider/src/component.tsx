import React, { Ref, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { classNames } from '@chbphone55/classnames';
import { slider as ccSlider } from '@warp-ds/css/component-classes';

import { SliderProps } from './props.js';
import { TextField } from '../../index.js';

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
  input[type="range"] {
      appearance: none;
      height: 40px;
      grid-row: 1;
      grid-column: 1;
      pointer-events: none;
  }
  input[type="range"]:focus {
      outline: none;
  }
  input[type=range]::-webkit-slider-thumb {
      appearance: none;
      width: 24px;
      height: 24px;
      background-color: var(--w-s-color-background-primary);
      border-radius: 0%;
      cursor: pointer;
      transform: translateY(-10px);
      border-radius: 12px;
      pointer-events: all !important;
  }
  input[type="range"]:focus::-webkit-slider-thumb {
      box-shadow: var(--w-shadow-slider-handle-active);
  }
  input[type=range]::-webkit-slider-thumb:active {
      background: #2f98f9;
      box-shadow: var(--w-shadow-slider-handle-active);
  }
  input[type=range]::-webkit-slider-runnable-track {
      height: 4px;
      border: 0px solid #b2b2b2;
      background: #efefef;
      box-shadow: none;
      pointer-events: none;
  }
  .active-track {
      background-color: var(--w-s-color-background-primary);
      height: 5px;
      width: 50%;
      pointer-events: none;
      transform: translateY(17px);
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
  }
  .steps {
      display: grid;
      transform: translateY(-6px);
      grid-auto-flow: column;
      grid-template-columns: max-content;
      justify-items: end;
      color:rgb(173, 173, 173);
      pointer-events: none;
      grid-column: 1;
      align-self: end;
      margin: 0px -2px;
      grid-auto-columns: minmax(0, 1fr);

      .marker {
          display: grid;
          justify-items: center;
          grid-row-gap: 3.5px;

          > div:nth-child(1) {
              height: 11px;
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
  .inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
  }
  .inputs.dual {
      grid-gap: 2rem;
  }
`;

/* 
New slider component, capable of being used as either a standard slider (one value) or a range slider (using an array of two values).
Uses function overloading to provide two interfaces (for one or two values).

The slider component uses the native input type="range" feature to render the slider, as well as additional
overlay elements to render the progress bar.

In the case of two values, two input elements are rendered, allowing setting a range using two draggable points.
*/
export function Slider(v: { value: number; onChange?: (value: number) => void; onChangeAfter?: (value: number) => void } & SliderProps);
export function Slider(v: { values: number[]; onChange?: (values: number[]) => void; onChangeAfter?: (value: number[]) => void } & SliderProps);

export function Slider({
  min = 0,
  max = 100,
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
  markerCount = 10,
  showInputs = false,
}: { value?: number; values?: number[]; onChange?: any; onChangeAfter?: any } & SliderProps) {
  // Determine type.
  const type = values ? 'range' : 'standard';
  const isRange = type === 'range';

  const stepValue = useMemo(() => getStepValue(step, markers, markerCount, max, min), []);

  // Get values in array form, using either the value or values prop.
  const getValueArray = () => (values ? getAdjustedValueArray(values, stepValue) : [min, getAdjustedValue(value as number, stepValue)]);

  // Get value offset due to thumb width.
  const getValueOffset = useCallback((values: number[]) => {
    let widthFraction = getAdjustedValue(values[1] - values[0], stepValue) / (max - min);

    const wrapperWidth = wrapperRef.current?.clientWidth || 500;

    // width in pxs
    const width = widthFraction * wrapperWidth;

    if (width < 24) {
      const valPerPx = (max - min) / wrapperWidth;

      return valPerPx * 24;
    } else {
      return 0;
    }
  }, []);

  const [currentValues, setCurrentValues] = useState<number[]>(() => getValueArray());
  const [textInputValues, setTextInputValues] = useState<number[]>(() => getValueArray());

  const [isMoving, setIsMoving] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Input refs.
  const input0 = useRef<any>(null);
  const input1 = useRef<any>(null);

  // Text field refs.
  const textField0 = useRef<any>(null);
  const textField1 = useRef<any>(null);

  const timeoutId = useRef<any>(0);

  const renderToolTip = showTooltip && isMoving;

  // Update current values on prop change.
  useEffect(() => {
    // Validation.
    validate(value, values, min, max);

    // Update values if the slider isn't currently selected.
    if (!(document.activeElement === input0.current || document.activeElement === input1.current)) {
      const valueArray = getValueArray();

      setCurrentValues(valueArray);

      if (values) {
        setTextInputValues(values);
      } else if (value) {
        setTextInputValues([0, value]);
      }

      setStyle(trackRef, valueArray, wrapperRef, isRange, max, min, stepValue);

      updateInputValues({ values, value }, isRange, input0, input1);
    }
  }, [values, value]);

  // Init values.
  useEffect(() => {
    updateInputValues({ values, value }, isRange, input0, input1);
  }, [input0.current, input1.current]);

  // Call onchangeafter.
  useEffect(() => {
    if (!isMoving && onChangeAfter) {
      onChangeAfter(isRange ? currentValues : currentValues[1]);
    }
  }, [isMoving, currentValues]);

  // Set value attributes.
  useEffect(() => {
    if (input0.current) input0.current.setAttribute('value', currentValues[0]);
    if (input1.current) input1.current.setAttribute('value', currentValues[1]);
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
          values[0] = values[1] - offset;
        } else {
          values[1] = values[0] + offset;
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
        onChange(isRange ? [Math.round(values[0]), Math.round(values[1])] : Math.round(values[1]));
      }
    }, 1);

    setStyle(trackRef, values, wrapperRef, isRange, max, min, stepValue);
  }, []);

  const onInputChange = useCallback(
    (e: any, index: number) => {
      const values = getAsValueArray(+e.target.value, index, isRange, currentValues, min, max, stepValue);

      setNewValues(values, index);
    },
    [currentValues],
  );

  const onInputComplete = () => {
    setMovingFalse();
  };

  const setMovingFalse = () => {
    setIsMoving(false);
  };

  // Get input element. Index corresponds to slider thumb index (0 for first one, 1 for second one).
  const inputElement = useCallback(
    (index: number, ref: Ref<any>) => {
      if (!disabled) {
        return (
          <input
            ref={ref}
            type="range"
            step={stepValue}
            min={min}
            max={max}
            onKeyDown={(e) => onKeyDown(e, index)}
            onKeyUp={setMovingFalse}
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
  const onTextInputChange = (e: any, i: number) => {
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
  };

  const markerNrs = useMemo(() => {
    if (markerCount === 'auto' && typeof stepValue == 'number') {
      return (max - min) / stepValue + 1;
    }
    return markerCount as number;
  }, []);

  const getMarkers = useCallback(
    () =>
      Array.from(Array(markerNrs).keys()).map((k) => {
        let displayValue: string | number = '';

        if (markerNrs < 15) {
          displayValue = ((max - min) / (markerNrs - 1)) * k + min;

          // Display in scientific notation.
          if (max > 100) {
            const len = max.toString().length - 1;

            const val = round(displayValue / 10 ** len, 1);
            displayValue = val > 0 ? val + 'e' + len : 0;
          }
        }

        return (
          <div key={k} className="marker">
            <div>|</div>
            <div>{displayValue}</div>
          </div>
        );
      }),
    [],
  );

  // Get tooltip offsets.
  const [offset1, offset2] = renderToolTip ? getToolTipOffsets(getValueArray(), max, min) : [0, 0];

  // Get the state of the input fields, to display an error state if a value is outside the range.
  const inputValidState = showInputs ? getInputValidState(textInputValues, min, max, [textField0, textField1], getValueOffset) : [true, true];

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
            transform={`translateY(-50px) translateX(calc(-50% + ${offset1}px))`}
          >
            {currentValues[0]}
          </ToolTip>
          <ToolTip display={renderToolTip} top={document.activeElement === input1.current} transform={`translateY(-50px) translateX(calc(50% + ${offset2}px))`}>
            {currentValues[1]}
          </ToolTip>
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
          <div className="steps">{markers && getMarkers()}</div>
        </div>
        {showInputs && (
          <div className={`inputs ${isRange ? 'dual' : ''}`}>
            {isRange && (
              <TextField value={textInputValues[0].toString()} ref={textField0} invalid={!inputValidState[0]} onChange={(e) => onTextInputChange(e, 0)} />
            )}
            <TextField value={textInputValues[1].toString()} ref={textField1} invalid={!inputValidState[1]} onChange={(e) => onTextInputChange(e, 1)} />
          </div>
        )}
      </div>
    </>
  );
}

// Get tooltip offsets, needed to center the tooltip over the thumb (which doesn't follow the active track exactly; see default input type="range" behavior.)
const getToolTipOffsets = (values: number[], max: number, min: number) => {
  const tooltipOffset1 = -((values[0] - min) / (max - min) - 0.5) * 24;
  const tooltipOffset2 = -((values[1] - min) / (max - min) - 0.5) * 24;

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

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

function validate(value, values, min, max) {
  if ((value && value < min) || (values && values[0] < min)) {
    console.warn('Value too low.');
  }
  if ((value && value > max) || (values && values[1] > max)) {
    console.warn('Value too high.');
  }
}

// Set the value for the input elements.
function updateInputValues({ value, values }: { value?: number; values?: number[] }, isRange, ref0, ref1) {
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
const getAsValueArray = (value: number, index = 1, isRange, currentValues, min, max, stepValue, clamp = false) => {
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

const getTrackStyle = (currentValues, wrapperRef, isRange, max, min, stepValue) => {
  let widthFraction = getAdjustedValue(currentValues[1] - currentValues[0], stepValue) / (max - min);

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

const setStyle = (trackRef, values, wrapperRef, isRange, max, min, stepValue) => {
  if (trackRef.current) trackRef.current.style.cssText = getTrackStyle(values, wrapperRef, isRange, max, min, stepValue);
};

const clampValues = (values: number[], min, max) => {
  return [clamp(values[0], min, max), clamp(values[1], min, max)];
};

// Get the x coordinate for the event target (using getBoundingClientRect).
const getX = (event: any) => {
  const e = event.target.getBoundingClientRect();
  const xCoordinate = event.touches[0].clientX - e.left;

  return Math.round(xCoordinate);
};

// Get value adjusted with step amount.
const getAdjustedValue = (value: number, step: number) => {
  if (step > 1) {
    return Math.round(value / step) * step;
  } else {
    return value;
  }
};

const getAdjustedValueArray = (values: number[], step: number) => {
  return [getAdjustedValue(values[0], step), getAdjustedValue(values[1], step)];
};

// Get step value, including an automatic value if step == 'auto'.
const getStepValue = (step, markers, markerCount, max, min) => {
  let stepValue = step;

  if (markers) {
    const count = markerCount as number;
    // Set auto step value.
    stepValue = typeof step === 'number' ? step : Math.round((max - min) / (count - 1));
  }

  return stepValue;
};

// Toolip component that shows a given value above the slider thumb.
const ToolTip = (props) => {
  return (
    <div className="tooltip" style={{ transform: props.transform, visibility: props.display ? 'visible' : 'hidden', zIndex: props.top ? 10 : 1 }}>
      {Math.round(props.children)}
    </div>
  );
};

// Get the state (error or OK) for the text input fields.
function getInputValidState([val0, val1]: number[], min, max, [textField0, textField1], getValueOffset) {
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

function round(value, precision) {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
