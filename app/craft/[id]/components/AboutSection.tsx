"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { CraftDetail, CraftedWithItem } from "@/lib/types";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ExternalLink } from "lucide-react";

interface AboutSectionProps {
  description: string;
  longDescription: string;
  craftedWithItems: CraftedWithItem[];
  craft: CraftDetail;
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
        className="underline underline-offset-2 decoration-1 cursor-help hover:text-gray-900 transition-colors italic font-bold"
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
  craft,
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

      // Add clickable underlined text
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
    <div className="relative">
      <div className="">
        <div className="text-left flex items-center gap-2 mb-1">
          <p className="text-md text-black">{craft.maker}</p>
          <span className="text-gray-400">·</span>
          <p className="text-md text-gray-500">{craft.name}</p>
        </div>
        {/* Title section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cormorant text-black mb-3 sm:mb-6 leading-tight">
          {craft.name}
        </h1>

        {/* Tagline - standalone on mobile, with Purchase button on tablet+ */}
        <div className="sm:flex sm:items-start sm:justify-between sm:gap-4 mb-4 sm:pb-4 sm:border-b sm:border-gray-200">
          <p className="text-lg sm:text-xl font-cormorant text-gray-800 mb-6 sm:mb-0 sm:flex-1">
            {craft.tagline}
          </p>
          <button className="hover:cursor-pointer hidden sm:flex px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium items-center gap-2 shrink-0">
            Purchase
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Purchase button - shown on mobile only, full width */}
        <div className="sm:hidden mb-10 pb-6 border-b border-gray-200">
          <button className="w-full px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium flex items-center justify-center gap-2">
            Purchase
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Description */}
        <div className="space-y-5 text-base sm:text-lg leading-relaxed">
          <p className="text-gray-900">{processText(description)}</p>
          <p className="text-gray-900">{processText(longDescription)}</p>
        </div>
      </div>
    </div>
  );
}
