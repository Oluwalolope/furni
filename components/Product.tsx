'use client';

import { motion } from 'framer-motion';
import type { Product } from "@/data/products";
import plusIcon from '@/assets/icons/plus-icon.svg';
import currencyFormatter from "@/util/formatting";
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/store/cart-context-provider';


const Product = ({id , name, price, image}: Product) => {
    const [isTapped, setIsTapped] = useState<boolean>(false);
    const [isAddButtonPressed, setIsAddButtonPressed] = useState<boolean>(false);
    const cartCtx = useContext(CartContext);

    const handleAddButtonClick = (id: string) => {
        setIsAddButtonPressed(true);
        cartCtx.handleAddItemToCart(id);
    };
    
    // Turn the check icon to a plus icon, one second after the user adds to cart
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAddButtonPressed(false);
        }, 1000)

        return () => clearTimeout(timer);
    }, [isAddButtonPressed])
    
    const handleTap = () => {
        // The tap only works on mobile and tablet
        if (innerWidth <= 1024) {
            setIsTapped(prev => !prev);
        }
    }

    const imageAnimation = {
        initial: {y: 0},
        hover: {y: -25},
        transition: {
            duration: 0.3,
            type: 'spring',
            stiffness: 0
        }
    };
    
    const containerAnimation = {
        hover: {
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        }
    };
    
    const buttonAnimation = {
        initial: {opacity: 0, y: -30},
        hover: {opacity: 1, y: 0},
        transition: {
            duration: 0.3,
            type: 'spring',
            stiffness: 0
        }
    };
    return (
        <motion.article initial= 'initial' whileHover= 'hover' animate={isTapped? 'hover': ''} onTap={handleTap}  className="group relative h-[290px] mx-auto flex flex-col justify-end cursor-pointer">
            <motion.img variants={imageAnimation}  src={image.src} alt={name} className="absolute -top-[118px]" />

            <motion.div variants={containerAnimation}  className={`rounded-[20px] group-hover:bg-[#DCE5E4] ${isTapped ? 'bg-[#DCE5E4]' : ''} min-w-[240px] max-w-[290px] h-[264px] flex flex-col items-center justify-end`}>
                <h5 className="font-inter font-medium text-lg text-[#34312F] capitalize pb-1">{name}</h5>
                <p className="font-inter font-semibold text-[22px] text-[#34312F] pb-14">{currencyFormatter.format(price)}</p>

                <motion.button onClick={() => handleAddButtonClick(id) } variants={buttonAnimation}  className="size-12 rounded-full bg-[#2F2F2F] inline-grid place-items-center absolute -bottom-6 cursor-pointer">
                    {!isAddButtonPressed && <img src={plusIcon.src} alt="add to cart" className="size-12" draggable={false}/>}
                    {isAddButtonPressed && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#ffffff" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>}
                </motion.button>
            </motion.div>
        </motion.article>
    );
}
 
export default Product;