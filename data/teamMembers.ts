import jeremyWalker from '@/assets/team/jeremy-walker.png';
import kathrynRyan from '@/assets/team/kathryn-ryan.png';
import lawsonArnold from '@/assets/team/lawson-arnold.png';
import patrikWhite from '@/assets/team/patrik-white.png';
import { StaticImageData } from 'next/image';

export type TeamMember = {
    id: string,
    name: string,
    position: string,
    description: string,
    image: StaticImageData
}

const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 'tm1',
        name: 'jeremy walker',
        position: 'Creative Director',
        description: 'Jeremy blends modern trends with timeless design to create interiors that inspire comfort and style.',
        image: jeremyWalker
    },
    {
        id: 'tm2',
        name: 'kathryn ryan',
        position: 'Lead Interior Designer',
        description: 'Kathryn specializes in elegant, functional spaces that balance warmth and sophistication effortlessly.',
        image: kathrynRyan
    },
    {
        id: 'tm3',
        name: 'lawson arnold',
        position: 'Architectural Designer',
        description: 'Lawson focuses on structural harmony, ensuring every space combines purpose with aesthetic appeal.',
        image: lawsonArnold
    },
    {
        id: 'tm4',
        name: 'patrik white',
        position: 'Project Manager',
        description: 'Patrik oversees design execution with precision, ensuring every project runs smoothly from start to finish.',
        image: patrikWhite
    }
];

export default TEAM_MEMBERS;