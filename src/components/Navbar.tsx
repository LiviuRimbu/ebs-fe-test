import React from "react";
import { Link } from "react-router-dom";
import { fetchProductsByCategory } from "../services/api";

interface Category {
	id: string;
	name: string;
	request: string;
}

const Navbar: React.FC = () => {
	const categories: Category[] = [
		{ id: "electronics", name: "Electronics", request: "electronics" },
		{ id: "jewelery", name: "Jewelery", request: "jewelery" },
		{ id: "mens-clothing", name: "Men's Clothing", request: "men's clothing" },
		{ id: "womens-clothing", name: "Women's Clothing", request: "women's clothing" },
	];

	const handleCategoryClick = async (category: string) => {
		try {
			const fetchedProducts = await fetchProductsByCategory(category);
			console.log(fetchedProducts, category);
		} catch (error) {
			console.error("Error fetching category:", error);
		}
	};

	return (
		<nav className="text-white p-4">
			<ul className="flex flex-row space-x-4">
				{categories.map((category) => (
					<li key={category.id}>
						<Link
							to={`/${category.id}`}
							className="hover:underline"
							onClick={() => handleCategoryClick(category.request)}
						>
							{category.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
