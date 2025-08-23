import { React, useState } from 'react'
// import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../layouts/Footer'


import Personalize from '../layouts/Personalize'
import Navbar from '../layouts/Navbar'
import ScrollToTop from '../layouts/ScrollTop'


const Layout = () => {


  return (
    <div className='min-h-screen flex flex-col'>
      <ScrollToTop/>
      <Navbar />
      <main className='flex-grow'>
        <div className='flex'>
          {/* <Personalize/> */}
          <div className='flex-1'>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
