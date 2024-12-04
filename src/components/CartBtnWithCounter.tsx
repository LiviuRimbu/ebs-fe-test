import React, { useState } from "react";

import { useCart } from "@/context/CartContext";
import cartImage from "@/assets/images/cart.svg";
import { Button } from "@/components/ui/button.tsx";
import Modal from "@/components/Modal";
import Cart from "@/components/Cart.tsx";

const CartBtnWithCounter: React.FC = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };

    const { cart } = useCart();
    const totalItems = parseFloat(cart.reduce((sum, item) => sum + item.quantity, 0).toFixed(2));
    const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="max-w-[90%]">
            <Button
                variant="image"
                onClick={toggleCart}
            >
                <div className="flex flex-col items-center justify-center w-full gap-2">
                    <img
                        src={cartImage}
                        alt="cart"
                        className="w-[5vw]"
                    />
                    <div className="flex flex-col text-white">
                        <span>Items: {totalItems}</span>
                        <span>Total: ${totalSum.toFixed(2)}</span>
                    </div>
                </div>
            </Button>

            <Modal isOpen={isCartOpen} onClose={toggleCart}>
                <Cart />
            </Modal>
        </div>
    );
};

export default CartBtnWithCounter;
