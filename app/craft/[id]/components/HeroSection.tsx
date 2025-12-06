"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { CraftDetail } from "@/lib/types";
import { CARD_SHADOW } from "@/lib/constants/styles";

interface HeroSectionProps {
  craft: CraftDetail;
}

export function HeroSection({ craft }: HeroSectionProps) {
  return (
    <section className="max-w-7xl mx-auto pt-4 sm:pt-6 md:pt-8">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="flex-1">
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            {craft.maker} · {craft.category}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-medium text-black mb-2 sm:mb-3 tracking-tight">
            {craft.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-600">{craft.tagline}</p>
        </div>

        {/* Desktop button - hidden on mobile */}
        <div className="hidden sm:flex items-end gap-3">
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium flex items-center gap-2 whitespace-nowrap">
            Purchase Link
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        className="bg-card rounded-2xl overflow-hidden"
        style={{ boxShadow: CARD_SHADOW }}
      >
        <div className="w-full aspect-video relative bg-card">
          <Image
            src={craft.image}
            alt={craft.name}
            fill
            className="object-contain p-8 sm:p-16 md:p-20 lg:p-24"
            priority
          />
        </div>
      </div>

      {/* Mobile button - full width below image */}
      <button className="sm:hidden w-full mt-4 px-4 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium flex items-center justify-center gap-2">
        Purchase Link
        <ExternalLink className="w-4 h-4" />
      </button>
    </section>
  );
}
