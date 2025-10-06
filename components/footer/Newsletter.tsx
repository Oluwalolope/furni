import emailIcon from '@/assets/icons/email-icon.svg';
import Image from "next/image";

const Newsletter = () => {
    let style = {maskType: 'alpha'};
    return (
        <div>
            <div className='flex flex-row gap-2 items-center'>
                <Image src={emailIcon} alt='Email icon' aria-hidden />
                <h3 className='font-inter text-xl font-medium text-[#3B6159]'>Subscribe to Newsletter</h3>
            </div>

            <form action="" className='mt-6 gap-5 flex flex-col lg:flex-row'>
                <input type="text" placeholder='Enter your name'  className='h-[55px] font-inter text-[16px] font-medium border border-border rounded-xl px-4 py-[18px]' />
                <input type='email' placeholder='Enter your email'  className='h-[55px] font-inter text-[16px] font-medium border border-border rounded-xl px-4 py-[18px]' />
                <button type='submit' aria-roledescription='Press this button to sign up to our newsletter' className='bg-background-header h-[56px] lg:w-[88px] rounded-xl inline-grid place-items-center text-white hover:bg-[#DCE5E4] hover:text-[#3B5D50] transition-colors duration-300 cursor-pointer'>
                    <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_0_390" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="28">
                        <path d="M24.5121 0.170898H0.648438V27.0509H24.5121V0.170898Z" fill="currentColor"/>
                        </mask>
                        <g mask="url(#mask0_0_390)">
                        <path d="M24.443 5.54505L20.8421 22.282C20.5705 23.4633 19.862 23.7573 18.8552 23.2009L13.3688 19.216L10.7213 21.7256C10.4284 22.0143 10.1833 22.2558 9.61871 22.2558L10.0129 16.7485L20.1816 7.69229C20.6237 7.3038 20.0857 7.08854 19.4945 7.47705L6.92341 15.2785L1.51147 13.6091C0.334268 13.2469 0.312961 12.4489 1.7565 11.8923L22.9248 3.85454C23.9049 3.49229 24.7625 4.0698 24.443 5.54505Z" fill="currentColor"/>
                        </g>
                    </svg>
                </button>
            </form>
        </div>
    );
}
 
export default Newsletter;