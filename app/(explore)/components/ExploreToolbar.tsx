"use client";

import { FloatingToolbar } from '@/app/components/ui/FloatingToolbar';
import { ToolbarButton } from '@/app/components/ui/ToolbarButton';
import { SearchButton } from '@/app/components/ui/SearchButton';

interface ExploreToolbarProps {
  categories: readonly string[];
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export function ExploreToolbar({ categories, selectedFilter, onFilterChange }: ExploreToolbarProps) {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 flex justify-center items-center gap-2 px-4 sm:px-6 lg:px-8">
      <FloatingToolbar className="px-2 py-2 flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full">
        {categories.map((category) => (
          <ToolbarButton
            key={category}
            onClick={() => onFilterChange(category)}
            active={selectedFilter === category}
          >
            {category}
          </ToolbarButton>
        ))}
      </FloatingToolbar>
      <SearchButton />
    </div>
  );
}
