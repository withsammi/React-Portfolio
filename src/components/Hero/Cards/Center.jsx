import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
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
    <div className="flex w-full gap-5">
      {/* GitHub Card */}
      <NavLink
        to="https://github.com/withsammi"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(23,23,23)] flex flex-col justify-center items-center rounded-4xl h-auto basis-1/5 mx-auto group p-5"
      >
        <img
          src={Github}
          alt="Github"
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 filter invert opacity-50 group-hover:opacity-100 transition-all duration-300"
        />
        <div className="flex justify-between w-full mt-10">
          <div>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg text-left">
              Repos : {repoCount}
            </p>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg text-left">
              Followers : {followers}
            </p>
          </div>
          <div>
            <img
              src={Icon}
              alt="Icon"
              className="w-15 h-15 transition-all duration-100 ease-in-out opacity-50 group-hover:opacity-200 group-hover:scale-110"
            />
          </div>
        </div>
      </NavLink>

      {/* Middle Section */}
      <div className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] flex flex-row rounded-4xl h-auto basis-3/5 mx-auto">
      <Skills /></div>
      

      {/* Profiles Section */}
      <div
        className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] flex flex-col justify-center items-center rounded-4xl h-auto mx-auto p-6 group transition-all duration-300"
        style={{ width: "calc(20% + 50px)" }}
      >
        <div className="bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] rounded-4xl">
          <div className="flex space-x-4 p-4">
            <NavLink
              to="https://github.com/withsammi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] p-4 rounded-full hover:bg-gray-700 transition-all duration-300"
            >
              <img
                src={Github}
                alt="Github"
                className="w-8 h-8 transition-all duration-300 group-hover:invert"
              />
            </NavLink>
            <NavLink
              to="https://linkedin.com/in/withsammi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] p-4 rounded-full hover:bg-gray-700 transition-all duration-300"
            >
              <img
                src={Linkdin}
                alt="LinkedIn"
                className="w-8 h-8 transition-all duration-300 group-hover:invert"
              />
            </NavLink>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-500 text-sm mt-4">STAY CONNECTED</p>
            <p className="text-white text-lg font-semibold mt-2">Profiles</p>
          </div>
          <div className="ml-4"> {/* Added margin-left for spacing */}
            <img
              src={Icon}
              alt="Icon"
              className="w-15 h-15 mt-5 transition-all duration-300 ease-in-out opacity-50 group-hover:opacity-100 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
