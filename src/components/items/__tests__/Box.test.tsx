import { render, screen } from "@testing-library/react";
import { BoxData } from "@types";
import Box from "../Box";

const customBoxData: BoxData = {
  color: "#FFFFFF",
  velocity: 1.2,
  size: "100px",
  translateX: 0,
  imageUrl: "https://api.dicebear.com/6.x/lorelei/svg",
};

test("It renders Box", () => {
  render(<Box scrollY={10} data={customBoxData} />);
  expect(screen.getByTestId("box")).toBeInTheDocument();
  expect(
    screen.getByTestId("box-image" + customBoxData.velocity)
  ).toBeInTheDocument();
});
