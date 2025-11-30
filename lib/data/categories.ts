export const categories = ["All", "New", "Curator's Choice", "Tech"] as const;
export type Category = (typeof categories)[number];
