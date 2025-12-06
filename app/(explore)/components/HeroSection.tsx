"use client";

import { EmailSubscriptionForm } from "./EmailSubscriptionForm";

export function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-10 sm:pb-16 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-cormorant font-medium text-black mb-2 sm:mb-2 leading-tight tracking-tight">
        A Curated Gallery of the <br className="hidden sm:inline" />
        World's Finest Craft{" "}
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-2 sm:mb-4 max-w-2xl mx-auto leading-relaxed">
        Stories of obsession, precision, and things built to outlive us. Every
        week.
      </p>
      <EmailSubscriptionForm />
    </section>
  );
}
