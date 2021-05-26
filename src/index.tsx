import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { BookingProvider } from "./context/booking-flow";
import reportWebVitals from "./reportWebVitals";
import DatePicker from "../src/components/date-picker";
import Home from "./pages/home";

ReactDOM.render(
  <React.StrictMode>
    <BookingProvider>
      <main role="main">
        <Home />
      </main>
      <DatePicker />
    </BookingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
