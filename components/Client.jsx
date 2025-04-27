import React from 'react'
import Image from 'next/image'
import { ExoB } from '@/public/fonts'

const Client = () => {
    return (
        <div className='w-full h-44'>
            {/* Main */}
            <div className='w-full pl-16 h-full flex'>
                {/* Structure */}
                <div className='w-1/2 flex flex-col justify-around'>
                    {/*Clients */}
                    <div className={`${ExoB.className} text-nowrap`}>
                        Work For All This Brand & Client
                        {/*Text */}
                    </div>
                    <div className='flex items-center'>
                        <Image
                            width={30}
                            height={30}
                            src={"/CImages/C-1.png"}
                            alt='Brand 1'
                            className='object-contain'
                        />
                        <Image
                            width={30}
                            height={30}
                            src={"/CImages/C-2.png"}
                            alt='Brand 1'
                            className='object-contain'
                        />
                        <Image
                            width={50}
                            height={50}
                            src={"/CImages/C-3.png"}
                            alt='Brand 1'
                            className='object-contain'
                        />
                        <Image
                            width={70}
                            height={70}
                            src={"/CImages/C-5.png"}
                            alt='Brand 1'
                            className='object-contain'
                        />
                        <Image
                            width={100}
                            height={100}
                            src={"/CImages/C-4.png"}
                            alt='Brand 1'
                            className='object-contain'
                        />
                        {/* Client Logo */}
                    </div>
                </div>
                <div className='w-1/2 h-full bg-linear-to-r from-white form-1% via-(--G1) via-48% to-(--G2) to-100%'>
                    {/* Gradient */}
                </div>
            </div>
        </div>
    )
}

export default Client
