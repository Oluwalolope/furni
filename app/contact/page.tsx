import HeroSection from "@/components/HeroSection";
import type { Metadata } from "next";
import Image from "next/image";
import locationIcon from '@/assets/icons/location-icon.svg';
import mailIcon from '@/assets/icons/mail-icon.svg';
import phoneIcon from '@/assets/icons/phone-icon.svg';
import Form from "@/components/Form";

export const metadata: Metadata = {
  title: "Furni | Contact us",
  description: "Contact Us at Furni",
};

const ContactPage = () => {
    return (
        <>
            <HeroSection title="contact us" description="Have a question or need help with your order? Get in touch — we’re here to assist you anytime." />

            <div className="bg-background-main">
              <main className="w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px]">
                <div className="flex flex-col md:flex-row justify-between gap-12 mx-auto py-[88px]">
                  <div className="flex flex-row items-center gap-5">
                      <div className="inline-grid place-items-center size-14 rounded-[10px] bg-[#3B5D50]">
                        <Image src={locationIcon} alt="location icon" aria-hidden />
                      </div>
                      <p className="font-inter text-[#6A6A6A] text-lg font-medium capitalize">ikoyi, lagos</p>
                  </div>
                  <div className="flex flex-row items-center gap-5">
                      <div className="inline-grid place-items-center size-14 rounded-[10px] bg-[#3B5D50]">
                        <Image src={mailIcon} alt="mail icon" aria-hidden />
                      </div>
                      <p className="font-inter text-[#6A6A6A] text-lg font-medium">contact@furni.com</p>
                  </div>
                  <div className="flex flex-row items-center gap-5">
                      <div className="inline-grid place-items-center size-14 rounded-[10px] bg-[#3B5D50]">
                        <Image src={phoneIcon} alt="phone icon" aria-hidden />
                      </div>
                      <p className="font-inter text-[#6A6A6A] text-lg font-medium">+234 111 111 1111</p>
                  </div>
                </div>
                <Form>
                  <div className="flex flex-col md:flex-row gap-6 w-full">
                    <div className="flex flex-col flex-1">
                      <label htmlFor="firstName" className="font-inter font-medium text-[16px] capitalize text-[#2F2F2F] mb-3">first name</label>
                      <input type="text" id="firstName" name="firstName" className="w-full h-[55px] p-5 border border-[#CED4DA] hover:border-[#515151] focus:border-[#515151] transition-all duration-300 rounded-xl bg-white" required/>
                    </div>
                    <div className="flex flex-col flex-1">
                      <label htmlFor="lastName" className="font-inter font-medium text-[16px] capitalize text-[#2F2F2F] mb-3">last name</label>
                      <input type="text" id="lastName" name="lastName" className="w-full h-[55px] p-5 border border-[#CED4DA] hover:border-[#515151] focus:border-[#515151] transition-all duration-300 rounded-xl bg-white" required/>
                    </div>
                  </div>
                    <div className="flex flex-col flex-1 mt-8">
                      <label htmlFor="email" className="font-inter font-medium text-[16px] capitalize text-[#2F2F2F] mb-3">email address</label>
                      <input type="email" id="email" name="email" className="w-full h-[55px] p-5 border border-[#CED4DA] hover:border-[#515151] focus:border-[#515151] transition-all duration-300 rounded-xl bg-white"  required/>
                    </div>
                    <div className="flex flex-col flex-1 mt-8 mb-14">
                      <label htmlFor="message" className="font-inter font-medium text-[16px] capitalize text-[#2F2F2F] mb-3">message</label>
                      <textarea  id="message" name="message" className="w-full min-h-[200px] p-5 border border-[#CED4DA] hover:border-[#515151] focus:border-[#515151] transition-all duration-300 rounded-xl bg-white" required/>
                    </div>
                </Form>
              </main>
            </div>
        </>
    );
}
 
export default ContactPage;