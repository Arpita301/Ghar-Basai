"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Search,
  Users,
  Wallet,
  Calendar as CalendarIcon,
  Star,
  Heart,
  Percent,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Shield,
  Clock,
  Globe
} from "lucide-react";




const images = [
  "https://images.unsplash.com/photo-1590946315647-51ffa74f1b7b?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1738226699598-2de1294e8bed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1170&auto=format&fit=crop",
];
// Updated hero image to something more appropriate for budget stays
const HERO_BG = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80";
const SAMPLE_STAYS = [
  {
    id: 1,
    name: "Himalayan Lodge",
    location: "Darjeeling, India",
    price: 2000,
    rating: 4.6,
    reviews: 120,
    img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
    favorite: false,
    link: "/tour-booking/custom"
  },
  {
    id: 2,
    name: "Cozy River Cottage",
    location: "Rishikesh, India",
    price: 3500,
    rating: 4.4,
    reviews: 85,
    img: "https://plus.unsplash.com/premium_photo-1755612126277-e3819da594b1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    favorite: true,
    link: "/tour-booking/custom"
  },
  {
    id: 3,
    name: "Sea Breeze Hostel",
    location: "Goa, India",
    price: 2500,
    rating: 4.2,
    reviews: 210,
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    favorite: false,
    link: "/tour-booking/custom"
  },
  {
    id: 4,
    name: "Green Valley Homestay",
    location: "Munnar, India",
    price: 1100,
    rating: 4.7,
    reviews: 95,
    img: "https://images.unsplash.com/photo-1584478389823-8bc243e88bfb?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    favorite: false,
    link: "/tour-booking/custom"
  },
  {
    id: 5,
    name: "Desert Camp Experience",
    location: "Jaisalmer, India",
    price: 1500,
    rating: 4.5,
    reviews: 142,
    img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
    favorite: true,
    link: "/tour-booking/custom"
  },
  {
    id: 6,
    name: "Backpackers Paradise",
    location: "Manali, India",
    price: 650,
    rating: 4.3,
    reviews: 187,
    img: "https://plus.unsplash.com/premium_photo-1692731797466-298784587496?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    favorite: false,
    link: "/tour-booking/custom"
  }
];


const PACKAGES = [
  { 
    id: 1, 
    title: "2 Nights in Darjeeling", 
    price: "₹2,500/person", 
    details: "Stay + Breakfast + Toy Train ride",
    img: "https://images.unsplash.com/photo-1670915198364-5839c858940c?q=80&w=1589&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/tour-booking/custom"
  },
  { 
    id: 2, 
    title: "Weekend Goa Hostel", 
    price: "₹1,800/person", 
    details: "2 nights + City crawl",
    img: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/tour-booking/custom"
  },
  { 
    id: 3, 
    title: "Munnar Monsoon Escape", 
    price: "₹3,200/person", 
    details: "Stay + Trek + Local meals",
    img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/tour-booking/custom"
  },
];


const TESTIMONIALS = [
  { 
    id: 1, 
    name: "Neha, Pune", 
    text: "Great budget stay — clean, friendly host and gorgeous view!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
  },
  { 
    id: 2, 
    name: "Rahul, Kolkata", 
    text: "Booked for a group trip. Excellent group discounts and value.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  { 
    id: 3, 
    name: "Sofia, Delhi", 
    text: "Easy booking and safe neighborhood. Highly recommended for solo travellers.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
  },
];
const BUDGET_CATEGORIES = [
  { 
    title: "Domestic Budget", 
    desc: "Affordable stays across India", 
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    count: "250+ stays",
    link: "/tour-booking/domestic"   // Add the link here
  },
  { 
    title: "International Budget", 
    desc: "Backpacker-friendly options abroad", 
    img: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=800&q=80",
    count: "180+ stays",
    link: "/tour-booking/international"
  },
  { 
    title: "Custom Budget Plans", 
    desc: "Tailor a plan for your group", 
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    count: "Custom packages",
    link: "/tour-booking/custom"
  },
];

export default function BudgetStaysPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState(
    SAMPLE_STAYS.reduce((acc, stay) => {
      acc[stay.id] = stay.favorite;
      return acc;
    }, {})
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}

<br />
<br />
      {/* HERO */}
