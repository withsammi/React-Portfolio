import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { centerVariants } from "../../Animations/motionVariants"; // Import centerVariants
import { NavLink } from "react-router-dom";
import Github from "../../assets/Github.svg";
import Linkdin from "../../assets/Linkdin.svg";

const GetInTouch = () => {
  return (
    <div className="p-4">
      {/* Email Section */}
      <motion.div
        className="flex flex-col justify-between items-center bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] mx-4 mb-5 rounded-4xl p-4"
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="text-left font-mono mb-4">
          <a
            className="text-gray-600 block mb-2 text-lg"
            href="mailto:adityrai.cs@gmail.com"
          >
            adityrai.cs@gmail.com
          </a>
          <a
            className="text-gray-600 block text-lg"
            href="mailto:e21cseu0142@bennett.edu.in"
          >
            e21cseu0142@bennett.edu.in
          </a>
        </div>
        <div className="bg-gradient-to-br from-[rgb(13,13,13)] to-[rgb(52,52,52)] p-4 rounded-4xl">
          <img src="/Mail.svg" alt="Mail logo" className="w-12 h-12 invert" />
        </div>
      </motion.div>

      {/* Phone Section */}
      <motion.div
        className="flex flex-col justify-between items-center bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] mx-4 mb-5 rounded-4xl p-4"
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="text-left font-mono mb-4">
          <a className="text-gray-600 block text-lg" href="tel:+918709678394">
            +918709678394
          </a>
        </div>
        <div className="bg-gradient-to-br from-[rgb(13,13,13)] to-[rgb(52,52,52)] p-4 rounded-4xl">
          <img src="/Call.svg" alt="Call logo" className="w-12 h-12 invert" />
        </div>
      </motion.div>

      {/* Location Section */}
      <motion.div
        className="flex flex-col justify-between items-center bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] mx-4 mb-5 rounded-4xl p-4"
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="text-left font-mono mb-4">
          <a
            className="text-gray-600 block text-lg"
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            GREATER NOIDA [PIN-201310] INDIA
          </a>
        </div>
        <div className="bg-gradient-to-br from-[rgb(13,13,13)] to-[rgb(52,52,52)] p-4 rounded-4xl">
          <img
            src="/Location1.svg"
            alt="Location logo"
            className="w-12 h-12 invert"
          />
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center space-x-3 md:space-x-4 bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] p-5 m-5 rounded-4xl"
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* GitHub Link */}
        <NavLink
          to="https://github.com/withsammi"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] p-2 md:p-3 rounded-full hover:bg-gray-700 transition-all duration-300"
        >
          <img
            src={Github}
            alt="Github"
            className="w-6 h-6 invert md:w-8 md:h-8 transition-all duration-300 group-hover:invert group-hover:opacity-100 opacity-50"
          />
        </NavLink>

        {/* LinkedIn Link */}
        <NavLink
          to="https://linkedin.com/in/withsammi"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] p-2 md:p-3 rounded-full hover:bg-gray-700 transition-all duration-300"
        >
          <img
            src={Linkdin}
            alt="LinkedIn"
            className="w-6 h-6 invert md:w-8 md:h-8 transition-all duration-300 group-hover:invert group-hover:opacity-100 opacity-50"
          />
        </NavLink>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
