import React from "react";

const Education = () => {
  const educationData = [
    {
      university: "Savitribai Phule Pune University",
      degree: "Master of Computer Applications",
      duration: "2022 – 2024",
      score: "Percentage: 77%",
    },
    {
      university: "Bharati Vidyapeeth",
      degree: "Bachelor of Computer Applications",
      duration: "2019 – 2022",
      score: "Percentage: 73%",
    },
  ];

  return (
    <section className="py-24 px-4  xl:px-20 flex flex-col space-y-16">
      <h2 className="xl:text-5xl text-4xl font-semibold text-center  ">
        Education
      </h2>

      <div className="space-y-12 max-w-4xl mx-auto  w-full  ">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-8 rounded-2xl shadow-lg hover:shadow-[#FF3CAC]/40 transition-shadow duration-300"
          >
            <h3 className="xl:text-3xl text-2xl font-bold text-[#FF3CAC] mb-2">
              {edu.university}
            </h3>
            <p className="xl:text-2xl text-xl font-medium mb-1">{edu.degree}</p>
            <div className="flex justify-between font-semibold text-base text-gray-300">
              <span>{edu.score}</span>
              <span>{edu.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