<header className="relative min-h-[600px] overflow-hidden">
  {/* Background Image Slider */}
  <div className="absolute inset-0">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Image
          src={images[currentIndex]}
          alt="Budget homestay background"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-white/30"></div>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Hero Content (Outside AnimatePresence!) */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="relative container mx-auto px-6 py-28 md:py-36"
  >
    <div className="max-w-3xl text-gray">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
        Stay cozy without burning your pocket
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-700">
        Affordable homestays, cottages, and hostels tailored for curious travellers.
      </p>
      <div className="mt-6 flex gap-3">
        <a
          href="#search"
          className="inline-flex items-center gap-2 bg-amber-400 text-black px-5 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          <Search size={18} /> Quick search
        </a>
        <a
          href="#packages"
          className="inline-flex items-center gap-2 border border-gray-200 px-5 py-3 rounded-lg text-black hover:bg-white/10 transition"
        >
          View packages
        </a>
      </div>
    </div>
  </motion.div>
</header>




      {/* SEARCH / FILTER BAR */}
      <section id="search" className="container mx-auto px-6 mt-20">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-2xl p-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
        >
          <div className="col-span-1 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Destination</label>
            <div className="mt-1 flex items-center gap-3 p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-amber-400 focus-within:border-amber-400">
              <MapPin size={20} className="text-gray-400" />
              <input className="w-full outline-none bg-transparent" placeholder="Where do you want to go?" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Check-in / Check-out</label>
            <div className="mt-1 flex items-center gap-3 p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-amber-400 focus-within:border-amber-400">
              <CalendarIcon size={20} className="text-gray-400" />
              <input className="w-full outline-none bg-transparent" placeholder="Select dates" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Travelers</label>
            <div className="mt-1 flex items-center gap-3 p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-amber-400 focus-within:border-amber-400">
              <Users size={20} className="text-gray-400" />
              <select className="w-full outline-none bg-transparent">
                <option>1 traveler</option>
                <option>2 travelers</option>
                <option>3 travelers</option>
                <option>4+ travelers</option>
              </select>
            </div>
          </div>

          <div className="flex md:justify-end">
            <button type="submit" className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition">
              <Search size={18} /> Search stays
            </button>
          </div>
        </motion.form>
      </section>

      {/* Budget Categories */}
      {/* <section className="container mx-auto px-6 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-3">Find Your Perfect Budget Stay</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover affordable accommodations tailored to your travel style and budget</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUDGET_CATEGORIES.map((c, index) => (
            <motion.div 
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image src={c.img} alt={c.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl">{c.title}</h3>
                  <p className="text-sm">{c.count}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 mb-4">{c.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Starting from ₹499/night</span>
                  <a className="inline-flex items-center gap-1 px-4 py-2 bg-amber-400 text-gray-900 rounded-lg font-medium hover:bg-amber-500 transition">
                    Explore <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}



 <section className="container mx-auto px-6 mt-16">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-10"
  >
    <h2 className="text-3xl font-bold mb-3">Find Your Perfect Budget Stay</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">Discover affordable accommodations tailored to your travel style and budget</p>
  </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {BUDGET_CATEGORIES.map((c, index) => (
      <motion.div 
        key={c.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }} 
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="relative h-48">
          <Image src={c.img} alt={c.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold text-xl">{c.title}</h3>
            <p className="text-sm">{c.count}</p>
          </div>
        </div>
        <div className="p-5">
          <p className="text-gray-600 mb-4">{c.desc}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Starting from ₹499/night</span>
            <Link href={c.link} className="inline-flex items-center gap-1 px-4 py-2 bg-amber-400 text-gray-900 rounded-lg font-medium hover:bg-amber-500 transition">
              Explore <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>










      {/* Stay Listings */}
      {/* <section className="container mx-auto px-6 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between mb-8"
        >
          <div>
            <h2 className="text-3xl font-bold">Budget-Friendly Stays</h2>
            <p className="text-gray-600 mt-2">Curated selections for the value-conscious traveler</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="flex items-center gap-2 text-blue-600 font-medium">
              View all destinations <ChevronDown size={16} />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_STAYS.map((stay, index) => (
            <motion.article 
              key={stay.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-56">
                <Image src={stay.img} alt={stay.name} fill className="object-cover" />
                <button 
                  onClick={() => toggleFavorite(stay.id)}
                  className={`absolute top-3 right-3 rounded-full p-2 ${favorites[stay.id] ? 'bg-rose-500 text-white' : 'bg-white/80 text-gray-600'} transition`}
                >
                  <Heart size={18} fill={favorites[stay.id] ? "currentColor" : "none"} />
                </button>
                <div className="absolute bottom-3 left-3 bg-amber-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
                  ₹{stay.price}/night
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{stay.name}</h3>
                    <p className="text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin size={14} /> {stay.location}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-medium">{stay.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({stay.reviews} reviews)</span>
                </div>
                <div className="mt-4 flex gap-3">
                  <a className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    View Details
                  </a>
                  <a className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Book Now
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section> */}




