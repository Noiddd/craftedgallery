"use client";

import { EmailSubscriptionForm } from "@/app/(explore)/components/EmailSubscriptionForm";

export default function Footer() {
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-bold tracking-wide">
                CRAFTED GALLERY
              </h2>
            </div>
            {/* Tagline */}
            <p className="text-gray-300 text-xs md:text-sm max-w-2xl text-center px-4">
              Greatness has a story. Learn from individuals at the top of their
              craft.
            </p>
            {/* Email Subscription Form */}
            <div className="w-full">
              <EmailSubscriptionForm />
            </div>
          </div>

          {/* Bottom Section - Navigation Links Spread Horizontally */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4">
            {/* <Link
              href="/about"
              className="flex items-center gap-2 group text-sm sm:text-base hover:text-gray-300 transition-colors duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            >
              <span>About</span>
            </Link> */}

            {/* <Link
              href="/contact"
              className="text-sm sm:text-base hover:text-gray-300 transition-colors duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            >
              Contact us
            </Link> */}

            {/* <Link
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
            </Link> */}
          </nav>
        </div>
      </div>
    </footer>
  );
}
