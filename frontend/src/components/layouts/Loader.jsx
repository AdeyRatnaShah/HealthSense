import React from 'react'

const Loader = () => {
  return (
    <div className='bg-loader-color flex min-h-screen justify-center items-center'>
      <img src="loading.gif" alt="" className='rounded-full  h-96 w-96'/>
    </div>
  )
}

export default Loader
