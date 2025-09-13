"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Grid,
  Camera,
  Heart,
  Sun,
  Users,
  Home,
  Coffee,
  Sparkles,
  MapPin,
  Gift,
  Activity
} from "lucide-react";

const categories = [
  { key: "all", label: "All", icon: Grid },
  { key: "food", label: "Food & Dining", icon: Camera },
  { key: "rooms", label: "Rooms & Interiors", icon: Home },
  { key: "activities", label: "Activities", icon: Activity },
  { key: "nature", label: "Nature & Outdoors", icon: Sun },
  { key: "wellness", label: "Wellness", icon: Sparkles },
  { key: "events", label: "Celebrations", icon: Gift },
  { key: "guests", label: "Guests", icon: Users }
];

// Sample images (Unsplash). Replace with your own images or CMS.
const GALLERY = [
  { id: 1, cat: "food", src: "https://plus.unsplash.com/premium_photo-1672938878598-31c1c614f708?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Family dining together" },
  { id: 2, cat: "food", src: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Buffet spread" },
  { id: 3, cat: "food", src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop", alt: "brunch food spread with waffles, eggs, juices" },
  { id: 4, cat: "food", src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "egg recipe" },
  { id: 5, cat: "food", src: "https://plus.unsplash.com/premium_photo-1695758787947-0aff87c1f93a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Burger with Cheese" },


  { id: 6, cat: "rooms", src: "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Cozy master bedroom" },
  { id: 7, cat: "rooms", src: "https://images.unsplash.com/photo-1676389317353-1d553659ea69?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Family suite with bunk beds" },
  { id: 8, cat: "rooms", src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Family suite with bunk beds" },



  { id: 10, cat: "activities", src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop", alt: "Kids playing pool" },
  { id: 11, cat: "activities", src: "https://images.unsplash.com/photo-1678483874487-a4d6f8ceffe9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Village walk" },
  { id: 12, cat: "activities", src: "https://images.unsplash.com/photo-1565639828644-ff8e088ebfa8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Village walk" },
  { id: 13, cat: "activities", src: "https://plus.unsplash.com/premium_photo-1663072211802-b1f1bdb69ef9?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "swimming kids" },

  { id: 14, cat: "nature", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop", alt: "Sunrise over property" },
  { id: 15, cat: "nature", src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop", alt: "Flower garden" },
  { id: 16, cat: "nature", src: "https://images.unsplash.com/photo-1558898478-9ac0461266c1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Butterfly Garden" },
  { id: 17, cat: "nature", src: "https://images.unsplash.com/photo-1621291940062-ce9278a50461?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Adventure Meadow" },

  { id: 18, cat: "wellness", src: "https://images.unsplash.com/photo-1600437284100-6ed31d15282e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Yoga on the lawn" },
  { id: 19, cat: "wellness", src: "https://images.unsplash.com/photo-1703578136905-96b267553ac3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Pranayama Pavilion" },
  { id: 20, cat: "wellness", src: "https://images.unsplash.com/photo-1448070299168-7dede6dc70b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Rejuvenation Retreat" },

  { id: 21, cat: "events", src: "https://images.unsplash.com/photo-1731184054948-f70c5cf5e4c0?q=80&w=1300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Festive decor" },
  { id: 22, cat: "events", src: "https://images.unsplash.com/photo-1585575271898-9f3a76920f4b?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Festival of Lights Arena" },
  { id: 23, cat: "events", src: "https://plus.unsplash.com/premium_photo-1666184130477-4f8870cf04b3?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Moonlight Party Terrace" },


  { id: 24, cat: "guests", src: "https://images.unsplash.com/photo-1682911711884-af42a49d1620?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Coffee & Chat Corner" },
  { id: 25, cat: "guests", src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop", alt: "Guest checking in" },
  { id: 26, cat: "guests", src: "https://plus.unsplash.com/premium_photo-1678914044227-bef17ee72b86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Laugh and togetherness" }
];

export default function GharBasaiGallery() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? GALLERY : GALLERY.filter((g) => g.cat === filter);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Ghar Basai — Moments that feel like home</h1>
            <p className="mt-4 text-lg md:text-xl opacity-90">Curated gallery of food, rooms, activities and real guest moments. Designed for families, travellers and creators.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {categories.slice(0, 4).map((c) => {
                const Icon = c.icon;
                return (
                  <motion.button
                    key={c.key}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setFilter(c.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition ${
                      filter === c.key ? "ring-2 ring-white" : ""
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm">{c.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="hidden md:block flex-1 relative h-48">
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image src={GALLERY[0].src} alt={GALLERY[0].alt} fill className="object-cover" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                  filter === c.key
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-white text-gray-700 border-gray-200"
                } shadow-sm hover:scale-[1.02] transition-all`}
                aria-pressed={filter === c.key}
              >
                <Icon size={16} />
                <span className="text-sm">{c.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery masonry with animation */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item) => (
              <motion.figure
                key={item.id}
                layout
                whileHover={{ scale: 1.02 }}
                className="relative break-inside-avoid rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <figcaption className="p-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">{item.alt}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.cat.charAt(0).toUpperCase() + item.cat.slice(1)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg bg-white/80 hover:bg-white text-emerald-600 shadow-sm">
                      <Heart size={16} />
                    </button>

                    <button className="p-2 rounded-lg bg-white/80 hover:bg-white text-gray-700 shadow-sm">
                      <MapPin size={16} />
                    </button>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>


      </section>
    </main>
  );
}
