import { supabase } from "@/lib/supabase/client";
import { CraftItem, CraftDetail } from "@/lib/types";

// Transform raw Supabase data to CraftDetail format
function transformToCraftDetail(item: CraftItem): CraftDetail {
  return {
    id: item.id,
    name: item.name,
    maker: item.maker,
    category: item.category,
    image_url: item.image_url,
    tagline: item.tagline,
    description: item.description || [],
    story: {
      title: item.story_title || "The Story",
      paragraphs: item.story || [],
    },
    purchase_link: item.purchase_link,
    created_at: item.created_at,
    country: item.country,
  };
}

export async function getCrafts(filters?: {
  categories?: string[];
  view?: "all" | "new";
}) {
  let query = supabase.from("crafts").select("*").eq("public", true);

  // Filter by categories if provided
  if (filters?.categories && filters.categories.length > 0) {
    query = query.in("category", filters.categories);
  }

  // Filter by view (new = created within past 2 weeks)
  if (filters?.view === "new") {
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    query = query.gte("created_at", twoWeeksAgo.toISOString());
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function getCraft(id: string): Promise<CraftDetail> {
  const { data, error } = await supabase
    .from("crafts")
    .select("*")
    .eq("id", id)
    .eq("public", true)
    .single();

  if (error) throw error;
  return transformToCraftDetail(data as CraftItem);
}
