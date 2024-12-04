import React, {useState} from "react";

import {useCart} from "@/context/CartContext";
import cartImage from "@/assets/images/cart.svg";
import {Button} from "@/components/ui/button.tsx";
import Modal from "@/components/Modal";
import Cart from "@/components/Cart.tsx";

const CartBtnWithCounter: React.FC = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };

    const {cart} = useCart();
    const totalItems = parseFloat(cart.reduce((sum, item) => sum + item.quantity, 0).toFixed(2));
    const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="h-[60%]">
            <Button
                variant="image"
                onClick={toggleCart}
            >
                <div className="relative flex flex-col items-center justify-center w-[30%] gap-2 mr-[1rem]">
                    <img
                        src={cartImage}
                        alt="cart"
                        className="w-[5vw]"
                    />
                    {totalItems > 0 && (<div
                        className='absolute top-0 right-[-7px] rounded-full w-2 h-2 text-red-500 bg-red-500 text-[1px]'></div>)}

                    <div className="flex flex-col text-white">
                        <span>Items: {totalItems}</span>
                        <span>Total: ${totalSum.toFixed(2)}</span>
                    </div>
                </div>
            </Button>

            <Modal isOpen={isCartOpen} onClose={toggleCart}>
                <Cart/>
            </Modal>
        </div>
    );
};

export default CartBtnWithCounter;
