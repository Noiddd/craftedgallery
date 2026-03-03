import { BG_COLOR } from "@/lib/constants/styles";

export const metadata = {
  title: "About",
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
          To anyone that still cares
        </p>

        {/* Body */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-neutral-600">
          <p>
            Crafted Gallery is a collection of stories about individuals who
            reached the top of what they do. In business, sport, art, and
            beyond.
          </p>

          <p>
            Individuals that values craft. Who cares deeply about doing things
            well.
          </p>

          <p>
            We break down how they think, how they worked, and what it cost.
          </p>

          <p>Crafted Gallery exists to inspire you.</p>

          <p>To inspire me.</p>

          <p>And one day, to inspire my kids.</p>

          <p>The world doesn’t need more noise. It needs music.</p>
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
