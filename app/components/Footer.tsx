"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2"
      />
      <path
        d="M14 8a6 6 0 0 0-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Checkmark() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8l3.5 3.5L13 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const LINKS = [
  { label: "About", href: "/about", external: false },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@crafted-gallery",
    external: true,
  },
  { label: "X", href: "https://x.com/angdion_", external: true },
  //{ label: "Spotify", href: "#", external: true },
  //{ label: "Apple Podcasts", href: "#", external: true },
];

function FitText({ children }: { children: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fit = () => {
      const container = containerRef.current;
      const text = textRef.current;
      if (!container || !text) return;
      text.style.fontSize = "100px";
      const scale = (container.offsetWidth * 0.96) / text.scrollWidth;
      text.style.fontSize = `${100 * scale}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="text-center">
      <h2
        ref={textRef}
        className="font-cormorant font-bold text-white/90 select-none whitespace-nowrap inline-block"
        style={{ lineHeight: 0.88, letterSpacing: "-0.01em" }}
      >
        {children}
      </h2>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#2c1810" }}
    >
      {/* Top content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 md:pt-20 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 md:justify-between">
          {/* Left: Newsletter */}
          <div className="flex flex-col gap-4 max-w-sm">
            <p className="text-xs uppercase tracking-widest text-white/40">
              Newsletter
            </p>
            <h3 className="text-2xl md:text-3xl font-cormorant leading-snug">
              Stories and lessons from individuals at the top of their craft.
              Every week.
            </h3>
            <form onSubmit={handleSubscribe} className="mt-1">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Add your email address"
                  disabled={status === "loading" || status === "success"}
                  className="w-full px-4 py-2.5 pr-28 bg-white/10 border border-white/15 text-white placeholder:text-white/35 rounded-full focus:outline-none focus:ring-2 focus:ring-white/25 text-sm disabled:opacity-50"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="absolute right-1 top-1 bottom-1 px-4 flex items-center justify-center bg-white text-black rounded-full text-xs font-medium disabled:cursor-default"
                  style={{
                    transition:
                      "background-color 200ms ease, opacity 200ms ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.88)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
                  {status === "loading" && <Spinner />}
                  {status === "success" && <Checkmark />}
                  {(status === "idle" || status === "error") && "Subscribe"}
                </button>
              </div>
              {status === "error" && (
                <p className="mt-2 text-xs text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Right: Links */}
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-white/40">
              Links
            </p>
            <nav className="flex flex-col gap-2.5">
              {LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-white/70 hover:text-white text-sm"
                  style={{ transition: "color 200ms ease" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Big brand name */}
      <div className="mt-16 md:mt-24 -mb-[0.1em]">
        <FitText>CRAFTED GALLERY</FitText>
      </div>
    </footer>
  );
}
