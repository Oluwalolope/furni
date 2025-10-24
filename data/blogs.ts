import { StaticImageData } from "next/image"

import blogImageOne from '@/assets/blogs/blog-one.png';
import blogImageTwo from '@/assets/blogs/blog-two.png';
import blogImageThree from '@/assets/blogs/blog-three.png';
import blogImageFour from '@/assets/blogs/blog-four.png';
import blogImageFive from '@/assets/blogs/blog-five.png';
import blogImageSix from '@/assets/blogs/blog-six.png';
import blogImageSeven from '@/assets/blogs/blog-seven.png';
import blogImageEight from '@/assets/blogs/blog-eight.png';
import blogImageNine from '@/assets/blogs/blog-nine.png';
import { i } from "framer-motion/client";

export type Blog = {
    id: string,
    image: StaticImageData,
    slug: string,
    title: string,
    author: string,
    date: string
}

const BLOGS: Blog[] = [
    {
        id: 'b1',
        image: blogImageOne,
        slug: '/blog/10-tips-for-designing-a-cozy-living-room',
        title: '10 Tips for Designing a Cozy Living Room',
        author: 'Ada Johnson',
        date: 'Oct 15, 2024'
    },
    {
        id: 'b2',
        image: blogImageTwo,
        slug: '/blog/choosing-the-perfect-chair-for-your-workspace',
        title: 'Choosing the Perfect Chair for Your Workspace',
        author: 'Michael Adeyemi',
        date: 'Oct 11, 2024'
    },
    {
        id: 'b3',
        image: blogImageThree,
        slug: '/blog/how-to-mix-modern-and-rustic-decor',
        title: 'How to Mix Modern and Rustic Decor',
        author: 'Grace Bello',
        date: 'Oct 5, 2024'
    },
    {
        id: 'b4',
        image: blogImageFour,
        slug: '/blog/small-space-furniture-ideas-that-work',
        title: 'Small Space Furniture Ideas That Work',
        author: 'Daniel Okoro',
        date: 'Oct 9, 2024'
    },
    {
        id: 'b5',
        image: blogImageFive,
        slug: '/blog/top-interior-design-trends-for-2024',
        title: 'Top Interior Design Trends for 2024',
        author: 'Chioma Fatai',
        date: 'Oct 13, 2024'
    },
    {
        id: 'b6',
        image: blogImageSix,
        slug: '/blog/creating-a-minimalist-home-that-feels-warm',
        title: 'Creating a Minimalist Home That Feels Warm',
        author: 'Ibrahim Sule',
        date: 'Oct 7, 2024'
    },
    {
        id: 'b7',
        image: blogImageSeven,
        slug: '/blog/the-art-of-pairing-furniture-colors',
        title: 'The Art of Pairing Furniture Colors',
        author: 'Halima Yusuf',
        date: 'Oct 10, 2024'
    },
    {
        id: 'b8',
        image: blogImageEight,
        slug: '/blog/sustainable-materials-for-modern-homes',
        title: 'Sustainable Materials for Modern Homes',
        author: 'Tosin Bello',
        date: 'Oct 18, 2024'
    },
    {
        id: 'b9',
        image: blogImageNine,
        slug: '/blog/how-lighting-transforms-your-interior-space',
        title: 'How Lighting Transforms Your Interior Space',
        author: 'Emeka Nwachukwu',
        date: 'Oct 20, 2024'
    }
];

export default BLOGS;

