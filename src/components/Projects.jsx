import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  LearnCode,
  currencyConverter,
  passwordGenerator,
  BudgetBuddy,
} from "../images";

const projects = [
  {
    title: "LearnCode – Coding Platform",
    image: LearnCode,
    link: "https://learn-code-three.vercel.app/",
    github: "https://github.com/Nidhibhide/LearnCode",
    features:
      "Created a coding platform with 5+ language support, AI-generated questions, secure role-based access, real-time notifications, and a smooth UX.",
  },
  {
    title: "Budget Buddy",
    image: BudgetBuddy,
    link: "https://budget-buddy-roan.vercel.app/",
    github: "https://github.com/Nidhibhide/BudgetBuddy",
    features:
      "Designed an expense tracker with secure login, budget and expense management, multi-currency support, responsive UI, and interactive dashboards.",
  },
  {
    title: "Currency Converter",
    image: currencyConverter,
    link: "https://currency-converter-lake-six.vercel.app/",
    github: "https://github.com/Nidhibhide/Currency-converter",
    features:
      "A sleek, responsive currency converter for real-time global currency conversions with an intuitive interface.",
  },
  {
    title: "Password Generator",
    image: passwordGenerator,
    link: "https://password-generator-xi-three-75.vercel.app/",
    github: "https://github.com/Nidhibhide/Password-generator",
    features:
      "Generates strong passwords with length and symbol toggles. Built with React, Hooks, and styled using Tailwind CSS.",
  },
];

const Projects = () => {
  // Split the first 3 and the remaining cards
  const firstRow = projects.slice(0, 3);
  const remaining = projects.slice(3);

  return (
    <section
      id="work"
      className="scroll-mt-24 py-24 px-6 max-w-7xl mx-auto flex flex-col gap-8 items-center"
    >
      <h2 className="xl:text-4xl text-3xl font-semibold ">Projects</h2>
      <p className="text-center text-gray-400 text-sm xl:text-base font-medium max-w-3xl mb-6">
        Below are MERN stack projects styled with Tailwind CSS and secured using
        JWT & OAuth 2.0.
      </p>

      {/* Row 1: 3 cards */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        {firstRow.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Row 2: center remaining (like 4th card) */}
      {remaining.length > 0 && (
        <div className="flex justify-center">
          {remaining.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      )}
    </section>
  );
};

// 🧩 Reusable card component
const ProjectCard = ({ title, image, link, github, features }) => (
  <div className="bg-[#1A1A1A] rounded-2xl xl:w-[320px] w-[300px] h-[350px]  shadow-md hover:shadow-[#FF3CAC]/50 transition-shadow duration-300 flex flex-col">
    <div className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-contain hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div className="flex flex-col p-3">
      <h3 className="xl:text-lg text-base font-bold text-[#FF3CAC] mb-1">
        {title}
      </h3>
      <p className="xl:text-base text-sm text-gray-300  xl:h-[100px]   mb-2">
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
