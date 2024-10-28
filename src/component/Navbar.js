import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 md:ml-16 md:mr-16">
      {/* Logo */}
      <h1 className="text-xl font-medium hover:border-b-2 hover:text-yellow-300 hover:border-yellow-300">
        Portfolio
      </h1>

      {/* Hamburger Icon for mobile */}
      <button
        className="block md:hidden focus:outline-none text-yellow-300"
        onClick={toggleSidebar}
      >
        <div className="h-1 w-6 bg-yellow-300 mb-1"></div>
        <div className="h-1 w-6 bg-yellow-300 mb-1"></div>
        <div className="h-1 w-6 bg-yellow-300"></div>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-14">
        <ul className="flex gap-14">
          <li className="text-lg font-normal border-transparent hover:border-b-2 hover:text-yellow-300 hover:border-yellow-300">
            <a href="#home">Home</a>
          </li>
          <li className="text-lg font-normal border-transparent hover:border-b-2 hover:text-yellow-300 hover:border-yellow-300">
            <a href="#experience">Experience</a>
          </li>
          <li className="text-lg font-normal border-transparent hover:border-b-2 hover:text-yellow-300 hover:border-yellow-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-lg font-normal border-transparent hover:border-b-2 hover:text-yellow-300 hover:border-yellow-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="text-lg font-normal border-transparent hover:border-b-2 hover:text-yellow-300 hover:border-yellow-300">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <button
          className="text-yellow-300 mt-4 ml-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          Close
        </button>
        <ul className="flex flex-col items-start mt-3 gap-4 ml-4">
          <li
            onClick={toggleSidebar}
            className="text-base font-normal hover:text-yellow-300"
          >
            <a href="#home">Home</a>
          </li>
          <li
            onClick={toggleSidebar}
            className="text-base font-normal hover:text-yellow-300"
          >
            <a href="#experience">Experience</a>
          </li>
          <li
            onClick={toggleSidebar}
            className="text-base font-normal hover:text-yellow-300"
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            onClick={toggleSidebar}
            className="text-base font-normal hover:text-yellow-300"
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            onClick={toggleSidebar}
            className="text-base font-normal hover:text-yellow-300"
          >
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
