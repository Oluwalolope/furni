'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const UserButton = () => {
    const path = usePathname();
    
    let cssClass ="text-white hover:text-[#F9BF29] transition-all";
    
    // if (path === '/cart') {
    //     cssClass =" text-[#F9BF29] hover:text-[#F9BF29] transition-all";
        
    // }


    return (
        <Link href='#'>
            <svg width="32" height="32" className={cssClass} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.6668 28V25.3333C26.6668 23.9188 26.1049 22.5623 25.1047 21.5621C24.1045 20.5619 22.748 20 21.3335 20H10.6668C9.25235 20 7.8958 20.5619 6.8956 21.5621C5.89541 22.5623 5.3335 23.9188 5.3335 25.3333V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.9999 14.6667C18.9454 14.6667 21.3332 12.2789 21.3332 9.33333C21.3332 6.38781 18.9454 4 15.9999 4C13.0543 4 10.6665 6.38781 10.6665 9.33333C10.6665 12.2789 13.0543 14.6667 15.9999 14.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Link>
    );
}
 
export default UserButton;