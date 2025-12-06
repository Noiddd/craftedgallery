"use client";

import { CraftedWithItem } from "@/lib/types";

interface AboutSectionProps {
  description: string;
  longDescription: string;
  craftedWithItems: CraftedWithItem[];
  onCraftedWithClick: (index: number) => void;
}

export function AboutSection({
  description,
  longDescription,
  craftedWithItems,
  onCraftedWithClick,
}: AboutSectionProps) {
  const processText = (text: string) => {
    if (!text) return text;

    // Create a map of lowercase titles to their indices
    const titleMap = new Map<string, number>();
    craftedWithItems.forEach((item, index) => {
      titleMap.set(item.title.toLowerCase(), index);
    });

    // Create a regex pattern that matches any of the crafted with titles
    const titles = craftedWithItems.map((item) => item.title);
    if (titles.length === 0) return text;

    // Escape special regex characters and create pattern
    const escapedTitles = titles.map((title) =>
      title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const pattern = new RegExp(`\\b(${escapedTitles.join("|")})\\b`, "gi");

    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;
    let keyCounter = 0;

    while ((match = pattern.exec(text)) !== null) {
      // Add text before match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Add clickable bold text
      const matchedText = match[0];
      const matchedTitle = match[1];
      const index = titleMap.get(matchedTitle.toLowerCase());

      if (index !== undefined) {
        parts.push(
          <button
            key={`crafted-${index}-${keyCounter++}`}
            onClick={() => onCraftedWithClick(index)}
            className="font-bold text-black hover:text-gray-600 transition-colors duration-200 cursor-pointer underline decoration-dotted underline-offset-2"
          >
            {matchedText}
          </button>
        );
      } else {
        parts.push(matchedText);
      }

      lastIndex = pattern.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-cormorant font-medium text-black mb-4 sm:mb-6">
        About This Craft
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {processText(description)}
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {processText(longDescription)}
        </p>
      </div>
    </div>
  );
}
