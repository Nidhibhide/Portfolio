import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "SMAK Tech",
    role: "Backend Developer",
    duration: "Dec 2024 – Present",
    location: "Maharashtra, India · Remote",
    points: [
      "Led a team of 3+ interns with task assignment, code reviews, and GitHub workflows to maintain code quality.",
      "Refactored and optimized backend code, enhanced database efficiency, and integrated AWS S3 for reliable image storage. ",
      "Collaborated with frontend teams to align features, resolved backend issues, and improved overall system performance.",
      "Contributed to deployment phase using Docker and AWS, ensuring stable and scalable releases. "
    ],
  },
  {
    company: "StockTub (Freelancing)",
    role: "Full Stack Developer",
    duration: "Apr 2025 – Jun 2025",
    location: "Remote",
    points: [
      "Delivered 10+ responsive pages ensuring smooth navigation and consistent user experience on desktop and mobile.  ",
      "Enabled seamless data flow with integrated APIs, state management, and dynamic frontend-backend interactions.",
      "Implemented secure subscription payments using Razorpay and structured databases to manage users and transactions efficiently.",
    ],
  },
  {
    company: "SMAK Tech",
    role: "Intern Developer",
    duration: "Jul 2024 – Dec 2024",
    location: "Remote",
    points: [
      "Built responsive pages 8+ and integrated APIs for smooth data-driven interactions. ",
      "Developed secure backend with 10+ CRUD APIs and JWT-based authentication. ",
      "Worked as a full stack developer, contributing to end-to-end product features in a startup.  ",
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
