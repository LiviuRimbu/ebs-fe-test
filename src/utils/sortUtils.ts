import { Product } from "@/interfaces/Product";

export const handleSort = (
    order: "asc" | "desc" | "none",
    products: Product[]
): Product[] => {
    return [...products].sort((a, b) => {
        if (order === "asc") return a.price - b.price;
        if (order === "desc") return b.price - a.price;
        return 0;
    });
};
