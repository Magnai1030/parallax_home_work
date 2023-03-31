import { FC } from "react";
import Header from "./Header";
import { ChildrenProps } from "@types";

const Layout: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Layout;
