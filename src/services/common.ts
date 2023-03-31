import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { BoxData } from "@types";

import { MAX_SIZE, MAX_VELOCITY, MIN_SIZE, MIN_VELOCITY } from "@constants";

// Generate one box default data
export const generateRandomBox = (): BoxData => {
  //Box velocity between MAX_VELOCITY and MIN_VELOCITY
  const velocity = (Math.random() * MAX_VELOCITY + MIN_VELOCITY).toFixed(1);
  //Box size between MAX_SIZE and MIN_SIZE
  const size = (Math.random() * MAX_SIZE + MIN_SIZE).toFixed();
  //Box image by velocity
  const imageUrl = createAvatar(lorelei, {
    seed: velocity,
  }).toDataUriSync();
  //Box background color
  var color = Math.floor(Math.random() * 16777215).toString(16);
  //Box initial translateX
  var translateX = parseFloat(
    (Math.random() * (window.innerWidth - parseFloat(size)) + 0).toFixed()
  );

  return {
    velocity: parseFloat(velocity),
    size: size + "px",
    imageUrl,
    translateX,
    color: "#" + color,
  };
};
