import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "./scrollable-buttons";

describe("App Component", () => {
  const Instance = render(
    <Component buttonArray={[]} onChange={console.log} />
  );
  it("Matches the snapshot", () => {
    expect(Instance).toMatchSnapshot();
  });
});
