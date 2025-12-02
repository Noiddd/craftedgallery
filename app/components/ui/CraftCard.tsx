"use client";

import Link from "next/link";
import Image from "next/image";
import { CraftItem } from "@/lib/types";
import { CARD_SHADOW } from "@/lib/constants/styles";

interface CraftCardProps {
  craft: CraftItem;
}

export function CraftCard({ craft }: CraftCardProps) {
  return (
    <div className="group mb-8">
      <Link
        href={`/craft/${craft.id}`}
        className="block cursor-pointer bg-card rounded-2xl overflow-hidden"
        style={{ boxShadow: CARD_SHADOW }}
      >
        <div className="relative aspect-square bg-card overflow-hidden flex items-center justify-center p-12">
          <div className="relative w-full h-full transition-transform duration-200 ease motion-safe:group-hover:-translate-y-[0.2rem]">
            <Image
              src={craft.image}
              alt={craft.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Link>
      <div className="p-3 text-left">
        <p className="text-xs text-gray-500 mb-1">
          {craft.maker} · {craft.category}
        </p>
        <h3 className="text-sm font-medium text-black">{craft.name}</h3>
        <p className="text-xs text-gray-600 mt-1">{craft.description}</p>
      </div>
    </div>
  );
}
