"use client";

import Image from "next/image";
import { CraftDetail } from "@/lib/types";
import { CARD_SHADOW } from "@/lib/constants/styles";

interface HeroSectionProps {
  craft: CraftDetail;
}

export function HeroSection({ craft }: HeroSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-12">
      <div
        className="bg-card rounded-2xl overflow-hidden"
        style={{ boxShadow: CARD_SHADOW }}
      >
        <div className="w-full aspect-video relative bg-card">
          {craft.image_url && (
            <Image
              src={craft.image_url}
              alt={craft.name}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
