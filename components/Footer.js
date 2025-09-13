"use client";

import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Section 1: Brand and Socials */}
        <div>
          <h2 className="text-2xl font-bold text-purple-600 mb-4">Ghar Basai</h2>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet consectetur. Massa sed felis vivera a elementum sit rutrum lacus et ut.
          </p>
          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-purple-600"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-purple-600"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-purple-600"><FaLinkedinIn size={20} /></a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">› Home</a></li>
            <li><a href="#" className="hover:text-white">› About Us</a></li>
            <li><a href="#" className="hover:text-white">› Hotels</a></li>
            <li><a href="#" className="hover:text-white">› Gallery</a></li>
            <li><a href="#" className="hover:text-white">› FAQ</a></li>
            <li><a href="#" className="hover:text-white">› Contact Us</a></li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact With Us</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>1234 Road, Info, Example 3029, Example</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>0123 456 789</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@gharbasai.com</span>
            </li>
          </ul>
        </div>

        {/* Section 4: Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Sign up with your email address to receive news and updates</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your E-mail Address" 
              className="px-4 py-2 rounded-l bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-purple-600 px-4 py-2 rounded-r hover:bg-purple-700">
              SUBSCRIBE
            </button>
          </form>
        </div>

      </div>

      <hr className="border-gray-800 my-6" />

      <p className="text-center text-gray-500 text-sm">
        Copyright © 2025 Ghar Basai. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
