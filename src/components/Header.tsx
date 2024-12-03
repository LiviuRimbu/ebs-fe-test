import React from "react";

import Navbar from "./Navbar.tsx"
// import icon from "../assets/icons/icon.ico"
export const Header: React.FC = () => {
  return (
      <div className="flex items-center justify-center bg-gray-800 w-[100vw]  ">
          {/*<img*/}
          {/*    src={icon}*/}
          {/*    alt="Home Icon"*/}
          {/*    className="h-[60px] w-[60px] ml-2"*/}
          {/*/>*/}
          <Navbar/>
      </div>
  );
};
