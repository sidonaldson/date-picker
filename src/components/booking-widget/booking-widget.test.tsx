import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "./booking-widget";

describe("App Component", () => {
  const Instance = render(<Component />);
  it("Matches the snapshot", () => {
    expect(Instance).toMatchSnapshot();
  });
});
