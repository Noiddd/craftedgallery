// Tooltip interface
export interface Tooltip {
  word: string;
  explanation: string;
}

// Raw data from Supabase
export interface CraftItem {
  id: string;
  name: string;
  maker: string;
  category: string;
  image_url: string | null;
  tagline: string;
  description: string[];
  story: string[];
  story_title: string;
  public: boolean;
  purchase_link: string | null;
  created_at: string;
  country: string | null;
}

export interface CraftedWithItem {
  title: string;
  description: string;
}

export interface RelatedCraft {
  name: string;
  maker: string;
  category: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
}

export interface CraftStory {
  title: string;
  paragraphs: string[];
}

// Extended detail view (same as CraftItem for now - direct from database)
export interface CraftDetail {
  id: string;
  name: string;
  maker: string;
  category: string;
  image_url: string | null;
  tagline: string;
  description: string[];
  story: CraftStory;
  purchase_link: string | null;
  created_at: string;
  country: string | null;
}
