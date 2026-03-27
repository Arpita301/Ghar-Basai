"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Calendar, Laptop, LogOut, Edit2, ChevronDown } from 'lucide-react';
const Page = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("all"); // all | ongoing | past

  const navItems = [
    { id: 'profile', icon: User, label: 'My Profile', href: '/profile' },
    { id: 'bookings', icon: Calendar, label: 'Bookings', href: '/booking' },
    { id: 'devices', icon: Laptop, label: 'Logged in Devices', href: '/device' },
    { id: 'logout', icon: LogOut, label: 'Logout', href: '/logout' }
  ];

  return (
    <>
      <style jsx global>{`
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
        @keyframes shimmerPulse {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        @keyframes floatUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      {/* ================= BANNER ================= */}
      <section className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] overflow-hidden">
        <Image
          src="/hoteldetailspage.png"
          alt="My Account Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide animate-floatUp"
              style={{ animation: 'floatUp 0.8s ease-out' }}>
            My Account
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="w-full min-h-screen bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-[28px] border border-purple-400 p-6 md:p-10 animate-floatUp"
             style={{ animation: 'floatUp 1s ease-out 0.2s both' }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-34">

            {/* ================= SIDEBAR ================= */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 rounded-3xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105 animate-gradientFlow"
                   style={{ 
                     backgroundSize: '200% 200%',
                     animation: 'gradientFlow 3s ease infinite'
                   }}>
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

            {/* ================= RIGHT CONTENT ================= */}
            <div className="md:col-span-3 border rounded-[24px] p-6">

              {/* ================= TABS ================= */}
              <div className="flex gap-6 border-b pb-4 mb-6 text-sm font-medium">
                <Tab label="All Bookings" active={activeTab === "all"} onClick={() => setActiveTab("all")} />
                <Tab label="Ongoing & Upcoming" active={activeTab === "ongoing"} onClick={() => setActiveTab("ongoing")} />
                <Tab label="Past & Cancelled" active={activeTab === "past"} onClick={() => setActiveTab("past")} />
              </div>

              {/* ================= TAB CONTENT ================= */}
              {activeTab === "all" && <BookingCard />}

              {activeTab === "ongoing" && (
                <EmptyState
                  title="No Ongoing or Upcoming Bookings"
                  description="You currently don't have any upcoming stays."
                />
              )}

              {activeTab === "past" && (
                <EmptyState
                  title="No Past or Cancelled Bookings"
                  description="Your completed or cancelled bookings will appear here."
                />
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

/* ================= COMPONENTS ================= */

function SidebarItem({ label, href, active }) {
  return (
    <Link
      href={href}
      className={`block w-full px-4 py-3 rounded-xl transition
        ${active
          ? "bg-white text-purple-600 font-medium"
          : "text-white hover:bg-white/20"}`}
    >
      {label}
    </Link>
  );
}

function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 border-b-2 transition
        ${active
          ? "border-purple-600 text-purple-600"
          : "border-transparent text-gray-500 hover:text-purple-600"}`}
    >
      {label}
    </button>
  );
}

/* ================= BOOKING CARD ================= */

function BookingCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <BookingImageSlider />

      <div className="lg:col-span-2 space-y-4 text-sm">
        <div className="flex justify-between text-gray-600">
          <div>
            <p className="font-medium">Check In</p>
            <p>31th Dec, 2025</p>
            <p className="text-xs">Wed, 10 AM</p>
          </div>

          <div className="text-purple-500 font-bold text-xl animate-shimmerPulse"
               style={{
                 background: 'linear-gradient(90deg, #8B5CF6 0%, #EC4899 50%, #8B5CF6 100%)',
                 backgroundSize: '200% auto',
                 WebkitBackgroundClip: 'text',
                 backgroundClip: 'text',
                 color: 'transparent',
                 animation: 'shimmerPulse 2s linear infinite'
               }}>→</div>

          <div>
            <p className="font-medium">Check Out</p>
            <p>1st Jan, 2026</p>
            <p className="text-xs">Thu, 9 AM</p>
          </div>
        </div>

        <hr />

        <PriceRow label="Base price (1 room x 1 night)" value="₹4,390" />
        <PriceRow label="Discount" value="- ₹825" />
        <PriceRow label="Discounted Price" value="₹3,565" />
        <PriceRow label="GST" value="₹213" />

        <hr />

        <PriceRow label="Amount Paid" value="₹3,778" bold />

        <p className="text-purple-600 text-xs">Total Savings ₹825</p>
        <p className="text-xs text-gray-400">* This booking cannot be cancelled.</p>
      </div>
    </div>
  );
}

/* ================= IMAGE SLIDER ================= */

function BookingImageSlider() {
  const images = ["/booking12.png", "/booking12.png", "/booking12.png"];
  const [index, setIndex] = useState(0);

  return (
    <div className="relative rounded-xl overflow-hidden h-[150px] animate-floatUp"
         style={{ animation: 'floatUp 0.6s ease-out' }}>

      <div className="absolute top-3 left-3 z-10 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow">
        Booking ID : <span className="text-purple-600">O2QSTI</span>
      </div>

      <Image src={images[index]} alt="Room" fill className="object-cover" />

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? "bg-purple-600 scale-125" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= HELPERS ================= */

function PriceRow({ label, value, bold }) {
  return (
    <div className={`flex justify-between ${bold ? "font-semibold" : "text-gray-600"} animate-floatUp`}
         style={{ animation: 'floatUp 0.5s ease-out' }}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function EmptyState({ title, description }) {
  return (
    <div className="py-20 text-center animate-floatUp"
         style={{ animation: 'floatUp 0.7s ease-out' }}>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
}