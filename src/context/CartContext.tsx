import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
	image?: string; // Optional image property
}

interface CartContextType {
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: number) => void;
	clearCart: () => void;
	incrQuantity: (id: number) => void;
	decrQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [cart, setCart] = useState<CartItem[]>(() => {
		const storedCart = localStorage.getItem("cart");
		return storedCart ? JSON.parse(storedCart) : [];
	});

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (item: CartItem) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((i) => i.id === item.id);
			if (existingItem) {
				return prevCart.map((i) =>
					i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
				);
			}
			return [...prevCart, item];
		});
	};

	const incrQuantity = (id: number) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	const decrQuantity = (id: number) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === id && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		);
	};

	const removeFromCart = (id: number) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				incrQuantity,
				decrQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("CartContext must be used within a CartProvider");
	}
	return context;
};
