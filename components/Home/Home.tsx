import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import About from './About/About'
import WhyChoose from './WhyChoose/WhyChoose'
import Ai from './AI/Ai'

const Home = () => {
  return (
    <div className='overflow-hidden' id='Home'>
      <Hero/>
      <Services/>
      <About/>
      <WhyChoose/>
      <Ai/>
    </div>
  )
}

export default Home