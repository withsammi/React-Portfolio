import { useScrambleText } from "../../utils/useScrambleText";
import GetInTouch from "./GetInTouch";

const Cv = () => {
  const { text, handleHover } = useScrambleText("HIRE ME");

  return (
    <div className="ml-5 md:ml-[20px]">
      <h1
        onMouseEnter={handleHover}
        className="text-7xl mask-linear-from-neutral-800 text-gray-500 mb-6 text-center"
      >
        {text}
      </h1>

      {/* Flex container with column direction on mobile */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section - PDF Viewer */}
        <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
          <h2 className="text-2xl text-white mask-linear-from-neutral-800 mb-4">
            MY CV
          </h2>
          <iframe
            src="/Aditya's CV.pdf#zoom=75"
            className="w-full h-[600px]"
            title="My CV"
          />
        </div>

        {/* Right Section - Contact */}
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-2xl text-white mask-linear-from-neutral-800 mb-4">
            CONTACT
          </h2>
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default Cv;
