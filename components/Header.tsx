'use client';

import logo from '@/assets/icons/logo.svg';
import Image from "next/image";
import Link from "next/link";
import NavLink from './NavLink';
import CartButton from './cart/CartButton';
import UserButton from './profile/UserButton';
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";




const NAV_ITEMS = [
    { name: 'home', href: '/'},
    { name: 'shop', href: '/shop'},
    { name: 'about us', href: '/about'},
    { name: 'services', href: '/services'},
    { name: 'blog', href: '/blog'},
    { name: 'contact us', href: '/contact'},
];

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState<Boolean>(false);

    // Adding the logic to hide the nav when the user is scrolling down and show it when the user is scrolling up
    const [isUserScrollingDown, setIsUserScrollingDown] = useState<Boolean>(false);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latestY) => {
        const previousY = scrollY.getPrevious();
        if (latestY > previousY! && latestY > 250) {
            setIsUserScrollingDown(true);
        } else {
            setIsUserScrollingDown(false);
        }
    });

    const handleClick = () => {
        setIsMobileNavOpen(prev => !prev);
    }
    return (
        <motion.div
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' }
            }}
            animate={(!isMobileNavOpen && isUserScrollingDown) ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut'}}
         className='bg-background-header sticky top-0 z-[200]'>
            <header className='flex flex-row justify-between items-center w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px] pt-16 pb-5 relative'>
                <Link href="/" >
                    <Image src={logo} alt="Furni logo" />
                </Link>

                <nav className='hidden lg:block'>
                    <ul className='flex flex-row justify-between w-[520px] items-center'>
                        {NAV_ITEMS.map((item, index) =>
                            <NavLink key={index} href={item.href}>
                                <li>{item.name}</li>
                            </NavLink>
                        )}
                    </ul>
                </nav>
                
                <div className='flex flex-row gap-4 md:gap-8 items-center'>
                    <UserButton />
                    <CartButton />
                    
                    <button type="button" className="p-2 border border-[#808080]/[0.7] rounded-md  transition-all lg:hidden" onClick={handleClick}>
                        { !isMobileNavOpen && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>}
                        { isMobileNavOpen && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>}
                    </button>
                </div>

                <AnimatePresence>
                    {isMobileNavOpen && 
                    <motion.nav initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="absolute bg-background-header w-full [min-height:_calc(100dvh_-_115px)] top-[115px] flex flex-col gap-10 left-0 lg:hidden z-50">
                        <ul className="flex flex-col gap-8 items-center pt-10 ps-4 lg:hidden">
                            {NAV_ITEMS.map((item, index) =>
                                <NavLink key={index} href={item.href}>
                                    <li onClick={handleClick} >{item.name}</li>
                                </NavLink>
                            )}
                        </ul>
                    </motion.nav>
                    }
                </AnimatePresence>

            </header>
        </motion.div>
    );
}
 
export default Header;