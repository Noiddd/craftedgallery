"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function useSectionObserver(sections: string[]) {
  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastProgrammaticScrollRef = useRef<string | null>(null);
  const selectedSectionRef = useRef(selectedSection);

  // Keep ref in sync with state
  useEffect(() => {
    selectedSectionRef.current = selectedSection;
  }, [selectedSection]);

  const scrollToSection = useCallback((section: string) => {
    setSelectedSection(section);
    isScrollingRef.current = true;
    lastProgrammaticScrollRef.current = section;

    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const offset = section.toLowerCase() === "others" ? 40 : 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Keep scrolling flag active longer to prevent observer from interfering
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      // Clear the programmatic scroll target immediately when scrolling ends
      lastProgrammaticScrollRef.current = null;
    }, 1500);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let scrollTimeoutId: NodeJS.Timeout;
    let lastUpdateTime = 0;

    const updateSelectedSection = (sectionName: string) => {
      if (isScrollingRef.current) return;

      const now = Date.now();
      // Light throttling to prevent rapid switching during fast manual scrolling
      if (
        now - lastUpdateTime < 50 &&
        sectionName !== selectedSectionRef.current
      ) {
        return;
      }

      if (sectionName !== selectedSectionRef.current) {
        lastUpdateTime = now;
        setSelectedSection(sectionName);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Ignore updates during programmatic scrolling
      if (isScrollingRef.current) return;

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        // Double-check scrolling state after debounce
        if (isScrollingRef.current) return;

        const intersectingEntries = entries.filter(
          (entry) => entry.isIntersecting && entry.intersectionRatio > 0.1
        );

        if (intersectingEntries.length > 0) {
          // Find the section with the highest intersection ratio
          const mostVisible = intersectingEntries.reduce((prev, current) => {
            return current.intersectionRatio > prev.intersectionRatio
              ? current
              : prev;
          });

          const id = mostVisible.target.id;
          const sectionName = sections.find((s) => s.toLowerCase() === id);

          if (sectionName) {
            updateSelectedSection(sectionName);
          }
        }
      }, 100);
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Also listen to scroll events as a fallback for manual scrolling
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      clearTimeout(scrollTimeoutId);
      scrollTimeoutId = setTimeout(() => {
        if (isScrollingRef.current) return;

        const viewportCenter = window.innerHeight / 2;
        let closestSection: string | null = null;
        let closestDistance = Infinity;

        sections.forEach((section) => {
          const element = document.getElementById(section.toLowerCase());
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const distance = Math.abs(viewportCenter - elementCenter);

            // Check if element is in viewport
            if (rect.top < viewportCenter && rect.bottom > viewportCenter) {
              if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = section;
              }
            }
          }
        });

        if (closestSection) {
          updateSelectedSection(closestSection);
        }
      }, 150);
    };

    // Small delay to ensure DOM is ready
    const setupObserver = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          observer.observe(element);
        }
      });
    };

    // Try immediately, and also after a short delay to ensure DOM is ready
    setupObserver();
    const setupTimeout = setTimeout(setupObserver, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(scrollTimeoutId);
      clearTimeout(setupTimeout);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (element) observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, [sections]);

  return {
    selectedSection,
    setSelectedSection,
    scrollToSection,
  };
}
