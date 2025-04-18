import React from "react";
import { motion } from "framer-motion";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

export const centerVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.8 },
  },
};

const Bio = () => {
  return (
    <div className="mt-20 ">
      {/* Section1 without animation */}
      <div>
        <Section1 />
      </div>

      {/* Section2 with animation */}
      <motion.div
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Section2 />
      </motion.div>

      {/* Section3 with animation */}
      <motion.div
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Section3 />
      </motion.div>
    </div>
  );
};

export default Bio;
