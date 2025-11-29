"use client";

import { useState, useEffect } from "react";

export function useSectionObserver(sections: string[]) {
  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (section: string) => {
    setSelectedSection(section);
    setIsScrolling(true);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrolling) return;

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const intersectingEntries = entries.filter(
          (entry) => entry.isIntersecting
        );

        if (intersectingEntries.length > 0) {
          const mostVisible = intersectingEntries.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

          const id = mostVisible.target.id;
          const sectionName = sections.find(
            (s) => s.toLowerCase() === id
          );
          if (sectionName) {
            setSelectedSection(sectionName);
          }
        }
      }, 100);
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => {
      clearTimeout(timeoutId);
      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) observer.unobserve(element);
      });
    };
  }, [isScrolling, sections]);

  return {
    selectedSection,
    setSelectedSection,
    isScrolling,
    scrollToSection,
  };
}
