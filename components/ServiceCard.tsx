import Image, { StaticImageData } from "next/image";

type prop = {
    image: StaticImageData,
    title: string,
    description: string
}

const ServiceCard = ({ image, title, description }: prop) => {
    return (
        <article className="max-w-[294px] h-[190px]">
            <Image src={image} alt={title} className="pb-3.5" draggable={false}/>
            <h3 className="font-inter font-medium text-[16px] text-[#666766]">{title}</h3>
            <p className="font-inter font-medium text-[16px] [line-height:_32px] text-[#87857D]">{description}</p>
        </article>
    );
}
 
export default ServiceCard;