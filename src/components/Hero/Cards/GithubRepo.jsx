import React from "react";
import { NavLink } from "react-router-dom";
import Github from "../../../assets/Github.svg";
import Icon from "../../../assets/icon.svg";

const GithubCard = ({ repoCount, followers }) => {
  return (
    <NavLink
      to="https://github.com/withsammi"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(23,23,23)] flex flex-col justify-between items-center rounded-2xl md:rounded-4xl p-4 md:p-5 w-full md:w-1/5 group transition-all duration-300 hover:shadow-lg"
    >
      <img
        src={Github}
        alt="Github"
        className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 filter invert opacity-50 group-hover:opacity-100 transition-all duration-300"
      />
      <div className="flex justify-between w-full mt-4 md:mt-10">
        <div>
          <p className="text-gray-300 text-xs font-mono md:text-sm lg:text-base">
            REPOSITORY : {repoCount}
          </p>
          <p className="text-gray-300 text-xs font-mono md:text-sm lg:text-base">
            FOLLOWERS : {followers}
          </p>
        </div>
        <div>
          <img
            src={Icon}
            alt="Icon"
            className="w-10 h-10 transition-all duration-300 ease-in-out opacity-50 group-hover:opacity-100 group-hover:scale-110"
          />
        </div>
      </div>
    </NavLink>
  );
};

export default GithubCard;
