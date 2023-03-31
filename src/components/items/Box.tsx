import { FC } from "react";
import Image from "next/image";
import { BoxData } from "@types";
// import { useInView } from "react-intersection-observer";

type Props = {
  data: BoxData;
  scrollY: number;
};
const Box: FC<Props> = ({ data, scrollY }) => {
  const { velocity, imageUrl, size, color, translateX } = data;
  const translateY = scrollY * -velocity;

  // Tried to remove if not in view
  //   const { ref, inView } = useInView();
  //   if (inView === false) {
  //     return null;
  //   }

  return (
    <div
      //   ref={ref}
      style={{
        height: size,
        width: size,
        backgroundColor: color,
        borderRadius: "10px",
        transition: "transform 0.5s linear",
        transform: `translate(${
          translateX ? translateX : 0
        }px,${translateY}px)`,
      }}
    >
      <div className="relative h-full w-full">
        <Image
          src={imageUrl}
          fill
          className="object-contain"
          alt={String(velocity)}
        />
      </div>
    </div>
  );
};

export default Box;
