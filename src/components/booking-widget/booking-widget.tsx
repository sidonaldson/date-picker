import React from "react";
import HorizontalMenu from "../horizontal-menu";
import ScrollableButtons from "../scrollable-buttons";
import GetDateString from "../../utilities/getDateString";
import { daysShort } from "../../langauge/en";
import {
  startOfDay,
  setDateTime,
  futureDate,
} from "../../utilities/dateHelpers";
import styles from "./booking-widget.module.scss";

function BookingWidget({
  booking,
  currentTime,
  timeIntervals = 10,
  numberOfDays = 10,
  earliestTime = "20:00:00",
  lastestTime = "20:00:00",
  onChange,
}: BookingWidgetProps) {
  const { dates, times } = React.useMemo(() => {
    const times = [];
    const dates = [];
    const today = new Date(currentTime);

    // calculate the days
    let dateStart = startOfDay(today);
    const dateEnd = futureDate(dateStart, numberOfDays);

    while (dateEnd > dateStart) {
      dates.push({
        value: GetDateString(dateStart),
        text: `<span>${
          daysShort[dateStart.getDay()]
        }</span> ${dateStart.getDate()} `,
      });
      dateStart = futureDate(dateStart, 1);
    }

    // calculate the hours
    const startTokens = earliestTime.split(":");
    const endTokens = lastestTime.split(":");
    let start = setDateTime(
      today,
      startTokens[0],
      startTokens[1],
      startTokens[2]
    );
    const end = setDateTime(today, endTokens[0], endTokens[1], endTokens[2]);

    while (end > start) {
      start = new Date(start.getTime() + timeIntervals * 60 * 1000);
      times.push({
        disabled: today >= start,
        text: `${(start.getHours() < 10 ? "0" : "") + start.getHours()}:${
          (start.getMinutes() < 10 ? "0" : "") + start.getMinutes()
        }`,
      });
    }
    return { dates, times };
  }, [numberOfDays, currentTime, timeIntervals, earliestTime, lastestTime]);

  const handleDateChange = React.useCallback(
    (date) => {
      onChange({ ...booking, date });
    },
    [booking, onChange]
  );

  const handleTimeChange = React.useCallback(
    (time) => {
      onChange({ ...booking, time });
    },
    [booking, onChange]
  );

  return (
    <article className={styles.bookingWidget}>
      <HorizontalMenu
        selection={booking.date}
        items={dates}
        onChange={handleDateChange}
      />
      <ScrollableButtons
        selection={booking.time}
        buttonArray={times}
        onChange={handleTimeChange}
      />
    </article>
  );
}

export default BookingWidget;
