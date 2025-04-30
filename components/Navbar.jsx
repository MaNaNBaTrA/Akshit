import React from 'react';
import Image from 'next/image';
import { lubalinFontD, lubalinFontM } from '../public/fonts';

const Navbar = () => {
  return (
    <div className='w-full h-max flex justify-center pt-6 bg-(--Header) pb-6'>
      {/* Main */}
      <div className='bg-white w-11/12 flex items-center h-20 rounded-3xl justify-between '>
        {/* Structure */}
        <div className='flex items-center pl-6 gap-2'>
          {/* Brand*/}
          <Image
            src="/Image/AD.png"
            width={70}
            height={70}
            alt="Brand logo"
            className='object-contain'
          />
          <div className='w-1 h-11 bg-(--AD)'></div>
          <div className={`${lubalinFontD.className} text-(--ADT) text-2xl pl-4`} >Akshitdesigns.</div>
        </div>
        <div className='flex items-center gap-16 w-max text-nowrap pr-10'>
          <div className={`${lubalinFontD.className}  text-(--ADT) cursor-pointer hover:underline hover:underline-offset-2`}>Home</div>
          <div className={`${lubalinFontM.className}  text-(--ADT) cursor-pointer hover:underline hover:underline-offset-2`}>About us</div>
          <div className={`${lubalinFontM.className}  text-(--ADT) cursor-pointer hover:underline hover:underline-offset-2`}>Services</div>
          <div className={`${lubalinFontM.className}  text-white bg-(--ADC) w-1/4 px-4 py-3 rounded-2xl text-center flex cursor-pointer`}>Contact Us</div>
          {/*Navigation*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;