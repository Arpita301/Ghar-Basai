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
import { Calendar } from "lucide-react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const testimonials = [
  {
    name: "John Warner",
    role: "Customer",
    image: "/man1.png",
    review:
      "Lorem ipsum dolor sit amet consectetur. Facilisis urna consectetur et risus commodo ultricies amet neteger. A fames tempor egestas ipsum volutpat congue egestas et eget quis. Vitae interdum adipis ultricies vitae.",
    stars: 5,
  },
  {
    name: "John Warner",
    role: "Customer",
    image: "/man1.png",
    review:
      "Lorem ipsum dolor sit amet consectetur. Facilisis urna consectetur et risus commodo ultricies amet neteger. A fames tempor egestas ipsum volutpat congue egestas et eget quis. Vitae interdum adipis ultricies vitae.",
    stars: 5,
  },
  {
    name: "John Warner",
    role: "Customer",
    image: "/man1.png",
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
    imageUrl: "/img1.png",
  },
  {
    title: "Luxury Stay in the Hills with Pool",
    location: "Gangtok, Sikkim",
    price: "₹3,500 per night",
    rating: "4.6",
    reviews: "980 reviews",
    imageUrl: "/img2.png",
  },
  {
    title: "Seaside Resort with Bar and Spa",
    location: "Goa",
    price: "₹4,200 per night",
    rating: "4.8",
    reviews: "1,540 reviews",
    imageUrl: "/img3.png",
  }
];


const features = [
  { icon: "/wifi.png", title: "Free Wifi", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: "/ac.png", title: "AC", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: "/towel.png", title: "Clean Towels", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: "/toli.png", title: "Toiletries", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: "/hot.png", title: "Hot Water", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: "/tv.png", title: "TV", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
   { icon:"/service.png", title: "Room Service", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
  { icon: "/men.png", title: "24X7 Security", desc: "Lorem ipsum dolor sit amet consectetur at lorem cursus" },
 
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
       { name: "Darjeeling", tours: 50, img: "/darjeeling.avif" },
    { name: "Puri", tours: 50, img: "/Puri.avif" },
    { name: "Gangtok", tours: 50, img: "/Ganktok.avif" },
    { name: "Shillong", tours: 50, img: "/Shilong.avif" },
    { name: "Goa", tours: 50, img: "/goa.avif" },
    { name: "Mussoorie", tours: 50, img: "/Mussoorie.avif" },
    { name: "Agra", tours: 50, img: "/Agra.avif" },
    { name: "Digha", tours: 50, img: "/Digha.avif" }
  ];
// Split destination list into chunks of 8
const slides = [];
for (let i = 0; i < destination.length; i += 8) {
  slides.push(destination.slice(i, i + 8));
}



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



  const hotel = [
    {
      title: "Comfortable, economical hotels",
      imageUrl: "/mask1.png",
      features: ["Top reviewed hotels", "Centrally located", "Free Wi-Fi"],
    },
    {
      title: "Comfortable, economical hotels",
      imageUrl: "/mask2.png",
      features: ["Top reviewed hotels", "Centrally located", "Free Wi-Fi"],
    },
    {
      title: "Comfortable, economical hotels",
      imageUrl: "/mask3.png",
      features: ["Top reviewed hotels", "Centrally located", "Free Wi-Fi"],
    },
  ];

  const [index, setIndex] = useState(0);


/* ===== Motion Variants ===== */
const headingZigzag = {
  animate: {
    // translateX will be combined with CSS keyframes for better responsiveness
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const paraJump = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 16, duration: 0.6 }
  }
};

const cardFloat = (delay = 0) => ({
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      delay
    }
  }
});

const btnHover = {
  whileHover: { scale: 1.03, x: 6, boxShadow: "0px 18px 40px rgba(79, 70, 229, 0.20)" },
  whileTap: { scale: 0.98, x: 0 }
};


  const [displayText, setDisplayText] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const fullText = 'Comfortable Stays Await';



   useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index = (index + 1) % (fullText.length + 1);
      if (index === 0) setDisplayText('');
    }, 150);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hotels.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, hotels.length]);


