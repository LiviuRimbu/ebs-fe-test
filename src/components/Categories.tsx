import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchProductsByCategory } from "../services/api";
import { stringUtils } from "../utils/stringUtils";
import ProductLoader from "./skeletons/ProductLoader";

interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
}

const CategoryPage: React.FC = () => {
	const { categoryId } = useParams<{ categoryId: string }>();
	console.log(categoryId, "categoryId from UseParams");
	const correctCategoryId = categoryId ? stringUtils(categoryId) : "default-category";

	console.log(correctCategoryId, "categoryIdCorrected");
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				if (correctCategoryId) {
					const fetchedProducts = await fetchProductsByCategory(correctCategoryId);
					setProducts(fetchedProducts);
				}
			} catch (err) {
				setError("Failed to fetch products.");
				console.error("Error fetching products:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, [correctCategoryId]);

	if (error) return <div>{error}</div>;

	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl font-bold my-4 capitalize">{correctCategoryId}</h1>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
				{loading ? (
					<ProductLoader count={10} />
				) : (
					products.map((product) => (
						<li key={product.id} className="border p-4 rounded-2xl shadow bg-white">
							<img
								src={product.image}
								alt={product.title}
								className="w-full h-40 object-contain mb-4"
								loading="lazy"
							/>
							<h2 className="text-lg font-semibold">{product.title}</h2>
							<p className="text-sm text-gray-600">Price: ${product.price}</p>
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default CategoryPage;
