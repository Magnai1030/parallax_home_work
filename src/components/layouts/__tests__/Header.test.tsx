import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("It renders Box", () => {
  render(<Header />);
  expect(screen.getByTestId("header")).toBeInTheDocument();
  expect(screen.getByAltText("github")).toBeInTheDocument();
});
