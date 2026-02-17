"use client";

import { useState } from "react";
import { BG_COLOR } from "@/lib/constants/styles";
import { categories } from "@/lib/data/categories";
import { HeroSection } from "./components/HeroSection";
import { CraftGrid } from "./components/CraftGrid";
import { ExploreToolbar } from "./components/ExploreToolbar";
import { useCrafts } from "@/lib/hooks/useCrafts";

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);

  // Separate view filter from category filters
  const viewFilter = selectedFilters.includes("New") ? "new" : "all";
  const categoryFilters = selectedFilters.filter(
    (f) => f !== "New" && f !== "All",
  );

  const {
    data: crafts,
    isLoading,
    error,
  } = useCrafts({
    categories: categoryFilters.length > 0 ? categoryFilters : undefined,
    view: viewFilter,
  });

  if (error) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: BG_COLOR }}
      >
        <div className="text-center">
          <p className="text-red-600">Error loading crafts</p>
          <p className="text-sm text-gray-600 mt-2">{String(error)}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: BG_COLOR }}
      ></div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG_COLOR }}>
      <HeroSection />
      <CraftGrid items={crafts || []} />
      {/* <ExploreToolbar
        categories={categories}
        selectedFilters={selectedFilters}
        onFiltersChange={setSelectedFilters}
      /> */}
    </div>
  );
}
