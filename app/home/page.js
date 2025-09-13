"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { FaWifi, FaTv, FaUserShield, FaConciergeBell } from "react-icons/fa";
import { MdOutlineAcUnit, MdOutlineLocalLaundryService } from "react-icons/md";
import { GiSoap, GiWaterDrop } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Animation variants for Framer Motion (if you decide to use it)
// import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Warner",
    role: "Customer",
    image: "/man1.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur. Facilisis urna consectetur et risus commodo ultricies amet neteger. A fames tempor egestas ipsum volutpat congue egestas et eget quis. Vitae interdum adipis ultricies vitae.",
    stars: 5,
  },
  {
    name: "John Warner",
    role: "Customer",
    image: "/man2.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur. Facilisis urna consectetur et risus commodo ultricies amet neteger. A fames tempor egestas ipsum volutpat congue egestas et eget quis. Vitae interdum adipis ultricies vitae.",
    stars: 5,
  },
  {
    name: "John Warner",
    role: "Customer",
    image: "/man3.jpg",
    review:
      "Lorem ipsum dolor sit amet consectetur. Facilisis urna consectetur et risus commodo ultricies amet neteger. A fames tempor egestas ipsum volutpat congue egestas et eget quis. Vitae interdum adipis ultricies vitae.",
    stars: 5,
  },
];

const hotel = [
  {
    title: "Comfortable, economical hotels",
    features: ["Top reviewed hotels", "Centrally located", "Free Wi-Fi"],
    imageUrl: "/hotel1.avif",
  },
  {
    title: "Comfortable, economical hotels",
    features: ["Top reviewed hotels", "Centrally located", "Free Wi-Fi"],
    imageUrl: "/hotel2.avif",
  },
  {
    title: "Comfortable, economical hotels",
    features: ["Top reviewed hotels", "Centrally located", "Free Wi-Fi"],
    imageUrl: "/hotel3.avif",
  },
];

const hotels = [
  {
    title: "Ghar Basai Prime the King's Court With Pool and Bar",
    location: "Darjeeling, West Bengal",
    price: "₹2,393 per night",
    rating: "4.2",
    reviews: "1,244 reviews",
    imageUrl: "/img7.avif",
  },
  {
    title: "Luxury Stay in the Hills with Pool",
    location: "Gangtok, Sikkim",
    price: "₹3,500 per night",
    rating: "4.6",
    reviews: "980 reviews",
    imageUrl: "/img2.jpg",
  },
  {
    title: "Seaside Resort with Bar and Spa",
    location: "Goa",
    price: "₹4,200 per night",
    rating: "4.8",
    reviews: "1,540 reviews",
    imageUrl: "/img3.avif",
  },
  {
    title: "Cozy Mountain View Cottage",
    location: "Shillong, Meghalaya",
    price: "₹2,800 per night",
    rating: "4.5",
    reviews: "1,200 reviews",
    imageUrl: "/img4.jpg",
  },
  {
    title: "Premium Villa with Garden",
    location: "Puri, Odisha",
    price: "₹5,000 per night",
    rating: "4.7",
    reviews: "860 reviews",
    imageUrl: "/img5.avif",
  },
  {
    title: "Lake View Luxury Stay",
    location: "Udaipur, Rajasthan",
    price: "₹6,500 per night",
    rating: "4.9",
    reviews: "1,100 reviews",
    imageUrl: "/img6.avif",
  },
];

