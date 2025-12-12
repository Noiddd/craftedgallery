// Tooltip interface
export interface Tooltip {
  word: string;
  explanation: string;
}

// Content block types for rich descriptions
export type ContentBlock =
  | { type: "paragraph"; content: string }
  | { type: "bulletList"; items: string[] }
  | { type: "heading"; content: string }
  | { type: "quote"; content: string };

// Raw data from Supabase
export interface CraftItem {
  id: string;
  name: string;
  maker: string;
  category: string;
  image_url: string | null;
  description: ContentBlock[];
  story: ContentBlock[];
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
  description: ContentBlock[];
  story: ContentBlock[];
  story_title: string;
  purchase_link: string | null;
  created_at: string;
  country: string | null;
}
