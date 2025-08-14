import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='py-16' id='Services'>
      <div className='w-[80%] mx-auto'>
        {/* section heading */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
          <div>
             <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-red-500
          dark:text-pink-500 uppercase'>What We provide</h1>
          <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>Provide high-quality AI solutions for business growth</h1>
          </div>
          <div className='lg:ml-auto'>
            <a href="#" className='w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors font-semibold duration-300 
            bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto'>All Services</a>
          </div>
         
        </div>
        {/* services card */}
        <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4 items-center mt-16'>
          <div>
            <ServicesCard
             image='/images/s1.png'
             title='AI-Powered Analytics'
             desc='Unlock actionable insights with advanced machine learning algorithms'
             url='https://www.alteryx.com/?utm_source'
             />
          </div>
           <div>
            <ServicesCard
             image='/images/s2.png'
             title='Automated Workflow Solutions'
             desc='Streamline business processes with intelligent automation tools'
             url='https://n8n.io/?utm_source'
             />
          </div>
           <div>
            <ServicesCard
             image='/images/s3.png'
             title='Predictive Modeling'
             desc=' Forecast trends and optimize decisions using AI-driven predictions'
             url='https://h2o.ai/?utm_source'/>
          </div>
           <div>
            <ServicesCard
             image='/images/s4.png'
             title='Natural Language Processing'
             desc='Transform unstructured text into meaningful, actionable data'
             url='https://cloud.google.com/natural-language?utm_source'/>
          </div>
           <div>
            <ServicesCard
             image='/images/s5.png'
             title='Computer Vision Applications'
             desc='Enable smart visual recognition for enhanced operational efficiency'
             url='https://azure.microsoft.com/en-us/products/ai-services/ai-vision?utm_source'/>
          </div>
           <div>
            <ServicesCard
             image='/images/s6.png'
             title='Intelligent Customer Experience '
             desc='Personalize interactions and boost engagement with AI insights'
             url='https://www.zendesk.com/blog/intelligent-customer-experience/?utm_source'/>
          </div>
        </div>


      </div>

      
      </div>
  )
}

export default Services