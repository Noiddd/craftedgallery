"use client";

import { CraftItem } from "@/lib/types";
import { CraftCard } from "@/app/components/ui/CraftCard";

interface CraftGridProps {
  items: CraftItem[];
}

export function CraftGrid({ items }: CraftGridProps) {
  return (
    <section className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {items.map((item) => (
          <CraftCard key={item.id} craft={item} />
        ))}
      </div>
    </section>
  );
}
