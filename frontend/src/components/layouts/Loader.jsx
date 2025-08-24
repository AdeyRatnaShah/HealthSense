import React from 'react'

const Loader = () => {
  return (
    <div className='bg-loader-color  flex min-h-screen justify-center items-center'>
      <img src="loading.gif" alt="" className='rounded-full w-48 md:w-48 lg:80'/>
    </div>
  )
}

export default Loader
