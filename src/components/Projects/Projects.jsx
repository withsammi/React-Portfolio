import React, { useState, useRef } from "react";
import { useScrambleText } from "../../utils/useScrambleText";
import { motion, AnimatePresence, useInView } from "framer-motion";
import preview1 from "../../assets/preview1.jpg";
import preview2 from "../../assets/preview2.jpg";
import preview3 from "../../assets/preview3.jpg";
import preview4 from "../../assets/preview4.jpg";
import preview5 from "../../assets/preview5.jpg";
import preview6 from "../../assets/preview6.jpg";
import Github from "../../assets/Github.svg";
import { centerVariants } from "../../Animations/motionVariants";
import CvCard from "../Hero/Cards/CvCard";

const Projects = () => {
  const projectsScramble = useScrambleText("PROJECTS", 30, 600);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const containerInView = useInView(containerRef, { once: false, amount: 0.1 });
  const titleInView = useInView(titleRef, { once: false, amount: 0.5 });

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
      url: "",
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
      description: "An interactive color game",
      url: "",
      image: preview6,
      technologies: ["HTML", "jQuery", "CSS"],
      githubUrl: "https://github.com/withsammi/Simon-Game",
      color: "from-green-500 to-teal-600",
    },
  ];

  const openProject = (project) => setSelectedProject(project);
  const closeProject = () => setSelectedProject(null);

  return (
    <div
      ref={containerRef}
      className="container mx-auto px-4 sm:px-6 py-8 md:py-12"
      initial="hidden"
      animate={containerInView ? "visible" : "hidden"}
      exit="exit"
      variants={centerVariants}
    >
      <motion.h1
        ref={titleRef}
        className="text-center text-4xl sm:text-5xl md:text-6xl invert mb-10 font-bold tracking-tight"
        onMouseEnter={projectsScramble.handleHover}
        initial={{ opacity: 0, y: -20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        {projectsScramble.text}
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => {
          const cardRef = useRef(null);
          const cardInView = useInView(cardRef, {
            once: false,
            amount: 0.2,
            margin: "0px 0px -100px 0px",
          });

          return (
            <motion.div
              ref={cardRef}
              key={project.id}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer border border-gray-800 hover:border-transparent bg-gradient-to-br from-[rgb(25,25,25)] to-[rgb(15,15,15)]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => openProject(project)}
              initial="hidden"
              animate={cardInView ? "visible" : "hidden"}
              exit="exit"
              variants={centerVariants}
              custom={index}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              <div className="absolute top-4 right-4 font-bold text-8xl text-white opacity-5 select-none">
                {index + 1}
              </div>

              <div className="h-56 sm:h-64 md:h-72 w-full relative">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-300"></div>

                <div className="absolute bottom-0 left-0 p-5 sm:p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
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

              <div className="p-5 sm:p-6">
                <p className="text-gray-300 text-base mb-5 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 text-sm rounded-full bg-opacity-20 transition-all duration-300 ${
                        hoveredProject === project.id ? "bg-opacity-40 shadow-lg scale-105" : ""
                      } bg-gradient-to-r ${project.color} text-white font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => openProject(project)}
                    className={`px-4 py-2.5 bg-gradient-to-r ${project.color} text-white rounded-full font-medium flex-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                    disabled={!project.url}
                  >
                    View Project
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2.5 bg-[rgba(40,40,40,0.8)] hover:bg-gray-700 text-white rounded-full flex-1 flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500"
                  >
                    <img src={Github} alt="GitHub" className="w-5 h-5 invert" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.url && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="bg-[rgb(20,20,20)] rounded-xl overflow-hidden w-full max-w-full sm:max-w-5xl max-h-[95vh] relative shadow-2xl border border-gray-800"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10">
                <button
                  onClick={closeProject}
                  className="bg-[rgba(30,30,30,0.9)] hover:bg-red-700 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-700"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="h-10 sm:h-12 bg-[rgb(30,30,30)] flex items-center px-4 border-b border-gray-800">
                <div className="text-gray-300 text-sm sm:text-base font-medium truncate flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                  <span className={`bg-gradient-to-r ${selectedProject.color} bg-clip-text text-transparent font-bold`}>
                    {selectedProject.title}
                  </span>
                </div>
              </div>

              <iframe
                src={selectedProject.url}
                title={selectedProject.title}
                className="w-full h-[calc(100vh-2.5rem)] sm:h-[calc(100vh-3rem)]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-12">
        <CvCard />
      </div>
    </div>
  );
};

export default Projects;
