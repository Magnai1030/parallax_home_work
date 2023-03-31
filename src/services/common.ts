import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { BoxData } from "@types";

import { MAX_SIZE, MAX_VELOCITY, MIN_SIZE, MIN_VELOCITY } from "src/constants";

export const generateRandomBox = (): BoxData => {
  const velocity = (Math.random() * MAX_VELOCITY + MIN_VELOCITY).toFixed(1);
  const size = (Math.random() * MAX_SIZE + MIN_SIZE).toFixed();
  const imageUrl = createAvatar(lorelei, {
    seed: velocity,
  }).toDataUriSync();
  var color = Math.floor(Math.random() * 16777215).toString(16);
  return {
    velocity: parseFloat(velocity),
    size: size + "px",
    imageUrl,
    color: "#" + color,
  };
};
