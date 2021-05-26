import React from "react";
import { useBooking } from "../../context/booking-flow";
import styles from "./date-picker.module.scss";

function DatePicker() {
  const { state, dispatch } = useBooking();

  const onChangeHandler = React.useCallback(
    (event) => {
      dispatch({ type: "setTime", payload: event.target.value });
    },
    [dispatch]
  );

  return (
    <section className={styles.datePicker}>
      <p>
        Change the date time here:{"  "}
        <input
          type="datetime-local"
          value={state.userTime}
          onChange={onChangeHandler}
        />
      </p>
    </section>
  );
}

export default DatePicker;
