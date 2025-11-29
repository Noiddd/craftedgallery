"use client";

import { GrainOverlay } from '@/app/components/shared/GrainOverlay';

interface FloatingToolbarProps {
  children: React.ReactNode;
  className?: string;
}

export function FloatingToolbar({ children, className = "" }: FloatingToolbarProps) {
  return (
    <div className={`relative backdrop-blur-sm rounded-full shadow-lg overflow-hidden ${className}`}>
      <GrainOverlay />
      {children}
    </div>
  );
}
