export const fetchProductsByCategory = async (category: string) => {
	try {
		const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
		if (!response.ok) {
			throw new Error("Failed to fetch products.");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
};

export const fetchAllProducts = async () => {
	try {
		const response = await fetch("https://fakestoreapi.com/products");
		if (!response.ok) {
			throw new Error("Failed to fetch all products.");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching all products:", error);
		throw error;
	}
};