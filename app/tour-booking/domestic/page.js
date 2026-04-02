"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion"; // ✅ FIXED
import Link from "next/link";


const Page = () => {
  const MotionLink = motion(Link);
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "Nibh sed est lectus platea placerat gravida dapibus vulputate amet?"
    },
    {
      question: "Nibh sed est lectus platea placerat gravida dapibus vulputate amet?"
    },
    {
      question: "Nibh sed est lectus platea placerat gravida dapibus vulputate amet?"
    },
    {
      question: "Nibh sed est lectus platea placerat gravida dapibus vulputate amet?"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


    const reviews = {
    average: 4.5,
    total: 25,
    breakdown: [
      { label: 'Excellent', count: 20 },
      { label: 'Very Good', count: 5 },
      { label: 'Average', count: 0 },
      { label: 'Poor', count: 0 },
      { label: 'Terrible', count: 0 }
    ]
  };
  
    const comments = [
    {
      author: 'Admin',
      date: 'June 20, 2025',
      rating: 5,
      title: 'It was a nice experience....',
      image: "/admin.png", 
      content: 'Lorem ipsum dolor sit amet consectetur. Sapien ut ipsum turpis sed facilisis nulla diam neque. Mi dolor amet gravida eget mauris quis urna morbi turpis quis. Vestibulum hendrerit viverra. Netus elit quis egestas et vestibulumw turpis. Nisi lectus sed ultrices amet varius consequat. Vulputate lacus promy scelerisque adipis fames. Pellentesque at porttitor mus moreon varius vulmsod.'
    }
  ];

const tours = [
  {
    title: "Gangtok & Darjeeling",
    package: "Package - (7Days - 6Nights)",
    price: "Starts ₹8,499 per person",
    img: "/gangtok.png",
  },
  {
    title: "Agra & Delhi",
    package: "Package - (10Days - 10Nights)",
    price: "Starts ₹9,999 per person",
    img: "/agra.png",
  },
  {
    title: "Banaras",
    package: "Package - (7Days - 6Nights)",
    price: "Starts ₹8,499 per person",
    img: "/banaras.png",
  },
  {
    title: "Kerala",
    package: "Package - (15Days - 16Nights)",
    price: "Starts ₹24,499 per person",
    img: "/kerala.png",
  },
]


const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};


  const [activeTab, setActiveTab] = useState('select');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    title: '',
    comment: '',
    rating: 0,
    saveInfo: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRatingClick = (newRating) => {
    setFormData(prev => ({ ...prev, rating: newRating }));
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your review!');
    setFormData({
      fullName: '',
      email: '',
      title: '',
      comment: '',
      rating: 0,
      saveInfo: false
    });
    setRating(0);
  };
  const renderStars = (count, interactive = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => interactive && handleRatingClick(star)}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            className={`${
              star <= (interactive ? (hoverRating || count) : count) 
                ? 'text-yellow-400' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-300' : ''} text-xl`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };
  return (
    <div>
      <header
        className="w-full h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/hoteldetailspage.png')",
        }}
      >
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl drop-shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Gangtok & Darjeeling Tour
          </motion.h1>
        </motion.div>
      </header>
      <section className="w-full max-w-6xl mx-auto mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
                {/* LEFT BIG IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="md:col-span-2 w-full h-[350px] overflow-hidden rounded-xl shadow-md"
                >
                  <motion.img
                    src="/sceen1.png"
                    alt="Main Hotel"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
      
                {/* RIGHT SMALL IMAGES GRID */}
                <div className="grid grid-cols-2 gap-4">
      
                  {/* Small Img 1 */}
                  <motion.img
                    src="/sceen2.png"
                    alt="Room"
                    className="w-full h-[160px] object-cover rounded-xl shadow-md"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
      
                  {/* Small Img 2 */}
                  <motion.img
                    src="/sceen3.png"
                    alt="Bathroom"
                    className="w-full h-[160px] object-cover rounded-xl shadow-md"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
      
                  {/* Small Img 3 */}
                  <motion.img
                    src="/sceen4.png"
                    alt="Sofa Area"
                    className="w-full h-[160px] object-cover rounded-xl shadow-md"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
      
                  {/* +10 Photos Block */}
                  <motion.div
                    className="relative w-full h-[160px] rounded-xl overflow-hidden shadow-md"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <motion.img
                      src="/sceen5.png"
                      className="w-full h-full object-cover"
                      alt="More Photos"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
      
                  </motion.div>
      
                </div>
              </div>
            </section>

