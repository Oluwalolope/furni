import ergonomiChair from '@/assets/products/ergonomi-chair.png';
import kruzoChair from '@/assets/products/kruzo-chair.png';
import nordicChair from '@/assets/products/nordic-chair.png';
import armChair from '@/assets/products/arm-chair.png';
import leatherChair from '@/assets/products/leather-chair.png';
import { StaticImageData } from 'next/image';

export type Product = {
    id: string,
    name: string,
    price: number,
    image: StaticImageData
}

//the prices are in USD it will be formatted using the helper function in the util folder

const PRODUCTS: Product[] = [
    {
        id: 'p1',
        name: 'nordic chair',
        price: 50,
        image: nordicChair
    },
    {
        id: 'p2',
        name: 'kruzo chair',
        price: 78,
        image: kruzoChair
    },
    {
        id: 'p3',
        name: 'ergonomi chair',
        price: 44,
        image: ergonomiChair
    },
    {
        id: 'p4',
        name: 'arm chair',
        price: 81,
        image: armChair
    },
    {
        id: 'p5',
        name: 'leather chair',
        price: 62,
        image: leatherChair
    }
];

export default PRODUCTS;