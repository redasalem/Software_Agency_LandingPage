import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';

type Props = {
    reviwTiltle:string;
    userName:string;
    userImage:string;
    role:string;
    desc:string;
}

const TestimonialCard = ({reviwTiltle,userName,userImage,role,desc}:Props) => {
  return (
    <div className='bg-gray-100 p-6 rounded-lg mr-4 shadow-md h-[100%]'>
        <h1 className='text-2xl text-black font-bold'>{reviwTiltle}</h1>
        <div className='mt-2 flex items-center'>
            <FaStar className='text-amber-400 w-5 h-6'/>
             <FaStar className='text-amber-400 w-5 h-6'/>
             <FaStar className='text-amber-400 w-5 h-6'/>
             <FaStar className='text-amber-400 w-5 h-6'/>
             <FaStar className='text-amber-400 w-5 h-6'/>
        </div>
        <p className='mt-4 text-base md:text-lg font-medium text-gray-800'>{desc}</p>
        <hr className='w-full h-[1px] bg-gray-300 mt-6 mb-6' />
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
                <Image src={userImage} alt={userName} width={60} height={60} className='rounded-full'/>
                <div>
                     <h1 className='text-base sm:text-lg text-black md:text-xl font-bold'>{userName}</h1>
                   <p className='text-sm text-black sm:text-base md:text-lg'>{role}</p>
                </div>
            </div>
            <div>
                <Image src='/images/c4.png' alt='google' width={80} height={80}/>
            </div>
           
        </div>
    </div>
  )
}

export default TestimonialCard