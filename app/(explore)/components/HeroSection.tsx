"use client";

import { EmailSubscriptionForm } from "./EmailSubscriptionForm";

export function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-8 sm:pb-12 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-medium text-black mb-3 sm:mb-4 leading-tight tracking-tight">
        A Curated Gallery of the <br className="hidden sm:inline" />
        World's Finest Craft{" "}
      </h1>
      <p className="text-sm sm:text-md text-gray-600 mb-4 max-w-2xl mx-auto px-4">
        Stories of obsession, precision, and things built to outlive us. Every
        week.
      </p>
      <EmailSubscriptionForm />
    </section>
  );
}
