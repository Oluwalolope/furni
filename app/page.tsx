import BlogCard from "@/components/BlogCard";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import BLOGS from "@/data/blogs";
import Image from "next/image";
import simpleChairBackground from '@/assets/background/simple-chair-background.png';
import simpleSofaBackground from '@/assets/background/simple-sofa-background.png';
import simpleWorkFurnitureBackground from '@/assets/background/simple-work-furniture-background.png';
import backgroundPattern from '@/assets/background/Small-Circles-dark-pattern.svg';
import ergonomiChair from '@/assets/products/ergonomi-chair.png';
import kruzoChair from '@/assets/products/kruzo-chair.png';
import nordicChair from '@/assets/products/nordic-chair.png';
import Link from "next/link";
import PRODUCTS from "@/data/products";
import DisplayCard from "@/components/DisplayCard";

const Home = () => {
  return (
    <>
      <HeroSection title="modern interior design studio" description="Blending modern style with everyday comfort, we create spaces that are functional, elegant, and uniquely yours." />

      <div className="bg-background-main">
        <main className="w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px]">
          <ProductShowcase />
          <WhyChooseUs />
          <section className="pb-[194px]">
            <div className="py-[192px] flex flex-row gap-[57px] justify-between">
              <div className="flex-1 relative w-full hidden md:block">
                <Image className="absolute -top-30 -left-20 object-cover" src={backgroundPattern} alt="background" draggable={false} aria-hidden />
                <Image className="absolute rounded-[26px] top-3 right-0 w-[154px] h-[167px] object-cover" src={simpleWorkFurnitureBackground} alt="background" draggable={false} aria-hidden />
                <Image className="absolute rounded-[26px] left-0 w-[300px] h-[406px] object-cover" src={simpleSofaBackground} alt="background" draggable={false} aria-hidden />
                <Image className="absolute rounded-[26px] right-0 bottom-0 w-[259px] h-[309px] object-cover" src={simpleChairBackground} alt="background" draggable={false} aria-hidden />
              </div>
              <div className="flex-1 h-full">
                <h2 className="font-inter font-medium text-4xl text-[#35322F] capitalize pb-6">We Help You Make Modern Interior Design</h2>
                <p className="font-inter font-medium text-[16px] [line-height:_32px] text-[#87857D] max-w-[466px]">Designing your home shouldn&apos;t be complicated. Our curated collection of furniture and decor brings style, comfort, and personality into every room. From minimalist essentials to statement pieces, we help you build interiors that feel uniquely yours.</p>
                <ul className="list-image-(--my-marker) list-inside gap-5 grid grid-cols-1 md:grid-cols-2 md:max-w-[468px] pt-5 pb-12">
                  <li className="font-inter font-medium text-[16px] [line-height:_32px] text-[#87857D] md:max-w-[224px]">Carefully selected modern furniture for every space</li>
                  <li className="font-inter font-medium text-[16px] [line-height:_32px] text-[#87857D] md:max-w-[224px]">Durable materials built to last</li>
                  <li className="font-inter font-medium text-[16px] [line-height:_32px] text-[#87857D] md:max-w-[224px]">Seamless shopping and transparent delivery</li>
                  <li className="font-inter font-medium text-[16px] [line-height:_32px] text-[#87857D] md:max-w-[224px]">Style guidance to match your taste</li>
                </ul>
                <Link href='/about' className="py-3 px-8 bg-[#2F2F2F] hover:bg-[#6D6D6D] transition-all duration-300 cursor-pointer rounded-[100px] capitalize text-white font-inter font-semibold text-lg" >explore</Link>
              </div>
            </div>
            <div className="grid justify-items-center gap-x-[57px] gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <DisplayCard name="Nordic Chair" description="Minimal, elegant, and built for everyday comfort." image={nordicChair} />
              <DisplayCard name="Kruzo Chair" description="Sleek design with perfect balance and support." image={kruzoChair} />
              <DisplayCard name="Ergonomi Chair" description="Smart comfort for work and relaxation." image={ergonomiChair} />
            </div>
          </section>
          <Testimonials />
          <section className="pb-[282px]">
            <div className="flex flex-row justify-between items-center mb-16">
              <h3 className="text-[#2F2F2F] font-inter font-medium text-4xl capitalize">recent blog</h3>
              <Link href='/blog' className="capitalize cursor-pointer underline transition-all duration-300 hover:no-underline font-inter font-medium text-[16px] text-[#3D3C3A]" >view all posts</Link>
            </div>
            <div className="grid justify-items-center gap-x-6 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {BLOGS.slice(0,3).map(blog => <BlogCard key={blog.id} {...blog} />)}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;