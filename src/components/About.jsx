import React from "react";

const About = () => {
  return (
    <div className="w-full  flex  items-center justify-center py-24  px-16 xl:px-28 gap-8">
      {/* Image section */}
      <div className="flex-1 flex justify-center items-center">
        <img
          className="w-full max-w-xs h-auto object-contain rounded-full"
          src="https://4.bp.blogspot.com/-4-aCisEElb8/T0pljCigd_I/AAAAAAAAB2Q/y2ebF_90HOk/s1600/beautiful+nature+photo.jpg"
          alt="home"
        />
      </div>
      {/* Text section */}
      <div className="flex-1 flex flex-col items-center  justify-center">
        <div className="flex flex-col gap-4">
          <p className="xl:text-5xl text-4xl font-semibold ">About me</p>
          <p className="xl:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            minus possimus eaque neque aliquid temporibus harum tempora libero
            nulla ipsum exercitationem iusto, quibusdam unde id corporis tenetur
            repellat laboriosam qui? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aliquam minus possimus eaque neque aliquid. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus
            possimus eaque neque aliquid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
