import { customBoxData } from "@constants";
import { render, screen } from "@testing-library/react";
import Box from "../Box";

test("It renders Box", () => {
  render(<Box scrollY={10} data={customBoxData} />);
  expect(screen.getByTestId("box")).toBeInTheDocument();
  expect(
    screen.getByTestId("box-image" + customBoxData.velocity)
  ).toBeInTheDocument();
});
