import BlogCard from "@/components/BlogCard";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import BLOGS from "@/data/blogs";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Furni | Blog",
  description: "Blog posts at furni",
};

const BlogsPage = () => {
    return (
        <>
            <HeroSection title="blog" description="Explore design tips, furniture trends, and inspiration to help you create a modern, comfortable home." />

            <div className="bg-background-main">
              <main className="w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px]">
                <div className="pt-[124px] mb-[164px] grid gap-x-6 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {BLOGS.map(blog => <BlogCard key={blog.id} {...blog} />)}
                </div>
                <Testimonials />
              </main>
            </div>
        </>
    );
}
 
export default BlogsPage;