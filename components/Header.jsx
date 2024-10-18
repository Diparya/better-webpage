'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-black shadow-lg' : 'bg-[rgb(0,71,51)] text-white'
      } flex justify-between items-center py-4 px-6 lg:px-12`}
    >
      <div className="text-2xl font-bold">
        <Link href='/'>Better</Link>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-6">
        <li className="hover:text-gray-500 cursor-pointer">
          <Link href='/about-us'>About Us</Link>
        </li>
        <li className="hover:text-gray-500 cursor-pointer">
          <Link href='/mortgage-calculator'>Calculator</Link>
        </li>
        <li className="hover:text-gray-500 cursor-pointer">
          <Link href='/start'>Get&apos;s Start</Link>
        </li>
        <li className="hover:text-gray-500 cursor-pointer">Rates</li>
        <li className="hover:text-gray-500 cursor-pointer">Better+</li>
      </ul>
      <div className="hidden lg:flex space-x-6 items-center">
        <button className="text-2xl">
          <div className="text-white border rounded-full p-2">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                fill="#292B29"
              ></path>
            </svg>
          </div>
        </button>
        <button className="hover:text-gray-500">Sign in</button>
      </div>
      
      {/* Mobile Menu */}
      <div className="lg:hidden flex space-x-4">
        <button className="text-2xl">
          <div className="text-white border rounded-full p-2">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.5 13.5L18.5 17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.500002 10.39 0.500002 1C0.500002 0.450001 0.950003 0 1.5 0L4.99 0C5.54 0 5.99 0.450001 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"
                fill="#292B29"
              ></path>
            </svg>
          </div>
        </button>
        {/* Hamburger/Cross Icon */}
        <button className="text-3xl" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black shadow-lg flex flex-col items-center lg:hidden rounded-lg">
          <ul className="flex flex-col space-y-4 py-6">
            <li className="text-green-800 hover:text-green-500 cursor-pointer">
            <Link href='/about-us'>About Us</Link>
            </li>
            <li className="text-green-800 hover:text-green-500 cursor-pointer">
            <Link href='/mortgage-calculator'>Calculator</Link>
            </li>
            <li className="text-green-800 hover:text-green-500 cursor-pointer">
            <Link href='/start'>Get&apos;s Start</Link>
            </li>
            <li className="text-green-800 hover:text-green-500 cursor-pointer">Rates</li>
            <li className="text-green-800 hover:text-green-500 cursor-pointer">Better+</li>
            <li className="hover:text-green-500 hover:bg-white text-white bg-green-700 p-2 rounded-lg">Sign in</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
