"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BG_COLOR } from "@/lib/constants/styles";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav style={{ backgroundColor: BG_COLOR }}>
      <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-2xl font-semibold font-cormorant  text-black hover:text-gray-600 transition-colors"
            >
              Crafted Gallery
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-black" : "text-gray-600 hover:text-black"}`}
            >
              Explore
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${pathname === "/about" ? "text-black" : "text-gray-600 hover:text-black"}`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
