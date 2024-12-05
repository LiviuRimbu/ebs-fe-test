import React from "react";

import Navbar from "./Navbar.tsx"
import CartBtnWithCounter from "./CartBtnWithCounter";
import LanguageSwitcher from "@/components/LanguageSwitcher.tsx";

export const Header: React.FC = () => {

    return (
        <div
            className="sticky -top-1 right-0 z-50 flex flex-col min-h-0 sm:py-3 bg-gray-800  w-[100vw]   border-none shadow-none px-6">

            <div className=" w-full max-w-[1700px] mx-auto max-h-[200px]">
                <div className="flex flex-row items-center ml-auto">
                    <LanguageSwitcher/>
                </div>
                <div className="relative flex flex-row items-center justify-between w-full">
                    <div className="">
                        <Navbar/>
                    </div>
                    <div className="absolute left-0 sm:relative ">
                        <CartBtnWithCounter/>
                    </div>
                </div>
            </div>
        </div>
    );
};