<section className="container mx-auto px-6 mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_STAYS.map((stay, index) => (
          <div key={stay.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-56">
              <Image src={stay.img} alt={stay.name} fill className="object-cover" />
              <button 
                onClick={() => toggleFavorite(stay.id)}
                className={`absolute top-3 right-3 rounded-full p-2 ${favorites[stay.id] ? 'bg-rose-500 text-white' : 'bg-white/80 text-gray-600'} transition`}
              >
                <Heart size={18} fill={favorites[stay.id] ? "currentColor" : "none"} />
              </button>
              <div className="absolute bottom-3 left-3 bg-amber-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
                ₹{stay.price}/night
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg">{stay.name}</h3>
              <p className="text-gray-500 flex items-center gap-1 mt-1">
                <MapPin size={14} /> {stay.location}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  <Star size={14} fill="currentColor" />
                  <span className="text-sm font-medium">{stay.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({stay.reviews} reviews)</span>
              </div>
              <div className="mt-4 flex gap-3">
                <Link href={stay.link} className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  View Details
                </Link>
                <Link href={stay.link} className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>







      {/* Special Offers */}
      <section className="container mx-auto px-6 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-3">Special Offers & Deals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Exclusive discounts and packages to make your travel even more affordable</p>
        </motion.div>
        
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x">
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="min-w-[300px] bg-gradient-to-r from-amber-400 to-amber-300 rounded-2xl p-6 shadow-lg snap-start"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-white text-amber-700 text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
                <h3 className="text-lg font-bold mt-3">Flat 20% off on group stays</h3>
                <p className="mt-2 text-sm">Book for 4+ guests and save instantly. Use code: GROUP20</p>
              </div>
              <Percent size={32} className="text-amber-700" />
            </div>
            <button className="mt-4 text-sm font-medium text-amber-800 hover:text-amber-900 underline">
              View terms & conditions
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="min-w-[300px] bg-white rounded-2xl p-6 shadow-lg border border-amber-200 snap-start"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">MONSOON</span>
                <h3 className="text-lg font-bold mt-3">Monsoon Special</h3>
                <p className="mt-2 text-sm">Stay cozy with hot chai and local treks included.</p>
              </div>
              <Shield size={32} className="text-amber-500" />
            </div>
            <button className="mt-4 text-sm font-medium text-amber-600 hover:text-amber-700 underline">
              Explore monsoon deals
            </button>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="min-w-[300px] bg-white rounded-2xl p-6 shadow-lg border border-blue-200 snap-start"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">EARLY BIRD</span>
                <h3 className="text-lg font-bold mt-3">Early Bird Winter Packages</h3>
                <p className="mt-2 text-sm">Book now for December & January and get extra perks.</p>
              </div>
              <Clock size={32} className="text-blue-500" />
            </div>
            <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 underline">
              Book winter package
            </button>
          </motion.div>
        </div>
      </section>

      {/* Packages */}

      <section id="packages" className="container mx-auto px-6 mt-16">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-10"
  >
    <h2 className="text-3xl font-bold mb-3">Budget Trip Packages</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">All-inclusive packages for hassle-free budget travel</p>
  </motion.div>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {PACKAGES.map((p, index) => (
      <motion.div 
        key={p.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }} 
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
      >
        <div className="relative h-48">
          <Image src={p.img} alt={p.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg">{p.title}</h3>
            <div className="font-bold text-blue-600">{p.price}</div>
          </div>
          <p className="text-gray-600 text-sm mb-4">{p.details}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Globe size={14} /> India
            </div>
            <Link href={p.link} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Book Now
            </Link>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>










      {/* Testimonials */}
      <section className="container mx-auto px-6 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-3">What Travellers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from fellow budget travelers about their experiences</p>
        </motion.div>
        
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x">
          {TESTIMONIALS.map((t, index) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }} 
              className="min-w-[300px] bg-white rounded-2xl p-6 shadow-lg snap-start"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} fill="#fbbf24" className="text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700">"{t.text}"</blockquote>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}