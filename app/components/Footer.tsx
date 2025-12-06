"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", email);
  };

  return (
    <footer
      className="text-white pt-8 md:pt-16 pb-24 md:pb-40"
      style={{ backgroundColor: "#2c1810" }}
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-8 py-8 md:py-16">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
          {/* Top Section - Centered */}
          <div className="flex flex-col items-center space-y-3 md:space-y-4">
            {/* Logo and Heading */}
            <div className="space-y-2 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-light tracking-wide">
                CRAFTED GALLERY
              </h2>
            </div>
            {/* Tagline */}
            <p className="text-gray-300 text-xs md:text-sm max-w-2xl text-center px-4">
              Stories of obsession, precision, and things built to outlive us.
              Every week.
            </p>
            {/* Email Subscription Form */}
            <div className="space-y-4 w-full px-4">
              <form
                onSubmit={handleSubscribe}
                className="max-w-md mx-auto w-full"
              >
                <div className="relative">
                  <input
                    type="email"
                    id="footer-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@domain.com"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-24 sm:pr-32 bg-card border border-gray-300 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 sm:px-6 text-[#2c1810] rounded-full transition-colors duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] text-xs sm:text-sm font-medium hover:bg-[#2c1810] hover:text-white"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Section - Navigation Links Spread Horizontally */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4">
            <Link
              href="/about"
              className="flex items-center gap-2 group text-sm sm:text-base hover:text-gray-300 transition-colors duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            >
              <span>About</span>
            </Link>

            <Link
              href="/contact"
              className="text-sm sm:text-base hover:text-gray-300 transition-colors duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            >
              Contact us
            </Link>

            <Link
              href="/advertise"
              className="text-sm sm:text-base hover:text-gray-300 transition-colors duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            >
              Advertise with us
            </Link>

            <Link
              href="/sitemap"
              className="text-sm sm:text-base hover:text-gray-300 transition-colors duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            >
              Site map
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
