import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import BookIcon from "../../../assets/credentials.png";
import PortfolioIcon from "../../../assets/portfolio.png";
import Icon from "../../../assets/icon.svg";
import Marquee from "./Marquee"; // Corrected the import path

const Second = () => {
  return (
    <div className="">
      <Marquee />

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* First Icon Section */}
        <NavLink
          to="/qualification" // Redirect to Qualification page
          className="w-full md:w-1/2 bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] rounded-4xl p-4 flex flex-col items-center group transition-all duration-300 hover:shadow-lg"
        >
          <img
            src={BookIcon}
            alt="Book"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-50 lg:w-50 opacity-50 group-hover:opacity-100 transition-all duration-300"
          />
          <div className="flex">
            <p className="text-gray-400 text-xs font-mono mt-6 text-center">
              A LITTLE ABOUT ADITYA
            </p>
            <img
              src={Icon}
              alt="Icon"
              className="w-15 h-15 ml-7 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
        </NavLink>

        {/* Second Icon Section */}
        <NavLink to="/Projects" className="w-full md:w-1/2 bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] rounded-4xl p-4 flex flex-col items-center group">
          <img
            src={PortfolioIcon}
            alt="Portfolio"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-50 lg:w-50 opacity-50 group-hover:opacity-100 transition-all duration-300"
          />
          <div className="flex">
            <p className="text-gray-400 text-sm font-mono mt-6 mr-5 text-center">
              Projects
            </p>
            <img
              src={Icon}
              alt="Icon"
              className="w-15 h-15 ml-7 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Second;