const MotionLink = motion.create(Link);
  

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
      /* Zig-zag: subtle horizontal movement responsive to width */
    @keyframes zigzag-md {
      0% { transform: translateX(0); }
      50% { transform: translateX(8px); }
      100% { transform: translateX(0); }
    }
    @keyframes zigzag-sm {
      0% { transform: translateX(0); }
      50% { transform: translateX(4px); }
      100% { transform: translateX(0); }
    }
    .zigzag-inline {
      display: inline-block;
      animation: zigzag-md 3s ease-in-out infinite;
    }
    @media (max-width: 768px) {
      .zigzag-inline { animation: zigzag-sm 3s ease-in-out infinite; }
    }

    /* Moving underline across images (infinite) */
    @keyframes move-underline {
      0% { transform: translateX(-10%); }
      50% { transform: translateX(10%); }
      100% { transform: translateX(-10%); }
    }
    .moving-underline {
      background: linear-gradient(90deg, rgba(74,77,208,0.85), rgba(102,126,234,0.8));
      transform: translateX(-10%);
      animation: move-underline 3.8s ease-in-out infinite;
    }

    /* Small accessibility improvement: reduce motion on user preference */
    @media (prefers-reduced-motion: reduce) {
      .zigzag-inline, .moving-underline, .moving-underline, .moving-underline {
        animation: none !important;
      }
    }
      /* Zig-zag: subtle horizontal movement responsive to width */
    @keyframes zigzag-md {
      0% { transform: translateX(0); }
      50% { transform: translateX(8px); }
      100% { transform: translateX(0); }
    }
    @keyframes zigzag-sm {
      0% { transform: translateX(0); }
      50% { transform: translateX(4px); }
      100% { transform: translateX(0); }
    }
    .zigzag-inline {
      display: inline-block;
      animation: zigzag-md 3s ease-in-out infinite;
    }
    @media (max-width: 768px) {
      .zigzag-inline { animation: zigzag-sm 3s ease-in-out infinite; }
    }

    /* Moving underline across images (infinite) */
    @keyframes move-underline {
      0% { transform: translateX(-10%); }
      50% { transform: translateX(10%); }
      100% { transform: translateX(-10%); }
    }
    .moving-underline {
      background: linear-gradient(90deg, rgba(74,77,208,0.85), rgba(102,126,234,0.8));
      transform: translateX(-10%);
      animation: move-underline 3.8s ease-in-out infinite;
    }

    /* Small accessibility improvement: reduce motion on user preference */
    @media (prefers-reduced-motion: reduce) {
      .zigzag-inline, .moving-underline, .moving-underline, .moving-underline {
        animation: none !important;
      }
    }
     
      `}</style>



<div className="absolute inset-0 bg-black/60 z-5"></div>
<section className="relative w-full min-h-96 flex items-center overflow-hidden">
        {/* Background Image with parallax effect */}
         <div className="absolute inset-0 parallax-bg">
          <Image 
            src="/header.png" 
            alt="Luxury Villa" 
            fill
            priority
            className="object-cover transition-opacity duration-1000 ease-out"
          />   
        </div>
        
      
<div className="relative z-10 container mx-auto px-4 md:px-10 lg:px-8 py-28 text-white parallax-content">
<div className="max-w-5xl">
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />
            
            {/* Welcome heading with animation */}
             <h2 className="text-lg sm:text-sm md:text-sm  text-white mb-2 opacity-0 animate-fade-in-up uppercase">
              Welcome to Ghar Basai
            </h2>
            {/* Main heading with staggered animation */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-4 sm:mb-6 leading-tight opacity-0 animate-fade-in-up delay-100">
          
              Discover the World,
              <br className="opacity-0 animate-fade-in-up delay-200" />
              One Journey at a 
              <br className="opacity-0 animate-fade-in-up delay-300" />
              Time.
            </h1>
            
            {/* Description with animation */}
            <p className="text-base sm:text-sm md:text-sm max-w-xl mb-6 sm:mb-10 leading-relaxed opacity-0 animate-fade-in-up delay-400">
              lorem ipsum dolor sit amet consectetur. Ferment nunc proin netus cursus non. Enim porttitor pretium augue elit in tristique. Nisl arcu sagittis habitant suscipit nun fames donec sit. Ut faucibus risus fringilla tristique sit a.
            </p>






{/* Search Form with animation */}
<div className="w-full max-w-6xl mx-auto flex flex-wrap sm:flex-nowrap gap-3 bg-transparent">

  {/* WHERE TO? */}
  <div className="flex items-center bg-white/60 backdrop-blur-sm text-black rounded-full px-3 py-1.5 flex-1 min-w-[200px] hover:bg-white/80 transition-all duration-300">
    <input
      type="text"
      placeholder="Where to?"
      className="bg-transparent outline-none placeholder-black font-semibold text-sm w-full"
    />
    <img src="/location.png" className="h-3.5 w-3.5 ml-2 opacity-90" />
  </div>

  {/* CHECK-IN */}
  <div className="flex items-center bg-white/60 backdrop-blur-sm text-black rounded-full px-3 py-1.5 flex-1 min-w-[160px] hover:bg-white/80 transition-all duration-300">
    <input
      id="checkin"
      type="date"
      className="bg-transparent outline-none placeholder-black font-semibold text-sm w-full appearance-none"
    />
  </div>

  {/* CHECK-OUT */}
  <div className="flex items-center bg-white/60 backdrop-blur-sm text-black rounded-full px-3 py-1.5 flex-1 min-w-[160px] hover:bg-white/80 transition-all duration-300">
    <input
      id="checkout"
      type="date"
      className="bg-transparent outline-none placeholder-black font-semibold text-sm w-full appearance-none"
    />
  </div>

  {/* GUESTS */}
  <div className="flex items-center bg-white/60 backdrop-blur-sm text-black rounded-full px-3 py-1.5 flex-1 min-w-[130px] hover:bg-white/80 transition-all duration-300">
    <input
      type="number"
      placeholder="Guests"
      className="bg-transparent outline-none placeholder-black font-semibold text-sm w-full"
    />
    <img src="/guest.png" className="h-3.5 w-3.5 ml-2 opacity-90" />
  </div>

  {/* SEARCH BUTTON */}
  <button className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold px-5 py-1.5 rounded-full hover:opacity-90 transition text-sm flex-none min-w-[100px]">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
    </svg>
    Search
  </button>

</div>


<br />

<div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
              {/* Text content */}
              <div className="flex-1">
                <p className="text-base sm:text-lg text-white/90 mb-6">
                </p>
                <p className="text-base sm:text-lg text-white/90">
                </p>
              </div>
              
              {/* Video section on the right with animation */}
<div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-md max-w-60 cursor-pointer">

  {/* LEFT TEXT */}
  <div className="flex flex-col flex-1">
    <h5 className="text-sm font-medium text-black leading-tight">
      Watch a Video About Us
    </h5>
  </div>

  {/* THUMBNAIL + PAUSE BUTTON */}
  <div className="relative w-20 h-20 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0">

    {/* Thumbnail */}
    <div className="w-full h-full rounded-xl overflow-hidden border border-gray-300">
      <Image
        src="/videoimg.png"
        alt="Video thumbnail"
        width={96}
        height={96}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Pause Button Centered */}
{/* Play Button Centered With White Border */}
<a
  href="https://www.bing.com/videos/riverview/relatedvideo?q=modern+house+ocean+view+video&mid=7E1DA9E360D374F0A7957E1DA9E360D374F0A795&FORM=VIRE"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute inset-0 flex items-center justify-center"
>
  <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full border-2 border-white flex items-center justify-center bg-white backdrop-blur-sm shadow-md">
    <Image
      src="/play.png"
      alt="Play Button"
      width={10}
      height={10}
      className="opacity-100"
    />
  </div>
</a>
</div>
</div>
</div>
          </div>
        </div>
            <div className="absolute bottom-0 w-full bg-indigo-600/80 text-white py-3 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...destinations, ...destinations].map((place, i) => (
              <span
                key={i}
                className="flex-shrink-0 flex items-center gap-2 px-4 sm:px-6 text-sm sm:text-base md:text-lg font-semibold"
              >
                {place}
                <span className="text-white">❉ </span>
              </span>
            ))}
          </div>
        </div>
      </section>




{/* Hotels comfotable stays await section  */}

<div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 my-8 sm:my-16 rounded-2xl">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 sm:mb-14 gap-6">
        <div className="w-full lg:w-auto">
          <h4 className="text-xs font-semibold text-black uppercase tracking-widest">HOTELS</h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A4DD0] mt-2 min-h-[2.5rem]">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              {displayText}
              <span className="animate-ping">|</span>
            </span>
          </h2>
        </div>

        
   <Link href="/hotel/hotel-details">
  <button className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300 whitespace-nowrap">
    View All Hotels
  </button>
</Link>
      </div>

      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
        >
          {[...hotels, ...hotels, ...hotels].map((hotel, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 transform">
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <img
                    src={hotel.imageUrl}
                    alt={hotel.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 truncate">{hotel.title}</h3>
                  <div className="flex items-center text-gray-500 mb-3 text-sm">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {hotel.location}
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-purple-700 mb-3">{hotel.price}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="flex items-center bg-green-100 px-2 py-1 rounded">
                        <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold text-green-800 text-sm">{hotel.rating}</span>
                      </div>
                      <span className="text-gray-400 text-xs sm:text-sm ml-2">{hotel.reviews}</span>
                    </div>
                    <button className="text-purple-600 font-medium hover:text-purple-800 text-xs sm:text-sm transition-all hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 sm:mt-10">
        <div className="flex space-x-2">
          {hotels.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
</div>





{/* why choose gharbasai section */}


<section className="py-16 bg-[#F7E9FF] text-center overflow-hidden">
  <h3 className="text-sm font-bold text-gray-700 mb-2 opacity-0 animate-[fadeInDown_0.6s_ease-out_forwards]">
    WHY CHOOSE GHAR BASAI
  </h3>
  <h2 className="text-3xl md:text-4xl font-extrabold text-[#5a35d1] mb-4 opacity-0 animate-[fadeInDown_0.6s_ease-out_0.1s_forwards]">
    <span className="inline-block animate-[textJump_0.5s_ease-in-out_0.8s]">We Make Every Journey Exceptional</span>
  </h2>
  <p className="max-w-2xl mx-auto text-black mb-12 opacity-0 animate-[fadeInDown_0.6s_ease-out_0.2s_forwards]">
    Lorem ipsum dolor sit amet consectetur. At lorem ut cursus fringilla eu.
    Accumsan vulputate sit placerat enim praesent sit ultricies dignissim et.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-20">
    {features.map((feature, index) => (
      <div
        key={index}
        className="bg-[#F7E9FF] border border-[#a489f5] rounded-xl shadow-sm p-6 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-[#5a35d1] opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
        style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
      >
        <div className="p-4 mb-4 flex items-center justify-center transition-transform duration-700 hover:rotate-[360deg]">
          <Image
            src={feature.icon}
            alt={feature.title}
            width={45}
            height={45}
            className="object-contain rounded-full"
          />
        </div>
        <h3 className="text-lg font-semibold text-[#5a35d1] mb-2 transition-transform duration-300 hover:scale-110">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {feature.desc}
        </p>
      </div>
    ))}
  </div>
</section>

<style jsx>{`
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
  
  @keyframes textJump {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`}</style>





<br />
<br />



<section className="text-center mb-16">

  {/* ----------- HEADING ----------- */}
  <h4 className="uppercase text-sm tracking-widest font-semibold text-gray-700">
    Popular Destinations
  </h4>

  <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mt-2">
    Discover the World&apos;s Favorite Getaways
  </h2>

  <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
   From the beaches of Goa to the snow peaks of Shillong — explore India&apos;s
   most loved travel destinations
  </p>

  {/* ======================================================
      📱 MOBILE / SMALL DEVICES — SLIDE (NO DOTS)
  ====================================================== */}
  <div className="mt-10 px-3 sm:hidden">
    <div className="flex gap-6 overflow-x-auto pb-4">
      {destination.map((place, index) => (
        <div key={index} className="shrink-0 w-28 text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border mx-auto">
            <Image
              src={place.img}
              alt={place.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mt-2 font-semibold text-gray-800">
            {place.name}
          </h3>
          <p className="text-sm text-gray-500">
            {place.tours} Tours
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* ======================================================
      💻 DESKTOP / LARGE DEVICES — SWIPER + DOTS
  ====================================================== */}
  <div className="hidden sm:block mt-10 px-2">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}   // ✅ DOTS ONLY ON DESKTOP
      autoplay={{ delay: 4000 }}
    >
      {slides.map((group, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {group.map((place, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border mx-auto">
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
                <p className="text-sm text-gray-500">
                  {place.tours} Tours
                </p>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

</section>













<motion.section
  className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* LEFT SIDE */}
  <div>
    <motion.h4
      className="uppercase text-sm font-semibold text-gray-700 mb-3"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      About Us
    </motion.h4>

    <motion.h2
      className="text-3xl md:text-4xl  text-indigo-600 leading-snug mb-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Crafting Unforgettable
      <br /> Travel Experiences for
      <br /> You
    </motion.h2>

    <motion.div
      className="rounded-2xl overflow-hidden shadow-xl h-[480px] bg-gray-200 w-[360px] "
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Image
        src="/about1.png"
        alt="Travel Experience"
        width={360}
        height={450}
        className="object-cover w-full h-full"
      />
    </motion.div>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex flex-col space-y-6">
    <motion.div
      className="rounded-2xl overflow-hidden shadow-xl h-[480px] bg-gray-200 w-[360px]"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <Image
        src="/about2.png"
        alt="Nature Destination"
        width={360}
        height={450}
        className="object-cover w-full h-full"
      />
    </motion.div>

    <motion.p
      className="text-gray-600 leading-relaxed max-w-[450px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
    Lorem ipsum dolor sit amet consectetur. At lorem ut nec cursus fringilla eu. Accumsan vuputate sit placrat enim present ultricies dignissm et. Commodo vulputate luctus quis congue tellus. Elit sit quam semper sit scelerisque nec dictum.
  

  <br />
  <br />
  <br />




    Lorem ipsum dolor sit amet consectetur. At lorem ut nec cursus fringilla eu. Accumsan vuputate sit placrat enim present ultricies dignissm et. Commodo vulputate luctus quis congue tellus. Elit sit quam semper sit scelerisque nec dictum.
    </motion.p>

    {/* SEE MORE BUTTON WITH MOTION */}
<Link
  href="/about"
  className="px-6 py-2 rounded-full text-white font-medium shadow-md 
             bg-gradient-to-r from-[#4A4DD0] to-[#C04CFD] 
             w-fit inline-block
             transition-all duration-300
             hover:scale-105 active:scale-95"
>
  See More
</Link>
  </div>
</motion.section>




  <motion.section
      className="w-full py-16 bg-[#F2E6FF]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP */}
        <motion.p
          className="text-sm font-semibold text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          OFFER
        </motion.p>

        <div className="flex items-center justify-between">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#4A2FA6]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Exclusive Deals For You
          </motion.h2>

          {/* Arrows */}
          <div className="flex gap-3">
            {["←", "→"].map((arrow, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
              >
                {arrow}
              </motion.button>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-2xl overflow-hidden shadow-lg h-[260px] md:h-[300px]"
          >
            <Image
              src="/longstay.png"
              alt="Longstay"
              width={110}
              height={40}
              className="absolute top-6 left-6 z-20 object-contain"
            />

            <Image
              src="/image-about.png"
              alt="Deal Image"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">Avail Up to 55% Off</h3>
              <p className="text-sm mt-1 max-w-[80%]">
                Lorem ipsum dolor sit amet consectetur. Amet nec cursus risus.
              </p>

        <Link
  href="/tour-booking/domestic"
  className="mt-4 inline-block px-6 py-2 bg-[#A240F8] hover:bg-[#8e2add]
             transition-all duration-300
             rounded-full text-sm font-semibold
             hover:scale-105 active:scale-95"
>
  Book Now
</Link>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-2xl overflow-hidden shadow-lg h-[260px] md:h-[300px]"
          >
            <Image
              src="/newlaunch.png"
              alt="Newlaunch"
              width={110}
              height={40}
              className="absolute top-6 left-6 z-20 object-contain"
            />

            <Image
              src="/image-about2.png"
              alt="Deal Image"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">Exclusive 30% Off</h3>
              <p className="text-sm mt-1 max-w-[80%]">
                Lorem ipsum dolor sit amet consectetur. Amet nec cursus risus.
              </p>

         <Link
  href="/tour-booking/domestic"
  className="mt-4 inline-block px-6 py-2 bg-[#A240F8] hover:bg-[#8e2add]
             transition-all duration-300
             rounded-full text-sm font-semibold
             hover:scale-105 active:scale-95"
>
  Book Now
</Link>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>



 <motion.div
      className="w-full bg-white text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="text-center py-12 px-4 max-w-4xl mx-auto">
        <motion.p
          className="uppercase text-sm text-gray-500 tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          BRANDS
        </motion.p>

        <motion.h2
          className="text-3xl font-bold text-indigo-600 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Our Leading Travel Brands
        </motion.h2>

        <motion.p
          className="text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet consectetur. At lorem ut cursus fringilla eu.
          Accumsan vulputate sit placerat enim present sita ultricies dignissim et.
        </motion.p>

        {/* Category buttons */}
        <motion.div
          className="flex justify-center gap-4 mt-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {["Economical", "Prime", "Express"].map((btn, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-white shadow ${
                btn === "Economical"
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-[#C04CFD] hover:bg-purple-500"
              }`}
            >
              {btn}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="relative max-w-7xl mx-auto px-4 py-6">

        {/* Left Arrow */}
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white shadow-lg rounded-full border hover:bg-gray-100 z-10"
        >
          <Image src="/vector.png" alt="Left" width={20} height={20} />
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white shadow-lg rounded-full border hover:bg-gray-100 z-10"
        >
          <Image
            src="/vector.png"
            alt="Right"
            width={20}
            height={20}
            className="rotate-180"
          />
        </motion.button>

        {/* CARD LIST */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hotel.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition"
            >
              <motion.div
                className="w-full h-56 relative rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <h3 className="text-indigo-600 font-semibold mt-4 mb-3 text-[15px]">
                {item.title}
              </h3>

              {/* Features */}
              <ul className="text-sm text-gray-600 space-y-2">
                {item.features.map((f, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <Image src="/arrow.png" alt="tick" width={20} height={20} />
                    <span>{f}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>


 <section className="relative w-full h-[450px] lg:h-[400px] bg-black overflow-visible">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/getappimg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <p className="text-sm font-semibold tracking-wider uppercase text-gray-300">
              GET OUR APP
            </p>
            
            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold leading-tight">
              Smart Travel Starts With Our App
            </h2>
            
            <p className="text-gray-300 text-sm max-w-xl">
              Lorem ipsum dolor sit amet consectetur. At lorem ut cursus fringilla eu. 
              Accumsan volutpat ac et placerat enim praesent sit ultricies dignissim et.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Google Play Button */}
              <a 
                href="#" 
                className="inline-flex items-center gap-3 bg-black border border-white/30 rounded-lg px-6 py-3 hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D7FE"/>
                  <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FFCE00"/>
                  <path d="M3.84 2.15L6.05 2.66L14.54 11.15L6.05 2.66L3.84 2.15Z" fill="#00D863"/>
                  <path d="M16.81 8.88L19.78 10.59C20.54 11.03 20.54 12.12 19.78 12.56L16.81 14.27L14.54 12L16.81 8.88Z" fill="#FF4131"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-300">GET IT ON</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
              </a>

              {/* App Store Button */}
              <a 
                href="#" 
                className="inline-flex items-center gap-3 bg-black border border-white/30 rounded-lg px-6 py-3 hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-300">Download on the</p>
                  <p className="text-lg font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockup (Half Bottom Inside/Half Bottom Outside) */}
          <div className="relative flex justify-center lg:justify-end h-full">
            <div className="absolute bottom-0 right-[125px] sm:right-[150px] md:right-[200px] lg:right-0 translate-y-1/2 w-full max-w-[250px] sm:max-w-[280px] md:max-w-xs lg:max-w-md">
              {/* Glow Effect Behind Phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
              
              {/* Phone Image Container with 3D Tilt */}
              <div className="relative z-20 transform rotate-3 sm:rotate-4 md:rotate-5 lg:rotate-6 transition-transform duration-500 hover:rotate-2 lg:hover:rotate-3">
                <img
                  src="/phimg.png"
                  alt="Mobile App Preview"
                  className="w-full h-auto drop-shadow-[0_35px_60px_rgba(139,92,246,0.4)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


<br />
<br />

<motion.section
      className="py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.p
        className="text-sm text-gray-500 font-semibold mb-2 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        TESTIMONIAL
      </motion.p>

      <motion.h2
        className="text-3xl font-bold text-purple-700 mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Kind Words from Our Community
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-purple-200 rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <h3 className="font-semibold text-lg mb-2">Excellent Company</h3>

            <p className="text-sm text-gray-600 mb-4">
              {testimonial.review}
            </p>

            {/* Stars */}
            <div className="flex mb-4">
              {Array(testimonial.stars)
                .fill(0)
                .map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400 text-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.05, type: "spring" }}
                  >
                    ★
                  </motion.span>
                ))}
            </div>

            {/* User */}
            <div className="flex gap-4 items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/man1.png"
                  alt={testimonial.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
              </motion.div>

              <div className="text-left">
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>






    </>
  );
}