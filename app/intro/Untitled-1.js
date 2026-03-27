"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function GharBasaiLanding() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsLoaded(true);

    // Generate particles once (prevents hydration error)
    const generatedParticles = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 20}s`,
      delay: `${Math.random() * 10}s`,
    }));
    setParticles(generatedParticles);

    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-30 transition-transform duration-300"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: p.left,
              top: p.top,
              animation: `float ${p.duration} linear infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Brand */}
        <h1
          className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-white transition-all duration-[2000ms] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}
        >
          GHAR BASAI
        </h1>

        {/* Divider */}
        <div
          className={`w-20 sm:w-24 h-px bg-white my-8 transition-all duration-1500 delay-500 ${
            isLoaded ? "scale-x-100 opacity-60" : "scale-x-0 opacity-0"
          }`}
        />

        {/* Tagline */}
        <p
          className={`text-xs sm:text-sm md:text-base text-white tracking-[0.3em] mb-12 transition-all duration-1500 delay-700 ${
            isLoaded ? "opacity-70 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          LUXURY TRAVEL REDEFINED
        </p>

        {/* CTA Button */}
        <div
          className={`transition-all duration-1500 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/login"
            className="group relative inline-flex items-center justify-center px-10 sm:px-12 py-4 text-white text-xs sm:text-sm tracking-[0.2em] overflow-hidden transition-all duration-500 hover:scale-105"
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Background animation */}
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            {/* Glow */}
            <span
              className="absolute inset-0 border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ filter: "blur(8px)" }}
            />

            {/* Text */}
            <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-500">
              EXPLORE NOW
              <svg
                className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-10 transition-all duration-[2000ms] delay-1500 ${
            isLoaded ? "opacity-50" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-white opacity-20" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r border-t border-white opacity-20" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l border-b border-white opacity-20" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-white opacity-20" />

      {/* Particle animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -20px);
          }
          50% {
            transform: translate(-10px, -40px);
          }
          75% {
            transform: translate(5px, -20px);
          }
        }
      `}</style>
    </div>
  );
}
