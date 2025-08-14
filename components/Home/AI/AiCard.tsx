import React, { ReactNode } from 'react'
interface AiAgent{
   title:string;
   icon:ReactNode;
   desc:string;
}

const AiCard = ({title,icon,desc}:AiAgent) => {
  return (
    <div className='bg-orange-200 dark:bg-gray-800 p-6 rounded-lg'>
       <p>{icon}</p> 
       <h1 className='text-2xl mt-6 font-bold '>{title}</h1>
       <p className='text-gray-800 dark:text-gray-300 mt-3 font-medium text-[18px]'>{desc}</p>
       <button className='px-6 py-1.5 rounded-full bg-green-500 mt-4 font-bold hover:bg-green-600
       transition-all duration-200 cursor-pointer text-white'>
        <a href="https://www.sciencedirect.com/science/article/abs/pii/S0040162525000708" target='_blank'>
        Learn More</a>
        </button>
    </div>
  )
}

export default AiCard