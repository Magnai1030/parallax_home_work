import Box from "@items/Box";
import { BoxData } from "@types";
import { FC, UIEvent, useMemo, useState } from "react";
import { generateRandomBox } from "src/services";

const BoxContainer: FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event: UIEvent<HTMLElement>) => {
    const scrollTop = event.currentTarget.scrollTop;
    setScrollY(scrollTop);
  };

  const randomBoxData = useMemo(() => {
    const tempContainer: BoxData[] = [];
    let total = Math.floor(Math.random() * 20 + 10);
    for (let index = 0; index < total; index++) {
      const randomBox = generateRandomBox();
      tempContainer.push(randomBox);
    }
    return tempContainer;
  }, []);

  return (
    <section
      className="w-full h-screen overflow-scroll"
      onScroll={handleScroll}
    >
      <div className="w-full">
        {randomBoxData.map((item, index) => (
          <Box key={"box" + index} scrollY={scrollY} data={item} />
        ))}
      </div>
    </section>
  );
};
export default BoxContainer;
