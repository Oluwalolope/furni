import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";
import shippingIcon from '@/assets/icons/why-choose-us/shipping-icon.png';
import shoppingIcon from '@/assets/icons/why-choose-us/shopping-icon.png';
import customerSupportIcon from '@/assets/icons/why-choose-us/customer-support-icon.png';
import noHassleIcon from '@/assets/icons/why-choose-us/no-hassle-icon.png';
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Furni | Our Services",
  description: "Our services at Furni",
};

const ServicesPage = () => {
    return (
        <>
            <HeroSection title="services" description="We offer a range of interior design and furniture solutions — from space planning to custom designs — all crafted to fit your style and lifestyle." />

            <div className="bg-background-main">
              <main className="w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px]">
                <div className="justify-items-center lg:flex-row py-[185px] items-start gap-x-5 gap-y-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  w-full max-w-[1236px] mx-auto">
                      <ServiceCard image={shippingIcon} title="Fast & Free Shipping" description="Enjoy quick, free delivery on all orders — no hidden fees, no long waits. Your furniture arrives safely and right on time." />
                      <ServiceCard image={shoppingIcon} title="Easy to Shop" description="Our store is built for simplicity. Browse, compare, and order your favorite pieces in just a few clicks." />
                      <ServiceCard image={customerSupportIcon} title="24/7 Support" description="Have a question? Our friendly support team is available day and night to help with orders, product details, or returns." />
                      <ServiceCard image={noHassleIcon} title="Hassle Free Returns" description="If something isn’t quite right, returning your order is easy. We make exchanges and refunds simple, fast, and stress-free." />
                  </div>
                <ProductShowcase />
                <Testimonials />
              </main>
            </div>
        </>
    );
}
 
export default ServicesPage;