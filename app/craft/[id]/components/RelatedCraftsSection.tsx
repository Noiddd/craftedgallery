"use client";

import { RelatedCraftCard } from "@/app/components/ui/RelatedCraftCard";

const relatedCrafts = [
  {
    name: "Submariner",
    category: "Timepiece",
    tagline: "The dive watch that defined the category",
    description: "Unchanged case design since 1953. Depth before fashion.",
    price: 9100,
    image: "/Gemini_Generated_Image_u9pme2u9pme2u9pm.png",
  },
  {
    name: "Navitimer",
    category: "Timepiece",
    tagline: "The pilot's chronograph since 1952",
    description: "Slide rule calibrated for pilots. Function over decoration.",
    price: 8600,
    image: "/Gemini_Generated_Image_rvc40wrvc40wrvc4.png",
  },
  {
    name: "Monaco",
    category: "Timepiece",
    tagline: "Square case, racing heritage",
    description: "Square when everyone went round. Racing demands precision.",
    price: 6500,
    image: "/Gemini_Generated_Image_ibnox9ibnox9ibno.png",
  },
];

export function RelatedCraftsSection() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-cormorant font-medium text-black mb-6 sm:mb-8">
        Others also considered
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {relatedCrafts.map((craft, index) => (
          <RelatedCraftCard key={index} craft={craft} />
        ))}
      </div>
    </div>
  );
}
