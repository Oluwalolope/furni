import logoDark from '@/assets/icons/logo-dark.svg';
import footerBackground from '@/assets/background/footer-background.png';
import Image from "next/image";
import Newsletter from "./footer/Newsletter";
import Link from 'next/link';
import SocialMediaIcons from './footer/SocialMediaIcons';

const Footer = () => {
    return (
        <div className="bg-background-footer">
            <footer className="w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px] pt-20 pb-5 relative">
                <Image src={footerBackground} alt="Footer Background" aria-hidden  className='absolute top-[-147px] right-0 scale-[0.65] object-fit hidden lg:block' draggable={false}/>

                <Newsletter />
                
                <Image src={logoDark} alt="Logo" className='mt-24 mb-8' priority/>

                <div className="mb-28 flex flex-col gap-16 lg:flex-row lg:gap-28">
                    <div>
                        <p className='font-inter font-medium text-lg text-[#87857D] max-w-[363px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        <SocialMediaIcons />
                    </div>

                    <div className='flex flex-wrap gap-[90px]'>
                        <ul className='flex flex-col gap-6'>
                            <li>
                                <Link href="/about" className='text-[#87857D] hover:text-[#3B5D50] text-lg capitalize transition-all duration-300'>about us</Link>
                            </li>
                            <li>
                                <Link href="/services" className='text-[#87857D] hover:text-[#3B5D50] text-lg capitalize transition-all duration-300'>services</Link>
                            </li>
                            <li>
                                <Link href="/blog" className='text-[#87857D] hover:text-[#3B5D50] text-lg capitalize transition-all duration-300'>blog</Link>
                            </li>
                            <li>
                                <Link href="/contact" className='text-[#87857D] hover:text-[#3B5D50] text-lg capitalize transition-all duration-300'>contact us</Link>
                            </li>
                        </ul>

                        <ul className='flex flex-col gap-6'>
                            <li>
                                <a href="#" className='text-[#87857D] hover:text-[#3B5D50] text-lg capitalize transition-all duration-300'>support</a>
                            </li>
                            <li>
                                <a href="#" className='text-[#87857D] hover:text-[#3B5D50] text-lg capitalize transition-all duration-300'>knowledge base</a>
                            </li>
                            <li>
                                <a href="#" className='text-[#87857D] hover:text-[#3B5D50] text-lg capitalize transition-all duration-300'>live chat</a>
                            </li>
                        </ul>

                        <ul className='flex flex-col gap-6'>
                            <li>
                                <a href="#" className='text-[#87857D] hover:text-[#3B5D50] text-lg capitalize transition-all duration-300'>jobs</a>
                            </li>
                            <li>
                                <a href="#" className='text-[#87857D] hover:text-[#3B5D50] text-lg capitalize transition-all duration-300'>our team</a>
                            </li>
                            <li>
                                <a href="#" className='text-[#87857D] hover:text-[#3B5D50] text-lg capitalize transition-all duration-300'>leadership</a>
                            </li>
                            <li>
                                <a href="#" className='text-[#87857D] hover:text-[#3B5D50] text-lg capitalize transition-all duration-300'>privacy policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='py-4 border-0 border-t border-border'>
                    <p className='text-[#7F7D7C] font-inter font-medium'>Copyright &copy;{new Date().getFullYear()}. All Rights Reserved. Designed by <a href="https://www.linkedin.com/in/ogutuga-victor-238279283" target="_blank" rel="noopener noreferrer" className='text-[#3B5D50] hover:underline'>Victor</a> and built by <a href="https://oluwalolope-adeleye.vercel.app" target="_blank" rel="noopener noreferrer" className='text-[#3B5D50] hover:underline'>Oluwalolope</a></p>
                </div>
            </footer>
        </div>
    );
}
 
export default Footer;