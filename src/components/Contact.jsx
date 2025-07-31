import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <footer className=" py-32 px-6 xl:px-20">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-[#FF3CAC] text-center">
            Contact Me
          </h2>
          <p className="flex items-start gap-3 mb-3 text-lg">
            <FaMapMarkerAlt className="text-[#FF3CAC] mt-1" />
            <span>C-35 Hotgi Road, Solapur - 413003</span>
          </p>
          <p className="flex items-center gap-3 mb-3">
            <FaPhone className="text-[#FF3CAC]" />
            <span>+91 8766675279</span>
          </p>
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-[#FF3CAC]" />
            <span>nidhibhide144@gmail.com</span>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#FF3CAC] flex justify-center">
            Quick Links
          </h2>
          <ul className="space-y-2 text-gray-300 text-base flex flex-col items-center">
            <li>
              <a
                href="/"
                className="hover:text-[#FF3CAC] transition duration-300 block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-[#FF3CAC] transition duration-300 block"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1GvisqLYZwoUT-NPENgwjFvx4YV-cbqhs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF3CAC] transition duration-300 block"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Nidhibhide"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF3CAC] transition duration-300 block"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-[#FF3CAC]">
            Let’s Connect
          </h2>
          <p className="text-gray-300 text-base mb-4">
            I’m open to freelance or full-time opportunities. Feel free to reach
            out!
          </p>
          <a
            href="mailto:nidhibhide144@gmail.com"
            className="inline-block mt-2 bg-[#FF3CAC] hover:bg-[#FF73B9] font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Send Email
          </a>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Nidhi Bhide. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
