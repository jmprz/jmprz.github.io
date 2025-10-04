import React, { useState, useEffect } from 'react';
import { RiBehanceFill, RiFacebookFill, RiGithubFill, RiLinkedinFill, RiYoutubeFill, RiSunFill, RiMoonFill } from "@remixicon/react";
import profile from './assets/jmp.png';
import Tabs from './Tabs';

const jmp = {
  name: 'John Matthew Perez',
  title: 'Web Designer & Developer'
};

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem('darkMode');
    return storedMode === 'true' || (storedMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-gray-900'); // Add dark background
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-gray-900'); // Remove dark background
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <div className="w-full flex justify-end mt-7 pe-10">
        <button 
          onClick={toggleDarkMode} 
          className={`p-1.5 sm:p-2 md:p-3 rounded-full transition duration-300 shadow-lg ${darkMode ? 'bg-cyan-500' : 'bg-white'}`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <RiMoonFill className="text-white text-2xl sm:text-3xl md:text-4xl" />
          ) : (
            <RiSunFill className="text-indigo-950 text-2xl sm:text-3xl md:text-4xl" />
          )}
        </button>
      </div>
    <div className={`${darkMode ? 'dark' : ''} max-w-full mx-auto flex flex-col items-center sm:flex-row sm:space-x-4 place-content-center`}>
  <img 
    src={profile} 
    className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full mb-4 sm:mb-0 border-4 border-cyan-500" 
    alt="jmp" 
  />
  <div className="text-center sm:text-left">
    <h1 className="text-3xl sm:text-3xl md:text-4xl text-indigo-950 font-bold whitespace-nowrap dark:text-white">
      {jmp.name}
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-2 dark:text-gray-300 mb-4">
      {jmp.title}
    </p>

    {/* CV Download Button */}
    <a 
      href="https://drive.google.com/file/d/1CelJOSy8WmzpJLRaeIjtCvcfWUNVMCH5/view?usp=sharing"  // <-- put your actual CV path here
      download
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-white bg-cyan-500 hover:bg-cyan-600 font-medium rounded-lg text-sm sm:text-base w-28 sm:w-36 h-10 sm:h-12 me-2 mb-2 dark:bg-cyan-500 dark:hover:bg-cyan-600 focus:outline-none text-center leading-[2.5rem]"
    >
      Download CV
    </a>

    {/* Social Links */}
    <div className="flex justify-center sm:justify-start space-x-4 mt-2">
      <a 
        href="https://www.behance.net/jmpstudio" 
        target="_blank" 
        rel="noopener noreferrer"
        className="h-12 w-12 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center dark:hover:bg-cyan-500 hover:bg-cyan-500"
      >
        <RiBehanceFill className="text-indigo-950 h-7 w-7 sm:w-8 sm:h-8 md:w-8 md:h-8 dark:text-white hover:text-white" />
      </a>

      <a 
        href="https://www.facebook.com/jmjkprz"
        target="_blank" 
        rel="noopener noreferrer"
        className="h-12 w-12 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center dark:hover:bg-cyan-500 hover:bg-cyan-500"
      >
        <RiFacebookFill className="text-indigo-950 h-7 w-7 sm:w-8 sm:h-8 md:w-8 md:h-8 dark:text-white hover:text-white" />
      </a>

      <a 
        href="https://www.github.com/jmprz"
        target="_blank" 
        rel="noopener noreferrer"
        className="h-12 w-12 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center dark:hover:bg-cyan-500 hover:bg-cyan-500"
      >
        <RiGithubFill className="text-indigo-950 h-7 w-7 sm:w-8 sm:h-8 md:w-8 md:h-8 dark:text-white hover:text-white" />
      </a>

      <a 
        href="https://www.linkedin.com/in/johnmatthewprz"
        target="_blank" 
        rel="noopener noreferrer"
        className="h-12 w-12 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center dark:hover:bg-cyan-500 hover:bg-cyan-500"
      >
        <RiLinkedinFill className="text-indigo-950 h-7 w-7 sm:w-8 sm:h-8 md:w-8 md:h-8 dark:text-white hover:text-white" />
      </a>

      <a 
        href="https://www.youtube.com/channel/UCmHTFfv3mFSnEE9I20X2GvA"
        target="_blank" 
        rel="noopener noreferrer"
        className="h-12 w-12 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center dark:hover:bg-cyan-500 hover:bg-cyan-500"
      >
        <RiYoutubeFill className="text-indigo-950 h-7 w-7 sm:w-8 sm:h-8 md:w-8 md:h-8 dark:text-white hover:text-white" />
      </a>
    </div>
  </div>
</div>

      <Tabs />
    </>
  );
}
