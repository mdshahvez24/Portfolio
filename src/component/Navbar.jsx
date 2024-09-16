import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="container mx-auto flex flex-wrap justify-between items-center p-4"
      id="home"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 className="text-2xl xs:text-3xl md:text-4xl font-bold">
        My Portfolio
      </h1>

      <div className="hidden lg:flex">
        <ul className="flex text-sm xs:text-lg md:text-2xl font-bold space-x-4 md:space-x-6 lg:space-x-8">
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#project" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#experience" className="hover:text-yellow-400">Experience</a></li>
          <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </div>

      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-3xl font-bold">
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`w-full shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="mt-4 space-y-4 text-xl font-bold">
            <li><a href="#home" className="hover:text-yellow-400" onClick={toggleMenu}>Home</a></li>
            <li><a href="#project" className="hover:text-yellow-400" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#experience" className="hover:text-yellow-400" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#skills" className="hover:text-yellow-400" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#contact" className="hover:text-yellow-400" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
