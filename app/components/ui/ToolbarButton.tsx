"use client";

interface ToolbarButtonProps {
  onClick?: () => void;
  active?: boolean;
  children: React.ReactNode;
}

export function ToolbarButton({ onClick, active = false, children }: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all ${
        active
          ? "bg-black text-white"
          : "text-gray-900 hover:bg-white/30"
      }`}
    >
      {children}
    </button>
  );
}
