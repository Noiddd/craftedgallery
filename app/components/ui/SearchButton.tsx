"use client";

import { FloatingToolbar } from './FloatingToolbar';

export function SearchButton() {
  return (
    <FloatingToolbar className="p-2">
      <button className="relative p-2 hover:bg-white/30 rounded-full transition-colors">
        <svg
          className="w-5 h-5 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </FloatingToolbar>
  );
}
