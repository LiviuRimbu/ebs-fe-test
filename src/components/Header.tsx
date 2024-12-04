import React from "react";

import Navbar from "./Navbar.tsx"
import CartBtnWithCounter from "./CartBtnWithCounter";



export const Header: React.FC = () => {
  return (
      <div className="sticky w-[100vw] -top-1 right-0 z-50 flex flex-row items-center justify-items-start sm:justify-between bg-gray-800 h-[20vh] border-none shadow-none px-6">

          <div className="text-white ">Logo</div>

          <Navbar/>

          <CartBtnWithCounter />


      </div>
  );
};
