"use client";

import { CraftedWithItem } from '@/lib/types';
import { CARD_SHADOW } from '@/lib/constants/styles';

interface CraftedWithSectionProps {
  items: CraftedWithItem[];
}

export function CraftedWithSection({ items }: CraftedWithSectionProps) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-cormorant font-medium text-black mb-6">
        Crafted With Obsession
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-6"
            style={{ boxShadow: CARD_SHADOW }}
          >
            <h3 className="text-base font-medium text-black mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
