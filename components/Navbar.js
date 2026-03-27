"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  // 🔵 Desktop dropdown states
  const [isHotelOpenDesktop, setIsHotelOpenDesktop] = useState(false);
  const [isTourOpenDesktop, setIsTourOpenDesktop] = useState(false);

  // 🔵 Mobile menu states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHotelOpenMobile, setIsHotelOpenMobile] = useState(false);
  const [isTourOpenMobile, setIsTourOpenMobile] = useState(false);

  const menuRef = useRef(null);

  const isActive = (path) => pathname === path;
  const isActiveStarts = (path) => pathname?.startsWith(path);

  // CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ANIMATION VARIANTS
  const dropItem = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* NAVBAR CONTAINER */}
        <div className="flex justify-between h-[72px] items-center">

          {/* LOGO */}
          <Link href="/home">
            <Image
              src="/logo.png"
              alt="Ghar Basai"
              width={150}
              height={40}
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-3 font-medium">

            {/* HOME */}
            <Link
              href="/home"
              className={`px-4 py-2 rounded-full transition ${
                isActive("/home")
                  ? "bg-[#4A4DD0] text-white"
                  : "hover:text-[#4A4DD0]"
              }`}
            >
              Home
            </Link>

            {/* ABOUT */}
            <Link
              href="/about"
              className={`px-4 py-2 rounded-full transition ${
                isActive("/about")
                  ? "bg-[#4A4DD0] text-white"
                  : "hover:text-[#4A4DD0]"
              }`}
            >
              About Us
            </Link>

            {/* HOTELS (Desktop Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setIsHotelOpenDesktop(true)}
              onMouseLeave={() => setIsHotelOpenDesktop(false)}
            >
              <button
                className={`px-4 py-2 rounded-full flex items-center gap-1 transition-all duration-200 ${
                  isActiveStarts("/hotel")
                    ? "bg-[#4A4DD0] text-white"
                    : "hover:text-[#4A4DD0] text-gray-700"
                }`}
              >
                Hotels

                {/* Smooth thin dropdown arrow */}
                <span
                  className={`ml-1 inline-block transform transition-transform duration-200 ${
                    isHotelOpenDesktop ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M5.5 7L10 11.5L14.5 7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </span>
              </button>

              {/* DROPDOWN */}
              <AnimatePresence>
                {isHotelOpenDesktop && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 4 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-2 z-40"
                  >
                    <Link href="/hotel/hotel-list" className="block px-4 py-2 rounded-lg hover:bg-gray-100">
                      Hotel List
                    </Link>
                    <Link href="/hotel/hotel-details" className="block px-4 py-2 rounded-lg hover:bg-gray-100">
                      Hotel Details
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* TOURS (Desktop Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setIsTourOpenDesktop(true)}
              onMouseLeave={() => setIsTourOpenDesktop(false)}
            >
              <button
                className={`px-4 py-2 rounded-full flex items-center gap-1 transition-all duration-200 ${
                  isActiveStarts("/tour-booking")
                    ? "bg-[#4A4DD0] text-white"
                    : "hover:text-[#4A4DD0] text-gray-700"
                }`}
              >
                Tour Booking

                {/* Thin Rotating Arrow */}
                <span
                  className={`ml-1 inline-block transform transition-transform duration-200 ${
                    isTourOpenDesktop ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M5.5 7L10 11.5L14.5 7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </span>
              </button>

              {/* DROPDOWN */}
              <AnimatePresence>
                {isTourOpenDesktop && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 4 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-2 z-40"
                  >
                    <Link href="/tour-booking/domestic" className="block px-4 py-2 hover:bg-gray-100">
                    Tour Details
                    </Link>
                    <Link href="/tour-booking/international" className="block px-4 py-2 hover:bg-gray-100">
                      International Tours
                    </Link>
                    <Link href="/tour-booking/tour-listing" className="block px-4 py-2 hover:bg-gray-100">
                      Tour Listing
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* GALLERY */}
            <Link
              href="/gallery"
              className={`px-4 py-2 rounded-full transition ${
                isActive("/gallery") ? "bg-[#4A4DD0] text-white" : "hover:text-[#4A4DD0]"
              }`}
            >
              Gallery
            </Link>

            {/* CONTACT */}
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-full transition ${
                isActive("/contact") ? "bg-[#4A4DD0] text-white" : "hover:text-[#4A4DD0]"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden md:block">
              <Image src="/login.png" width={40} height={40} alt="login" />
            </Link>

            <Link href="/consultant" className="hidden md:block">
              <Image src="/booking.png" width={200} height={40} alt="consult" />
            </Link>

            {/* MOBILE MENU BUTTON - ANIMATED HAMBURGER TO CROSS */}
            <button
              onClick={() => setIsMenuOpen((s) => !s)}
              className="md:hidden p-2 relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-center items-center">
                {/* Top line */}
                <span
                  className={`absolute h-0.5 w-6 bg-[#4A4DD0] transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                ></span>
                
                {/* Middle line */}
                <span
                  className={`absolute h-0.5 w-6 bg-[#4A4DD0] transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                ></span>
                
                {/* Bottom line */}
                <span
                  className={`absolute h-0.5 w-6 bg-[#4A4DD0] transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
<AnimatePresence>
  {isMenuOpen && (
    <>
      {/* BACKDROP OVERLAY */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* SLIDING MENU */}
      <motion.div
        key="mobileMenu"
        ref={menuRef}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 60 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed right-4 top-24 w-72 bg-white shadow-xl rounded-2xl p-5 z-50"
      >

        {/* PARENT FOR STAGGER */}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >

          {/* HOME */}
          <motion.div variants={dropItem}>
            <Link href="/home" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-gray-100">
              Home
            </Link>
          </motion.div>

          {/* ABOUT */}
          <motion.div variants={dropItem}>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg hover:bg-gray-100">
              About Us
            </Link>
          </motion.div>

          {/* HOTELS ACCORDION */}
          <motion.div variants={dropItem} className="mt-2">
            <button
              onClick={() => setIsHotelOpenMobile((s) => !s)}
              className="flex justify-between w-full px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              Hotels {isHotelOpenMobile ? "▲" : "▼"}
            </button>

            <AnimatePresence>
              {isHotelOpenMobile && (
                <motion.div
                  key="hotels-accordion"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden pl-6"
                >
                  <Link
                    href="/hotel/hotel-list"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2"
                  >
                    Hotel List
                  </Link>

                  <Link
                    href="/hotel/hotel-details"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2"
                  >
                    Hotel Details
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* TOURS ACCORDION */}
          <motion.div variants={dropItem} className="mt-2">
            <button
              onClick={() => setIsTourOpenMobile((s) => !s)}
              className="flex justify-between w-full px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              Tour Booking {isTourOpenMobile ? "▲" : "▼"}
            </button>

            <AnimatePresence>
              {isTourOpenMobile && (
                <motion.div
                  key="tour-accordion"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden pl-6"
                >
                  <Link href="/tour-booking/domestic" onClick={() => setIsMenuOpen(false)} className="block py-2">
                   Tour Details
                  </Link>
                  <Link href="/tour-booking/international" onClick={() => setIsMenuOpen(false)} className="block py-2">
                    International Tours
                  </Link>
                  <Link href="/tour-booking/tour-listing" onClick={() => setIsMenuOpen(false)} className="block py-2">
               Tour Listing
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* GALLERY */}
          <motion.div variants={dropItem}>
            <Link
              href="/gallery"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 mt-2"
            >
              Gallery
            </Link>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={dropItem}>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 rounded-lg hover:bg-gray-100 mt-2"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* CONSULTANT BUTTON */}
          <motion.div variants={dropItem} className="mt-4">
            <Link href="/consultant" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/booking.png"
                width={200}
                height={48}
                alt="consult"
                className="mx-auto"
              />
            </Link>
          </motion.div>

        </motion.div>
      </motion.div>
    </>
  )}
</AnimatePresence>


    </nav>
  );
}