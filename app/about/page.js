"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import React, { useState, useEffect, useRef } from 'react';

export default function AboutPage() {
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
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef(null);
 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      {/* TOP HEADER SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-[70vh] md:h-[80vh] relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/aboutimg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative text-white text-5xl md:text-6xl font-bold tracking-wide"
        >
          About Us
        </motion.h1>
      </motion.section>

      {/* SECOND SECTION */}
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
            className="text-3xl md:text-4xl text-indigo-600 leading-snug mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Crafting Unforgettable
            <br /> Travel Experiences for
            <br /> You
          </motion.h2>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-xl h-[480px] bg-gray-200 w-[360px]"
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
            Lorem ipsum dolor sit amet consectetur. At lorem ut nec cursus
            fringilla eu. Accumsan vuputate sit placrat enim present ultricies
            dignissm et. Commodo vulputate luctus quis congue tellus. Elit sit
            quam semper sit scelerisque nec dictum.

            <br />
            <br />
            <br />

            Lorem ipsum dolor sit amet consectetur. At lorem ut nec cursus
            fringilla eu. Accumsan vuputate sit placrat enim present ultricies
            dignissm et. Commodo vulputate luctus quis congue tellus. Elit sit
            quam semper sit scelerisque nec dictum.
          </motion.p>

          <motion.button
            className="px-6 py-2 rounded-full text-white font-medium shadow-md bg-gradient-to-r from-[#4A4DD0] to-[#C04CFD] w-fit"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            See More
          </motion.button>
        </div>
      </motion.section>

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
      

    <section
      ref={sectionRef}
      className="relative py-16 px-4 md:px-8 lg:px-20 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Left - Title */}
          <motion.div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-xs font-semibold text-gray-600 tracking-widest uppercase mb-3">
              OUR STORY
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 leading-tight">
              Every Journey Has<br />a Beginning
            </h2>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            className={`flex items-center transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-sm text-gray-600 leading-relaxed">
       Lorem ipsum dolor sit amet consectetur. Sapien ut ipsum turpis sed facilisiq nulla diam neque. Mi dolor ame gravida eget mauris quis ursu morbi turpis eu quis vestibulum hendrerit viverra. Netus elit quis egestas idw vestibulumw turpis. Nisi lectus sed ultrices amet varius consequat. Vulputate lacus proiny scelerisque qruo adipiscing fames. Pellentesque at porttitor risus maecen  varius euismod. Nisi faucibus diam fam vestibulum elit venenatis tempor. Sed quisque nulla bibendum mauris. Netus elit quis egestas id vestibulu turpis.
            </p>
          </motion.div>
        </div>

        {/* Images & Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Image 1 */}
          <motion.div
            className={`lg:col-span-1 transform transition-all duration-1000 delay-300 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl h-full">
              <img
                src="/aboutimg1.png"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[400px]"
              />
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className={`lg:col-span-1 space-y-4 transform transition-all duration-1000 delay-700 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl">
              <img
                src="/aboutimg2.png"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Image 3 + Quote */}
          <motion.div
            className={`lg:col-span-1 space-y-4 transform transition-all duration-1000 delay-700 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl">
              <img
                src="/aboutimg3.png"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Quote */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100">
              <p className="text-sm text-gray-700 leading-relaxed italic">
                "From passionate travelers to trusted guides, <span className="font-semibold text-blue-600">our story</span> is about meaningful journeys,connecting people with places, and turning travel dreams into beautiful realities."
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blob Animation */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 10s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>



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
<br />
<section className="py-16 px-4 ">
  <p className="text-sm text-gray-500 font-semibold mb-2 text-center">TESTIMONIAL</p>
  <h2 className="text-3xl font-bold text-purple-700 mb-10 text-center">
    Kind Words from Our Community
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="border border-purple-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
      >
        <h3 className="font-semibold text-lg mb-2">Excellent Company</h3>
        <p className="text-sm text-gray-600 mb-4">{testimonial.review}</p>
        <div className="flex  mb-4">
          {Array(testimonial.stars)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">★</span>
            ))}
        </div>
        <div className="flex gap-4">
          {/* Display the image */}

<Image
  src="/man1.png"
  alt={testimonial.name}
  width={36}
  height={36}
  className="rounded-full object-cover"
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
