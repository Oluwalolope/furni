'use client';

import PRODUCTS from "@/data/products";
import { CartContext } from "@/store/cart-context-provider";
import currencyFormatter from "@/util/formatting";
import { useContext } from "react";

const CartTotals = () => {
    const cartCtx = useContext(CartContext);

    const discount = 0

    // let subTotalPrice = 0;

    // const calculatedSubTotalPrice =  cartCtx.cartItems.forEach(cartItem => {
    //     const cartItemPrice = PRODUCTS.filter(product => product.id === cartItem.id)[0].price;

    //     if (!cartItemPrice) {
    //         return
    //     };

    //     subTotalPrice = cartItemPrice * cartItem.quantity;
    //     console.log(subTotalPrice);
    //     return subTotalPrice;
    // });

    const subTotalPrice = cartCtx.cartItems.reduce((totalPrice, item) => {
        const cartItemPrice = PRODUCTS.filter(product => product.id === item.id)[0].price;

        return totalPrice + (item.quantity * cartItemPrice)
    }, 0);
    
    const totalPrice = subTotalPrice - (subTotalPrice * discount);

  return (
    <div className="mx-auto md:mx-0">
      <h3 className="font-inter font-medium text-[#000000] text-[26px] [line-height:_32px] uppercase">
        Cart Totals
      </h3>

      <div className="mt-8 pt-4 border-t border-[#DEE2E6]">
        <div className="grid grid-cols-2 gap-4">
          <p className="font-inter font-medium text-[#000000] text-[16px] [line-height:_32px]">
            Subtotal
          </p>
          <p className="font-inter font-medium text-[#000000] text-[16px] [line-height:_32px]">
            {currencyFormatter.format(subTotalPrice)}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <p className="font-inter font-medium text-[#000000] text-[16px] [line-height:_32px]">
            Total
          </p>
          <p className="font-inter font-medium text-[#000000] text-[16px] [line-height:_32px]">
            {currencyFormatter.format(totalPrice)}
          </p>
        </div>
        <button className="mt-8 py-1.5 px-4 lg:py-3 lg:px-8 bg-[#2F2F2F] hover:bg-[#6D6D6D] transition-all duration-300 cursor-pointer rounded-[100px] capitalize text-[#ffff] font-inter font-semibold text-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotals;
