import React from "react";
import ProfileCard from "../Hero/Cards/ProfileCard"; // adjust path if needed
import Experience from "./Cards/Experience";
import CvCard from "./Cards/CvCard";
import Second from "./Cards/Second";
import Center1 from "./Cards/Center";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-screen p-5 md:p-10 lg:p-15 ">
      {/* Section with ProfileCard and Second */}
      <div className="flex flex-col lg:flex-row gap-6 flex-grow p-4">
        <div className="w-full lg:w-1/2">
          {/* ProfileCard takes half the width on large screens */}
          <ProfileCard />
        </div>
        <div className="w-full lg:w-1/2 mt-6 md:mt-0">
          {/* Second goes below ProfileCard on medium screens */}
          <Second />
        </div>
      </div>

      {/* Section with three ProfileCards */}
      <div className="flex flex-col md:flex-row gap-4 flex-grow p-4">
        <Center1 />
      </div>

      {/* Section with two ProfileCards at the bottom */}
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <Experience />
        <CvCard />
      </div>
    </div>
  );
};

export default Hero;
