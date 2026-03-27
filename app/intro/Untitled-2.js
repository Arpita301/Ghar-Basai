"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GharBasaiLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div 
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Logo Container */}
        <div className={`relative transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          
          {/* Animated Circle Background */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`w-64 h-64 border-2 border-white rounded-full transition-all duration-1000 ${isHovered ? 'scale-125 rotate-180' : 'scale-100 rotate-0'}`}
                 style={{
                   animation: 'pulse-ring 3s ease-in-out infinite'
                 }}></div>
          </div>

          {/* Secondary Ring */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 delay-200 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`w-48 h-48 border border-white/40 rounded-full transition-all duration-1000 ${isHovered ? 'scale-110 -rotate-180' : 'scale-100 rotate-0'}`}
                 style={{
                   animation: 'pulse-ring 3s ease-in-out infinite 0.5s'
                 }}></div>
          </div>

          {/* House Icon */}
          <svg 
            width="200" 
            height="200" 
            viewBox="0 0 200 200" 
            className={`relative z-10 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Roof */}
            <path 
              d="M 40 100 L 100 50 L 160 100 L 150 100 L 150 110 L 50 110 L 50 100 Z" 
              fill="white"
              className={`transition-all duration-500 ${isHovered ? 'fill-white' : 'fill-white'}`}
              style={{
                animation: 'float 3s ease-in-out infinite'
              }}
            />
            
            {/* House Body */}
            <rect 
              x="50" 
              y="110" 
              width="100" 
              height="70" 
              fill="white"
              className="transition-all duration-500"
              style={{
                animation: 'float 3s ease-in-out infinite 0.1s'
              }}
            />
            
            {/* Door */}
            <rect 
              x="85" 
              y="140" 
              width="30" 
              height="40" 
              fill="black"
              className="transition-all duration-500"
              style={{
                animation: isHovered ? 'door-open 0.5s ease-out forwards' : 'none'
              }}
            />
            
            {/* Window Left */}
            <rect 
              x="60" 
              y="125" 
              width="15" 
              height="15" 
              fill="black"
              className="transition-all duration-300"
              style={{
                animation: 'twinkle 2s ease-in-out infinite'
              }}
            />
            
            {/* Window Right */}
            <rect 
              x="125" 
              y="125" 
              width="15" 
              height="15" 
              fill="black"
              className="transition-all duration-300"
              style={{
                animation: 'twinkle 2s ease-in-out infinite 1s'
              }}
            />

            {/* Chimney */}
            <rect 
              x="125" 
              y="70" 
              width="15" 
              height="30" 
              fill="white"
              style={{
                animation: 'float 3s ease-in-out infinite 0.2s'
              }}
            />

            {/* Smoke Particles */}
            <circle 
              cx="132" 
              cy="60" 
              r="3" 
              fill="white" 
              opacity="0.6"
              style={{
                animation: 'smoke 2s ease-in-out infinite'
              }}
            />
            <circle 
              cx="135" 
              cy="50" 
              r="3" 
              fill="white" 
              opacity="0.4"
              style={{
                animation: 'smoke 2s ease-in-out infinite 0.3s'
              }}
            />
            <circle 
              cx="130" 
              cy="40" 
              r="3" 
              fill="white" 
              opacity="0.2"
              style={{
                animation: 'smoke 2s ease-in-out infinite 0.6s'
              }}
            />
          </svg>

          {/* Text Logo */}
          <div className={`text-center mt-8 transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl font-bold text-white tracking-wider mb-2" style={{
              fontFamily: 'serif',
              animation: isHovered ? 'text-glow 1s ease-in-out' : 'none'
            }}>
              {['G', 'H', 'A', 'R'].map((letter, i) => (
                <span 
                  key={i} 
                  className="inline-block"
                  style={{
                    animation: `letter-bounce 0.6s ease-out ${i * 0.1}s backwards`
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <h2 className="text-4xl font-light text-white tracking-widest" style={{
              fontFamily: 'serif',
              animation: isHovered ? 'text-glow 1s ease-in-out 0.2s' : 'none'
            }}>
              {['B', 'A', 'S', 'A', 'I'].map((letter, i) => (
                <span 
                  key={i} 
                  className="inline-block"
                  style={{
                    animation: `letter-bounce 0.6s ease-out ${(i + 4) * 0.1}s backwards`
                  }}
                >
                  {letter}
                </span>
              ))}
            </h2>
            <div className="mt-4 text-white/60 text-sm tracking-widest uppercase"
                 style={{
                   animation: 'fade-in 1s ease-out 1s backwards'
                 }}>
              Where Dreams Find Home
            </div>
            
            {/* Explore Button */}
            <Link 
              href="/login"
              className="inline-block mt-8 px-8 py-4 border-2 border-white text-white font-semibold tracking-wider uppercase transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
              style={{
                animation: 'fade-in 1s ease-out 1.2s backwards'
              }}
            >
              <span className="relative z-10">Explore Now</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <span className="absolute inset-0 border-2 border-white transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></span>
            </Link>
          </div>

          {/* Decorative Corner Elements */}
          <div className={`absolute -top-8 -left-8 w-16 h-16 border-l-2 border-t-2 border-white/30 transition-all duration-500 ${isHovered ? 'scale-110 -translate-x-2 -translate-y-2' : 'scale-100'}`}></div>
          <div className={`absolute -bottom-8 -right-8 w-16 h-16 border-r-2 border-b-2 border-white/30 transition-all duration-500 ${isHovered ? 'scale-110 translate-x-2 translate-y-2' : 'scale-100'}`}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-ring {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes smoke {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-30px) translateX(5px);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes letter-bounce {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6);
          }
        }

        @keyframes door-open {
          0% {
            transform: scaleX(1);
            transform-origin: left;
          }
          100% {
            transform: scaleX(0.1);
            transform-origin: left;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}