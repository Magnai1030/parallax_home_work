import { useWindowSize } from "@hooks/useWindow";
import Box from "@items/Box";
import { BoxData } from "@types";
import { map } from "lodash";
import { FC, UIEvent, useMemo, useState } from "react";
import { generateRandomBox } from "@services";

const BoxContainer: FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Window event listener hook
  const { width } = useWindowSize();

  // Scroll handler
  const handleScroll = (event: UIEvent<HTMLElement>) => {
    const scrollTop = event.currentTarget.scrollTop;
    setScrollY(scrollTop);
  };

  //Generate first array data
  const randomInitialBoxData = useMemo(() => {
    const tempContainer: BoxData[] = [];
    // Get array size of between 10 to 20
    let total = Math.floor(Math.random() * 20 + 10);
    for (let index = 0; index < total; index++) {
      const randomBox = generateRandomBox();
      tempContainer.push(randomBox);
    }
    return tempContainer;
  }, []);

  //Update array item translateX data by window width
  const randomBoxData = useMemo(() => {
    if (!width) {
      return randomInitialBoxData;
    }
    const updatedValue: BoxData[] = map(randomInitialBoxData, (item) => {
      const avialableWidth = width - parseFloat(item.size);
      if (
        item.translateX &&
        item.translateX > 0 &&
        item.translateX < avialableWidth
      ) {
        return item;
      }
      const newTranslateX = parseFloat(
        (Math.random() * avialableWidth + 0).toFixed()
      );

      const translateX =
        newTranslateX < parseFloat(item.size)
          ? newTranslateX
          : newTranslateX - parseFloat(item.size);
      return { ...item, translateX };
    });

    return updatedValue;
  }, [randomInitialBoxData, width]);

  return (
    <section
      className="w-full h-screen overflow-scroll z-0"
      onScroll={handleScroll}
    >
      <div className="w-full flex flex-col justify-center place-items-start py-10 z-0">
        {randomBoxData.map((item, index) => (
          <Box key={"box" + index} scrollY={scrollY} data={item} />
        ))}
      </div>
    </section>
  );
};
export default BoxContainer;
