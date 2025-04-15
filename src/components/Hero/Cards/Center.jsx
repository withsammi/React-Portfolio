import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Github from "../../../assets/Github.svg";
import Linkdin from "../../../assets/Linkdin.svg";
import Icon from "../../../assets/Icon.svg";
import Skills from "../../../../Pages/Skills";

const Center = () => {
  const [repoCount, setRepoCount] = useState(0);
  const [followers, setFollowers] = useState(0);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/withsammi"
        );
        setRepoCount(response.data.public_repos);
        setFollowers(response.data.followers);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full gap-4 md:gap-5 p-2 md:p-0">
      {/* GitHub Card - Moved to top on mobile */}
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
            <p className="text-gray-300 text-xs md:text-sm lg:text-base">
              Repos: {repoCount}
            </p>
            <p className="text-gray-300 text-xs md:text-sm lg:text-base">
              Followers: {followers}
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

      {/* Middle Section - Skills */}
      <div className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] rounded-2xl md:rounded-4xl w-full md:w-3/5">
        <Skills />
      </div>

      {/* Profiles Section */}
      <div className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] flex flex-col justify-between rounded-2xl md:rounded-4xl p-4 md:p-6 w-full md:w-1/5 group transition-all duration-300 hover:shadow-lg">
        <div className="bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] rounded-2xl md:rounded-4xl p-2 md:p-4">
          <div className="flex justify-center space-x-3 md:space-x-4">
            <NavLink
              to="https://github.com/withsammi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] p-2 md:p-3 rounded-full hover:bg-gray-700 transition-all duration-300"
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
              className="bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] p-2 md:p-3 rounded-full hover:bg-gray-700 transition-all duration-300"
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
    </div>
  );
};

export default Center;