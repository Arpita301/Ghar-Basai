import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* GHAR BASAI LOGO + TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-purple-400">Ghar Basai</h2>
            <p className="text-gray-300 mt-3">
              Lorem ipsum dolor sit amet consectetur. Massa sed felis viverra a 
              elementum sit rutrum lacus et.
            </p>

            {/* SOCIAL ICONS - you already have images */}
            <div className="flex items-center gap-4 mt-4">
              <img src="/facebook.png" className="w-6" alt="facebook" />
              <img src="/insta.png" className="w-6" alt="instagram" />
              <img src="/linkedin.png" className="w-6" alt="linkedin" />
            </div>
          </div>

          {/* QUICK LINKS */}
  <div>
<h3 className="text-lg font-semibold mb-2">Quick Links</h3>
<div className="w-13 h-[2px] bg-white mb-4"></div>


  <ul className="space-y-2 text-gray-300">
    {[
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Hotels", href: "/hotel/hotel-list" },
      { name: "Gallery", href: "/gallery" },
      { name: "FAQ", href: "/tour-booking/domestic" },
      { name: "Contact Us", href: "/contact" },
    ].map((item) => (
      <li key={item.name} className="flex items-center gap-2">
        {/* Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>

        <Link href={item.href} className="hover:text-white transition">
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>
          {/* CONTACT WITH US */}
          <div>
<h3 className="text-lg font-semibold mb-2">Contact With Us</h3>
<div className="w-13 h-[2px] bg-white mb-4"></div>



            <div className="space-y-4 text-gray-300">

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
                  {/* Location Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 
                         1.343-3 3 1.343 3 3 3zm0 0c-1.657 0-3 1.343-3 
                         3s1.343 6 3 6 3-3.343 3-6-1.343-3-3-3z"
                    />
                  </svg>
                </div>
                <p>1234 Road, Info, Example 3029,Example </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
                  {/* Phone Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M3 5a2 2 0 012-2h2l2 4-2 1c1.5 3.5 4 6 7.5 7.5l1-2 
                         4 2v2a2 2 0 01-2 2h-1C9.82 20 4 14.18 4 7V5z"
                    />
                  </svg>
                </div>
                <p>0123 456 789</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-md flex items-center justify-center">
                  {/* Email Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M4 6h16M4 6l8 6 8-6m-16 
                        0v10h16V6"
                    />
                  </svg>
                </div>
                <p>info@gharbasai.com</p>
              </div>

            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
<h3 className="text-lg font-semibold mb-2">Newsletter</h3>
<div className="w-13 h-[2px] bg-white mb-4"></div>



            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your E-mail Address"
                className="w-full px-4 py-2 rounded-l-full bg-white/10 text-white placeholder-gray-300 outline-none"
              />
              <button className="bg-blue-600 px-5 py-2 rounded-r-full font-semibold">
                SUBSCRIBE
              </button>
            </div>

            <p className="text-gray-300 mt-1">
              Sign up with your email address to receive news and updates
            </p>
          </div>
        </div>

        {/* WHITE SEPARATOR LINE */}
        <div className="w-full h-px bg-white/20 mt-10"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-gray-400 mt-6">
          Copyright © 2025 Ghar Basai. All rights reserved
        </p>
      </div>
    </footer>
  );
}
