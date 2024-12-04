import React from "react";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button.tsx";
import ProductCard from "@/components/ProductCard.tsx";
import ImageBtn from "@/components/ui/ImageBtn.tsx"
import trash from "@/assets/images/trash.svg";

const Cart: React.FC = () => {
	const { cart, removeFromCart, clearCart, incrQuantity, decrQuantity } =
		useCart();
	const totalSum =  parseFloat(cart.reduce((sum, item) => sum + item.quantity, 0).toFixed(2));
	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-4">Cart</h2>
			{cart.length === 0 ? (
				<p className="text-gray-600">Your cart is empty.</p>
			) : (
				<ul className="space-y-4">
					{cart.map((item) => (
						<li
							key={item.id}
							className="relative flex flex-col items-start p-4 rounded-lg shadow bg-white"
						>
							<ProductCard
								product={{
									id: item.id,
									title: item.name,
									price: item.price,
									image: item.image || "",
								}}
								inCart={true}
								buttonClassName="hidden"
								cardClassName=""
							/>
							<div className="flex flex-row justify-between w-full mt-4">
								<div>
									<p className="text-sm text-gray-600">
										Quantity: {item.quantity}
									</p>
									<p className="text-sm text-gray-600">
										Total: ${item.price * item.quantity}
									</p>
								</div>
								<div className="flex flex-row items-center gap-2">
									<Button
										className="bg-red-900 px-4  rounded-full  hover:bg-red-600 text-white"
										onClick={() => decrQuantity(item.id)}
									>
										-
									</Button>
									<Button
										className="bg-green-800 text-white px-4  rounded-full hover:bg-green-500"
										onClick={() => incrQuantity(item.id)}
									>
										+
									</Button>
									<ImageBtn
										src={trash}
										alt="Remove"
										className="bg-red-800 hover:bg-red-600"
										onClick={() => removeFromCart(item.id)}
									/>
								</div>
							</div>
						</li>
					))}
				</ul>
			)}
			{cart.length > 0 && (
				<div className="flex flex-row justify-between mt-6">
					<Button
						className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
						onClick={clearCart}
					>
						Clear Cart
					</Button>
					<p className="text-sm sm:text-3xl ">Total cart: ${totalSum}</p>
				</div>
			)}
		</div>
	);
};

export default Cart;
