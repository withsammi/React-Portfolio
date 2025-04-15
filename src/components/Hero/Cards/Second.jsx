import React from "react";
import BookIcon from "../../../assets/credentials.png"; // Replace with the actual path to your book icon
import PortfolioIcon from "../../../assets/portfolio.png"; // Replace with the actual path to your portfolio icon

import Icon from "../../../assets/Icon.svg";

const Second = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white rounded-3xl">
      {/* Inline CSS for Animation */}
      <style>
        {`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .animate-marquee {
                    display: flex;
                    animation: marquee 10s linear infinite;
                }
                `}
      </style>

      {/* Header */}
      <div className="overflow-hidden w-full mb-5 bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] py-4 rounded-4xl ">
        <div className="animate-marquee whitespace-nowrap">
          <h1 className="tracking-widest font-light inline-block mx-5">
            PERSONAL CV AND <span className="text-amber-500">PORTFOLIO</span>
          </h1>
          <h1 className="tracking-widest font-light inline-block mx-5">
            PERSONAL CV AND <span className="text-amber-500">PORTFOLIO</span>
          </h1>
          <h1 className="tracking-widest font-light inline-block mx-5">
            PERSONAL CV AND <span className="text-amber-500">PORTFOLIO</span>
          </h1>
          {/* Duplicate content for seamless scrolling */}
          <h1 className="tracking-widest font-light inline-block mx-5">
            PERSONAL CV AND <span className="text-amber-500">PORTFOLIO</span>
          </h1>
          <h1 className="tracking-widest font-light inline-block mx-5">
            PERSONAL CV AND <span className="text-amber-500">PORTFOLIO</span>
          </h1>
          <h1 className="tracking-widest font-light inline-block mx-5">
            PERSONAL CV AND <span className="text-amber-500">PORTFOLIO</span>
          </h1>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-7">
        {/* Card 1: Qualifications */}
        <div className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] rounded-2xl shadow-lg w-64 flex flex-col items-center group">
          <img src={BookIcon} alt="Qualifications" className="w-50 h-50 mt-0" />
          <div className="flex">
            <p className="text-gray-500 text-sm pt-5">A LITTLE ON ADITYA</p>
            <img
              src={Icon}
              alt="Icon"
              className="w-15 h-15 ml-5 mb-5 transition-all duration-300 ease-in-out opacity-50 group-hover:opacity-100 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Card 2: Portfolio */}
        <div className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] rounded-2xl shadow-lg w-64 flex flex-col items-center group">
          <img src={PortfolioIcon} alt="Portfolio" className="w-50 h-50" />
          <div className="flex">
            <p className="text-gray-500 text-sm pt-5">PORTFOLIO</p>
            <img
              src={Icon}
              alt="Icon"
              className="w-15 h-15 ml-5 mb-5 transition-all duration-300 ease-in-out opacity-50 group-hover:opacity-100 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
