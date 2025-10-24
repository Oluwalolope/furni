import { Blog } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({image, author, title, date, slug}: Blog) => {
    return (
        <Link href={slug}>
            <article className="cursor-pointer transition-all group">
                <Image src={image} alt={author} className="w-full max-w-[395px] h-[275px] rounded-[22px] mb-4 group-hover:opacity-80 group-hover:scale-101 duration-300" draggable={false} />
                <h4 className="mb-2 max-w-[300px] font-inter text-lg font-medium text-[#2F3134]">{title}</h4>
                <p className="max-w-[300px] font-inter text-lg font-medium text-[#989796]" > by <span className="text-[#2F3134]" >{author}</span> on <span className="text-[#2F3134]">{date}</span></p>
            </article>
        </Link>
    );
}
 
export default BlogCard;