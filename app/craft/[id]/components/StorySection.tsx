"use client";

interface StorySectionProps {
  title: string;
  paragraphs: string[];
}

export function StorySection({ title, paragraphs }: StorySectionProps) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant text-black mb-8">
        {title}
      </h2>
      <div className="space-y-5 text-base sm:text-lg leading-relaxed">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
