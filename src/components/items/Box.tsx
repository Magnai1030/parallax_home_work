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

  // Tried to remove if not in view. It is possible if not use css translate and use absolute boxes
  //   const { ref, inView } = useInView();
  //   if (inView === false) {
  //     return null;
  //   }

  return (
    <div
      data-testid="box"
      style={{
        height: size,
        width: size,
        backgroundColor: color,
        zIndex: 0,
        borderRadius: "10px",
        transition: "transform 0.5s linear",
        transform: `translate(${
          translateX ? translateX : 0
        }px,${translateY}px)`,
      }}
    >
      <div className="relative h-full w-full z-0">
        <Image
          src={imageUrl}
          data-testid={"box-image" + velocity}
          fill
          className="object-contain z-0"
          alt={String(velocity)}
        />
      </div>
    </div>
  );
};

export default Box;
