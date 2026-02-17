"use client";

import Link from "next/link";
import { BG_COLOR } from "@/lib/constants/styles";

export default function Navigation() {
  return (
    <nav style={{ backgroundColor: BG_COLOR }}>
      <div className="max-w-[1800px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-xl font-semibold font-cormorant  text-black hover:text-gray-600 transition-colors"
            >
              Crafted Gallery
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
            >
              Explore
            </Link>
            <Link
              href="/read"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
