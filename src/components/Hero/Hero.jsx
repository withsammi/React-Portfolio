import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import ProfileCard from "../Hero/Cards/ProfileCard"; // adjust path if needed
import Experience from "./Cards/Experience";
import CvCard from "./Cards/CvCard";
import Second from "./Cards/Second";
import Center1 from "./Cards/Center";

const Hero = () => {
  // Animation variants for appearing and disappearing from the center
  const centerVariants = {
    hidden: { opacity: 0, scale: 0.5 }, // Start with opacity 0 and scaled down
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }, // Fade in and scale up
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.8 } }, // Fade out and scale down
  };

  return (
    <div className="flex flex-col min-h-screen p-5 md:p-10 lg:p-15">
      {/* Section with ProfileCard and Second */}
      <div className="flex flex-col lg:flex-row gap-6 flex-grow p-4">
        {/* ProfileCard without animation */}
        <div className="w-full lg:w-1/2">
          <ProfileCard />
        </div>
        {/* Second without animation */}
        <div className="w-full lg:w-1/2 mt-6 md:mt-0">
          <Second />
        </div>
      </div>

      {/* Section with one ProfileCard */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 flex-grow p-4"
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Center1 />
      </motion.div>

      {/* Section with two ProfileCards at the bottom */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 p-4"
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
