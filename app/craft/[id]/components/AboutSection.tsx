"use client";

import React, { useState, useRef } from "react";
import { CraftedWithItem } from "@/lib/types";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

interface AboutSectionProps {
  description: string;
  longDescription: string;
  craftedWithItems: CraftedWithItem[];
}

function MouseFollowTooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <span
        ref={triggerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="font-bold text-black cursor-help underline underline-offset-2 active:text-gray-600 transition-colors"
      >
        {children}
      </span>
      {isOpen && (
        <div
          className="fixed z-50 w-[320px] sm:w-[360px] px-5 py-4 bg-foreground text-background rounded-md text-sm leading-relaxed pointer-events-none text-left"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, calc(-100% - 12px))",
          }}
        >
          {content}
        </div>
      )}
    </>
  );
}

export function AboutSection({
  description,
  longDescription,
  craftedWithItems,
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

    const parts: (string | React.ReactNode)[] = [];
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
        const item = craftedWithItems[index];
        parts.push(
          <MouseFollowTooltip
            key={`crafted-${index}-${keyCounter++}`}
            content={item.description}
          >
            {matchedText}
          </MouseFollowTooltip>
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
