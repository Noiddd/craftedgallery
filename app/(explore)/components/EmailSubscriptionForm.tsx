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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="w-full px-4 py-3 pr-24 sm:pr-32 bg-white border border-gray-300 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
          required
        />
        <button
          type="submit"
          className="absolute right-1 top-1 bottom-1 px-4 sm:px-6 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
