import React from "react";

import Navbar from "./Navbar.tsx"
import CartBtnWithCounter from "./CartBtnWithCounter";
import {Link} from "react-router-dom";

export const Header: React.FC = () => {

    return (
        <div
            className="sticky w-[100vw] -top-1 right-0 z-50 flex flex-row items-center justify-items-start sm:justify-between bg-gray-800 h-[20vh] border-none shadow-none px-6">

            <Link to={`/`}>
					<span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white hover:text-blue-600">
						HOME
					</span>
            </Link>

            <Navbar/>


            <CartBtnWithCounter/>
        </div>
    );
};
