"use client";

import { useParams } from "next/navigation";
import { BG_COLOR } from "@/lib/constants/styles";
import { useCraft } from "@/lib/hooks/useCrafts";
import { useSectionObserver } from "./components/hooks/useSectionObserver";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { RelatedCraftsSection } from "./components/RelatedCraftsSection";
import { CraftDetailToolbar } from "./components/CraftDetailToolbar";

const SECTIONS = ["Overview", "About", "Others"];

export default function CraftDetail() {
  const params = useParams();
  const id = params.id as string;

  const { data: craft, isLoading, error } = useCraft(id);
  const { selectedSection, scrollToSection } = useSectionObserver(SECTIONS);

  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: BG_COLOR }}
      ></div>
    );
  }

  if (error) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: BG_COLOR }}
      >
        <div className="text-red-600">Error loading craft: {error.message}</div>
      </div>
    );
  }

  if (!craft) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: BG_COLOR }}
      >
        <div className="text-gray-600">Craft not found</div>
      </div>
    );
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
        id="about"
        className="max-w-4xl mx-auto px-6 sm:px-8 py-6 sm:py-10 md:py-14"
      >
        <div className="mb-14 sm:mb-16 md:mb-18">
          <AboutSection craft={craft} />
        </div>
      </section>

      {/* <section
        id="others"
        className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-12"
      >
        <RelatedCraftsSection />
      </section> */}

      {/* <CraftDetailToolbar
        sections={SECTIONS}
        selectedSection={selectedSection}
        onSectionClick={scrollToSection}
      /> */}
    </div>
  );
}
