"use client";

import { CARD_SHADOW } from "@/lib/constants/styles";

interface StorySectionProps {
  title: string;
  paragraphs: string[];
}

export function StorySection({ title, paragraphs }: StorySectionProps) {
  return (
    <div
      className="relative text-white rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden"
      style={{
        boxShadow: CARD_SHADOW,
        background:
          "radial-gradient(ellipse 1000px 800px at 50% 0%, rgba(50, 50, 50, 0.5), transparent 68%), #000000",
      }}
    >
      {/* Floating dust particles - Layer 1 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle 2px at 20% 30%, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(circle 1px at 60% 70%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(circle 1.5px at 50% 50%, rgba(255, 255, 255, 0.7), transparent),
            radial-gradient(circle 1px at 80% 10%, rgba(255, 255, 255, 0.5), transparent),
            radial-gradient(circle 2px at 90% 60%, rgba(255, 255, 255, 0.7), transparent),
            radial-gradient(circle 1px at 33% 85%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(circle 1.5px at 75% 40%, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(circle 1px at 15% 60%, rgba(255, 255, 255, 0.5), transparent)
          `,
          backgroundSize: "100% 100%",
          animation: "floatDust1 6s ease-in-out infinite",
        }}
      />

      {/* Floating dust particles - Layer 2 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle 2px at 45% 15%, rgba(255, 255, 255, 0.7), transparent),
            radial-gradient(circle 1px at 65% 90%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(circle 1.5px at 10% 80%, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(circle 1px at 85% 25%, rgba(255, 255, 255, 0.5), transparent),
            radial-gradient(circle 2px at 40% 65%, rgba(255, 255, 255, 0.7), transparent),
            radial-gradient(circle 1px at 70% 5%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(circle 1.5px at 25% 45%, rgba(255, 255, 255, 0.7), transparent)
          `,
          backgroundSize: "100% 100%",
          animation: "floatDust2 7s ease-in-out infinite 2s",
        }}
      />

      {/* Floating dust particles - Layer 3 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle 1px at 55% 35%, rgba(255, 255, 255, 0.5), transparent),
            radial-gradient(circle 2px at 95% 85%, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(circle 1px at 5% 15%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(circle 1.5px at 88% 50%, rgba(255, 255, 255, 0.7), transparent),
            radial-gradient(circle 1px at 30% 95%, rgba(255, 255, 255, 0.5), transparent),
            radial-gradient(circle 2px at 42% 22%, rgba(255, 255, 255, 0.7), transparent),
            radial-gradient(circle 1px at 68% 78%, rgba(255, 255, 255, 0.6), transparent),
            radial-gradient(circle 1.5px at 12% 38%, rgba(255, 255, 255, 0.8), transparent),
            radial-gradient(circle 1px at 92% 48%, rgba(255, 255, 255, 0.5), transparent)
          `,
          backgroundSize: "100% 100%",
          animation: "floatDust3 8s ease-in-out infinite 4s",
        }}
      />

      <style jsx>{`
        @keyframes floatDust1 {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          50% {
            transform: translate(-8px, -15px);
            opacity: 0.8;
          }
          80% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-15px, -25px);
            opacity: 0;
          }
        }

        @keyframes floatDust2 {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          50% {
            transform: translate(10px, -20px);
            opacity: 0.9;
          }
          85% {
            opacity: 0.3;
          }
          100% {
            transform: translate(18px, -35px);
            opacity: 0;
          }
        }

        @keyframes floatDust3 {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          50% {
            transform: translate(5px, -18px);
            opacity: 0.7;
          }
          75% {
            opacity: 0.5;
          }
          100% {
            transform: translate(12px, -30px);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div[style*="floatDust"] {
            animation: none !important;
          }
        }
      `}</style>

      <div className="relative z-10">
        <h2 className="text-xl sm:text-2xl font-cormorant font-medium mb-4 sm:mb-6">
          {title}
        </h2>
        <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-200 leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
