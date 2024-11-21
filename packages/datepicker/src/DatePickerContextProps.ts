import { RefObject } from 'react';

import type { Locale } from 'date-fns';

import { Phrases } from './utils/defaultPhrases.js';

export type Dispatch = React.Dispatch<Event>;

export type DatePickerState = 'IDLE' | 'INTERACTING_START_DATE' | 'INTERACTING_END_DATE';

export type BookedDate = {
  bookingId: number;
  startDate: string;
  endDate: string;
};

export interface DatePickerContextProps {
  datepickerId: string;
  locale: Locale;
  dispatch: Dispatch;
  isDayDisabled: (day: Date) => boolean;
  bookedDates?: BookedDate[];
  startInputRef: RefObject<unknown>;
  endInputRef: RefObject<unknown>;
  popoverRef: RefObject<unknown>;
  navigationDayRef: RefObject<HTMLTableCellElement>;
  phrases: Phrases;
  startDate: Date | null;
  /** If we're picking date ranges or a single date */
  isDateRange: boolean;
  endDate: Date | null;
  displayFormat: string;
  monthFormat: string;
  weekDayFormat: string;
  dayAriaLabelFormat: string;
  state: DatePickerState;
  onClear: () => void;
  onChange: (date: Date, event: React.MouseEvent | React.KeyboardEvent | React.ChangeEvent) => void;
}

export type Event =
  // An input receives focus
  | { type: 'FOCUS'; input: RefObject<any> }
  // User can hit escape or blur to close the popover
  | { type: 'BLUR' }
  | { type: 'ESCAPE' }
  // The user can select the date either with the keyboard press or a mouse click
  | {
      type: 'SELECT_WITH_KEYBOARD';
      day: Date;
    }
  | {
      type: 'SELECT_WITH_CLICK';
      day: Date;
    }
  // The user is using the keyboard to navigate from the input to the datepicker
  | { type: 'NAVIGATE_FROM_INPUT'; input: RefObject<any> };
