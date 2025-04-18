import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaLink } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Bio", "Projects", "Contact",];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative bg-transparent text-white px-5 md:px-20 py-6 flex flex-col md:flex-row items-center justify-between">
      {/* Logo + Hamburger */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <NavLink to="/" className="flex items-center space-x-3">
          <h1 className="text-3xl md:text-8xl font-bold text-purple-500 tracking-wide">AR</h1>
        </NavLink>

        <button onClick={toggleMenu} className="md:hidden text-white text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center text-gray-400 uppercase w-full transition-all duration-300">
          {navItems.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-semibold hover:text-amber-500"
              >
                {item}
              </NavLink>
            </li>
          ))}
          <li className="flex justify-center items-center space-x-2 hover:text-amber-500">
            <FaLink />
            <span>Links</span>
          </li>
        </ul>
      )}

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-12 text-gray-400 uppercase">
        {navItems.map((item, i) => (
          <li
            key={i}
            className="cursor-pointer transition duration-200 text-lg font-semibold hover:scale-125"
          >
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-amber-500"
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
        
      </ul>
    </nav>
  );
};

export default Navbar;