const features = [
  { icon: <FaWifi size={40} />, title: "Free Wifi", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: <MdOutlineAcUnit size={40} />, title: "AC", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: <MdOutlineLocalLaundryService size={40} />, title: "Clean Towels", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: <GiSoap size={40} />, title: "Toiletries", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: <GiWaterDrop size={40} />, title: "Hot Water", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: <FaTv size={40} />, title: "TV", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: <FaUserShield size={40} />, title: "24x7 Security", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: <FaConciergeBell size={40} />, title: "Room Service", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
];

export default function Home() {
  const router = useRouter();
  const destinations = [
    "DARJEELING",
    "GANGTOK",
    "GOA",
    "SHILLONG",
    "PURI",
    "SRINAGAR",
    "MUSSOORIE",
    "UDAIPUR",
    "KERALA",
    "JAIPUR",
    "OOTY",
    "KASHMIR",
  ];

  const destination = [
    { name: "Darjeeling", tours: 50, img: "/darjeeling.avif" },
    { name: "Puri", tours: 50, img: "/Puri.avif" },
    { name: "Gangtok", tours: 50, img: "/Ganktok.avif" },
    { name: "Shillong", tours: 50, img: "/Shilong.avif" },
    { name: "Goa", tours: 50, img: "/goa.avif" },
    { name: "Mussoorie", tours: 50, img: "/Mussoorie.avif" },
    { name: "Agra", tours: 50, img: "/Agra.avif" },
    { name: "Digha", tours: 50, img: "/Digha.avif" },
    { name: "jaypur", tours: 50, img: "/jaypur.avif" },
    { name: "kerala", tours: 50, img: "/kerala.avif" },
    { name: "Manali", tours: 50, img: "/manali.avif" },
    { name: "Shimla", tours: 50, img: "/shimla.avif" },
    { name: "Varanasi", tours: 50, img: "/varansi.avif" },
    { name: "Udaipur", tours: 50, img: "/Udaipur.avif" },
    { name: "Rishikesh", tours: 50, img: "/rishikesh.avif" },
    { name: "Ladakh", tours: 50, img: "/Ladakh.avif" },
  ];

  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  const slides = chunkArray(destination, 8);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsPerPage = 3;
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade in animation on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? hotels.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === hotels.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? hotels.length - itemsPerPage : prev - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= hotels.length ? 0 : prev + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const getVisibleHotels = () => {
    const visibleHotels = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % hotels.length;
      visibleHotels.push(hotels[index]);
    }
    return visibleHotels;
  };

  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .stagger-children > * {
          opacity: 0;
        }
        
        .is-visible .stagger-children > * {
          animation: fadeInUp 0.6s forwards;
        }
        
        .stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-children > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-children > *:nth-child(5) { animation-delay: 0.5s; }
        .stagger-children > *:nth-child(6) { animation-delay: 0.6s; }
        
        .parallax-bg {
          transform: translateY(${scrollPosition * 0.4}px);
        }
        
        .parallax-content {
          transform: translateY(${scrollPosition * 0.2}px);
        }
        
        /* Hide date placeholder on mobile */
        input[type="date"]:before {
          content: attr(placeholder);
          color: white;
          margin-right: 0.5rem;
        }
        input[type="date"]:focus:before,
        input[type="date"]:valid:before {
          content: "";
        }
        
        /* Custom styling for date inputs */
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.7;
          cursor: pointer;
        }

        /* Slower on small screens */
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 30s;
          }
        }

        /* Medium screens */
        @media (min-width: 641px) and (max-width: 1024px) {
          .animate-marquee {
            animation-duration: 40s;
          }
        }
           @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes bounceSlow {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }
    
    .animate-fade-in-down {
      animation: fadeInDown 0.6s ease-out forwards;
      opacity: 0;
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
    }
    
    .animate-bounce-slow {
      animation: bounceSlow 3s infinite;
    }
    
    .animate-delay-100 {
      animation-delay: 100ms;
    }
    
    .animate-delay-200 {
      animation-delay: 200ms;
    }
      @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes popIn {
      0% {
        opacity: 0;
        transform: scale(0.8) translateY(20px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
    
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }
    
    .animate-pop-in {
      animation: popIn 0.5s ease-out forwards;
    }
    
    .animate-delay-100 {
      animation-delay: 100ms;
    }
    
    .animate-delay-200 {
      animation-delay: 200ms;
    }
      `}</style>

      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Background Image with parallax effect */}
        <div className="absolute inset-0 parallax-bg">
          <Image 
            src="/mountain-house.avif" 
            alt="Luxury Villa" 
            fill
            priority
            className="object-cover transition-opacity duration-1000 ease-out"
          />   
        </div>
        
        {/* Moving Destinations Bar (Infinite Loop) */}
        <div className="absolute bottom-0 w-full bg-indigo-600/80 text-white py-3 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...destinations, ...destinations].map((place, i) => (
              <span
                key={i}
                className="flex-shrink-0 flex items-center gap-2 px-4 sm:px-6 text-sm sm:text-base md:text-lg font-semibold"
              >
                {place}
                <span className="text-white">✦</span>
              </span>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-10 lg:px-16 py-15 text-white parallax-content">
          <div className="max-w-5xl">
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            
            {/* Welcome heading with animation */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 opacity-0 animate-fade-in-up">
              Welcome to Ghar Basai
            </h2>
            <br />
            
            {/* Main heading with staggered animation */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight opacity-0 animate-fade-in-up delay-100">
              Discover the World,
              <br className="opacity-0 animate-fade-in-up delay-200" />
              One Journey at a 
              <br className="opacity-0 animate-fade-in-up delay-300" />
              Time.
            </h1>
            
            {/* Description with animation */}
            <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-10 leading-relaxed opacity-0 animate-fade-in-up delay-400">
              Experience world-class comfort in this modern villa with breathtaking
              ocean views. Perfect for relaxation, adventure, and unforgettable
              memories.
            </p>

            {/* Search Form with animation */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 bg-transparent opacity-0 animate-fade-in-up delay-500">
              {/* Destination */}
              <div className="flex items-center bg-white/20 backdrop-blur-md text-white rounded-full px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 flex-1 min-w-[160px] lg:min-w-[180px] transition-all duration-300 hover:bg-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="bg-transparent outline-none placeholder-white font-semibold text-xs sm:text-sm w-full"
                />
              </div>

              {/* Check-in */}
              <div className="flex items-center bg-white/20 backdrop-blur-md text-white rounded-full px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 flex-1 min-w-[140px] lg:min-w-[160px] transition-all duration-300 hover:bg-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <input
                  type="date"
                  className="bg-transparent outline-none font-semibold text-xs sm:text-sm text-white w-full"
                />
              </div>

              {/* Check-out */}
              <div className="flex items-center bg-white/20 backdrop-blur-md text-white rounded-full px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 flex-1 min-w-[140px] lg:min-w-[160px] transition-all duration-300 hover:bg-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <input
                  type="date"
                  className="bg-transparent outline-none font-semibold text-xs sm:text-sm text-white w-full"
                />
              </div>

              {/* Guests */}
              <div className="flex items-center bg-white/20 backdrop-blur-md text-white rounded-full px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 flex-1 min-w-[120px] lg:min-w-[140px] transition-all duration-300 hover:bg-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <input
                  type="number"
                  placeholder="Guests"
                  className="bg-transparent outline-none placeholder-white font-semibold text-xs sm:text-sm w-full"
                />
              </div>

              {/* Search */}
              <button className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full hover:opacity-90 transition w-full sm:w-auto text-xs sm:text-sm lg:min-w-[120px] animate-pulse-slow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                </svg>
                Search
              </button>
            </div>
            <br />

            {/* Content with video on the right side */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
              {/* Text content */}
              <div className="flex-1">
                <p className="text-base sm:text-lg text-white/90 mb-6">
                </p>
                <p className="text-base sm:text-lg text-white/90">
                </p>
              </div>
              
              {/* Video section on the right with animation */}
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer lg:justify-end w-full lg:w-auto opacity-0 animate-fade-in delay-700">
                <div className="relative flex-shrink-0 animate-float">
                  {/* Thumbnail Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl overflow-hidden border-2 border-white/30 group-hover:border-white/50 transition-all duration-300">
                    <Image
                      src="/img3.avif"
                      alt="Video thumbnail"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href="https://www.bing.com/videos/riverview/relatedvideo?q=modern+house+ocean+view+video&mid=7E1DA9E360D374F0A7957E1DA9E360D374F0A795&FORM=VIRE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/90 group-hover:bg-white transition-all duration-300 flex items-center justify-center shadow-lg transform group-hover:scale-110"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 sm:h-3 sm:w-3 text-blue-600 ml-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <a
                    href="https://www.bing.com/videos/riverview/relatedvideo?q=modern+house+ocean+view+video&mid=7E1DA9E360D374F0A7957E1DA9E360D374F0A795&FORM=VIRE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-sm lg:text-lg font-medium group-hover:underline transition-all duration-200"
                  >
                    Watch a Video About Us
                  </a>
                  <span className="text-white/80 text-xs sm:text-xs lg:text-sm mt-1">
                    See what makes Ghar Basai special
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Section with animation */}
      <div className={`max-w-7xl mx-auto px-4 py-16 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl my-10 shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 stagger-children">
          <div className="mb-6 md:mb-0">
            <h4 className="text-sm font-semibold text-indigo-500 uppercase tracking-wider">HOTELS</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Comfortable Stays Await
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-lg mb-6 md:mb-0">
            Experience unparalleled comfort with our curated selection of luxury hotels across India's most beautiful destinations.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center transform hover:-translate-y-1">
            View All Hotels
            <FaArrowRight className="ml-2" />
          </button>
        </div>
  
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-4 rounded-full shadow-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 z-10"
            aria-label="Previous hotels"
          >
            <FaArrowLeft />
          </button>
  
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {getVisibleHotels().map((hotel, index) => (
              <div 
                key={`${hotel.title}-${index}`} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-full h-56 relative overflow-hidden">
                  <Image
                    src={hotel.imageUrl}
                    alt={hotel.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
                    {hotel.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    <span>{hotel.location}</span>
                  </div>
                  <p className="text-2xl font-bold text-indigo-700 mb-4">{hotel.price}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex items-center bg-green-100 px-2 py-1 rounded">
                        <FaStar className="text-yellow-500 mr-1" />
                        <span className="font-semibold text-green-800">{hotel.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm ml-2">{hotel.reviews}</span>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm transition-colors duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-4 rounded-full shadow-lg hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 z-10"
            aria-label="Next hotels"
          >
            <FaArrowRight />
          </button>
        </div>
  
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(hotels.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index * itemsPerPage ? 'bg-indigo-600 scale-110' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>


<section className="py-16 bg-[#f5f0fa] text-center overflow-hidden">
  <h3 className="text-sm font-bold text-gray-700 mb-2 animate-fade-in-down">
    WHY CHOOSE GHAR BASAI
  </h3>
  <h2 className="text-3xl md:text-4xl font-extrabold text-[#5a35d1] mb-4 animate-fade-in-down animate-delay-100">
    We Make Every Journey Exceptional
  </h2>
  <p className="max-w-2xl mx-auto text-gray-600 mb-12 animate-fade-in-down animate-delay-200">
    Lorem ipsum dolor sit amet consectetur. At lorem ut cursus fringilla eu.
    Accumsan vulputate sit placerat enim praesent sit ultricies dignissim et.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20">
    {features.map((feature, index) => (
      <div
        key={index}
        className="bg-white border border-[#a489f5] rounded-lg shadow-sm p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-[#5a35d1] animate-fade-in-up"
        style={{ animationDelay: `${index * 100 + 300}ms` }}
      >
        <div className="text-[#5a35d1] mb-4 animate-bounce-slow">
          {feature.icon}
        </div>
        <h3 className="text-lg font-semibold text-[#5a35d1] mb-2">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-500">{feature.desc}</p>
      </div>
    ))}
  </div>

</section>
    <main className="px-6 md:px-20 py-12">
      {/* Popular Destinations */}
      
       {/* <motion.section
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h4
        className="uppercase text-sm tracking-widest font-semibold text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Popular Destinations
      </motion.h4>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-indigo-600 mt-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Discover the World’s Favorite Getaways
      </motion.h2>

      <motion.p
        className="mt-4 text-gray-500 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        From the beaches of Goa to the snow peaks of Ladakh — explore India’s
        most loved travel destinations.
      </motion.p>

      <motion.div
        className="mt-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {slides.map((group, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center">
                {group.map((place, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-300 mx-auto">
                      <Image
                        src={place.img}
                        alt={place.name}
                        width={112}
                        height={112}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="mt-3 font-semibold text-gray-800">
                      {place.name}
                    </h3>
                    <p className="text-sm text-gray-500">{place.tours} Tours</p>
                  </motion.div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section> */}



      <motion.section
      className="text-center mb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Subtitle */}
      <motion.h4
        className="uppercase text-sm tracking-widest font-semibold text-gray-700"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Popular Destinations
      </motion.h4>

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-indigo-600 mt-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Discover the World’s Favorite Getaways
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-4 text-gray-500 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        From the beaches of Goa to the snow peaks of Ladakh — explore India’s
        most loved travel destinations.
      </motion.p>

      {/* Swiper */}
      <motion.div
        className="mt-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {slides.map((group, slideIndex) => (
            <SwiperSlide key={slideIndex}>
  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 justify-center">
    {group.map((place, index) => (
      <motion.div
        key={index}
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
      >
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-300 mx-auto">
          <Image
            src={place.img}
            alt={place.name}
            width={112}
            height={112}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="mt-3 font-semibold text-gray-800">{place.name}</h3>
        <p className="text-sm text-gray-500">{place.tours} Tours</p>
      </motion.div>
    ))}
  </div>
</SwiperSlide>

          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  


 <motion.section
      className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Left Column */}
      <div>
        <motion.h4
          className="uppercase text-sm font-semibold text-gray-700 mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Us
        </motion.h4>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Crafting Unforgettable Travel Experiences for You
        </motion.h2>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg mb-4 bg-gray-200 h-96"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="/traveliing.avif"
            alt="Travel Experience"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col space-y-6">
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg h-96 bg-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Image
            src="/Nature.avif"
            alt="Nature Destination"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          At Ghar Basai, we bring you closer to the serenity of nature and luxury
          living — offering handpicked hotels and bespoke travel experiences
          across India’s most stunning destinations. Whether you're seeking
          adventure in the mountains or relaxation by the sea, we curate journeys
          that create memories to last a lifetime. Explore the beauty, culture,
          and heritage with us.
        </motion.p>
      </div>
    </motion.section>
    </main>



 {/* <motion.section
      className="bg-[#f6edff] py-12 px-6 lg:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      <motion.div
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div>
          <p className="text-sm font-semibold text-gray-700">OFFER</p>
          <h2 className="text-3xl font-bold text-indigo-600">
            Exclusive Deals For You
          </h2>
        </div>
        <p className="text-gray-500 max-w-xl mt-4 lg:mt-0">
          Lorem ipsum dolor sit amet consectetur. At lorem ut cursus fringilla
          eu. Accumsan vulputate sit placerat enim praesent sit a ultricies
          dignissim et.
        </p>
        <div className="flex gap-3 mt-6 lg:mt-0">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#E0E7FF" }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full border border-indigo-500 text-indigo-500 hover:bg-indigo-100"
          >
            <FaArrowLeft />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#E0E7FF" }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full border border-indigo-500 text-indigo-500 hover:bg-indigo-100"
          >
            <FaArrowRight />
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        <motion.div
          className="bg-black rounded-xl p-6 text-white relative"
          variants={{
            hidden: { opacity: 0, scale: 0.9, y: 40 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-md">
            LONGSTAY
          </span>
          <Image
            src="/img2.jpg"
            alt="Longstay Offer"
            width={600}
            height={300}
            className="rounded-lg mb-6 object-cover w-full h-40"
          />
          <h3 className="text-2xl font-semibold mb-2">Avail Up to 55% Off</h3>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur proin netus cursus non.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-full"
          >
            Book Now
          </motion.button>
        </motion.div>

        <motion.div
          className="bg-black rounded-xl p-6 text-white relative"
          variants={{
            hidden: { opacity: 0, scale: 0.9, y: 40 },
            visible: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-md">
            NEWLAUNCH
          </span>
          <Image
            src="/img4.jpg"
            alt="Newlaunch Offer"
            width={600}
            height={300}
            className="rounded-lg mb-6 object-cover w-full h-40"
          />
          <h3 className="text-2xl font-semibold mb-2">Exclusive 30% Off</h3>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur proin netus cursus non.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-full"
          >
            Book Now
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section> */}

<motion.section
  className="bg-[#f6edff] py-12 px-6 lg:px-20"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Header */}
  <motion.div
    className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <div>
      <p className="text-sm font-semibold text-gray-700">OFFER</p>
      <h2 className="text-3xl font-bold text-indigo-600">
        Exclusive Deals For You
      </h2>
    </div>
    <p className="text-gray-500 max-w-xl mt-4 lg:mt-0">
      Lorem ipsum dolor sit amet consectetur. At lorem ut cursus fringilla eu.
      Accumsan vulputate sit placerat enim praesent sit a ultricies dignissim et.
    </p>
    <div className="flex gap-3 mt-6 lg:mt-0">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 rounded-full border border-indigo-500 text-indigo-500 hover:bg-indigo-100"
      >
        <FaArrowLeft />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 rounded-full border border-indigo-500 text-indigo-500 hover:bg-indigo-100"
      >
        <FaArrowRight />
      </motion.button>
    </div>
  </motion.div>

  {/* Cards */}
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.3 },
      },
    }}
  >
    {/* Card 1 */}
    <motion.div
      className="relative rounded-xl overflow-hidden"
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 40 },
        visible: { opacity: 1, scale: 1, y: 0 },
      }}
      transition={{ duration: 0.7 }}
    >
      <Image
        src="/img2.jpg"
        alt="Longstay Offer"
        width={600}
        height={600}
        className="w-full h-64 object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-md">
          LONGSTAY
        </span>
        <h3 className="text-2xl font-semibold mb-2">Avail Up to 55% Off</h3>
        <p className="text-gray-200 mb-4">
          Lorem ipsum dolor sit amet consectetur proin netus cursus non.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="self-start bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-full"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      className="relative rounded-xl overflow-hidden"
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 40 },
        visible: { opacity: 1, scale: 1, y: 0 },
      }}
      transition={{ duration: 0.7 }}
    >
      <Image
        src="/img4.jpg"
        alt="Newlaunch Offer"
        width={600}
        height={600}
        className="w-full h-64 object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <span className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-md">
          NEWLAUNCH
        </span>
        <h3 className="text-2xl font-semibold mb-2">Exclusive 30% Off</h3>
        <p className="text-gray-200 mb-4">
          Lorem ipsum dolor sit amet consectetur proin netus cursus non.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="self-start bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-full"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
