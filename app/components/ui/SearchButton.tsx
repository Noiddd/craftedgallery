"use client";

import { Search } from "lucide-react";
import { FloatingToolbar } from "./FloatingToolbar";

export function SearchButton() {
  return (
    <FloatingToolbar className="p-2">
      <button className="relative p-2.5 hover:bg-white/30 rounded-full transition-colors">
        <Search className="w-4.5 h-4.5 text-black" strokeWidth={2.5} />
      </button>
    </FloatingToolbar>
  );
}
