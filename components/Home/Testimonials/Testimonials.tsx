'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialCard from './TestimonialCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const Testimonials = () => {
  return (
    <div className='pt-6 pb-16' id='Testmonials'>
        <div className='w-[90%] md:w-[80%] mx-auto'>
            {/* section Heading */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
  <div>
    <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400 uppercase'>
      Testimonials
    </h1>
    <h2 className='text-xl sm:text-3xl md:text-4xl mt-2 font-bold text-gray-900 dark:text-white'>
      What Our Clients Say About Our AI Solutions
    </h2>
  </div>
  <div className='lg:ml-auto mt-4 lg:mt-0'>
    <a
      href="#testimonials"
      className='w-full py-4 text-base sm:text-lg md:text-xl text-center text-white font-semibold transition-colors duration-300 bg-indigo-600 rounded-full uppercase hover:bg-indigo-700 px-9 md:w-auto ease-in-out'
    >
      View Testimonials
    </a>
  </div>
</div>
     {/* sliders */}
     <div className='mt-16'>
        <Carousel
  
 
  showDots={true}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
>
<TestimonialCard 
  reviwTiltle='Amazing AI Solutions!'
  userName='Alice Johnson'
  userImage='/images/c1.png'
  role='Product Manager'
  desc='The AI solutions provided by the team optimized our processes and boosted efficiency significantly. Highly recommended!'
/>
<TestimonialCard 
  reviwTiltle='Transformed Our Workflow'
  userName='Michael Smith'
  userImage='/images/c2.png'
  role='CTO'
  desc='Their AI technology revolutionized our workflow, enabling faster decision-making and better project outcomes.'
/>
<TestimonialCard 
  reviwTiltle='Highly Innovative Technology'
  userName='Sofia Lee'
  userImage='/images/c3.png'
  role='AI Researcher'
  desc='The team delivered innovative AI solutions that exceeded our expectations and inspired our R&D department.'
/>
<TestimonialCard 
  reviwTiltle='Exceptional Support & Results'
  userName='David Brown'
  userImage='/images/a4.png'
  role='Business Analyst'
  desc='From implementation to ongoing support, their AI solutions provided measurable results and excellent guidance.'
/>
</Carousel>

     </div>



        </div>
    </div>
  )
}

export default Testimonials