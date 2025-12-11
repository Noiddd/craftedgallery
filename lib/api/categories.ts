import { supabase } from "@/lib/supabase/client";

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("category");

  if (error) throw error;
  return data;
}
