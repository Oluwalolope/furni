'use client';

import TESTIMONIALS, { Testimonial } from "@/data/testimonials";
import Image from "next/image";
import { useEffect, useState } from "react";


const TestimonialCard = ({name, testimony, profession, image}: Testimonial) => {
    return (
        <div className="max-w-[520px] mx-auto">
            <p className="max-w-[520px] text-[#87857D] text-[16px] [line-height:_32px] lg:text-[20px] font-inter font-medium text-center min-h-[160px]">{testimony}</p>

            <div className="mx-auto w-[210px] mt-8">
                <Image src={image} alt={name} className="size-[90px] rounded-full mx-auto object-fit" draggable={false}/>
                <p className="text-center font-inter text-[16px] font-semibold text-[#494949] pt-[18px] pb-2">{name}</p>
                <p className="text-center font-inter text-[16px] font-medium text-[#7B7C7B]">{profession}</p>
            </div>
        </div>
    );
}


const Testimonials = () => {
    const [testimonialIndex, setTestimonialIndex] = useState<number>(0);

    const handleTestimonialIndexChange = () => {
        setTestimonialIndex(prevTestimonialIndex => {
            let index = prevTestimonialIndex;
            const testimonialsLength = TESTIMONIALS.length - 1;
            
            if (index == testimonialsLength) {
                index = 0;
            } else {
                index++;
            }
            return index;
        });
    }

    useEffect(() => {
        const timer = setTimeout(handleTestimonialIndexChange , 3200);

        return () => clearTimeout(timer);
    } , [testimonialIndex]);

    const testimonial = TESTIMONIALS[testimonialIndex];
    return (
        <div className="mx-auto pb-[360px] px-4 md:px-6 lg:px-[138px]">
            <h3 className="text-center text-[#2F2F2F] font-inter font-medium text-2xl lg:text-4xl mb-12">Testimonials</h3>

            <article>
                <TestimonialCard  {...testimonial} />
            </article>
            
            <div className="w-[60px] h-[12px] flex flex-row justify-between mx-auto mt-16">
                <div onClick={() => setTestimonialIndex(0)} className={`cursor-pointer size-3 rounded-full ${ testimonialIndex == 0 ? 'bg-[#3B5D50]' : 'bg-[#D6D6D6]'}`} />
                <div onClick={() => setTestimonialIndex(1)} className={`cursor-pointer size-3 rounded-full ${ testimonialIndex == 1 ? 'bg-[#3B5D50]' : 'bg-[#D6D6D6]'}`} />
                <div onClick={() => setTestimonialIndex(2)} className={`cursor-pointer size-3 rounded-full ${ testimonialIndex == 2 ? 'bg-[#3B5D50]' : 'bg-[#D6D6D6]'}`} />
            </div>
        </div>
    );
}
 
export default Testimonials;