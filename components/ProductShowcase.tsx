import PRODUCTS from "@/data/products";
import Product from "./Product";
import Link from "next/link";

const ProductShowcase = () => {
    return (
        <section className="flex flex-col justify-center lg:flex-row lg:justify-between py-[185px] items-start gap-x-6 gap-y-38 w-full max-w-[1512px] mx-auto flex-wrap">
            <div className="min-w-[209px] mx-auto">
                <h2 className="font-inter font-medium text-4xl text-center lg:text-start lg:max-w-[209px] pb-6 text-[#35322F]">Crafted with excellent material.</h2>
                <p className="font-inter font-medium text-[16px] [line-height:_32px] text-center lg:text-start lg:max-w-[294px] pb-8 text-[#87857D]">Each piece is made with premium, durable materials — combining strength, comfort, and timeless design for everyday living.</p>

                <Link href='/shop' className="py-3 px-8 bg-[#2F2F2F] hover:bg-[#6D6D6D] transition-all duration-300 cursor-pointer rounded-[100px] capitalize text-white font-inter font-semibold text-lg" >explore</Link>
            </div>

            {PRODUCTS.slice(0,2).map(product => <Product key={product.id} {...product} />)}
        </section>
    );
}
 
export default ProductShowcase;