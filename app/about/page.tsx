import HeroSection from "@/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furni | About Us",
  description: "About us at Furni",
};

const AboutPage = () => {
    return (
        <>
            <HeroSection title="about us" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />
            
            <main className="bg-background-main h-[60px]">
              about
            </main>
        </>
    );
}
 
export default AboutPage;