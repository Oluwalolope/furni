import ServiceCard from "./ServiceCard";
import shippingIcon from '@/assets/icons/why-choose-us/shipping-icon.png';
import shoppingIcon from '@/assets/icons/why-choose-us/shopping-icon.png';
import customerSupportIcon from '@/assets/icons/why-choose-us/customer-support-icon.png';
import noHassleIcon from '@/assets/icons/why-choose-us/no-hassle-icon.png';
import Image from "next/image";
import whyChooseUsBackground from '@/assets/background/why-choose-us-background.png';
import backgroundPattern from '@/assets/background/Small-Circles.png';

const WhyChooseUs = () => {
    return (
        <section className="py-[192px] flex flex-row gap-5 justify-between items-end">
            <div>
                <h2 className="font-inter font-medium text-4xl text-[#35322F] capitalize pb-3">why choose us</h2>
                <p className="font-inter font-medium text-[16px] [line-height:_32px] text-[#87857D] max-w-[492px]">We make furniture shopping simple, fast, and worry-free. Here’s why customers love Furni:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center pt-[54px] gap-x-12 gap-y-9 w-full max-w-[636px] mx-auto">
                    <ServiceCard image={shippingIcon} title="Fast & Free Shipping" description="Enjoy quick, free delivery on all orders — no hidden fees, no long waits. Your furniture arrives safely and right on time." />

                    <ServiceCard image={shoppingIcon} title="Easy to Shop" description="Our store is built for simplicity. Browse, compare, and order your favorite pieces in just a few clicks." />

                    <ServiceCard image={customerSupportIcon} title="24/7 Support" description="Have a question? Our friendly support team is available day and night to help with orders, product details, or returns." />

                    <ServiceCard image={noHassleIcon} title="Hassle Free Returns" description="If something isn’t quite right, returning your order is easy. We make exchanges and refunds simple, fast, and stress-free." />
                </div>
            </div>

            <div className="hidden lg:block" >
                <div className="relative">
                    <Image src={backgroundPattern} alt="Hero Background pattern" aria-hidden  className='absolute -top-[110px] -left-[90px] scale-[0.6]' draggable={false}/>
                    <Image src={whyChooseUsBackground} alt="why choose us background" aria-hidden className="relative z-20 rounded-[26px] scale-[0.9] w-[504px] h-[574px] object-fill" draggable={false}/>
                </div>
            </div>
        </section>
    );
}
 
export default WhyChooseUs;