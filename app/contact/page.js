"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    adults: "",
    children: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = () => {
  //   console.log("Form submitted:", formData);
  //   alert("Form submitted! Check console for data.");
  // };
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
};

  
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

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
<header
  className="
    w-full 
    min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh]
    bg-cover bg-center bg-no-repeat
    flex items-center justify-center
    text-white
    overflow-hidden
  "
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/hoteldetailspage.png')",
  }}
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="
      text-center
      px-4 sm:px-6 lg:px-8
      max-w-4xl
    "
  >
    <h1
      className="
        font-bold drop-shadow-xl
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        leading-tight
      "
    >
      Contact Us
    </h1>
  </motion.div>
</header>


      {/* CONTACT SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT SIDE – INFO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-gray-600 font-semibold tracking-wide text-sm">
            GET TO KNOW US
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4DD0] mt-2 leading-snug">
            {"Let's Talk With Our Expert Travel"}<br />Guides
          </h2>

          <p className="text-gray-600 mt-4 max-w-lg">
            Lorem ipsum dolor sit amet consectetur. A laoreet bibendum lacus tempor
            et urna odio viverra risus.
          </p>

          {/* INFO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

            {/* CARD TEMPLATE WITH ANIMATION */}
            {[
              { icon: "/ph.png", title: "Phone Number", text: "+91 98765 43210" },
              { icon: "/email.png", title: "Email Address", text: "info@gharbasai.com" },
              { icon: "/office.png", title: "Office Address", text: "1234 Road, Info, Example" },
              { icon: "/hour.png", title: "Contactable Hours", text: "Mon–Sun • 9AM–10PM" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 bg-[#F0F0FF] border border-[#C2C2FF] p-4 rounded-xl cursor-pointer"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.25 }}
              >
                <motion.img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                <div>
                  <p className="font-semibold text-gray-700">{item.title}</p>
                  <p className="text-[#4A4DD0] text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <p className="mt-8 font-semibold text-gray-700">Follow Us On:</p>

          <div className="flex items-center gap-4 mt-2">
            {["/facebook.png", "/instagram.png", "/linkedin.png"].map((icon, i) => (
              <motion.img
                key={i}
                src={icon}
                className="w-8 h-8 cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.25 }}
              />
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE – FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-[#F1EFFF] border border-[#D5CFFB] p-8 rounded-2xl shadow-md">

            <h3 className="text-[#4A4DD0] text-3xl font-semibold">
              Looking for any help?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

              {/* INPUT COMPONENT */}
              {[
                { name: "firstName", placeholder: "First Name*" },
                { name: "lastName", placeholder: "Last Name*" },
                { name: "email", placeholder: "Email Address*" },
                { name: "phone", placeholder: "Phone Number*" }
              ].map((input, i) => (
                <motion.input
                  key={i}
                  type="text"
                  name={input.name}
                  placeholder={input.placeholder}
                  value={formData[input.name]}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border border-[#CFC8FF] bg-white focus:border-[#4A4DD0] outline-none"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              ))}

              {/* SELECTS */}
              <select
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-[#CFC8FF] bg-white focus:border-[#4A4DD0]"
              >
                <option value="">Number of Adults*</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>

              <select
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-[#CFC8FF] bg-white focus:border-[#4A4DD0]"
              >
                <option value="">Number of Children</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>

              {/* MESSAGE BOX */}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="col-span-1 md:col-span-2 w-full p-3 rounded-md border border-[#CFC8FF] bg-white h-24 resize-none focus:border-[#4A4DD0]"
              ></textarea>

            </div>

            {/* BUTTON */}
            <motion.button type="submit"
              onClick={handleSubmit}
              className="w-full mt-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#4A4DD0] to-[#C04CFD]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Check Availability
            </motion.button>

          </div>
        </motion.div>
      </section>
      
<section
  className="
    relative w-full
    min-h-[300px] sm:min-h-[350px] lg:h-[300px]
    bg-black
    overflow-hidden lg:overflow-visible
  "
>
  {/* Background Image + Overlay */}
  <div className="absolute inset-0">
    <Image
      src="/getappimg.png"
      alt="Background"
      className="w-full h-full object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
  </div>

  {/* Content Container */}
  <div className="relative z-10 container mx-auto px-4 min-h-full flex items-center py-12 lg:py-0">
    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">

      {/* LEFT CONTENT */}
      <div className="text-white space-y-6">
        <p className="text-sm font-semibold tracking-wider uppercase text-gray-300">
          GET OUR APP
        </p>

        <h2 className="text-3xl sm:text-3xl lg:text-3xl font-bold leading-tight">
          Smart Travel Starts With Our App
        </h2>

        <p className="text-gray-300 text-sm max-w-xl">
          Lorem ipsum dolor sit amet consectetur. At lorem ut cursus fringilla eu.
          Accumsan volutpat ac et placerat enim praesent sit ultricies dignissim et.
        </p>

        {/* APP BUTTONS */}
        <div className="flex flex-wrap gap-4 pt-4">

          {/* Google Play */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black border border-white/30
              rounded-lg px-6 py-3 hover:bg-white/10 transition"
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

          {/* App Store */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black border border-white/30
              rounded-lg px-6 py-3 hover:bg-white/10 transition"
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

      {/* RIGHT CONTENT */}
      <div className="relative flex justify-center lg:justify-end h-full mt-10 lg:mt-0">

        {/* MOBILE IMAGE */}
        <div className="lg:hidden w-full max-w-[240px] mx-auto">
          <Image
            src="/phimg.png"
            alt="App Preview"
            className="w-full h-auto drop-shadow-xl"
          />
        </div>

        {/* DESKTOP IMAGE */}
        <div className="hidden lg:block absolute bottom-0 right-0 translate-y-1/2 max-w-md">
          <div className="absolute inset-0 bg-purple-600/30 rounded-full blur-3xl" />
          <Image
            src="/phimg.png"
            alt="App Preview"
            className="relative z-10 rotate-6 drop-shadow-[0_35px_60px_rgba(139,92,246,0.4)]"
          />
        </div>
      </div>

    </div>
  </div>
</section>


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
    </div>
  );
}
