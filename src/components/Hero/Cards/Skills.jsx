import React from "react";
import Html from "../../../assets/Html.svg";
import Css from "../../../assets/Css.svg";
import Javascript from "../../../assets/Javascript.svg";
import Ejs from "../../../assets/Ejs.svg";
import ReactLogo from "../../../assets/React.svg";
import Tailwind from "../../../assets/Tailwind.svg";
import Bootstrap from "../../../assets/Bootstrap.svg";
import Git from "../../../assets/Git.svg";
import Github from "../../../assets/Github.svg";
import Node from "../../../assets/Node.svg";
import Express from "../../../assets/Express.svg";
import Cpp from "../../../assets/Cpp.svg";
import Postgresql from "../../../assets/Postgresql.svg";
import Postman from "../../../assets/Postman.svg";
import Mongodb from "../../../assets/Mongodb.svg";
import Sql from "../../../assets/Sql.svg";
import Vercel from "../../../assets/Vercel.svg";
import Vscode from "../../../assets/Vscode.svg";
import Axios from "../../../assets/Axio.svg";
import Supabase from "../../../assets/Supabase.svg";
import Neon from "../../../assets/Neon.svg";

const skills = [
  { src: Html, alt: "HTML" },
  { src: Css, alt: "CSS" },
  { src: Javascript, alt: "JavaScript" },
  { src: Ejs, alt: "EJS" },
  { src: ReactLogo, alt: "React" },
  { src: Tailwind, alt: "Tailwind CSS" },
  { src: Bootstrap, alt: "Bootstrap" },
  { src: Git, alt: "Git" },
  { src: Github, alt: "GitHub" },
  { src: Node, alt: "Node.js" },
  { src: Express, alt: "Express.js" },
  { src: Cpp, alt: "C++" },
  { src: Postgresql, alt: "PostgreSQL" },
  { src: Postman, alt: "Postman" },
  { src: Mongodb, alt: "MongoDB" },
  { src: Sql, alt: "SQL" },
  { src: Vercel, alt: "Vercel" },
  { src: Vscode, alt: "VS Code" },
  { src: Axios, alt: "Axios" }, // Added Axios
  { src: Supabase, alt: "Supabase" }, // Added Supabase
  { src: Neon, alt: "Neon" }, // Added Neon
];

const Skills = () => {
  return (
    <div className="grid grid-cols-7 grid-rows-3 gap-4 p-4 hover:cursor-pointer">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-transparent rounded-lg flex items-center justify-center text-white font-bold transform transition-transform duration-300 hover:scale-125"
        >
          <img
            src={skill.src}
            alt={skill.alt}
            className={`w-12 h-12 ${
              skill.alt === "Bootstrap"
                ? "text-blue-500 invert" // Invert and change to blue
                : ["GitHub", "Express.js", "Vercel"].includes(skill.alt)
                ? "invert" // Invert for GitHub, Express.js, and Vercel
                : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
