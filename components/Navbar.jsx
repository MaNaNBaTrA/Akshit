import React from 'react';
import Image from 'next/image';
import { lubalinFont } from '../public/fonts';

const Navbar = () => {
  return (
    <div className='w-full h-20 flex justify-center pt-6'>
      {/* Main */}
      <div className='bg-white w-11/12 flex items-center h-20 rounded-3xl'>
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
          <div className={`${lubalinFont.className} text-(--ADT) text-2xl pl-4`} >Akshitdesigns.</div>
        </div>
        <div>
          {/*Navigation*/}
        </div>
      </div>
    </div>
  );
};

export default Navbar;