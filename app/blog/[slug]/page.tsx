'use client';

import BlogCard from "@/components/BlogCard";
import BLOGS, { BLOG_ARTICLES } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

const BlogPage = () => {
    const { slug } = useParams();
    const blogArticle = BLOGS.filter(blog => blog.slug ===  `/blog/${slug}`)[0];

    if (!blogArticle) {
        notFound();
    };

    const blogContent = BLOG_ARTICLES.filter(article => article.id === blogArticle.id)[0];
    return (
        <div className="bg-background-main">
            <main className="w-full max-w-[1512px] mx-auto py-[156px] px-4 md:px-6 lg:px-[138px]">
                <Link href='/blog' className="capitalize cursor-pointer underline transition-all duration-300 hover:no-underline font-inter font-medium text-[16px] text-[#3D3C3A]" >
                    <div className="flex flex-row gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                        <span>back to all posts</span>
                    </div>
                </Link>
                <h1 className="font-inter font-semibold text-4xl text-[#2F3134] my-6 text-center">{blogArticle.title}</h1>
                <p className="font-inter font-medium text-lg text-[#989796] mb-2 text-center">by <span className="text-[#2F3134]" >{blogArticle.author}</span> on <span className="text-[#2F3134]">{blogArticle.date}</span></p>
                <div>
                    <Image src={blogArticle.image} alt={blogArticle.title} className="w-full h-auto rounded-[10px] my-12" />
                </div>
                <article dangerouslySetInnerHTML={{ __html: blogContent.content }} />
                <section className="pb-[200px] pt-[100px] ">
                    <h3 className="text-[#2F2F2F] font-inter font-medium text-4xl capitalize pb-6">similar blog posts</h3>
                    {/* The current blog post can not show here */}
                    <div className="grid justify-items-center gap-x-6 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {BLOGS.filter(blog => blog.id !== blogArticle.id).slice(0,3).map(blog => <BlogCard key={blog.id} {...blog} />)}
                    </div>
                </section>
            </main>
        </div>
    );
}
 
export default BlogPage;