import HeroSection from "@/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furni | Shop",
  description: "Our shop catalogue at furni",
};

const ShopPage = () => {
    return (
        <>
            <HeroSection title="shop" />

            <main className="bg-background-main h-[60px]">
              shop
            </main>
        </>
    );
}
 
export default ShopPage;