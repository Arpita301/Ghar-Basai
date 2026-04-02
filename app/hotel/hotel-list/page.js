"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight, Star } from "lucide-react";
import Link from "next/link";


export default function HomestayHeader() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [CurrentIndex, setCurrentIndex] = useState([]);



    const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? hotels.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === hotels.length - 1 ? 0 : prev + 1));
  };
  const itemsPerPage = 9;

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleLocation = (location) => {
    if (location === "All") {
      setSelectedLocations([]);
    } else {
      setSelectedLocations((prev) =>
        prev.includes(location)
          ? prev.filter((loc) => loc !== location)
          : [...prev, location]
      );
    }
    setCurrentPage(1);
  };

  const togglePriceRange = (range) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range)
        ? prev.filter((r) => r !== range)
        : [...prev, range]
    );
    setCurrentPage(1);
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
    setCurrentPage(1);
  };

  const getPriceRange = (rangeStr) => {
    if (rangeStr === "Under ₹1,500") return { min: 0, max: 1500 };
    if (rangeStr === "₹1,500 - ₹2,000") return { min: 1500, max: 2000 };
    if (rangeStr === "₹2,000 - ₹2,500") return { min: 2000, max: 2500 };
    if (rangeStr === "₹2,500 - ₹3,000") return { min: 2500, max: 3000 };
    if (rangeStr === "₹3,000 & above") return { min: 3000, max: Infinity };
    return { min: 0, max: Infinity };
  };

  const allHomestays = [
    { id: 1, name: "Ghar Basai Prime the Ki...", location: "Darjeeling", price: 2393, rating: 4.8, reviews: 1244, amenities: ["Swimming Pool", "Lift", "Gym"], image: "/hotellist1.png" },
    { id: 2, name: "Ghar Basai 22 Square Li...", location: "Goa", price: 2150, rating: 4.9, reviews: 1244, amenities: ["Swimming Pool", "Electric Kettle"], image: "/hotellist2.png" },
    { id: 3, name: "Ghar Basai Home Tree ....", location: "Chennai", price: 1800, rating: 4.8, reviews: 1244, amenities: ["Lift", "Living Area"], image: "/hotellist3.png" },
    { id: 4, name: "Ghar Basai Mountain View", location: "Darjeeling", price: 3200, rating: 4.7, reviews: 890, amenities: ["Swimming Pool", "Gym", "Living Area"], image: "/hotellist1.png" },
    { id: 5, name: "Ghar Basai Beach Resort", location: "Goa", price: 2250, rating: 4.9, reviews: 1567, amenities: ["Swimming Pool", "Gym", "Electric Kettle"], image: "/hotellist2.png" },
    { id: 6, name: "Ghar Basai City Lights", location: "Chennai", price: 1450, rating: 4.6, reviews: 723, amenities: ["Lift", "Electric Kettle"], image: "/hotellist3.png" },
    { id: 7, name: "Ghar Basai Heritage", location: "Puri", price: 2800, rating: 4.8, reviews: 1122, amenities: ["Swimming Pool", "Living Area"], image: "/hotellist1.png"},
    { id: 8, name: "Ghar Basai Paradise", location: "Goa", price: 2420, rating: 4.9, reviews: 1890, amenities: ["Swimming Pool", "Gym", "Lift", "Electric Kettle"], image: "/hotellist2.png" },
    { id: 9, name: "Ghar Basai Marina", location: "Chennai", price: 2100, rating: 4.7, reviews: 956, amenities: ["Lift", "Gym", "Living Area"], image: "/hotellist3.png" },
    { id: 10, name: "Ghar Basai Valley View", location: "Gangtok", price: 2650, rating: 4.8, reviews: 1345, amenities: ["Swimming Pool", "Living Area", "Electric Kettle"], image: "/hotellist1.png" },
    { id: 11, name: "Ghar Basai Coastal", location: "Goa", price: 1950, rating: 4.6, reviews: 678, amenities: ["Swimming Pool", "Electric Kettle"], image: "/hotellist2.png" },
    { id: 12, name: "Ghar Basai Urban Retreat", location: "Mumbai", price: 3500, rating: 4.9, reviews: 2134, amenities: ["Swimming Pool", "Gym", "Lift", "Living Area"], image: "/hotellist3.png" },
    { id: 13, name: "Ghar Basai Hills", location: "Shillong", price: 1850, rating: 4.7, reviews: 834, amenities: ["Living Area", "Electric Kettle"], image: "/hotellist1.png" },
    { id: 14, name: "Ghar Basai Sunset Point", location: "Goa", price: 2300, rating: 4.8, reviews: 1456, amenities: ["Swimming Pool", "Gym", "Electric Kettle"], image: "/hotellist2.png" },
    { id: 15, name: "Ghar Basai Palace", location: "Agra", price: 2950, rating: 4.9, reviews: 1678, amenities: ["Swimming Pool", "Lift", "Living Area"], image: "/hotellist3.png" },
    { id: 16, name: "Ghar Basai Serenity", location: "Goa", price: 2200, rating: 4.7, reviews: 1123, amenities: ["Swimming Pool", "Living Area", "Electric Kettle"], image: "/hotellist1.png" },
    { id: 17, name: "Ghar Basai Riverside", location: "Darjeeling", price: 1750, rating: 4.6, reviews: 890, amenities: ["Lift", "Electric Kettle"], image: "/hotellist2.png" },
    { id: 18, name: "Ghar Basai Lagoon", location: "Goa", price: 2400, rating: 4.8, reviews: 1567, amenities: ["Swimming Pool", "Gym", "Lift"], image: "/hotellist3.png" },
  ];

  const filteredHomestays = useMemo(() => {
    let filtered = allHomestays;

    if (selectedLocations.length > 0) {
      filtered = filtered.filter((h) => selectedLocations.includes(h.location));
    }

    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((h) =>
        selectedPriceRanges.some((rangeStr) => {
          const { min, max } = getPriceRange(rangeStr);
          return h.price >= min && h.price <= max;
        })
      );
    }

    if (selectedAmenities.length > 0) {
      filtered = filtered.filter((h) =>
        selectedAmenities.every((a) => h.amenities.includes(a))
      );
    }

    return filtered;
  }, [selectedLocations, selectedPriceRanges, selectedAmenities]);

  const totalPages = Math.ceil(filteredHomestays.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentHomestays = filteredHomestays.slice(startIndex, endIndex);

  const locations = [
    { name: "All", count: 250 },
    { name: "Darjeeling", count: 25 },
    { name: "Puri", count: 20 },
    { name: "Gangtok", count: 18 },
    { name: "Shillong", count: 12 },
    { name: "Goa", count: 22 },
    { name: "Mansoorie", count: 19 },
    { name: "Agra", count: 24 },
    { name: "Digha", count: 35 },
    { name: "Mumbai", count: 14 },
    { name: "Delhi", count: 18 },
    { name: "Chennai", count: 10 },
  ];

  const priceRanges = [
    "Under ₹1,500",
    "₹1,500 - ₹2,000",
    "₹2,000 - ₹2,500",
    "₹2,500 - ₹3,000",
    "₹3,000 & above",
  ];

  const amenities = [
    "Swimming Pool",
    "Lift",
    "Gym",
    "Electric Kettle",
    "Living Area",
  ];




   const hotel = [
    {
      title: "Comfortable, economical hotels",
      imageUrl: "/mask1.png",
      features: ["Top reviewed hotels", "Centrally located", "Free Wi-Fi"],
    },
    {
      title: "Comfortable, economical hotels",
      imageUrl: "/mask2.png",
      features: ["Top reviewed hotels", "Centrally located", "Free Wi-Fi"],
    },
    {
      title: "Comfortable, economical hotels",
      imageUrl: "/mask3.png",
      features: ["Top reviewed hotels", "Centrally located", "Free Wi-Fi"],
    },
  ];



  const testimonials = [
  {
    name: "John Warner",
    role: "Customer",
    image: "/man1.png",
    review:
      "Lorem ipsum dolor sit amet consectetur. Facilisis urna consectetur et risus commodo ultricies amet neteger. A fames tempor egestas ipsum volutpat congue egestas et eget quis. Vitae interdum adipis ultricies vitae.",
    stars: 5,
  },
  {
    name: "John Warner",
    role: "Customer",
    image: "/man1.png",
    review:
      "Lorem ipsum dolor sit amet consectetur. Facilisis urna consectetur et risus commodo ultricies amet neteger. A fames tempor egestas ipsum volutpat congue egestas et eget quis. Vitae interdum adipis ultricies vitae.",
    stars: 5,
  },
  {
    name: "John Warner",
    role: "Customer",
    image: "/man1.png",
    review:
      "Lorem ipsum dolor sit amet consectetur. Facilisis urna consectetur et risus commodo ultricies amet neteger. A fames tempor egestas ipsum volutpat congue egestas et eget quis. Vitae interdum adipis ultricies vitae.",
    stars: 5,
  },
];


  return (
    <>
      <section
        className="relative w-full h-[630px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/hotelimg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-white text-5xl md:text-6xl font-semibold tracking-wide"
        >
          Homestay
        </motion.h1>
      </section>

      <section className="w-full bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">

                {/* Locations */}
                <div className="border-b pb-4">
                  <button
                    onClick={() => toggleDropdown("locations")}
                    className="w-full flex items-center justify-between text-left font-semibold text-gray-800 mb-3"
                  >
                    Popular Locations
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === "locations" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === "locations" && (
                    <div className="space-y-2 mt-3">
                      {locations.map((loc) => (
                        <label
                          key={loc.name}
                          className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-gray-900"
                        >
                          <input
                            type="checkbox"
                            checked={
                              selectedLocations.length === 0 && loc.name === "All"
                                ? true
                                : selectedLocations.includes(loc.name)
                            }
                            onChange={() => toggleLocation(loc.name)}
                            className="mr-2 rounded"
                          />
                          {loc.name} ({loc.count})
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="border-b pb-4">
                  <button
                    onClick={() => toggleDropdown("price")}
                    className="w-full flex items-center justify-between text-left font-semibold text-gray-800 mb-3"
                  >
                    Price Per Night
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === "price" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === "price" && (
                    <div className="space-y-2 mt-3">
                      {priceRanges.map((range) => (
                        <label
                          key={range}
                          className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-gray-900"
                        >
                          <input
                            type="checkbox"
                            checked={selectedPriceRanges.includes(range)}
                            onChange={() => togglePriceRange(range)}
                            className="mr-2 rounded"
                          />
                          {range}
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Amenities */}
                <div>
                  <button
                    onClick={() => toggleDropdown("amenities")}
                    className="w-full flex items-center justify-between text-left font-semibold text-gray-800 mb-3"
                  >
                    Amenities
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === "amenities" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === "amenities" && (
                    <div className="space-y-2 mt-3">
                      {amenities.map((amenity) => (
                        <label
                          key={amenity}
                          className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-gray-900"
                        >
                          <input
                            type="checkbox"
                            checked={selectedAmenities.includes(amenity)}
                            onChange={() => toggleAmenity(amenity)}
                            className="mr-2 rounded"
                          />
                          {amenity}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600 text-sm">
                  Showing {filteredHomestays.length} results
                </p>

                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Default Sorting</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>

              {/* GRID USES FILTERED HOTELS */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {currentHomestays.map((homestay) => (
                  <motion.div
                    key={homestay.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="relative h-48">
                      <img
                        src={homestay.image}
                        alt={homestay.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-blue-600 mb-1 hover:underline">
                        {homestay.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {homestay.location}
                      </p>

                      <p className="text-gray-900 font-semibold mb-3">
                        Starts ₹{homestay.price.toLocaleString()} per night
                      </p>

                      <div className="flex items-center gap-2">
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded font-semibold flex items-center gap-1">
                          <Star className="w-3 h-3 fill-white" />
                          {homestay.rating}
                        </span>
                        <span className="text-sm text-gray-600">
                          {homestay.reviews.toLocaleString()} reviews
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  {[...Array(totalPages)].map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`px-4 py-2 rounded ${
                        currentPage === idx + 1
                          ? "bg-blue-600 text-white"
                          : "bg-white border border-gray-300"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-1 hover:bg-blue-700 transition"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>



  <motion.section
      className="w-full py-16 bg-[#F2E6FF]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP */}
        <motion.p
          className="text-sm font-semibold text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          OFFER
        </motion.p>

        <div className="flex items-center justify-between">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#4A2FA6]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Exclusive Deals For You
          </motion.h2>

          {/* Arrows */}
          <div className="flex gap-3">
            {["←", "→"].map((arrow, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-100"
              >
                {arrow}
              </motion.button>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-2xl overflow-hidden shadow-lg h-[260px] md:h-[300px]"
          >
            <Image
              src="/longstay.png"
              alt="Longstay"
              width={110}
              height={40}
              className="absolute top-6 left-6 z-20 object-contain"
            />

            <Image
              src="/image-about.png"
              alt="Deal Image"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">Avail Up to 55% Off</h3>
              <p className="text-sm mt-1 max-w-[80%]">
                Lorem ipsum dolor sit amet consectetur. Amet nec cursus risus.
              </p>

        <Link
  href="/tour-booking/domestic"
  className="mt-4 inline-block px-6 py-2 bg-[#A240F8] hover:bg-[#8e2add]
             transition-all duration-300
             rounded-full text-sm font-semibold
             hover:scale-105 active:scale-95"
>
  Book Now
</Link>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.03, y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-2xl overflow-hidden shadow-lg h-[260px] md:h-[300px]"
          >
            <Image
              src="/newlaunch.png"
              alt="Newlaunch"
              width={110}
              height={40}
              className="absolute top-6 left-6 z-20 object-contain"
            />

            <Image
              src="/image-about2.png"
              alt="Deal Image"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold">Exclusive 30% Off</h3>
              <p className="text-sm mt-1 max-w-[80%]">
                Lorem ipsum dolor sit amet consectetur. Amet nec cursus risus.
              </p>

         <Link
  href="/tour-booking/domestic"
  className="mt-4 inline-block px-6 py-2 bg-[#A240F8] hover:bg-[#8e2add]
             transition-all duration-300
             rounded-full text-sm font-semibold
             hover:scale-105 active:scale-95"
>
  Book Now
</Link>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>




       <div className="w-full bg-white text-gray-800">
      
            {/* Heading */}
            <div className="text-center py-12 px-4 max-w-4xl mx-auto">
              <p className="uppercase text-sm text-gray-500 tracking-wide">BRANDS</p>
      
              <h2 className="text-3xl font-bold text-indigo-600 mt-2">
                Our Leading Travel Brands
              </h2>
      
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet consectetur. At lorem ut cursus fringilla eu. 
                Accumsan vulputate sit placerat enim present sita ultricies dignissim et.
              </p>
      
              {/* Category buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button className="px-5 py-2 rounded-full bg-indigo-600 text-white shadow hover:bg-indigo-700">
                  Economical
                </button>
                <button className="px-5 py-2 rounded-full bg-[#C04CFD] text-white shadow hover:bg-pink-500">
                  Prime
                </button>
                <button className="px-5 py-2 rounded-full bg-[#C04CFD] text-white shadow hover:bg-purple-500">
                  Express
                </button>
              </div>
            </div>
      
            {/* Cards Section */}
            <div className="relative max-w-7xl mx-auto px-4 py-6">
      
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white shadow-lg rounded-full border hover:bg-gray-100 z-10"
              >
                <Image
                  src="/vector.png"
                  alt="Left"
                  width={20}
                  height={20}
                />
              </button>
      
              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white shadow-lg rounded-full border hover:bg-gray-100 z-10"
              >
                <Image
                  src="/vector.png"
                  alt="Right"
                  width={20}
                  height={20}
                  className="rotate-180"
                />
              </button>
      
              {/* CARD LIST */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
                {hotel.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white shadow-md rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition"
                  >
                    <div className="w-full h-56 relative rounded-xl overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
      
                    <h3 className="text-indigo-600 font-semibold mt-4 mb-3 text-[15px]">
                      {item.title}
                    </h3>
      
                    {/* Features */}
                    <ul className="text-sm text-gray-600 space-y-2">
                      {item.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <Image
                            src="/arrow.png"
                            alt="tick"
                            width={20}
                            height={20}
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
      
              </div>
            </div>
      </div>


       <section className="relative w-full h-[450px] lg:h-[400px] bg-black overflow-visible">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/getappimg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <p className="text-sm font-semibold tracking-wider uppercase text-gray-300">
              GET OUR APP
            </p>
            
            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold leading-tight">
              Smart Travel Starts With Our App
            </h2>
            
            <p className="text-gray-300 text-sm max-w-xl">
              Lorem ipsum dolor sit amet consectetur. At lorem ut cursus fringilla eu. 
              Accumsan volutpat ac et placerat enim praesent sit ultricies dignissim et.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Google Play Button */}
              <a 
                href="#" 
                className="inline-flex items-center gap-3 bg-black border border-white/30 rounded-lg px-6 py-3 hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D7FE"/>
                  <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FFCE00"/>
                  <path d="M3.84 2.15L6.05 2.66L14.54 11.15L6.05 2.66L3.84 2.15Z" fill="#00D863"/>
                  <path d="M16.81 8.88L19.78 10.59C20.54 11.03 20.54 12.12 19.78 12.56L16.81 14.27L14.54 12L16.81 8.88Z" fill="#FF4131"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-300">GET IT ON</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
              </a>

              {/* App Store Button */}
              <a 
                href="#" 
                className="inline-flex items-center gap-3 bg-black border border-white/30 rounded-lg px-6 py-3 hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-300">Download on the</p>
                  <p className="text-lg font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockup (Half Bottom Inside/Half Bottom Outside) */}
        <div className="relative flex justify-center lg:justify-end h-full">
  <div className={`absolute right-[100px] sm:right-[140px] md:right-[180px] lg:right-0 top-[60%] sm:top-[65%] md:top-[70%] lg:top-auto translate-y-0 lg:translate-y-1/2 w-full max-w-[220px] sm:max-w-[260px] md:max-w-xs lg:max-w-md`}>

    {/* Glow Effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 
                    bg-purple-600/30 rounded-full blur-3xl animate-pulse" />

    {/* Phone Image */}
    <div className="relative z-20 transform rotate-3 sm:rotate-4 md:rotate-5 lg:rotate-6 
                    transition-transform duration-500 hover:rotate-2 lg:hover:rotate-3">
      <img
        src="/phimg.png"
        alt="Mobile App Preview"
        className="w-full h-auto drop-shadow-[0_35px_60px_rgba(139,92,246,0.4)]"
      />
    </div>
  </div>
</div>
        </div>
      </div>
    </section>



    <section className="py-16 px-4 ">
      <p className="text-sm text-gray-500 font-semibold mb-2 text-center">TESTIMONIAL</p>
      <h2 className="text-3xl font-bold text-purple-700 mb-10 text-center">
        Kind Words from Our Community
      </h2>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-purple-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-2">Excellent Company</h3>
            <p className="text-sm text-gray-600 mb-4">{testimonial.review}</p>
            <div className="flex  mb-4">
              {Array(testimonial.stars)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
            </div>
            <div className="flex gap-4">
              {/* Display the image */}
    
    <Image
      src="/man1.png"
      alt={testimonial.name}
      width={36}
      height={36}
      className="rounded-full object-cover"
    />
    
    
              <div className="text-left">
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}