'use client';

import sendContactMessage from "@/lib/actions";
import { useState } from "react";

const Form = ({children}: {children: React.ReactNode}) => {
    const [error, setError] = useState('');
    const submitAction = (formData: FormData) => {
        const { message } = sendContactMessage(formData);
        setError(message);
    }
    return (
        <form action={submitAction} className="pb-[200px] md:pb-[450px]">
            {children}
            {error && <p className="mb-4 text-lg text-red-600">{error}</p>}
            <button type="submit" className="py-3 px-8 bg-[#2F2F2F] hover:bg-[#6D6D6D] transition-all duration-300 cursor-pointer rounded-[100px] capitalize text-[#ffff] font-inter font-semibold  text-lg" >send message</button>
        </form>
    );
}
 
export default Form;