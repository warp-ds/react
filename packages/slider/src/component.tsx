import React, { useEffect, useMemo, useRef, useState } from 'react';

import { classNames } from '@chbphone55/classnames';
import { createHandlers, useDimensions } from '@warp-ds/core/slider';
import { slider as ccSlider } from '@warp-ds/css/component-classes';

import { SliderProps } from './props.js';

export function Slider({ min = 0, max = 100, ...rest }: SliderProps) {
  const { disabled, onChange, onChangeAfter } = rest;

  const sliderLine = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLDivElement | null>(null);

  const { mountedHook, unmountedHook } = useDimensions();
  useEffect(() => {
    if (!sliderLine.current) return;
    mountedHook(sliderLine.current, setDimensions);
    return () => unmountedHook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderLine]);

  const [value, setValue] = useState(rest.value);
  const [finalValue, setFinalValue] = useState(rest.value);
  const [position, setPosition] = useState(rest.value);
  const [dimensions, setDimensions] = useState({ left: 0, width: 0 });
  const [sliderPressed, setSliderPressed] = useState(false);

  useEffect(() => {
    if (value === rest.value) return;
    onChange?.(value);
  }, [rest.value, value, onChange]);

  useEffect(() => {
    if (sliderPressed) return;
    if (value === finalValue) return;
    setFinalValue(value);
    onChangeAfter?.(value);
  }, [onChangeAfter, sliderPressed, value, finalValue]);

  const step = useMemo(() => rest.step || 1, [rest]);

  const sliderState = {
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
  };

  const { handleKeyDown, handleFocus, handleBlur, handleMouseDown, handleClick, getThumbPosition, getThumbTransform, getShiftedChange } =
    createHandlers({ props: { min, max, ...rest }, sliderState });

  const thumbPosition = useMemo(getThumbPosition, [getThumbPosition]);
  const sliderActiveStyle = useMemo(
    () => ({
      left: 0,
      right: 100 - thumbPosition + '%',
    }),
    [thumbPosition],
  );

  const transformValue = useMemo(getThumbTransform, [getThumbTransform]);
  const thumbStyles = useMemo(
    () => ({
      transform: 'translateX(' + transformValue + 'px)',
    }),
    [transformValue],
  );

  useEffect(() => {
    // prevents shiftedChange when modelValue was set externally
    if (position === rest.value) return;
    const nextVal = rest.step ? getShiftedChange(position) : position;
    setValue(nextVal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, rest.value, rest.step]);

  useEffect(() => {
    if (sliderPressed || position === rest.value || value === rest.value) {
      return;
    }
    setPosition(rest.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderPressed, rest.value]);

  return (
    <div className={ccSlider.wrapper}>
      <div
        ref={sliderLine}
        className={classNames({
          [ccSlider.track]: true,
          [ccSlider.trackDisabled]: disabled,
        })}
        onClick={handleClick}
      />
      <div
        className={classNames({
          [ccSlider.activeTrack]: !disabled,
          [ccSlider.activeTrackDisabled]: disabled,
        })}
        style={sliderActiveStyle}
        onClick={handleClick}
      />
      <div
        role="slider"
        tabIndex={0}
        className={classNames({
          [ccSlider.thumb]: true,
          [ccSlider.thumbDisabled]: disabled,
          [ccSlider.thumbEnabled]: !disabled,
        })}
        ref={thumbRef}
        style={thumbStyles}
        aria-label={rest['aria-label']}
        aria-labelledby={rest['aria-labelledby']}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={rest['aria-valuetext']}
        onMouseDown={(e) => {
          handleMouseDown(e as unknown as KeyboardEvent);
        }}
        onTouchStart={(e) => {
          handleMouseDown(e as unknown as KeyboardEvent);
        }}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyDown={(e) => {
          handleKeyDown(e as unknown as KeyboardEvent);
        }}></div>
    </div>
  );
}
