import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="bg-background-main">
            <main className="w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px] py-[180px] grid place-items-center gap-y-6">
                <h2 className="capitalize font-bold font-inter text-[3rem] max-w-[520px] text-[#3B5D50] text-center">oops! page not found</h2>              
                <p className="capitalize font-normal font-inter text-[16px] max-w-[520px] text-[#3B5D50] text-center">it seems this room doesn&apos;t exist</p>  
                <div className="flex flex-row gap-2.5">
                        <Link href='/shop' className="py-3 px-5 md:px-8 bg-[#F9BF29] hover:bg-[#FFD057] transition-all duration-300 cursor-pointer rounded-md capitalize text-[#2F2F2F] font-inter font-semibold  text-lg" >go back home</Link>

                        <Link href='/services' className="py-3 px-5 md:px-8 border-2 border-[#3B5D50] hover:bg-[#3B5D50] hover:text-white transition-all duration-300 cursor-pointer rounded-md text-[#3B5D50] font-inter font-semibold text-lg capitalize" >visit our shop</Link>
                    </div>            
            </main>
        </div>
    );
}
 
export default NotFoundPage;