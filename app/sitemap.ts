import { MetadataRoute } from "next";
import { getCrafts } from "@/lib/api/crafts";

const BASE_URL = "https://crafted.gallery";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const crafts = await getCrafts().catch(() => []);

  const craftUrls: MetadataRoute.Sitemap = crafts.map((c) => ({
    url: `${BASE_URL}/craft/${c.id}`,
    lastModified: new Date(c.created_at),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...craftUrls,
  ];
}
