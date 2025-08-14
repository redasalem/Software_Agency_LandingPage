import Image from 'next/image';
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';

type Servies={
    image:string;
    title:string;
    desc:string;
    url:string;
}


const ServicesCard = ({image,title,desc,url}:Servies) => {
  return (
    <div className='p-6 cursor-pointer hover:bg-blue-800 transition-all duration-500
    group relative bg-gray-100 dark:bg-blue-950 shadow rounded-xl'>
        <Image
        src={image}
        alt={title}
        width={60}
        height={60}
        className='object-contain'/>
        <h1 className='text-xl mt-5 font-semibold group-hover:text-white transition-all duration-500'>{title}</h1>
        <p className='mt-4 font-medium text-gray-500 dark:text-gray-200
        group-hover:text-gray-300 transition-all duration-500'>{desc}</p>
        <div className='mt-6 text-xl font-medium flex items-center gap-1 group-hover:text-white
        transition-all duration-500'>
          <a className='flex items-center gap-2' href={url} target='_blank'><span>Learn More</span><span><GoArrowUpRight/></span></a>  

        </div>

    </div>
  )
}

export default ServicesCard