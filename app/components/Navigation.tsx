"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-[#f8f8f8]">
      <div className="max-w-[1800px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="block w-8 h-8 flex items-center justify-center"
            >
              <svg
                className="w-6 h-6 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="flex items-center space-x-8">
            {/* <Link
              href="/"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
            >
              Explore
            </Link>
            <Link
              href="/read"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              Read
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
