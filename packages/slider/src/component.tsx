import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';

import { classNames } from '@chbphone55/classnames';
import { slider as ccSlider } from '@warp-ds/css/component-classes';

import { SliderProps } from './props.js';
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
  background: var(--w-s-color-background-primary-active);
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

.tooltips {
  width: 100%;
  pointer-events: none;
  grid-row: 1;
  grid-column: 1;
  pointer-events: none;
  display: grid;
  height: 0;

  .tooltip {
    grid-row: 1;
    grid-column: 1;
    color: white;
    padding: 5px 12px;
    position: fixed;
    text-align: center;
    background-color: #1B1B1F;
    transform: translateY(-39px);
    z-index: 20;
    justify-self: end;
    border-radius: 4px;
  }

  svg{
    grid-row: 1;
    grid-column: 1;
    position: fixed;
    z-index: 20;
  }
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
}

.steps {
  display: grid;
  transform: translateY(-4px);
  grid-auto-flow: column;
  grid-template-columns: max-content;
  justify-items: end;
  color: var(--w-s-color-text-subtle);
  pointer-events: none;
  grid-column: 1;
  align-self: end;
  margin: 0px 11.7px;
  grid-auto-columns: minmax(0, 1fr);

  .marker {
    display: grid;
    justify-items: center;
    grid-row-gap: 3.5px;
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

.marker-value {
  width: 0;
  overflow: visible;
  display: grid;
  justify-content: center;
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
  color: var(--w-s-color-text-subtle);
  grid-template-columns: auto auto;
  height: 25.5px;
  > div:nth-child(1) {
    justify-self: start;
  }
  > div:nth-child(2) {
    justify-self: end;
  }
}
.width-check{
  visibility: hidden;
  pointer-events: none;
  z-index: 0;
  width: max-content;
  height: 0px;
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
  markAlignment = 'center',
  containTooltips = false,
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

  if (rangeValues) {
    min = 0;
    max = rangeValues.length - 1;
  }

  // For a given range value (that appears in the rangevalue array), get the index.
  const getRangeValueIndex = useCallback((value) => {
    if (rangeValues) {
      return rangeValues?.findIndex((v) => v === value);
    } else {
      return 0;
    }
  }, []);

  // Get initial values. Like getValueArray, but converts range values to index values as well.
  const getInitialValues = useCallback(() => {
    let initialValues: any;
    if (rangeValues) {
      if (isRange && values) {
        initialValues = [getRangeValueIndex(values[0]), getRangeValueIndex(values[1])];
      } else {
        initialValues = [min, getRangeValueIndex(value)];
      }
    } else {
      initialValues = isRange && values ? getAdjustedValueArray(values, step) : [min, getAdjustedValue(value as number, step)];
    }
    return initialValues;
  }, []);

  // Get values in array form, using either the value or values prop.
  const getValueArray = () => (values ? getAdjustedValueArray(values, step) : [min, getAdjustedValue(value as number, step)]);

  // Current slider values.
  // In the rangeValues case, this represents the index (or indices) of the current values.
  const [currentValues, setCurrentValues] = useState<number[]>(() => getInitialValues());
  const [isMoving, setIsMoving] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Input refs.
  const input0 = useRef<HTMLElement>(null);
  const input1 = useRef<HTMLElement>(null);

  // Tooltip refs.
  const tooltip0 = useRef<HTMLElement>(null);
  const tooltip1 = useRef<HTMLElement>(null);
  const tooltipArrow0 = useRef<HTMLElement>(null);
  const tooltipArrow1 = useRef<HTMLElement>(null);

  const widthRef = useRef<any>(null);

  const timeoutId = useRef<any>(0);

  // Active state of the input elements.
  const [input0Active, setInput0Active] = useState(false);
  const [input1Active, setInput1Active] = useState(false);

  const renderToolTip0 = showTooltip && (isMoving || input0Active) && !input1Active;
  const renderToolTip1 = showTooltip && (isMoving || input1Active) && !input0Active;

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

  // Set active input element state (by checking focus state using the focusin/focusout events).
  useEffect(() => {
    const focusChange = () => {
      setInput0Active(document.activeElement === input0.current);

      setInput1Active(document.activeElement === input1.current);
    };

    document.addEventListener('focusin', focusChange);
    document.addEventListener('focusout', focusChange);

    return () => {
      document.removeEventListener('focusin', focusChange);
      document.removeEventListener('focusout', focusChange);
    };
  }, []);

  // Update current values on prop change.
  useEffect(() => {
    // Validation.
    validate(value, values, min, max);

    // Update values if the slider isn't currently selected.
    if (!(input0Active || input1Active)) {
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

      setStyle(trackRef, valueArray, wrapperRef, isRange, max, min);
      setStyleTooltips(valueArray, wrapperRef, isRange, max, min);

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

      const values = getAsValueArray(value, i, isRange, currentValues, min, max, step, true);

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
      // Here, only handle click for clicking on the range, outside the thumb.
      if (!disabled && e.target.nodeName !== 'INPUT') {
        const x = e.touches ? getX(e) : e.nativeEvent.offsetX;

        const width = (wrapperRef.current as HTMLDivElement).clientWidth;

        const v = getAdjustedValue((x / width) * (max - min) + min, step);

        const midPoint = (currentValues[0] + currentValues[1]) / 2;

        // Update values.
        const index = v > getAdjustedValue(midPoint, step) ? 1 : 0;

        const values = getAsValueArray(v, index, isRange, currentValues, min, max, step);

        setNewValues(values, index);

        updateInputValues({ values, value: values[1] }, isRange, input0, input1);
      }
    },
    [values, value, currentValues],
  );

  // Set slider values.
  // Runs onchange/setvalues asynchronously, with a cancelling timeout, to optimize performance.
  const setNewValues = useCallback((values: number[], i: number) => {
    // Clear any previous timeout.
    clearTimeout(timeoutId.current);

    // Stop slider values from overlapping.
    if (isRange) {
      let offset = getValueOffset(values);

      if (offset > 0) {
        // Use offset 1 for range values.
        if (rangeValues && offset < 1) {
          offset = 1;
        }

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

      if (onChange) {
        let returnValue: any;

        if (!rangeValues) {
          returnValue = isRange ? [round(values[0]), round(values[1])] : Math.round(values[1]);
        } else {
          returnValue = isRange ? [rangeValues[values[0]], rangeValues[values[1]]] : rangeValues[values[1]];
        }

        onChange(returnValue);
        setStyleTooltips(values, wrapperRef, isRange, max, min, i);
      }
    }, 1);

    setStyle(trackRef, values, wrapperRef, isRange, max, min);
  }, []);

  const onInputChange = useCallback(
    (e: any, index: number) => {
      const values = getAsValueArray(+e.target.value, index, isRange, currentValues, min, max, step);

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
            step={step}
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

  // Get div containing vertical lines (markers) and marker values.
  // Displays values either centered below the line, or justified to fit in the component.
  const getMarkerDiv = useCallback(() => {
    const getMarkerLines = () => Array.from(Array(2).keys()).map(() => <div className="marker-line"></div>);

    const getMarkerValues = () =>
      Array.from(Array(2).keys()).map((k) => {
        let displayValue: string | number = '';

        displayValue = (max - min) * k + min;

        return <div>{rangeValues ? rangeValues[displayValue] : displayValue}</div>;
      });

    if (markAlignment === 'center') {
      return <div className="steps">{getMarkers()}</div>;
    } else {
      return (
        <div>
          <div className="steps">{getMarkerLines()}</div>
          <div className="markervalues">{getMarkerValues()}</div>
        </div>
      );
    }
  }, []);

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
            <div className="marker-value">{rangeValues ? rangeValues[displayValue] : displayValue}</div>
          </div>
        );
      }),
    [],
  );

  const getFullValue = useCallback(
    (index: number) => {
      // Default case: use numerical value
      if (!rangeValues) {
        return currentValues[index];
      }
      // Range values: lookup value.
      else {
        const i = currentValues[index];

        return rangeValues[i];
      }
    },
    [currentValues],
  );

  const setStyle = useCallback((trackRef, values, wrapperRef, isRange, max, min) => {
    if (trackRef.current) trackRef.current.style.cssText = getTrackStyle(values, wrapperRef, isRange, max, min);
  }, []);

  const setStyleTooltips = useCallback((values, wrapperRef, isRange, max, min, i = -1) => {
    const t0 = tooltip0.current;
    const t1 = tooltip1.current;
    const a0 = tooltipArrow0.current;
    const a1 = tooltipArrow1.current;

    // initial.
    if (i == -1) {
      if (t0 && t1 && a0 && a1) {
        for (let n of [0, 1]) {
          const [l0, l1, la0, la1] = getTooltipCSS(values, wrapperRef, isRange, max, min, n, widthRef, containTooltips);

          Object.assign(t0.style, l0);
          Object.assign(t1.style, l1);
          Object.assign(a0.style, la0);
          Object.assign(a1.style, la1);
        }
      }
    } else {
      if (t0 && t1 && a0 && a1) {
        const [l0, l1, la0, la1] = getTooltipCSS(values, wrapperRef, isRange, max, min, i, widthRef, containTooltips);

        Object.assign(t0.style, l0);
        Object.assign(t1.style, l1);
        Object.assign(a0.style, la0);
        Object.assign(a1.style, la1);
      }
    }
  }, []);

  // Render the range input and tool tips.
  // For a range slider, render two sets of elements: one for the lower and one for the upper value.
  // For a standard (non-range) slider, only render the second (top) value elements.
  return (
    <>
      <style>{style}</style>
      <div className={'ccSlider.wrapper' + ' wrapper'} onContextMenu={(e) => e.preventDefault()}>
        <div className="tooltips">
          <ToolTip display={renderToolTip0 && isRange} top={input0Active} ref={tooltip0}>
            {getFullValue(0)}
          </ToolTip>
          <ToolTip display={renderToolTip1} top={input1Active} ref={tooltip1}>
            {getFullValue(1)}
          </ToolTip>
          <ToolTipArrow display={isRange && renderToolTip0 && isRange} top={input0Active} ref={tooltipArrow0} />

          <ToolTipArrow display={renderToolTip1} top={input0Active} ref={tooltipArrow1} />
        </div>
        <div className="active-track" ref={trackRef}></div>
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
      </div>
      <div className="width-check" ref={widthRef}></div>
    </>
  );
}

const getTooltipCSS = (currentValues, wrapperRef, isRange, max, min, i, widthref, containTooltips) => {
  const width = wrapperRef.current?.clientWidth || 500;

  const left0 = ((currentValues[0] - min) / (max - min)) * width;
  const left1 = ((currentValues[1] - min) / (max - min)) * width;
  const [offset0, offset1] = getToolTipOffsets(currentValues, max, min);

  let l0 = left0 + offset0 + 0.37 * thumbWidth;
  let l1 = left1 + offset1 + 0.37 * thumbWidth;

  let r0: boolean = false;
  let r1: boolean = false;

  const lt0 = l0;
  const lt1 = l1;

  let tx0 = 'translateX(-50%)';
  let tx1 = 'translateX(-50%)';

  const ttx0 = tx0;
  const ttx1 = tx1;

  if(containTooltips){
    const w = getEstimatedWidth(currentValues[i], widthref);

    let hw = w * 0.5;
  
    const th = thumbWidth * 0.5;
  
    if (isRange) {
      if (l0 + hw + th > 510) {
        r0 = true;
        tx0 = '';
      }
  
      if (l0 - hw - th < 10) {
        l0 = 10;
        tx0 = '';
      }
    }
  
    if (l1 + hw + th > 510) {
      tx1 = '';
      r1 = true;
    }
  
    if (l1 - hw - th < 10) {
      l1 = 10;
      tx1 = '';
    }
  
    return [
      {
        left: r0 ? '' : l0 + 'px',
        transform: `translateY(-39px) ${tx0}`,
      },
      {
        left: r1 ? '' : l1 + 'px',
        transform: `translateY(-39px) ${tx1}`,
      },
      {
        left: lt0 + 'px',
        transform: `translateY(-7.2px) ${ttx0}`,
      },
      {
        left: lt1 + 'px',
        transform: `translateY(-7.2px) ${ttx1}`,
      },
    ];
  } else {
    return [
      {
        left: l0 + 'px',
        transform: `translateY(-39px) ${tx0}`,
      },
      {
        left: l1 + 'px',
        transform: `translateY(-39px) ${tx1}`,
      },
      {
        left: lt0 + 'px',
        transform: `translateY(-7.2px) ${ttx0}`,
      },
      {
        left: lt1 + 'px',
        transform: `translateY(-7.2px) ${ttx1}`,
      },
    ];
  }
  
};

const getEstimatedWidth = (val: any, widthRef: RefObject<HTMLElement>): any => {
  const r = widthRef.current;

  if (r) {
    r.innerText = val;

    return r.clientWidth;
  }
};

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

// Set the values for the input elements.
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
  step: number,
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
    return clampValues(getAdjustedValueArray(values, step), min, max);
  } else {
    return getAdjustedValueArray(values, step);
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

const ToolTipArrow = ({ display, top, ref }) => {
  return (
    <svg
      style={{ visibility: display ? 'visible' : 'hidden', zIndex: top ? 10 : 1 }}
      width="24"
      height="8"
      viewBox="0 0 24 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
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
const getAdjustedValue = (value: number, step: number) => {
  if (!(typeof step === 'string') && step > 1) {
    return round(value / step) * step;
  } else {
    return round(value);
  }
};

// Adjust array values.
const getAdjustedValueArray = (values: number[], step: number) => {
  return [getAdjustedValue(values[0], step), getAdjustedValue(values[1], step)];
};

// Toolip component that shows a given value above the slider thumb.
const ToolTip = ({ display, top, children, ref }) => {
  return (
    <div className="tooltip" style={{ visibility: display ? 'visible' : 'hidden', zIndex: top ? 10 : 1 }} ref={ref}>
      {children}
    </div>
  );
};
