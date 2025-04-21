import React from "react";
import Star from "../../../assets/Star.svg";

const Marquee = () => {
  return (
    <div
      className="bg-gradient-to-br from-[rgb(38,38,38)] to-[rgb(15,15,15)] text-center mb-5 mx-5 py-3 rounded-4xl overflow-clip"
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
          animation: "marquee 5s linear infinite",
          width: "100%",
        }}
      >
        {[...Array(10)].map((_, i) => (
          <h1
            key={i}
            className="pb-2 text-gray-500 text-l font-mono inline-block mb-1 mx-4"
          >
            Hey there visitor, Welcome to my PORTFOLIO
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
             100% 
             {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
