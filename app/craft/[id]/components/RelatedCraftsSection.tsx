"use client";

import { RelatedCraftCard } from '@/app/components/ui/RelatedCraftCard';

const relatedCrafts = [
  {
    name: "Submariner",
    maker: "Rolex",
    category: "Timepiece",
    tagline: "The dive watch that defined the category",
    description: "Unchanged case design since 1953. Depth before fashion.",
    price: 9100,
    image: "/Gemini_Generated_Image_u9pme2u9pme2u9pm.png",
  },
  {
    name: "Navitimer",
    maker: "Breitling",
    category: "Timepiece",
    tagline: "The pilot's chronograph since 1952",
    description: "Slide rule calibrated for pilots. Function over decoration.",
    price: 8600,
    image: "/Gemini_Generated_Image_rvc40wrvc40wrvc4.png",
  },
  {
    name: "Monaco",
    maker: "TAG Heuer",
    category: "Timepiece",
    tagline: "Square case, racing heritage",
    description: "Square when everyone went round. Racing demands precision.",
    price: 6500,
    image: "/Gemini_Generated_Image_ibnox9ibnox9ibno.png",
  },
  {
    name: "El Primero",
    maker: "Zenith",
    category: "Timepiece",
    tagline: "First automatic chronograph movement",
    description: "36,000 beats per hour. Ten times more precise.",
    price: 7200,
    image: "/Gemini_Generated_Image_u9pme2u9pme2u9pm.png",
  },
];

export function RelatedCraftsSection() {
  return (
    <div>
      <h2 className="text-3xl font-cormorant font-medium text-black mb-8">
        Others also considered
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {relatedCrafts.map((craft, index) => (
          <RelatedCraftCard key={index} craft={craft} />
        ))}
      </div>
    </div>
  );
}
