import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import HomePageModels from '../layouts/HomePageModels'

const Home = () => {
  return (

    <>

      <div className="">
        {/* Navbar should be in front */}
        {/* <div className="z-10">
          <Navbar />
        </div> */}

        {/* Background image */}
        <img
          src="heroBanner.png"
          alt=""
          className=" top-0 left-0 z-0 "
        />


      </div>
      <div className='my-10 z-50 flex '>
        <div className='md:w-1/2 relative bg-image-bg '>

          <img src="imageOne.jpg" alt="" className='md:ml-30 md:my-10 border-16 border-white ' />
        </div>
        <div className='md:w-1/2 flex items-center justify-center'>
          <p className='lg:text-6xl sm:text-xl md:text-2xl md:p-40 lg:p-40'>
            “Harness the power of AI to get fast and reliable health predictions”
          </p>
        </div>
      </div>

      <div className='m-20'>

        <HomePageModels />
      </div>

      {/* <Footer/> */}
    </>



  )
}

export default Home
