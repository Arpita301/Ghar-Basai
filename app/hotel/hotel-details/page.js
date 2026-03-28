"use client";
import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Hotel, Users, Coffee, Utensils } from 'lucide-react';
import { Star, User, Calendar, Check, Send } from 'lucide-react';

const Page = () => {
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

  const rooms = [
    {
      type: 'Deluxe Room',
      guests: '2 Guests',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop',
      options: [
        {
          title: 'Room Only',
          details: ['Non Refundable', 'No Meals'],
          price: '₹3,300',
          gst: '+ ₹106 GST',
          perNight: 'Per night for 1 rooms'
        },
        {
          title: 'Room with Breakfast',
          details: ['Non Refundable', 'Breakfast'],
          price: '₹3,500',
          gst: '+ ₹175 GST',
          perNight: 'Per night for 1 rooms'
        },
        {
          title: 'Room with Breakfast & Lunch/Dinner',
          details: ['Non Refundable', 'Breakfast + Lunch/Dinner'],
          price: '₹4,400',
          gst: '+ ₹120 GST',
          perNight: 'Per night for 1 rooms'
        },
        {
          title: 'Room with Breakfast, Lunch & Dinner',
          details: ['Non Refundable', 'Breakfast, Lunch & Dinner'],
          price: '₹5,300',
          gst: '+ ₹165 GST',
          perNight: 'Per night for 1 rooms'
        }
      ]
    },
    {
      type: 'Premium Room',
      guests: '2 Guests',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
      options: [
        {
          title: 'Room Only',
          details: ['Non Refundable', 'No Meals'],
          price: '₹5,540',
          gst: '+ ₹178 GST',
          perNight: 'Per night for 1 rooms'
        },
        {
          title: 'Room with Breakfast',
          details: ['Non Refundable', 'Breakfast'],
          price: '₹5,850',
          gst: '+ ₹180 GST',
          perNight: 'Per night for 1 rooms'
        },
        {
          title: 'Room with Breakfast & Lunch/Dinner',
          details: ['Non Refundable', 'Breakfast + Lunch/Dinner'],
          price: '₹6,390',
          gst: '+ ₹170 GST',
          perNight: 'Per night for 1 rooms'
        },
        {
          title: 'Room with Breakfast, Lunch & Dinner',
          details: ['Non Refundable', 'Breakfast, Lunch & Dinner'],
          price: '₹6,940',
          gst: '+ ₹400 GST',
          perNight: 'Per night for 1 rooms'
        }
      ]
    }
  ];

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

  // Image Slider Component
  const ImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % images.length);
    const prev = () => setIndex((index - 1 + images.length) % images.length);

    return (
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src={images[index]}
          alt="Room"
          className="w-full h-48 object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-700 p-2 rounded-full"
        >
          ‹
        </button>
        
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-700 p-2 rounded-full"
        >
          ›
        </button>
        
        <div className="absolute bottom-2 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                index === i ? "bg-white" : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    );
};

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
  return (
    <div>
      {/* Header Section */}
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
            Ghar Basai Prime the King's Court
          </motion.h1>

          <motion.p
            className="mt-4 text-xl md:text-6xl drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            With Pool and Bar
          </motion.p>
        </motion.div>
      </header>

      {/* Image Gallery Section */}
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
              src="/room1.png"
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
              src="/room2.png"
              alt="Room"
              className="w-full h-[160px] object-cover rounded-xl shadow-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />

            {/* Small Img 2 */}
            <motion.img
              src="/room3.png"
              alt="Bathroom"
              className="w-full h-[160px] object-cover rounded-xl shadow-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            {/* Small Img 3 */}
            <motion.img
              src="/room4.png"
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
                src="/room5.png"
                className="w-full h-full object-cover"
                alt="More Photos"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">+10 <br />Photos</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
<br />

      {/* Room Selection Section */}
  <div className="min-h-screen">
      {/* Navigation Tabs */}
       <div className="w-full flex justify-center">
  <div className="max-w-6xl w-full border-[0.5px] border-black flex">
    
    <button
      onClick={() => setActiveTab('select')}
      className={`flex-1 px-6 py-4 text-sm font-medium ${
        activeTab === 'select'
          ? 'bg-gray-200 text-gray-900'
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      Select Room
    </button>

    <button
      onClick={() => setActiveTab('about')}
      className={`flex-1 px-6 py-4 text-sm font-medium ${
        activeTab === 'about'
          ? 'bg-gray-200 text-gray-900'
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      About Hotel & Amenities
    </button>

    <button
      onClick={() => setActiveTab('reviews')}
      className={`flex-1 px-6 py-4 text-sm font-medium ${
        activeTab === 'reviews'
          ? 'bg-gray-200 text-gray-900'
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      Guest reviews
    </button>

  </div>
</div>



<br />
<br />


      {/* Main Content */}
<div className="max-w-6xl mx-auto p-1">

  {/* Horizontal Scroll Wrapper */}
  <div className="overflow-x-auto">
    <div className="min-w-[650px] md:min-w-full">
      
      <div className="bg-pink-50 border-2 border-[#7E7E7E] rounded-lg overflow-hidden">

        {/* Table Header */}
        <div className="grid grid-cols-12 bg-pink-100 border-b-2 border-[#7E7E7E]">
          <div className="col-span-3 px-4 py-3">
            <h3 className="font-semibold text-gray-900 text-sm">Room Type</h3>
          </div>
          <div className="col-span-4 px-4 py-3 border-l-2 border-[#7E7E7E]">
            <h3 className="font-semibold text-gray-900 text-sm">Room Options</h3>
          </div>
          <div className="col-span-5 px-4 py-3 border-l-2 border-[#7E7E7E]">
            <h3 className="font-semibold text-gray-900 text-sm">Today's Price</h3>
          </div>
        </div>

        {/* Rooms */}
        {rooms.map((room, roomIndex) => (
          <div key={roomIndex} className="border-b-2 border-[#7E7E7E] last:border-b-0">

            <div className="grid grid-cols-12">

              {/* Room Type Column */}
              <div className="col-span-3 p-4">
                <h4 className="font-bold text-gray-900 mb-1">{room.type}</h4>
                <p className="text-xs text-gray-600 mb-3">{room.guests}</p>

                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full rounded-lg object-cover h-32"
                  />
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                    {[0, 1, 2, 3].map((dot, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${
                          i === 0 ? "bg-gray-800" : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Room Options + Pricing */}
              <div className="col-span-9 border-l-2 border-[#7E7E7E]">

                {room.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`grid grid-cols-9 ${
                      optionIndex !== room.options.length - 1
                        ? "border-b border-[#7E7E7E]"
                        : ""
                    }`}
                  >
                    {/* Room Options */}
                    <div className="col-span-4 px-4 py-4">
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">
                        {option.title}
                      </h5>

                      {option.details?.map((detail, i) => (
                        <p key={i} className="text-xs text-gray-600">
                          • {detail}
                        </p>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="col-span-5 px-4 py-4 border-l-2 border-[#7E7E7E] flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-1 mb-1">
                          <span className="text-lg font-bold text-gray-900">
                            {option.price}
                          </span>
                          <span className="text-xs text-gray-600">{option.gst}</span>
                        </div>
                        <p className="text-xs text-gray-600">{option.perNight}</p>
                      </div>

                      <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all">
                        Select Room
                      </button>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  </div>

  {/* About Section */}

</div>
</div>


<div className="mt-15 max-w-6xl mx-auto">

  <h2 className="text-3xl font-bold text-blue-600 mb-6">About this Hotel</h2>

  <div className="overflow-x-auto">
    <div className="min-w-[900px] md:min-w-full">

      <div className="bg-pink-50 border-2 border-pink-300 rounded-lg overflow-hidden">

        {/* DESCRIPTION */}
        <div className="grid grid-cols-12">
          <div className="col-span-3 bg-pink-100 border-r-2 border-pink-300 p-6">
            <h3 className="font-bold text-gray-900 text-lg">Description</h3>
          </div>

          <div className="col-span-9 p-6 space-y-6 text-sm leading-relaxed text-gray-700">

            <p>
              Lorem ipsum dolor sit amet consectetur. At lorem ut nec cursus fringilla eu. 
              Accumsan vulputate et placer praesent ultricies dignissim et.
            </p>

            <p className="flex items-start">
              <span className="mr-2 mt-1">
                <img src="/check.png" className="w-4 h-4" />
              </span>
              It features contemporary rooms with modern amenities like a flat-screen TV, AC, 
              and an attached bathroom.
            </p>

            <p className="flex items-start">
              <span className="mr-2 mt-1">
                <img src="/check.png" className="w-4 h-4" />
              </span>
              24×7 CCTV surveillance, round-the-clock power backup and complimentary Wi-Fi 
              are provided.
            </p>

            <p className="flex items-start">
              <span className="mr-2 mt-1">
                <img src="/check.png" className="w-4 h-4" />
              </span>
              Trained and hospitable staff ensures an enjoyable stay.
            </p>

            {/* WHY THIS HOTEL */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Why This Ghar Basai Hotel</h4>
              <p>
                The hotel is centrally located and offers a loyalty program.  
                For help or bookings, call +91 98765 43210.
              </p>
            </div>

          </div>
        </div>

        {/* AMENITIES */}
        <div className="grid grid-cols-12 border-t-2 border-pink-300">
          <div className="col-span-3 bg-pink-100 border-r-2 border-pink-300 p-6">
            <h3 className="font-bold text-gray-900 text-lg">Popular Amenities</h3>
          </div>

          <div className="col-span-9 p-6">
            <div className="grid grid-cols-3 gap-x-8 gap-y-2 text-sm text-gray-700">

              {[
                "Free Wifi",
                "LCD TV",
                "24x7 Security",
                "Free Toiletries",
                "Daily Housekeeping",
                "Mineral Water Bottle",
                "Clean Towels",
                "Clean Linen",
                "Toilet Paper",
                "Lift",
                "A.C.",
                "Wake-Up Service",
                "DTH Channels",
                "Power Backup",
                "Outsourced Kitchen"
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <span className="mr-2 mt-1">
                    <img src="/check.png" className="w-4 h-4" />
                  </span>
                  {item}
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* RULES */}
        <div className="grid grid-cols-12 border-t-2 border-pink-300">
          <div className="col-span-3 bg-pink-100 border-r-2 border-pink-300 p-6">
            <h3 className="font-bold text-gray-900 text-lg">Hotel Rules</h3>
          </div>

          <div className="col-span-9 p-6 space-y-2 text-sm text-gray-700">

            {[
              "Non refundable",
              "Check-in: 10:00 AM",
              "Check-out: 9:00 AM",
              "Full charge for no-show",
              "One child up to age 8 stays free",
              "No complimentary breakfast or extra bed",
              "Local & outstation IDs allowed",
              "Unmarried couples allowed",
              "Foreign guests must show passport & visa"
            ].map((rule, i) => (
              <p key={i} className="flex items-start">
                <span className="mr-2 mt-1">
                  <img src="/check.png" className="w-4 h-4" />
                </span>
                {rule}
              </p>
            ))}

          </div>
        </div>

      </div>

    </div>
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

        
        <button className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300 whitespace-nowrap">
          View All Hotels
        </button>
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












</div>
  );
};

export default Page;