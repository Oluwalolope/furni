import { StaticImageData } from "next/image";

import testimonialsImageOne from '@/assets/testimonials/testimo⁮nial-image-one.png';
import testimonialsImageTwo from '@/assets/testimonials/testimonial-image-two.png';
import testimonialsImageThree from '@/assets/testimonials/testimonial-image-three.png';

export type Testimonial = {
    id: string,
    name: string,
    testimony: string,
    profession: string,
    image: StaticImageData
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 't1',
        name: 'Daniel Okoye',
        testimony: 'Solid products and no-nonsense checkout. The Kruzo Aero Chair is worth every penny — stylish and very durable.',
        profession: 'Architect',
        image: testimonialsImageOne
    },
    {
        id: 't2',
        name: 'Amaka Johnson',
        testimony: 'Absolutely love my new Nordic chair — super comfy and it arrived faster than expected. The packaging was perfect too.',
        profession: 'Interior Designer',
        image: testimonialsImageTwo
    },
    {
        id: 't3',
        name: 'Sara Bello',
        testimony: 'Furni made decorating my apartment so easy. Great quality, clear delivery updates, and excellent customer support.',
        profession: 'Lifestyle Blogger',
        image: testimonialsImageThree
    },
];

export default TESTIMONIALS;