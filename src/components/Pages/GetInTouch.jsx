import React from "react";
import { motion } from "framer-motion";
import { centerVariants } from "../../Animations/motionVariants";
import { NavLink } from "react-router-dom";
import Github from "../../assets/Github.svg";
import Linkdin from "../../assets/Linkdin.svg";

const GetInTouch = () => {
  return (
    <div className="p-4">
      {/* Email Section */}
      <a href="mailto:adityrai.cs@gmail.com">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center bg-none mx-4 mb-5 rounded-4xl p-4 cursor-pointer"
          variants={centerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="text-left font-mono mb-4 sm:mb-0 sm:mr-4">
            <p className="text-blue-500 block mb-2 text-lg">
              adityrai.cs@gmail.com
            </p>
            <p className="text-blue-500 block text-lg">
              e21cseu0142@bennett.edu.in
            </p>
          </div>
          <div className="bg-none p-4 rounded-4xl">
            <img src="/Mail.svg" alt="Mail logo" className="w-12 h-12 invert" />
          </div>
        </motion.div>
      </a>

      {/* Phone Section */}
      <a href="tel:+918709678394">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center bg-none mx-4 mb-5 rounded-4xl p-4 cursor-pointer"
          variants={centerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="text-left font-mono mb-4 sm:mb-0 sm:mr-4">
            <p className="text-blue-500 block text-lg">+91 8709678394</p>
          </div>
          <div className="bg-none p-4 rounded-4xl">
            <img src="/Call.svg" alt="Call logo" className="w-12 h-12 invert" />
          </div>
        </motion.div>
      </a>

      {/* Location Section */}
      <a
        href="https://www.google.com/maps"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center bg-none mx-4 mb-5 rounded-4xl p-4 cursor-pointer"
          variants={centerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="text-left font-mono mb-4 sm:mb-0 sm:mr-4">
            <p className="text-blue-500 block text-lg">
              GREATER NOIDA [PIN-201310] INDIA
            </p>
          </div>
          <div className="bg-none p-4 rounded-4xl">
            <img
              src="/Location1.svg"
              alt="Location logo"
              className="w-12 h-12 invert"
            />
          </div>
        </motion.div>
      </a>

      {/* Social Links */}
      <motion.div
        className="flex justify-center space-x-3 md:space-x-4 bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] p-5 m-5 rounded-4xl"
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* GitHub */}
        <NavLink
          to="https://github.com/withsammi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] p-2 md:p-3 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer">
            <img
              src={Github}
              alt="Github"
              className="w-6 h-6 invert md:w-8 md:h-8 transition-all duration-300 opacity-50"
            />
          </div>
        </NavLink>

        {/* LinkedIn */}
        <NavLink
          to="https://linkedin.com/in/withsammi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-gradient-to-br from-[rgb(42,42,42)] to-[rgb(23,23,23)] p-2 md:p-3 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer">
            <img
              src={Linkdin}
              alt="LinkedIn"
              className="w-6 h-6 invert md:w-8 md:h-8 transition-all duration-300 opacity-50"
            />
          </div>
        </NavLink>
      </motion.div>
    </div>
  );
};

export default GetInTouch;
