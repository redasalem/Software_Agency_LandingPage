import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16' id='Blog'>
   <div className='text-center'>
  {/* Subheading */}
  <h2 className='uppercase text-lg sm:text-xl md:text-2xl font-bold text-red-500 dark:text-pink-500'>
    AI Insights & Trends
  </h2>

  {/* Main Heading */}
  <h1 className='text-xl sm:text-3xl md:text-4xl mt-2 font-extrabold'>
    Exploring the Future of Artificial Intelligence
  </h1>

</div>
<div className='w-[80%] mt-16 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
    <div data-aos='fade-right'>
        <BlogCard image='/images/b1.png' 
        title='Unlock the potential of AI with insights that drive smarter decisions and innovative solutions'
        />
    </div>
        <div data-aos='fade-right' data-aos-delay='100'>
        <BlogCard image='/images/b2.png' 
        title='Explore cutting-edge AI technologies transforming industries and shaping the future'
        />
    </div>
        <div data-aos='fade-right' data-aos-delay='200'>
        <BlogCard image='/images/b3.png' 
        title='Stay ahead in AI trends, tutorials, and real-world applications for a smarter tomorrow'
        />
    </div>

</div>


    </div>
  )
}

export default Blog