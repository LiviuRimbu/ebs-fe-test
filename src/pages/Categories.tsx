import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {fetchProductsByCategory} from "../services/api.ts";
import {stringUtils} from "../utils/stringUtils.ts";
import ProductLoader from "../components/skeletons/ProductLoader.tsx";
import ProductCard from "@/components/ProductCard.tsx";
import {Product} from "@/interfaces/Product.ts";
import SortByPrice from "@/components/SelectSortType.tsx";
import {handleSort} from "@/utils/sortUtils.ts";

const CategoryPage: React.FC = () => {
    const {categoryId} = useParams<{ categoryId: string }>();
    const correctCategoryId = categoryId ? stringUtils(categoryId) : "default-category";

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                if (correctCategoryId) {
                    const fetchedProducts = await fetchProductsByCategory(correctCategoryId);
                    setProducts(fetchedProducts);
                }
            } catch (err) {
                setError("Fetch error.");
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [correctCategoryId]);

    const handleSortChange = (order: "asc" | "desc" | "none") => {
        setSortOrder(order);
        const sortedProducts = handleSort(order, products);
        setProducts(sortedProducts);
    };

    if (error) return <div>{error}</div>;

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold my-4 capitalize">{correctCategoryId}</h1>
            <SortByPrice
                value={sortOrder}
                onChange={handleSortChange}
            />

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
                {loading ? (
                    <ProductLoader count={10}/>
                ) : (
                    products.map((product) => (
                        <li
                            key={product.id}
                            className="relative rounded-2xl shadow bg-white cursor-pointer hover:shadow-lg hover:scale-105"
                        >
                            <ProductCard product={product}/>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default CategoryPage;
