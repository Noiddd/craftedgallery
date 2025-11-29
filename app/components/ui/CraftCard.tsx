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
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden"
      style={{ boxShadow: CARD_SHADOW }}
    >
      <div className="relative aspect-square bg-white flex items-center justify-center">
        <span className="text-gray-400 text-sm">Image placeholder</span>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <p className="text-xs text-gray-500 mb-1">
            {craft.maker} · {craft.category}
          </p>
          <h3 className="text-sm font-medium text-black">
            {craft.name}
          </h3>
        </div>
        {craft.isStaffPick && (
          <div className="flex items-center gap-1 text-xs text-amber-600 mt-2">
            <span>⭐</span>
            <span className="font-medium">Curator's Choice</span>
          </div>
        )}
      </div>
    </Link>
  );
}
