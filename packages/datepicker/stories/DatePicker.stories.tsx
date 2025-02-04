import React, { useCallback } from 'react';

import { Button } from '../../button/src/index.js';
import { TextField } from '../../textfield/src/index.js';
import { DateRangePicker, DatePicker, DatePickerInput, DatePickerPopover, DatePickerCalendar } from '../src/index.js';

const metadata = { title: 'Forms/DatePicker' };
export default metadata;

const bookedDates = [
  {
    bookingId: 800259546,
    startDate: '2024-12-11T00:00',
    endDate: '2024-12-16T00:00',
  },
  {
    bookingId: 800259547,
    startDate: '2024-12-16T00:00',
    endDate: '2024-12-23T00:00',
  },
  {
    bookingId: 800259548,
    startDate: '2024-02-17T00:00',
    endDate: '2024-02-20T00:00',
  },
  {
    bookingId: 800259549,
    startDate: '2024-03-05T00:00',
    endDate: '2024-03-15T00:00',
  },
  {
    bookingId: 265520,
    ownerFinnUserId: 0,
    renterFinnUserId: null,
    rentalId: 82215458,
    startDate: '2025-03-05T15:00',
    endDate: '2025-03-07T00:00',
    name: 'old??',
    phoneNumber: '',
    email: '',
    bookingNotes: 'test',
  },
  {
    bookingId: 265518,
    ownerFinnUserId: 0,
    renterFinnUserId: null,
    rentalId: 82215458,
    startDate: '2025-03-09T00:00',
    endDate: '2025-03-13T00:00',
    name: 'WOOOP',
    phoneNumber: '1234',
    email: '',
    bookingNotes: 'test',
  },
];

function DateRangeExample() {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();

  const onChange = useCallback(({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  }, []);

  return (
    <DateRangePicker startDate={startDate} endDate={endDate} onChange={onChange}>
      <div className="flex w-full space-x-8">
        <DatePickerInput dateField="startDate" as={TextField} label="From" />
        <DatePickerInput dateField="endDate" as={TextField} label="To" />
      </div>
      <DatePickerPopover>
        <DatePickerCalendar />
      </DatePickerPopover>
    </DateRangePicker>
  );
}

function DatePickerExample() {
  const [date, setDate] = React.useState<Date | null>(null);

  return (
    <DatePicker date={date} onChange={setDate}>
      <DatePickerInput as={TextField} label="Date" />
      <DatePickerPopover>
        <DatePickerCalendar />
        <Button className="p-4 m-16 mt-0 px-8 rounded" onClick={() => setDate(null)} disabled={date == null}>
          Clear
        </Button>
      </DatePickerPopover>
    </DatePicker>
  );
}

function DisabledDaysExample() {
  const [date, setDate] = React.useState<Date | null>(null);

  // Probably don't define this inside your component's render function.

  // Disable weekends
  const isDayDisabled = (day: Date) => {
    // check if the day is on a weekend
    // Sunday is 0, Saturday is 6
    return day.getDay() === 0 || day.getDay() === 6;
  };

  return (
    <DatePicker date={date} isDayDisabled={isDayDisabled} onChange={setDate}>
      <DatePickerInput as={TextField} label="Date" />
      <DatePickerPopover>
        <DatePickerCalendar />
      </DatePickerPopover>
    </DatePicker>
  );
}

function BookedDaysExample() {
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();

  const onChange = useCallback(({ startDate, endDate }) => {
    //   console.log('onChange called back', startDate);
    //   console.log('onChange called back', endDate);
    setStartDate(startDate);
    setEndDate(endDate);
  }, []);

  return (
    <div className="mt-16">
      <DateRangePicker bookedDates={bookedDates} startDate={startDate} endDate={endDate} onChange={onChange}>
        <div className="flex w-full space-x-8">
          <DatePickerInput dateField="startDate" as={TextField} label="From" />
          <DatePickerInput dateField="endDate" as={TextField} label="To" />
        </div>
        <DatePickerPopover>
          <DatePickerCalendar numberOfMonths={1} />
        </DatePickerPopover>
      </DateRangePicker>
    </div>
  );
}

export const DateRange = () => <DateRangeExample />;
export const SingleDate = () => <DatePickerExample />;
export const DisabledDays = () => <DisabledDaysExample />;
export const BookedDays = () => <BookedDaysExample />;
