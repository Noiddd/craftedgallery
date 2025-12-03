"use client";

import { useState } from "react";
import { BG_COLOR } from "@/lib/constants/styles";
import { craftItems } from "@/lib/data/craftItems";
import { categories } from "@/lib/data/categories";
import { HeroSection } from "./components/HeroSection";
import { CraftGrid } from "./components/CraftGrid";
import { ExploreToolbar } from "./components/ExploreToolbar";

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG_COLOR }}>
      {/* <HeroSection /> */}
      <CraftGrid items={craftItems} selectedFilters={selectedFilters} />
      <ExploreToolbar
        categories={categories}
        selectedFilters={selectedFilters}
        onFiltersChange={setSelectedFilters}
      />
    </div>
  );
}
