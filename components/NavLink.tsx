'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
    href: string;
    children: React.ReactNode
}

const NavLink = ({href, children}: props) => {
    const path = usePathname();


    let cssClass ="font-inter text-[#94A7A0] text-xl lg:text-[18px] font-normal capitalize after:ease-spring relative w-max transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:origin-right after:scale-x-0 after:bg-[#F9BF29] after:opacity-80 after:transition-transform after:duration-500 after:content-[] hover:text-white hover:after:origin-bottom-left hover:after:scale-x-100";
    
    if (path === '/'  && path === href ) {
        cssClass ="font-inter font-semibold text-white text-xl lg:text-[18px] font-normal after:ease-spring relative w-max transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:origin-right after:scale-x-0 after:bg-[#F9BF29] after:opacity-80 after:transition-transform after:duration-500 after:content-[''] text-white after:origin-bottom-left after:scale-x-100 capitalize";
        
    }
    if (path.startsWith(href)  && href != '/' ) {
        cssClass ="font-inter font-semibold text-color-foreground text-xl lg:text-[18px] font-normal after:ease-spring relative w-max transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:origin-right after:scale-x-0 after:bg-[#F9BF29] after:opacity-80 after:transition-transform after:duration-500 after:content-[''] text-white after:origin-bottom-left after:scale-x-100 capitalize";
    }

    return (
        <Link href={href} className={cssClass}>{children}</Link>
    );
}
 
export default NavLink;