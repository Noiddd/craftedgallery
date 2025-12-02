"use client";

import { useParams } from "next/navigation";
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

  if (!craft) {
    return <div>Craft not found</div>;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG_COLOR }}>
      <section id="overview">
        <HeroSection craft={craft} />
      </section>

      <section id="story" className="max-w-[1800px] mx-auto px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <AboutSection
            description={craft.description}
            longDescription={craft.longDescription}
          />
          <CraftedWithSection items={craft.craftedWith} />
          <StorySection {...craft.story} />
        </div>
      </section>

      <section id="others" className="max-w-[1800px] mx-auto px-8 pb-32">
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
