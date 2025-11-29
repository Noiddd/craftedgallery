"use client";

import { EmailSubscriptionForm } from './EmailSubscriptionForm';

export function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-8 pt-8 pb-12 text-center">
      <h1 className="text-4xl md:text-5xl font-cormorant font-medium text-black mb-4 leading-tight tracking-tight">
        A Curated Gallery of the <br />
        World's Finest Craft{" "}
      </h1>
      <p className="text-md text-gray-600 mb-4 max-w-2xl mx-auto">
        Explore exceptional craft from around the world. Delivered weekly.
      </p>
      <EmailSubscriptionForm />
    </section>
  );
}