// <h2 class="font-inter font-semibold text-3xl text-[#2F3134] mb-6">10 Tips for Designing a Cozy Living Room</h2>
export const BLOG_ARTICLES = [
    {
        id: 'b1',
        image: blogImageOne,
        content: `
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">A cozy living room goes beyond stylish furniture — it&apos;s about creating an atmosphere that comforts, welcomes, and reflects who you are. Whether you live in a small apartment or a spacious home, a few smart design decisions can make any living space feel like a warm embrace.</p>
            <ul class="list-decimal list-inside font-inter font-normal text-lg text-[#4B4B4B] mb-4">
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Choose warm colors for your walls and furniture.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Earth tones, muted greens, and creamy neutrals evoke calm and serenity. Colors like terracotta, beige, or sage help create an inviting foundation that doesn’t overwhelm.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Layer textures.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Texture adds depth and comfort. Pair soft throws with velvet cushions or woven rugs. A combination of fabrics — cotton, wool, jute — brings tactile warmth and visual interest.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Soften your lighting.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Harsh overhead bulbs make a room feel sterile. Instead, mix floor lamps, wall sconces, and table lamps. Use warm-toned bulbs to achieve a cozy evening glow.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Incorporate natural elements.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Wood, rattan, and plants help a space feel grounded. Even a small potted plant or wooden coffee table can connect your interior to nature.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Personalize with decor.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Display family photos, souvenirs, or artwork that tells your story. Personal touches make spaces feel lived-in and authentic.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Choose comfortable seating.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Opt for plush sofas, rounded armchairs, and deep cushions that invite you to sit back and relax. Comfort is key to coziness.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Add layers with rugs.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            A soft rug underfoot adds warmth and helps define spaces within larger rooms.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Use scent to set the mood.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Candles, diffusers, or incense in scents like sandalwood or vanilla can instantly make a space feel more welcoming.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Keep clutter under control.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            A tidy space helps the mind relax. Use baskets or ottomans with storage to keep things organized.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Let the room evolve.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            A cozy space should feel personal, not perfect. Add items gradually that mean something to you. Over time, your living room becomes a reflection of your journey.
                        </p>
                    </div>
                </li>
            </ul>
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mt-10">With these tips, you can transform any living room into a cozy haven that welcomes you home. It&apos;s about more than just furniture — it&apos;s creating a space that feels like a warm hug at the end of the day.</p>
            `
    },
    {        id: 'b2',
        image: blogImageTwo,
        content: `
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">Creating a comfortable and supportive workspace starts with choosing the right chair. With so many options available, it can be overwhelming to find the perfect fit for your needs. Here are some key factors to consider when selecting a chair for your workspace:</p>
            <ul class="list-none list-inside font-inter font-normal text-lg text-[#4B4B4B] mb-4">
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Start with ergonomics.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            A good ergonomic chair supports the natural curve of your spine, especially the lower back. Look for adjustable lumbar support, height control, and tilt mechanisms. Sitting correctly for long hours reduces fatigue and prevents strain.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Material matters.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Mesh chairs allow airflow and are ideal for warm climates, while leather adds sophistication and durability. Fabric chairs feel cozy but may require more cleaning. Choose what complements both comfort and style.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Consider your work habits.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            If you move around frequently, a swivel base or wheels offer flexibility. Stationary chairs suit calm, static environments and often have a minimalist appeal.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Armrests and cushioning.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Adjustable armrests reduce shoulder tension, while well-padded seats prevent discomfort. Ensure cushioning is firm enough to provide support over time.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Style and space.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Your chair should harmonize with your workspace. For modern desks, sleek metal or mesh designs fit perfectly. Wooden or upholstered options work well in more traditional settings.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Test before buying.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Every body is different. If possible, test several chairs for at least 10 minutes each. If ordering online, check user reviews that focus on comfort after weeks of use, not just initial impressions.
                        </p>
                    </div>
                </li>
            </ul>

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mt-10">A chair isn’t just furniture — it’s an investment in your performance and well-being. The perfect one will keep you comfortable, aligned, and inspired to create your best work daily.</p> 
            <br />
            <p class="font-inter font-normal text-lg text-[#4B4B4B]">By considering ergonomics, materials, work habits, and style, you can find a chair that enhances both your comfort and productivity. Investing in the right chair is investing in your well-being during long workdays.</p> 
        `
    },
    {   
        id: 'b3',
        image: blogImageThree,
        content: `
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">At first glance, modern and rustic design seem like polar opposites — one emphasizes clean lines and simplicity, the other warmth and texture. Yet when combined, they create a timeless aesthetic that balances comfort with sophistication.</p>
            <ul class="list-none list-inside font-inter font-normal text-lg text-[#4B4B4B] mb-4">
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    The foundation: neutral tones.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Start with whites, grays, and earth shades. These calm colors let both modern and rustic elements shine without clashing.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Contrast is key.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Pair a sleek modern sofa with a reclaimed wood coffee table, or suspend minimalist lighting above a rough wooden dining table. This interplay of polished and raw creates visual depth.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Add texture intentionally.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Rustic decor thrives on imperfection — weathered wood, brick, linen, and jute bring character. In contrast, modern elements like metal or glass keep the space clean and balanced.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Don’t overcrowd.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Modern design values simplicity. Limit rustic details to a few key features — a wooden beam, vintage mirror, or woven basket. Quality over quantity keeps harmony.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Blend materials naturally.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                           Black steel, bronze, and matte finishes tie both worlds together. Use them in fixtures, handles, or frames.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Layer with light.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Warm bulbs highlight rustic tones, while white light emphasizes modern minimalism. Use both strategically across zones.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Personalize the space.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Modern-rustic decor works best when it feels lived-in. Display handmade ceramics, heirloom pieces, or nature-inspired art.
                        </p>
                    </div>
                </li>
            </ul>

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mt-10">This fusion creates spaces that feel fresh yet familiar — the best of both worlds where simplicity meets soul.</p>  
        `
    },
    {   
        id: 'b4',
        image: blogImageFour,
        content: `
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">Decorating a small home is an art of balance — finding comfort and beauty without overcrowding. Smart furniture choices can completely transform how you experience space.</p>
            <ul class="list-none list-inside font-inter font-normal text-lg text-[#4B4B4B] mb-4">
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Go multifunctional.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            A bed with drawers underneath or a foldable desk can maximize your square footage. Convertible furniture makes every inch count.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Think vertical.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Tall shelving and hanging storage free up the floor. Floating wall units and mounted desks create an illusion of space.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Light and mirrors are your allies.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                           Soft, neutral colors reflect light and open up a room. Mirrors placed strategically make tight areas feel double their size.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Slim silhouettes.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Choose pieces with exposed legs and clean lines. Bulky furniture eats visual space, while slender ones keep rooms airy.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Zoning with rugs and lighting.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                           Even small apartments benefit from defined spaces. Use rugs to mark the living area and pendant lights to distinguish the dining corner.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Hidden storage solutions.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                           Ottomans, benches, and coffee tables with compartments help hide clutter and keep the aesthetic clean.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Minimalism over excess.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Keep only what you need. Fewer, smarter pieces make small spaces feel peaceful and intentional.
                        </p>
                    </div>
                </li>
            </ul>

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mt-10">When designed thoughtfully, even the smallest homes can radiate spaciousness, functionality, and charm.p>  
        `
    },
    {   
        id: 'b5',
        image: blogImageFive,
        content: `
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">2024 brings a new wave of design trends — a blend of sustainability, personality, and wellness. Homes are evolving into reflections of who we are and how we live.</p>
            <ul class="list-none list-inside font-inter font-normal text-lg text-[#4B4B4B] mb-4">
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Warm minimalism.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Clean lines meet cozy textures. Warm beiges, olive greens, and clay tones replace stark whites to create a soothing, earthy vibe.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Sustainable design.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Eco-conscious living takes center stage. Expect furniture made from reclaimed wood, bamboo, cork, and natural fabrics.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Curves and organic shapes.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                          Curved sofas, round mirrors, and arched doorways soften interiors and make them more inviting.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Personal storytelling.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                           Designers are moving away from perfection and embracing personality — combining vintage finds with new pieces that tell individual stories.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Biophilic elements.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                           Indoor plants, water features, and natural stone bring freshness and harmony to modern spaces.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Smart furniture.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                           With small-space living on the rise, modular furniture that adapts to changing needs is trending — a perfect balance between tech and comfort.
                        </p>
                    </div>
                </li>
            </ul>

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mt-10">2024’s design philosophy is clear: create a home that’s as sustainable as it is soulful, blending comfort with creativity.</p>
        `
    },
    {   
        id: 'b6',
        image: blogImageSix,
        content: `
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">Minimalism doesn’t mean stark white rooms and empty shelves — it means living with intention and comfort. The challenge is making minimal spaces feel warm and human.</p>

            <br/>
            <br/>

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">Start with <strong>decluttering mindfully</strong>. Keep only what adds function or meaning. Each piece should earn its place</p>

            <ul class="list-none list-inside font-inter font-normal text-lg text-[#4B4B4B] mb-4">
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Color and texture matter.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Layer creamy whites, taupes, and soft grays with wood, linen, and wool. These materials add quiet richness without visual clutter.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Play with light.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                           Natural light enhances minimalism. Let it flow freely through sheer curtains, and complement it with soft, diffused lamps in the evening.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Comfort through texture.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                          Combine structured furniture with cozy accessories — a plush rug, woven basket, or soft throw makes simplicity feel inviting.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Add organic life.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                           Plants introduce imperfection, color, and energy — essential in a clean space.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Focus on craftsmanship.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                           Quality materials like oak, ceramic, or stone elevate simplicity into elegance.
                        </p>
                    </div>
                </li>
            </ul>

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mt-10">Minimalism with warmth celebrates calm and clarity — not emptiness, but essence.</p>
        `
    },
    {   
        id: 'b7',
        image: blogImageSeven,
        content: `
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">Color can define how a room feels — cheerful, calm, or luxurious. But pairing furniture colors takes both creativity and restraint.</p>

            <br/>

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">Start with a <strong>base color</strong> — often a neutral like beige, gray, or white. Then build on it with a <strong>secondary tone</strong> for balance and a <strong>third accent color</strong> for vibrance.</p>
            
            <br />
            
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">For example, beige walls, walnut furniture, and olive cushions create warmth and sophistication.</p>

            <ul class="list-none list-inside font-inter font-normal text-lg text-[#4B4B4B] mb-4">
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Contrast is your friend.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                            Light furniture pops against dark floors, while dark sofas feel cozy against bright walls.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Texture enhances tone.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                           A matte wooden table, velvet cushions, and woven throws make color feel multidimensional.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Test under lighting.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                          Natural daylight and evening bulbs can change how colors appear — always check both.
                        </p>
                    </div>
                </li>
            </ul>

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mt-10">Finally, let your personality shine. Whether bold or muted, your palette should tell your story.</p>
        `
    },
    {   
        id: 'b8',
        image: blogImageEight,
        content: `
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">Eco-friendly interiors are more than a movement — they’re a necessity. Sustainable design blends aesthetics with responsibility, proving that conscious living can be stylish.</p>

            <br/>

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4"><strong>Reclaimed wood</strong> is a cornerstone of green design. Each piece carries history and texture while reducing waste.</p>
            
            <br />
            
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4"><strong>Bamboo and cork</strong> grow rapidly and are perfect for flooring and furniture. Their versatility and renewability make them modern design favorites.</p>
            
            <br />

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4"><strong>Recycled metals</strong> like aluminum and steel offer durability and shine without harming the planet.</p>

            <br />

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4"><strong>Natural textiles</strong> such as organic cotton, hemp, and linen replace synthetics, promoting healthier indoor air.</p>

            <br />
            
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">Even <strong>recycled glass</strong> now features in countertops and decor, giving homes a light, modern touch.</p>

            <br />
            
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mt-10">Designing sustainably doesn’t mean sacrificing luxury — it means creating homes that are timeless, ethical, and inspiring.</p>
        `
    },
    {   
        id: 'b9',
        image: blogImageNine,
        content: `
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">Lighting shapes everything — from the mood of a room to how colors and textures appear. Great lighting doesn’t just illuminate; it elevates.</p>

            <br/>

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4"><strong>Reclaimed wood</strong> is a cornerstone of green design. Each piece carries history and texture while reducing waste.</p>
            
            <br />
            
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4"><strong>Natural light</strong> is the foundation. Keep windows unobstructed and use mirrors to reflect daylight deeper into rooms.</p>
            
            <br />
            <br />

            <p class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">Layer your lighting:</p>
            
            <ul class="list-disc list-inside font-inter font-normal text-lg text-[#4B4B4B] mb-4">
                <li class="font-inter font-normal text-lg text-[#4B4B4B] my-4"><strong>Ambient</strong> lighting fills the space evenly.</li>
                <li class="font-inter font-normal text-lg text-[#4B4B4B] my-4"><strong>Task</strong> lighting provides focus for reading or cooking.</li>
                <li class="font-inter font-normal text-lg text-[#4B4B4B] my-4"><strong>Accent</strong> lighting highlights art or architecture.</li>
            </ul>

            <ul class="list-none list-inside font-inter font-normal text-lg text-[#4B4B4B] mb-4">
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Warm vs. cool tones.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                          Warm lights create coziness in bedrooms and lounges, while cool whites work better for offices and kitchens.
                        </p>
                    </div>
                </li>
                <li class="font-inter font-semibold text-2xl text-[#2F3134] mb-6">
                    Play with fixtures.
                    <div class="font-inter font-normal text-lg text-[#4B4B4B] my-4">
                        <p>
                          Pendant lamps, chandeliers, and sconces act as both decor and utility.
                        </p>
                    </div>
                </li>
            </ul>

            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4"><strong>Use dimmers</strong> to shift mood easily from bright to intimate.</p>

            <br />
            <br />
            
            <p class="font-inter font-normal text-lg text-[#4B4B4B] mb-4">Finally, experiment — lighting is one of the easiest, most affordable ways to transform a space instantly.</p>
        `
    },
]