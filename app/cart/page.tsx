import HeroSection from "@/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furni | Cart",
  description: "Your cart catalogue at furni",
};

const CartPage = () => {
    return (
        <>
            <HeroSection title="cart" />

            <main className="bg-background-main h-[60px]">
                cart
            </main>
        </>
    );
}
 
export default CartPage;