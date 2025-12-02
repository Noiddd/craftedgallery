"use client";

import { motion } from 'motion/react';

interface AnimatedTabButtonProps {
  section: string;
  isActive: boolean;
  onClick: () => void;
}

export function AnimatedTabButton({ section, isActive, onClick }: AnimatedTabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
        isActive
          ? "text-white"
          : "text-gray-900 hover:bg-white/30"
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeSection"
          className="absolute inset-0 bg-black rounded-full z-0"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
          }}
        />
      )}
      <span className="relative z-10">{section}</span>
    </button>
  );
}
