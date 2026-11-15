import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { LearnCode, passwordGenerator, BudgetBuddy } from "../images";

const projects = [
  {
    title: "LearnCode – Coding Platform",
    image: LearnCode,
    link: "https://learn-code-three.vercel.app/",
    github: "https://github.com/Nidhibhide/LearnCode",
    features:
      "A coding assessment platform with AI-based question, bulk import, progress tracking, and an admin dashboard.",
  },
  {
    title: "Budget Buddy",
    image: BudgetBuddy,
    link: "https://budget-buddy-next-js.vercel.app/",
    github: "https://github.com/Nidhibhide/BudgetBuddy---NextJs",
    features:
      "Personal finance app with income/expense tracking, multi-currency support, analytics dashboards, recurring bills, and Razorpay integration.",
  },
  {
    title: "Password Generator",
    image: passwordGenerator,
    link: "https://password-generator-xi-three-75.vercel.app/",
    github: "https://github.com/Nidhibhide/Password-generator",
    features:
      "A simple tool to generate strong passwords with custom length and character options.",
  },
];

const Projects = () => {
  return (
    <section
      id="work"
      className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col gap-8 items-center"
    >
      <h2 className="xl:text-4xl text-2xl sm:text-3xl font-semibold">
        Projects
      </h2>
      <p className="text-center text-gray-400 text-sm xl:text-base font-medium max-w-3xl mb-2 sm:mb-6 px-2">
        Below are MERN stack & Next.js projects styled with Tailwind CSS and
        secured using JWT & OAuth 2.0.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ title, image, link, github, features }) => (
  <div className="bg-[#1A1A1A] rounded-2xl w-full max-w-[320px] min-h-[350px] shadow-md hover:shadow-[#FF3CAC]/50 transition-shadow duration-300 flex flex-col">
    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-contain hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div className="flex flex-col p-3 flex-1">
      <h3 className="xl:text-lg text-base font-bold text-[#FF3CAC] mb-1">
        {title}
      </h3>
      <p className="xl:text-base text-sm text-gray-300 mb-3 flex-1">
        {features}
      </p>

      <div className="flex gap-4 flex-wrap justify-center mb-1">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#FF3CAC] hover:bg-[#FF73B9] text-black font-semibold py-2 text-sm px-4 rounded-lg"
        >
          <FaExternalLinkAlt />
          View
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#FF3CAC] hover:bg-[#FF73B9] text-sm text-black font-semibold py-2 px-4 rounded-lg"
        >
          <FaGithub />
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
