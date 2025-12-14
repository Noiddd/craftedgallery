"use client";

import { ContentBlock } from "@/lib/types";

interface ContentRendererProps {
  blocks: ContentBlock[];
  className?: string;
}

export function ContentRenderer({
  blocks,
  className = "",
}: ContentRendererProps) {
  return (
    <div className={`space-y-5 ${className}`}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="text-gray-900 text-base sm:text-lg leading-normal"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );

          case "bulletList":
            return (
              <ul
                key={index}
                className="list-disc list-outside ml-16 space-y-2 text-gray-900 text-base sm:text-lg leading-normal"
              >
                {block.items.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            );

          case "heading":
            return (
              <h3
                key={index}
                className="font-cormorant text-2xl sm:text-3xl font-semibold text-black mt-8 mb-4"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-gray-300 pl-6 italic text-gray-700 text-base sm:text-lg my-6"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
