"use client";

import { useState } from "react";
import Link from "next/link";

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
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-2 pt-8 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-cormorant font-medium text-black mb-4 leading-tight tracking-tight">
          A Curated Gallery of the <br />
          World's Finest Craft{" "}
        </h1>
        <p className="text-md text-gray-600 mb-4 max-w-2xl mx-auto">
          Explore exceptional craft from around the world. Delivered weekly.
        </p>

        {/* Email Subscription */}
        <form onSubmit={handleSubscribe} className="max-w-sm mx-auto">
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
      <section className="max-w-[1800px] mx-auto px-2 pb-32">
        <div className="grid grid-cols-3 gap-3">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={`/craft/${item.id}`}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.02)' }}
            >
              <div className="relative aspect-square bg-white flex items-center justify-center">
                {/* Placeholder for image */}
                <span className="text-gray-400 text-sm">Image placeholder</span>
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <p className="text-xs text-gray-500 mb-1">
                    {item.maker} · {item.category}
                  </p>
                  <h3 className="text-sm font-medium text-black">
                    {item.name}
                  </h3>
                </div>
                {item.isStaffPick && (
                  <div className="flex items-center gap-1 text-xs text-amber-600 mt-2">
                    <span>⭐</span>
                    <span className="font-medium">Staff Pick</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Floating Toolbar */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center items-center gap-2 px-2">
        {/* Filter Bar */}
        <div className="relative backdrop-blur-sm rounded-full shadow-lg px-2 py-2 flex items-center gap-2 overflow-hidden">
          {/* Grain overlay for background */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none rounded-full bg-white/10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilter === category
                  ? "bg-black text-white"
                  : "text-gray-900 hover:bg-white/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Search Icon Island */}
        <div className="relative backdrop-blur-sm rounded-full shadow-lg p-2 overflow-hidden">
          {/* Grain overlay for background */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none rounded-full bg-white/10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />
          <button className="relative p-2 hover:bg-white/30 rounded-full transition-colors">
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
    </div>
  );
}
