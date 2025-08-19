import { React, useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import PersonalizeSideBar from '../layouts/PersonalizeSideBar'

const Personalize = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY <= 50) // true if near top
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">

      {/* 🔹 Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`
          md:hidden fixed left-4 z-40 p-3 rounded bg-gray-900 text-white shadow-lg
          transition-all duration-300
          ${atTop ? "top-20" : "top-0"}
        `}
      >
        <FaBars size={20} />
      </button>

      {/* 🔹 Overlay for mobile sidebar */}
      {isSideBarOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* 🔹 Sidebar */}
     <div
  className={`bg-gray- w-64 min-h-screen text-white
    fixed  md:absolute  transform
    ${isSideBarOpen ? "translate-x-0" : "-translate-x-full"}
    transition-transform duration-300 
    md:translate-x-0 md:static md:block z-40`}
>

        <PersonalizeSideBar toggleSidebar={toggleSidebar} />
      </div>
    </div>
  )
}

export default Personalize
