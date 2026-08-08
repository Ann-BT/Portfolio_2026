export interface BookRecommendation {
  id: string;
  title: string;
  author: string;
  category: "Novel" | "Manhwa" | "Manga" | "Manhua";
  status: "Completed" | "Reading" | "Plan to Read" | "Highly Recommended";
  rating: string;
  coverImage: string;
  chapters?: string;
  description: string;
  tags: string[];
}

export const bookRecommendations: BookRecommendation[] = [
  {
    id: "b1",
    title: "Omniscient Reader's Viewpoint",
    author: "Sing Shong (Art by Sleepy-C / REDICE)",
    category: "Manhwa",
    status: "Reading",
    rating: "5.0 / 5.0",
    coverImage: "/covers/orv.jpg",
    chapters: "Chapter 220+",
    description: "Kim Dokja, the sole reader who finished a 3,000-chapter web novel, uses his intimate knowledge of the plot to survive a scenario-driven apocalypse alongside protagonist Yoo Joonghyuk.",
    tags: ["Meta-Fantasy", "Survival", "Constellation System", "Masterpiece"]
  },
  {
    id: "b2",
    title: "Shadow Slave",
    author: "Guiltythree",
    category: "Novel",
    status: "Reading",
    rating: "4.9 / 5.0",
    coverImage: "/covers/shadow_slave.jpg",
    chapters: "Chapter 1600+",
    description: "Sunless, a resourceful slum youth infected by the Nightmare Spell, survives terrifying corrupted realms. Features incredible dark fantasy world-building, smart tactical battles, and deep ancient lore.",
    tags: ["Dark Fantasy", "Survival", "Nightmare Spell", "Tactical Combat"]
  }
];
