"use client";

import { CartContext } from "@/store/cart-context-provider";
import { useContext } from "react";
import CartItem from "./CartItem";

const MobileCartView = () => {
  const cartCtx = useContext(CartContext);
  return (
    <section className="mx-auto w-full flex flex-col gap-y-3 md:hidden">
      {cartCtx.cartItems.map((cart_item) => (
        <CartItem
          key={cart_item.id}
          id={cart_item.id}
          quantity={cart_item.quantity}
          onDelete={() => cartCtx.handleDeleteCartItem(cart_item.id)}
          isMobile
        />
      ))}
    </section>
  );
};

export default MobileCartView;
