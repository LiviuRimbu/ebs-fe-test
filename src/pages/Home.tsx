import React, { useEffect, useState } from "react";

import { fetchAllProducts } from "../services/api";
import ProductCard from "@/components/ProductCard";
import ProductLoader from "@/components/skeletons/ProductLoader";
import {Product} from "@/interfaces/Product.ts";
import SortByPrice from "@/components/SortByPrice.tsx";
import {handleSort} from "@/utils/sortUtils.ts";

const HomePage: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none");

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const allProducts = await fetchAllProducts();
				setProducts(allProducts);
			} catch (err) {
				setError("Failed to fetch products.");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	const handleSortChange = (order: "asc" | "desc" | "none") => {
		setSortOrder(order);
		const sortedProducts = handleSort(order, products);
		setProducts(sortedProducts);
	};

	if (loading) return <ProductLoader count={10} />;
	if (error) return <div>{error}</div>;

	return (
		<div className="flex flex-col items-center ">
			<h1 className="text-3xl font-bold my-4 capitalize">Home</h1>
			<div className="flex justify-center items-center">
				<SortByPrice value={sortOrder} onChange={handleSortChange}/>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 px-5">
				{products.map((product) => (
					<ProductCard key={product.id} product={product}/>
				))}
			</div>
		</div>
	);
};

export default HomePage;
