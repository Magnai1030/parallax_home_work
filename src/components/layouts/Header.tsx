import Image from "next/image";
import Link from "next/link";
import { REPOSITORY_URL } from "@constants";

const Header = () => {
  return (
    <header data-testid="header" className="h-14 w-full">
      <div className="h-14 flex fixed top-0 inset-x-0 z-20 bg-white-500 shadow-header justify-center place-items-center">
        <Link
          href={REPOSITORY_URL}
          target="_blank"
          className="w-10 h-10 rounded-full relative hover:rotate-12 transition-transform"
        >
          <Image
            src={"/ic_github.svg"}
            alt={"github"}
            priority
            fill
            className="object-contain"
          />
        </Link>
      </div>
    </header>
  );
};
export default Header;
