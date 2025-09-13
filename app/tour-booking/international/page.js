"use client";


import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  ArrowRight,
  Globe,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Ghar Basai - International Tours single-file Next.js page (Tailwind + Framer Motion)
// Background color for the page: black

const popularDestinations = [
  {
    id: 1,
    title: "Paris, France",
    tag: "Romance in Paris, the city of love",
    img: "/Paris.avif",
    price: "Starting ₹55,000"
  },
  {
    id: 2,
    title: "Santorini, Greece",
    tag: "Sunset dreams & cliffside views",
    img: "/Santorini.avif",
    price: "Starting ₹68,000"
  },
  {
    id: 3,
    title: "Swiss Alps",
    tag: "Alpine wonders & cable-car views",
    img: "/switzerland.avif",
    price: "Starting ₹80,000"
  },
  {
    id: 4,
    title: "Bali, Indonesia",
    tag: "Beaches, rice terraces & temples",
    img: "/Bali.avif",
    price: "Starting ₹35,000"
  }
];

const samplePackages = [
  {
    id: 1,
    name: "7 Days Swiss Alps & Paris Delight",
    duration: "7 Days / 6 Nights",
    inclusions: ["Visa support", "Flights", "Stay", "Sightseeing", "Meals"],
    price: "₹1,45,000",
    img:"/Paris.avif"

  },
  {
    id: 2,
    name: "Santorini + Athens Romantic Escape",
    duration: "5 Days / 4 Nights",
    inclusions: ["Flights", "Stay", "Couple Dinner", "Transfers"],
    price: "₹1,10,000",
    img:"/santorini.avif"
  },
  {
    id: 3,
    name: "3 Island Maldives Honeymoon",
    duration: "6 Days / 5 Nights",
    inclusions: ["Resort Stay", "Breakfast", "Snorkeling"],
    price: "₹1,60,000",
    img:"/maldives.avif"
  }
];

const faqs = [
  { q: "Do you provide visa and travel insurance?", a: "Yes — we offer end-to-end visa assistance and travel insurance as add-ons or bundled in select packages." },
  { q: "Are flights included in the packages?", a: "Many packages include economy flights. We always specify inclusions; you can choose to add premium flights while booking." },
  { q: "Can I customize my itinerary?", a: "Absolutely — all packages are customizable. Tell our travel experts your preferences and we will tailor the plan." },
  { q: "Do you offer group discounts?", a: "Yes. Group discounts and corporate rates are available — contact our team with group size and travel dates." },
  { q: "What about currency exchange & local guides?", a: "We can assist with currency exchange partners and book trusted local guides in most destinations." }
];

