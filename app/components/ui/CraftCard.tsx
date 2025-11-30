"use client";

import Link from 'next/link';
import { CraftItem } from '@/lib/types';
import { CARD_SHADOW } from '@/lib/constants/styles';

interface CraftCardProps {
  craft: CraftItem;
}

export function CraftCard({ craft }: CraftCardProps) {
  return (
    <Link
      href={`/craft/${craft.id}`}
      className="group cursor-pointer bg-card rounded-2xl overflow-hidden"
      style={{ boxShadow: CARD_SHADOW }}
    >
      <div className="relative aspect-square bg-card flex items-center justify-center">
        <span className="text-gray-400 text-sm">Image placeholder</span>
        {craft.isStaffPick && (
          <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-amber-600">
            <span>⭐</span>
            <span className="font-medium">Curator's Choice</span>
          </div>
        )}
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
    </Link>
  );
}
