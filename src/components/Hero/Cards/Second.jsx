import React from "react";
import BookIcon from "../../../assets/credentials.png";
import PortfolioIcon from "../../../assets/portfolio.png";
import Star from "../../../assets/Star.svg";

const Second = () => {
  return (
    <div>
      <div
        className="bg-gradient-to-br from-[rgb(38,38,38)] to-[rgb(15,15,15)] text-center mb-6 py-4 rounded-4xl overflow-hidden"
        style={{
          position: "relative",
          height: "50px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            position: "absolute",
            animation: "marquee 10s linear infinite",
          }}
        >
          <h1 className="text-gray-500 inline-block">
            PERSONAL CV AND <span className="text-amber-500">PORTFOLIO</span>
            <img
              src={Star}
              alt="Star"
              className="inline-block w-3 h-3 ml-2 mb-1"
            />
          </h1>
        </div>
        <style>
          {`
            @keyframes marquee {
              0% {
                transform: translateX(100%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
          `}
        </style>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="w-full bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] rounded-lg p-4 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={BookIcon}
            alt="Book"
            className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"
          />
          <p className="text-gray-400 text-sm md:text-base mt-4">
            A LITTLE ON ADITYA
          </p>
        </div>
        <div className="w-full bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] rounded-lg p-4 flex flex-col items-center shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src={PortfolioIcon}
            alt="Portfolio"
            className="h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"
          />
          <p className="text-gray-400 text-sm md:text-base mt-4">
            MY WORK SHOWCASE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Second;
