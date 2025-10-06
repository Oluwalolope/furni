import HeroSection from "@/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furni | Our Services",
  description: "Our services at Furni",
};

const ServicesPage = () => {
    return (
        <>
            <HeroSection title="services" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />

            <main className="bg-background-main h-[60px]">
              services
            </main>
        </>
    );
}
 
export default ServicesPage;