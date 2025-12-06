"use client";

import { CraftedWithItem } from "@/lib/types";
import { CARD_SHADOW } from "@/lib/constants/styles";

interface CraftedWithSectionProps {
  items: CraftedWithItem[];
  expandedIndices: number[];
  setExpandedIndices: React.Dispatch<React.SetStateAction<number[]>>;
}

export function CraftedWithSection({
  items,
  expandedIndices,
  setExpandedIndices,
}: CraftedWithSectionProps) {
  const toggleItem = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-cormorant font-medium text-black mb-4 sm:mb-6">
        Crafted With Obsession
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {items.map((item, index) => {
          const isExpanded = expandedIndices.includes(index);

          return (
            <button
              key={index}
              onClick={() => toggleItem(index)}
              className="bg-card rounded-2xl p-4 sm:p-5 md:p-6 text-left w-full transition-all duration-200 hover:scale-[1.01]"
              style={{ boxShadow: CARD_SHADOW }}
              aria-expanded={isExpanded}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm sm:text-base font-medium text-black">
                  {item.title}
                </h3>
                <svg
                  className="w-5 h-5 flex-shrink-0 text-gray-600 transition-transform duration-200"
                  style={{
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: isExpanded ? "500px" : "0px",
                  opacity: isExpanded ? 1 : 0,
                }}
              >
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-3">
                  {item.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
