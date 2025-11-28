"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function CraftDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [selectedSection, setSelectedSection] = useState("Overview");

  const scrollToSection = (section: string) => {
    setSelectedSection(section);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: [0, 0.1, 0.5],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === "overview") {
            setSelectedSection("Overview");
          } else if (id === "story") {
            setSelectedSection("Story");
          } else if (id === "others") {
            setSelectedSection("Others");
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const overviewSection = document.getElementById("overview");
    const storySection = document.getElementById("story");
    const othersSection = document.getElementById("others");

    if (overviewSection) observer.observe(overviewSection);
    if (storySection) observer.observe(storySection);
    if (othersSection) observer.observe(othersSection);

    return () => {
      if (overviewSection) observer.unobserve(overviewSection);
      if (storySection) observer.unobserve(storySection);
      if (othersSection) observer.unobserve(othersSection);
    };
  }, []);

  // Dummy data for the craft item
  const craft = {
    id: parseInt(id),
    name: "Speedmaster Professional",
    maker: "Omega",
    category: "Timepiece",
    price: 6950,
    tagline: "The only watch certified by NASA for EVA missions",
    description:
      "The Speedmaster Professional is the only timepiece certified by NASA for extravehicular activity. After surviving brutal qualification tests that destroyed every competing watch—heating to 93°C, cooling to -18°C, extreme pressure changes, and violent impacts—it earned its place on every crewed space mission since 1965.",
    longDescription:
      "While other manufacturers pursued automation and modern materials, Omega made deliberate choices for mission-critical reliability. The manual-wind movement operates flawlessly in temperature extremes where automatics fail. The Hesalite crystal was chosen over scratch-resistant sapphire because it shatters into rounded pieces instead of dangerous shards in zero gravity. Even the chronograph pusher resistance was precisely calculated to function with pressurized EVA gloves.",
    craftedWith: [
      {
        title: "NASA-Qualified Engineering",
        description:
          "The only watch certified for EVA use after surviving tests that destroyed competitors. Heating to 93°C, cooling to -18°C, pressure changes, impacts—it passed qualification that broke every other timepiece.",
      },
      {
        title: "Mission-Critical Material Choices",
        description:
          "Hesalite crystal chosen over sapphire because it shatters instead of splintering in zero gravity. Every material decision prioritizes astronaut safety over conventional luxury.",
      },
      {
        title: "Manual Wind Reliability",
        description:
          "Manual wind movement when automatics were dominant. More reliable in temperature extremes where automatic mechanisms fail. Proven through decades of space missions.",
      },
      {
        title: "Unchanged Since 1968",
        description:
          "Core design unchanged since 1968 because it achieved mission-critical specifications. Why redesign perfection? The chronograph pusher resistance even works with pressurized gloves.",
      },
    ],
    specs: {
      "Case Diameter": "42mm",
      "Case Material": "Stainless Steel",
      Movement: "Manual Wind Caliber 1861",
      Crystal: "Hesalite (DON 011)",
      "Water Resistance": "50m",
      "First Worn in Space": "1962",
    },
    isStaffPick: true,
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Hero Section */}
      <section id="overview" className="max-w-[1800px] mx-auto px-2 pt-16">
        {/* Header */}

        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500 mb-2">
              {craft.maker} · {craft.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-cormorant font-medium text-black mb-3 tracking-tight">
              {craft.name}
            </h1>
            <p className="text-base text-gray-600">{craft.tagline}</p>
            {craft.isStaffPick && (
              <div className="flex items-center gap-1.5 text-sm text-amber-600 mt-3">
                <span>⭐</span>
                <span className="font-medium">Staff Pick</span>
              </div>
            )}
          </div>

          {/* Price and Purchase Button */}
          <div className="flex items-end gap-3">
            <p className="text-3xl font-medium text-black">${craft.price}</p>
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm font-medium flex items-center gap-2">
              Purchase Link
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className="bg-white rounded-2xl overflow-hidden"
          style={{
            boxShadow:
              "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.02)",
          }}
        >
          <div className="w-full aspect-video relative bg-white">
            <Image
              src="/Gemini_Generated_Image_rvc40wrvc40wrvc4.png"
              alt={craft.name}
              fill
              className="object-contain p-8"
              priority
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="max-w-[1800px] mx-auto px-2 py-12">
        <div className="max-w-6xl mx-auto">
          {/* About This Craft */}
          <div className="mb-16">
            <h2 className="text-3xl font-cormorant font-medium text-black mb-6">
              About This Craft
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <p className="text-base text-gray-700 leading-relaxed">
                {craft.description}
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                {craft.longDescription}
              </p>
            </div>
          </div>

          {/* Crafted With Obsession & Specs Combined */}
          <div
            className="bg-white rounded-2xl p-8 md:p-12 mb-16"
            style={{
              boxShadow:
                "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.02)",
            }}
          >
            <h2 className="text-2xl font-cormorant font-medium text-black mb-8">
              Crafted With Obsession
            </h2>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Craftsmanship Points */}
              <div className="space-y-6">
                {craft.craftedWith.map((item, index) => (
                  <div
                    key={index}
                    className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                    <h3 className="text-sm font-medium text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right: Specifications */}
              <div>
                <h3 className="text-sm font-medium text-black mb-6 uppercase tracking-wider">
                  Technical Specifications
                </h3>
                <dl className="space-y-4">
                  {Object.entries(craft.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-baseline pb-3 border-b border-gray-100"
                    >
                      <dt className="text-xs text-gray-500 uppercase tracking-wider">
                        {key}
                      </dt>
                      <dd className="text-sm text-black font-medium">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* The NASA Story - Highlighted Section */}
          <div
            className="bg-black text-white rounded-2xl p-8 md:p-12"
            style={{
              boxShadow:
                "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.02)",
            }}
          >
            <h2 className="text-2xl font-cormorant font-medium mb-6">
              The NASA Story
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                In 1964, NASA operations engineer James Ragan was tasked with
                finding a watch for the manned space program. He purchased
                chronographs from multiple manufacturers and subjected them to
                brutal qualification tests. Most failed within the first round
                of testing.
              </p>
              <p>
                The Speedmaster survived heating to 93°C and cooling to -18°C in
                rapid cycles. It endured pressure changes from vacuum to high
                atmosphere. It survived impacts that shattered competing
                watches. On March 1, 1965, it was officially certified as
                "Flight Qualified for all Manned Space Missions." Every NASA
                astronaut since has worn one.
              </p>
              <p>
                When the Apollo 13 oxygen tank exploded, the spacecraft's clocks
                failed. Astronaut Jack Swigert used his Speedmaster to time the
                critical 14-second engine burn that brought them home. NASA
                awarded Omega the Silver Snoopy Award—their highest honor—for
                saving the crew.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Others Also Considered */}
      <section id="others" className="max-w-[1800px] mx-auto px-2 pb-32">
        <h2 className="text-3xl font-cormorant font-medium text-black mb-8">
          Others also considered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              name: "Submariner",
              maker: "Rolex",
              tagline: "The dive watch that defined the category",
              price: 9100,
              image: "/Gemini_Generated_Image_u9pme2u9pme2u9pm.png",
            },
            {
              name: "Navitimer",
              maker: "Breitling",
              tagline: "The pilot's chronograph since 1952",
              price: 8600,
              image: "/Gemini_Generated_Image_rvc40wrvc40wrvc4.png",
            },
            {
              name: "Monaco",
              maker: "TAG Heuer",
              tagline: "Square case, racing heritage",
              price: 6500,
              image: "/Gemini_Generated_Image_ibnox9ibnox9ibno.png",
            },
            {
              name: "El Primero",
              maker: "Zenith",
              tagline: "First automatic chronograph movement",
              price: 7200,
              image: "/Gemini_Generated_Image_u9pme2u9pme2u9pm.png",
            },
          ].map((item, index) => (
            <div key={index} className="cursor-pointer group">
              <div
                className="bg-white rounded-2xl overflow-hidden mb-4 transition-all"
                style={{
                  boxShadow:
                    "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.02)",
                }}
              >
                <div className="aspect-square bg-white relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </div>
              <h3 className="text-lg font-medium text-black mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{item.tagline}</p>
              <p className="text-sm text-gray-900">
                ${item.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Toolbar */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center items-center gap-2 px-2">
        {/* Back Button Island */}
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
          <button
            onClick={() => router.back()}
            className="relative p-2 hover:bg-white/30 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-black" />
          </button>
        </div>
        {/* Section Navigation Bar */}
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
          {["Overview", "Story", "Others"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedSection === section
                  ? "bg-black text-white"
                  : "text-gray-900 hover:bg-white/30"
              }`}
            >
              {section}
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
