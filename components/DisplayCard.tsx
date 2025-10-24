import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type prop = {
    name: string,
    description?: string,
    image: StaticImageData
}

const DisplayCard = ({ name, image, description = 'The generated Lorem Ipsum is therefore always free.' }:prop) => {
    return (
        <article className="flex flex-row items-center gap-6">
            <div className="bg-[#DCE5E4] size-[135px] rounded-2xl grid place-items-center">
              <Image src={image} alt={name} draggable={false} />
            </div>
            <div>
                <h3 className="font-inter font-semibold text-[16px] [line-height:_24px] text-[#323232] md:max-w-[224px] capitalize">{name}</h3>
                <p className="font-inter font-medium text-[16px] [line-height:_22px] text-[#87857D] max-w-[237px] pt-0.5 pb-3">{description}</p>
                <Link href='#' className="font-inter font-medium text-[16px] [line-height:_24px] text-[#383736] hover:text-[#3B5D50] capitalize transition-all duration-300 ease-out">read more</Link>
            </div>
        </article>
    );
}
 
export default DisplayCard;