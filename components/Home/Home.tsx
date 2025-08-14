import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import About from './About/About'
import WhyChoose from './WhyChoose/WhyChoose'
import Ai from './AI/Ai'
import Projects from './Project/Projects'
import Testimonials from './Testimonials/Testimonials'

const Home = () => {
  return (
    <div className='overflow-hidden' id='Home'>
      <Hero/>
      <Services/>
      <About/>
      <WhyChoose/>
      <Ai/>
      <Projects/>
      <Testimonials/>
    </div>
  )
}

export default Home