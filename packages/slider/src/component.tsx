import React, { Ref, useEffect, useMemo, useRef, useState } from "react";

import { classNames } from "@chbphone55/classnames";
import { slider as ccSlider } from "@warp-ds/css/component-classes";

import { SliderProps } from "./props.js";

const style = `
  .wrapper {
      display: grid;
      width: max-content;
  }
  .input-wrapper {
      grid-row: 1;
      grid-column: 1;
      display: grid;
  }
  input[type="range"] {
      appearance: none;
      height: 40px;
      width: 500px;
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
      border-radius: 5px;
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
      span {
        grid-row: 1;
        grid-column: 1;
        color: grey;
        width: 0px;
      }
      span:nth-child(1) {
        justify-self: start;

      }
      span:nth-child(2) {
        justify-self: end;

      }
  }
  .steps {
      display: grid;
      height: 11px;
      overflow: hidden;
      transform: translateY(-11px);
      grid-auto-flow: column;
      grid-template-columns: max-content;
      justify-items: end;
      color: #b8b8b8;
      pointer-events: none;
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
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-valuetext": ariaValueText,
  keyboardStepFactor = 0.04,
  showTooltip = false,
  markers = false,
  markerCount = 10,
}: { value?: number; values?: number[]; onChange?: any; onChangeAfter?: any } & SliderProps) {
  // Determine type.
  const type = values ? "range" : "standard";
  const isRange = type === "range";

  // Get values in array form, using either the value or values prop.
  const getValueArray = () => (values ? [...values] : [min, value as number]);

  const [currentValues, setCurrentValues] = useState<number[]>(getValueArray());
  const [isMoving, setIsMoving] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Input refs.
  const ref0 = useRef<any>(null);
  const ref1 = useRef<any>(null);

  const timeoutId = useRef<any>(0);

  // Update current values on prop change.
  useEffect(() => {
    if (!(document.activeElement === ref0.current || document.activeElement === ref1.current)) {
      const values = getValueArray();

      setCurrentValues(values);
      setStyle(trackRef, values, wrapperRef, isRange, max, min);

      updateInputValues({ values, value }, isRange, ref0, ref1);
    }
  }, [values, value]);

  // Init values.
  useEffect(() => {
    updateInputValues({ values, value }, isRange, ref0, ref1);
  }, [ref0.current, ref1.current]);

  // Call onchangeafter.
  useEffect(() => {
    if (!isMoving && onChangeAfter) {
      onChangeAfter(isRange ? currentValues : currentValues[1]);
    }
  }, [isMoving, currentValues]);

  // Set value attributes.
  useEffect(() => {
    if (ref0.current) ref0.current.setAttribute("value", currentValues[0]);
    if (ref1.current) ref1.current.setAttribute("value", currentValues[1]);
  }, [currentValues]);

  const moveSlider = (direction: "left" | "right", i: number) => {
    const multiplier = {
      left: -1,
      right: 1,
    };

    const d = max * keyboardStepFactor;

    const value = clamp(currentValues[i] + multiplier[direction] * d, min, max);

    const values = getAsValueArray(value, i, isRange, currentValues);

    updateInputValues({ values, value }, isRange, ref0, ref1);

    setNewValues(values, i);
  };

  const onKeyDown = (e: any, i: number) => {
    setIsMoving(true);
    if (e.key === "ArrowLeft") {
      moveSlider("left", i);
    }
    if (e.key === "ArrowRight") {
      moveSlider("right", i);
    }
  };

  // Handle range click.
  // Ensures the range endpoints are moved according to where in the range the user clicked.
  const onWrapperClick = (e: any) => {
    setIsMoving(true);

    // Clicking on the input thumb triggers the event for the input element.
    // Here, only handle click for clicking on the range, outside the thumb slider.
    if (!disabled && e.target.nodeName !== "INPUT") {
      const x = e.touches ? getX(e) : e.nativeEvent.offsetX;

      const width = (wrapperRef.current as HTMLDivElement).clientWidth;

      const v = (x / width) * (max - min) + min;

      const midPoint = (currentValues[0] + currentValues[1]) / 2;

      // Update values.
      const index = v > midPoint ? 1 : 0;

      const values = clampValues(getAsValueArray(v, index, isRange, currentValues), min, max);

      setNewValues(values, index);

      updateInputValues({ values, value: values[1] }, isRange, ref0, ref1);
    }
  };

  // Set slider values.
  // Runs onchange/setvalues asynchronously, with a cancelling timeout, to optimize performance.
  const setNewValues = (values: number[], i: number) => {
    // Clear any previous timeout.
    clearTimeout(timeoutId.current);

    // Stop slider values from overlapping.
    if (values[0] > values[1]) {
      if (i == 0) {
        values[0] = values[1];
      } else {
        values[1] = values[0];
      }
      updateInputValues({ values, value: values[1] }, isRange, ref0, ref1);
    }

    // Run update and onchange async.
    timeoutId.current = setTimeout(() => {
      setCurrentValues(values);

      if (onChange) {
        onChange(isRange ? values : values[1]);
      }
    }, 1);

    setStyle(trackRef, values, wrapperRef, isRange, max, min);
  };

  const onInputChange = (e: any, index: number) => {
    const values = getAsValueArray(+e.target.value, index, isRange, currentValues);

    setNewValues(values, index);
  };

  const onInputComplete = () => {
    setMovingFalse();
  };

  function setMovingFalse() {
    setIsMoving(false);
  }

  // Get input element. Index corresponds to slider thumb index (0 for first one, 1 for second one).
  const inputElement = (index: number, ref: Ref<any>) => {
    if (!disabled) {
      return (
        <input
          ref={ref}
          type="range"
          step={step}
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
  };

  const margin = useMemo(() => (max - min).toString().length * 5, [min, max]);

  return (
    <>
      <style>{style}</style>
      <div className={"ccSlider.wrapper" + " wrapper"} onContextMenu={(e) => e.preventDefault()}>
        <div className="active-track" ref={trackRef}>
          {showTooltip && (
            <>
              <span style={{ transform: `translateX(${-margin + "px"}) translateY(-39px)` }}>{currentValues[0]}</span>
              <span style={{ transform: `translateX(${-margin + "px"}) translateY(-39px)` }}>{currentValues[1]}</span>
            </>
          )}
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
          {inputElement(1, ref1)}
          {isRange && inputElement(0, ref0)}
          <div className="steps">{markers && Array.from(Array(markerCount).keys()).map((v, i) => <div key={i}>|</div>)}</div>
        </div>
      </div>
    </>
  );
}

// Aria label data for the slider.
// https://www.digitala11y.com/slider-role/.
// https://www.w3.org/WAI/ARIA/apg/practices/range-related-properties/.
function ariaData({ ariaLabel, ariaLabelledBy, ariaValueText }: Record<string, string | undefined>) {
  return {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-valuetext": ariaValueText,
  };
}

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
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
const getAsValueArray = (value: number, index = 1, isRange, currentValues) => {
  let values: number[];

  value = Math.round(value);

  if (isRange) {
    if (index === 1) {
      values = [currentValues[0], value];
    } else {
      values = [value, currentValues[1]];
    }
  } else {
    values = [0, value];
  }
  return values;
};

const getTrackStyle = (currentValues, wrapperRef, isRange, max, min) => {
  const widthFraction = (currentValues[1] - currentValues[0]) / max;

  const width = wrapperRef.current?.clientWidth || 500;

  const left = isRange ? ((currentValues[0] - min) / (max - min)) * width : 0;

  return `
    width: ${widthFraction * 100 + "%"};
    margin-left: ${left + "px"};`;
};

const setStyle = (ref, values, wrapperRef, isRange, max, min) => {
  if (ref.current) ref.current.style.cssText = getTrackStyle(values, wrapperRef, isRange, max, min);
};

const clampValues = (values: number[], min, max) => {
  return [clamp(values[0], min, max), clamp(values[1], min, max)];
};

const getX = (event: any) => {
  const e = event.target.getBoundingClientRect();
  const xCoordinate = event.touches[0].clientX - e.left;

  return Math.round(xCoordinate);
};
