"use client";

import { CartContext } from "@/store/cart-context-provider";
import { useContext } from "react";
import CartItem from "./CartItem";

const TableCartView = () => {
  const cartCtx = useContext(CartContext);
  return (
    <>
        {cartCtx.cartItems.length !== 0 && <table className="mx-auto w-full hidden md:block">
            <th className="font-inter font-medium text-xl text-[#000000] py-8 h-16 border-b border-[#212529] capitalize">
              image
            </th>
            <th className="font-inter font-medium text-xl text-[#000000] py-8 h-16 border-b border-[#212529] capitalize">
              product
            </th>
            <th className="font-inter font-medium text-xl text-[#000000] py-8 h-16 border-b border-[#212529] capitalize">
              price
            </th>
            <th className="font-inter font-medium text-xl text-[#000000] py-8 h-16 border-b border-[#212529] capitalize">
              quantity
            </th>
            <th className="font-inter font-medium text-xl text-[#000000] py-8 h-16 border-b border-[#212529] capitalize">
              total
            </th>
            <th className="font-inter font-medium text-xl text-[#000000] py-8 h-16 border-b border-[#212529] capitalize">
              remove
            </th>
    
          <tbody className="text-center">
            {cartCtx.cartItems.map((cart_item) => (
              <CartItem
                key={cart_item.id}
                id={cart_item.id}
                quantity={cart_item.quantity}
                onDelete={() => cartCtx.handleDeleteCartItem(cart_item.id)}
                isMobile={false}
              />
            ))}
          </tbody>
        </table>}

        {cartCtx.cartItems.length === 0 && <h1 className="font-inter font-medium text-2xl text-center text-[#000000] py-8">Your Cart is Empty</h1>}
    </>
  );
};

export default TableCartView;
