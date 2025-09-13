"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";          // <-- ensure these are imported
import "slick-carousel/slick/slick-theme.css";

import {
  Search,
  MapPin,
  Home,
  Heart,
  Star,
  Calendar,
  Users,
  Gift,
  Globe,
  Sparkles,
  Info,
  Phone
} from "lucide-react";

// ... (your arrays unchanged) ...

const popularDestinations = [
  {
    id: "goa",
    name: "Goa",
    tagline: "Beaches & nightlife",
    price: "From ₹6,999",
    img: "/goa.avif"
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    tagline: "Palaces & desert tours",
    price: "From ₹8,499",
    img: "/Rajasthan.avif"
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "Backwaters & Ayurveda",
    price: "From ₹7,499",
    img: "/kerala.avif"
  },
  {
    id: "himachal",
    name: "Himachal",
    tagline: "Mountains & adventure",
    price: "From ₹5,999",
    img: "/Himachal.avif"
  }
];
const tourPackages = [
  {
    id: 1,
    name: "Golden Triangle: Delhi-Agra-Jaipur",
    duration: "5 Days / 4 Nights",
    inclusions: ["Stay", "Meals", "Transport", "Guide"],
    price: "₹12,999",
    img: "/Agra.avif"
  },
  {
    id: 2,
    name: "Kerala Backwater Relax",
    duration: "4 Days / 3 Nights",
    inclusions: ["Houseboat", "Meals", "Guide"],
    price: "₹10,499",
    img: "/kerala-backwater.avif"
  },
  {
    id: 3,
    name: "Goa Family Special",
    duration: "3 Days / 2 Nights",
    inclusions: ["Stay", "Breakfast", "Transfers"],
    price: "₹7,999",
    img: "/goa.avif"
  },
   {
    id: 4,
    name: "Kashmir Landscape",
    duration: "3 Days / 2 Nights",
    inclusions: ["Stay", "Breakfast", "Transfers"],
    price: "₹7,999",
    img: "/kashmir.avif"
  },
     {
    id: 5,
    name: "Mussorie Trip",
    duration: "3 Days / 2 Nights",
    inclusions: ["Stay", "Breakfast", "Transfers"],
    price: "₹7,999",
    img: "/Mussoorie.avif"
  }
];

const galleryImages = [
  "/gallary1.avif",
  "/gallary2.avif",
  "/gallary3.avif",
  "/gallary4.avif",
  "/gallary5.avif",
  "/gallary6.avif",
  "/gallary7.avif",
  "/gallary8.avif",
  "/gallary9.avif",
  "/gallary10.avif",
  "/gallary11.avif",
  "/gallary12.avif"
];

const faqs = [
  { q: "What is included in a domestic tour package?", a: "Stays, selected meals, transport (as per package), a local guide for some packages. Exact inclusions depend on each package." },
  { q: "Can I customize my trip?", a: "Yes — most packages are customizable. Contact our support for a tailor-made itinerary." },
  { q: "Do you provide family-friendly tours?", a: "Absolutely — we highlight family-friendly stays and activities in many packages." },
  { q: "What safety measures do you follow?", a: "We partner with verified local providers, follow local safety protocols, and provide 24/7 support for emergencies." }
];

