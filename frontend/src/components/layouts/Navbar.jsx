import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { LoggedInContext } from '../../App';
const Navbar = () => {
    // const {isLoggedIn, setIsLoggedIn} = useContext(LoggedInContext)
    const isLoggedIn = true;

    return (
        <div className='relative flex justify-between items-center '>
            <div className='flex items-center space-x-4 '>
                <NavLink to="/"
                    end
                    className={({ isActive }) =>
                        `py-3 px-4 flex items-center justify-center space-x-2 capitalize cursor-pointer font-bold text-2xl
     transition-all duration-300 ease-in-out text-white bg-navbar-bg w-personalize-width rounded-br-xl
 }`
                    }
                >
                    <div>

                    <img src="logo.png" alt="" className='items-center mt-1' />
                    </div>
                    <span>HealthSense</span>
                </NavLink>
                <NavLink
                    to="/services"
                    end

                    className={({ isActive }) =>
                        `py-3 px-4 rounded flex items-center space-x-2 capitalize cursor-pointer border-b-4
     transition-all duration-300 ease-in-out ml-8
     ${isActive
                            ? "text-emerald-600 border-emerald-500"
                            : " border-transparent hover:text-emerald-600 hover:border-emerald-500"}`
                    }
                >
                    <span>Services</span>
                </NavLink>


                <NavLink to="/about"
                    className={({ isActive }) =>
                        `py-3 px-4 rounded flex items-center space-x-2 capitalize cursor-pointer border-b-4
     transition-all duration-300 ease-in-out
     ${isActive
                            ? "text-emerald-600 border-emerald-500"
                            : " border-transparent hover:text-emerald-600 hover:border-emerald-500"}`
                    }
                >

                    <span>About</span>
                </NavLink>

                <NavLink to="/contact" 
                 className={({ isActive }) =>
                        `py-3 px-4 rounded flex items-center space-x-2 capitalize cursor-pointer border-b-4
     transition-all duration-300 ease-in-out
     ${isActive
                            ? "text-emerald-600 border-emerald-500"
                            : " border-transparent hover:text-emerald-600 hover:border-emerald-500"}`
                    }
                >

                    <span>Contact</span>
                </NavLink>


            </div>


            <div className='flex items-center gap-2 justify-center'>
                <NavLink to={isLoggedIn ? '/profile' : '/login'}
                    end 
                    className={({ isActive }) =>
                        `py-3 px-4 rounded flex gap items-center space-x-2 capitalize cursor-pointer border-b-4
     transition-all duration-300 ease-in-out
     ${isActive
                            ? "text-emerald-600 border-emerald-500"
                            : "border-transparent hover:text-emerald-600 hover:border-emerald-500"}`
                    }
                    >
                    <CgProfile className='mt-0.5 h-4 w-4' />
                    
                    <span>{isLoggedIn ? 'Visit Profile':'Login' }</span>
                </NavLink>
            </div>

        </div>
    )
}

export default Navbar
