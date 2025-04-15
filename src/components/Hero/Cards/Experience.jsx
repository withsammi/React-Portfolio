import React from "react";

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-[rgb(32,32,32)] to-[rgb(20,20,20)] flex flex-col md:flex-row justify-center items-center rounded-4xl h-auto w-full p-5">
      {/* Card 1 */}
      <div className="h-40 md:h-50 bg-gradient-to-b from-[rgb(38,38,38)] to-[rgb(28,28,28)] w-full md:w-1/3 m-3 md:m-7 rounded-2xl flex flex-col justify-center items-center text-gray-400">
        <h1 className="text-3xl md:text-4xl font-bold">1+</h1>{" "}
        {/* Numbers on top */}
        <p className="text-xs md:text-sm mt-2">YEARS EXPERIENCE</p>{" "}
        {/* Text on bottom */}
      </div>
      {/* Card 2 */}
      <div className="h-40 md:h-50 bg-gradient-to-b from-[rgb(34,34,34)] to-[rgb(25,25,25)] w-full md:w-1/3 m-3 md:m-7 rounded-2xl flex flex-col justify-center items-center text-gray-400">
        <h1 className="text-3xl md:text-4xl font-bold">10+</h1>{" "}
        {/* Numbers on top */}
        <p className="text-xs md:text-sm mt-2">PROJECTS</p>{" "}
        {/* Text on bottom */}
      </div>
      {/* Card 3 */}
      <div className="h-40 md:h-50 bg-gradient-to-b from-[rgb(29,29,29)] to-[rgb(25,25,25)] w-full md:w-1/3 m-3 md:m-7 rounded-2xl flex flex-col justify-center items-center text-gray-400">
        <h1 className="text-3xl md:text-4xl font-bold">15+</h1>{" "}
        {/* Numbers on top */}
        <p className="text-xs md:text-sm mt-2">TECHNICAL SKILLS</p>{" "}
        {/* Text on bottom */}
      </div>
    </div>
  );
};

export default Experience;
