"use client";

import { EmailSubscriptionForm } from "./EmailSubscriptionForm";

export function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-10 sm:pb-8 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-cormorant font-medium text-black mb-2 sm:mb-2 leading-tight tracking-tight">
        Greatness has a story
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-2 sm:mb-4 max-w-2xl mx-auto leading-relaxed">
        Stories and lessons from individuals at the top of their craft. Every
        week.
      </p>
      <EmailSubscriptionForm />
    </section>
  );
}
