"use client";

import Image from 'next/image';
import { RelatedCraft } from '@/lib/types';
import { CARD_SHADOW } from '@/lib/constants/styles';

interface RelatedCraftCardProps {
  craft: RelatedCraft;
}

export function RelatedCraftCard({ craft }: RelatedCraftCardProps) {
  return (
    <div
      className="cursor-pointer group bg-white rounded-2xl overflow-hidden"
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
      <div className="p-4">
        <div className="mb-2">
          <p className="text-xs text-gray-500 mb-1">
            {craft.maker} · {craft.category}
          </p>
          <h3 className="text-sm font-medium text-black">
            {craft.name}
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            {craft.description}
          </p>
        </div>
      </div>
    </div>
  );
}
