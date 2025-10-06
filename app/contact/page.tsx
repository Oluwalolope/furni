import HeroSection from "@/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furni | Contact us",
  description: "Contact Us at Furni",
};

const ContactPage = () => {
    return (
        <>
            <HeroSection title="contact us" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />

            <main className="bg-background-main h-[60px]">
              contact us
            </main>
        </>
    );
}
 
export default ContactPage;