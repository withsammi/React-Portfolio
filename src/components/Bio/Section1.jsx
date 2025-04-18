import React from "react";
import Photo from "../../assets/PHOTO.jpg";
import Icon from "../../assets/icon2.png";

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 mx-5 md:mx-15 relative">
      {/* Photo Section */}
      <div className="flex bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] w-full md:w-1/3 p-6 rounded-4xl">
        <img
          src={Photo}
          alt="My Photo"
          className="rounded-4xl w-full h-auto object-cover"
        />
      </div>

      {/* Bio Section */}
      <div className="text-center w-full md:w-2/3 relative">
        <h1 className="mask-linear-from-neutral-800 invert text-center text-4xl md:text-7xl font-semibold mb-5">
          BIO
        </h1>

        <div className="bg-gradient-to-br from-[rgb(52,52,52)] to-[rgb(13,13,13)] rounded-4xl p-5 md:p-10 md:w-auto relative">
          <img
            src={Icon}
            alt="Icon 2"
            className="absolute top-0 left-15 w-12 h-18"
          />
          <div className="text-gray-500 font-mono text-left mt-16">
            <p className="text-2xl md:text-4xl mb-5 mt-5 text-white">ADITYA RAI</p>
            <p>
              A CSE student battling React and CSS bugs🙃 and piecing backends
              together with Node.js, Express, and Supabase with hope 🛠️. When
              I’m not ghosted by async functions or debugging my soul, I play
              snooker 🎱 — because where else can I fail, blame the table, and
              pretend it’s strategy?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
