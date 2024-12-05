import { fetchProductsByCategory, fetchAllProducts } from "../services/api";

describe("API functions", () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it("fetchProductsByCategory should fetch products for a category", async () => {
        // Mock API response
        const mockProducts = [
            { id: 1, title: "Product 1", price: 10 },
            { id: 2, title: "Product 2", price: 20 },
        ];
        fetchMock.mockResponseOnce(JSON.stringify(mockProducts));

        const category = "electronics";
        const products = await fetchProductsByCategory(category);

        // Assertions
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`https://fakestoreapi.com/products/category/${category}`);
        expect(products).toEqual(mockProducts);
    });

    it("fetchProductsByCategory should throw an error if the response is not ok", async () => {
        fetchMock.mockResponseOnce("Failed to fetch products.", { status: 500 });

        const category = "invalid-category";

        await expect(fetchProductsByCategory(category)).rejects.toThrow("Failed to fetch products.");
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("fetchAllProducts should fetch all products", async () => {
        // Mock API response
        const mockProducts = [
            { id: 1, title: "Product 1", price: 10 },
            { id: 2, title: "Product 2", price: 20 },
        ];
        fetchMock.mockResponseOnce(JSON.stringify(mockProducts));

        const products = await fetchAllProducts();

        // Assertions
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");
        expect(products).toEqual(mockProducts);
    });

    it("fetchAllProducts should throw an error if the response is not ok", async () => {
        fetchMock.mockResponseOnce("Failed to fetch all products.", { status: 500 });

        await expect(fetchAllProducts()).rejects.toThrow("Failed to fetch all products.");
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
