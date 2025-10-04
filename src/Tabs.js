import { RiPencilRulerFill, RiCommandFill, RiEye2Fill, RiEarthFill } from '@remixicon/react';
import React, { useState, useEffect } from 'react';
import imageLoader from './Icons';
import Email from './Email';
import { RiBehanceFill, RiFacebookFill, RiGithubFill, RiLinkedinFill, RiYoutubeFill, RiSunFill, RiMoonFill } from "@remixicon/react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(() => {
    // Load the active tab from local storage or default to 'about'
    return localStorage.getItem('activeTab') || 'about';
  });

  useEffect(() => {
    // Save the active tab to local storage whenever it changes
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const icons = imageLoader();

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutContent icons={icons} />;
      case 'projects':
        return <ProjectsContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return null;
    }
  };

  return (
    <div className="place-content-center flex flex-col items-center">
      <nav className="mt-8">
        <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-xl sm:text-2xl md:text-3xl">
          <li>
            <button
              className={`text-indigo-950 hover:text-cyan-500 pb-2 transition-colors duration-300 dark:text-white ${activeTab === 'about' ? 'text-cyan-500 border-b-4 border-cyan-500' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={`text-indigo-950 hover:text-cyan-500 pb-2 transition-colors duration-300 dark:text-white ${activeTab === 'projects' ? 'text-cyan-500 border-b-4 border-cyan-500' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={`text-indigo-950 hover:text-cyan-500 pb-2 transition-colors duration-300 dark:text-white ${activeTab === 'contact' ? 'text-cyan-500 border-b-4 border-cyan-500' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact
            </button>
          </li>
          <li>
          </li>
        </ul>
      </nav>
      <div className="mt-5 max-w-full mx-auto">{renderContent()}</div>
    </div>
  );
};

const AboutContent = ({ icons }) => (
  <div className="flex flex-col items-center px-4">
    {/* About Me Header */}
    <div className="p-3 bg-cyan-500 rounded-lg shadow-lg mt-1 text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">
      ABOUT ME
    </div>

    {/* About Me Section */}
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-5xl dark:bg-gray-800 mb-6 text-center">
      <p className="text-gray-700 text-base sm:text-lg dark:text-gray-300 leading-relaxed">
        I’m a creative <span className="font-semibold">Web Designer & Developer </span> 
        passionate about blending design and 
        code to craft seamless digital experiences. 
        I specialize in building responsive, 
        user-friendly websites and applications that balance 
        functionality with 
        aesthetics.
      </p>
    </div>

    {/* Skills / Services Header */}
    <div className="p-3 bg-cyan-500 rounded-lg shadow-lg mt-1 text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">
      SKILLS / SERVICES
    </div>

    {/* Skills / Services Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 max-w-5xl w-full mb-6">
      {/* Design */}
      <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800 flex flex-col space-y-4 hover:shadow-xl transition">
        <div className="flex items-center space-x-4">
          <div className="bg-cyan-500 rounded-full p-2 flex items-center justify-center">
            <RiPencilRulerFill className="text-white h-8 w-8 sm:w-10 sm:h-10 md:w-10 md:h-10" />
          </div>
          <div className="text-3xl font-semibold text-indigo-950 dark:text-white">Design</div>
        </div>
        <ul className="list-disc pl-8 text-lg space-y-2 dark:text-gray-300">
          <li>UI / UX Design (Web & Mobile App)</li>
          <li>Graphic Design (Infographics, Logos, Posters, Branding)</li>
        </ul>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {icons.slice(0, 6).map((icon) => (
            <div
              key={icon.id}
              className="flex items-center justify-center mb-2 transform hover:scale-110 transition duration-300"
            >
              <img
                src={icon.src}
                alt={icon.title}
                title={icon.title}
                className="h-12 w-12 md:h-14 md:w-14"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Development */}
      <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800 flex flex-col space-y-4 hover:shadow-xl transition">
        <div className="flex items-center space-x-4">
          <div className="bg-cyan-500 rounded-full p-2 flex items-center justify-center">
            <RiCommandFill className="text-white h-8 w-8 sm:w-10 sm:h-10 md:w-10 md:h-10" />
          </div>
          <div className="text-3xl font-semibold text-indigo-950 dark:text-white">Development</div>
        </div>
        <ul className="list-disc pl-8 text-lg space-y-2 dark:text-gray-300">
          <li>Front-End Development (React, Tailwind, Bootstrap)</li>
          <li>Back-End Development (PHP, MySQL, WordPress)</li>
        </ul>
        <div className="grid grid-cols-4 gap-3 mt-4">
          {icons.slice(6).map((icon) => (
            <div
              key={icon.id}
              className="flex items-center justify-center mb-2 transform hover:scale-110 transition duration-300"
            >
              <img
                src={icon.src}
                alt={icon.title}
                title={icon.title}
                className="h-12 w-12 md:h-14 md:w-14"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

   {/* Experience Header */}
    <div className="p-3 bg-cyan-500 rounded-lg shadow-lg mt-1 text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">
      EXPERIENCE
    </div>

    {/* Experience Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-6 max-w-5xl mb-6">
      <div className="max-w-3xl rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 flex items-center hover:shadow-xl hover:-translate-y-1 transition">
        <div className="px-7 py-4 flex-grow ">
          <p className="text-indigo-950 text-lg font-semibold sm:text-xl dark:text-white">
            Web Developer
          </p>
          <p className="text-gray-700 text-base sm:text-lg dark:text-gray-300">
            Eulogio “Amang” Rodriguez Institute of Science & Technology
          </p>
          <p className="text-gray-700 text-base sm:text-lg italic dark:text-gray-300">
            Sept 2024 – Present
          </p>
          <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm sm:text-base dark:text-gray-300">
            <li> Designed and developed responsive websites for multiple school offices, primarily using Bootstrap, PHP and WordPress.</li>
            <li> Maintained and updated the school’s official website, including announcements, documents, and multimedia content.</li>
            <li> Optimized websites for accessibility, usability, and mobile responsiveness.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Education Header */}
    <div className="p-3 bg-cyan-500 rounded-lg shadow-lg mt-1 text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2">
      EDUCATION
    </div>

    {/* Education Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 max-w-5xl mb-4">
      {/* EARIST */}
      <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 flex items-center hover:shadow-xl hover:-translate-y-1 transition">
        <img
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain p-4"
          src={process.env.PUBLIC_URL + 'icons/earist-logo.png'}
          alt="EARIST"
        />
        <div className="px-2 py-4 flex-grow">
          <p className="text-indigo-950 text-lg font-semibold sm:text-xl dark:text-white">
            Bachelor of Science in Computer Science (BSCS)
          </p>
          <p className="text-gray-700 text-base sm:text-lg dark:text-gray-300">
            Eulogio Amang Rodriguez Institute of Science & Technology
          </p>
          <p className="text-gray-700 text-base sm:text-lg italic dark:text-gray-300">
            2023 - Present
          </p>
        </div>
      </div>

      {/* Arellano University */}
      <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 flex items-center hover:shadow-xl hover:-translate-y-1 transition">
        <img
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain p-4"
          src={process.env.PUBLIC_URL + 'icons/au-logo.png'}
          alt="Arellano University"
        />
        <div className="px-2 py-4 flex-grow">
          <p className="text-indigo-950 text-lg font-semibold sm:text-xl dark:text-white">
            STEM Strand – Senior High School
          </p>
          <p className="text-gray-700 text-base sm:text-lg dark:text-gray-300">
            Arellano University – Andres Bonifacio Campus
          </p>
          <p className="text-gray-700 text-base sm:text-lg italic dark:text-gray-300">
            2021 - 2023
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsContent = () => {
  // State to manage the selected filter (Design or Development)
  const [filter, setFilter] = useState('Design');

  return (
    <div className="flex flex-col items-center px-4">
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold rounded-lg shadow-lg ${
            filter === 'Design' ? 'bg-cyan-500 text-white' : 'bg-white dark:bg-gray-800 dark:text-white'
          }`}
          onClick={() => setFilter('Design')}
        >
          DESIGNS
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded-lg shadow-lg ${
            filter === 'Development' ? 'bg-cyan-500 text-white' : 'bg-white dark:bg-gray-800 dark:text-white'
          }`}
          onClick={() => setFilter('Development')}
        >
          DEVELOPMENT
        </button>
      </div>

      {/* Render Projects based on Filter */}
      {filter === 'Design' && (
        <>
         {/* Grid Container for Project Thumbnails */}
<div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 max-w-7xl mb-4">
  {/* Card Item */}
  <div className="relative max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 group">
    {/* Thumbnail Image */}
    <img 
      className="w-full transition-all duration-300 ease-in-out group-hover:filter group-hover:brightness-[0.35] group-hover:blur-[2px]" 
      src={process.env.PUBLIC_URL + 'thumbnail/des-comsa.png'} 
      alt="COMSA" 
    />

    {/* Buttons that appear on hover */}
    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bottom-48 sm:bottom-48 md:bottom-64 lg:bottom-52 xl:bottom-48">
      <a  href="https://www.behance.net/gallery/198754127/PUBMATS-DESIGNS-COMSA" target="_blank" className="flex items-center outline outline-2 rounded-lg px-3 py-2 text-xl font-medium text-white mb-2 hover:bg-cyan-500 hover:outline-0">
        <RiBehanceFill className="text-white h-7 w-7 mr-1" /> View on Behance
      </a>
    </div>

    {/* Card Content */}
    <div className="px-6 py-4">
      <div className="pb-1">
        <span className="inline-block bg-blue-950 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">
          Graphic Design
        </span>
      </div>
      <div className="font-bold text-xl mb-2 text-indigo-950 dark:text-white">Pubmats & Designs | COMSA</div>
      <p className="text-gray-700 dark:text-gray-300 text-base">
        Some of my works as a Multimedia Committee of Computer Science Student Association (COMSA) of Eulogio Amang Rodriguez Institute of Science & Technology (EARIST) - Manila.
      </p>
    </div>
  </div>
        {/* Repeat Card Items for Other Projects */}
        <div className="relative max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 group">
          <img 
            className="w-full transition-all duration-300 ease-in-out group-hover:filter group-hover:brightness-[0.35] group-hover:blur-[2px]" 
            src={process.env.PUBLIC_URL + 'thumbnail/des-taketix.png'} 
            alt="TakeTix" 
          />
           
    {/* Buttons that appear on hover */}
    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bottom-48 sm:bottom-48 md:bottom-64 lg:bottom-52 xl:bottom-48">
      <a  href="https://www.behance.net/gallery/173686967/TakeTix-UI-Design-for-an-Online-Movie-Ticket-App" target="_blank" className="flex items-center outline outline-2 rounded-lg px-3 py-2 text-xl font-medium text-white mb-2 hover:bg-cyan-500 hover:outline-0">
        <RiBehanceFill className="text-white h-7 w-7 mr-1" /> View on Behance
      </a>
    </div>
          <div className="px-6 py-4">
          <div className="pb-1">
            <span className="inline-block bg-gray-900 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">UI / UX Design</span>
          </div>
            <div className="font-bold text-xl mb-2 text-indigo-950 dark:text-white">TakeTix | UI Design for an Online Movie Ticket App</div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
           UI Design for TakeTix Mobile Application that will make things easy. No need to wait in line and you can get a ticket with a few clicks. Users can choose their desired Cinemas, Film, Date & Time.
            </p>
          </div>
        </div>
        
        {/* Add more cards as needed */}
        <div className="relative max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 group">
          <img 
            className="w-full w-full transition-all duration-300 ease-in-out group-hover:filter group-hover:brightness-[0.35] group-hover:blur-[2px]" 
            src={process.env.PUBLIC_URL + 'thumbnail/des-collection.png'} 
            alt="Design Collection" 
          />
                        {/* Buttons that appear on hover */}
    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bottom-48 sm:bottom-48 md:bottom-64 lg:bottom-52 xl:bottom-48">
      <a  href="https://www.behance.net/gallery/173686967/TakeTix-UI-Design-for-an-Online-Movie-Ticket-App" target="_blank" className="flex items-center outline outline-2 rounded-lg px-3 py-2 text-xl font-medium text-white mb-2 hover:bg-cyan-500 hover:outline-0">
        <RiBehanceFill className="text-white h-7 w-7 mr-1" /> View on Behance
      </a>
    </div>
          <div className="px-6 py-4">
          <div className="pb-1">
            <span className="inline-block bg-blue-950 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">Graphic Design</span>
          </div>
            <div className="font-bold text-xl mb-2 text-indigo-950 dark:text-white">Design Collection</div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
            Collection of projects that I worked on since the beginning of my journey to become a designer. This includes flyers, infographics and posters.
            </p>
          </div>
        </div>
        <div className="relative max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 group">
          <img 
            className="w-full w-full transition-all duration-300 ease-in-out group-hover:filter group-hover:brightness-[0.35] group-hover:blur-[2px]" 
            src={process.env.PUBLIC_URL + 'thumbnail/des-ca-runch.png'} 
            alt="Ca-Runch" 
          />
      {/* Buttons that appear on hover */}
    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bottom-48 sm:bottom-48 md:bottom-64 lg:bottom-52 xl:bottom-48">
      <a  href="https://www.behance.net/gallery/160722319/Ca-Runch-Camote-Chips" target="_blank" className="flex items-center outline outline-2 rounded-lg px-3 py-2 text-xl font-medium text-white mb-2 hover:bg-cyan-500 hover:outline-0">
        <RiBehanceFill className="text-white h-7 w-7 mr-1" /> View on Behance
      </a>
    </div>
          <div className="px-6 py-4">
          <div className="pb-1">
            <span className="inline-block bg-blue-950 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">Graphic Design</span>
            <span className="inline-block bg-gray-900 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">UI / UX Design</span>
          </div>
            <div className="font-bold text-xl mb-2 text-indigo-950 dark:text-white">Ca - Runch | Camote Chips</div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
            Brand identity for Ca-Runch, this includes logo, packaging, flyer and website design.
            </p>
          </div>
        </div>
      </div>
        </>
      )}

      {filter === 'Development' && (
        <>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 max-w-7xl mb-4">
        
        {/* COMSA - NOW */}
        <div className="relative max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 group">
          <img
            className="w-full w-full transition-all duration-300 ease-in-out group-hover:filter group-hover:brightness-[0.35] group-hover:blur-[2px]"
            src={process.env.PUBLIC_URL + 'thumbnail/dev-comsa.png'}
            alt="COMSA - NOW"
          />
              {/* Buttons that appear on hover */}
    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bottom-72 sm:bottom-48 md:bottom-64 lg:bottom-52 xl:bottom-48 max-[370px]:bottom-52">
      <a  href="https://github.com/jmprz/COMSA-NOW" target="_blank" className="flex items-center outline outline-2 rounded-lg px-5 py-2 text-xl font-medium text-white mb-2 hover:bg-cyan-500 hover:outline-0 mb-4 max-[370px]:mb-2 max-[370px]:text-base">
        <RiGithubFill className="text-white h-7 w-7 mr-1" /> View on Github
      </a>
       <a  href="https://comsa-now.vercel.app" target="_blank" className="flex items-center outline outline-2 rounded-lg px-4 py-2 text-xl font-medium text-white mb-2 hover:bg-cyan-500 hover:outline-0 mb-4 max-[370px]:mb-2 max-[370px]:text-base">
        <RiEarthFill className="text-white h-7 w-7 mr-1" /> View Live Demo
      </a>
    </div>
          {/* Card Content */}
          <div className="px-6 py-4">
          <div className="pb-1">
                    <span className="inline-block bg-violet-600 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">Bootstrap</span>
            <span className="inline-block bg-sky-700 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">MySQL</span>
            <span className="inline-block bg-indigo-500 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">PHP</span>
          </div>
            <div className="font-bold text-xl mb-2 text-indigo-950 dark:text-white"> COMSA-NOW | Social Media Platform for Computer Science Students</div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
      Designed and developed the landing page, user interface, and ensured
      responsive design. Contributed to backend features for posts
      and user management, enhancing
      student communication and collaboration at EARIST–Manila.
    </p>
          </div>
        </div>
       
       
        {/* FinTrack */}
        <div className="relative max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 group">
          <img 
            className="w-full w-full transition-all duration-300 ease-in-out group-hover:filter group-hover:brightness-[0.35] group-hover:blur-[2px]" 
            src={process.env.PUBLIC_URL + 'thumbnail/dev-fintrack.png'} 
            alt="FinTrack" 
          />
              {/* Buttons that appear on hover */}
    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bottom-72 sm:bottom-48 md:bottom-64 lg:bottom-52 xl:bottom-48 max-[370px]:bottom-52">
      <a  href="https://github.com/jmprz/fintrack_php" target="_blank" className="flex items-center outline outline-2 rounded-lg px-5 py-2 text-xl font-medium text-white mb-2 hover:bg-cyan-500 hover:outline-0 mb-4 max-[370px]:mb-2 max-[370px]:text-base">
        <RiGithubFill className="text-white h-7 w-7 mr-1" /> View on Github
      </a>
    </div>
          {/* Card Content */}
          <div className="px-6 py-4">
          <div className="pb-1">
            <span className="inline-block bg-sky-700 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">MySQL</span>
            <span className="inline-block bg-indigo-500 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">PHP</span>
            <span className="inline-block bg-cyan-600 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">TailwindCSS</span>
          </div>
            <div className="font-bold text-xl mb-2 text-indigo-950 dark:text-white">FinTrack | Accounting Management System for eCLICK Business Solution</div>
               <p className="text-gray-700 dark:text-gray-300 text-base">
      Developed a web-based accounting system
      for eCLICK Business Solutions. 
      Focused on transaction tracking and 
      financial reporting, streamlining workflows 
      and improving data accuracy through a responsive interface.
    </p>
          </div>
        </div>

         {/* SeekNFind */}
        <div className="relative max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 group">
          <img 
            className="w-full w-full transition-all duration-300 ease-in-out group-hover:filter group-hover:brightness-[0.35] group-hover:blur-[2px]" 
            src={process.env.PUBLIC_URL + 'thumbnail/dev-seeknfind.png'} 
            alt="SeekNFind" 
          />
              {/* Buttons that appear on hover */}
    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bottom-72 sm:bottom-48 md:bottom-64 lg:bottom-52 xl:bottom-48 max-[370px]:bottom-52">
      <a  href="https://github.com/jmprz/seeknfind" target="_blank" className="flex items-center outline outline-2 rounded-lg px-5 py-2 text-xl font-medium text-white mb-2 hover:bg-cyan-500 hover:outline-0 mb-4 max-[370px]:mb-2 max-[370px]:text-base">
        <RiGithubFill className="text-white h-7 w-7 mr-1" /> View on Github
      </a>
    </div>
          {/* Card Content */}
          <div className="px-6 py-4">
          <div className="pb-1">
          <span className="inline-block bg-green-500 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">Android App</span>
            <span className="inline-block bg-violet-600 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">Bootstrap</span>
            <span className="inline-block bg-sky-700 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">MySQL</span>
            <span className="inline-block bg-indigo-500 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">PHP</span>
          </div>
            <div className="font-bold text-xl mb-2 text-indigo-950 dark:text-white">SeekNFind | Information Management System for Lost and Found Items </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
           An Information Management System for Lost and Found Items at EARIST - Manila wherein I'm the Leader & Programmer. This is a group based system for the course "Database Management Systems".
            </p>
          </div>
        </div>
        {/* Noteist */}
        <div className="relative max-w-lg rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 group">
          <img 
            className="w-full w-full transition-all duration-300 ease-in-out group-hover:filter group-hover:brightness-[0.35] group-hover:blur-[2px]" 
            src={process.env.PUBLIC_URL + 'thumbnail/dev-noteist.png'} 
            alt="Noteist" 
          />
                {/* Buttons that appear on hover */}
    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bottom-48 sm:bottom-48 md:bottom-64 lg:bottom-52 xl:bottom-48 max-[370px]:bottom-52">
      <a  href="https://github.com/jmprz/noteist" target="_blank" className="flex items-center outline outline-2 rounded-lg px-5 py-2 text-xl font-medium text-white mb-2 hover:bg-cyan-500 hover:outline-0 mb-4 max-[370px]:mb-2 max-[370px]:text-base">
        <RiGithubFill className="text-white h-7 w-7 mr-1" /> View on Github
      </a>
      <a  href="https://noteist.vercel.app" target="_blank" className="flex items-center outline outline-2 rounded-lg px-4 py-2 text-xl font-medium text-white mb-2 hover:bg-cyan-500 hover:outline-0 mb-4 max-[370px]:mb-2 max-[370px]:text-base">
        <RiEarthFill className="text-white h-7 w-7 mr-1" /> View Live Demo
      </a>
      <a  href="https://youtu.be/3PZ6Ljc_eFs" target="_blank" className="flex items-center outline outline-2 rounded-lg px-3 py-2 text-xl font-medium text-white mb-2 hover:bg-cyan-500 hover:outline-0 mb-4 max-[370px]:mb-4 max-[370px]:text-base">
        <RiYoutubeFill className="text-white h-7 w-7 mr-1" /> View on YouTube
      </a>
    </div>
          {/* Card Content */}
          <div className="px-6 py-4">
          <div className="pb-1">
          <span className="inline-block bg-orange-500 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">HTML</span>
          <span className="inline-block bg-blue-400 rounded-lg px-3 py-1 text-md font-semibold text-white mr-2 mb-2">CSS</span>
          <span className="inline-block bg-yellow-400 rounded-lg px-3 py-1 text-md font-semibold text-gray-950 mr-2 mb-2">JavaScript</span>
          </div>
            <div className="font-bold text-xl mb-2 text-indigo-950 dark:text-white">Noteist | Notes & To-Do List</div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
            A simple web application with a minimalist design that allows you to create notes and to-do lists for increased productivity. This is my first HTML, CSS, and JavaScript project.
            </p>
          </div>
        </div>
        </div>
        </>
      )}
    </div>
  );
};

const ContactContent = () => (
<Email />
);

export default Tabs;
