import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#1A1A1A] shadow-md h-[75px] w-full fixed top-0 left-0 z-50">
      <div className="mx-4 sm:mx-8 xl:mx-12 py-5 flex justify-between items-center h-full">
        <div className="text-xl xl:text-2xl font-bold">MyPortolio</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base hover:text-[#FF3CAC] font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-2xl leading-none px-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-[#1A1A1A] border-t border-[#2E2E2E] flex flex-col px-6 py-4 space-y-3 shadow-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base hover:text-[#FF3CAC] font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