export default function GharBasaiToursPage() {
  const heroVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  const sliderSettings = {
    dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1,
    adaptiveHeight: true, arrows: false, autoplay: true, autoplaySpeed: 4000
  };

  return (
    // Add overflow-x-hidden to avoid horizontal scroll; keep min-h-screen
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* HERO */}
      <header className="relative bg-gradient-to-r from-emerald-600 to-teal-500 text-white overflow-hidden">
        {/* reduce vertical padding on small screens */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div initial="hidden" animate="show" variants={heroVariants}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Explore India,
                <span className="block text-yellow-200">
                  Feel at Home with <span className="text-white">Ghar Basai</span>
                </span>
              </h1>
              <p className="mt-4 text-lg sm:text-xl max-w-xl opacity-95">
                Handpicked homestays, authentic experiences and flexible packages for memorable domestic trips.
              </p>

              {/* Quick Search Bar */}
              <div className="mt-8 bg-white rounded-xl shadow-lg p-3 sm:p-4 flex flex-col sm:flex-row gap-3 items-center">
                {/* <-- IMPORTANT: add min-w-0 to prevent flex children from forcing overflow */}
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    aria-label="destination"
                    placeholder="Destination (e.g. Goa, Manali)"
                    className="w-full outline-none text-black min-w-0"
                  />
                </div>

                <div className="flex items-center gap-2 min-w-0">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <input type="date" aria-label="start-date" className="outline-none text-black min-w-0" />
                </div>

                <div className="flex items-center gap-2 min-w-0">
                  <Gift className="w-5 h-5 text-gray-400" />
                  <select aria-label="budget" className="outline-none text-black min-w-0">
                    <option>Budget</option>
                    <option>₹5,000 - ₹10,000</option>
                    <option>₹10,000 - ₹20,000</option>
                    <option>₹20,000+</option>
                  </select>
                </div>

                <button className="mt-2 sm:mt-0 inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow">
                  <MapPin className="w-4 h-4" /> Search
                </button>
              </div>

              <div className="mt-6 flex gap-4">
                <Link href="/tour-booking/custom" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-600 bg-opacity-10">Explore Packages</Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white border-opacity-20">Contact Us</Link>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-56 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl"
            >
              {/* NOTE: avoid spaces in filenames; store in /public/images */}
              <Image src="/India landscapes.avif" fill alt="India landscapes" className="object-cover" />
            </motion.div>
          </div>
        </div>
      </header>

      {/* rest of your main... make sure to keep min-w-0 on cards if you put flex children inside them */}
         <main className="-mt-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Popular Destinations */}
          <section className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold">Popular Destinations</h2>
            <p className="text-sm text-gray-600 mt-1">Handpicked places across India — choose your vibe.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {popularDestinations.map((d) => (
                <motion.article key={d.id} whileHover={{ y: -6 }} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-44 w-full">
                    <Image src={d.img} alt={d.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{d.name}</h3>
                      <span className="text-sm text-amber-500 font-semibold">{d.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{d.tagline}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <button className="text-sm font-medium px-3 py-1 ring-1 ring-emerald-200 rounded">View Packages</button>
                      <div className="flex items-center gap-2 text-sm text-gray-500"><Home className="w-4 h-4" /> Homestays</div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Types of Tours */}
          <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold">Types of Tours</h2>
              <p className="text-sm text-gray-600 mt-1">Find your perfect match.</p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Card icon={<Users className="w-6 h-6" />} title="Family Tours" desc="Comfortable stays & kid-friendly activities" />
                <Card icon={<Heart className="w-6 h-6" />} title="Couple / Honeymoon" desc="Romantic getaways and cozy homestays" />
                <Card icon={<Sparkles className="w-6 h-6" />} title="Wellness" desc="Ayurveda, spas & retreats" />
                <Card icon={<Globe className="w-6 h-6" />} title="Adventure" desc="Trekking, rafting, paragliding" />
                <Card icon={<MapPin className="w-6 h-6" />} title="Cultural & Heritage" desc="Festivals, forts & local experiences" />
                <Card icon={<Star className="w-6 h-6" />} title="Luxury" desc="Handpicked premium stays" />
              </div>
            </div>

            {/* Exclusive Experiences */}
            <aside className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg">Exclusive Ghar Basai Experiences</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>• Local homestays with authentic cuisine</li>
                <li>• Guided cultural walks</li>
                <li>• Nature activities: campfires & stargazing</li>
                <li>• Community-based tourism supporting locals</li>
              </ul>
              <div className="mt-6">
                <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white">Discover Experiences</button>
              </div>
            </aside>
          </section>

          {/* Tour Packages slider */}
          <section className="mt-8 bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold">Featured Tour Packages</h2>
            <div className="mt-4">
              <Slider {...sliderSettings}>
                {tourPackages.map((t) => (
                  <div key={t.id} className="px-2 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                      <div className="relative h-56 md:h-40 rounded overflow-hidden shadow">
                        <Image src={t.img} fill alt={t.name} className="object-cover" />
                      </div>
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold">{t.name}</h3>
                        <p className="text-sm text-gray-600 mt-2">Duration: {t.duration}</p>
                        <p className="text-sm text-gray-600 mt-2">Inclusions: {t.inclusions.join(", ")}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="text-2xl font-extrabold">{t.price}</div>
                          <div className="flex gap-3">
                            <button className="px-4 py-2 rounded-lg ring-1 ring-emerald-200">View Details</button>
                            <button className="px-4 py-2 rounded-lg bg-amber-400 text-gray-900 font-semibold">Book Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold">Why Choose Us</h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>• Handpicked stays that feel like home</li>
                <li>• Affordable & customizable packages</li>
                <li>• 24/7 support and verified local partners</li>
                <li>• Eco-friendly & community-first approach</li>
              </ul>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold">Traveler Testimonials</h2>
              <div className="mt-4 space-y-4">
                <Testimonial name="Priya" dest="Manali" text="Loved the cozy homestay in Manali arranged by Ghar Basai!" />
                <Testimonial name="Rahul" dest="Kerala" text="Houseboat experience was magical and comfortable." />
              </div>
            </div>
          </section>

          {/* Gallery */}
      <section className="mt-8 bg-white rounded-xl shadow p-6">
  <h2 className="text-2xl font-bold">Travel Gallery</h2>
  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
    {galleryImages.map((src, i) => (
      <div key={i} className="relative h-32 rounded overflow-hidden">
        <Image src={src} alt={`gallery-${i}`} fill className="object-cover" />
      </div>
    ))}
  </div>
</section>


          {/* FAQ & CTA */}
          <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <div className="mt-4 space-y-3">
                {faqs.map((f, idx) => (
                  <details key={idx} className="bg-gray-50 p-3 rounded">
                    <summary className="font-medium cursor-pointer">{f.q}</summary>
                    <p className="mt-2 text-sm text-gray-700">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <aside className="bg-emerald-600 text-white rounded-xl shadow p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-bold">Ready for Your Next Journey?</h3>
              <p>Let’s plan with Ghar Basai. Choose a package or contact our travel experts.</p>
              <div className="flex gap-3">
                <button className="flex-1 bg-white text-emerald-600 rounded-lg py-3 font-semibold">Explore Packages</button>
                {/* <button className="flex-1 ring-1 ring-white rounded-lg py-3">Contact Us</button> */}

                   <Link
      href="/contact"
      className="flex-1 ring-1 ring-white rounded-lg py-3 text-center"
    >
      Contact Us
    </Link>
              </div>
              <div className="text-sm opacity-90 flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</div>
            </aside>
          </section>

       
        </div>
      </main>
    </div>
  );
}
function Card({ icon, title, desc }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex flex-col gap-3 items-start">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-white ring-1 ring-emerald-100">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

function Testimonial({ name, dest, text }) {
  return (
    <div className="flex items-start gap-4 bg-gray-50 p-3 rounded">
      <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center font-semibold">{name[0]}</div>
      <div>
        <div className="text-sm font-medium">{name} <span className="text-xs text-gray-500">• {dest}</span></div>
        <p className="text-sm text-gray-700 mt-1">{text}</p>
      </div>
    </div>
  );
}
