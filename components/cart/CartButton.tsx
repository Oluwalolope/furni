'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const CartButton = () => {
    const path = usePathname();
    
    let cssClass ="text-white hover:text-[#F9BF29] transition-all";
    
    if (path === '/cart') {
        cssClass =" text-[#F9BF29] hover:text-[#F9BF29] transition-all";
        
    }


    return (
        <Link href='/cart'>
            <svg width="32" height="32" className={cssClass} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 29.3332C12.7362 29.3332 13.3332 28.7362 13.3332 27.9998C13.3332 27.2635 12.7362 26.6665 11.9999 26.6665C11.2635 26.6665 10.6665 27.2635 10.6665 27.9998C10.6665 28.7362 11.2635 29.3332 11.9999 29.3332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26.6668 29.3332C27.4032 29.3332 28.0001 28.7362 28.0001 27.9998C28.0001 27.2635 27.4032 26.6665 26.6668 26.6665C25.9304 26.6665 25.3335 27.2635 25.3335 27.9998C25.3335 28.7362 25.9304 29.3332 26.6668 29.3332Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.3335 1.3335H6.66684L10.2401 19.1868C10.3621 19.8007 10.696 20.3521 11.1835 20.7446C11.6711 21.137 12.2811 21.3455 12.9068 21.3335H25.8668C26.4925 21.3455 27.1026 21.137 27.5901 20.7446C28.0776 20.3521 28.4115 19.8007 28.5335 19.1868L30.6668 8.00016H8.00017" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Link>
    );
}
 
export default CartButton;