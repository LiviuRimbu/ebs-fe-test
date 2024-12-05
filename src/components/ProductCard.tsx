import React from "react";
import cart from "@/assets/images/cart.svg";
import {
	Card,
	CardContent,
	CardFooter,
	CardTitle,
} from "@/components/ui/card";
import ImageBtn from "@/components/ui/ImageBtn.tsx";
import { useCart } from "@/context/CartContext";

interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
}

interface ProductCardProps {
	product: Product;
	buttonClassName?: string;
	cardClassName?: string;
	inCart?: boolean;
}


const ProductCard: React.FC<ProductCardProps> = ({ product , buttonClassName,cardClassName,inCart = false}) => {
	const { addToCart } = useCart();

	const handleAddToCart = () => {
		addToCart({
			id: product.id,
			name: product.title,
			price: product.price,
			quantity: 1,
			image: product.image,
		});
	};

	return (
		<Card
			className={`${cardClassName} ${
				inCart
					? "flex flex-row justify-between items-center h-[15vh]" // Styles when inCart is true
					: "" // No extra styles when inCart is false
			}`}
		>
			<CardContent>
				<img
					src={product.image}
					alt={product.title}
					className={`${
						inCart ? "w-[60px] h-[60px] object-contain mb-4" : "w-full h-40 object-contain mb-4"
					}`}
					loading="lazy"
				/>
			</CardContent>
			<CardTitle
				className={`${
					inCart ? "text-sm sm:text-lg font-semibold mr-1" : "text-lg font-semibold"
				}`}
			>
				{product.title}
			</CardTitle>
			<CardFooter>
				<p className="text-sm text-gray-600 mt-2">${product.price}</p>
			</CardFooter>
			<ImageBtn
				onClick={handleAddToCart}
				src={cart}
				alt="cart"
				className={`absolute mt-auto right-3 top-3 bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl ${buttonClassName}`}
			/>
		</Card>
	);
};

export default ProductCard;
