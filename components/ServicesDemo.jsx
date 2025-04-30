'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ExoB, ExoDB, ForzaB, ForzaBold, lubalinFontM } from '@/public/fonts';

const ServicesStruct = () => {
  const [hoveredService, setHoveredService] = useState(0);

  const services = [
    {
      id: 1,
      icon: "/SImages/S.1.png",
      bgImage: "/SImages/S.BG.png",
      title: "Graphic Designer",
      description: "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design."
    },
    {
      id: 2,
      icon: "/SImages/S.2.png",
      bgImage: "/SImages/S.BG.png",
      title: "Packaging Design",
      description: "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design."
    },
    {
      id: 3,
      icon: "/SImages/S.3.png",
      bgImage: "/SImages/S.BG.png",
      title: "Logo Design",
      description: "Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are used in this design."
    }
  ];

  return (
    <div className='bg-(--Header) h-3/4 w-9/10 rounded-xl flex justify-center flex-col items-center gap-4 py-4 relative'>
      {services.map((service, index) => (
        <div
          key={service.id}
          className="w-[90%] bg-no-repeat bg-center rounded-2xl flex justify-center items-center px-1 py-1"
          style={{
            backgroundImage: hoveredService === index ? `url('${service.bgImage}')` : 'none',
            height: "calc(45% * 1.1)",
          }}
          onMouseEnter={() => setHoveredService(index)}
          onMouseLeave={() => setHoveredService(index)}
        >
          {/* Service content */}
          <div className='w-[95%] h-[90%] bg-white rounded-2xl flex items-center gap-6 cursor-pointer'>
            {/*Service 1 */}
            <div>
              <Image
                src={"/SImages/S.1.png"}
                width={120}
                height={120}
                alt='Services 1'
                className='object-contain'
              />
              {/* Image */}
            </div>
            <div className='w-[70%] flex flex-col gap-3'>
              <div className={`${ExoB.className} text-xl`}>Graphic Designer</div>
              <div className={`${ExoDB.className} text-(--HT2) text-s`}> Lorem ipsum dummy text are usually use
                in these section. Lorem ipsum dummy text are used
                in this design. </div>
              {/* Text */}
            </div>
          </div>
        </div>
      ))}
      <Image
        src={"/SImages/S.4.png"}
        width={70}
        height={70}
        alt='Services 4'
        className='object-contain absolute -bottom-10'
      />

    </div>
  );
};

const ServicesDemo = () => {
  return (
    <div className='w-full h-screen'>
      {/* Main */}
      <div className='pl-28 w-full h-full flex items-center'>
        {/* Structure */}
        <div className='w-[45%] flex items-center justify-center h-full'>
          {/*Services */}
          <ServicesStruct />
        </div>
        <div className='w-1/2 flex justify-center '>
          {/*Text */}
          <div className='w-[70%] flex flex-col gap-6'>
            {/* Structure */}
            <div>
              {/* Heading */}
              <div className={`${ForzaBold.className} text-6xl text-(--HT)`}>My Awesome</div>
              <div className={`${ForzaB.className} text-6xl text-(--ADC)`}>Services.</div>
            </div>
            <div className={`${ExoDB.className} text-(--HT2) text-lg flex flex-col gap-6`}>
              {/* Para */}
              <div>Lorem ipsum dummy text are usually use print and design
                industry. So I used their also</div>
              <div>Lorem ipsum dolor sit amet, I am the Best
                consectetur adipiscing elit. If you caught this
                Quisque ac ligula tristique, Discount for sure,
                faucibus sem non, finibus lorem. Serious for me
                Suspendisse vel gravida mauris, Mad I am for you
                Sed tempus dolor id placerat End of Discussion.
                Donec a commodo metus. </div>
            </div>
            <div>
              {/* Btn */}
              <div className={`${lubalinFontM.className}  text-white bg-(--ADC) px-10 py-3 rounded-2xl text-center flex w-max text-sm cursor-pointer`}>Hire Me</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDemo;