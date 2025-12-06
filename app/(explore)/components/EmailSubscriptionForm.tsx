"use client";

import { useState } from "react";

export function EmailSubscriptionForm() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", email);
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
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-24 sm:pr-32 bg-card border border-gray-300 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-sm"
          required
        />
        <button
          type="submit"
          className="absolute right-1 top-1 bottom-1 px-3 sm:px-4 text-black rounded-full text-xs sm:text-sm font-medium hover:cursor-pointer"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
