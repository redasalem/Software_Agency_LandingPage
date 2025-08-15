import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='pt-16 pb-16' id='About'>
        <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap:2 items-center'>
            {/* image content */}
            <div className='mx-12' data-aos='zoom-in' data-aos-anchor-placement='top-center'>
                <Image
                className='rounded-2xl'
                 src='/images/about.jpg'
                  alt='image'
                   height={700}
                    width={700}/>

            </div>
            {/* text content */}
            <div className='mt-6'>
                <p className='text-[30px] sm:text-[35px] md:text-3xl font-bold text-red-700
                dark:text-pink-500 uppercase text-center pb-3 hover:animate-spin'>About Us </p>
                <h1 className='text-[30px] md:text-3xl lg:text-5xl mt-3 font-bold
                leading-[1.8rem] md:leading-[3rem] text-center mb-4'>Turning Data into Decisions, Ideas into Impact</h1>
                <p className='mt-3 text-gray-700 dark:text-gray-300 text-[18px]'>At Brain AI, we harness the power of Artificial Intelligence to transform complex challenges into smart, scalable solutions. Our team of innovators, data scientists, and AI engineers work hand-in-hand to deliver cutting-edge technologies that empower businesses, enhance decision-making, and shape the future of industries worldwide.</p>
                <div className='mt-6 grid sm:grid-cols-2 grid-cols-1 gap-6 items-center sm:mx-auto'>
                    <div className='flex items-center gap-4'>
                        <Image src='/images/a1.jpg' alt='a1' width={50} height={60}/>
                        <h1 className='text-lg sm:text-xl font-bold leading-5'> AI Research & Development</h1>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image src='/images/a3.png' alt='a1' width={50} height={60}/>
                        <h1 className='text-lg sm:text-xl font-bold leading-5'> Software Engineering</h1>
                    </div>
                    </div>
                     <div className='mt-6 grid sm:grid-cols-2 grid-cols-1 gap-6 items-center'>
    
                    <div className='flex items-center gap-4'>
                        <Image src='/images/a2.png' alt='a1' width={50} height={60}/>
                        <h1 className='text-lg sm:text-xl font-bold leading-5'> Data Science & Analytics</h1>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Image src='/images/a4.png' alt='a1' width={50} height={60}/>
                        <h1 className='text-lg sm:text-xl font-bold leading-5'> Business & Client Solutions</h1>
                    </div>
                    </div>
                      <div className='mt-12'>
                   <a href="https://www.tredence.com/blog/data-driven-decision-making-using-data-science-insights" target='_blank' className='w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors font-semibold duration-300 
                  bg-pink-500 rounded-full uppercase hover:bg-blue-600 ease px-9 md:w-auto'>About More</a>
                 </div>


                </div>
            </div>
        </div>
    
  )
}

export default About