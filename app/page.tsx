"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Placeholder craft items - you can replace this with actual data later
  const craftItems = [
    {
      id: 1,
      name: "Handcrafted Ceramic Bowl",
      maker: "Studio Pottery",
      category: "Home",
      price: 89,
      image: "/placeholder-1.jpg",
      isStaffPick: true,
    },
    {
      id: 2,
      name: "Leather Notebook",
      maker: "Artisan Goods",
      category: "Carry",
      price: 65,
      image: "/placeholder-2.jpg",
      isStaffPick: false,
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      maker: "Precision Tech",
      category: "Tech",
      price: 299,
      image: "/placeholder-3.jpg",
      isStaffPick: true,
    },
    {
      id: 4,
      name: "Handcrafted Ceramic Bowl",
      maker: "Studio Pottery",
      category: "Home",
      price: 89,
      image: "/placeholder-1.jpg",
      isStaffPick: true,
    },
    {
      id: 5,
      name: "Leather Notebook",
      maker: "Artisan Goods",
      category: "Carry",
      price: 65,
      image: "/placeholder-2.jpg",
      isStaffPick: false,
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      maker: "Precision Tech",
      category: "Tech",
      price: 299,
      image: "/placeholder-3.jpg",
      isStaffPick: true,
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing:", email);
  };

  // Filter items based on selected category
  const filteredItems =
    selectedFilter === "All"
      ? craftItems
      : craftItems.filter((item) => item.category === selectedFilter);

  const categories = ["All", "Home", "Carry", "Tech"];

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Navigation */}
      <nav>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
              >
                Explore
              </a>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Blog
              </a>
            </div>

            {/* Search Icon */}
            <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-8 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-cormorant font-medium text-black mb-4 leading-tight tracking-tight">
          A Curated Gallery of the <br />
          World's Finest Craft{" "}
        </h1>
        <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
          Explore exceptional craft from around the world. Delivered weekly.
        </p>

        {/* Email Subscription */}
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="w-full px-4 py-3 pr-32 bg-white border border-gray-300 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-6 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              Subscribe
            </button>
          </div>
        </form>
      </section>

      {/* Craft Items Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-square bg-white flex items-center justify-center">
                {/* Placeholder for image */}
                <span className="text-gray-400 text-sm">Image placeholder</span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">
                      {item.maker} · {item.category}
                    </p>
                    <h3 className="text-sm font-medium text-black">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-black ml-4">
                    ${item.price}
                  </p>
                </div>
                {item.isStaffPick && (
                  <div className="flex items-center gap-1 text-xs text-amber-600 mt-2">
                    <span>⭐</span>
                    <span className="font-medium">Staff Pick</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Filter Bar */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-6">
        <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-full shadow-lg px-2 py-2 flex items-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilter === category
                  ? "bg-black text-white"
                  : "text-gray-900 hover:bg-white/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
