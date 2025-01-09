import React, { Ref, useEffect, useRef, useState } from "react";

import { classNames } from "@chbphone55/classnames";
import { slider as ccSlider } from "@warp-ds/css/component-classes";

import { SliderProps } from "./props.js";

/* 
New slider component, capable of being used as either a standard slider (one value) or a range slider (using an array of two values).
Uses function overloading to provide two interfaces (for one or two values).

The slider component uses the native input type="range" feature to render the slider, as well as additional
overlay elements to render the progress bar.

In the case of two values, two input elements are rendered, allowing setting a range using two draggable points.
*/
export function Slider(v: { value: number; onChange?: (value: number) => void; onChangeAfter?: (value: number) => void } & SliderProps);
export function Slider(
  v: { values: number[]; onChange?: (values: number[]) => void; onChangeAfter?: (value: number[]) => void } & SliderProps,
);

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
}: { value?: number; values?: number[]; onChange?: any; onChangeAfter?: any } & SliderProps) {
  // Determine type.
  const type = values ? "range" : "standard";
  const isRange = type === "range";

  // Get values in array form, using either the value or values prop.
  const getValueArray = () => (values ? [...values] : [0, value as number]);

  const [currentValues, setCurrentValues] = useState<number[]>(getValueArray());
  const [moving, setMoving] = useState(false);

  // 'Track' (progress bar) overlay ref.
  const trackRef = useRef<HTMLDivElement>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const ref0 = useRef<any>(null);
  const ref1 = useRef<any>(null);
  const timeoutId = useRef<any>(0);

  // Update current values on prop change.
  useEffect(() => {
    if (!moving) {
      const values = getValueArray();

      setCurrentValues(values);

      updateInputValues({ values, value });
    }
  }, [values, value]);

  // init values.
  useEffect(() => {
    updateInputValues({ values, value });
  }, [ref0.current, ref1.current]);

  function updateInputValues({ value, values }: { value?: number; values?: number[] }) {
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

  const style = `
    input[type="range"] {
        appearance: none;
        height: 40px;
        width: 500px;
        grid-row: 1;
        grid-column: 1;
        pointer-events: none;
    }
    .input-wrapper {
      grid-row: 1;
      grid-column: 1;
      display: grid;
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
        z-index: 200;
        pointer-events: all !important;
    }
    input[type=range]:nth-child(2)::-webkit-slider-thumb {
      z-index: 100;
    }
    input[type=range]::-webkit-slider-thumb:active {
        box-shadow: var(--w-shadow-slider-handle-active);
        z-index: 1000;
    }
    input[type=range]::-webkit-slider-runnable-track {
        height: 4px;
        border: 0px solid #b2b2b2;
        border-radius: 0.5em;
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
    }
    input[type=range]::-webkit-slider-thumb:active {
        background: #2f98f9;
        z-index: 10000 !important;
    }
    input[type=range]::-webkit-progress-bar {
        height: 3px;
        border: 0px solid #b2b2b2;
        border-radius: 0.5em;
        background: #949494;
        box-shadow: none;
        pointer-events: none;
    }
    .wrapper {
      display: grid;
    }
  `;

  const clamp = (val: number) => Math.min(Math.max(val, min), max);

  function moveSlider(direction: "left" | "right", i: number) {
    const multiplier = {
      left: -1,
      right: 1,
    };

    const d = max * keyboardStepFactor;

    const value = clamp(currentValues[i] + multiplier[direction] * d);

    const values = getAsValueArray(value, i);

    updateInputValues({ values, value });

    setNewValues(values, i);
  }

  const onKeyDown = (e: any, i: number) => {
    setMoving(true);
    if (e.key === "ArrowLeft") {
      moveSlider("left", i);
    }
    if (e.key === "ArrowRight") {
      moveSlider("right", i);
    }
  };

  // Use the given value to get full value array.
  const getAsValueArray = (value: number, index = 1) => {
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

  // Set slider values.
  const setNewValues = (values: number[], i: number) => {
    // clear any previous timeout.
    clearTimeout(timeoutId.current);

    // run update and onchange async.
    timeoutId.current = setTimeout(() => {
      // Stop slider values from overlapping.
      if (!(values[0] < values[1])) {
        if (i == 0) {
          values[0] = values[1];
        } else {
          values[1] = values[0];
        }
      }

      setCurrentValues(values);

      if (onChange) {
        onChange(isRange ? values : values[1]);
      }
    }, 0);
  };

  const onInputChange = (e: any, index: number) => {
    const values = getAsValueArray(+e.target.value, index);

    setNewValues(values, index);
  };

  const onInputComplete = () => {
    if (onChangeAfter) {
      onChangeAfter(isRange ? currentValues : currentValues[1]);
    }
    setMovingFalse();
  };

  const getTrackStyle = () => {
    const widthFraction = currentValues[1] / max - currentValues[0] / max;

    const width = wrapperRef.current?.clientWidth || 500;

    const left = isRange ? width * (currentValues[0] / max) : 0;

    return {
      width: widthFraction * 100 + "%",
      marginLeft: left + "px",
    };
  };

  const clampValues = (values: number[]) => {
    return [clamp(values[0]), clamp(values[1])];
  };

  const getX = (event: any) => {
    const e = event.target.getBoundingClientRect();
    const xCoordinate = event.touches[0].clientX - e.left;

    return Math.round(xCoordinate);
  };

  // Handle range click.
  // Ensures the range endpoints are moved according to where in the range the user clicked.
  const onWrapperClick = (e: any) => {
    setMoving(true);
    // Clicking on the input thumb triggers the event for the input element.
    // Here, only handle click for clicking on the range, outside the thumb slider.
    if (!disabled && e.target.nodeName !== "INPUT") {
      const x = e.touches ? getX(e) : e.nativeEvent.offsetX;

      const width = (wrapperRef.current as HTMLDivElement).clientWidth;

      const v = (x / width) * max;

      const midPoint = (currentValues[0] + currentValues[1]) / 2;

      // Update values.
      const index = v > midPoint ? 1 : 0;

      const values = clampValues(getAsValueArray(v, index));

      setNewValues(values, index);

      updateInputValues({ values, value: values[1] });
    }
  };

  function setMovingFalse() {
    setTimeout(() => {
      setMoving(false);
    }, 0);
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
        />
      );
    } else {
      return <input type="range" disabled={true} value={currentValues[index]} min={min} max={max} />;
    }
  };

  return (
    <>
      <style>{style}</style>
      <div
        className={"ccSlider.wrapper" + " wrapper"}
        style={{ width: "max-content" }}
        {...getSliderData(currentValues[1], min, max, { ariaLabel, ariaLabelledBy, ariaValueText })}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="active-track" ref={trackRef} style={getTrackStyle()}></div>

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
        </div>
      </div>
    </>
  );
}

// Aria label data for the slider.
// https://www.digitala11y.com/slider-role/.
function getSliderData(
  value: number,
  min: number,
  max: number,
  { ariaLabel, ariaLabelledBy, ariaValueText }: Record<string, string | undefined>,
) {
  return {
    role: "slider",
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-valuetext": ariaValueText,
  };
}
