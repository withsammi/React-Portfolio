import React from "react";
import BookIcon from "../../../assets/credentials.png";
import PortfolioIcon from "../../../assets/portfolio.png";
import Star from "../../../assets/Star.svg";
import Icon from "../../../assets/Icon.svg";

const Second = () => {
  return (
    <div className="">
      <div
        className="bg-gradient-to-br from-[rgb(38,38,38)] to-[rgb(15,15,15)] text-center mb-6 py-3 rounded-4xl overflow-hidden"
        style={{
          position: "relative",
          height: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            position: "absolute",
            animation: "marquee 3s linear infinite",
            width: "100%",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <h1
              key={i}
              className="pb-2 text-gray-500 text-l font-mono inline-block mb-1 mx-4"
            >
              PERSONAL CV AND <span className="text-gray-300">PORTFOLIO</span>
              <img
                src={Star}
                alt="Star"
                className="inline-block w-1 h-1 sm:w-3 sm:h-3 ml-2 mb-1"
              />
            </h1>
          ))}
        </div>
        <style>
          {`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}
        </style>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {/* First Icon Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] rounded-4xl p-4 flex flex-col items-center">
          <img
            src={BookIcon}
            alt="Book"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-50 lg:w-50"
          />
          
          <div className="flex">
            <p className="text-gray-400 text-xs font-mono mt-6 text-center">
              A LITTLE ABOUT ADITYA
            </p>
            <img
              src={Icon}
              alt="Icon"
              className="w-15 h-15 ml-7 transition-all duration-100 ease-in-out opacity-50 group-hover:opacity-200 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Second Icon Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] rounded-4xl p-4 flex flex-col items-center">
          <img
            src={PortfolioIcon}
            alt="Portfolio"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-50 lg:w-50"
          />
          <div className="flex">
            <p className="text-gray-400 text-sm font-mono mt-6 mr-5 text-center">
              PORTFOLIO
            </p>
            <img
              src={Icon}
              alt="Icon"
              className="w-15 h-15 ml-7 transition-all duration-100 ease-in-out opacity-50 group-hover:opacity-200 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
