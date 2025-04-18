import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import logo from "../../assets/Molecule.svg"; // Adjust the path if needed
import { FaLink } from "react-icons/fa";
import { BsLightbulb } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between px-20 py-15 bg-transparent text-white overflow-hidden">
      {/* Shooting Star Animation */}
      <style>
        {`
          @keyframes shootingStar {
            0% {
              transform: translateX(0) translateY(0) scale(1);
              opacity: 1;
            }
            100% {
              transform: translateX(100vw) translateY(-100vh) scale(0.5);
              opacity: 0;
            }
          }
          .shooting-star {
            position: absolute;
            width: 4px;
            height: 4px;
            background: white;
            box-shadow: 0 0 15px white, 0 0 30px white;
            animation: shootingStar 3s linear infinite;
          }
        `}
      </style>

      {/* Shooting Stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="shooting-star"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        ></div>
      ))}

      {/* Logo and Brand */}
      <div className="flex items-center space-x-3">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 cursor-pointer" />
          <h1 className="text-3xl font-bold text-gray-500 tracking-wide ml-4">
          AR
        </h1>
        </NavLink>
        
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-12 text-gray-400 uppercase">
        {["Home", "Bio", "Portfolio", "Contact", "Certificates"].map(
          (item, i) => (
            <li
              key={i}
              className="cursor-pointer transition duration-200 text-lg font-semibold hover:scale-125"
            >
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // Redirect "Home" to "/"
                className={
                  ({ isActive }) =>
                    isActive
                      ? "text-blue-500" // White color when on the active page
                      : "text-gray-400 hover:text-amber-500" // Amber-500 on hover
                }
              >
                {item}
              </NavLink>
            </li>
          )
        )}
        <li className="flex items-center space-x-1 hover:text-amber-500 cursor-pointer">
          <FaLink />
          <span>Links</span>
        </li>
      </ul>

      {/* Lightbulb Icon with Glow Effect */}
      <div className="relative cursor-pointer text-4xl mr10">
        <div className="absolute -inset-1 bg-gradient-to-r from-white to-white rounded-full blur-2xl opacity-75"></div>
        <BsLightbulb className="relative text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
