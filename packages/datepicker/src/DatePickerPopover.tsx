import React, { useContext } from 'react';

import { classNames } from '@chbphone55/classnames';
import { Popover } from '@reach/popover';
import { forwardRefWithAs, useForkedRef, wrapEvent } from '@reach/utils';

import { DatePickerContext, IDLE, INTERACTING_END_DATE, INTERACTING_START_DATE } from './DatePickerContext.js';
import { DatePickerPopoverProps } from './DatePickerPopoverProps.js';
import { useBlur } from './utils/useBlur.js';

const START_DATE = 'startDate';
const END_DATE = 'endDate';
const FOCUSED_DATE = 'focusedDate';

/**
 * DatePickerPopover
 *
 * Contains the popup that renders the calendar. Because some UI needs to render
 * more than the calendar in the popup, you need to render one of these around the
 * calendar. For example, you may want show some information about availability.
 *
 */
export const DatePickerPopover = forwardRefWithAs<DatePickerPopoverProps, 'div'>(
  ({ attachTo = 'startDate', className, onBlur, onKeyDown, ...props }, forwardedRef) => {
    const {
      datepickerId,
      startInputRef,
      endInputRef,
      popoverRef,
      dispatch,
      isDateRange: isDateRangePicker,
      state: datepickerState,
    } = useContext(DatePickerContext);

    const ref = useForkedRef(popoverRef, forwardedRef);

    const handleBlur = useBlur();

    // Don't render the popover at all if we aren't active
    if (datepickerState === IDLE) return null;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        dispatch({ type: 'ESCAPE' });
      }
    };

    const targetRef = getTargetRef({
      startInputRef,
      endInputRef,
      datepickerState,
      isDateRangePicker,
      attachTo,
    });

    return (
      <Popover
        {...props}
        className={classNames(className, 'rounded-8 shadow-s outline-none mt-6 s-text-inverted border s-border s-bg')}
        id={datepickerId}
        onBlur={wrapEvent(onBlur, handleBlur)}
        onKeyDown={wrapEvent(onKeyDown, handleKeyDown as any)}
        tabIndex={-1}
        targetRef={targetRef}
        ref={ref}
      />
    );
  },
);

function getTargetRef({ startInputRef, endInputRef, datepickerState, isDateRangePicker, attachTo }) {
  // Bail out if this is a single date picker
  if (!isDateRangePicker) {
    return startInputRef;
  }

  if (attachTo === START_DATE || (attachTo === FOCUSED_DATE && datepickerState === INTERACTING_START_DATE)) {
    return startInputRef;
  } else if (attachTo === END_DATE || (attachTo === FOCUSED_DATE && datepickerState === INTERACTING_END_DATE)) {
    return endInputRef;
  }

  return startInputRef;
}
