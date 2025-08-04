import React from "react";

const Header = () => {
  return (
    <header className=" bg-[#1A1A1A]  shadow-md   h-[75px] w-full fixed ">
      <div className=" mx-12 py-6 flex justify-around items-center">
        <div className="text-xl xl:text-2xl font-bold">MyPortolio</div>
        <nav className="flex space-x-6 ">
          <a href="#home" className=" text-base 		hover:text-[#FF3CAC] font-medium">
            Home
          </a>
          <a href="#about" className="text-base	hover:text-[#FF3CAC] font-medium">
            About
          </a>
          <a href="#work" className="text-base		hover:text-[#FF3CAC] font-medium">
            Work
          </a>
          <a
            href="#contact"
            className="text-base		hover:text-[#FF3CAC] font-medium"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
