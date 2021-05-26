import * as React from "react";
import GetDateString from "../utilities/getDateString";

type Actions =
  | { type: "setTime"; payload: string }
  | {
      type: "setBookingTimeAndDate";
      payload: {
        time: string;
        date: string;
      };
    };

type Dispatch = (action: Actions) => void;

type State = { userTime: string; bookingDate: string; bookingTime: string };

type BookingProviderProps = { children: React.ReactNode };

const initialState = {
  bookingDate: "",
  bookingTime: "",
  // userTime: "2021-05-25T12:00",
  userTime: GetDateString(),
};

const BookingStateContext =
  React.createContext<{ state: State; dispatch: Dispatch } | undefined>(
    undefined
  );

function countReducer(state: State, action: Actions) {
  switch (action.type) {
    case "setTime": {
      return { ...state, userTime: action.payload };
    }
    case "setBookingTimeAndDate": {
      return {
        ...state,
        bookingDate: action.payload.date,
        bookingTime: action.payload.time,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action!.type}`);
    }
  }
}

function BookingProvider({ children }: BookingProviderProps) {
  const [state, dispatch] = React.useReducer(countReducer, initialState);
  const value = { state, dispatch };
  return (
    <BookingStateContext.Provider value={value}>
      {children}
    </BookingStateContext.Provider>
  );
}

function useBooking() {
  const context = React.useContext(BookingStateContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}

export { BookingProvider, useBooking };
