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
    <section className="max-w-[1800px] mx-auto px-8 pt-16">
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500 mb-2">
            {craft.maker} · {craft.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-cormorant font-medium text-black mb-3 tracking-tight">
            {craft.name}
          </h1>
          <p className="text-base text-gray-600">{craft.tagline}</p>
        </div>

        <div className="flex items-end gap-3">
          <p className="text-3xl font-medium text-black">${craft.price}</p>
          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium flex items-center gap-2">
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
            className="object-contain p-8"
            priority
          />
          {craft.isStaffPick && (
            <div className="absolute top-6 right-6 flex items-center gap-1.5 text-sm text-amber-600 font-medium">
              <span>⭐</span>
              <span>Curator's Choice</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
