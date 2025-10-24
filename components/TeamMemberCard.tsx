import type  { TeamMember } from "@/data/teamMembers";
import Image from "next/image";
import Link from "next/link";

const TeamMemberCard = ({image, name, position, description}:TeamMember) => {
    return (
        <article className="max-w-[276px] mx-auto">
            <Image src={image} alt={name} draggable={false} className="size-[289px] object-fill pb-8" />
            <h2 className="font-inter block font-medium text-3xl text-[#3D3C3A] capitalize pb-3 underline underline-offset-8 hover:no-underline transition-all duration-300 cursor-pointer ease-out">{name}</h2>
            <p className="font-inter font-medium text-[16px] text-[#6A6A6A] capitalize pb-[18px]">{position}</p>
            <p className="font-inter font-medium text-[16px] text-[#87857D] pb-3">{description}</p>
            <p className="font-inter font-medium text-[15px] text-[#3D3C3A] capitalize underline hover:no-underline transition-all duration-300 cursor-pointer ease-out">learn more</p>
        </article>
    );
}
 
export default TeamMemberCard;