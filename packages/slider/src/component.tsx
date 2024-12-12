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

export const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  disabled,
  onChange,
  onChangeAfter,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-valuetext": ariaValueText,
  keyboardStepFactor = 0.04,
}: SliderProps) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [lastPropValue, setLastPropValue] = useState(value);

  // Update values. This is used so that if a new value is passed in (for example, to reset the slider),
  // the component updates correctly.
  if (value !== lastPropValue) {
    // update the last prop value
    setLastPropValue(value);

    // set value to render correct new value.
    setCurrentValue(value);
  }

  const style = `
    input[type="range"] {
        appearance: none;
        height:20px;
        width: 500px;
    }
    input[type=range]::-webkit-slider-thumb {
        appearance: none;
        width: 24px;
        height: 24px;
        background-color: var(--w-s-color-background-primary);
        border-radius: 0%;
        cursor: pointer;
        transform: translateY(-11px);
        border-radius: 5px
    }
    input[type=range]::-webkit-slider-thumb:active{
        box-shadow: var(--w-shadow-slider-handle-active)
    }
    input[type=range]::-webkit-slider-runnable-track {
        height: 4px;
        border: 0px solid #b2b2b2;
        border-radius: 0.5em;
        background: #efefef;
        box-shadow: none;
    }
    .active-track{
      background-color: var(--w-s-color-background-primary);
      height: 5px;
      transform: translateY(12.5px);
      width: 50%;
      pointer-events: none;
    }
    input[type=range]::-webkit-slider-thumb:active {
        background: #2f98f9;
    }
    input[type=range]::-webkit-progress-bar {
        height: 3px;
        border: 0px solid #b2b2b2;
        border-radius: 0.5em;
        background: #949494;
        box-shadow: none;
    }
  `;

  // Get value adjusted with step amount.
  const getAdjustedValue = (value) => {
    if (step > 1) {
      return Math.round(value / step) * step;
    } else {
      return value;
    }
  };

  const clamp = (val) => Math.min(Math.max(val, min), max);

  function move(direction: "left" | "right") {
    const multiplier = {
      left: -1,
      right: 1,
    };

    const d = max * keyboardStepFactor;

    const value = clamp(currentValue + multiplier[direction] * d);

    setCurrentValue(value);

    if (onChange) onChange(value);
  }

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      move("left");
    }
    if (e.key === "ArrowRight") {
      move("right");
    }
  };

  const onInputChange = (e) => {
    const value = getAdjustedValue(+e.target.value);

    setCurrentValue(value);

    if (onChange) onChange(value);
  };

  const onInputComplete = (e) => {
    if (onChangeAfter) {
      const value = getAdjustedValue(+e.target.value);

      onChangeAfter(value);
    }
  };

  return (
    <>
      <style>{style}</style>
      <div
        className={ccSlider.wrapper}
        style={{ width: "max-content" }}
        {...getSliderData(currentValue, min, max, { ariaLabel, ariaLabelledBy, ariaValueText })}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      >
        <div className="active-track" style={{ width: 100 * (currentValue / max) + "%" }}></div>
        <input
          type="range"
          value={currentValue}
          min={min}
          max={max}
          onKeyDown={onKeyDown}
          onChange={onInputChange}
          onKeyUp={onInputComplete}
          onMouseUp={onInputComplete}
        />
      </div>
    </>
  );
};

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
