import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Icon from "../../../assets/icon.svg";

const CvCard = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate("/cv"); // Redirect to the CV page
  };

  return (
    <div
      onClick={handleClick} // Add onClick handler to redirect
      className="bg-gradient-to-r from-[rgb(32,32,32)] to-[rgb(23,23,23)] flex flex-col lg:flex-row rounded-4xl h-auto w-full md:w-3/4 lg:w-1/2 p-5 group hover:invert transition-all duration-300 cursor-pointer"
    >
      {/* Responsive width and padding */}
      <div className="flex flex-col w-full">
        <h2 className="text-white mt-30 text-2xl md:text-3xl lg:text-4xl font-medium">
          {/* Responsive text sizes */}
          See my <span className="text-blue-500">CV</span>
        </h2>
        <div className="flex justify-between items-center">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-medium">
            Hire <span className="text-blue-500">Me</span>
          </h2>
          <img
            src={Icon}
            alt="Icon"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 transition-all duration-300 ease-in-out opacity-50 group-hover:opacity-100 group-hover:scale-110"
          />
          {/* Responsive icon sizes */}
        </div>
      </div>
    </div>
  );
};

export default CvCard;
