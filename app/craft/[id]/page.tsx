"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { BG_COLOR } from "@/lib/constants/styles";
import { craftDetails } from "@/lib/data/craftDetails";
import { useSectionObserver } from "./components/hooks/useSectionObserver";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { CraftedWithSection } from "./components/CraftedWithSection";
import { StorySection } from "./components/StorySection";
import { RelatedCraftsSection } from "./components/RelatedCraftsSection";
import { CraftDetailToolbar } from "./components/CraftDetailToolbar";

const SECTIONS = ["Overview", "Story", "Others"];

export default function CraftDetail() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const craft = craftDetails[id];

  const { selectedSection, scrollToSection } = useSectionObserver(SECTIONS);
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);

  const handleExpandAccordion = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev : [...prev, index]
    );
    // Scroll to the crafted with section
    const craftedWithSection = document.getElementById("crafted-with-section");
    if (craftedWithSection) {
      craftedWithSection.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  if (!craft) {
    return <div>Craft not found</div>;
  }

  return (
    <div
      className="min-h-screen pb-24 sm:pb-32"
      style={{ backgroundColor: BG_COLOR }}
    >
      <section
        id="overview"
        className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8"
      >
        <HeroSection craft={craft} />
      </section>

      <section
        id="story"
        className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-10 sm:mb-12 md:mb-16">
            <AboutSection
              description={craft.description}
              longDescription={craft.longDescription}
              craftedWithItems={craft.craftedWith}
              onCraftedWithClick={handleExpandAccordion}
            />
            <div id="crafted-with-section">
              <CraftedWithSection
                items={craft.craftedWith}
                expandedIndices={expandedIndices}
                setExpandedIndices={setExpandedIndices}
              />
            </div>
          </div>
          <StorySection {...craft.story} />
        </div>
      </section>

      <section
        id="others"
        className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8"
      >
        <RelatedCraftsSection />
      </section>

      <CraftDetailToolbar
        sections={SECTIONS}
        selectedSection={selectedSection}
        onSectionClick={scrollToSection}
      />
    </div>
  );
}
