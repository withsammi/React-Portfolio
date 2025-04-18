import React, { useState, useEffect } from "react";
import { useScrambleText } from "../../utils/useScrambleText";
import { motion, AnimatePresence } from "framer-motion";
import preview1 from "../../assets/preview1.jpg";
import preview2 from "../../assets/preview2.jpg";
import preview3 from "../../assets/preview3.jpg";
import preview4 from "../../assets/preview4.jpg";
import preview5 from "../../assets/preview5.jpg";
import preview6 from "../../assets/preview6.jpg";
import Github from "../../assets/Github.svg";
import { centerVariants } from "../../Animations/motionVariants";

const Portfolio = () => {
  const projectsScramble = useScrambleText("PROJECTS", 30, 600);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Loading animation effect
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Project data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern portfolio built with React and Tailwind CSS",
      url: "https://withsammi.vercel.app",
      image: preview1,
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/withsammi/React-Portfolio",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Github Profile Checker",
      description: "Performance tracker for competitive programming platforms",
      url: "https://github-detector-six.vercel.app/",
      image: preview2,
      technologies: ["React", "GitHub API", "TailwindCSS"],
      githubUrl: "https://github.com/withsammi/Github-Detector",
      color: "from-emerald-500 to-cyan-600",
    },
    {
      id: 3,
      title: "Codetrac",
      description: "A platform to track your DSA journey",
      url: "https://code-trac.vercel.app/",
      image: preview3,
      technologies: ["React", "Supabase", "ChartJS", "TailwindCSS"],
      githubUrl: "https://github.com/withsammi/CodeTrac",
      color: "from-violet-500 to-indigo-600",
    },
    {
      id: 4,
      title: "Response Dog",
      description: "Will tell you your response error with funny dogs",
      url: "https://withsammi.vercel.app",
      image: preview4,
      technologies: ["EJS", "Node.js", "PostgreSQL", "Express", "Axios"],
      githubUrl: "https://github.com/withsammi/Response-dog",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 5,
      title: "Family Travel Tracker",
      description:
        "Productivity application for managing tasks, projects, and deadlines with drag-and-drop interface",
      url: "",
      image: preview5,
      technologies: ["EJS", "PostgreSQL", "CSS", "Express"],
      githubUrl: "https://github.com/withsammi/Family-Travel-Tracker",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 6,
      title: "Simon Game",
      description:
        "An interactive color game",
      url: "",
      image: preview6,
      technologies: ["html", "Jquery", "CSS",],
      githubUrl: "https://github.com/withsammi/Simon-Game",
      color: "from-green-500 to-teal-600",
    },
  ];

  // Open project modal
  const openProject = (project) => {
    setSelectedProject(project);
  };

  // Close project modal
  const closeProject = () => {
    setSelectedProject(null);
  };

  // Loading screen
  if (loading) {
    return (
      <div className="fixed inset-0 bg-[rgb(15,15,15)] flex flex-col items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [0.8, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-24 h-24 mb-6"
        >
          <div className="relative w-full h-full">
            {/* Loading animation elements */}
            <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <div
              className="absolute inset-2 border-4 border-r-blue-400 border-t-transparent border-b-transparent border-l-transparent rounded-full animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "1s" }}
            ></div>
            <div
              className="absolute inset-4 border-4 border-b-blue-300 border-t-transparent border-r-transparent border-l-transparent rounded-full animate-spin"
              style={{ animationDuration: "1.5s" }}
            ></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-white text-xl font-medium"
        >
          Loading Projects...
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className="container mx-auto px-4 sm:px-6 py-8 md:py-12"
      variants={centerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="text-center mask-linear-from-neutral-800 text-4xl sm:text-5xl md:text-6xl invert mb-8 sm:mb-10 md:mb-12"
        onMouseEnter={projectsScramble.handleHover}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {projectsScramble.text}
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`
              relative overflow-hidden rounded-2xl shadow-lg 
              group cursor-pointer border border-gray-800 hover:border-transparent
              bg-gradient-to-br from-[rgb(25,25,25)] to-[rgb(15,15,15)]
            `}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.4)",
            }}
            transition={{ duration: 0.3 }}
            onClick={() => openProject(project)}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.3 + index * 0.1,
              },
            }}
            onHoverStart={() => setHoveredProject(project.id)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            {/* Colored gradient background that only shows on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            ></div>

            {/* Project number in large translucent font on the right */}
            <div className="absolute top-4 right-4 font-bold text-8xl text-white opacity-5 select-none">
              {index + 1}
            </div>

            {/* Preview Image */}
            <motion.div className="h-56 sm:h-64 md:h-72 w-full relative">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark gradient overlay that gets darker on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.2)] group-hover:from-[rgba(0,0,0,0.95)] group-hover:via-[rgba(0,0,0,0.7)] transition-all duration-300"></div>

              {/* Project title that moves up on hover */}
              <div className="absolute bottom-0 left-0 p-5 sm:p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                <div className="overflow-hidden">
                  <motion.h2
                    className="text-2xl sm:text-3xl text-white font-bold drop-shadow-md"
                    animate={{
                      y: hoveredProject === project.id ? [0, -5, 0] : 0,
                      transition: { duration: 0.5 },
                    }}
                  >
                    {project.title}
                  </motion.h2>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div className="p-5 sm:p-6 relative">
              <p className="text-gray-300 text-base leading-relaxed mb-5 line-clamp-2">
                {project.description}
              </p>

              {/* Technologies Used */}
              <motion.div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 text-sm rounded-full bg-opacity-20 transition-all duration-300
                      ${
                        hoveredProject === project.id
                          ? "bg-opacity-40 shadow-lg scale-105"
                          : ""
                      }
                      bg-gradient-to-r ${project.color} text-white font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => openProject(project)}
                  className={`px-4 py-2.5 bg-gradient-to-r ${
                    project.color
                  } text-white rounded-full transition-all duration-300 font-medium flex-1 
                    hover:shadow-lg hover:shadow-${
                      project.color.split("-")[1]
                    }-500/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
                  disabled={!project.url}
                >
                  View Project
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[rgba(40,40,40,0.8)] hover:bg-gray-700 text-white rounded-full transition-all duration-300 font-medium flex-1 flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={Github} alt="GitHub" className="w-5 h-5 invert" />
                  <span>Source Code</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Popup with iFrame */}
      <AnimatePresence>
        {selectedProject && selectedProject.url && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="bg-[rgb(20,20,20)] rounded-xl overflow-hidden w-full max-w-full sm:max-w-5xl h-[90vh] sm:h-[80vh] relative shadow-2xl border border-gray-800"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
                <button
                  onClick={closeProject}
                  className="bg-[rgba(30,30,30,0.9)] hover:bg-red-700 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300 border border-gray-700"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </motion.div>
              <motion.div className="h-[36px] sm:h-[44px] bg-[rgb(30,30,30)] flex items-center px-3 sm:px-5 border-b border-gray-800">
                <div className="text-gray-300 text-sm sm:text-base font-medium truncate flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                  <div className="flex items-center">
                    <span className="mr-2 text-gray-500">•</span>
                    <span
                      className={`bg-gradient-to-r ${selectedProject.color} bg-clip-text text-transparent font-bold`}
                    >
                      {selectedProject.title}
                    </span>
                    <span className="ml-2 text-gray-500">•</span>
                  </div>
                </div>
              </motion.div>
              <iframe
                src={selectedProject.url}
                title={selectedProject.title}
                className="w-full h-[calc(100%-36px)] sm:h-[calc(100%-44px)]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Portfolio;
