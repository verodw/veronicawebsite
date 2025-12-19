"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navlinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Experience",
        path: "#experiences",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#1a1625]/95 backdrop-blur-md shadow-lg shadow-purple-500/5 border-b border-gray-800' 
        : 'bg-[#221C35]/80 backdrop-blur-sm border-b border-white/5'
    }`}>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between h-16 sm:h-18 md:h-20'>
          {/* Logo */}
          <Link href={"/"} className="flex items-center">
            <Image
              src="/images/dark_theme.png"
              alt="Veronica Dwiyanti"
              width={160}
              height={160}
              className="h-14 w-auto md:h-16"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:block'>
            <ul className='flex items-center space-x-1'>
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button 
              onClick={() => setNavbarOpen(!navbarOpen)} 
              className='flex items-center justify-center w-10 h-10 rounded-lg border border-gray-700 text-gray-400 hover:text-white hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-200'
              aria-label="Toggle menu"
            >
              {!navbarOpen ? (
                <Bars3Icon className='h-5 w-5'/>   
              ) : (
                <XMarkIcon className='h-5 w-5'/>   
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navlinks} />}
    </nav>
  );
};

export default Navbar;