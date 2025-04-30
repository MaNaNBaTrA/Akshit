import React from 'react'
import { lubalinFontM, ForzaB, ExoDB } from '../public/fonts';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='w-full  bg-(--Header) h-max'>
            {/* Main */}
            <div className='w-full pl-28 flex'>
                {/*Structure*/}
                <div className='pt-16 flex-col flex  gap-12 w-1/2 pb-24'>
                    {/* Name */}
                    <div className='flex-col  flex gap-4'>
                        <div className={`${ForzaB.className} text-7xl`}>Hy! I Am</div>
                        <div className={`${ForzaB.className} text-7xl text-(--HT)`}>AKSHIT</div>
                    </div>

                    <div className={` ${ExoDB.className} text-(--HT2) text-sm`}>A graphic designer bringing 4 years of hands-on experience to the table, passionate
                        about crafting engaging visual experiences and specializing in impactful design solutions
                    </div>
                    <div className={`${lubalinFontM.className}  text-white bg-(--ADC) px-10 py-3 rounded-2xl text-center flex w-max text-sm cursor-pointer`}>Hire Me</div>
                </div>
                <div className='relative w-full '>
                    <Image
                    src="/Image/Header-Main.png"
                    width={900}
                    height={900}
                    alt="Author"
                    className='object-contain absolute -bottom-1 right-50'
                    />
                    <Image
                    src="/Image/Header-1.png"
                    width={230}
                    height={230}
                    alt="Header-1"
                    className='object-contain absolute top-1/3 right-1/7 '
                    />
                    <Image
                    src="/Image/Header-2.png"
                    width={250}
                    height={250}
                    alt="Header-2"
                    className='object-contain absolute -bottom-14 left-20'
                    />
                    <Image
                    src="/Image/Header-3.png"
                    width={150}
                    height={200}
                    alt="Header-3"
                    className='object-contain absolute -bottom-1/5 right-1/7'
                    />
                    
                    {/* Image */}
                </div>
            </div>
        </div>
    )
}

export default Header
