import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "./horizontal-menu";

describe("App Component", () => {
  const Instance = render(<Component onChange={console.log} />);
  it("Matches the snapshot", () => {
    expect(Instance).toMatchSnapshot();
  });
});
