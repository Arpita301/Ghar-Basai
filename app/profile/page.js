"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

import { User, Calendar, Laptop, LogOut, Edit2, ChevronDown } from 'lucide-react';
import { usePathname } from "next/navigation";
const page = () => {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    maritalStatus: '',
    nationality: '',
    city: '',
    state: '',
    phone: '',
    email: '',
    passportNo: '',
    expiryDate: '',
    issuingCountry: '',
    panCard: '',
    domesticPlan: '',
    internationalPlan: ''
  });

  const navItems = [
    { id: 'profile', icon: User, label: 'My Profile', href: '/profile' },
    { id: 'bookings', icon: Calendar, label: 'Bookings', href: '/booking' },
    { id: 'devices', icon: Laptop, label: 'Logged in Devices', href: '/device' },
    { id: 'logout', icon: LogOut, label: 'Logout', href: '/logout' }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <>
    <section className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/hoteldetailspage.png" // 👈 replace with your image path
        alt="My Account Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl  tracking-wide">
          My Account
        </h1>
      </div>
    </section>

    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 rounded-3xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105">
              <nav className="space-y-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl
                      text-white font-medium transition-all duration-300
                      transform hover:scale-105 hover:translate-x-2
                      ${
                        isActive
                          ? "bg-white/30 backdrop-blur-lg shadow-lg"
                          : "bg-white/10 hover:bg-white/20"
                      }`}
                    style={{
                      animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-left flex-1">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 transform transition-all duration-500 hover:shadow-3xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-pulse">
                  My Profile
                </h1>
                <button className="p-3 rounded-full bg-purple-100 hover:bg-purple-200 transition-all duration-300 transform hover:rotate-12 hover:scale-110">
                  <Edit2 className="w-5 h-5 text-purple-600" />
                </button>
              </div>

              {/* General Information */}
              <div className="mb-8 animate-fadeIn">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">General Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Ram"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none"
                      style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                    />
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none"
                      style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                    />
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Seth"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none"
                      style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                    />
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none appearance-none"
                        style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none"
                      style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                    />
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Marital Status<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none appearance-none"
                        style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                      >
                        <option value="">Married</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationality<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none appearance-none"
                        style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                      >
                        <option value="">India</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City of Residence<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none appearance-none"
                        style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                      >
                        <option value="">Kolkata</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none appearance-none"
                        style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                      >
                        <option value="">West Bengal</option>
                        <option value="west-bengal">West Bengal</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="delhi">Delhi</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none"
                      style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                    />
                  </div>
                  <div className="md:col-span-2 transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="johnsmith123@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none"
                      style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Documents Details */}
              <div className="mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Documents Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Passport No.<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="passportNo"
                      placeholder="SN1234567"
                      value={formData.passportNo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none"
                      style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                    />
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none"
                      style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                    />
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Issuing Country<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="issuingCountry"
                        value={formData.issuingCountry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none appearance-none"
                        style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                      >
                        <option value="">India</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pan Card Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="panCard"
                      placeholder="DAHI5430P"
                      value={formData.panCard}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none"
                      style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Your Preferences */}
              <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Preferences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Domestic Trip Protection Plan
                    </label>
                    <div className="relative">
                      <select
                        name="domesticPlan"
                        value={formData.domesticPlan}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none appearance-none"
                        style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                      >
                        <option value="">Domestic Points</option>
                        <option value="basic">Basic Plan</option>
                        <option value="premium">Premium Plan</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-300 hover:scale-105">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      International Travel Insurance Plan
                    </label>
                    <div className="relative">
                      <select
                        name="internationalPlan"
                        value={formData.internationalPlan}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-full focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 outline-none appearance-none"
                        style={{ backgroundColor: 'rgba(240, 241, 255, 1)', border: '1px solid rgba(190, 190, 190, 1)' }}
                      >
                        <option value="">International Points</option>
                        <option value="basic">Basic Plan</option>
                        <option value="premium">Premium Plan</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out both;
        }
      `}</style>
    </div>

    </>
  );
};

export default page;
