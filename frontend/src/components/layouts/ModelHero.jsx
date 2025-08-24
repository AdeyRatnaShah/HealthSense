import React from 'react'

const ModelHero = ({ info }) => {
  return (
    <div className="m-4 md:m-8">
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 p-6 md:p-8 gap-6 rounded-lg">
        
        {/* Left: Name & Disease */}
        <div className="text-center md:text-left">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold p-2 md:p-4">
            {info.name}
          </p>
          <p className="text-xl md:text-3xl lg:text-4xl p-2 md:p-4">
            Disease: {info.disease}
          </p>
        </div>

        {/* Right: Avatar */}
        <div className="flex items-center justify-center">
          <div className="bg-name-photo-bg w-24 h-24 md:w-40 md:h-40 lg:w-52 lg:h-52 flex items-center justify-center text-4xl md:text-6xl font-bold rounded-full shadow-md">
            {info.name[0]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelHero
