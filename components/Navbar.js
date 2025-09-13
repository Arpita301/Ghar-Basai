"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Import next/link for routing
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHotelOpen, setIsHotelOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);


  const pathname = usePathname(); // Get current path
  const isActive = pathname === "/home"; // Check if it's "/h

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav 
      ref={menuRef}
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-0' : 'bg-gradient-to-b from-blue-900/90 to-transparent py-2'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and navigation items */}
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold">
                <span className={`${isScrolled ? 'text-blue-600' : 'text-blue-400'}`}>Ghar</span> 
                <span className={`${isScrolled ? 'text-orange-500' : 'text-orange-400'}`}>Basai</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-8 md:flex md:items-center md:space-x-1">
              {/* <Link href="/home" className={`relative group px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </Link> */}


                    <Link
        href="/home"
        className={`relative group px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
          isActive
            ? 'bg-blue-600 text-white'
            : 'text-gray-100 hover:text-white'
        }`}
      >
        Home
        <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
      </Link>

              <Link href="/about" className={`relative group px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* Hotel Dropdown */}
              <div className="relative">
                <button 
                  onMouseEnter={() => setIsHotelOpen(true)}
                  onMouseLeave={() => setIsHotelOpen(false)}
                  className={`relative group px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}
                >
                  Hotel
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${isHotelOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </button>

                <div 
                  className={`absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl z-20 transition-all duration-300 transform origin-top-right ${isHotelOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                  onMouseEnter={() => setIsHotelOpen(true)}
                  onMouseLeave={() => setIsHotelOpen(false)}
                >
                  <Link href="/hotel/luxury" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Luxury Resorts</Link>
                  <Link href="/hotel/budget" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Budget Stays</Link>
                  <Link href="/hotel/family" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Family Hotels</Link>
                </div>
              </div>

              {/* Tour Booking Dropdown */}
              <div className="relative">
                <button 
                  onMouseEnter={() => setIsTourOpen(true)}
                  onMouseLeave={() => setIsTourOpen(false)}
                  className={`relative group px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}
                >
                  Tour Booking
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${isTourOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </button>

                <div 
                  className={`absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl z-20 transition-all duration-300 transform origin-top-right ${isTourOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                  onMouseEnter={() => setIsTourOpen(true)}
                  onMouseLeave={() => setIsTourOpen(false)}
                >
                  <Link href="/tour-booking/domestic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Domestic Tours</Link>
                  <Link href="/tour-booking/international" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">International Tours</Link>
                  <Link href="/tour-booking/custom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">Custom Packages</Link>
                </div>
              </div>

              <Link href="/gallery" className={`relative group px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link href="/contact" className={`relative group px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}>
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center">
       {/* <Link 
  href="/login" 
  className={`hidden md:flex items-center mr-4 transition-colors duration-300 group ${
    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'
  }`}
>
  <svg
    className="w-5 h-5 mr-1 group-hover:scale-110 transition-transform duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    ></path>
  </svg>
</Link> */}


<Link 
  href="/login" 
  className={`hidden md:flex items-center mr-4 px-3 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors duration-300`}
>
  <svg
    className="w-5 h-5 mr-1 group-hover:scale-110 transition-transform duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    ></path>
  </svg>
</Link>

            {/* Book a free consultant button */}
            <Link href="/consultant" className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
              Book a Free Consultant
            </Link>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800/30 focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'}`}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 border-b border-gray-100">Home</Link>
          <Link href="/about" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 border-b border-gray-100">About Us</Link>

          {/* Hotel dropdown mobile */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => setIsHotelOpen(!isHotelOpen)}
              className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              Hotel
              <svg className={`w-4 h-4 transition-transform duration-300 ${isHotelOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isHotelOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link href="/hotel/luxury" className="block pl-6 pr-3 py-3 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">Luxury Resorts</Link>
              <Link href="/hotel/budget" className="block pl-6 pr-3 py-3 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">Budget Stays</Link>
              <Link href="/hotel/family" className="block pl-6 pr-3 py-3 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">Family Hotels</Link>
            </div>
          </div>

          {/* Tour Booking dropdown mobile */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => setIsTourOpen(!isTourOpen)}
              className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              Tour Booking
              <svg className={`w-4 h-4 transition-transform duration-300 ${isTourOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isTourOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link href="/tour-booking/domestic" className="block pl-6 pr-3 py-3 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">Domestic Tours</Link>
              <Link href="/tour-booking/international" className="block pl-6 pr-3 py-3 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">International Tours</Link>
              <Link href="/tour-booking/custom" className="block pl-6 pr-3 py-3 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">Custom Packages</Link>
            </div>
          </div>

          <Link href="/gallery" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 border-b border-gray-100">Gallery</Link>
          <Link href="/contact" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300 border-b border-gray-100">Contact Us</Link>

          <div className="pt-4 pb-2 border-t border-gray-200">
        
                 <Link 
  href="/login" 
  className={`hidden md:flex items-center mr-4 transition-colors duration-300 group ${
    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-100 hover:text-white'
  }`}
>
  <svg
    className="w-5 h-5 mr-1 group-hover:scale-110 transition-transform duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    ></path>
  </svg>
  Log In
</Link>
            <Link href="/consultant" className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 shadow-md">
              Book a Free Consultant
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