{/* ===================== OVERVIEW + SIDEBAR SECTION ===================== */}
{/* ===================== OVERVIEW + ITINERARY + SIDEBAR ===================== */}
<section className="w-full max-w-6xl mx-auto mt-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">

  {/* ---------------- LEFT CONTENT ---------------- */}
  <div className="lg:col-span-2">

    {/* -------- OVERVIEW -------- */}
    <h2 className="text-1xl font-semibold text-[#4A4DD0] mb-4">Overview</h2>

    <p className="text-gray-700 leading-relaxed mb-3">
      Lorem ipsum dolor sit amet consectetur. A laoreet bibendum lacus tempor ac urna odio viverra risus.
      Tellus viverra senectus quis eget sem aliquet. Morbi eleifend pellentesque porttitor enim nulla nisl.
      Gravida lorem egestas in et. Ut eget amet risus posuere sollicitudin.
    </p>

  {/* -------- OVERVIEW BULLET POINTS (6 ITEMS, 2 COLUMNS) -------- */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-gray-700">

  {/* LEFT COLUMN (3 bullets) */}
  <ul className="space-y-4">
    <li className="flex items-start gap-3">
      <img src="/arrow.png" alt="" className="w-4 h-4 mt-1" />
      <span>A laoreet bibendum lacus tempor ac urna odio viverra risus.</span>
    </li>

    <li className="flex items-start gap-3">
      <img src="/arrow.png" alt="" className="w-4 h-4 mt-1" />
      <span>Morbi eleifend pellentesque porttitor enim nulla nisl.</span>
    </li>

    <li className="flex items-start gap-3">
      <img src="/arrow.png" alt="" className="w-4 h-4 mt-1" />
      <span>Scelerisque praesent id id quis varius dui sed tellus maecenas.</span>
    </li>
  </ul>

  {/* RIGHT COLUMN (3 bullets) */}
  <ul className="space-y-4">
    <li className="flex items-start gap-3">
      <img src="/arrow.png" alt="" className="w-4 h-4 mt-1" />
      <span>Ut eget amet risus posuere sollicitudin faucibus tortor.</span>
    </li>

    <li className="flex items-start gap-3">
      <img src="/arrow.png" alt="" className="w-4 h-4 mt-1" />
      <span>Velit sollicitudin lectus vitae sed ullamcorper mauris.</span>
    </li>

    <li className="flex items-start gap-3">
      <img src="/arrow.png" alt="" className="w-4 h-4 mt-1" />
      <span>Sed sed varius est id quis varius dui sed tellus elit.</span>
    </li>
  </ul>

</div>

<br />
{/* -------- ITINERARY -------- */}
<h2 className="text-3xl font-semibold text-[#4A4DD0] mb-8">Itinerary</h2>

<div className="relative pb-10">

  {/* DAY BLOCKS WITH INDIVIDUAL DOTTED LINES */}
  {Array.from({ length: 7 }).map((_, i) => {
    const day = i + 1;
    const isLast = i === 6; // last item (index 6)

    return (
      <div key={day} className="relative mb-10 pl-20">

        {/* ICON CIRCLE */}
        <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#4A4DD0] shadow-md flex items-center justify-center">
          <img src="/location-img.png" className="w-12 h-12" />
        </div>

        {/* DOTTED LINE ONLY IF NOT LAST DAY */}
        {!isLast && (
          <div className="absolute left-6 top-12 bottom-[-40px] border-l-2 border-dotted border-[#4A4DD0]/50"></div>
        )}

        <h3 className="font-semibold text-lg mb-1">
          Day {String(day).padStart(2, "0")} - Facilisis odio ipsum senectus
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. A laoreet bibendum lacus tempor ac urna odio viverra risus.
        </p>
      </div>
    );
  })}
</div>


  </div>

  {/* ---------------- RIGHT SIDEBAR FORM ---------------- */}
  <div className="w-full">
  <div className="bg-white shadow-xl rounded-xl p-6 border border-gray-200 w-full max-w-sm">

    {/* TITLE */}
    <h3 className="text-xl font-semibold text-[#4A4DD0] mb-4">
      Book This Tour
    </h3>

    {/* FORM FIELDS */}
    <div className="flex flex-col space-y-3">

      <input
        type="text"
        placeholder="First Name*"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-[#4A4DD0]"
      />

      <input
        type="text"
        placeholder="Last Name*"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700"
      />

      <input
        type="email"
        placeholder="Email Address*"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700"
      />

      <input
        type="text"
        placeholder="Phone Number*"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700"
      />

      <input
        type="text"
        placeholder="dd/mm/yyyy*"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700"
      />
     <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700">
     <option >Number Of Adults*</option>
     <option value="1">1 Adult</option>
     <option value="2">2 Adults</option>
     <option value="3">3 Adults</option>
     <option value="4">4 Adults</option>
     <option value="5">5 Adults</option>
     <option value="6">6 Adults</option>
     <option value="7">7 Adults</option>
     <option value="8">8 Adults</option>
     </select>

     <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700">
     <option>Number Of Children</option>
     <option value="0">0 Children</option>
     <option value="1">1 Child</option>
     <option value="2">2 Children</option>
     <option value="3">3 Children</option>
     <option value="4">4 Children</option>
     <option value="5">5 Children</option>
</select>


      <textarea
        placeholder="Message"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 h-20"
      ></textarea>

      {/* BUTTON */}
<button
  className="w-full py-3 text-white font-semibold 
             rounded-full
             bg-gradient-to-r from-[#4A4DD0] to-[#C04CFD]
             shadow-md hover:opacity-90 transition">
  Check Availability
</button>


    </div>
  </div>
</div>
</section>
<div className="w-full max-w-4xl mx-auto px-4 py-16">
      {/* FAQ Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-600">
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-indigo-50 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-indigo-100 transition-colors"
            >
              <span className="text-gray-700 font-medium pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600">
                <p>
                  Lorem ipsum dolor sit amet consectetur. A laoreet bibendum lacus tempor ac urna odio viverra risus. 
                  Tellus viverra senectus quis eget amet adipisci. Morbi elementum pellentesque porttitor enim nulla nisl. 
                  Gravida egestas in et. Ut eget amet morbi bibendum ut vitae. Crator risus porttitor odio aliquant.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>


     <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-4xl font-semibold  text-indigo-600 mb-12">
        Guest Reviews
      </h1>

      {/* Rating Overview */}
      <div className="flex flex-col md:flex-row gap-20 mb-16">
        {/* Left: Average Rating */}
        <div className="flex flex-col items-center md:w-1/3">
          <div className="text-6xl font-bold text-[#4A4DD0] mb-2">
            {reviews.average}
          </div>
          <div className="flex gap-1 mb-2">
            {renderStars(Math.round(reviews.average))}
          </div>
          <p className="text-gray-600 text-sm">
            Based on {reviews.total} review{reviews.total !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Right: Rating Breakdown */}
        <div className="flex-1 space-y-3">
          {reviews.breakdown.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-sm text-gray-700 w-20">{item.label}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-indigo-600 h-full transition-all duration-300"
                  style={{
                    width: `${(item.count / reviews.total) * 100}%`
                  }}
                />
              </div>
              <span className="text-sm text-gray-600 w-8 text-right">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Comments Section */}
     <div className="mb-12">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
    {comments.length} Comment{comments.length !== 1 ? 's' : ''}
  </h2>

  {comments.map((comment, index) => (
    <div
      key={index}
      className=" rounded-lg p-6 "
    >
      <div className="flex items-start gap-4"> 

        {/* Profile Image */}
        <img
          src={comment.image}
          alt={comment.author}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-gray-800">{comment.author}</h3>
            <span className="text-sm text-gray-500">{comment.date}</span>
          </div>

          <div className="mb-3">{renderStars(comment.rating)}</div>

          <h4 className="text-indigo-600 font-medium mb-2">{comment.title}</h4>

          <p className="text-gray-600 text-sm leading-relaxed">
            {comment.content}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Leave a Comment Form */}
      <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Leave a Comment
        </h2>
        
<div className="space-y-6">
  {/* Name and Email Row */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* Full Name */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="fullName"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleInputChange}
        className="w-full px-6 py-3 border border-gray-300 rounded-full 
        focus:outline-none focus:border-indigo-500 transition-colors"
      />
    </div>

    {/* Email */}
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">
        Email Address <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full px-6 py-3 border border-gray-300 rounded-full 
        focus:outline-none focus:border-indigo-500 transition-colors"
      />
    </div>

  </div>

  {/* Save Info Checkbox */}
  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      name="saveInfo"
      id="saveInfo"
      checked={formData.saveInfo}
      onChange={handleInputChange}
      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
    />
    <label htmlFor="saveInfo" className="text-sm text-gray-600">
      Save my name, email, and website in this browser for the next time I comment.
    </label>
  </div>

  {/* Rating */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Rating <span className="text-red-500">*</span>
    </label>
    {renderStars(formData.rating, true)}
  </div>

  {/* Title */}
  <div>
    <label className="text-sm font-medium text-gray-700 mb-1 block">
      Title <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      name="title"
      placeholder="Enter title"
      value={formData.title}
      onChange={handleInputChange}
      className="w-full px-6 py-3 border border-gray-300 rounded-full 
      focus:outline-none focus:border-indigo-500 transition-colors"
    />
  </div>

  {/* Comment */}
  <div>
    <label className="text-sm font-medium text-gray-700 mb-1 block">
      Comment <span className="text-red-500">*</span>
    </label>
    <textarea
      name="comment"
      placeholder="Write your comment"
      value={formData.comment}
      onChange={handleInputChange}
      rows={6}
      className="w-full px-6 py-4 border border-gray-300 rounded-3xl 
      focus:outline-none focus:border-indigo-500 transition-colors resize-none"
    />
  </div>

  {/* Submit Button */}
  <button
    onClick={handleSubmit}
    className="bg-purple-600 hover:bg-purple-700 text-white font-medium 
    px-8 py-3 rounded-full transition-colors duration-200"
  >
    Submit Comment
  </button>

</div>

</div>
</div>
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
          {/* <div className="relative flex justify-center lg:justify-end h-full">
            <div className="absolute bottom-0 right-[125px] sm:right-[150px] md:right-[200px] lg:right-0 translate-y-1/2 w-full max-w-[250px] sm:max-w-[280px] md:max-w-xs lg:max-w-md">
            
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
              
            
              <div className="relative z-20 transform rotate-3 sm:rotate-4 md:rotate-5 lg:rotate-6 transition-transform duration-500 hover:rotate-2 lg:hover:rotate-3">
                <img
                  src="/phimg.png"
                  alt="Mobile App Preview"
                  className="w-full h-auto drop-shadow-[0_35px_60px_rgba(139,92,246,0.4)]"
                />
              </div>
            </div>
          </div> */}
          <div className="relative flex justify-center lg:justify-end h-full">
  <div className="absolute right-[100px] sm:right-[140px] md:right-[180px] lg:right-0 
                  top-[60%] sm:top-[65%] md:top-[70%] lg:top-auto 
                  translate-y-0 lg:translate-y-1/2 
                  w-full max-w-[220px] sm:max-w-[260px] md:max-w-xs lg:max-w-md">

    {/* Glow Effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 
                    bg-purple-600/30 rounded-full blur-3xl animate-pulse" />

    {/* Phone Image */}
    <div className="relative z-20 transform rotate-3 sm:rotate-4 md:rotate-5 lg:rotate-6 
                    transition-transform duration-500 hover:rotate-2 lg:hover:rotate-3">
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


        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto px-4">
    
              {/* Heading */}
              <h3 className="text-center text-sm tracking-widest text-gray-500 font-semibold">
                TOURS & TRIPS
              </h3>
    
              <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#3F2B96] mt-3">
                Explore the Best Handpicked Tours and Excursions
              </h2>
    
              <p className="text-center text-gray-500 max-w-2xl mx-auto mt-3">
                Lorem ipsum dolor sit amet consectetur. At lorem eu cursus fringilla eu.
                Accumsan vulputate sit placerat enim pretium erat ultrices dignissim et.
              </p>
    
              {/* Grid – 4 per row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
    
                {tours.map((tour, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={index}
                    className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-3"
                  >
                    {/* Image Hover Zoom */}
                    <div className="overflow-hidden rounded-lg">
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                        src={tour.img}
                        alt={tour.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
    
                    {/* Title with new color */}
                    <h3 className="mt-4 text-[#4A4DD0] text-lg font-semibold">
                      {tour.title}
                    </h3>
    
                    <p className="text-sm text-gray-500">{tour.package}</p>
    
                    <p className="text-sm text-gray-700 font-medium mt-1">
                      {tour.price}
                    </p>
    
                    {/* Gradient Button with hover animation */}
                                <MotionLink
                  href="/tour-booking/tour-listing"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    mt-4 w-32 text-white 
                    bg-gradient-to-r from-[#4A4DD0] to-[#C04CFD]
                    px-4 py-2 rounded-full text-sm font-medium 
                    transition-all shadow-md hover:shadow-lg
                    inline-flex items-center justify-center
                  "
                >
                  Explore Trip
                </MotionLink>
                  </motion.div>
                ))}
    
              </div>  
            </div>
          </section>
</div>
  );
};

export default Page;
