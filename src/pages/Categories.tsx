import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {fetchProductsByCategory} from "../services/api.ts";
import {stringUtils} from "../utils/stringUtils.ts";
import ProductLoader from "../components/skeletons/ProductLoader.tsx";
import ProductCard from "@/components/ProductCard.tsx"


interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
}

const CategoryPage: React.FC = () => {
    const {categoryId} = useParams<{ categoryId: string }>();
    // console.log(categoryId, "categoryId from UseParams");
    const correctCategoryId = categoryId ? stringUtils(categoryId) : "default-category";
    // console.log(correctCategoryId, "categoryIdCorrected");
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
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
                {loading ? (
                    <ProductLoader count={10}/>
                ) : (
                    products.map((product) => (
                        <li key={product.id}
                            className=" relative  rounded-2xl shadow bg-white cursor-pointer hover:shadow-lg hover:scale-105">
                            <ProductCard product={product}/>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default CategoryPage;
