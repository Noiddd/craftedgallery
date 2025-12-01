"use client";

import { FloatingToolbar } from './FloatingToolbar';
import { ListFilter } from 'lucide-react';

export function FilterButton() {
  return (
    <FloatingToolbar className="p-2">
      <button className="relative p-2 hover:bg-white/30 rounded-full transition-colors">
        <ListFilter className="w-5 h-5 text-black" />
      </button>
    </FloatingToolbar>
  );
}
