import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

// Custom hook for scramble effect
const useScrambleEffect = (finalValue, duration = 2000, trigger) => {
  const [value, setValue] = useState("0");

  useEffect(() => {
    if (!trigger) return;

    let startTime;
    const scramble = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < duration) {
        const randomValue = Math.floor(Math.random() * 100); // Generate random numbers
        setValue(randomValue + "+");
        requestAnimationFrame(scramble);
      } else {
        setValue(finalValue); // Set the final value after the duration
      }
    };

    requestAnimationFrame(scramble);
  }, [finalValue, duration, trigger]);

  return value;
};

const Experience = () => {
  const [triggerCard1, setTriggerCard1] = useState(false);
  const [triggerCard2, setTriggerCard2] = useState(false);
  const [triggerCard3, setTriggerCard3] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[rgb(32,32,32)] to-[rgb(20,20,20)] flex flex-col md:flex-row justify-center items-center rounded-4xl h-auto w-full p-5">
      {/* Card 1 */}
      <motion.div
        className="h-40 md:h-50 bg-gradient-to-b from-[rgb(38,38,38)] to-[rgb(28,28,28)] w-full md:w-1/3 m-3 md:m-7 rounded-2xl flex flex-col justify-center items-center text-gray-400"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        onViewportEnter={() => setTriggerCard1(true)} // Trigger scramble effect
        onViewportLeave={() => setTriggerCard1(false)} // Reset trigger when leaving viewport
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          {useScrambleEffect("1+", 0, triggerCard1)}
        </h1>
        <p className="text-xs md:text-sm mt-2">YEARS EXPERIENCE</p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="h-40 md:h-50 bg-gradient-to-b from-[rgb(34,34,34)] to-[rgb(25,25,25)] w-full md:w-1/3 m-3 md:m-7 rounded-2xl flex flex-col justify-center items-center text-gray-400"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        onViewportEnter={() => setTriggerCard2(true)} // Trigger scramble effect
        onViewportLeave={() => setTriggerCard2(false)} // Reset trigger when leaving viewport
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          {useScrambleEffect("10+", 1000, triggerCard2)}
        </h1>
        <p className="text-xs md:text-sm mt-2">PROJECTS</p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="h-40 md:h-50 bg-gradient-to-b from-[rgb(29,29,29)] to-[rgb(25,25,25)] w-full md:w-1/3 m-3 md:m-7 rounded-2xl flex flex-col justify-center items-center text-gray-400"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        onViewportEnter={() => setTriggerCard3(true)} // Trigger scramble effect
        onViewportLeave={() => setTriggerCard3(false)} // Reset trigger when leaving viewport
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          {useScrambleEffect("25+", 2000, triggerCard3)}
        </h1>
        <p className="text-xs md:text-sm mt-2">TECHNICAL SKILLS</p>
      </motion.div>
    </div>
  );
};

export default Experience;
