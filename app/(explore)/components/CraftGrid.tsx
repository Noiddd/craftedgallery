"use client";

import { CraftItem } from "@/lib/types";
import { CraftCard } from "@/app/components/ui/CraftCard";

interface CraftGridProps {
  items: CraftItem[];
}

export function CraftGrid({ items }: CraftGridProps) {
  return (
    <section className="lg:px-8 pb-24 sm:pb-32 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {items.map((item) => (
          <CraftCard key={item.id} craft={item} />
        ))}
      </div>
    </section>
  );
}
