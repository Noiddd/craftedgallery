"use client";

import { motion } from 'motion/react';

interface ToolbarButtonProps {
  onClick?: () => void;
  active?: boolean;
  children: React.ReactNode;
}

export function ToolbarButton({ onClick, active = false, children }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative px-5 py-2 rounded-full text-sm font-medium hover:bg-white/30"
    >
      {active && (
        <motion.div
          layoutId="activeCategory"
          className="absolute inset-0 bg-black rounded-full z-0"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
          }}
        />
      )}
      <span
        className={`relative z-10 transition-colors ${
          active ? "text-white" : "text-gray-900"
        }`}
      >
        {children}
      </span>
    </button>
  );
}
