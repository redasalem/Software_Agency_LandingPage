import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='pt-16 pb-16' id='Projects'>
        <div className='w-[80%] mx-auto'>
            {/* section Heading */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
  <div>
    <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400 uppercase'>
      Our Projects
    </h1>
    <h2 className='text-xl sm:text-3xl md:text-4xl mt-2 font-bold text-gray-900 dark:text-white'>
      Innovative AI Solutions Driving Business Success
    </h2>
  </div>

  <div className='lg:ml-auto mt-4 lg:mt-0'>
    <a
      href="#projects"
      className='w-full py-4 text-base sm:text-lg md:text-xl text-center text-white font-semibold transition-colors duration-300 bg-indigo-600 rounded-full uppercase hover:bg-indigo-700 px-9 md:w-auto ease-in-out'
    >
      View Projects
    </a>
  </div>
</div>

 {/* project images */}
 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
    <div data-aos='zoom-in' data-aos-anchor-placement='top-center'>
        <Image src='/images/p1.jpg' alt='project1' width={600} height={600}/>
    </div>
    <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='100'>
        <Image src='/images/p2.jpg' alt='project1' width={600} height={600}/>
    </div>
    <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='200'>
        <Image src='/images/p3.jpg' alt='project1' width={600} height={600}/>
    </div>
    <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='300'>
        <Image src='/images/p4.png' alt='project1' width={600} height={600}/>
    </div>
    <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='400'>
        <Image src='/images/p5.png' alt='project1' width={600} height={600}/>
    </div>
    <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='500'>
        <Image src='/images/p6.png' alt='project1' width={600} height={600}/>
    </div>
 </div>





        </div>

    </div>
  )
}

export default Projects