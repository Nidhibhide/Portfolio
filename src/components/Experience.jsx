import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    company: "Nikqik Technologies",
    role: "Associate Consultant",
    duration: "June 2026 – Nov 2026",
    location: "Remote",
    points: [
      "Developed features for the Docs, Canvas, and Links modules of a SaaS work management platform using Next.js.",
      "Implemented folder management and access control across all three modules, with View/Edit permissions and inherited access.",
      "Integrated Canvas embedding and added image support, labels, comments, and Draft/Publish workflows.",
    ],
  },
  {
    company: "SMAK Tech",
    role: "Software Developer (Contract)",
    duration: "Dec 2024 – June 2026",
    location: "Maharashtra, India · Remote",
    points: [
      "Developed and maintained an EdTech platform using React.js, TypeScript, and Tailwind CSS, delivering high-performance, responsive UI with RESTful API integration.",
      "Designed and implemented key features including Assessment, Timetable, and Performance dashboards using Chart.js for data visualization.",
      "Contributed to application deployment using GitHub, Docker, and AWS (S3, ECS), maintaining CI/CD pipelines.",
      "Collaborated in an Agile environment with daily stand-ups and sprint planning, achieving 92–95% sprint completion. Led interns through onboarding, code reviews, and on-time delivery.",
    ],
  },
  {
    company: "SMAK Tech",
    role: "Intern Developer",
    duration: "July 2024 – Dec 2024",
    location: "Remote",
    points: [
      "Assisted in Redux state management, improving frontend data handling efficiency by 15%.",
      "Developed and integrated RESTful APIs for Class, Student, and Syllabus modules.",
      "Implemented OTP verification and JWT-based authentication to secure user login and protect application routes.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 xl:px-20 flex flex-col space-y-10 sm:space-y-16 items-center">
      <h2 className="xl:text-4xl text-2xl sm:text-3xl font-semibold">
        Experience
      </h2>
      <div className="space-y-8 sm:space-y-12 w-full max-w-5xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-4 sm:p-6 rounded-2xl shadow hover:shadow-[#FF3CAC]/50 transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
              <div>
                <h3 className="xl:text-xl text-lg font-bold text-[#FF3CAC]">
                  {exp.company}
                </h3>
                <p className="xl:text-sm text-xs text-gray-300">{exp.role}</p>
              </div>
              <div className="xl:text-sm text-xs text-gray-400 flex items-center gap-2 sm:gap-3 flex-wrap">
                <FaCalendarAlt className="text-[#FF3CAC] shrink-0" />
                <span>{exp.duration}</span>
                <span className="mx-1">|</span>
                <FaMapMarkerAlt className="text-[#FF3CAC] shrink-0" />
                <span>{exp.location}</span>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-300 space-y-1 pl-1 sm:pl-2 xl:text-base text-sm">
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
