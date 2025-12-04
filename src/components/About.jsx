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
            Full Stack Developer with 1.5 years of experience building
            responsive and scalable web applications. Skilled in MERN stack,
            Next.js, TypeScript, and JavaScript, with hands-on experience in
            backend APIs, cloud deployment, and creating user-friendly
            interfaces.
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
            JavaScript (ES6+), TypeScript
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Frontend:</span>{" "}
            React.js, Next.js, Tailwind CSS, Redux Toolkit, Zustand,
            Material-UI, Bootstrap
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
            AWS, Docker, Git, GitHub
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
