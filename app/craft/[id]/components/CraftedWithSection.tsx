"use client";

import { CraftedWithItem } from '@/lib/types';
import { CARD_SHADOW } from '@/lib/constants/styles';

interface CraftedWithSectionProps {
  items: CraftedWithItem[];
}

export function CraftedWithSection({ items }: CraftedWithSectionProps) {
  return (
    <div className="mb-10 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl font-cormorant font-medium text-black mb-4 sm:mb-6">
        Crafted With Obsession
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-4 sm:p-5 md:p-6"
            style={{ boxShadow: CARD_SHADOW }}
          >
            <h3 className="text-sm sm:text-base font-medium text-black mb-2 sm:mb-3">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
