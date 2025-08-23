import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CiMail } from "react-icons/ci";
export default function Footer() {
  return (
    <footer className="bg-navbar-bg w-full  text-white py-8 "> 
      <div className="max-w-6xl mx-auto px-4 flex justify-around gap-20">

        <div>
          <h2 className="text-xl font-bold mb-3  ">HealthSense</h2>
          <p className="text-sm leading-6 w-40">
            Use the power of the accurate machine learning models to check your health status
          </p>
        </div>

        <div className="hidden md:block ">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-emerald-600">Home</Link></li>
            <li><Link to="/services" className="hover:text-emerald-600">Services</Link></li>
            <li><Link to="/about" className="hover:text-emerald-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-600">Contact</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center mr-2">
          <h3 className="text-lg font-semibold  mb-3">Connect with me...</h3>
          <div className="flex items-center  space-x-4">
            <a href="https://github.com/AdeyRatnaShah" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 h-8 w-8"><FaGithub className="h-6 w-6" /></a>
            <a href="https://leetcode.com/u/arshah3f/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 h-8 w-8"><SiLeetcode className="h-6 w-6" /></a>
            <a href="https://www.linkedin.com/in/adey-ratna-shah" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 h-8 w-8"><CiLinkedin className="h-8 w-8" /></a>



          </div>
        </div>

      </div>

      <div className="flex flex-col md:flex-row text-2xl justify-between border-t border-gray-700 mt-8 pt-4 text-gray-500 items-center">


        <div className="hidden md:flex md:ml-10">
          © {new Date().getFullYear()} HealthSense. All rights reserved
        </div>


        <div className="hidden md:flex ml-10"></div>


        <div className="md:mr-10 font-bold text-center">
          <p>Adey Ratna Shah</p>
        </div>

      </div>

    </footer>
  );
}