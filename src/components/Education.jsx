import React from "react";

const Education = () => {
  const educationData = [
    {
      university: "Bharati Vidyapeeth",
      degree: "Bachelor of Computer Applications",
      duration: "2019 – 2022",
      score: "Percentage: 73%",
    },
    {
      university: "Savitribai Phule Pune University",
      degree: "Master of Computer Applications",
      duration: "2022 – 2024",
      score: "Percentage: 77%",
    },
  ];

  return (
    <section className="py-24 px-4  xl:px-20 flex flex-col space-y-16 items-center">
      <h2 className="xl:text-4xl text-3xl font-semibold text-center  ">
        Education
      </h2>

      <div className=" max-w-5xl  flex w-full  justify-center gap-8 ">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-6 flex-1  shadow-lg hover:shadow-[#FF3CAC]/40 transition-shadow duration-300"
          >
            <p className=" font-extrabold xl:text-2xl text-xl text-yellow-500 mb-3">
              {edu.duration}
            </p>
            <h3 className="xl:text-2xl text-xl font-medium text-[#FF3CAC] mb-1">
              {edu.university}
            </h3>
            <p className="xl:text-2xl text-xl font-medium mb-2">{edu.degree}</p>
            <p className="font-semibold xl:text-lg text-base text-gray-300">
              {edu.score}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
