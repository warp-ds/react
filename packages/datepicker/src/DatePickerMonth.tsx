import React, { useContext, useMemo } from 'react';
import './styles/w-datepicker-month.css';
import {
  differenceInCalendarDays,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfWeek,
  format,
  getWeekOfMonth,
  isSameMonth,
  lastDayOfMonth,
  Locale,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

import { DatePickerContext } from './DatePickerContext.js';
import { DatePickerDay } from './DatePickerDay.js';
import { DatePickerMonthProps } from './DatePickerMonthProps.js';

export const DatePickerMonth = ({ month, navigationDate }: DatePickerMonthProps) => {
  const { locale, monthFormat, weekDayFormat } = useContext(DatePickerContext);

  const weeks = useMemo(() => getWeeks(month, locale), [month, locale]);

  // Inserts the navigation date into the date matrix
  if (isSameMonth(navigationDate, month)) {
    const weekOfMonth = getWeekOfMonth(navigationDate, { locale }) - 1;

    // we need to get the day of the week to index into the correct day after we've gotten the week
    // getDay() however isn't locale aware. This is a good replacement
    const day = differenceInCalendarDays(navigationDate, startOfWeek(navigationDate, { locale }));

    weeks[weekOfMonth][day] = navigationDate;
  }

  return (
    /*
    <div className="text-center inline-block p-16 select-none">
      <div className="t4 text-center s-text mb-4">{format(month, monthFormat, { locale })}</div>
      <table className="table border-collapse font-bold text-s mt-8" style={{ minWidth: 40 * 7, borderSpacing: 0 }} role="grid">
        <thead className="mb-4" aria-hidden>
          <tr>
            {weeks[0].map((day, i) => (
              <td className="text-center s-text text-xs" key={i}>
                {format(day, weekDayFormat, {
                  locale,
                })}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, i) => (
                <DatePickerDay day={day} key={i} month={month} navigationDate={navigationDate} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
*/
    <div className="w-datepicker__month">
      <div className="w-datepicker__month__nav">
        {/* move prev month button here and give it .w-datepicker__month__nav__button as a class*/}
        <div className="w-datepicker__month__nav__header">
          {format(month, monthFormat, { locale })}
        </div>
        {/* move next month button here and give it .w-datepicker__month__nav__button as a class*/}
      </div>

      <table className="w-datepicker__table" role="grid">
        <thead className="w-datepicker__weekdays" aria-hidden="true">
          <tr>
            {weeks[0].map((day, i) => (
              <th className="w-datepicker__weekday" key={i}>
                {format(day, weekDayFormat, { locale })}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, i) => (
                <DatePickerDay key={i} day={day} month={month} navigationDate={navigationDate} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function getWeeks(month: Date, locale?: Locale): Date[][] {
  const weekStarts = eachWeekOfInterval(
    {
      start: startOfMonth(month),
      end: lastDayOfMonth(month),
    },
    { locale },
  );

  const weekIntervals = weekStarts.map((weekStart) => ({
    start: weekStart,
    end: endOfWeek(weekStart, { locale }),
  }));

  return weekIntervals.map((week) => eachDayOfInterval(week));
}
