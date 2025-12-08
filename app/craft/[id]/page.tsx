"use client";

import { useParams } from "next/navigation";
import { BG_COLOR } from "@/lib/constants/styles";
import { craftDetails } from "@/lib/data/craftDetails";
import { useSectionObserver } from "./components/hooks/useSectionObserver";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { StorySection } from "./components/StorySection";
import { RelatedCraftsSection } from "./components/RelatedCraftsSection";
import { CraftDetailToolbar } from "./components/CraftDetailToolbar";

const SECTIONS = ["Overview", "Story", "Others"];

export default function CraftDetail() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const craft = craftDetails[id];

  const { selectedSection, scrollToSection } = useSectionObserver(SECTIONS);

  if (!craft) {
    return <div>Craft not found</div>;
  }

  return (
    <div
      className="min-h-screen pb-24 sm:pb-32"
      style={{ backgroundColor: BG_COLOR }}
    >
      <section id="overview">
        <HeroSection craft={craft} />
      </section>

      <section
        id="story"
        className="max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-16 md:py-20"
      >
        <div className="mb-16 sm:mb-20 md:mb-24">
          <AboutSection
            description={craft.description}
            longDescription={craft.longDescription}
            craftedWithItems={craft.craftedWith}
            craft={craft}
          />
        </div>

        <div className="border-t border-gray-200 pt-12 sm:pt-16">
          <StorySection {...craft.story} />
        </div>
      </section>

      <section
        id="others"
        className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-12"
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
