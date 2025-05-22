import React from "react";
import photo from "../../assets/PHOTO.jpg";
import Website from "../../assets/Website.svg";
import LinkedIn from "../../assets/Linkdin.svg";
import Github from "../../assets/Github.svg";
import instagram from "../../assets/instagram.svg";
import leetcode from "../../assets/leetcode.svg";
import { motion } from "framer-motion";
import { centerVariants } from "../../Animations/motionVariants";
import { useScrambleText } from "../../utils/useScrambleText";
import { NavLink } from "react-router-dom";

const Qualification = () => {
  // Create scramble text hooks for each skill with varied timing
  const reactScramble = useScrambleText("React.js", 40, 800);
  const tailwindScramble = useScrambleText("TailwindCSS", 35, 600);
  const htmlScramble = useScrambleText("HTML", 30, 400);
  const cssScramble = useScrambleText("CSS", 30, 400);
  const jsScramble = useScrambleText("JavaScript", 45, 700);
  const nodeScramble = useScrambleText("Node", 25, 500);
  const expressScramble = useScrambleText("Express", 35, 600);
  const sqlScramble = useScrambleText("PostgreSQL", 50, 800);
  const cppScramble = useScrambleText("C++", 20, 300);

  return (
    <div className="flex flex-col lg:flex-row m-4 sm:m-6 md:m-8 lg:m-10 gap-8 md:gap-12 lg:gap-20">
      <div className="w-full lg:w-1/3 h-fit lg:sticky lg:top-10 text-white bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] rounded-4xl mb-8 lg:mb-0">
        <div className="p-4 md:p-6">
          <div className="aspect-[6/5] w-full overflow-hidden rounded-4xl">
            <img
              src={photo}
              alt="Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center bg-transparent px-5 pb-5">
          <h1 className="text-xl md:text-2xl">Aditya Rai</h1>
          <p className="text-[rgb(105,105,105)]">adityarai.cs@gmail.com</p>
        </div>
        <div className="flex justify-center gap-3 md:gap-4 pb-6">
          <a
            href="https://withsammi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] p-2 rounded-full flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-gray-300 hover:z-10 cursor-pointer">
              <img
                src={Website}
                alt="Website"
                className="w-4 h-4 md:w-5 md:h-5 invert transition-all duration-300 group-hover:invert-0"
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-rai-995a941a0//"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] p-2 rounded-full flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-gray-300 hover:z-10 cursor-pointer">
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className="w-4 h-4 md:w-5 md:h-5 invert transition-all duration-300 group-hover:invert-0"
              />
            </div>
          </a>
          <a
            href="https://github.com/withsammi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] p-2 rounded-full flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-gray-300 hover:z-10 cursor-pointer">
              <img
                src={Github}
                alt="Github"
                className="w-4 h-4 md:w-5 md:h-5 invert transition-all duration-300 group-hover:invert-0"
              />
            </div>
          </a>
          <a
            href="https://leetcode.com/u/withsammi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] p-2 rounded-full flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-gray-300 hover:z-10 cursor-pointer">
              <img
                src={leetcode}
                alt="leetcode"
                className="w-4 h-4 md:w-5 md:h-5 invert transition-all duration-300 group-hover:invert-0"
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/withsammi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] p-2 rounded-full flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:bg-gradient-to-br hover:from-white hover:to-gray-300 hover:z-10 cursor-pointer">
              <img
                src={instagram}
                alt="instagram"
                className="w-4 h-4 md:w-5 md:h-5 invert transition-all duration-300 group-hover:invert-0"
              />
            </div>
          </a>
        </div>
        <div className="pb-6 px-6">
          <NavLink to="/contact">
            <div className="bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] rounded-xl py-2 text-center transition-all duration-300 hover:from-white hover:to-gray-300 hover:text-black group">
              <span className="font-medium group-hover:font-semibold">
                Contact
              </span>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="w-full lg:w-2/3 text-white p-5 md:p-8 bg-transparent bg-opacity-10 backdrop-blur-sm rounded-3xl md:rounded-4xl">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-white">
            Who is Aditya?
          </h1>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Hi, I'm Aditya — a passionate Computer Science student with a knack
            for building clean, efficient, and user-friendly web applications.
            Currently pursuing my degree in Computer Science & Engineering, I
            specialize in full-stack development with a focus on modern
            technologies like React, Node.js, PostgreSQL, and Supabase.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mt-4">
            Whether it's creating intuitive user interfaces or optimizing
            backend logic, I enjoy bringing ideas to life through code. I'm also
            actively working on personal projects like Codetrac, a performance
            tracker for competitive programming platforms, where I integrate
            real-time APIs and data visualization to provide meaningful
            insights.
          </p>
          <p className="text-gray-300 leading-relaxed text-base md:text-lg mt-4">
            Beyond coding, I value continuous learning and thrive in
            environments that challenge me to grow both technically and
            creatively.
          </p>
        </div>

        <motion.div
          className="mt-8 md:mt-12 mb-8 md:mb-10"
          variants={centerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5 uppercase">
            Experience
          </h2>

          <div className="mb-8">
            <div className="flex items-baseline">
              <p className="text-gray-400 text-base md:text-lg">
                may 2025 - present
              </p>
            </div>
            <h3 className="text-xl md:text-2xl text-blue-400 font-medium">
              SDET
            </h3>
            <p className="text-gray-300 mt-1">Spyne.ai</p>
            <p className="text-gray-300 leading-relaxed mt-3 text-base md:text-lg">
              I Joined Spyne as a SDET in their studio team .
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline">
              <p className="text-gray-400 text-base md:text-lg">
                aug 2024 - mar 2025
              </p>
            </div>
            <h3 className="text-xl md:text-2xl text-blue-400 font-medium">
              Front End Developer
            </h3>
            <p className="text-gray-300 mt-1">Uniphil International</p>
            <p className="text-gray-300 leading-relaxed mt-3 text-base md:text-lg">
              I Joined Uniphil in the Frontend Development Team and worked on
              their EJS based website.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-12 mb-8 md:mb-10"
          variants={centerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5 uppercase">
            Education
          </h2>

          <div className="mb-8">
            <p className="text-gray-400 text-base md:text-lg">
              Professional degree
            </p>
            <h3 className="text-xl md:text-2xl text-blue-400 font-medium">
              Bachelor Degree in CE
            </h3>
            <p className="text-gray-300 mt-1">Bennett University</p>
            <p className="text-gray-300 leading-relaxed mt-3 text-base md:text-lg">
              Currently pursuing the Bachelors degree to tackle the real life
              market and compete in the saturated market for showcasing my
              skills and a developed sense of competition.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-12 mb-8 md:mb-10"
          variants={centerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 uppercase">
            Expertise and Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] p-4 md:p-5 rounded-xl"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3
                className="text-lg md:text-xl text-blue-400 font-medium mb-2"
                onMouseEnter={reactScramble.handleHover}
              >
                {reactScramble.text}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                Built a responsive Portfolio and Codetrac platform
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] p-4 md:p-5 rounded-xl"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3
                className="text-lg md:text-xl text-blue-400 font-medium mb-2"
                onMouseEnter={tailwindScramble.handleHover}
              >
                {tailwindScramble.text}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                Built a portfolio website with the implemenation of react and
                tailwind.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] p-4 md:p-5 rounded-xl"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3
                className="text-lg md:text-xl text-blue-400 font-medium mb-2"
                onMouseEnter={htmlScramble.handleHover}
              >
                {htmlScramble.text}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                Strong grasp and used in several projects
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] p-4 md:p-5 rounded-xl"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3
                className="text-lg md:text-xl text-blue-400 font-medium mb-2"
                onMouseEnter={cssScramble.handleHover}
              >
                {cssScramble.text}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                Strong grasp used in several projects
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] p-4 md:p-5 rounded-xl"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3
                className="text-lg md:text-xl text-blue-400 font-medium mb-2"
                onMouseEnter={jsScramble.handleHover}
              >
                {jsScramble.text}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                Used in various projects to make them dynamic
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] p-4 md:p-5 rounded-xl"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3
                className="text-lg md:text-xl text-blue-400 font-medium mb-2"
                onMouseEnter={nodeScramble.handleHover}
              >
                {nodeScramble.text}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                Experience of 1+ years
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] p-4 md:p-5 rounded-xl"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3
                className="text-lg md:text-xl text-blue-400 font-medium mb-2"
                onMouseEnter={expressScramble.handleHover}
              >
                {expressScramble.text}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                Used in various projects
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] p-4 md:p-5 rounded-xl"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3
                className="text-lg md:text-xl text-blue-400 font-medium mb-2"
                onMouseEnter={sqlScramble.handleHover}
              >
                {sqlScramble.text}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                Used in various projects for database management
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] p-4 md:p-5 rounded-xl"
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3
                className="text-lg md:text-xl text-blue-400 font-medium mb-2"
                onMouseEnter={cppScramble.handleHover}
              >
                {cppScramble.text}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                Solved over 150+ DSA questions
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Qualification;
