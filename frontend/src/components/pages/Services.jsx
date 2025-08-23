import React from 'react'
import Personalize from '../layouts/Personalize'
import { FaArrowRight } from "react-icons/fa";
import HomePageModels from '../layouts/HomePageModels';

const Services = () => {
  return (
    <div className='flex'>
      <Personalize />

      <div className='mx-10 rounded w-full '>
        
        <div className='border-b-4 pb-16'>
        <h1 className='m-20 text-6xl '>Get Your Prediction In 3 Easy Steps: </h1>
        <div className='flex text-3xl gap-4 text-white font-mono items-center justify-center 
        '>
          <div className='p-10 w-80 h-80 flex items-center text-center bg-zinc-900 rounded capitalize  '>
            <p> Choose Disease/ Models</p>
          </div>
          <FaArrowRight className='text-zinc-900 ' />
          <div className='p-10 w-80 h-80 flex text-center items-center bg-zinc-900 rounded '>
            Fill Details/
            Upload Reports

          </div>
          <FaArrowRight className='text-zinc-900 ' />
          <div className='p-10 w-80 h-80 flex items-center text-center  bg-zinc-900 rounded '>
            Submit and get Predictions
          </div>

        </div>


        </div>
        <div>
          {/* <h4 className='m-20 text-4xl'> Choose your Model:</h4> */}
          <HomePageModels/>
        </div>
      </div>
    </div>
  )
}

export default Services
