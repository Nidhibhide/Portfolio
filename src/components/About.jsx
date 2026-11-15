import React from "react";
import { codingImage } from "../images";

const About = () => {
  return (
    <div
      className="w-full flex flex-col lg:flex-row py-16 sm:py-24 lg:py-28 scroll-mt-28 px-6 sm:px-10 xl:px-28 gap-8 justify-center items-center mx-auto"
      id="about"
    >
      {/* Image section */}
      <div className="flex-1 flex justify-center items-center w-full">
        <div className="flex flex-col gap-6">
          <img
            className="w-full max-w-[200px] sm:max-w-xs lg:max-w-sm h-auto object-contain mx-auto"
            src={codingImage}
            alt="coding-image"
          />
        </div>
      </div>

      {/* Text section */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 w-full">
        <div className="flex flex-col gap-4 w-full">
          <p className="xl:text-4xl text-2xl sm:text-3xl font-semibold text-center lg:text-left">
            About me
          </p>
          <p className="xl:text-base text-sm text-center lg:text-left">
            Full Stack Developer with 2.4 years of experience across EdTech and
            SaaS platforms. Skilled in React.js, Next.js, TypeScript, and
            JavaScript (ES6+), with strong backend skills in Node.js, Express.js,
            and RESTful APIs. Experienced in Docker, AWS deployment, and
            delivering high-performance applications.
          </p>
        </div>
        <div className="flex flex-col w-full xl:space-y-2 space-y-1 text-sm xl:text-base leading-relaxed p-2 sm:p-4 rounded-xl">
          <p>
            <span className="font-semibold text-[#FF3CAC]">Full Name:</span>{" "}
            Nidhi Bhide
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Experience:</span>{" "}
            2.4 Years
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Languages:</span>{" "}
            JavaScript (ES6+), TypeScript
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Frontend:</span>{" "}
            React.js, Next.js, Tailwind CSS, Material-UI, Bootstrap
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">State & APIs:</span>{" "}
            Redux, Zustand, RESTful APIs, Socket.io
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Backend:</span>{" "}
            Node.js, Express.js, Redis
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Database:</span>{" "}
            MongoDB, PostgreSQL, SQL
          </p>
          <p>
            <span className="font-semibold text-[#FF3CAC]">Cloud & Tools:</span>{" "}
            AWS (S3, ECS), Docker, CI/CD, GitHub
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