</motion.section>




 <div className="w-full bg-white text-gray-800">
      {/* Heading */}
      <div className="text-center py-12 px-4 max-w-4xl mx-auto">
        <p className="uppercase text-sm text-gray-500">BRANDS</p>
        <h2 className="text-3xl font-bold text-indigo-600 mt-2">
          Our Leading Travel Brands
        </h2>
        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet consectetur. At lorem ut cursus fringilla eu. 
          Accumsan vulputate sit placerat enim present sita ultricies dignissim et.
        </p>

        {/* Category buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
            Economical
          </button>
          <button className="px-4 py-2 rounded-full bg-pink-400 text-white hover:bg-pink-500">
            Prime
          </button>
          <button className="px-4 py-2 rounded-full bg-purple-400 text-white hover:bg-purple-500">
            Express
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevSlide} className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200">
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide} className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200">
            <FaArrowRight />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotel.map((hotel, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src={hotel.imageUrl}
                  alt={hotel.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-indigo-600 font-semibold mb-2">{hotel.title}</h3>
              <ul className="text-sm text-gray-500 space-y-1">
                {hotel.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* App Download Section */}
{/* App Download Section */}
<div className="bg-black text-white py-20 mt-12">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 gap-12">
    
    {/* Left Side - Text + Buttons */}
    <div className="flex-1 text-center md:text-left">
      <p className="uppercase text-sm text-gray-400 mb-4">GET OUR APP</p>
      <h2 className="text-4xl font-bold mb-6">Smart Travel Starts With Our App</h2>
      <p className="text-gray-400 mb-10">
        Lorem ipsum dolor sit amet consectetur. At lorem ut cursus fringilla eu. 
        Accumsan vulputate sit placerat enim present sita ultricies dignissim et.
      </p>
      <div className="flex justify-center md:justify-start gap-4">
        <a href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-xl transition-all duration-300 shadow-md">
          <div className="w-8 h-8">
            <Image 
              src="/google-play-img.webp" 
              alt="Google Play" 
              width={32} 
              height={32} 
              className="object-contain"
            />
          </div>
          <span className="text-white text-sm font-semibold">Get it on Google Play</span>
        </a>
        <a href="#" className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-xl transition-all duration-300 shadow-md">
          <div className="w-8 h-8">
            <Image 
              src="/app-store-img.png" 
              alt="App Store" 
              width={32} 
              height={32} 
              className="object-contain"
            />
          </div>
          <span className="text-white text-sm font-semibold">Download on the App Store</span>
        </a>
      </div>
    </div>

    {/* Right Side - Phone Image */}
    <div className="flex-1 flex justify-center">
      <Image 
        src="/ph-img.avif"
        alt="Phone Image"
        width={300}
        height={300}
        className="drop-shadow-2xl object-contain"
      />
    </div>

  </div>
</div>
</div>


    
<section className="py-16 px-4 text-center">
  <p className="text-sm text-gray-500 font-semibold mb-2">TESTIMONIAL</p>
  <h2 className="text-3xl font-bold text-purple-700 mb-10">
    Kind Words from Our Community
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="border border-purple-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
      >
        <h3 className="font-semibold text-lg mb-2">Excellent Company</h3>
        <p className="text-sm text-gray-600 mb-4">"{testimonial.review}"</p>
        <div className="flex justify-center mb-4">
          {Array(testimonial.stars)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          {/* Display the image */}
          <img
            src={testimonial.image} // Dynamically uses the image from the testimonials object
            alt={`${testimonial.name}'s Avatar`}
            className="w-10 h-10 rounded-full" // Ensures the image is circular
          />
          <div className="text-left">
            <p className="font-semibold text-sm">{testimonial.name}</p>
            <p className="text-xs text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    </>
  );
}
