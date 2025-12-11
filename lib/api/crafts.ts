import { supabase } from "@/lib/supabase/client";
import { CraftItem, CraftDetail } from "@/lib/types";

// Transform raw Supabase data to CraftDetail format
function transformToCraftDetail(item: CraftItem): CraftDetail {
  // Transform tooltips into craftedWith format
  const craftedWith = (item.tooltips || []).map(tooltip => ({
    title: tooltip.word,
    description: tooltip.explanation,
  }));

  // Build story paragraphs from story_1, story_2, story_3
  const storyParagraphs = [item.story_1, item.story_2, item.story_3]
    .filter((s): s is string => Boolean(s));

  return {
    id: item.id,
    name: item.name,
    maker: item.maker,
    category: item.category,
    image_url: item.image_url,
    tagline: item.tagline,
    description: item.description_1 || "",
    longDescription: [item.description_2, item.description_3]
      .filter(Boolean)
      .join(" ") || "",
    craftedWith: craftedWith,
    specs: {}, // TODO: Parse from a JSON column or separate table if needed
    story: {
      title: item.story_title || "The Story",
      paragraphs: storyParagraphs,
    },
    purchase_link: item.purchase_link,
    created_at: item.created_at,
    country: item.country,
    tooltips: item.tooltips || [],
  };
}

export async function getCrafts(filters?: {
  categories?: string[];
  view?: "all" | "new";
}) {
  let query = supabase
    .from("crafts")
    .select("*, tooltips(word, explanation)")
    .eq("public", true);

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
    .select("*, tooltips(word, explanation)")
    .eq("id", id)
    .eq("public", true)
    .single();

  if (error) throw error;
  return transformToCraftDetail(data as CraftItem);
}

