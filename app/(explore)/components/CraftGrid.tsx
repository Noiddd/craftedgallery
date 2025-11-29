"use client";

import { CraftItem } from '@/lib/types';
import { CraftCard } from '@/app/components/ui/CraftCard';

interface CraftGridProps {
  items: CraftItem[];
  selectedFilter: string;
}

export function CraftGrid({ items, selectedFilter }: CraftGridProps) {
  const filteredItems =
    selectedFilter === "All"
      ? items
      : items.filter((item) => item.category === selectedFilter);

  return (
    <section className="max-w-[1800px] mx-auto px-8 pb-32">
      <div className="grid grid-cols-3 gap-3">
        {filteredItems.map((item) => (
          <CraftCard key={item.id} craft={item} />
        ))}
      </div>
    </section>
  );
}
