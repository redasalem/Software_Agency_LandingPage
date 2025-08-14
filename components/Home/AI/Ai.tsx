import React from 'react'
import AiCard from './AiCard'
import { FaChartLine, FaComments, FaRobot } from 'react-icons/fa'

const Ai = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='text-center'>
            {/* subHeading */}
            <h1 className='uppercase text-lg sm:txt-xl md:text-2xl font-bold text-red-500
            dark:text-pink-500'>Artificial Intelligence</h1>
            {/* heading */}
            <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>Shaping the Future with Intelligent Innovation</h1>

        </div>
        <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
            <div>
                <AiCard icon={<FaRobot className='h-20 w-20 text-purple-500' />} 
                title='Intelligent Automation'
                desc='Automate repetitive tasks and streamline workflows with AI-powered solutions, saving time and reducing human error while boosting overall efficiency.'
                />
            </div>
            <div>
                <AiCard
                 icon={<FaChartLine className='h-20 w-20 text-lime-500' />} 
                 title='Predictive Insights'
                 desc='Leverage AI to analyze data trends and predict future outcomes, enabling your business to make informed, proactive decisions with confidence.'
                 />
            </div>
            <div>
                <AiCard icon={<FaComments className='h-20 w-20 text-pink-500'/>}
                  title='Natural Language Processing'
                  desc='Utilize advanced AI to understand, interpret, and generate human language, creating smarter, more engaging interactions with your users.'
                  />
            </div>
        </div>
        

    </div>
  )
}

export default Ai