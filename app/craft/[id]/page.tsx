"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function CraftDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [selectedSection, setSelectedSection] = useState("Overview");

  // Dummy data for the craft item
  const craft = {
    id: parseInt(id),
    name: "Japanese Steel Chef Knife",
    maker: "Takamura Hamono",
    category: "Kitchen",
    price: 245,
    tagline: "67 layers of Damascus steel, hand-forged in Echizen",
    description:
      "This chef knife represents the pinnacle of Japanese blade craftsmanship. Each knife is hand-forged by master bladesmiths in Echizen, Japan, using techniques passed down through generations. The 67-layer Damascus steel creates a stunning pattern while providing exceptional edge retention and cutting performance.",
    longDescription:
      "The blade is forged from VG-10 stainless steel core, wrapped in 66 layers of softer stainless steel. This creates the distinctive Damascus pattern while maintaining a razor-sharp edge. The blade is then hand-sharpened to a 15-degree angle, providing superior cutting precision. The handle is crafted from aged Pakkawood, shaped and balanced for hours of comfortable use.",
    craftedWith: [
      {
        title: "Hand-Forged Damascus Steel",
        description:
          "67 layers of steel are meticulously folded and hammered to create a blade that's both beautiful and exceptionally strong. The Damascus pattern is unique to each knife.",
      },
      {
        title: "Traditional Echizen Craftsmanship",
        description:
          "Made in Echizen, Japan's historic blade-making center with over 700 years of tradition. Each knife takes weeks to complete, involving multiple master craftspeople.",
      },
      {
        title: "Precision Edge Geometry",
        description:
          "Hand-sharpened to a 15-degree angle on each side, providing a razor-sharp edge that maintains its keenness through years of use with proper care.",
      },
      {
        title: "Ergonomic Balance",
        description:
          "The blade weight is precisely balanced with the aged Pakkawood handle, reducing hand fatigue during extended use. Every detail is considered.",
      },
    ],
    specs: {
      "Blade Length": '8.5"',
      "Total Length": '13.5"',
      "Blade Material": "VG-10 Damascus Steel",
      "Handle Material": "Aged Pakkawood",
      Weight: "7.2 oz",
      Origin: "Echizen, Japan",
    },
    isStaffPick: true,
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "Overview":
        return (
          <div className="space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-cormorant font-medium text-black mb-4">
                About This Craft
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                {craft.description}
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                {craft.longDescription}
              </p>
            </section>

            {/* Crafted With Obsession */}
            <section>
              <h2 className="text-2xl font-cormorant font-medium text-black mb-6">
                Crafted With Obsession
              </h2>
              <div className="space-y-6">
                {craft.craftedWith.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-black pl-6 py-2"
                  >
                    <h3 className="text-lg font-medium text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Specifications */}
            <section>
              <h2 className="text-2xl font-cormorant font-medium text-black mb-6">
                Specifications
              </h2>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-4">
                {Object.entries(craft.specs).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-xs text-gray-500 mb-1">{key}</dt>
                    <dd className="text-sm text-black font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        );
      case "Story":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-cormorant font-medium text-black mb-4">
              The Maker's Story
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Takamura Hamono has been crafting exceptional blades in Echizen
              since 1947. The workshop is located in the historic blade-making
              district, where the craft has been perfected over 700 years.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Each knife is a collaboration between multiple master craftspeople
              - the blacksmith who forges the blade, the sharpener who creates
              the edge, and the handle maker who crafts the grip. This tradition
              of specialization ensures that every aspect of the knife is
              executed with expertise.
            </p>
          </div>
        );
      case "Care":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-cormorant font-medium text-black mb-4">
              Care Instructions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-black mb-2">
                  Daily Care
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Hand wash immediately after use with mild soap and warm water.
                  Dry thoroughly with a soft cloth. Never put in the dishwasher.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black mb-2">
                  Sharpening
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Use a whetstone (1000-6000 grit) to maintain the edge. Sharpen
                  at the original 15-degree angle. With proper care, professional
                  sharpening is only needed once or twice a year.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black mb-2">Storage</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Store in a knife block or on a magnetic strip. Avoid storing in
                  drawers where the blade can contact other utensils.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Hero Section */}
      <section className="max-w-[1800px] mx-auto px-2 pt-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-sm text-gray-500 mb-2">
              {craft.maker} · {craft.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-cormorant font-medium text-black mb-3 tracking-tight">
              {craft.name}
            </h1>
            <p className="text-base text-gray-600">{craft.tagline}</p>
            {craft.isStaffPick && (
              <div className="flex items-center gap-1.5 text-sm text-amber-600 mt-3">
                <span>⭐</span>
                <span className="font-medium">Staff Pick</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <p className="text-3xl font-medium text-black">${craft.price}</p>
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium flex items-center gap-2">
              Purchase Link
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className="bg-white rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.02)' }}
        >
          <div className="w-full aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-sm">
              High-resolution product image
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[1800px] mx-auto px-2 py-12 pb-32">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </section>

      {/* Floating Toolbar */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center items-center gap-2 px-2">
        {/* Back Button Island */}
        <div className="relative backdrop-blur-sm rounded-full shadow-lg p-2 overflow-hidden">
          {/* Grain overlay for background */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none rounded-full bg-white/10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />
          <button
            onClick={() => router.back()}
            className="relative p-2 hover:bg-white/30 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-black" />
          </button>
        </div>
        {/* Section Navigation Bar */}
        <div className="relative backdrop-blur-sm rounded-full shadow-lg px-2 py-2 flex items-center gap-2 overflow-hidden">
          {/* Grain overlay for background */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none rounded-full bg-white/10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />
          {["Overview", "Story", "Care"].map((section) => (
            <button
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedSection === section
                  ? "bg-black text-white"
                  : "text-gray-900 hover:bg-white/30"
              }`}
            >
              {section}
            </button>
          ))}
        </div>
        {/* Search Icon Island */}
        <div className="relative backdrop-blur-sm rounded-full shadow-lg p-2 overflow-hidden">
          {/* Grain overlay for background */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none rounded-full bg-white/10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />
          <button className="relative p-2 hover:bg-white/30 rounded-full transition-colors">
            <svg
              className="w-5 h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
