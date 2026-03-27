"use client";



import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const TravelLogo = () => {
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const svgRef = useRef(null);
   const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);


    useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 7000);

    return () => clearTimeout(timer);
  }, [router]);

  useEffect(() => {
    const animate = () => {
      angleRef.current += isHovered ? 0.8 : 0.4;
      const angle = angleRef.current % 360;

      const plane = svgRef.current?.querySelector("#animated-plane");
      const trail = svgRef.current?.querySelector("#plane-trail");
      
      if (plane) {
        const radius = 90;
        const cx = 150;
        const cy = 150;

        const rad = (angle * Math.PI) / 180;
        const x = cx + radius * Math.cos(rad);
        const y = cy + radius * Math.sin(rad);
        const rotation = angle - 90;

        plane.setAttribute(
          "transform",
          `translate(${x}, ${y}) rotate(${rotation})`
        );

        // Animated trail effect
        if (trail) {
          const trailPoints = [];
          for (let i = 0; i < 5; i++) {
            const trailAngle = angle - (i * 8);
            const trailRad = (trailAngle * Math.PI) / 180;
            const tx = cx + radius * Math.cos(trailRad);
            const ty = cy + radius * Math.sin(trailRad);
            trailPoints.push(`${tx},${ty}`);
          }
          trail.setAttribute("points", trailPoints.join(" "));
        }
      }

      // Rotate globe meridians
      const meridians = svgRef.current?.querySelector("#meridians");
      if (meridians) {
        meridians.setAttribute("transform", `rotate(${angle * 0.2} 150 150)`);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isHovered]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

      <div 
        className="relative w-[480px] h-[480px] flex items-center justify-center transition-all duration-500 hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <svg
          ref={svgRef}
          viewBox="0 0 300 300"
          className="w-full h-full relative z-10"
        >
          <defs>
            <linearGradient id="blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>

            <linearGradient id="orange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>

            <linearGradient id="purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>

            <radialGradient id="globe" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#dbeafe" />
              <stop offset="70%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#3b82f6" />
            </radialGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="strong-glow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer orbit ring */}
          <circle
            cx="150"
            cy="150"
            r="110"
            fill="none"
            stroke="url(#purple)"
            strokeWidth="2"
            strokeDasharray="4 6"
            opacity="0.3"
          />

          {/* Main orbit rings */}
          <circle
            cx="150"
            cy="150"
            r="95"
            fill="none"
            stroke="url(#blue)"
            strokeWidth="3"
            strokeDasharray="8 6"
            opacity="0.6"
            filter="url(#glow)"
          />

          <circle
            cx="150"
            cy="150"
            r="75"
            fill="none"
            stroke="url(#orange)"
            strokeWidth="2.5"
            strokeDasharray="5 5"
            opacity="0.5"
          />

          {/* Plane trail */}
          <polyline
            id="plane-trail"
            fill="none"
            stroke="url(#blue)"
            strokeWidth="2"
            opacity="0.4"
            strokeLinecap="round"
          />

          {/* Globe with shadow */}
          <circle
            cx="150"
            cy="150"
            r="62"
            fill="#1e3a8a"
            opacity="0.2"
          />
          
          <circle
            cx="150"
            cy="150"
            r="60"
            fill="url(#globe)"
            filter="url(#strong-glow)"
          />

          {/* Globe meridians */}
          <g id="meridians" opacity="0.3">
            <ellipse
              cx="150"
              cy="150"
              rx="60"
              ry="30"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1"
            />
            <ellipse
              cx="150"
              cy="150"
              rx="30"
              ry="60"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1"
            />
            <line
              x1="150"
              y1="90"
              x2="150"
              y2="210"
              stroke="#3b82f6"
              strokeWidth="1"
            />
          </g>

          {/* Continents outline */}
          <g opacity="0.4" fill="none" stroke="#1e40af" strokeWidth="1.5">
            <path d="M 130,130 Q 135,125 140,130 T 150,135 T 160,130" />
            <path d="M 145,145 Q 150,140 155,145 Q 160,150 155,155" />
            <ellipse cx="135" cy="160" rx="8" ry="6" />
          </g>

          {/* Enhanced plane */}
          <g id="animated-plane" filter="url(#strong-glow)">
            {/* Plane body */}
            <path
              d="M-18,0 L0,-12 L18,0 L10,7 L0,5 L-10,7 Z"
              fill="#1e3a8a"
              stroke="#2563eb"
              strokeWidth="0.5"
            />
            {/* Wings */}
            <path
              d="M-8,2 L-16,-5 M8,2 L16,-5"
              stroke="#60a5fa"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Cockpit */}
            <circle cx="0" cy="-2" r="3" fill="#93c5fd" />
            {/* Engine glow */}
            <circle cx="0" cy="5" r="3" fill="#fbbf24" opacity="0.8" />
            <circle cx="0" cy="5" r="1.5" fill="#fef08a" />
          </g>

          {/* Destination markers */}
          <g opacity="0.7">
            <circle cx="120" cy="110" r="3" fill="#f59e0b" filter="url(#glow)" />
            <circle cx="180" cy="140" r="3" fill="#f59e0b" filter="url(#glow)" />
            <circle cx="160" cy="180" r="3" fill="#f59e0b" filter="url(#glow)" />
          </g>
        </svg>

        {/* Hover hint text */}
        <div className="absolute bottom-8 text-white/60 text-sm font-light tracking-wider">
          {isHovered ? "LET'S GO!" : "HOVER TO EXPLORE"}
        </div>
      </div>
    </div>
  );
};

export default TravelLogo;