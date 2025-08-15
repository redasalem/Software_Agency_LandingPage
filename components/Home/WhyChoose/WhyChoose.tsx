import Image from 'next/image'
import React from 'react'
import { AiOutlineRobot } from 'react-icons/ai'
import { FaHandshake, FaLightbulb } from 'react-icons/fa'



const WhyChoose = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            {/* text content */}
            <div>
                <p className='text-sm sm:text-base md:text-xl font-bold text-red-500
                dark:text-pink-500 uppercase'>Why Choose Us ?</p>
                <h1 className='text-2xl md:text-3xl lg:text-5xl mt-3 font-bold leading-[1.8rem]
                md:leading-[3rem]'>Transforming Ideas into a Smarter Digital Future</h1>
                <hr className='mt-8 mb-8 w-full h-[1px] bg-gray-200 dark:bg-gray-700'/>
                {/* list type feature */}
                <div className='sm:flex space-y-3 sm:space-x-0 items-center gap-6 mt-8 mb-8'>
                    <div className='flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700
                    rounded-full flex-col justify-center'>
                        <AiOutlineRobot className='w-8 h-8 text-indigo-600 animate-bounce'/>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-xl font-bold'>Cutting-Edge AI Solutions</h1>
                        <p className='mt-2 text-gray-800 dark:text-gray-300 w-[90%]'>We leverage the latest AI technologies to deliver smarter, faster, and more accurate results for your business</p>
                    </div>
                </div>
                  <div className='sm:flex space-y-3 sm:space-x-0 items-center gap-6 mt-8 mb-8'>
                    <div className='flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700
                    rounded-full flex-col justify-center'>
                        <FaLightbulb className='w-8 h-8 text-yellow-500 animate-bounce'/>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-xl font-bold'>Innovation at Every Step</h1>
                        <p className='mt-2 text-gray-800 dark:text-gray-300 w-[90%]'>From concept to execution, we infuse innovation into every stage to keep you ahead of the competition</p>
                    </div>
                </div>
                 <div className='sm:flex space-y-3 sm:space-x-0 items-center gap-6 mt-8 mb-8'>
                    <div className='flex items-center w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700
                    rounded-full flex-col justify-center'>
                        <FaHandshake className='w-8 h-8 text-blue-600 animate-bounce'/>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-xl font-bold'>Trusted by Businesses Worldwide</h1>
                        <p className='mt-2 text-gray-800 dark:text-gray-300 w-[90%]'>Our solutions are reliable, scalable, and trusted by companies across multiple industries</p>
                    </div>
                </div>
                
            </div>
            {/* image content */}
            <div className='w-full' data-aos='zoom-out' data-aos-anchor-placement='top-center'>
                <Image
                className='rounded-xl shadow-lg border-fuchsia-100 border-4'
                 src='/images/wc.png'
                  alt='WhyChoose'
                   width={900} 
                   height={900}/>
            </div>

        

        </div>

    </div>
  )
}

export default WhyChoose