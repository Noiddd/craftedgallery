"use client";

import { ContentBlock } from "@/lib/types";
import { ContentRenderer } from "@/app/components/shared/ContentRenderer";

interface StorySectionProps {
  title: string;
  blocks: ContentBlock[];
}

export function StorySection({ title, blocks }: StorySectionProps) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant text-black mb-8">
        {title}
      </h2>
      <ContentRenderer blocks={blocks} />
    </div>
  );
}
