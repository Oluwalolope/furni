import HeroSection from "@/components/HeroSection";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Furni | Blog",
  description: "Blog posts at furni",
};

const BlogPage = () => {
    return (
        <>
            <HeroSection title="blog" description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." />

            <main className="bg-background-main h-[60px]">
              blog
            </main>
        </>
    );
}
 
export default BlogPage;