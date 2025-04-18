import React from "react";
import { NavLink } from "react-router-dom";
import Github from "../../../assets/Github.svg";
import Linkdin from "../../../assets/Linkdin.svg";
import Icon from "../../../assets/Icon.svg";

const Profile = () => {
  return (
    <div className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] flex flex-col justify-between rounded-2xl md:rounded-4xl p-4 md:p-6 md:w-1/5 group transition-all duration-300 hover:shadow-lg">
      <div className="bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] rounded-2xl md:rounded-4xl p-2 md:p-4">
        <div className="flex justify-center space-x-3 md:space-x-4">
          <NavLink
            to="https://github.com/withsammi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 md:p-3 rounded-full hover:scale-110 transition-all duration-300"
          >
            <img
              src={Github}
              alt="Github"
              className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 group-hover:invert"
            />
          </NavLink>
          <NavLink
            to="https://linkedin.com/in/withsammi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 md:p-3 rounded-full hover:scale-110 transition-all duration-300"
          >
            <img
              src={Linkdin}
              alt="LinkedIn"
              className="w-6 h-6 md:w-8 md:h-8 transition-all duration-300 group-hover:invert"
            />
          </NavLink>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3 md:mt-0">
        <div>
          <p className="text-gray-500 text-xs md:text-sm">STAY CONNECTED</p>
          <p className="text-white text-sm md:text-lg font-medium md:font-semibold">
            Profiles
          </p>
        </div>
        <img
          src={Icon}
          alt="Icon"
          className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 ease-in-out opacity-50 group-hover:opacity-100 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Profile;
