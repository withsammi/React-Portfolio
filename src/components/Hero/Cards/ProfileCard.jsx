import React from "react";
import { NavLink } from "react-router-dom";
import photo from "../../../assets/PHOTO.jpg";
import Code from "../../../assets/Code.svg";
import Icon from "../../../assets/icon.svg";
import { useScrambleText } from "../../../utils/useScrambleText"; // adjust the path if needed

const ProfileCard = () => {
  const { text, handleHover } = useScrambleText("MERN");

  return (
    <NavLink to="/bio" className="block group">
      <div className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] flex flex-row rounded-4xl h-auto w-auto mx-auto">
        {/* Image Section */}
        <div className="w-1/2 p-5 flex justify-center items-center">
          <img
            src={photo}
            alt="Aditya's Photo"
            className="rounded-tl-4xl rounded-br-4xl w-[100%] transition-transform duration-500 ease-in-out group-hover:scale-90"
          />
        </div>

        {/* Text Section */}
        <div className="w-1/2 flex flex-col items-start pl-10 pt-10 pr-10 pb-5">
          <h1 className="text-gray-600 text-4xl font-mono mb-10">Aditya Rai</h1>
          <h2
            className="flex items-center text-gray-400 mb-5 cursor-pointer"
            onMouseEnter={handleHover}
          >
            <span className="text-amber-600 mr-2">{text}</span> Developer{" "}
            <img src={Code} alt="CODE" className="w-6 h-6 ml-2 filter invert" />
          </h2>
          <p className="text-gray-400 mb-5 font-mono">
            Currently working on <span className="text-white">React</span> projects
          </p>
          <div className="flex items-center text-white font-bold">
            <p className="text-gray-500 text-sm">Based in india</p>
            <img
              src={Icon}
              alt="Icon"
              className="w-15 h-15 ml-5 transition-all duration-100 ease-in-out opacity-50 group-hover:opacity-200 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProfileCard;
