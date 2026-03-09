import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "SMAK Tech",
    role: "Backend Developer",
    duration: "Dec 2024 – Present",
    location: "Maharashtra, India · Remote",
    points: [
      "Led a small team of interns, assigned development tasks, and reviewed code to ensure on-time delivery and better code quality.",
      "Developed 25+ REST APIs for modules like Attendance Tracker, Timetable, Performance, Teacher, ensuring efficient backend operations.",
      "Contributed to application deployment using Docker and AWS and implemented AWS S3 for profile image and file uploads.",
      "Optimized database schemas using mapping schemas to reduce data duplication by 25% and improved data consistency.",
      "Performed API testing, debugging, and GitHub version control to maintain code quality and reduce integration issues by 15%.",
    ],
  },
  {
    company: "SMAK Tech",
    role: "Intern Developer",
    duration: "Jul 2024 – Dec 2024",
    location: "Remote",
    points: [
      "Developed 10+ UI components and integrated multiple APIs to connect frontend with backend services.",
      "Implemented OTP verification and JWT-based authentication to secure user login and protect application routes.",
      "Assisted in Redux state management and handled cookies for session management, improving frontend data handling efficiency by ~15%.",
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
