"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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

export function EmailSubscriptionForm() {
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
    <form onSubmit={handleSubscribe} className="max-w-sm mx-auto px-4 sm:px-0">
      <div className="relative">
        <input
          type="email"
          id="footer-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Add your email address"
          disabled={status === "loading" || status === "success"}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-24 sm:pr-32 bg-card border border-gray-300 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm disabled:opacity-50"
          required
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="absolute right-1 top-1 bottom-1 px-3 sm:px-4 flex items-center justify-center text-black rounded-full text-xs sm:text-sm font-medium hover:cursor-pointer disabled:cursor-default transition-opacity duration-200"
        >
          {status === "loading" && <Spinner />}
          {status === "success" && <Checkmark />}
          {(status === "idle" || status === "error") && "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-center text-red-500">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
