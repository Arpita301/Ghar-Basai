"use client";

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion'
import { FaCheckCircle, FaPhoneAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaHotel, FaBed, FaHiking } from 'react-icons/fa';


const values = [
  'Customer-first approach',
  'Sustainability & responsible travel',
  'Cultural authenticity',
  'Transparency and trust',
]

const destinations = [
  { name: 'Darjeeling', img: 'https://plus.unsplash.com/premium_photo-1661878115335-a1f2788b2f43?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Goa', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60' },
  { name: 'Kashmir', img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=60' },
  { name: 'Udaipur', img: 'https://plus.unsplash.com/premium_photo-1697729844084-c03db2377161?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  { name: 'Jaypur', img:'https://plus.unsplash.com/premium_photo-1661963839850-b4be117aff11?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  { name :"Mussorie", img:'https://images.unsplash.com/photo-1571194625029-09c8bc69ff13?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  { name: "Ganktok", img:'https://plus.unsplash.com/premium_photo-1750864964327-2e076457bffb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  { name: "Keral", img:'https://plus.unsplash.com/premium_photo-1697729432049-caca66a1dab6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
]

const team = [
  { 
    name: 'Riya Sharma', 
    role: 'Co-Founder & CEO', 
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60' 
  },
  { 
    name: 'Amit Verma', 
    role: 'Head of Operations', 
    img: 'https://plus.unsplash.com/premium_photo-1661311924569-c0d94f1edd20?auto=format&fit=crop&w=500&q=80' 
  },
  { 
    name: 'Sayan Gupta', 
    role: 'Product & Design', 
    img: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?auto=format&fit=crop&w=800&q=60' 
  },
];

const testimonials = [
  { name: 'S. Mukherjee', text: 'Ghar Basai planned our family trip to Darjeeling — flawless hotels and an unforgettable tea-estate walk.' },
  { name: 'Priya R.', text: 'Excellent 24/7 support. The local guide they arranged showed us hidden gems.' },
  { name: 'Rahul K.', text: 'Seamless booking and very transparent pricing. Highly recommend.' },
]

const btsImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  "https://plus.unsplash.com/premium_photo-1697730304380-2ed1c7aea373?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1629723248038-8b3bc1ecce29?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1627897225911-648f76d3d6a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1698729697711-ff646fb310b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Updated hero images with mountain lodges
const heroImages = [
  "https://plus.unsplash.com/premium_photo-1675315343167-0414307c9182?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "https://plus.unsplash.com/premium_photo-1697730104948-43575659bf0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];



const services = [
  {
    title: "Luxury Hotels",
    desc: "Experience comfort and elegance in our top-tier hotels.",
    icon: <FaHotel size={24} />,  // size can be adjusted
    link: "/hotel/luxury"
  },
  {
    title: "Budget Stays",
    desc: "Affordable yet comfortable accommodations across India.",
    icon: <FaBed size={24} />,
    link: "/hotel/budget"
  },
  {
    title: "Adventure Trips",
    desc: "Explore thrilling experiences and outdoor adventures at Gallery.",
    icon: <FaHiking size={24} />,
    link: "/gallery"
  }
];


const Page = () => {
  const carouselRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const prevSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? heroImages.length - 1 : prev - 1
      );
      setAnimate(true);
    }, 300);
  };

  const nextSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
      setAnimate(true);
    }, 300);
  };


    useEffect(() => {
    setAnimate(true);
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scroll = (dir = 'left') => {
    if (!carouselRef.current) return
    const el = carouselRef.current
    const offset = el.clientWidth * 0.8
    el.scrollBy({ left: dir === 'left' ? -offset : offset, behavior: 'smooth' })
  }
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* HERO SECTION WITH SLIDING IMAGES */}
      
{/* HERO SECTION WITH SLIDING IMAGES */}
<section id="hero" className="w-full h-screen flex items-center justify-center relative overflow-hidden">
  <Image
    src={heroImages[currentIndex]}
    alt={`Slide ${currentIndex + 1}`}
    fill
    className="object-cover transition-opacity duration-1000 ease-in-out"
    priority
  />

  {/* Content */}
  <div
    className={`relative z-10 flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 ease-out ${
      animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`}
  >
    {/* Decorative dots */}
    <div className="flex space-x-2 mb-6">
      <div className="w-2 h-2 bg-teal-300 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
      <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
      <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></div>
    </div>

    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-blue-100 to-purple-200">
        Ghar Basai
      </span>
    </h1>

    <div className="w-24 h-1 bg-gradient-to-r from-teal-300 to-blue-300 mb-6 rounded-full shadow-md"></div>

    <p className="max-w-2xl text-lg md:text-xl mb-8 font-medium text-white leading-relaxed drop-shadow-md backdrop-blur-sm bg-black/20 p-4 rounded-lg">
      At <span className="font-semibold text-blue-200">Ghar Basai</span>, we bring you closer to the serenity of
      nature and luxury living — offering handpicked hotels and bespoke travel experiences across India's most
      stunning destinations.
    </p>

    {/* Scroll Button */}


<Link
  href="/tour-booking/domestic"
  scroll={false}
  className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-white/30"
>
  Explore Destinations
</Link>

  </div>

  {/* Indicator dots */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
    {heroImages.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          currentIndex === index ? "bg-white" : "bg-white/50"
        }`}
      />
    ))}
  </div>
</section>




      {/* ABOUT / STORY */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Who we are</h2>
            <p className="text-gray-700 leading-relaxed">Founded by travel lovers with deep roots in India's diverse regions, Ghar Basai started as a small idea — to connect travellers to authentic, comfortable stays and curated experiences. What inspired us was the joy of discovery: a sunrise above the hills, a quiet homestay with incredible food, and the warm hospitality of local hosts. Today we partner with trusted hotels, local guides, and responsible operators to make those moments accessible to you.</p>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <Image 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="mountain lodge interior" 
              width={1000} 
              height={700} 
              className="object-cover w-full h-64 md:h-80" 
            />
          </motion.div>
        </div>
      </section>

      {/* MISSION / VISION */}


  <section className="bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12 lg:mb-16"
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Our Guiding Principles</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">Discover what drives us to deliver exceptional travel experiences</p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
      {/* Mission Card */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="group relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-30 blur transition-all duration-300 rounded-2xl"></div>
        <div className="relative p-8 h-full rounded-2xl bg-gradient-to-br from-indigo-50 to-white shadow-lg border border-indigo-100 flex flex-col">
          <div className="mb-6 p-3 w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h3>
          <p className="text-gray-600 flex-grow">Our mission is to make premium travel and accommodation accessible, hassle-free, and unforgettable for every traveler.</p>
          <div className="mt-6 pt-4 border-t border-indigo-100 flex items-center">
            {/* <span className="text-indigo-500 text-sm font-medium">Learn more</span> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg> */}
          </div>
        </div>
      </motion.div>

      {/* Vision Card */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="group relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-30 blur transition-all duration-300 rounded-2xl"></div>
        <div className="relative p-8 h-full rounded-2xl bg-gradient-to-br from-amber-50 to-white shadow-lg border border-amber-100 flex flex-col">
          <div className="mb-6 p-3 w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h3>
          <p className="text-gray-600 flex-grow">To become India's most trusted travel partner by offering sustainable, personalized, and luxurious travel experiences.</p>
          <div className="mt-6 pt-4 border-t border-amber-100 flex items-center">
            {/* <span className="text-amber-500 text-sm font-medium">Learn more</span> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg> */}
          </div>
        </div>
      </motion.div>

      {/* Core Values Card */}
      <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="group relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-30 blur transition-all duration-300 rounded-2xl"></div>
        <div className="relative p-8 h-full rounded-2xl bg-gradient-to-br from-emerald-50 to-white shadow-lg border border-emerald-100 flex flex-col">
          <div className="mb-6 p-3 w-14 h-14 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Values</h3>
          <ul className="space-y-3 text-gray-600 flex-grow">
            {values.map((v) => (
              <li key={v} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-emerald-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{v}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center">
            {/* <span className="text-emerald-500 text-sm font-medium">Learn more</span> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg> */}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* SERVICES */}

  <section className="container mx-auto px-4 md:px-6 py-16 lg:py-20">
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-50px" }}
    className="text-center mb-12 lg:mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
      Our Services
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Professional solutions tailored to your specific needs and requirements
    </p>
  </motion.div>
  

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {services.map((s, i) => (
    <motion.article 
      key={s.title}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="p-6 lg:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white group hover:border-indigo-100 relative overflow-hidden"
    >
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-20 h-20 -translate-y-8 translate-x-8 bg-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon container */}
      <div className="relative mb-5 p-3 w-14 h-14 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-300">
        {s.icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-indigo-700 transition-colors">{s.title}</h3>
      <p className="text-gray-600 mb-5 leading-relaxed">{s.desc}</p>
      <a 
        href={s.link} 
        className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2 transition-colors"
        aria-label={`Learn more about ${s.title}`}
      >
        Learn more
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 group-hover:translate-x-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </motion.article>
  ))}
</div>


</section>

<section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 md:py-24 overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-blue-50/30"></div>
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
  <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-12 md:mb-16"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Why Choose <span className="text-blue-600">Ghar Basai</span>?
      </h3>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Discover the difference of personalized travel experiences crafted just for you
      </p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {/* Card 1 */}
      <motion.div 
        initial={{ y: 40, opacity: 0, scale: 0.95 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -5 }}
        className="group relative p-8 rounded-2xl bg-white shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-blue-50"
      >
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white shadow-lg group-hover:bg-blue-600 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>
        <h4 className="font-bold text-xl text-gray-800 mt-6 mb-4">Exclusive Partnerships</h4>
        <p className="text-gray-600">We work with trusted hotels and local operators to secure exclusive rates and experiences.</p>
        <div className="mt-6 w-12 h-1 bg-blue-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
      </motion.div>
      
      {/* Card 2 */}
      <motion.div 
        initial={{ y: 40, opacity: 0, scale: 0.95 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -5 }}
        className="group relative p-8 rounded-2xl bg-white shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-blue-50"
      >
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-lg group-hover:bg-green-600 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
        </div>
        <h4 className="font-bold text-xl text-gray-800 mt-6 mb-4">24/7 Support</h4>
        <p className="text-gray-600">Real people available to help at every step — pre-trip, during travel, and post-trip.</p>
        <div className="mt-6 w-12 h-1 bg-green-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
      </motion.div>
      
      {/* Card 3 */}
      <motion.div 
        initial={{ y: 40, opacity: 0, scale: 0.95 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -5 }}
        className="group relative p-8 rounded-2xl bg-white shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-blue-50"
      >
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-100 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-purple-500 text-white shadow-lg group-hover:bg-purple-600 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>
        <h4 className="font-bold text-xl text-gray-800 mt-6 mb-4">Customised Plans</h4>
        <p className="text-gray-600">Personalised itineraries built around your priorities — relaxation, adventure, heritage, or romance.</p>
        <div className="mt-6 w-12 h-1 bg-purple-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
      </motion.div>
    </div>
    
    {/* Additional CTA */}
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mt-12"
    >
 <Link href="/service">
  <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 transform hover:-translate-y-0.5">
    Explore Our Services
  </button>
</Link>
    </motion.div>
  </div>
</section>


      {/* DESTINATIONS */}
      <section className="container mx-auto px-6 py-16">
        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-6 text-center"
        >
          Our Destinations
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((d, i) => (
            <motion.div 
              key={d.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow cursor-pointer hover:scale-105 transform transition duration-300"
            >
              <div className="relative w-full h-40">
                <Image src={d.img} alt={d.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white font-semibold">Explore {d.name}</span>
                </div>
              </div>
              <div className="p-3 bg-white">
                <h5 className="font-semibold">{d.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
 <section className="bg-gradient-to-br from-gray-50 to-indigo-100 py-16">
  <div className="container mx-auto px-6">
    {/* Title */}
    <motion.h3
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-700"
    >
      Meet the Team
    </motion.h3>

    {/* Team Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {team.map((m, i) => (
        <motion.div
          key={m.name}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          {/* Image */}
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-4 border-indigo-100 shadow-md">
            <Image
              src={m.img}
              alt={m.name}
              width={200}
              height={200}
              className="object-cover object-center"
              style={{ aspectRatio: "1 / 1" }}  // ✅ Keeps consistent circle crop
            />
          </div>

          {/* Name & Role */}
          <h4 className="font-semibold text-lg text-gray-800">{m.name}</h4>
          <p className="text-sm text-gray-500 mb-4">{m.role}</p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            {m.linkedin && (
              <a href={m.linkedin} className="text-blue-600 hover:text-blue-800 text-xl">
                <FaLinkedin />
              </a>
            )}
            {m.twitter && (
              <a href={m.twitter} className="text-sky-500 hover:text-sky-700 text-xl">
                <FaTwitter />
              </a>
            )}
            {m.github && (
              <a href={m.github} className="text-gray-800 hover:text-gray-900 text-xl">
                <FaGithub />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* TESTIMONIALS */}
      <section className="container mx-auto px-6 py-16">
        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-6 text-center"
        >
          What Guests Say
        </motion.h3>
        <div className="relative">
          <div className="flex gap-4 items-center justify-end mb-4">
            <button onClick={() => scroll('left')} aria-label="Scroll left" className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition">
              <FaChevronLeft />
            </button>
            <button onClick={() => scroll('right')} aria-label="Scroll right" className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition">
              <FaChevronRight />
            </button>
          </div>

          <div ref={carouselRef} className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 hide-scrollbar">
            {testimonials.map((t, i) => (
              <motion.article 
                key={i}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[280px] md:min-w-[420px] snap-start p-6 bg-white rounded-xl shadow"
              >
                <p className="text-gray-700">"{t.text}"</p>
                <p className="mt-4 font-semibold">— {t.name}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOS / BTS */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="container mx-auto px-6">
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-center"
          >
            Behind the Scenes
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {btsImages.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="h-36 rounded-lg overflow-hidden shadow hover:scale-105 transform transition duration-300 relative"
              >
                <Image src={img} alt={`bts-${i}`} fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-indigo-600 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-xl font-bold">Ready to plan your next escape?</h4>
            <p className="mt-2">Book a free consultation with our travel experts or start building your custom itinerary.</p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/consultant" className="inline-flex items-center gap-3 bg-white text-indigo-600 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">
              <FaPhoneAlt /> Book a Free Consultation
            </Link>
            <Link href="/gallery" className="inline-flex items-center gap-3 border border-white/30 bg-white/10 px-5 py-3 rounded-lg hover:bg-white/20 transition">
              Plan My Trip
            </Link>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}

export default Page