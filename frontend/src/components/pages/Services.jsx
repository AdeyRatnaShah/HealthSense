import React from 'react'
import Personalize from '../layouts/Personalize'
import { FaArrowRight } from "react-icons/fa"
import HomePageModels from '../layouts/HomePageModels'

const Services = () => {
  return (
    <div className="flex lg:flex-row">
      {/* Sidebar */}
      <Personalize />

      {/* Main Content */}
      <div className="mx-4 md:mx-10 rounded w-full">
        {/* Steps Section */}
        <div className="border-b-4 pb-10 md:pb-16">
          <h1 className="m-6 md:m-20 text-3xl md:text-5xl lg:text-6xl font-bold text-center md:text-left">
            Get Your Prediction In 3 Easy Steps:
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg md:text-2xl lg:text-3xl text-white font-mono">
            
            {/* Step 1 */}
            <div className="p-6 md:p-10 w-full md:w-72 h-52 md:h-80 flex items-center justify-center text-center bg-zinc-900 rounded-xl shadow-lg">
              <p>Choose Disease / Models</p>
            </div>

            {/* Arrow (hidden on small screens) */}
            <FaArrowRight className="hidden md:block text-zinc-900 text-4xl" />

            {/* Step 2 */}
            <div className="p-6 md:p-10 w-full md:w-72 h-52 md:h-80 flex items-center justify-center text-center bg-zinc-900 rounded-xl shadow-lg">
              <p>Fill Details / Upload Reports</p>
            </div>

            {/* Arrow (hidden on small screens) */}
            <FaArrowRight className="hidden md:block text-zinc-900 text-4xl" />

            {/* Step 3 */}
            <div className="p-6 md:p-10 w-full md:w-72 h-52 md:h-80 flex items-center justify-center text-center bg-zinc-900 rounded-xl shadow-lg">
              <p>Submit and Get Predictions</p>
            </div>
          </div>
        </div>

        {/* Models Section */}
        <div className="mt-10">
          <HomePageModels />
        </div>
      </div>
    </div>
  )
}

export default Services
