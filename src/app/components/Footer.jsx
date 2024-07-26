import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Image src="/images/light_theme.png" alt="Your Logo" width={80} height={250} className="h-16 mb-2" />
            <p className="mt-2 text-gray-600 md:mr-10">
              Personal portfolio website showcasing my projects and experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block w-full md:w-1/3 mb-6 md:mb-0">
            <ul>
              <li className="mb-2">
                <a href="#about" className="hover:text-gray-600 ml-5">About Me</a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="hover:text-gray-600 ml-5">Projects</a>
              </li>
              <li className="mb-2">
                <a href="#experiences" className="hover:text-gray-600 ml-5">Experience</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-gray-600 ml-5">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-3">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/veronica-dwiyanti/" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:veronicadwiyanti11@gmail.com" className="hover:text-gray-600" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="text-center text-gray-600">
          <p>&copy; 2024 Veronica Dwiyanti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



