import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col'>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-999]"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/herobg.mp4" type="video/mp4" />
      </video>

      {/* طبقة سوداء شفافة */}
      <div className="absolute inset-0 bg-black/15"></div>

      <div className='w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* نص المحتوى */}
        <div>
          {/* subheading */}
          <p className='text-sm sm:text-base md:text-xl font-bold text-white'>
            Leading AI Solutions for Modern Businesses
          </p>

          {/* heading */}
          <h1 className='text-4xl md:text-5xl lg:text-7xl mt-6 font-bold text-white leading-[2.5rem] md:leading-[4rem]'>
            Empower Your Business with <span className='text-yellow-300'>AI Technology</span>
          </h1>

          {/* description */}
          <p className='text-sm sm:text-base font-medium text-gray-300 md:text-lg mt-4'>
            We develop cutting-edge AI solutions that help businesses automate processes, gain insights, and enhance user experiences through intelligent applications.
          </p>

          {/* button */}
          <a href="#" className='relative mt-8 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group'>
            <span className='w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
            <span className='relative w-full text-left font-bold text-black transition-colors duration-300 ease-in-out group-hover:text-white'>
              Discover More
            </span>
          </a>
        </div>

        {/* صورة */}
        <div className='mx-auto hidden xl:block'>
          <Image className='rounded-full' src='/images/aiImg.avif' alt='AI Hero' width={400} height={400} priority />
        </div>
      </div>
    </div>
  )
}

export default Hero
