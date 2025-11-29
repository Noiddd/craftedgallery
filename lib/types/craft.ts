export interface CraftItem {
  id: number;
  name: string;
  maker: string;
  category: string;
  price: number;
  image: string;
  isStaffPick: boolean;
  description: string;
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

export interface CraftDetail extends CraftItem {
  tagline: string;
  description: string;
  longDescription: string;
  craftedWith: CraftedWithItem[];
  specs: Record<string, string>;
  story: CraftStory;
}
