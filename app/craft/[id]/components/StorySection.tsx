"use client";

import { CARD_SHADOW } from '@/lib/constants/styles';

interface StorySectionProps {
  title: string;
  paragraphs: string[];
}

export function StorySection({
  title,
  paragraphs,
}: StorySectionProps) {
  return (
    <div
      className="bg-black text-white rounded-2xl p-10 md:p-16"
      style={{ boxShadow: CARD_SHADOW }}
    >
      <h2 className="text-2xl font-cormorant font-medium mb-6">
        {title}
      </h2>
      <div className="space-y-4 text-gray-200 leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
