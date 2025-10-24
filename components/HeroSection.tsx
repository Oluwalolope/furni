import heroBackground from '@/assets/background/hero-background.png';
import heroBackgroundPattern from '@/assets/background/Small-Circles-pattern.svg';
import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string,
    description?: string
}

const HeroSection = ({title, description}: Props) => {
    return (
        <div className="bg-background-header pt-[132px]">            <div className="flex flex-col justify-start w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px] pb-44 relative">
                <h1 className="capitalize font-bold font-inter [font-size:clamp(1.5rem,_0.9718rem_+_2.2535vw,_3rem)] max-w-[520px] text-white">{title}</h1>
                { (title != 'shop' && title != 'cart' )  && <div>
                    <p className="pt-7 pb-9 max-w-[520px] text-[#94A7A0] font-inter font-medium">{description}</p>
                    <div className="flex flex-row gap-2.5">
                        <Link href='/' className="py-1.5 px-4 lg:py-3 lg:px-8 bg-[#F9BF29] hover:bg-[#FFD057] transition-all duration-300 cursor-pointer rounded-[100px] capitalize text-[#2F2F2F] font-inter font-semibold  text-lg" >shop now</Link>

                        <Link href='/' className="py-1.5 px-4 lg:py-3 lg:px-8 border border-[#94A7A0] hover:border-white transition-all duration-300 cursor-pointer rounded-[100px] text-white font-inter font-semibold text-lg capitalize" >Explore</Link>
                    </div>

                </div>}
                    { (title != 'shop' && title != 'cart' ) && 
                        <>
                            <Image src={heroBackgroundPattern} alt="Hero Background pattern" aria-hidden  className='scale-[0.7] absolute right-8 bottom-38 opacity-30 hidden lg:block' draggable={false}/>
                            <Image src={heroBackground} alt="Hero Background" aria-hidden  className='w-[603px] h-[434px] absolute -bottom-10 right-0 hidden lg:block' draggable={false}/>
                        </>
                    }
            </div>
        </div>
    );
}
 
export default HeroSection;