import React from "react";
import photo from "../../assets/PHOTO.jpg";
import Website from "../../assets/Website.svg";
import LinkedIn from "../../assets/Linkdin.svg";
import Github from "../../assets/Github.svg";

const Qualification = () => {
  return (
    <div className="flex m-10">
      <div className="w-1/3 text-white bg-gradient-to-br from-[rgb(32,32,32)] to-[rgb(23,23,23)] rounded-4xl">
        <div className="p-6">
          <div className="aspect-[6/5] w-full overflow-hidden rounded-4xl">
            <img
              src={photo}
              alt="Photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center bg-transparent px-5 pb-5">
          <h1 className="text-2xl ">Aditya Rai</h1>
          <p className="text-[rgb(105,105,105)]">adityarai.cs@gmail.com</p>
        </div>
        <div className="flex justify-center gap-4">
          <img src={Website} alt="Website" className="w-6 h-6" />
          <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
          <img src={Github} alt="Github" className="w-6 h-6" />
        </div>
      </div>
      <div className="w-2/3 text-white"> hello</div>
    </div>
  );
};

export default Qualification;
