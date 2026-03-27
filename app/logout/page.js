"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { User, Calendar, Laptop, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  const navItems = [
    { id: "profile", icon: User, label: "My Profile", href: "/profile" },
    { id: "bookings", icon: Calendar, label: "Bookings", href: "/booking" },
    { id: "devices", icon: Laptop, label: "Logged in Devices", href: "/device" },
    { id: "logout", icon: LogOut, label: "Logout", href: "/logout" },
  ];

  const handleLogout = () => {
    setIsLoggingOut(true);
    
    // Animation delay before actual logout
    setTimeout(() => {
      // 👉 clear auth here (later)
      // localStorage.removeItem("token");
      router.push("/login");
    }, 800);
  };

  // Banner text animation
  const bannerTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Sidebar items animation
  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  // Content section animation
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Logout confirmation animation
  const logoutCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  // Button animations
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Logout icon animation
  const logoutIconVariants = {
    rotate: {
      rotate: [0, 10, -10, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 2
      }
    },
    exit: {
      rotate: 180,
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      {/* ================= BANNER ================= */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/hoteldetailspage.png"
            alt="Logout Banner"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black/45"
        />
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1 
            variants={bannerTextVariants}
            initial="hidden"
            animate="visible"
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide"
          >
            My Account
          </motion.h1>
        </div>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        className="w-full min-h-screen bg-gray-50 py-14 px-4"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-7xl mx-auto bg-white rounded-[28px] border border-purple-400 p-6 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-24">

            {/* ================= SIDEBAR ================= */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 rounded-3xl p-6 shadow-2xl"
              >
                <nav className="space-y-3">
                  <AnimatePresence>
                    {navItems.map((item, index) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;

                      return (
                        <motion.div
                          key={item.id}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          whileHover="hover"
                          whileTap="tap"
                          variants={navItemVariants}
                          onMouseEnter={() => setActiveHover(item.id)}
                          onMouseLeave={() => setActiveHover(null)}
                        >
                          <Link
                            href={item.href}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl
                              text-white font-medium transition-all duration-300 relative
                              ${isActive
                                ? "bg-white/30 backdrop-blur-lg shadow-lg"
                                : "bg-white/10"
                              }`}
                          >
                            {activeHover === item.id && (
                              <motion.div
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-white/20 rounded-2xl"
                              />
                            )}
                            <Icon className="w-5 h-5 relative z-10" />
                            <span className="flex-1 relative z-10">{item.label}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </nav>
              </motion.div>
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="md:col-span-3 border rounded-[24px] p-8 ml-2 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {!isLoggingOut ? (
                  <motion.div
                    key="logoutConfirmation"
                    variants={logoutCardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="max-w-md text-center space-y-6"
                  >
                    <motion.div
                      variants={logoutIconVariants}
                      animate="rotate"
                    >
                      <LogOut className="w-14 h-14 text-purple-600 mx-auto" />
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-semibold text-gray-800"
                    >
                      Are you sure you want to logout?
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm text-gray-500"
                    >
                      You will be logged out of your account and redirected to the login page.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex justify-center gap-4 pt-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.back()}
                        className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                      >
                        Cancel
                      </motion.button>

                      <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        animate="pulse"
                        onClick={handleLogout}
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg"
                      >
                        Logout
                      </motion.button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="loggingOut"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    className="max-w-md text-center space-y-8"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 mx-auto border-4 border-purple-600 border-t-transparent rounded-full"
                    />
                    
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-2xl font-semibold text-purple-600"
                    >
                      Logging out...
                    </motion.h2>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-gray-500"
                    >
                      Please wait while we securely log you out
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Page;