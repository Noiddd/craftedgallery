export const categories = ["All", "New"] as const;
export type Category = (typeof categories)[number];
