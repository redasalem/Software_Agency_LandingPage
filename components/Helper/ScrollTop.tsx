'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
    const [visable,setvisable] = useState(false);

    useEffect(()=>{
        const Togglevisabilty =()=>{
            if(window.scrollY>300) setvisable(true);
            else setvisable(false);
        }
        window.addEventListener('scroll',Togglevisabilty)

        return ()=>window.removeEventListener('scroll',Togglevisabilty)
    },[]);

    const ScrollTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })

    }


  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
        {visable && (
            <button className='bg-pink-500 cursor-pointer text-white rounded-full
            w-12 h-12 flex items-center justify-center focus:outline-none'
            onClick={ScrollTop}
            >
                <FaArrowUp/>

            </button>
        )}

    </div>
  )
}

export default ScrollTop