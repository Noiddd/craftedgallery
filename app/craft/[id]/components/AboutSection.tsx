"use client";

interface AboutSectionProps {
  description: string;
  longDescription: string;
}

export function AboutSection({ description, longDescription }: AboutSectionProps) {
  return (
    <div className="mb-10 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl font-cormorant font-medium text-black mb-4 sm:mb-6">
        About This Craft
      </h2>
      <div className="space-y-3 sm:space-y-4">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {description}
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {longDescription}
        </p>
      </div>
    </div>
  );
}
