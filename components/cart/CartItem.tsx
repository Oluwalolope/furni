"use client";

import PRODUCTS from "@/data/products";
import { CartContext } from "@/store/cart-context-provider";
import currencyFormatter from "@/util/formatting";
import Image from "next/image";
import { useContext, useState } from "react";

type cartItem = {
  id: string;
  isMobile: boolean;
  quantity: number;
  onDelete?: () => void;
};

const CartItem = ({ id, isMobile, onDelete }: cartItem) => {
  const item = PRODUCTS.find((product) => product.id === id);

  const cartCtx = useContext(CartContext);

  const quantityInLocalStorage = cartCtx.cartItems.filter(cart_item => cart_item.id === id)[0].quantity;

  const [cartItemQuantity, setCartItemQuantity] = useState(quantityInLocalStorage || 0);

  const handleUpdateCartItemQuantity = (id: string, action: string) => {
    if (action === "subtract") {
      setCartItemQuantity((prevItemQuantity) => {
        if (prevItemQuantity > 0) {
          prevItemQuantity--;
        }
        return prevItemQuantity;
      });
      
      cartCtx.handleUpdateCartItemQuantity(id, -1);
    }
    if (action === "add") {
      setCartItemQuantity((prevItemQuantity) => prevItemQuantity + 1);

      cartCtx.handleUpdateCartItemQuantity(id, 1);
    }
  };

  if (!item) {
    return;
  }

  const totalCartItemPrice = item.price * cartItemQuantity;

  return (
    <>
      {/* Show on Mobile Only */}
      {isMobile && (
        <article className="bg-white border border-[#CED4DA]/0.5 rounded-md flex flex-row p-4 gap-x-3">
          <div>
            <Image
              src={item.image}
              alt={item.name}
              draggable={false}
              className="w-[120px]"
            />
          </div>

          <div className="flex flex-col justify-between flex-1">
            <h4 className="font-inter font-medium text-[20px] capitalize">
              {item.name}
            </h4>

            <div className="flex flex-col justify-between items-start w-full gap-x-3">
              <p className="font-inter text-[14px] font-normal capitalize">
                price:{" "}
                <span className="font-medium">
                  {currencyFormatter.format(item.price)}
                </span>
              </p>
              <p className="font-inter text-[14px] font-normal capitalize">
                total price:{" "}
                <span className="font-medium">
                  {currencyFormatter.format(totalCartItemPrice)}
                </span>
              </p>
            </div>

            <div className="w-full flex flex-row justify-between items-center">
              <div className="border border-[#CED4DA] rounded-[4px] inline-flex flex-row items-center gap-1">
                <button
                  className="cursor-pointer hover:text-[#F9BF29] transition-all duration-100 inline-grid place-items-center p-1"
                  onClick={() => handleUpdateCartItemQuantity(id, "subtract")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
                <div className=" bg-white w-[34px] h-[27px] border border-y-0 border-[#CED4DA] inline-grid place-items-center font-inter font-medium text-[16px] text-[#000000]">
                  {cartItemQuantity}
                </div>
                <button
                  className="cursor-pointer hover:text-[#F9BF29] transition-all duration-100 inline-grid place-items-center p-1"
                  onClick={() => handleUpdateCartItemQuantity(id, "add")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>

              <button onClick={onDelete} className="cursor-pointer hover:text-red-600 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            </div>
          </div>
        </article>
      )}

      {/* Show on Larger screens */}
      {!isMobile && (
        <tr className="border-b border-[#DEE2E6] h-[225px]">
          <td className="w-1/6">
            <Image
              src={item.image}
              alt={item.name}
              draggable={false}
              className="w-[178px]"
            />
          </td>
          <td className="w-1/6 font-inter font-medium text-[22px] text-[#303030] capitalize">
            {item.name}
          </td>
          <td className="w-1/6 font-inter font-medium text-[22px] text-[#303030]">
            {currencyFormatter.format(item.price)}
          </td>
          <td className="w-1/6">
            <div className="flex items-center gap-x-[11px] justify-center">
              <button
                className="cursor-pointer hover:text-[#F9BF29] transition-all duration-100"
                onClick={() => handleUpdateCartItemQuantity(id, "subtract")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <div className=" bg-white w-[68px] h-[54px] rounded-[10px] border border-[#CED4DA] inline-grid place-items-center font-inter font-medium text-[24px] text-[#000000]">
                {cartItemQuantity}
              </div>
              <button
                className="cursor-pointer hover:text-[#F9BF29] transition-all duration-100"
                onClick={() => handleUpdateCartItemQuantity(id, "add")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </td>
          <td className="w-1/6 font-inter font-medium text-[22px] text-[#303030]">
            {currencyFormatter.format(totalCartItemPrice)}
          </td>
          <td className="w-1/6">
            <button onClick={onDelete}  className="cursor-pointer hover:text-red-600 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default CartItem;
