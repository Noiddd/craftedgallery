"use client";

import { FloatingToolbar } from "./FloatingToolbar";
import { ListFilter } from "lucide-react";

interface FilterButtonProps {
  onClick?: () => void;
  active?: boolean;
  count?: number;
}

export function FilterButton({ onClick, active, count }: FilterButtonProps) {
  return (
    <div className="relative">
      <FloatingToolbar className="p-2">
        <button
          onClick={onClick}
          className={`relative p-2.5 rounded-full transition-colors ${
            active ? "bg-black text-white" : "hover:bg-white/30 text-black"
          }`}
        >
          <ListFilter className="w-4.5 h-4.5" strokeWidth={2.5} />
        </button>
      </FloatingToolbar>
      {count !== undefined && count > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs font-medium rounded-full flex items-center justify-center z-10">
          {count}
        </span>
      )}
    </div>
  );
}
