import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "SMAK Tech",
    role: "Backend Developer",
    duration: "Dec 2024 – Present",
    location: "Maharashtra, India · Remote",
    points: [
      "Created and refactored 20+ RESTful APIs with improved validation and optimized architecture.",
      "Mentored 3+ interns using GitHub workflows, PRs, and structured code reviews.",
      "Debugged and tested backend services, maintaining database consistency.",
    ],
  },
  {
    company: "StockTub (Freelancing)",
    role: "Full Stack Developer",
    duration: "Apr 2025 – Jun 2025",
    location: "Remote",
    points: [
      "Built 10+ responsive pages with smooth UX for mobile and desktop.",
      "Integrated RESTful APIs and implemented state management.",
      "Created secure APIs with Razorpay integration and JWT-based authentication.",
    ],
  },
  {
    company: "SMAK Tech",
    role: "Intern Developer",
    duration: "Jul 2024 – Dec 2024",
    location: "Remote",
    points: [
      "Designed and implemented database schemas and developed secure, scalable APIs for data handling and user authentication.",
      "Built responsive and accessible user interfaces and integrated them with backend services for seamless functionality.",
      "Managed application state using Redux and implemented role-based routing to ensure secure and personalized user experiences.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-8  xl:px-20   flex flex-col space-y-16 items-center">
      <h2 className="xl:text-4xl text-3xl font-semibold">Experience</h2>
      <div className=" space-y-12 w-full max-w-5xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-6  rounded-2xl shadow hover:shadow-[#FF3CAC]/50 transition-shadow duration-300"
          >
            <div className="flex  flex-row justify-between items-center mb-4">
              <div>
                <h3 className="xl:text-xl text-lg font-bold text-[#FF3CAC]">
                  {exp.company}
                </h3>
                <p className="xl:text-sm text-xs text-gray-300">{exp.role}</p>
              </div>
              <div className="xl:text-sm text-xs text-gray-400 flex items-center gap-3 flex-wrap">
                <FaCalendarAlt className="text-[#FF3CAC]" />
                <span>{exp.duration}</span>
                <span className="mx-1">|</span>
                <FaMapMarkerAlt className="text-[#FF3CAC]" />
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-300 space-y-0 pl-2 xl:text-base text-sm">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
