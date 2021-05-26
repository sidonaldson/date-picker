import React from "react";
import { useBooking } from "../context/booking-flow";
import BookingWidget from "../components/booking-widget";
import AddTimeDecorator from "../utilities/addTimeDecorator";
import AddDateDecorator from "../utilities/addDateDecorator";
import { days, months } from "../langauge/en";
import styles from "./home.module.scss";

function Home() {
  const { state, dispatch } = useBooking();

  const handleOnChange = React.useCallback(
    (booking) => {
      dispatch({ type: "setBookingTimeAndDate", payload: booking });
    },
    [dispatch]
  );

  const bookingDate = new Date(state.bookingDate);
  const formattedDate = `${days[bookingDate.getDay()]} ${AddDateDecorator(
    bookingDate.getDate()
  )}  ${months[bookingDate.getMonth()]}`;

  return (
    <section className={styles.home}>
      <h1>Booking Time</h1>
      <p>User time is {state.userTime}</p>
      <BookingWidget
        booking={{ time: state.bookingTime, date: state.bookingDate }}
        currentTime={state.userTime}
        earliestTime={"06:00:00"}
        lastestTime={"21:45:00"}
        numberOfDays={14}
        onChange={handleOnChange}
        timeIntervals={15}
      />
      {!state.bookingDate && <p>Please select a day</p>}
      {state.bookingDate && <p>Date: {formattedDate}</p>}
      {!state.bookingTime && <p>Please select a time</p>}
      {state.bookingTime && (
        <p>
          Time: {`${state.bookingTime} ${AddTimeDecorator(state.bookingTime)}`}
        </p>
      )}
      <button type="button" disabled={!state.bookingDate || !state.bookingTime}>
        Next &gt;
      </button>
    </section>
  );
}

export default Home;
