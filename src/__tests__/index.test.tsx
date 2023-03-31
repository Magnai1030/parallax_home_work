import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@pages/index";

describe("Home", () => {
  it("renders a box container", () => {
    render(<Home />);
    expect(screen.getByTestId("boxContainer")).toBeInTheDocument();
  });
});
