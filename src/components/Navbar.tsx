import React, {useState} from "react";

import NavMenuBtn from "./ui/NavMenuBtn.tsx"
import MenuList from "./ui/MenuList.tsx"
import {Button} from "@/components/ui/button.tsx";


interface Category {
    id: string;
    name: string;
}

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const categories: Category[] = [
        {id: "electronics", name: "Electronics"},
        {id: "jewelery", name: "Jewelery"},
        {id: "mens-clothing", name: "Men's Clothing"},
        {id: "womens-clothing", name: "Women's Clothing"},
    ];


    return (
        <nav className="mt-[2rem] bg-gray-800 text-white p-1 ">
            <div className="flex felx-row items-center justify-between">
                <Button
                    className="sm:hidden absolute top-[-1.5rem] right-1 text-white"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <NavMenuBtn isOpen={menuOpen}/>
                </Button>

                <MenuList isMobile={false} categories={categories}/>
            </div>
            {menuOpen && (
                <div className="fixed top-[14vh] left-0 w-full h-full bg-black bg-opacity-95 z-10">

                    <MenuList isMobile={true} categories={categories} setMenuOpen={setMenuOpen}/>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
