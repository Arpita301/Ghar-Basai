"use client";


import React from "react";
import Link from "next/link";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  CheckCircle,
  Heart,
  Users,
  Home,
  Activity,
  Calendar,
  Gift,
  Play,
  Dog,
  Coffee,
  MessagesSquare,
  Shield,
  Bed,
  Tv,
  ChevronRight,
  Phone
} from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function GharBasaiFamilyHotelsPage() {
  const images = [
    "https://images.unsplash.com/photo-1743592323402-2a8392831f44?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1613912836002-d5e02bba7d30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1687960116574-782d09070294?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1622221112861-b70b66f1c438?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const hotels = [
    {
      name: "Riverside Family Retreat",
      tagline: "Cozy retreat with family suites",
      rating: 4.7,
      price: "₹3,200",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=60"
    },
    {
      name: "Maple Leaf Retreat",
      tagline: "Cozy family suites near the hills.",
      rating: 4.2,
      price: "₹1500",
      img: "https://plus.unsplash.com/premium_photo-1727550814542-00cd0d809c51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Hillside Cottage",
      tagline: "Peaceful, child-safe cottages",
      rating: 4.6,
      price: "₹4,100",
      img: "https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Garden Homestay",
      tagline: "Nature, food & family fun",
      rating: 4.5,
      price: "₹2,800",
      img: "https://images.unsplash.com/photo-1586175554766-77513ac248d0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Family vacation resort",
      tagline: "Spacious rooms for large families",
      rating: 4.6,
      price: "₹4,800",
      img: "https://images.unsplash.com/photo-1739396243730-e7839b2fd6b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Family cottages with bonfire nights.",
      tagline: "Spacious rooms for large families",
      rating: 4.6,
      price: "₹2000",
      img: "https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const features = [
    { icon: <Play size={20} />, label: "Kids' Play Area" },
    { icon: <Home size={20} />, label: "Spacious Family Rooms" },
    { icon: <Users size={20} />, label: "Babysitting Service" },
    { icon: <Gift size={20} />, label: "Family Dining & Buffet" },
    { icon: <Dog size={20} />, label: "Pet-friendly" },
    { icon: <Activity size={20} />, label: "Guided Family Tours" }
  ];

  const experiences = [
    { title: "Adventure Trips", subtitle: "Family trekking & cycling", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60" },
    { title: "Cultural Activities", subtitle: "Local dance & cooking", img: "https://images.unsplash.com/photo-1614357952962-c3818cfe4e07?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Nature Walks & Bird Watching", subtitle: "Spa & wellness for parents", img: "https://images.unsplash.com/photo-1715424081078-f7aeff1e0bc6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Music & Dance Nights", subtitle: "Family-friendly karaoke or cultural dance participation.", img: "https://images.unsplash.com/photo-1670613074647-dc0a28b26262?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Storytelling & Campfire Nights", subtitle: "Folk tales, marshmallows, and music around a fire.", img: "https://images.unsplash.com/photo-1565285603086-8eb440772c47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Farm Visits & Animal Interaction", subtitle: "Feeding farm animals, learning gardening", img: "https://plus.unsplash.com/premium_photo-1681843495135-213259503a6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  const testimonials = [
    { family: "The Sharma Family", text: "Our kids loved the play area — we had restful nights and great food!", rating: 5 },
    { family: "The Ghosh Family", text: "Staff were so caring with our toddler. Very secure and comfortable.", rating: 4.5 },
    { family: "The Kapoor Family", text: "Festival packages were superb — lots of activities for all ages.", rating: 4.8 }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1709205659441-4c9dc7e9285f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1670899460364-ebc917bac09a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1670985623972-e212c5fdf9a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1559414131-b0aa53919648?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1723879867149-777a5a0e19c4?q=80&w=644&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden bg-white">
        {/* Background Slider with Fade Animation */}
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 1.5 }}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
          {/* Overlay (keeps text visible) */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content with Animation */}
        <motion.div 
          className="relative z-10 max-w-3xl text-white px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ghar Basai — Family Hotels for Every Generation
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Where comfort, safety, and togetherness meet for unforgettable family moments.
          </p>
          <div className="flex justify-center gap-4 mb-6">
          <Link
      href="/tour-booking/custom"
      className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
    >
      Book Your Stay
    </Link>
    <Link
      href="/hotel/luxury"
      className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition"
    >
      Explore Hotels
    </Link>
          </div>
          <div className="flex justify-center gap-6 text-sm text-gray-200">
            <motion.span 
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Users className="w-4 h-4" /> Trusted by families
            </motion.span>
            <motion.span 
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <MapPin className="w-4 h-4" /> Multiple locations
            </motion.span>
            <motion.span 
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Shield className="w-4 h-4" /> Child-safe zones
            </motion.span>
          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Heading */}
        <motion.div className="text-center" variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Our Family Hotels?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Spaces and services designed with love for every member of your family.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={staggerContainer}
        >
          {/* Card 1 */}
          <motion.div 
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            variants={scaleUp}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 text-blue-600 mb-4">
              <Home size={28} />
              <h3 className="font-semibold text-xl">Spacious Rooms & Suites</h3>
            </div>
            <p className="text-gray-600">
              Large interconnected rooms and suites designed for families.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Bed size={18} className="text-green-500" />
                Extra beds & cots available
              </li>
              <li className="flex items-center gap-2">
                <Shield size={18} className="text-green-500" />
                Child-proofing on request
              </li>
              <li className="flex items-center gap-2">
                <Tv size={18} className="text-green-500" />
                In-room entertainment for kids
              </li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            variants={scaleUp}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 text-red-600 mb-4">
              <Shield size={28} />
              <h3 className="font-semibold text-xl">Safety & Security</h3>
            </div>
            <p className="text-gray-600">
              24/7 security, CCTV in shared spaces, and trained staff.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <Users size={18} className="text-red-500" />
                Medical kit & emergency contact
              </li>
              <li className="flex items-center gap-2">
                <Home size={18} className="text-red-500" />
                Secure play areas
              </li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            variants={scaleUp}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 text-green-600 mb-4">
              <Dog size={28} />
              <h3 className="font-semibold text-xl">
                Budget-Friendly & Pet Friendly
              </h3>
            </div>
            <p className="text-gray-600">
              Affordable packages with comfort and pet-friendly rooms available.
            </p>
            <div className="mt-5 flex items-center gap-3 text-sm text-gray-700">
              <Dog size={18} className="text-green-500" /> Pet-friendly options
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* POPULAR STAYS */}
      <motion.section 
        className="max-w-6xl mx-auto px-6 py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl font-bold" variants={fadeIn}>
          Popular Family-Friendly Stays
        </motion.h2>
        <motion.div 
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {hotels.map((h, i) => (
            <motion.article 
              key={i} 
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              variants={scaleUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={h.img} 
                  alt={h.name} 
                  fill 
                  className="object-cover hover:scale-105 transition duration-700" 
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{h.name}</h3>
                    <p className="text-sm text-gray-600">{h.tagline}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">{h.price} / night</div>
                    <div className="text-xs text-gray-500">Rating: {h.rating} ★</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <motion.button 
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                 <Link
      href="/contact"
      className="px-3 py-2 rounded-lg ring-1 ring-gray-200 text-sm hover:bg-gray-100 transition"
    >
      Book Now
    </Link>
                  
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      {/* AMENITIES & FEATURES */}
      <motion.section 
        className="max-w-6xl mx-auto px-6 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl font-bold" variants={fadeIn}>
          Amenities & Features
        </motion.h2>
        <motion.div 
          className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={staggerContainer}
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              className="bg-white p-4 rounded-xl shadow flex flex-col items-center text-center"
              variants={scaleUp}
              whileHover={{ y: -5, rotate: 2 }}
            >
              <motion.div 
                className="bg-emerald-50 p-3 rounded-full"
                whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
              >
                {f.icon}
              </motion.div>
              <div className="mt-3 text-sm font-medium">{f.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* EXPERIENCES */}
      <motion.section 
        className="max-w-6xl mx-auto px-6 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl font-bold" variants={fadeIn}>
          Experiences for Families
        </motion.h2>
        <motion.div 
          className="mt-6 flex gap-4 overflow-x-auto py-2"
          variants={staggerContainer}
        >
          {experiences.map((e, i) => (
            <motion.div 
              key={i} 
              className="min-w-[260px] bg-white rounded-2xl shadow flex-shrink-0 overflow-hidden"
              variants={scaleUp}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image 
                  src={e.img} 
                  alt={e.title} 
                  fill 
                  className="object-cover hover:scale-110 transition duration-700" 
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold">{e.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{e.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section 
        className="max-w-6xl mx-auto px-6 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl font-bold" variants={fadeIn}>
          Guest Reviews & Testimonials
        </motion.h2>
        <motion.div 
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {testimonials.map((t, i) => (
            <motion.blockquote 
              key={i} 
              className="bg-white p-6 rounded-2xl shadow"
              variants={scaleUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center"
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  >
                    <Users />
                  </motion.div>
                  <div>
                    <div className="font-semibold">{t.family}</div>
                    <div className="text-xs text-gray-500">{t.rating} ★</div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">"{t.text}"</p>
            </motion.blockquote>
          ))}
        </motion.div>
      </motion.section>

      {/* PACKAGES */}
      <motion.section 
        className="max-w-6xl mx-auto px-6 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl font-bold" variants={fadeIn}>
          Family Packages & Deals
        </motion.h2>
        <motion.div 
          className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          <motion.div 
            className="p-6 bg-white rounded-2xl shadow"
            variants={scaleUp}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <h3 className="font-semibold">Weekend Family Getaway</h3>
            <p className="text-gray-600 mt-2">2 nights | Family activities | Complimentary breakfast</p>
            <div className="mt-4">
              <motion.button 
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white flex items-center gap-2"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Package <ChevronRight size={16} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="p-6 bg-white rounded-2xl shadow"
            variants={scaleUp}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <h3 className="font-semibold">Summer Vacation Package</h3>
            <p className="text-gray-600 mt-2">Special kids activities and discounts on meals</p>
            <div className="mt-4">
              <motion.button 
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white flex items-center gap-2"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Package <ChevronRight size={16} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="p-6 bg-white rounded-2xl shadow"
            variants={scaleUp}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <h3 className="font-semibold">Festival Special Offers</h3>
            <p className="text-gray-600 mt-2">Events, cultural nights and family-friendly menus</p>
            <div className="mt-4">
              <motion.button 
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white flex items-center gap-2"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Package <ChevronRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* GALLERY */}
      <motion.section 
        className="max-w-6xl mx-auto px-6 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl font-bold" variants={fadeIn}>
          Gallery
        </motion.h2>
        <motion.div 
          className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4"
          variants={staggerContainer}
        >
          {gallery.map((g, i) => (
            <motion.div 
              key={i} 
              className="relative h-40 w-full rounded-2xl overflow-hidden"
              variants={scaleUp}
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src={g} 
                alt={`gallery-${i}`} 
                fill 
                className="object-cover hover:scale-110 transition duration-700" 
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA SECTION */}
   
<section className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16 mt-10">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
    
    {/* Text Content */}
    <div className="max-w-xl text-center md:text-left">
      <h3 className="text-3xl md:text-4xl font-extrabold leading-snug">
        Plan Your Family’s <span className="text-yellow-300">Perfect Getaway</span>
      </h3>
      <p className="mt-4 text-emerald-100 text-lg">
        Comfort, safety, and activities designed for every generation with <span className="font-semibold">Ghar Basai Family Hotels</span>.
      </p>

      {/* Highlights with Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="bg-white/20 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2v1c0 1.105 1.343 2 3 2s3-.895 3-2v-1c0-1.105-1.343-2-3-2zm0 9c-3.866 0-7-1.79-7-4V9a2 2 0 012-2h10a2 2 0 012 2v4c0 2.21-3.134 4-7 4z" />
            </svg>
          </div>
          <p className="mt-2 text-sm">Safe & Secure</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="bg-white/20 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l6 6-6 6M21 7l-6 6 6 6" />
            </svg>
          </div>
          <p className="mt-2 text-sm">Fun Activities</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="bg-white/20 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-6 0a9 9 0 1112 0H9z" />
            </svg>
          </div>
          <p className="mt-2 text-sm">Family Comfort</p>
        </div>
      </div>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      {/* <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-700 font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20V6h13M9 6l-6 6 6 6" />
        </svg>
        Book Now
      </button> */}


          <Link
      href="/contact"
      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-700 font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20V6h13M9 6l-6 6 6 6"
        />
      </svg>
      Book Now
    </Link>
      {/* <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/70 text-white font-medium hover:bg-white/10 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 8l10 6 10-6" />
        </svg>
        Talk to Consultant
      </button> */}


          <Link
      href="/consultant"
      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-700 font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20V6h13M9 6l-6 6 6 6"
        />
      </svg>
    Book free consultant
    </Link>
    </div>
  </div>
</section>
</main>
  );
}

