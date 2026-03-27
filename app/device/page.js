"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { User, Calendar, Laptop, LogOut, Edit2, ChevronDown, Smartphone, Monitor } from 'lucide-react';

const page = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { id: 'profile', icon: User, label: 'My Profile', href: '/profile' },
    { id: 'bookings', icon: Calendar, label: 'Bookings', href: '/booking' },
    { id: 'devices', icon: Laptop, label: 'Logged in Devices', href: '/device' },
    { id: 'logout', icon: LogOut, label: 'Logout', href: '/logout' }
  ];

  return (
    <>
      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.6);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, 
            rgba(147, 51, 234, 0) 0%, 
            rgba(147, 51, 234, 0.2) 50%, 
            rgba(147, 51, 234, 0) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite linear;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .stagger-children > * {
          opacity: 0;
          animation: fadeInUp 0.5s ease-out forwards;
        }
        
        .sidebar-item-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .sidebar-item-hover:hover {
          transform: translateX(8px) scale(1.02);
          box-shadow: 0 10px 25px -5px rgba(147, 51, 234, 0.4);
        }
        
        .device-card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .device-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(147, 51, 234, 0.2);
        }
      `}</style>

      <section className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <Image
            src="/hoteldetailspage.png"
            alt="My Account Banner"
            fill
            priority
            className="object-cover scale-105 animate-float"
            style={{ animationDuration: '20s' }}
          />
        </div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/60 animate-shimmer"></div>

        {/* Content with Animation */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide animate-fade-in-up">
            My Account
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="w-full min-h-screen bg-gray-50 py-14 px-4 animate-fade-in-up delay-100">
        <div className="max-w-7xl mx-auto bg-white rounded-[28px] border border-purple-400 p-6 md:p-10 transform transition-all duration-500 hover:shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-44">

            {/* ================= ANIMATED SIDEBAR ================= */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 rounded-3xl p-6 shadow-2xl animate-pulse-glow transform transition-all duration-500 hover:scale-105">
                <button 
                  className="md:hidden w-full mb-4 flex items-center justify-between text-white p-3 bg-white/20 rounded-xl"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <span>Navigation Menu</span>
                  <ChevronDown className={`transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <nav className={`space-y-3 ${sidebarOpen ? 'block' : 'hidden md:block'}`}>
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={`sidebar-item-hover w-full flex items-center gap-4 px-6 py-4 rounded-2xl
                          text-white font-medium transition-all duration-300
                          ${isActive
                            ? "bg-white/30 backdrop-blur-lg shadow-lg scale-105"
                            : "bg-white/10"
                          }`}
                        style={{
                          animation: `slideInLeft 0.5s ease-out ${index * 0.1}s both`,
                          opacity: mounted ? 1 : 0,
                          transform: mounted ? 'translateX(0)' : 'translateX(-20px)'
                        }}
                      >
                        <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                        <span className="text-left flex-1">{item.label}</span>
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* ================= ANIMATED RIGHT CONTENT ================= */}
            <div className="md:col-span-3 border rounded-[24px] p-6 animate-slide-in-right delay-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-purple-600 flex items-center gap-2">
                  <Laptop className="w-5 h-5 animate-pulse" />
                  Logged In Devices
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-500 animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Active Sessions
                </div>
              </div>

              <div className="space-y-4 stagger-children">
                {/* Animated Device Cards */}
                <DeviceCard
                  image="/computer.png"
                  title="Chrome (Current device)"
                  location="Desktop Web, Kolkata, INDIA"
                  time="Logged in since 9:51 pm, 5th Dec '25"
                  current
                  delay={0}
                />

                <DeviceCard
                  image="/android.png"
                  title="Android Device"
                  location="Kolkata, INDIA"
                  time="Logged in since 9:51 pm, 5th Dec '25"
                  delay={0.1}
                />

              
              </div>

              {/* Animated Info Box */}
              <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200 animate-fade-in-up delay-400">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center animate-pulse">
                    <Smartphone className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-900">
                      Device Management
                    </p>
                    <p className="text-xs text-purple-700 mt-1">
                      You can sign out of inactive devices to keep your account secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function DeviceCard({ image, title, location, time, current, delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`device-card-hover flex items-center gap-4 border rounded-xl p-4 relative overflow-hidden
        ${current ? 'border-purple-300 bg-gradient-to-r from-purple-50 to-white' : 'border-gray-200'}`}
      style={{
        animation: `fadeInUp 0.5s ease-out ${delay}s both`,
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 animate-shimmer"></div>
      )}
      
      {/* Device Icon with Animation */}
      <div className={`relative flex-shrink-0 ${isHovered ? 'animate-float' : ''}`}>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-2">
          <Image
            src={image}
            alt={title}
            width={24}
            height={24}
            className="transition-transform duration-300"
            style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          />
        </div>
        {current && (
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white animate-pulse"></div>
        )}
      </div>

      {/* Device Info */}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="font-medium text-gray-900 flex items-center gap-2">
            {title}
            {current && (
              <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full animate-pulse">
                ● Active Now
              </span>
            )}
          </p>
          {isHovered && (
            <Monitor className="w-4 h-4 text-purple-500 animate-pulse" />
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-gray-400"></span>
          {location}
        </p>
        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          {time}
        </p>
      </div>

      {/* Action Button with Animation */}
      <button
        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform
          ${current
            ? 'text-purple-600 bg-purple-100 hover:bg-purple-200 hover:scale-105'
            : 'text-gray-600 bg-gray-100 hover:bg-gray-200 hover:scale-105'
          }`}
      >
        {current ? 'Active' : 'Sign Out'}
      </button>

      {/* Connection line animation */}
      {current && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 animate-shimmer"></div>
      )}
    </div>
  );
}

export default page;