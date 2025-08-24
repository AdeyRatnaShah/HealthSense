import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-navbar-bg w-full text-white py-8">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 md:gap-20">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-3">HealthSense</h2>
          <p className="text-sm leading-6 max-w-xs mx-auto md:mx-0">
            Use the power of accurate machine learning models to check your health status
          </p>
        </div>

        {/* Quick Links (hidden on small screens) */}
        <div className="hidden md:block">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-emerald-600">Home</Link></li>
            <li><Link to="/services" className="hover:text-emerald-600">Services</Link></li>
            <li><Link to="/about" className="hover:text-emerald-600">About</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-600">Contact</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-3">Connect with me...</h3>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/AdeyRatnaShah" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://leetcode.com/u/arshah3f/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700">
              <SiLeetcode className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/adey-ratna-shah" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700">
              <CiLinkedin className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 mt-8 pt-4 text-gray-500 text-sm px-4">
        <div className="mb-2 md:mb-0">
          © {new Date().getFullYear()} HealthSense. All rights reserved
        </div>
        <div className="font-bold text-center">
          <p>Adey Ratna Shah</p>
        </div>
      </div>
    </footer>
  );
}
