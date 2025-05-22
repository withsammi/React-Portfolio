import React from "react";

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row mx-5 md:mx-15 my-5 gap-5">
      <div className="w-full md:w-1/2 text-center rounded-4xl bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)]">
        <h1 className="mask-linear-from-neutral-800 invert my-5 text-4xl">
          EDUCATION
        </h1>
        <div className="text-left p-5">
          <h2 className="text-gray-400">Professional degree</h2>
          <p className="text-white text-2xl">Bachelor Degree in CS</p>
          <p className="text-gray-400 mb-6">Bennett University</p>
          <h2 className="text-gray-400">Professional Certificate</h2>
          <p className="text-white text-2xl">
            Introduction to Project Management
          </p>
          <p className="text-gray-400 mb-6">Coursera</p>
          <h2 className="text-gray-400">Professional Certificate</h2>
          <p className="text-white text-2xl">Full-Stack Web Development</p>
          <p className="text-gray-400 mb-6">Udemy</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-center rounded-4xl bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)]">
        <h1 className="mask-linear-from-neutral-800 invert my-5 text-4xl">
          EXPERIENCE
        </h1>
        <div className="text-left p-5">
          <h2 className="text-gray-400">May 2025 - PRESENT</h2>
          <p className="text-white text-2xl">SDET</p>
          <p className="text-gray-400">Spyne</p>
        </div>
        <div className="text-left p-5">
          <h2 className="text-gray-400">Aug 2024 - Mar 2025</h2>
          <p className="text-white text-2xl">Front-End Developer</p>
          <p className="text-gray-400 mb-6">Uniphil International</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
