"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomPackageAdvanced() {
  const [destinations, setDestinations] = useState([]);
  const [destinationInput, setDestinationInput] = useState("Goa");
  const [dates, setDates] = useState({ from: "", to: "" });
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [hotel, setHotel] = useState("standard");
  const [room, setRoom] = useState("double");
  const [budget, setBudget] = useState(50000);
  const [transport, setTransport] = useState("flight");
  const [duration, setDuration] = useState("5 Nights / 6 Days");
  const [meal, setMeal] = useState("breakfast");
  const [activities, setActivities] = useState([]);
  const [activeTab, setActiveTab] = useState("domestic");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const allDestinations = {
    domestic: [
      "Digha"," Mandarmani","Shantiniketan","puri","Goa", "Kerala", "Rajasthan", "Himachal", "Andaman", "Darjeeling", "Tarkarli, Maharashtra","Ooty","Rishikesh, Uttarakhand","Coorg","Jaipur","Pandicherry",
      "Varanasi", "Mumbai", "Delhi", "Chennai", "Kashmir", "Leh-Ladakh"
    ],
    international: [
      "Maldives", "Bali", "Dubai", "Singapore", "Paris", "Switzerland",
      "Thailand", "London", "New York", "Tokyo", "Sydney", "Barcelona"
    ]
  };

  const toggleActivity = (a) => {
    setActivities((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    );
  };

  const addDestination = () => {
    if (destinationInput && !destinations.includes(destinationInput)) {
      setDestinations((d) => [...d, destinationInput]);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // budget-based destination recommendations
  const budgetSuggestions = {
    domestic: [
      { range: [5000, 8000], places: ["Digha", "Mandarmani", "Shantiniketan"] },
      { range: [9000, 15000], places: ["Puri", "Darjeeling", "Vizag"] },
      { range: [16000, 25000], places: ["Kerala", "Rajasthan", "Himachal"] },
      { range: [26000, 40000], places: ["Goa", "Andaman", "Kashmir"] },
    ],
    international: [
      { range: [30000, 50000], places: ["Bangkok", "Dubai", "Singapore"] },
      { range: [51000, 80000], places: ["Bali", "Maldives"] },
      { range: [81000, 120000], places: ["Europe Tour (Paris, Switzerland)"] },
      { range: [121000, 200000], places: ["USA East Coast", "Australia"] },
    ],
  };

  const suggestedPlaces = useMemo(() => {
    const dom = budgetSuggestions.domestic.find(
      (b) => budget >= b.range[0] && budget <= b.range[1]
    )?.places || [];

    const intl = budgetSuggestions.international.find(
      (b) => budget >= b.range[0] && budget <= b.range[1]
    )?.places || [];

    return { domestic: dom, international: intl };
  }, [budget]);

  // estimate formula
  const estimate = useMemo(() => {
    const base =
      hotel === "luxury" ? 8000 : hotel === "standard" ? 5000 : 3000;
    const roomMultiplier =
      room === "single" ? 0.7 : room === "double" ? 1 : 1.5;
    const pax = adults + children * 0.5 + infants * 0.2;
    const activityCost = activities.length * 1500;
    return Math.round(base * pax * 2 * roomMultiplier + activityCost);
  }, [hotel, adults, children, infants, room, activities]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would submit the data to a server here
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 sm:p-6 md:p-10">
     <br />
     <br />
     <br />

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
            ✈ Build Your Dream Vacation
          </h1>
          <p className="text-gray-400">Customize every aspect of your perfect getaway</p>
        </motion.div>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-emerald-500 text-black px-6 py-3 rounded-lg shadow-lg font-medium"
            >
              ✅ Your request has been submitted! We'll contact you shortly.
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 space-y-6 shadow-xl border border-gray-700/30"
          >
            <motion.h2 variants={itemVariants} className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 p-2 rounded-lg">📝</span>
              Customize Your Package
            </motion.h2>

            {/* Destination selector */}
            <motion.div variants={itemVariants} className="space-y-2">
              <label className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Destinations
              </label>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <select
                    value={destinationInput}
                    onChange={(e) => setDestinationInput(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 focus:ring-2 focus:ring-emerald-400 focus:border-transparent appearance-none"
                  >
                    <optgroup label="Domestic">
                      {allDestinations.domestic.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </optgroup>
                    <optgroup label="International">
                      {allDestinations.international.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </optgroup>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={addDestination}
                  className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-xl flex items-center gap-2"
                >
                  Add <span className="text-lg">+</span>
                </motion.button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <AnimatePresence>
                  {destinations.map((d, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() =>
                        setDestinations(destinations.filter((_, idx) => idx !== i))
                      }
                      className="px-3 py-1 rounded-full bg-gray-700/70 text-sm flex items-center gap-1 hover:bg-red-500/20 transition-colors"
                    >
                      {d} <span className="text-red-400">✕</span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Dates */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  From
                </label>
                <input
                  type="date"
                  value={dates.from}
                  onChange={(e) =>
                    setDates((s) => ({ ...s, from: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 focus:ring-2 focus:ring-emerald-400 focus:border-transparent mt-1"
                />
              </div>
              <div>
                <label className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                  To
                </label>
                <input
                  type="date"
                  value={dates.to}
                  onChange={(e) =>
                    setDates((s) => ({ ...s, to: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 focus:ring-2 focus:ring-emerald-400 focus:border-transparent mt-1"
                />
              </div>
            </motion.div>

            {/* Duration */}
            <motion.div variants={itemVariants}>
              <label className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 focus:ring-2 focus:ring-emerald-400 focus:border-transparent mt-1"
              >
                <option>3 Nights / 4 Days</option>
                <option>5 Nights / 6 Days</option>
                <option>7 Nights / 8 Days</option>
                <option>10 Nights / 11 Days</option>
              </select>
            </motion.div>

            {/* Travelers */}
            <motion.div variants={itemVariants}>
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Travelers
              </label>
              <div className="flex gap-4">
                {[
                  { label: "Adults", value: adults, setter: setAdults, min: 1 },
                  { label: "Children", value: children, setter: setChildren, min: 0 },
                  { label: "Infants", value: infants, setter: setInfants, min: 0 }
                ].map((item, index) => (
                  <div key={index} className="flex-1">
                    <label className="block text-xs text-gray-400 mb-1">{item.label}</label>
                    <div className="flex items-center bg-gray-700/50 rounded-xl overflow-hidden">
                      <button 
                        onClick={() => item.setter(Math.max(item.min, item.value - 1))}
                        className="px-3 py-2 bg-gray-600/50 hover:bg-gray-600 transition-colors"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min={item.min}
                        value={item.value}
                        onChange={(e) => item.setter(Number(e.target.value))}
                        className="w-12 text-center bg-transparent border-0 focus:ring-0"
                      />
                      <button 
                        onClick={() => item.setter(item.value + 1)}
                        className="px-3 py-2 bg-gray-600/50 hover:bg-gray-600 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hotel */}
            <motion.div variants={itemVariants}>
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Hotel Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["budget", "standard", "luxury"].map((c) => (
                  <motion.button
                    key={c}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setHotel(c)}
                    className={`px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                      hotel === c 
                        ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-black shadow-lg" 
                        : "bg-gray-700/50 hover:bg-gray-700"
                    }`}
                  >
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Room */}
            <motion.div variants={itemVariants}>
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Room Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["single", "double", "family"].map((c) => (
                  <motion.button
                    key={c}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setRoom(c)}
                    className={`px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                      room === c 
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg" 
                        : "bg-gray-700/50 hover:bg-gray-700"
                    }`}
                  >
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Transport */}
            <motion.div variants={itemVariants}>
              <label className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Transport
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {[
                  { value: "flight", label: "Flight", icon: "✈️" },
                  { value: "train", label: "Train", icon: "🚆" },
                  { value: "bus", label: "Bus", icon: "🚌" },
                  { value: "car", label: "Car", icon: "🚗" }
                ].map((t) => (
                  <motion.button
                    key={t.value}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setTransport(t.value)}
                    className={`px-3 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all ${
                      transport === t.value 
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-lg" 
                        : "bg-gray-700/50 hover:bg-gray-700"
                    }`}
                  >
                    <span>{t.icon}</span> {t.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Meal Plan */}
            <motion.div variants={itemVariants}>
              <label className="text-sm text-gray-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Meal Plan
              </label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {[
                  { value: "breakfast", label: "Breakfast" },
                  { value: "half", label: "Half Board" },
                  { value: "full", label: "Full Board" }
                ].map((m) => (
                  <motion.button
                    key={m.value}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setMeal(m.value)}
                    className={`px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                      meal === m.value 
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-black shadow-lg" 
                        : "bg-gray-700/50 hover:bg-gray-700"
                    }`}
                  >
                    {m.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Activities */}
            <motion.div variants={itemVariants}>
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Activities
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Sightseeing", "Adventure Sports", "Wellness & Spa", "Shopping"].map((a) => (
                  <motion.button
                    key={a}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => toggleActivity(a)}
                    className={`px-3 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                      activities.includes(a) 
                        ? "bg-gradient-to-r from-pink-500 to-rose-500 text-black shadow-lg" 
                        : "bg-gray-700/50 hover:bg-gray-700"
                    }`}
                  >
                    {activities.includes(a) ? "✓" : ""} {a}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Budget */}
            <motion.div variants={itemVariants}>
              <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Budget Range: ₹{budget.toLocaleString()}
              </label>
              <input
                type="range"
                min={5000}
                max={200000}
                step={1000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-emerald-400 [&::-webkit-slider-thumb]:to-cyan-400"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>₹5,000</span>
                <span>₹2,00,000</span>
              </div>
            </motion.div>

            {/* Suggested Destinations */}
            <motion.div variants={itemVariants} className="mt-4 p-4 bg-gray-800/30 rounded-xl">
              <h3 className="text-sm font-semibold text-emerald-300 mb-3 flex items-center gap-2">
                <span className="text-lg">🌍</span> Suggested Destinations for Your Budget
              </h3>
              <div className="flex gap-2 mb-3">
                <button 
                  onClick={() => setActiveTab("domestic")}
                  className={`px-3 py-1 rounded-full text-xs ${activeTab === "domestic" ? "bg-emerald-500 text-black" : "bg-gray-700"}`}
                >
                  Domestic
                </button>
                <button 
                  onClick={() => setActiveTab("international")}
                  className={`px-3 py-1 rounded-full text-xs ${activeTab === "international" ? "bg-emerald-500 text-black" : "bg-gray-700"}`}
                >
                  International
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestedPlaces[activeTab].length > 0 ? (
                  suggestedPlaces[activeTab].map((place, index) => (
                    <motion.span 
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full text-xs border border-emerald-500/20"
                    >
                      {place}
                    </motion.span>
                  ))
                ) : (
                  <span className="text-gray-400 text-sm">No suggestions for this budget range</span>
                )}
              </div>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="w-full py-4 mt-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2"
            >
              Request Custom Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </motion.button>
          </motion.section>

          {/* Preview */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/70 to-gray-900/50 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-700/30 h-fit sticky top-6"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-semibold mb-6 flex items-center gap-2"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 p-2 rounded-lg">📋</span>
              Package Preview
            </motion.h2>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {[
                { icon: "🌍", label: "Destinations", value: destinations.join(", ") || "—" },
                { icon: "📅", label: "Dates", value: `${dates.from || "—"} → ${dates.to || "—"}` },
                { icon: "⏳", label: "Duration", value: duration },
                { icon: "👨‍👩‍👧", label: "Travelers", value: `${adults}A, ${children}C, ${infants}I` },
                { icon: "🏨", label: "Hotel", value: `${hotel} (${room})` },
                { icon: "🚌", label: "Transport", value: transport },
                { icon: "🍴", label: "Meal", value: meal },
                { icon: "🎯", label: "Activities", value: activities.length > 0 ? activities.join(", ") : "—" },
                { icon: "💰", label: "Budget", value: `₹${budget.toLocaleString()}`, highlight: true },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 py-2 border-b border-gray-700/30 last:border-0"
                >
                  <span className="text-xl mt-1">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className={`font-medium ${item.highlight ? "text-amber-300" : ""}`}>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 text-center"
            >
              <p className="text-xs text-emerald-300 uppercase tracking-wider font-semibold mb-2">
                Estimated Cost
              </p>
              <p className="text-3xl font-bold text-emerald-400 mb-2">
                ₹{estimate.toLocaleString()}
              </p>
              <div className="h-2 bg-emerald-500/20 rounded-full overflow-hidden mt-3">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (estimate / budget) * 100)}%` }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                {estimate <= budget ? "Within your budget" : "Over your budget"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-center text-xs text-gray-500"
            >
              <p>Your personalized itinerary will be prepared within 24 hours</p>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}