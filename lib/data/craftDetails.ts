import { CraftDetail } from '@/lib/types';

export const craftDetails: Record<number, CraftDetail> = {
  1: {
    id: 1,
    name: "Speedmaster Professional",
    maker: "Omega",
    category: "Timepiece",
    price: 6950,
    image: "/Gemini_Generated_Image_rvc40wrvc40wrvc4.png",
    isStaffPick: true,
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
    story: {
      title: "The NASA Story",
      paragraphs: [
        "In 1964, NASA operations engineer James Ragan was tasked with finding a watch for the manned space program. He purchased chronographs from multiple manufacturers and subjected them to brutal qualification tests. Most failed within the first round of testing.",
        "The Speedmaster survived heating to 93°C and cooling to -18°C in rapid cycles. It endured pressure changes from vacuum to high atmosphere. It survived impacts that shattered competing watches. On March 1, 1965, it was officially certified as \"Flight Qualified for all Manned Space Missions.\" Every NASA astronaut since has worn one.",
        "When the Apollo 13 oxygen tank exploded, the spacecraft's clocks failed. Astronaut Jack Swigert used his Speedmaster to time the critical 14-second engine burn that brought them home. NASA awarded Omega the Silver Snoopy Award—their highest honor—for saving the crew.",
      ],
    },
  },
};
