"use client";

import Image from 'next/image';
import { RelatedCraft } from '@/lib/types';
import { CARD_SHADOW } from '@/lib/constants/styles';

interface RelatedCraftCardProps {
  craft: RelatedCraft;
}

export function RelatedCraftCard({ craft }: RelatedCraftCardProps) {
  return (
    <div className="cursor-pointer group">
      <div
        className="bg-white rounded-2xl overflow-hidden mb-4 transition-all"
        style={{ boxShadow: CARD_SHADOW }}
      >
        <div className="aspect-square bg-white relative">
          <Image
            src={craft.image}
            alt={craft.name}
            fill
            className="object-contain p-8"
          />
        </div>
      </div>
      <h3 className="text-lg font-medium text-black mb-1">
        {craft.name}
      </h3>
      <p className="text-sm text-gray-600 mb-2">{craft.tagline}</p>
      <p className="text-sm text-gray-900">
        ${craft.price.toLocaleString()}
      </p>
    </div>
  );
}
