import { FC } from "react";
import SEO from "@seo/SEO";
import dynamic from "next/dynamic";

const BoxContainer = dynamic(() => import("@containers/BoxContainer"), {
  ssr: false,
});

const Home: FC = () => {
  return (
    <>
      <SEO />
      <main className="w-full z-0" data-testid="boxContainer">
        <BoxContainer />
      </main>
    </>
  );
};
export default Home;
