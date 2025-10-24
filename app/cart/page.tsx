import CartTotals from "@/components/cart/CartTotals";
import MobileCartView from "@/components/cart/MobileCartView";
import TableCartView from "@/components/cart/TableCartView";
import HeroSection from "@/components/HeroSection";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Furni | Cart",
  description: "Your cart catalogue at furni",
};

const CartPage = () => {
    return (
        <>
            <HeroSection title="cart" />

            <div className="bg-background-main">
                <main className="w-full max-w-[1512px] mx-auto pt-[156px] px-4 md:px-6 lg:px-[138px]">
                    {/* Shows only on larger screen */}
                    <TableCartView />
                    {/* Shows only on mobile screens */}
                    <MobileCartView />
                    <div className="mt-16">
                        <Link href='/shop' type="submit" className="py-3 px-8 bg-[#2F2F2F] hover:bg-[#6D6D6D] transition-all duration-300 cursor-pointer rounded-[100px] capitalize text-[#ffff] font-inter font-semibold  text-lg" >Continue shopping</Link >
                    </div>
                    <div className="flex flex-col gap-y-20 md:flex-row md:justify-between pt-12 pb-[345px]">
                        <div>
                            <h3 className="font-inter font-medium text-[#000000] text-[28px] [line-height:_32px]">Coupon</h3>
                            <p className="font-inter font-medium text-[#6A6A6A] pt-4 text-[16px] [line-height:_32px]">Enter your coupon code right here.</p>
                            <div className="flex flex-row gap-8 items-center">
                                <input type="text" id="coupon" name="coupon" placeholder="Coupon Code" className="w-full h-[55px] p-5 border border-[#CED4DA] hover:border-[#515151] focus:border-[#515151] transition-all duration-300 rounded-xl bg-white"/>
                                <button className="py-3 px-8 bg-[#2F2F2F] hover:bg-[#6D6D6D] transition-all duration-300 cursor-pointer rounded-[24px] capitalize text-[#ffff] font-inter font-semibold text-lg">Apply Coupon</button>
                            </div>
                        </div>
                        <CartTotals />
                    </div>
                </main>
            </div>
        </>
    );
}
 
export default CartPage;