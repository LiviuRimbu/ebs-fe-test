import React, {useState} from "react";

import {useCart} from "@/context/CartContext";
import cartImage from "@/assets/images/cart.svg";
import {Button} from "@/components/ui/button.tsx";
import Modal from "@/components/Modal";
import Cart from "@/components/Cart.tsx";
import {useTranslation} from "react-i18next";


const CartBtnWithCounter: React.FC = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };

    const {cart} = useCart();
    const totalItems = parseFloat(cart.reduce((sum, item) => sum + item.quantity, 0).toFixed(2));
    const totalSum = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const {t} = useTranslation();

    return (
        <div className="sm:mt-[20px] flex flex-col items-center ml-auto  border-gray-400">
            <Button
                variant="image"
                onClick={toggleCart}
            >
                <div className="flex flex-row items-center sm:flex-col justify-items-start  gap-2 mr-[1rem]">
                    <img
                        src={cartImage}
                        alt="cart"
                        className="w-[40px] h-[40px] object-contain"
                    />
                    {totalItems > 0 && (
                        <div
                        className='absolute left-3 top-0 rounded-full w-2 h-2  bg-red-500 text-[1px]'></div>)}

                    <div className="flex flex-col items-start text-white ">
                        <span className={'text-[10px] leading-none'}>{t("items")}: {totalItems}</span>
                        <span className={'text-[10px] leading-none'}>{t("total")}: ${totalSum.toFixed(2)}</span>
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
