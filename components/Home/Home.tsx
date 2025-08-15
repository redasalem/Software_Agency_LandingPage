'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import About from './About/About'
import WhyChoose from './WhyChoose/WhyChoose'
import Ai from './AI/Ai'
import Projects from './Project/Projects'
import Testimonials from './Testimonials/Testimonials'
import Blog from './Blog/Blog'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(()=>{
    const initAOS = async()=>{
      await import('aos');
      AOS.init({
        duration:1000,
        easing:'ease',
        once:true,
        anchorPlacement:'top-bottom',

      });
    }
       initAOS();

  },[])
  return (
    <div className='overflow-hidden' id='Home'>
      <Hero/>
      <Services/>
      <About/>
      <WhyChoose/>
      <Ai/>
      <Projects/>
      <Testimonials/>
      <Blog/>
    </div>
  )
}

export default Home