export default function InternationalToursPage() {
  const [search, setSearch] = useState("");
  const [activePackage, setActivePackage] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  // simple testimonials
  const testimonials = [
    { name: "Riya & Sameer", text: "Our honeymoon in Maldives was magical — Ghar Basai made it stress-free." },
    { name: "Anil Kumar", text: "Visa and travel insurance were handled smoothly. Loved our trip to Singapore!" },
    { name: "Priya Sharma", text: "Local homestay in Italy was an unforgettable experience — authentic food!" }
  ];

  // rotate testimonial automatically
  useEffect(() => {
    const t = setInterval(() => setTestimonialIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  // package slider navigation
  function nextPackage() {
    setActivePackage((p) => (p + 1) % samplePackages.length);
  }
  function prevPackage() {
    setActivePackage((p) => (p - 1 + samplePackages.length) % samplePackages.length);
  }

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* HERO */}
{/* HERO SECTION */}
<section className="relative overflow-hidden">
  {/* gradient overlay */}
  <div className="absolute inset-0 opacity-40 bg-gradient-to-b from-black via-transparent to-black z-0" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      {/* Left content */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          Travel the World,
          <br />
          <span className="text-amber-400">Feel at Home</span> with Ghar Basai
        </h1>
        <p className="text-gray-300 max-w-xl">
          Handpicked international packages — from romantic getaways to rugged adventures. 
          Customizable itineraries, verified partners, and 24/7 support in your language.
        </p>

        {/* Search bar */}
        <div className="mt-4">
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center gap-3 bg-white/6 rounded-lg p-3 flex-1">
              <Search className="w-5 h-5 text-amber-400" />
              <input
                aria-label="search packages"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search destinations, e.g. Paris, Bali, honeymoon"
                className="bg-transparent placeholder-gray-300 outline-none flex-1 text-sm"
              />
              <button
                className="ml-2 bg-amber-500 text-black px-4 py-2 rounded-md font-semibold hover:scale-105 transform transition"
                onClick={() => alert(`Searching for: ${search || 'Popular tours'}`)}
              >
                Plan My Trip
              </button>
            </div>
          </motion.form>
        </div>

        {/* Quick features */}
        <div className="flex flex-wrap gap-3 mt-4">
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-sm">
            <Globe className="w-4 h-4 text-amber-400" /> End-to-end planning
          </div>
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-sm">
            <Heart className="w-4 h-4 text-rose-400" /> Verified partners
          </div>
          <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 text-sm">
            <Star className="w-4 h-4 text-yellow-400" /> 24/7 assistance
          </div>
        </div>
      </motion.div>

      {/* Right collage with rotating circle */}
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/6"
      >
        {/* Image grid */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          <div className="relative">
            <Image src="/Eiffel.avif" alt="Eiffel" fill className="object-cover" priority />
          </div>
          <div className="relative">
            <Image src="/Santorini.avif" alt="Santorini" fill className="object-cover" />
          </div>
          <div className="relative">
            <Image src="/Alps.avif" alt="Alps" fill className="object-cover" />
          </div>
          <div className="relative">
            <Image src="/Bali.avif" alt="Bali" fill className="object-cover" />
          </div>
        </div>

        {/* Circular rotating icons */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="relative w-44 h-44"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          >
            {/* circular border */}
            <div className="absolute inset-0 rounded-full border border-white/10" />

            {/* orbiting icons */}
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
              <MapPin className="w-6 h-6 text-amber-400" />
            </div>
            <div className="absolute right-2 top-6">
              <Globe className="w-6 h-6 text-rose-400" />
            </div>
            <div className="absolute left-10 bottom-2">
              <Heart className="w-6 h-6 text-yellow-300" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>

  {/* Decorative background */}
  <div className="pointer-events-none absolute inset-0 z-0">
    <div className="absolute -left-40 -top-40 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />
    <div className="absolute -right-40 bottom-0 w-96 h-96 bg-gradient-to-br from-rose-500/10 to-transparent rounded-full blur-3xl" />
  </div>
</section>


      {/* POPULAR DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Popular International Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDestinations.map((d) => (
            <motion.article
              key={d.id}
              whileHover={{ y: -6 }}
              className="bg-white/5 rounded-xl overflow-hidden border border-white/6"
            >
              <div className="relative h-44 w-full">
                <Image src={d.img} alt={d.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{d.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{d.tag}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-amber-400 font-bold">{d.price}</span>
                  <button className="flex items-center gap-2 bg-amber-500 text-black px-3 py-1 rounded-md text-sm">
                    View Packages <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* TYPES OF TOURS */}
      <section className="bg-white/3 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Types of International Tours</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Honeymoon Tours",
              "Luxury Escapes",
              "Adventure Tours",
              "Cultural Tours",
              "Budget-Friendly Tours",
              "Family Packages",
              "Wellness Retreats",
              "Festivals & Events"
            ].map((t) => (
              <div key={t} className="bg-black/50 border border-white/6 p-4 rounded-lg">
                <h4 className="font-semibold">{t}</h4>
                <p className="text-sm text-gray-300 mt-2">Handpicked itineraries and tailored add-ons.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PACKAGES - slider */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Tour Packages</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-transform duration-500" style={{ transform: `translateX(-${activePackage * 100}%)` }}>
              {samplePackages.map((p) => (
                <div key={p.id} className="min-w-full bg-white/4 rounded-xl p-6 border border-white/6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-1/3 h-48 relative rounded-lg overflow-hidden">
                      <Image src={p.img} alt={p.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{p.name}</h3>
                      <p className="text-sm text-gray-300 mt-2">{p.duration}</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {p.inclusions.map((inc) => (
                          <li key={inc} className="text-xs bg-white/6 px-2 py-1 rounded">{inc}</li>
                        ))}
                      </ul>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-2xl font-bold">{p.price}</div>
                        <div className="flex items-center gap-2">
                          <button className="px-4 py-2 rounded-md bg-white/6">Know More</button>
                          <button className="px-4 py-2 rounded-md bg-amber-500 text-black font-semibold">Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* nav arrows */}
          <button
            onClick={prevPackage}
            aria-label="previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/6"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextPackage}
            aria-label="next"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/6"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* SPECIAL EXPERIENCES */}
      <section className="bg-white/3 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Special Experiences Abroad</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Local Homestays Abroad", desc: "Authentic food & culture" },
              { title: "Guided City Tours", desc: "Trusted local experts" },
              { title: "Curated Experiences", desc: "Wine tasting, desert safaris, ski passes" },
              { title: "Indian Meals Abroad", desc: "Comfort food options when you travel" }
            ].map((x) => (
              <div key={x.title} className="bg-black/50 p-4 rounded-lg border border-white/6">
                <h4 className="font-semibold">{x.title}</h4>
                <p className="text-sm text-gray-300 mt-2">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Customer Testimonials</h2>
        <div className="relative">
          <AnimatePresence>
            <motion.blockquote
              key={testimonialIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 p-6 rounded-xl text-gray-200 border border-white/6"
            >
              <p className="italic">“{testimonials[testimonialIndex].text}”</p>
              <footer className="mt-3 text-sm font-semibold">— {testimonials[testimonialIndex].name}</footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </section>

      {/* TRAVEL GALLERY */}
      {/* <section className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-semibold mb-6">Travel Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="relative h-36 rounded-lg overflow-hidden border border-white/6">
              <Image src={`/images/gallery-${(i % 6) + 1}.jpg`} alt={`gallery-${i}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section> */}

      {/* FAQ */}
      <section className="bg-white/3 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
          <div className="space-y-3">
            {faqs.map((f, idx) => (
              <div key={f.q} className="bg-black/50 p-4 rounded-lg border border-white/6">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left flex items-center justify-between"
                >
                  <span className="font-semibold">{f.q}</span>
                  <span className="text-sm text-gray-300">{openFaq === idx ? "—" : "+"}</span>
                </button>
                {openFaq === idx && <p className="mt-2 text-gray-300 text-sm">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-amber-600/20 to-rose-600/10 p-6 rounded-xl border border-white/6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Your Next Global Journey Starts Here!</h3>
            <p className="text-gray-300 mt-2">Explore curated packages or speak to our travel expert for a tailored plan.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-3 rounded-md bg-amber-500 text-black font-semibold">Explore Packages</button>
            <button className="px-5 py-3 rounded-md border border-white/6">Talk to Our Travel Expert</button>
          </div>
        </div>
      </section>

      {/* footer small */}

      {/* small styles for slow spin */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 18s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
