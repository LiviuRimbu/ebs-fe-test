import React from "react";
import { Link } from "react-router-dom";

interface Category {
	id: string;
	name: string;
}

interface MenuListProps {
	isMobile?: boolean;
	categories: Category[];
	setMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuList: React.FC<MenuListProps> = ({ isMobile = false, categories, setMenuOpen }) => (
	<ul
		className={`${
			isMobile
				? "flex flex-col space-y-2 absolute top-0 -right-1 sm:hidden bg-opacity-50 p-4 rounded-md shadow-lg h-[100vh] z-20"
				: "hidden sm:flex flex-row space-x-4 ml-auto"
		}`}
	>
		{categories.map((category) => (
			<li key={category.id}>
				<Link
					to={`/${category.id}`}
					className={`hover:text-blue-700 block whitespace-nowrap ${
						isMobile ? "" : "ml-[1rem]"
					}`}
					onClick={() => isMobile && setMenuOpen?.(false)}
				>
					<span className={`text-lg sm:text-xl md:text-2xl lg:text-3xl`}>
						{category.name}
					</span>
				</Link>
			</li>
		))}
	</ul>
);

export default MenuList;
