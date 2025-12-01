export const categories = ["All", "New", "Curator's Choice"] as const;
export type Category = (typeof categories)[number];
