"use client";
import { motion } from "framer-motion";
import {
  Users,
  Headphones,
  Shield,
  Globe,
  Hotel,
  Plane,
  Map,
  Star,
  Calendar,
  Heart,
  ArrowRight,
  CheckCircle,
  Quote,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Exclusive Partnerships",
      description:
        "We work with trusted hotels, airlines, and local operators to secure exclusive rates and unique experiences you won't find anywhere else.",
      features: ["Preferred rates at 5,000+ properties", "Early check-in/late checkout privileges", "Complimentary upgrades when available"],
    },
    {
      icon: <Headphones className="w-10 h-10 text-green-500" />,
      title: "24/7 Support",
      description:
        "Real people are available to help at every step — before your trip, during your journey, and after you return.",
      features: ["Dedicated travel concierge", "Multilingual support team", "Emergency assistance guarantee"],
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-500" />,
      title: "Customised Plans",
      description:
        "Personalised itineraries built around your priorities — relaxation, adventure, heritage, honeymoon, or family tours.",
      features: ["Tailored daily schedules", "Activity recommendations based on preferences", "Flexible changes up to 48 hours before"],
    },
    {
      icon: <Hotel className="w-10 h-10 text-pink-500" />,
      title: "Luxury & Budget Hotels",
      description:
        "From 5-star luxury stays to budget-friendly guesthouses, we arrange accommodations tailored to your budget and taste.",
      features: ["Vetted properties only", "Price match guarantee", "Neighborhood recommendations"],
    },
    {
      icon: <Plane className="w-10 h-10 text-red-500" />,
      title: "Seamless Travel",
      description:
        "Flights, trains, buses, or private vehicles — Ghar Basai ensures smooth and comfortable travel options for every journey.",
      features: ["Priority boarding options", "Private transfers with meet & greet", "Real-time flight monitoring"],
    },
    {
      icon: <Map className="w-10 h-10 text-indigo-500" />,
      title: "Guided Tours",
      description:
        "Explore heritage sites, cultural experiences, adventure treks, and hidden gems with expert local guides.",
      features: ["Certified expert guides", "Skip-the-line access", "Small group sizes (max 8 people)"],
    },
    {
      icon: <Globe className="w-10 h-10 text-yellow-500" />,
      title: "Domestic & International Packages",
      description:
        "Choose from curated packages across India or explore international destinations with all-inclusive deals.",
      features: ["100+ pre-designed itineraries", "All-inclusive pricing", "Customization options available"],
    },
    {
      icon: <Heart className="w-10 h-10 text-rose-500" />,
      title: "Special Occasion Packages",
      description:
        "Celebrate your milestones with our specially curated honeymoon, anniversary, and birthday celebration packages.",
      features: ["Romantic setups & surprises", "Special occasion coordination", "Complimentary celebration amenities"],
    },
  ];

  const stats = [
    { value: "50K+", label: "Happy Travelers" },
    { value: "15+", label: "Years Experience" },
    { value: "35+", label: "Countries Covered" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  const testimonials = [
    {
      quote: "Ghar Basai planned our honeymoon to Bali perfectly. Every detail was taken care of, and their recommendations were spot on!",
      author: "Priya & Raj",
      location: "Mumbai",
    },
    {
      quote: "The customized Kashmir family tour was beyond our expectations. The guides were knowledgeable and the hotels were excellent.",
      author: "The Sharma Family",
      location: "Delhi",
    },
    {
      quote: "Their 24/7 support saved our trip when our flight got cancelled. They rearranged everything within hours!",
      author: "Amit Kumar",
      location: "Bangalore",
    },
  ];

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
<>
<br />
<br />
<br />

    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 opacity-10 rounded-full filter blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto text-center z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Exceptional Travel Experiences <span className="text-orange-400">Curated Just For You</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-indigo-100">
            Discover the difference of personalized travel services that transform your journeys into unforgettable memories.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
    <Link
      href="/contact"
      className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all text-lg font-medium"
    >
      Start Planning Your Journey
      <ArrowRight className="ml-2 w-5 h-5" />
    </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <motion.div 
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl font-bold text-indigo-600 mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-indigo-600">Comprehensive</span> Services
          </h2>
          <p className="text-gray-600 text-lg">
            From the initial planning to your return home, we provide end-to-end travel solutions tailored to your unique preferences and needs.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6">
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-2xl mb-6 mx-auto group-hover:bg-indigo-100 transition-colors"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6 text-center">
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm text-indigo-600 font-medium hover:text-indigo-800 flex items-center justify-center mx-auto"
                >
                  Learn more
                  <ArrowRight className="ml-1 w-4 h-4" />
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-indigo-600">Simple</span> Process
          </h2>
          <p className="text-gray-600 text-lg">
            Planning your dream vacation has never been easier with our streamlined approach.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Consult & Plan", desc: "Share your travel dreams with our experts" },
            { step: "02", title: "Customize & Book", desc: "Review and refine your personalized itinerary" },
            { step: "03", title: "Travel & Enjoy", desc: "Embark on your journey with 24/7 support" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl font-bold text-indigo-200 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our <span className="text-indigo-600">Travelers Say</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it - hear from travelers who have experienced our services firsthand.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-indigo-200 mb-4" />
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-gray-800">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Embark on Your Next Adventure?</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Let us transform your travel dreams into unforgettable memories with our personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all text-lg font-medium"
            >
              Plan Your Journey
            </motion.a>
              <Link
      href="/custom"
      className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all text-lg font-medium"
    >
      Browse Packages
    </Link>
          </div>
        </motion.div>
               <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white font-medium hover:underline"
          >
            ← Back to About page
          </Link>
        </motion.div>
      </section>
   
    </div>
    
    </>
  );
}