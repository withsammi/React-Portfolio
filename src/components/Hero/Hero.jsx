import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "../Hero/Cards/ProfileCard";
import Experience from "./Cards/Experience";
import CvCard from "./Cards/CvCard";
import Second from "./Cards/Second";
import Center1 from "./Cards/Center";
import { centerVariants } from "../../Animations/motionVariants";

const Hero = () => {
  return (
    <div className="flex flex-col  md:p-5 lg:p-5"> 
      <div className="flex flex-col lg:flex-row gap-5 md:gap-0 flex-grow md:py-5 md:mr-5">
        <div className="w-full lg:w-1/2">
          <ProfileCard />
        </div>
        <div className="w-full lg:w-1/2 md:mt-0 ">
          <Second />
        </div>
      </div>

      <motion.div
        className="flex flex-col md:flex-row gap-4 flex-grow mx-5"
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Center1 />
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row gap-4 mx-5 md:p-4"
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Experience />
        <CvCard />
      </motion.div>
    </div>
  );
};

export default Hero;
