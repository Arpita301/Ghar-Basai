"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

import {
  MapPin,
  Home,
  Coffee,
  Heart,
  Star,
  Leaf,
  Shield,
  Sparkles,
  Users,
  Calendar,
  Clock,
  Bus,
  Baby,
  Dog,
  Wifi,
  Car,
  Utensils
} from "lucide-react";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

export default function LuxuryResortPage() {
  const features = [
    {
      title: "Prime Location",
      desc: "Panoramic mountain and river views, buildings that blend with nature.",
      icon: MapPin,
    },
    {
      title: "Luxury Accommodation",
      desc: "Spacious villas, private terraces, premium local craftsmanship.",
      icon: Home,
    },
    {
      title: "World-Class Dining",
      desc: "Multi-cuisine restaurant, rooftop dining, farm-to-table experiences.",
      icon: Coffee,
    },
    {
      title: "Spa & Wellness",
      desc: "Ayurvedic spa, yoga pavilion, steam rooms and premium therapies.",
      icon: Heart,
    },
    {
      title: "Pool & Recreation",
      desc: "Infinity pool, kids' zones, adventure activities and guided tours.",
      icon: Star,
    },
    {
      title: "Events & Banquets",
      desc: "Indoor conference rooms and outdoor lawns for weddings & corporate.",
      icon: Calendar,
    },
    {
      title: "Sustainability",
      desc: "Rainwater harvesting, solar panels, waste recycling & plastic-free policy.",
      icon: Leaf,
    },
    {
      title: "Safety & Comfort",
      desc: "24/7 security, medical on-site and convenient shuttle services.",
      icon: Shield,
    },
  ];

  // Refs for in-view animations
  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-20%" });

  const accommodationRef = useRef(null);
  const isAccommodationInView = useInView(accommodationRef, { once: true, margin: "-10%" });

  const diningRef = useRef(null);
  const isDiningInView = useInView(diningRef, { once: true, margin: "-10%" });

  const experiencesRef = useRef(null);
  const isExperiencesInView = useInView(experiencesRef, { once: true, margin: "-10%" });

  const eventsRef = useRef(null);
  const isEventsInView = useInView(eventsRef, { once: true, margin: "-10%" });

  const sustainabilityRef = useRef(null);
  const isSustainabilityInView = useInView(sustainabilityRef, { once: true, margin: "-10%" });

  const bookRef = useRef(null);
  const isBookInView = useInView(bookRef, { once: true, margin: "-10%" });

  const MotionLink = motion(Link);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-[#f8fafc] text-gray-800">
      {/* HERO */}
      <header className="relative">
        <div className="relative h-[60vh] md:h-[72vh] lg:h-[78vh] w-full overflow-hidden rounded-b-3xl shadow-2xl">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full w-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
              alt="mountain resort"
              fill
              className="object-cover brightness-90"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>

          <div className="absolute inset-0 flex items-end md:items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl text-center text-white"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Ghar Basai — A Luxury Mountain Retreat
              </motion.h1>
              <motion.p 
                className="mt-4 text-sm sm:text-base md:text-lg opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Where nature meets curated luxury. Panoramic views, sustainable design and
                personalised service.
              </motion.p>

              <motion.div 
                className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
           <MotionLink
      href="/hotel/family"
      className="inline-flex items-center gap-3 bg-white/90 text-slate-900 px-5 py-3 rounded-full font-medium shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      Book your stay
    </MotionLink>
               <MotionLink
      href="/gallery"
      className="inline-flex items-center gap-3 text-white border border-white/30 px-5 py-3 rounded-full font-medium hover:bg-white/5 transition"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
      whileTap={{ scale: 0.98 }}
    >
      Explore experiences
    </MotionLink>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* floating quick-info cards */}
        <div className="container mx-auto -mt-12 px-4 md:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <QuickCard
                title="Infinity Pool"
                subtitle="Overlooking the valley"
                imgUrl="https://images.unsplash.com/photo-1492117594786-f6256358fcdc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <QuickCard
                title="Panoramic mountain"
                subtitle="A Tapestry of Stone and Sky"
                imgUrl="https://plus.unsplash.com/premium_photo-1700325233962-b2c0ce478ac5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <QuickCard
                title="Gourmet Dining"
                subtitle="Rooftop & farm-to-table"
                imgUrl="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <QuickCard
                title="Adventure"
                subtitle="Guided hikes & cycling"
                imgUrl="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
              />
            </motion.div>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* FEATURES GRID */}
        <section className="mb-12" ref={featuresRef}>
          <motion.div 
            className="flex items-center justify-between mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">What makes Ghar Basai special</h2>
              <p className="mt-1 text-sm text-slate-600">Curated luxury, sustainably designed.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-slate-500">
              <Sparkles size={18} /> <span className="text-sm">New concept: "Nature-First Luxury"</span>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate={isFeaturesInView ? "animate" : "initial"}
          >
            {features.map((f, index) => (
              <motion.div
                key={f.title}
                variants={fadeIn}
                className="p-5 bg-white rounded-2xl shadow hover:shadow-md border border-slate-100"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 bg-indigo-50 rounded-lg"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <f.icon size={20} className="text-indigo-600" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="text-sm mt-1 text-slate-600">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ACCOMMODATION */}
        <section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" ref={accommodationRef}>
          <motion.div 
            className="lg:col-span-2 bg-white rounded-2xl shadow p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isAccommodationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-3">Luxury Accommodation</h3>
            <p className="text-sm text-slate-600 mb-4">
              Spacious villas and suites with private balconies, premium interiors using local
              materials and smart in-room technology for personalised comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isAccommodationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AccommodationCard
                  title="Forest Villa"
                  features={["Private terrace", "2 bedrooms", "Mountain view", "Butler service"]}
                  imgUrl="https://images.unsplash.com/photo-1731432248366-2ad55dc90287?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isAccommodationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AccommodationCard
                  title="Pool Suite"
                  features={["Direct pool access", "Open-plan living", "Private plunge pool"]}
                  imgUrl="https://images.unsplash.com/photo-1668260527190-3e5d148d7947?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isAccommodationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <AccommodationCard
                  title="Greenery Views"
                  features={["Greenery & Eco Spaces","Cultural Experiences","Sustainability & Eco-Friendly Practices"]}
                  imgUrl="https://images.unsplash.com/photo-1657740536185-75c2b1ffc387?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isAccommodationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AccommodationCard
                  title="Panoramic River"
                  features={["Riverside Dining","River Adventure Activities","Sunset by the River"]}
                  imgUrl="https://plus.unsplash.com/premium_photo-1697730189021-af97c7f98ac7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isAccommodationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg">Quick Details</h4>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              {[
                { icon: Calendar, text: "Check-in: 2:00 PM" },
                { icon: Clock, text: "Check-out: 12:00 PM" },
                { icon: Bus, text: "Shuttle to nearest airport & station" },
                { icon: Baby, text: "Child friendly" },
                { icon: Dog, text: "Pet friendly on request" },
                { icon: Wifi, text: "Free High-Speed Wi-Fi" },
                { icon: Car, text: "Free Parking" },
                { icon: Utensils, text: "Complimentary Breakfast" },
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={isAccommodationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <item.icon className="w-4 h-4 text-indigo-600" />
                  {item.text}
                </motion.li>
              ))}
            </ul>

            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isAccommodationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.a
                className="w-full inline-block text-center bg-indigo-600 text-white px-4 py-3 rounded-lg font-medium shadow hover:bg-indigo-700 transition"
                href="#book"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Reserve a Villa
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* DINING & SPA */}
   
<section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6" ref={diningRef}>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isDiningInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.6 }}
  >
    <Link href="/gallery" className="block">
      <CardWithMedia
        title="World-class Dining"
        text="Multi-cuisine restaurant, rooftop fine dining, open-air café and organic farm-to-table menus curated by master chefs."
        imgUrl="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=60"
        ctaText="See menus"
      />
    </Link>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isDiningInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <Link href="/gallery" className="block">
      <CardWithMedia
        title="Spa & Wellness"
        text="Traditional Ayurveda combined with modern wellness. Yoga pavilion and personalised wellbeing retreats."
        imgUrl="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=60"
        ctaText="Book a treatment"
      />
    </Link>
  </motion.div>
</section>


        {/* POOL & EXPERIENCES + EVENTS */}
        <section id="experiences" className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6" ref={experiencesRef}>
          <motion.div 
            className="lg:col-span-2 bg-white rounded-2xl shadow p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isExperiencesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bold text-lg mb-3">Pool, Recreation & Experiences</h3>
            <p className="text-sm text-slate-600 mb-4">Infinity pool, adventure packages, guided nature walks and cultural evenings.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Infinity Pool", subtitle: "Sunset swims", imgUrl: "https://images.unsplash.com/photo-1492117594786-f6256358fcdc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { title: "Guided Trek", subtitle: "Nature trails", imgUrl: "https://images.unsplash.com/photo-1712562008492-f8a349f19fe5?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { title: "Campfire Nights", subtitle: "Local stories & music", imgUrl: "https://images.unsplash.com/photo-1647825809981-68726f0288ea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { title: "Cultural Workshops", subtitle: "Local crafts", imgUrl: "https://plus.unsplash.com/premium_photo-1683121107354-804160f78eb8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { title: "Evening at mountain", subtitle: "Stunning views", imgUrl: "https://images.unsplash.com/photo-1561207679-d77c9cbc86e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                { title: "Local Cuisine", subtitle: "Authentic flavors", imgUrl: "https://plus.unsplash.com/premium_photo-1664297751925-d8dd9a2fdc24?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isExperiencesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ExperienceCard 
                    title={item.title} 
                    subtitle={item.subtitle} 
                    imgUrl={item.imgUrl} 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={isEventsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            ref={eventsRef}
          >
            <motion.h4 
              className="text-xl font-semibold text-gray-800 flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isEventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z" />
              </svg>
              Events & Banquets
            </motion.h4>

            <motion.p 
              className="text-sm text-slate-600 mt-2 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isEventsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Host unforgettable events with our premium indoor and outdoor venues. Whether you're planning a wedding, conference, birthday, or gala — our dedicated team will help craft the perfect experience.
            </motion.p>

            <motion.div 
              className="mt-6 space-y-4"
              variants={staggerContainer}
              initial="initial"
              animate={isEventsInView ? "animate" : "initial"}
            >
              {/* Banquet Hall */}
              <motion.div 
                className="flex items-start gap-4 text-sm"
                variants={fadeIn}
              >
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <div className="flex justify-between w-full">
                  <div>
                    <span className="text-gray-700 font-medium block">Banquet Hall</span>
                    <span className="text-gray-500 text-xs">Elegant indoor venue with lighting and AV setup</span>
                  </div>
                  <span className="text-gray-600 font-medium">Up to 250 guests</span>
                </div>
              </motion.div>

              {/* Outdoor Lawn */}
              <motion.div 
                className="flex items-start gap-4 text-sm"
                variants={fadeIn}
              >
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 00-6 18l6-4 6 4a10 10 0 00-6-18z" />
                  </svg>
                </div>
                <div className="flex justify-between w-full">
                  <div>
                    <span className="text-gray-700 font-medium block">Outdoor Lawn</span>
                    <span className="text-gray-500 text-xs">Scenic garden space perfect for weddings and open-air events</span>
                  </div>
                  <span className="text-gray-600 font-medium">Up to 500 guests</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={isEventsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Ideal For:</h5>
              <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                {["Weddings", "Corporate Retreats", "Product Launches", "Birthday Parties", "Workshops"].map((item, index) => (
                  <motion.span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isEventsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={isEventsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Included Amenities:</h5>
              <ul className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                {[
                  "High-Speed Wi-Fi",
                  "Audio/Visual Equipment",
                  "On-site Parking",
                  "Catering & Beverage Service",
                  "Event Coordinator"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={isEventsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                  >
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2l4 -4" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="mt-6 text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={isEventsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <p>
                We offer <span className="font-semibold text-gray-800">customizable packages</span> to fit your budget and event needs. From intimate ceremonies to grand receptions, our team is here to bring your vision to life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isEventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 1.1 }}
            >
               {/* <motion.a 
                href="#contact" 
                className="mt-6 inline-block text-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-lg font-medium transition duration-200 w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Events Team
              </motion.a>  */}

              <Link href="/contact" className="mt-6 inline-block text-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-lg font-medium transition duration-200 w-full sm:w-auto">
  Contact Events Team
</Link>


 
            </motion.div>
          </motion.div>
        </section>

        {/* SUSTAINABILITY + SAFETY */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6" ref={sustainabilityRef}>
          <motion.div 
            className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-6 shadow"
            initial={{ opacity: 0, x: -20 }}
            animate={isSustainabilityInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-bold">Sustainability</h4>
            <p className="text-sm text-slate-600 mt-2">Designed with a low carbon footprint: solar energy, water recycling and locally sourced materials.</p>
            <ul className="mt-3 text-sm text-slate-600 space-y-2">
              {[
                "Rainwater harvesting",
                "Solar panels & energy-efficient lighting",
                "On-site organic kitchen garden",
                "Zero single-use plastics"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isSustainabilityInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  • {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-6 shadow"
            initial={{ opacity: 0, x: 20 }}
            animate={isSustainabilityInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold">Safety & Comfort</h4>
            <p className="text-sm text-slate-600 mt-2">24/7 trained staff, CCTV, on-site doctor and transport coordination.</p>
            <ul className="mt-3 text-sm text-slate-600 space-y-2">
              {[
                "24/7 security & CCTV",
                "Medical facilities & emergency response",
                "Shuttle & pickup services"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isSustainabilityInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  • {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* CTA / BOOKING */}
        <section id="book" className="mb-12" ref={bookRef}>
          <motion.div 
            className="bg-indigo-700 text-white rounded-3xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isBookInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold">Ready for an unforgettable stay?</h3>
              <p className="mt-2 text-sm text-indigo-100/90">Contact our concierge for personalised packages and experiences.</p>
            </div>
            <div className="flex gap-3">
            <MotionLink
      href="/contact"
      className="inline-block bg-white text-indigo-700 px-5 py-3 rounded-full font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      Contact Concierge
    </MotionLink>
              <MotionLink 
                href="/hotel/luxury" 
                className="inline-block border border-white/25 px-5 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                View Packages
              </MotionLink>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

function QuickCard({ title, subtitle, imgUrl }) {
  return (
    <motion.div 
      className="relative rounded-xl overflow-hidden shadow-lg h-36 bg-white"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image src={imgUrl} alt={title} fill className="object-cover brightness-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"></div>
      <div className="absolute left-4 bottom-4 text-white">
        <h5 className="font-semibold">{title}</h5>
        <p className="text-xs opacity-90">{subtitle}</p>
      </div>
    </motion.div>
  );
}

function AccommodationCard({ title, features, imgUrl }) {
  return (
    <motion.div 
      className="flex gap-4 items-stretch bg-white rounded-xl shadow p-3"
      whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
        <Image src={imgUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <h5 className="font-semibold">{title}</h5>
        <ul className="text-sm text-slate-600 mt-2">
          {features.map((f) => (
            <li key={f}>• {f}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function CardWithMedia({ title, text, imgUrl, ctaText }) {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow overflow-hidden flex flex-col md:flex-row"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="md:w-1/2 p-6">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-slate-600 mt-2">{text}</p>
        <div className="mt-4">
          {/* <motion.a 
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
          </motion.a> */}
        </div>
      </div>
      <div className="relative md:w-1/2 h-44 md:h-auto">
        <Image src={imgUrl} alt={title} fill className="object-cover" />
      </div>
    </motion.div>
  );
}

function ExperienceCard({ title, subtitle, imgUrl }) {
  return (
    <motion.div 
      className="rounded-xl overflow-hidden bg-white shadow"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-36">
        <Image src={imgUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h5 className="font-semibold">{title}</h5>
        <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
      </div>
    </motion.div>
  );
}