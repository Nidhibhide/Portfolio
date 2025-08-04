import React from "react";
import { codingImage } from "../images";
const Home = () => {
  return (
    <div className="w-full  flex  items-center justify-center pb-36 pt-52  px-16 xl:px-28 gap-8 scroll-mt-24" id="home">
      {/* Text section */}
      <div className="flex-1 flex flex-col items-center  justify-center">
        <div className="flex flex-col gap-8 max-w-2xl">
          <p className="xl:text-5xl text-4xl font-semibold  xl:leading-tight leading-snug">
            Hey there! I’m{" "}
            <span className="text-[#FF3CAC] font-bold">Nidhi Bhide</span>, Full Stack
            Developer.
          </p>

          <div className="flex gap-8 text-sm xl:text-base">
            <a
              href="https://drive.google.com/file/d/1QWzD8Z98wGompSwP5mclBx6YESmrp4RY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#FF3CAC] hover:bg-[#FF73B9] font-medium h-10 w-36 xl:w-44 rounded">
                Download Resume
              </button>
            </a>

            <a
              href="https://github.com/Nidhibhide"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#FF3CAC] hover:bg-[#FF73B9] font-medium h-10 w-36 xl:w-44 rounded">
                View GitHub
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="flex-1 flex justify-center items-center">
        <img
          className="w-full max-w-lg h-auto object-contain rounded-full"
          src={codingImage}
          alt="home"
        />
      </div>
    </div>
  );
};

export default Home;
