"use client";

import { CraftItem } from '@/lib/types';
import { CraftCard } from '@/app/components/ui/CraftCard';

interface CraftGridProps {
  items: CraftItem[];
  selectedFilters: string[];
}

// Toolbar filter categories (special filters)
const TOOLBAR_CATEGORIES = ["All", "New"];
// Category filter categories (actual item categories)
const CATEGORY_FILTERS = ["Home", "Carry", "Tech"];

export function CraftGrid({ items, selectedFilters }: CraftGridProps) {
  // Separate toolbar filters from category filters
  const toolbarFilters = selectedFilters.filter((f) =>
    TOOLBAR_CATEGORIES.includes(f)
  );
  const categoryFilters = selectedFilters.filter((f) =>
    CATEGORY_FILTERS.includes(f)
  );

  let filteredItems = items;

  // Apply toolbar filters first
  const toolbarFilter = toolbarFilters[0]; // Only one toolbar filter should be active
  if (toolbarFilter === "New") {
    // Show newest items (e.g., highest IDs or most recently added)
    filteredItems = filteredItems.filter((item) => item.id >= 4);
  }
  // If "All" or no toolbar filter, don't filter by toolbar

  // Apply category filters (if any selected)
  if (categoryFilters.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      categoryFilters.includes(item.category)
    );
  }

  return (
    <section className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <CraftCard key={item.id} craft={item} />
        ))}
      </div>
    </section>
  );
}
