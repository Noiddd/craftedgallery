"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { FloatingToolbar } from '@/app/components/ui/FloatingToolbar';
import { AnimatedTabButton } from '@/app/components/ui/AnimatedTabButton';
import { SearchButton } from '@/app/components/ui/SearchButton';

interface CraftDetailToolbarProps {
  sections: string[];
  selectedSection: string;
  onSectionClick: (section: string) => void;
}

export function CraftDetailToolbar({ sections, selectedSection, onSectionClick }: CraftDetailToolbarProps) {
  const router = useRouter();

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center items-center gap-2 px-8">
      <FloatingToolbar className="p-2">
        <button
          onClick={() => router.back()}
          className="relative p-2 hover:bg-white/30 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-black" />
        </button>
      </FloatingToolbar>

      <FloatingToolbar className="px-2 py-2 flex items-center gap-2">
        {sections.map((section) => (
          <AnimatedTabButton
            key={section}
            section={section}
            isActive={selectedSection === section}
            onClick={() => onSectionClick(section)}
          />
        ))}
      </FloatingToolbar>

      <SearchButton />
    </div>
  );
}
