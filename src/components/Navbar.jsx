import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-blue-800 fixed top-0 flex justify-center text-white z-50 shadow-lg">
      <ul className="flex space-x-6 font-semibold text-lg">
        <li><a href="#home" className="hover:text-cyan-300">Home</a></li>
        <li><a href="#skills" className="hover:text-cyan-300">Skills</a></li>
        <li><a href="#projects" className="hover:text-cyan-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-cyan-300">Contact</a></li>
        <li>
          <a
            href="/resume.pdf"
            download
            className="hover:text-cyan-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
