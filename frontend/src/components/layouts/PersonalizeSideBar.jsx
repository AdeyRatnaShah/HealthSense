import React, { useContext } from 'react'
import { Link, NavLink, useNavigate, useOutlet, useOutletContext, useSearchParams } from 'react-router-dom'
import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from 'react-icons/fa'
import { useState } from 'react';

import { FaBars } from 'react-icons/fa'

const PersonlizeSideBar = (props) => {
    
   
    return (
        <div className='p-6 flex flex-col h-full gap-6 bg-gray-800 text-white md:min-h-screen '>

            <button
                    onClick={props.toggleSidebar}
                    className={`
                      md:hidden p-3 rounded bg-gray-900 text-white shadow-lg
                      transition-all duration-300 
                    `}
                  >
                    
                    x
                  </button>
            

            <NavLink to="/"
                end onClick={() => handleCategoryChange('general')} className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2 capitalize" : "text-gray hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 capitalize"}>

                <span>Home</span>
            </NavLink>

            <NavLink to="/business"
                end onClick={() => handleCategoryChange('business')} className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2 capitalize" : "text-gray hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 capitalize"}>

                <span>business</span>
            </NavLink>

            <NavLink to="/entertainment" onClick={() => handleCategoryChange('entertainment')} className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center  capitalize space-x-2 " : "text-gray hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 capitalize"}>

                <span>entertainment</span>
            </NavLink>

            <NavLink to="/health" onClick={() => handleCategoryChange('health')} className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center capitalize  space-x-2" : "text-gray hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 capitalize"}>

                <span>health</span>
            </NavLink>

            <NavLink to="/science" onClick={() => handleCategoryChange('science')} className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center capitalize  space-x-2" : "text-gray hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 capitalize"}>

                <span>science</span>
            </NavLink>

            <NavLink to="/sports" onClick={() => handleCategoryChange('sports')} className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center capitalize  space-x-2" : "text-gray hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 capitalize"}>

                <span>sports</span>
            </NavLink>

            <NavLink to="/technology" onClick={() => handleCategoryChange('technology')} className={({ isActive }) => isActive ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center capitalize  space-x-2" : "text-gray hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2 capitalize"}>

                <span>technology</span>
            </NavLink>

        </div>
    )
}

export default PersonlizeSideBar
