import HeroSection from "@/components/HeroSection";
import Product from "@/components/Product";
import PRODUCTS from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furni | Shop",
  description: "Our shop catalogue at furni",
};

const ShopPage = () => {
    return (
        <>
            <HeroSection title="shop" />

            <div className="bg-background-main">
              <main className="w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px]">
                <section className="flex flex-col justify-center lg:flex-row lg:justify-between py-[185px] items-start gap-x-6 gap-y-38 w-full max-w-[1512px] mx-auto flex-wrap">
                  {PRODUCTS.map(product => <Product key={product.id} {...product} />)}
                </section>
              </main>
            </div>
        </>
    );
}
 
export default ShopPage;