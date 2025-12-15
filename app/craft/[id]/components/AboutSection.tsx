"use client";

import React from "react";
import { CraftDetail } from "@/lib/types";
import { ExternalLink } from "lucide-react";
import { ContentRenderer } from "@/app/components/shared/ContentRenderer";

interface AboutSectionProps {
  craft: CraftDetail;
}

export function AboutSection({ craft }: AboutSectionProps) {
  return (
    <div className="relative">
      <div className="">
        {/* Title section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cormorant text-black mb-3 sm:mb-4 leading-tight">
          {craft.name}
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-cormorant text-black mb-3 sm:mb-6 font-medium">
          {craft.tagline}
        </h2>

        {/* Tagline - standalone on mobile, with Purchase button on tablet+ */}
        <div className="sm:flex sm:items-start sm:justify-between sm:gap-4 mb-4 sm:pb-4 sm:border-b sm:border-gray-300">
          <div className="text-left flex items-center gap-2 mb-1">
            <p className="text-md text-black">{craft.maker}</p>
            <span className="text-gray-400">·</span>
            <p className="text-md text-gray-500">{craft.category}</p>
          </div>
          {craft.purchase_link && (
            <a
              href={craft.purchase_link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer hidden sm:flex px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium items-center gap-2 shrink-0"
            >
              Purchase
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Purchase button - shown on mobile only, full width */}
        {craft.purchase_link && (
          <div className="sm:hidden mb-10 pb-6 border-b border-gray-300">
            <a
              href={craft.purchase_link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              Purchase
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        <ContentRenderer blocks={craft.description} />
      </div>
    </div>
  );
}
