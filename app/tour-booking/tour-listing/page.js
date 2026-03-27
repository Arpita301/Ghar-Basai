"use client";
import React from "react";
import { motion } from "framer-motion";

const tours = [
  {
    title: "Gangtok & Darjeeling",
    package: "Package - (7Days - 6Nights)",
    price: "Starts ₹8,499 per person",
    img: "/gangtok.png",
  },
  {
    title: "Agra & Delhi",
    package: "Package - (10Days - 10Nights)",
    price: "Starts ₹9,999 per person",
    img: "/agra.png",
  },
  {
    title: "Banaras",
    package: "Package - (7Days - 6Nights)",
    price: "Starts ₹8,499 per person",
    img: "/banaras.png",
  },
  {
    title: "Kerala",
    package: "Package - (15Days - 16Nights)",
    price: "Starts ₹24,499 per person",
    img: "/kerala.png",
  },
  {
    title: "Gangtok & Darjeeling",
    package: "Package - (7Days - 6Nights)",
    price: "Starts ₹8,499 per person",
    img: "/gangtok.png",
  },
  {
    title: "Agra & Delhi",
    package: "Package - (10Days - 10Nights)",
    price: "Starts ₹9,999 per person",
    img: "/agra.png",
  },
  {
    title: "Banaras",
    package: "Package - (7Days - 6Nights)",
    price: "Starts ₹8,499 per person",
    img: "/banaras.png",
  },
  {
    title: "Kerala",
    package: "Package - (15Days - 16Nights)",
    price: "Starts ₹24,499 per person",
    img: "/kerala.png",
  },
  {
    title: "Gangtok & Darjeeling",
    package: "Package - (7Days - 6Nights)",
    price: "Starts ₹8,499 per person",
    img: "/gangtok.png",
  },
  {
    title: "Agra & Delhi",
    package: "Package - (10Days - 10Nights)",
    price: "Starts ₹9,999 per person",
    img: "/agra.png",
  },
  {
    title: "Banaras",
    package: "Package - (7Days - 6Nights)",
    price: "Starts ₹8,499 per person",
    img: "/banaras.png",
  },
  {
    title: "Kerala",
    package: "Package - (15Days - 16Nights)",
    price: "Starts ₹24,499 per person",
    img: "/kerala.png",
  },
  {
    title: "Gangtok & Darjeeling",
    package: "Package - (7Days - 6Nights)",
    price: "Starts ₹8,499 per person",
    img: "/gangtok.png",
  },
  {
    title: "Agra & Delhi",
    package: "Package - (10Days - 10Nights)",
    price: "Starts ₹9,999 per person",
    img: "/agra.png",
  },
  {
    title: "Banaras",
    package: "Package - (7Days - 6Nights)",
    price: "Starts ₹8,499 per person",
    img: "/banaras.png",
  },
  {
    title: "Kerala",
    package: "Package - (15Days - 16Nights)",
    price: "Starts ₹24,499 per person",
    img: "/kerala.png",
  },
];

// Animation Variants
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const page = () => {
  return (
    <div>
      {/* Header Section */}
      <header
        className="w-full h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/hoteldetailspage.png')",
        }}
      >
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl drop-shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Tours & Trips
          </motion.h1>
        </motion.div>
      </header>

      {/* Tours Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <h3 className="text-center text-sm tracking-widest text-gray-500 font-semibold">
            TOURS & TRIPS
          </h3>

          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#3F2B96] mt-3">
            Explore the Best Handpicked Tours and Excursions
          </h2>

          <p className="text-center text-gray-500 max-w-2xl mx-auto mt-3">
            Lorem ipsum dolor sit amet consectetur. At lorem eu cursus fringilla eu.
            Accumsan vulputate sit placerat enim pretium erat ultrices dignissim et.
          </p>

          {/* Grid – 4 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            {tours.map((tour, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-3"
              >
                {/* Image Hover Zoom */}
                <div className="overflow-hidden rounded-lg">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={tour.img}
                    alt={tour.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                {/* Title with new color */}
                <h3 className="mt-4 text-[#4A4DD0] text-lg font-semibold">
                  {tour.title}
                </h3>

                <p className="text-sm text-gray-500">{tour.package}</p>

                <p className="text-sm text-gray-700 font-medium mt-1">
                  {tour.price}
                </p>

                {/* Gradient Button with hover animation */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    mt-4 w-\32 text-white 
                    bg-gradient-to-r from-[#4A4DD0] to-[#C04CFD]
                    px-4 py-2 rounded-full text-sm font-medium 
                    transition-all shadow-md hover:shadow-lg
                  "
                >
                  Explore Trip
                </motion.button>
              </motion.div>
            ))}

          </div>
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
  <span className="
    w-4 h-4 border-2 border-white 
    border-t-transparent rounded-full 
    animate-spin
  "></span>

  Load More Tours
</motion.button>



        </div>
      </section>
    </div>
  );
};

export default page;
