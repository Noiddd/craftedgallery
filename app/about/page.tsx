import { BG_COLOR } from "@/lib/constants/styles";

export const metadata = {
  title: "About — Crafted Gallery",
  description:
    "Crafted Gallery is a place to learn from individuals at the top of their craft.",
};

export default function About() {
  return (
    <main
      className="min-h-screen px-6 py-24 sm:py-32"
      style={{ backgroundColor: BG_COLOR }}
    >
      <article className="max-w-[560px] mx-auto">
        {/* Dateline */}
        <p className="text-xs tracking-widest uppercase text-neutral-400 mb-16">
          Crafted Gallery
        </p>

        {/* Opening */}
        <p className="font-cormorant text-5xl sm:text-6xl font-light leading-tight text-neutral-800 mb-12">
          To anyone who's ever wondered what mastery really looks like
        </p>

        {/* Body */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-neutral-600">
          <p>
            Crafted Gallery is a gallery of individuals who have reached the top
            of their craft.
          </p>

          <p>
            We find these individuals, entrepreneur, athletes, artists, writers,
            builders and give their stories the space they deserve.
          </p>

          <p>
            We tell their full story, not just the work, but the life that made
            it possible.
          </p>

          <p>
            Welcome to Crafted Gallery, where the life behind the work matters
            as much as the work itself.
          </p>
        </div>

        {/* Signature */}
        <div className="mt-16 pt-10 border-t border-neutral-200">
          <p className="font-cormorant text-2xl text-neutral-800 italic">
            Dion Ang
          </p>
          <p className="text-xs text-neutral-400 mt-1">Crafted Gallery</p>
        </div>
      </article>
    </main>
  );
}
