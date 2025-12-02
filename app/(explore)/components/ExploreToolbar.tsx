"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { FloatingToolbar } from "@/app/components/ui/FloatingToolbar";
import { ToolbarButton } from "@/app/components/ui/ToolbarButton";
import { SearchButton } from "@/app/components/ui/SearchButton";
import { FilterButton } from "@/app/components/ui/FilterButton";
import { GRAIN_OVERLAY_SVG } from "@/lib/constants/grainOverlay";

interface ExploreToolbarProps {
  categories: readonly string[];
  selectedFilters: string[];
  onFiltersChange: (filters: string[]) => void;
}

const SHEET_SPRING = { type: "spring", damping: 25, stiffness: 300 } as const;
const CHECK_SPRING = { type: "spring", damping: 20, stiffness: 400 } as const;

// Category filter options (multi-select dropdown) - matches actual item categories
const FILTER_CATEGORIES = ["Home", "Carry", "Tech"] as const;

export function ExploreToolbar({
  categories,
  selectedFilters,
  onFiltersChange,
}: ExploreToolbarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);

  // Close sheet when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        toolbarRef.current &&
        !toolbarRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded]);

  // Separate toolbar filters from category filters
  const toolbarFilters = selectedFilters.filter((f) => categories.includes(f));
  const categoryFilters = selectedFilters.filter((f) =>
    FILTER_CATEGORIES.includes(f as any)
  );

  const toggleFilter = (category: string) => {
    const isSelected = categoryFilters.includes(category);
    const newCategoryFilters = isSelected
      ? categoryFilters.filter((f) => f !== category)
      : [...categoryFilters, category];

    // Combine toolbar filters with new category filters
    const newFilters = [...toolbarFilters, ...newCategoryFilters];

    // If no filters at all, default to "All"
    onFiltersChange(newFilters.length > 0 ? newFilters : ["All"]);
  };

  const handleToolbarClick = (category: string) => {
    // Keep category filters, but set only one toolbar filter
    const newFilters = [...categoryFilters, category];
    onFiltersChange(newFilters);
  };

  const isToolbarFilterActive = (category: string) => {
    return toolbarFilters.includes(category);
  };

  const activeFilterCount = categoryFilters.length;

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div ref={toolbarRef} className="relative flex items-center gap-2">
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={SHEET_SPRING}
          className="absolute bottom-full mb-2 left-0 right-0 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden will-change-transform"
        >
          <div
            className="absolute inset-0 opacity-40 pointer-events-none rounded-2xl bg-gray-500/30"
            style={{
              backgroundImage: GRAIN_OVERLAY_SVG,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />
          <div className="relative p-3 max-h-[50vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-2 px-2">
              <div className="text-xs font-medium text-black/40">
                Filter by category
              </div>
              {categoryFilters.length > 0 && (
                <button
                  onClick={() => {
                    onFiltersChange([...toolbarFilters]);
                    setIsExpanded(false);
                  }}
                  className="text-xs text-black/40 hover:text-black/60 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="space-y-1">
              {FILTER_CATEGORIES.map((category) => {
                const isSelected = categoryFilters.includes(category);
                return (
                  <button
                    key={category}
                    onClick={() => toggleFilter(category)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-colors hover:bg-white/50 text-black"
                  >
                    <span>{category}</span>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={CHECK_SPRING}
                      >
                        <Check className="w-4 h-4" />
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <FilterButton
          onClick={() => setIsExpanded(!isExpanded)}
          active={isExpanded}
          count={activeFilterCount}
        />
        <FloatingToolbar className="px-2 py-2 flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full">
          {categories.map((category) => (
            <ToolbarButton
              key={category}
              onClick={() => handleToolbarClick(category)}
              active={isToolbarFilterActive(category)}
            >
              {category}
            </ToolbarButton>
          ))}
        </FloatingToolbar>
        <SearchButton />
      </div>
    </div>
  );
}
