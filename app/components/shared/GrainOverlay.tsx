import { GRAIN_OVERLAY_SVG } from "@/lib/constants/grainOverlay";

export function GrainOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-40 pointer-events-none rounded-full bg-gray-500/30"
      style={{
        backgroundImage: GRAIN_OVERLAY_SVG,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
      }}
    />
  );
}
