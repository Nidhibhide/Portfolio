import React from "react";
import { codingImage } from "../images";
const About = () => {
  return (
    <div
      className="w-full  flex   py-28 scroll-mt-28  px-16 xl:px-28 gap-8 justify-center items-center mx-auto"
      id="about"
    >
      {/* Image section */}
      <div className="flex-1 flex justify-center items-center ">
        <div className="flex flex-col gap-6">
          <img
            className="w-full max-w-sm h-auto object-contain"
            src={codingImage}
            alt="coding-image"
          />
        </div>
      </div>
      {/* Text section */}
      <div className="flex-1 flex flex-col items-center  justify-center gap-6">
        <div className="flex flex-col gap-4">
          <p className="xl:text-4xl text-3xl font-semibold ">About me</p>
          <p className="xl:text-base text-sm">
            Full Stack Developer specializing in MERN Stack with 1+ year of
            experience delivering responsive, high-quality web applications.
            Strong problem-solving, collaboration, and leadership skills with a
            passion for building impactful solutions
          </p>
        </div>
        <div className="flex flex-col w-full xl:space-y-2 space-y-1 text-sm xl:text-base leading-relaxed p-4  rounded-xl">
          <p>
            <span className="font-semibold text-[#FF3CAC]">Full Name:</span>{" "}
            Nidhi Bhide
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Experience:</span>{" "}
            1.5 Years
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Languages:</span>{" "}
            JavaScript, TypeScript
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Frontend:</span>{" "}
            React.js, Tailwind CSS, Redux Toolkit, Zustand
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Backend:</span>{" "}
            Node.js, Express.js, REST APIs, Socket.io
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Database:</span>{" "}
            MongoDB, PostgreSQL
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Other Skills:</span>{" "}
            AWS (ECS, EC2, S3), Docker, GitHub
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
