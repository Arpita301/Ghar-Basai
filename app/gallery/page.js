"use client";

import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div>
      {/* HEADER */}
      <header
        className="w-full h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/hoteldetailspage.png')" 
        }}
      >
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl drop-shadow-xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Our Gallery
          </motion.h1>
        </motion.div>
      </header>

      {/* GALLERY SECTION */}
    <motion.section
      className="w-full py-16 px-4 md:px-10 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.p
          className="text-sm tracking-widest text-gray-500 font-semibold uppercase"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Gallery
        </motion.p>

        <motion.h2
          className="text-3xl md:text-5xl font-bold text-[#4A4DD0] mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          A truly Gallery Experience
        </motion.h2>

        <motion.p
          className="text-gray-600 mt-4 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet consectetur. A laoreet bibendum lacus tempor
          eu orci odio viverra risus. Tellus viverra senectus quis eget sem aliquet.
        </motion.p>
      </div>

      {/* EXACT FIGMA GRID LAYOUT */}
      <div className="max-w-[1400px] mx-auto px-6">

        {/* FIRST GALLERY ROW */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* LEFT COLUMN */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {["imageA.png", "imageB.png"].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="Gallery image"
                className="rounded-2xl object-cover w-full h-[240px]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>

          {/* CENTER LARGE IMAGE */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src="imageC.png"
              alt="River resort"
              className="rounded-2xl object-cover w-full h-[500px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>

        <br />

        {/* SECOND GALLERY ROW */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {/* LEFT LARGE */}
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src="/imageD.png"
              alt="Large Image"
              className="w-full h-[500px] object-cover rounded-2xl"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>

          {/* RIGHT SMALL IMAGES */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {["/imageE.png", "/imageF.png"].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="Small Image"
                className="w-full h-[240px] object-cover rounded-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Load More */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          mt-6 px-6 py-3 rounded-full
          bg-gradient-to-r from-[#4A4DD0] to-[#C04CFD]
          text-white text-sm font-medium
          shadow-md hover:shadow-lg
          flex items-center justify-center gap-2
          mx-auto relative
        "
      >
        <span
          className="
            w-4 h-4 border-2 border-white 
            border-t-transparent rounded-full 
            animate-spin
          "
        ></span>
        Load More Tours
      </motion.button>
    </motion.section>


    </div>
  );
};

export default Page;