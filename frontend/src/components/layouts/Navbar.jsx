import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg"
import { FaBars, FaTimes } from "react-icons/fa"
import { LoggedInContext } from '../../App'

const Navbar = () => {
  const { isLoggedIn } = useContext(LoggedInContext)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative flex justify-between items-center">
      {/* Left Section (Logo + Links for desktop) */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `py-3 px-4 flex items-center justify-center space-x-2 capitalize cursor-pointer font-bold text-2xl
            transition-all duration-300 ease-in-out text-white bg-navbar-bg w-personalize-width rounded-br-xl`
          }
        >
          <div>
            <img src="logo.png" alt="" className="items-center mt-1" />
          </div>
          <span>HealthSense</span>
        </NavLink>

        {/* Links (hidden on mobile, flex on md+) */}
        <div className="hidden md:flex items-center">
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

          <NavLink
            to="/about"
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

          <NavLink
            to="/contact"
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
      </div>

      {/* Profile (desktop only) */}
      {isLoggedIn && (
        <div className="hidden md:flex items-center gap-2 justify-center">
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              `py-3 px-4 rounded flex gap items-center space-x-2 capitalize cursor-pointer border-b-4
              transition-all duration-300 ease-in-out
              ${isActive
                ? "text-emerald-600 border-emerald-500"
                : "border-transparent hover:text-emerald-600 hover:border-emerald-500"}`
            }
          >
            <CgProfile className="mt-0.5 h-4 w-4" />
            <span>Visit Profile</span>
          </NavLink>
        </div>
      )}

      {/* Hamburger (mobile only) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden flex flex-col justify-center text-center items-start px-6 py-4 space-y-2 z-50">
          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="w-full py-2 border-b hover:text-emerald-600 "
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="w-full py-2 border-b hover:text-emerald-600"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-full py-2 border-b hover:text-emerald-600"
          >
            Contact
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="w-full py-2 flex items-center gap-1 hover:text-emerald-600 justify-center"
            >
              <CgProfile className="h-5 w-5" />
              <span> Visit Profile</span>
            </NavLink>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar
