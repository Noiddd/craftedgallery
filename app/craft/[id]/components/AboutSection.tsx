"use client";

import React from "react";
import { CraftDetail } from "@/lib/types";
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

        <div className="mb-4 sm:pb-4 sm:border-b sm:border-gray-300">
          <p className="text-md text-gray-500">{craft.category}</p>
        </div>

        <ContentRenderer blocks={craft.description} />
      </div>
    </div>
  );
}
