import React from "react";
import Icon from "../../assets/Icon.svg";
import { NavLink } from "react-router-dom";
import Signature from "../../assets/Signature.png";
import Icon2 from "../../assets/icon2.png";
import Github from "../../assets/Github.svg";
import Linkdin from "../../assets/Linkdin.svg";

const Section3 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:mx-15 mx-5">
      {/* Qualification Card */}
      <NavLink
        to="/qualification" // Redirect to Qualification page
        className="w-full md:w-1/3 bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] rounded-4xl p-5 hover:cursor-grab"
      >
        <img
          src={Signature}
          alt="Signature"
          className="mx-auto w-full max-w-[150px] h-auto mt-5 mb-10 invert object-contain"
        />
        <div className="flex justify-between items-center group">
          <div>
            <h2 className="text-gray-500 text-sm">A LITTLE ON ME</h2>
            <p className="text-white text-2xl">Qualification</p>
          </div>
          <div>
            <img
              src={Icon}
              alt="Icon"
              className="w-15 h-15 transition-all duration-300 ease-in-out opacity-50 group-hover:opacity-100 group-hover:scale-110"
            />
          </div>
        </div>
      </NavLink>

      {/* Collaborate Card */}
      <div className="w-full md:w-1/3 bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] rounded-4xl p-5 relative hover:cursor-grab">
        <img
          src={Icon2}
          alt="Icon 2"
          className="absolute top-0 mb-5 w-12 h-19"
        />
        <div className="flex justify-between items-center group mt-23">
          <div>
            <h2 className="text-white text-5xl font-semibold">Let's</h2>
            <p className="text-blue-500 text-4xl bottom-5">Collaborate</p>
          </div>
          <div>
            <img
              src={Icon}
              alt="Icon"
              className="w-15 h-15 transition-all duration-300 ease-in-out opacity-50 group-hover:opacity-100 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Profiles Card */}
      <div className="w-full md:w-1/3 bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] rounded-4xl p-5 hover:cursor-grab">
        <div className="bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] rounded-2xl md:rounded-4xl p-2 md:p-4 mb-10 group">
          <div className="flex justify-center space-x-3 md:space-x-4 w-auto">
            <NavLink
              to="https://github.com/withsammi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
            >
              <img
                src={Github}
                alt="Github"
                className="w-6 h-6 md:w-8 md:h-8 invert text-white transition-all duration-300 hover:scale-120"
              />
            </NavLink>
            <NavLink
              to="https://linkedin.com/in/withsammi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 md:p-3 rounded-full hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
            >
              <img
                src={Linkdin}
                alt="LinkedIn"
                className="w-6 h-6 md:w-8 md:h-8 invert text-white transition-all duration-300 hover:scale-120"
              />
            </NavLink>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 md:mt-0 group">
          <div>
            <p className="text-gray-500 text-xs md:text-sm">STAY CONNECTED</p>
            <p className="text-white text-sm md:text-lg font-medium md:font-semibold">
              Profiles
            </p>
          </div>
          <img
            src={Icon}
            alt="Icon"
            className="w-15 h-15 transition-all duration-300 ease-in-out opacity-50 group-hover:opacity-100 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
