import React, { useEffect, useMemo, useRef, useState } from "react";

import { classNames } from "@chbphone55/classnames";
import { createHandlers, useDimensions } from "@warp-ds/core/slider";
import { slider as ccSlider } from "@warp-ds/css/component-classes";

import { SliderProps } from "./props.js";

/* const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "End", "Home", "PageUp", "PageDown"]  as const;
type Key = typeof keys[number]; */

/*export function Slider({ min = 0, max = 100, step = 1, value: initialValue, disabled, onChange, onChangeAfter, ...rest }: SliderProps) {
  const sliderLine = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState(initialValue);
  const [finalValue, setFinalValue] = useState(initialValue);
  const [position, setPosition] = useState(initialValue);
  const [dimensions, setDimensions] = useState({ left: 0, width: 0 });
  const [sliderPressed, setSliderPressed] = useState(false);

  const sliderState = useMemo(
    () => ({
      get position() {
        return position;
      },
      set position(v) {
        setPosition(v);
      },
      get sliderPressed() {
        return sliderPressed;
      },
      set sliderPressed(v) {
        setSliderPressed(v);
      },
      get val() {
        return value;
      },
      set val(v) {
        setValue(v);
      },
      get thumbEl() {
        return thumbRef.current;
      },
      get dimensions() {
        return dimensions;
      },
      get step() {
        return step;
      },
    }),
    [position, sliderPressed, value, dimensions, step],
  );

  const { handleKeyDown, handleFocus, handleBlur, handleMouseDown, handleClick, getThumbPosition, getThumbTransform, getShiftedChange } =
    createHandlers({ props: { min, max, step, ...rest }, sliderState });

  const { mountedHook, unmountedHook } = useDimensions();

  useEffect(() => {
    if (!sliderLine.current) return;
    mountedHook(sliderLine.current, setDimensions);
    return () => unmountedHook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderLine]);

  useEffect(() => {
    if (value !== initialValue) onChange?.(value);
  }, [value, initialValue, onChange]);

  useEffect(() => {
    if (!sliderPressed && value !== finalValue) {
      setFinalValue(value);
      onChangeAfter?.(value);
    }
  }, [onChangeAfter, sliderPressed, value, finalValue]);

  useEffect(() => {
    // prevents shiftedChange when modelValue was set externally
    if (position !== initialValue) {
      const nextVal = step ? getShiftedChange(position) : position;
      if (nextVal !== value) {
        setValue(nextVal);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, initialValue, step]);

  useEffect(() => {
    if (!sliderPressed && position !== initialValue && value !== initialValue) {
      setPosition(initialValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderPressed, initialValue]);

  const thumbPosition = useMemo(getThumbPosition, [getThumbPosition]);
  const sliderActiveStyle = useMemo(
    () => ({
      left: 0,
      right: `${100 - thumbPosition}%`,
    }),
    [thumbPosition],
  );

  const transformValue = useMemo(getThumbTransform, [getThumbTransform]);
  const thumbStyles = useMemo(
    () => ({
      transform: `translateX(${transformValue}px)`,
    }),
    [transformValue],
  );

  const trackClasses = classNames([ccSlider.track, disabled && ccSlider.trackDisabled]);

  const activeTrackClasses = classNames([ccSlider.activeTrack, disabled ? ccSlider.activeTrackDisabled : ccSlider.activeTrackEnabled]);

  const thumbClasses = classNames([ccSlider.thumb, disabled ? ccSlider.thumbDisabled : ccSlider.thumbEnabled]);

  return (
    <div className={ccSlider.wrapper}>
      <div ref={sliderLine} className={trackClasses} onClick={handleClick} />
      <div className={activeTrackClasses} style={sliderActiveStyle} onClick={handleClick} />
      <div
        role="slider"
        tabIndex={0}
        className={thumbClasses}
        ref={thumbRef}
        style={thumbStyles}
        aria-label={rest['aria-label']}
        aria-labelledby={rest['aria-labelledby']}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={rest['aria-valuetext']}
        onMouseDown={(e) => handleMouseDown(e as unknown as KeyboardEvent)}
        onTouchStart={(e) => handleMouseDown(e as unknown as KeyboardEvent)}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={(e) => handleKeyDown(e as unknown as KeyboardEvent)}
      />
    </div>
  );
}
*/

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
}: { value?: number; values?: number[]; onChange?: any; onChangeAfter?: any } & SliderProps) {
  // Determine type.
  const type = values ? "range" : "standard";
  const isRange = type === "range";

  // Get values in array form, using either the value or values prop.
  const getValueArray = () => (values ? [...values] : [0, value as number]);

  const [currentValues, setCurrentValues] = useState<number[]>(getValueArray());

  // 'Track' (progress bar) overlay ref.
  const trackRef = useRef<HTMLDivElement>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);

  // Update current values on prop change.
  useEffect(() => {
    const values = getValueArray();

    setCurrentValues(values);
  }, [values, value]);

  const style = `
    input[type="range"] {
        appearance: none;
        height: 40px;
        width: 500px;
        grid-row: 1;
        grid-column: 1;
        pointer-events: none;
    }

    .input-wrapper{
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
    input[type=range]::-webkit-slider-thumb:active{
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
    
    .active-track{
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
    .wrapper{
      display: grid;
    }
  `;

  const clamp = (val: number) => Math.min(Math.max(val, min), max);

  function move(direction: "left" | "right", i: number) {
    const multiplier = {
      left: -1,
      right: 1,
    };

    const d = max * keyboardStepFactor;

    const value = clamp(currentValues[i] + multiplier[direction] * d);

    const values = getValues(value, i);
    setNewValues(values, i);
  }

  const onKeyDown = (e: any, i: number) => {
    if (e.key === "ArrowLeft") {
      move("left", i);
    }
    if (e.key === "ArrowRight") {
      move("right", i);
    }
  };

  // Use the given value to get full value array.
  const getValues = (value: number, index = 0) => {
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
  };

  const onInputChange = (e: any, index: number) => {
    const values = getValues(+e.target.value, index);

    setNewValues(values, index);
  };

  const onInputComplete = (e: any, index: number) => {
    if (onChangeAfter) {
      const value = +e.target.value;

      onChangeAfter(isRange ? getValues(value, index) : value);
    }
  };

  const getTrackStyle = () => {
    const widthFraction = currentValues[1] / max - currentValues[0] / max;

    const width = wrapperRef.current?.clientWidth || 500;

    const left = width * (currentValues[0] / max);

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
    // Clicking on the input thumb triggers the event for the input element.
    // Here, only handle click for clicking on the range, outside the thumb slider.
    if (!disabled && e.target.nodeName !== "INPUT") {
      const x = e.touches ? getX(e) : e.nativeEvent.offsetX;

      const width = (wrapperRef.current as HTMLDivElement).clientWidth;

      const v = (x / width) * max;

      const midPoint = (currentValues[0] + currentValues[1]) / 2;

      // Update values.
      const index = v > midPoint ? 1 : 0;

      const values = clampValues(getValues(v, index));

      setNewValues(values, index);
    }
  };

  // Get input element. Index corresponds to slider thumb index (0 for first one, 1 for second one).
  const inputElement = (index: number) => {
    if (!disabled) {
      return (
        <input
          type="range"
          step={step}
          value={currentValues[index]}
          min={min}
          max={max}
          onKeyDown={(e) => onKeyDown(e, index)}
          onChange={(e) => onInputChange(e, index)}
          onKeyUp={(e) => onInputComplete(e, index)}
          onMouseUp={(e) => onInputComplete(e, index)}
          onTouchEnd={(e) => onInputComplete(e, index)}
        />
      );
    } else {
      return <input type="range" disabled={true} value={value} min={min} max={max} />;
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

        <div className="input-wrapper" onMouseDown={onWrapperClick} onTouchStart={onWrapperClick} ref={wrapperRef}>
          {inputElement(1)}
          {isRange ? inputElement(0) : undefined}
        </div>
      </div>
    </>
  );
}

// Aria label data for the slider.
// https://www.digitala11y.com/slider-role/.
function getSliderData(value: number, min: number, max: number, { ariaLabel, ariaLabelledBy, ariaValueText }: Record<string, string | undefined>) {
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
