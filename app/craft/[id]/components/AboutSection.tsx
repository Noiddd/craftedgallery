"use client";

interface AboutSectionProps {
  description: string;
  longDescription: string;
}

export function AboutSection({ description, longDescription }: AboutSectionProps) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-cormorant font-medium text-black mb-6">
        About This Craft
      </h2>
      <div className="space-y-4">
        <p className="text-base text-gray-700 leading-relaxed">
          {description}
        </p>
        <p className="text-base text-gray-700 leading-relaxed">
          {longDescription}
        </p>
      </div>
    </div>
  );
}
