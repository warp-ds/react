import React, { useCallback } from 'react';

import { Button } from '../../button/src/index.js';
import { TextField } from '../../textfield/src/index.js';
import { DateRangePicker, DatePicker, DatePickerInput, DatePickerPopover, DatePickerCalendar } from '../src/index.js';

const metadata = { title: 'Forms/DatePicker' };
export default metadata;

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

export const DateRange = () => <DateRangeExample />;
export const SingleDate = () => <DatePickerExample />;
