import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Activity, HeartPulse } from "lucide-react"; // icons

const PersonlizeSideBar = ({ toggleSidebar }) => {
  // Base NavLink styles
  const baseClasses =
    "relative flex rounded transition-colors duration-200 w-personalize-link-width h-16 ";

  const inactiveClasses =
    "text-gray-300 hover:bg-gray-700 hover:text-white";
  const activeClasses = "bg-gray-700 text-white shadow-md";

  return (
    <div className="p-6 flex flex-col h-full gap-6 bg-navbar-bg text-white md:min-h-screen border-y-4 rounded-r-xl">
      {/* Close button (mobile only) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded bg-gray-900 text-white shadow-lg hover:bg-red-600 transition-all duration-300 self-end"
      >
        ✕
      </button>

      {/* Home Link */}
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${baseClasses} items-center   mt-4 ${isActive ? activeClasses : inactiveClasses}`
        }
      >
        {/* Icon aligned left */}
        <Home size={20} className="" />
        {/* Center text */}
        <span className="ml-2">Home</span>
      </NavLink>

      {/* Section Title */}
      <h2 className=" text-sm font-semibold text-center text-gray-400 uppercase tracking-wide">
        Choose a Model
      </h2>

      {/* CKD */}
      <NavLink
        to="/predict/ckd"
        className={({ isActive }) =>
          `${baseClasses} items-center ${isActive ? activeClasses : inactiveClasses}`
        }
      >
        <Activity size={20} className="" />
        <span className="ml-2 ">Chronic Kidney Disease</span>
      </NavLink>

      {/* Diabetes */}
      <NavLink
        to="/predict/diabetes"
        className={({ isActive }) =>
          `${baseClasses} items-center ${isActive ? activeClasses : inactiveClasses}`
        }
      >
        <HeartPulse size={20} className="" />
        <span className="ml-2 text-center">Diabetes</span>
      </NavLink>
    </div>
  );
};

export default PersonlizeSideBar;
