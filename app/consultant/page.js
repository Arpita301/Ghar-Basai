"use client";

import { Phone, Mail, MapPin, Calendar, User, Home } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ConsultationPage() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    currentCity: "",
    destinationCity: "",
    date: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted Data:", formData);

    Swal.fire({
      icon: "success",
      title: "Consultation Booked!",
      text: "Your free consultation has been successfully booked.",
      confirmButtonColor: "#059669", // emerald-600
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      currentCity: "",
      destinationCity: "",
      date: "",
    });
  };

  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <br />
          <br />
          <br />
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Book Your Free Consultation
          </motion.h1>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Plan your move with <span className="font-semibold">Ghar Basai</span>. 
            Get expert advice, cost estimation, and stress-free shifting solutions — 
            all for free and tailored to your needs.
          </motion.p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="bg-gray-50 p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Fill Your Details
          </h2>
          <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <div className="flex items-center border rounded-xl px-3 bg-white">
                <User className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full py-2 outline-none"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <div className="flex items-center border rounded-xl px-3 bg-white">
                <Phone className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full py-2 outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="flex items-center border rounded-xl px-3 bg-white">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full py-2 outline-none"
                  required
                />
              </div>
            </div>

            {/* Current City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current City
              </label>
              <div className="flex items-center border rounded-xl px-3 bg-white">
                <Home className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  name="currentCity"
                  value={formData.currentCity}
                  onChange={handleChange}
                  placeholder="Where are you moving from?"
                  className="w-full py-2 outline-none"
                  required
                />
              </div>
            </div>

            {/* Destination City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination City
              </label>
              <div className="flex items-center border rounded-xl px-3 bg-white">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  name="destinationCity"
                  value={formData.destinationCity}
                  onChange={handleChange}
                  placeholder="Where are you moving to?"
                  className="w-full py-2 outline-none"
                  required
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <div className="flex items-center border rounded-xl px-3 bg-white">
                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full py-2 outline-none"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.div
              className="md:col-span-2 text-center mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <button
                type="submit"
                className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-700 hover:shadow-xl transition"
              >
                Book Free Consultation
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Back Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-emerald-700 font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
