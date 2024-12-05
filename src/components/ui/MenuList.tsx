import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

interface Category {
    id: string;
    name: string;
}

interface MenuListProps {
    isMobile?: boolean;
    categories: Category[];
    setMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuList: React.FC<MenuListProps> = ({isMobile = false, categories, setMenuOpen}) => {
    const {t} = useTranslation(); // Use the translation hook here
    return (
        <ul
            className={`${
                isMobile
                    ? "flex flex-col space-y-2 absolute top-0 -right-1 sm:hidden bg-opacity-50 p-4 rounded-md shadow-lg h-[100vh] z-20"
                    : "hidden sm:flex flex-row items-center justify-center space-x-4 ml-auto"
            }`}
        >
            <Link to={`/`}>
                        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white hover:text-blue-600 mr-[2vw]">
                            HOME
                        </span>
            </Link>
            {categories.map((category) => (
                <li key={category.id}>
                    <Link
                        to={`/${category.id}`}
                        className={`hover:text-blue-700 block whitespace-nowrap ${
                            isMobile ? "" : "ml-[1rem]"
                        }`}
                        onClick={() => isMobile && setMenuOpen?.(false)}
                    >
						<span className={`text-sm sm:text-md md:text-xl lg:text-3xl`}>
							{t(`${category.id}`)}
						</span>
                    </Link>
                </li>
            ))}

        </ul>
    );
};

export default MenuList;
