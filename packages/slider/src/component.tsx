import React, { useEffect, useMemo, useRef, useState } from "react";

import { classNames } from "@chbphone55/classnames";
import { createHandlers, useDimensions } from "@warp-ds/core/slider";
import { slider as ccSlider } from "@warp-ds/css/component-classes";

import { SliderProps } from "./props.js";

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

export const Slider = ({ min = 0, max = 100, step = 1, value, disabled, onChange, onChangeAfter }: SliderProps) => {
  const rangerStyle = {
    background: `linear-gradient(90deg, var( - primary-600) 0, var( - orange-500) ${50}%`,
  };

  const [currentValue, setCurrentValue] = useState(value);
  const [lastPropValue, setLastPropValue] = useState(value);

  if (value !== lastPropValue) {
    // update the last prop value
    setLastPropValue(value);

    // set value to render correct new value.
    setCurrentValue(value);
  }
  /* const trackClasses = classNames([ccSlider.track, disabled && ccSlider.trackDisabled]);

  const activeTrackClasses = classNames([ccSlider.activeTrack, disabled ? ccSlider.activeTrackDisabled : ccSlider.activeTrackEnabled]);

  const thumbClasses = classNames([ccSlider.thumb, disabled ? ccSlider.thumbDisabled : ccSlider.thumbEnabled]); */

  const style = `
    input[type="range"] {
        appearance: none;
        width: 500px;
    }
    input[type=range]::-webkit-slider-thumb {
        appearance: none;
        width: 25px;
        height: 25px;
        background-color: blue;
        border-radius: 0%;
        cursor: pointer;
        transform: translateY(-11px);
        border-radius: 5px
    }
    input[type=range]::-webkit-slider-runnable-track {
        height: 4px;
        border: 0px solid #b2b2b2;
        border-radius: 0.5em;
        background: #efefef;
        box-shadow: none;
    }
    .active-track{
      background-color: blue;
      height: 5px;
      transform: translateY(17px);
      width: 50%;
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

  return (
    <>
      <style>{style}</style>
      <div className={ccSlider.wrapper} style={{ width: "max-content" }}>
        <div className="active-track" style={{ width: 100 * (currentValue / max) + "%" }}></div>
        <input
          type="range"
          value={currentValue}
          min={min}
          max={max}
          onChange={(e) => {
            setCurrentValue(+e.target.value);
            if (onChange) onChange(+e.target.value);
          }}
        />
      </div>
    </>
  );
};
