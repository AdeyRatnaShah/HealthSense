import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import HomePageModels from '../layouts/HomePageModels'

const Home = () => {
  return (
    // <div className="relative  my-10  flex items-center justify-center px-10 ">
    //   {/* Left Image */}
    //   <div className="relative w-1/2 flex justify-center ">
    //     <img 
    //       src="heroImage.jpg" 
    //       alt="hero" 
    //       className="h-[400px] object-cover shadow-lg"
    //     />
    //   </div>

    //   {/* Right Panel */}
    //   <div className="w-1/2 bg-gray-200 p-36 relative h-[500px] -ml-20  shadow-md flex items-center">
    //     <p className="text-3xl font-semibold leading-relaxed">
    //       Integrate the power of <span className="text-emerald-600">Machine Learning Models </span> 
    //        to get the prediction of your disease in seconds.
    //     </p>
    //   </div>
    // </div>
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
        <div className='w-1/2 relative bg-image-bg '>

          <img src="imageOne.jpg" alt="" className='ml-30 my-10 border-16 border-white ' />
        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <p className='text-6xl p-40'>
            “Harness the power of AI to get fast and reliable health predictions”
          </p>
        </div>
      </div>


      <HomePageModels/>
      {/* <Footer/> */}
    </>



  )
}

export default Home
