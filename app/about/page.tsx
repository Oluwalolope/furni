import HeroSection from "@/components/HeroSection";
import TeamMembers from "@/components/TeamMembers";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furni | About Us",
  description: "About us at Furni",
};

const AboutPage = () => {
    return (
        <>
            <HeroSection title="about us" description="Furni creates modern, affordable furniture designed for comfort, style, and everyday living." />
            
            <div className="bg-background-main">
              <main className="w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px]">
                <WhyChooseUs />
                <TeamMembers />
                <Testimonials />
              </main>
            </div>
        </>
    );
}
 
export default AboutPage;