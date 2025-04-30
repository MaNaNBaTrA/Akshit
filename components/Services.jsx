import React from 'react';
import Image from 'next/image';
import { ExoB, ExoDB, ForzaB, ForzaBold, lubalinFontM } from '@/public/fonts';

const Services = () => {
  return (
    <div className='w-full  h-screen '>
      {/* Main */}
      <div className='pl-28 w-full h-full flex items-center'>
        {/* Structure */}
        <div className='w-1/2 flex items-center justify-center h-full'>
          {/*Services */}
          <div className='bg-(--Header) h-3/4 w-9/10 rounded-xl flex justify-center flex-col items-center gap-6 py-8 relative'>
            {/* Services Structure */}
            <div
              className="w-[95%] bg-no-repeat bg-center rounded-2xl flex justify-center items-center"
              style={{
                backgroundImage: "url('/SImages/S.BG.png')",
                height: "calc(40% * 1.1)"
              }}
            >
              {/*Service 1 BG */}
              <div className='w-[95%] h-[82%] bg-white rounded-2xl flex items-center gap-6'>
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
            <div className='w-[90%] h-1/3 bg-white rounded-2xl flex items-center gap-6'>
              {/*Service 2 */}
              <div>
                <Image
                  src={"/SImages/S.2.png"}
                  width={120}
                  height={120}
                  alt='Services 1'
                  className='object-contain'
                />
                {/* Image */}
              </div>
              <div className='w-[70%] flex flex-col gap-3'>
                <div className={`${ExoB.className} text-xl`}>Packaging Design</div>
                <div className={`${ExoDB.className} text-(--HT2) text-s`}>Lorem ipsum dummy text are usually use
                  in these section. Lorem ipsum dummy text are used
                  in this design.
                </div>
                {/* Text */}
              </div>
            </div>
            <div className='w-[90%] h-1/3 bg-white rounded-2xl flex items-center gap-6'>
              {/*Service 3*/}
              <div>
                <Image
                  src={"/SImages/S.3.png"}
                  width={120}
                  height={120}
                  alt='Services 1'
                  className='object-contain'
                />
                {/* Image */}
              </div>
              <div className='w-[70%] flex flex-col gap-3'>
                <div className={`${ExoB.className} text-xl`}>Logo Design</div>
                <div className={`${ExoDB.className} text-(--HT2) text-s`}>Lorem ipsum dummy text are usually use
                  in these section. Lorem ipsum dummy text are used
                  in this design.
                </div>
                {/* Text */}
              </div>
            </div>
            <Image
              src={"/SImages/S.4.png"}
              width={80}
              height={80}
              alt='Services 4'
              className='object-contain absolute -bottom-12'
            />
          </div>
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
              <div className={`${lubalinFontM.className}  text-white bg-(--ADC) px-10 py-3 rounded-2xl text-center flex w-max text-sm `}>Hire Me</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
