import React from 'react'

const ModelHero = ({info}) => {
  return (
    <div>
      <div className="flex justify-around bg-gray-200 p-8 m-8  gap-6">
        <div className="">
          <p className="text-6xl font-bold p-4">{info.name}</p>
          <p className="text-4xl p-4">Disease: {info.disease}</p>
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-fuchsia-50 p-20 rounded-full text-6xl font-bold">
            {info.name[0]}
          </div>
        </div>
      </div>

      <div className='bg-gray-200 p-8 m-8 '>
        <p className='text-3xl font-semibold ml-16 uppercase font-mono'>Fill and Verify Details</p>
      </div>
    </div>
  )
}

export default ModelHero
