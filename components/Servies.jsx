import React from 'react';
import Image from 'next/image';

const Servies = () => {
  return (
    <div className='w-full  h-screen '>
      {/* Main */}
      <div className='pl-28 w-full h-full'>
        {/* Structure */}
        <div className='w-1/2 flex items-center justify-center h-full'>
          {/*Services */}
          <div className='bg-(--Header) h-3/4 w-9/10 rounded-xl flex justify-center flex-col items-center gap-6 py-8'>
            {/* Services Structure */}
            <div
              className="w-[95%] bg-no-repeat bg-center rounded-2xl flex justify-center items-center"
              style={{
                backgroundImage: "url('/SImages/S.BG.png')",
                height: "calc(40% * 1.1)"
              }}
            >
              {/*Service 1 BG */}
              <div className='w-[95%] h-[82%] bg-white rounded-2xl flex items-center'>
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
                <div>
                  {/* Text */}
                </div>
              </div>
            </div>
            <div className='w-[90%] h-1/3 bg-white rounded-2xl flex items-center'>
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
              <div>
                {/* Text */}
              </div>
            </div>
            <div className='w-[90%] h-1/3 bg-white rounded-2xl flex items-center'>
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
              <div>
                {/* Text */}
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          {/*Text */}
        </div>
      </div>
    </div>
  )
}

export default Servies
