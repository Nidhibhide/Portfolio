import React from "react";
import { codingImage } from "../images";

const Home = () => {
  return (
    <div
      className="w-full flex flex-col-reverse lg:flex-row items-center justify-center pb-20 sm:pb-28 lg:pb-36 pt-28 sm:pt-40 lg:pt-52 px-6 sm:px-10 xl:px-28 gap-8 scroll-mt-24"
      id="home"
    >
      {/* Text section */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col gap-6 sm:gap-8 max-w-lg text-center lg:text-left">
          <p className="xl:text-4xl text-2xl sm:text-3xl font-semibold xl:leading-tight leading-snug">
            Hey there! I’m{" "}
            <span className="text-[#FF3CAC] font-bold">Nidhi Bhide</span>, Full
            Stack Developer.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 text-sm xl:text-base">
            <a
              href="https://drive.google.com/file/d/1MCLWwAGgNYIv8SBuXUedFLpq5tSYVrKU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#FF3CAC] hover:bg-[#FF73B9] font-medium text-sm h-9 w-36 xl:w-40 rounded">
                Download Resume
              </button>
            </a>

            <a
              href="https://github.com/Nidhibhide"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#FF3CAC] hover:bg-[#FF73B9] font-medium text-sm h-9 w-36 xl:w-32 rounded">
                View GitHub
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="flex-1 flex justify-center items-center w-full">
        <img
          className="w-full max-w-[220px] sm:max-w-xs lg:max-w-md h-auto object-contain rounded-full"
          src={codingImage}
          alt="home"
        />
      </div>
    </div>
  );
};

export default Home;
