export const categories = ["All", "Home", "Carry", "Tech"] as const;
export type Category = typeof categories[number];
