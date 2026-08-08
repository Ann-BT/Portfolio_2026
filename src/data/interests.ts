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
    title: "Lord of the Mysteries",
    author: "Cuttlefish That Loves Diving",
    category: "Novel",
    status: "Completed",
    rating: "5.0 / 5.0",
    coverImage: "/covers/b5d182a30f3a8e64d72b21.jpg",
    chapters: "1432 Ch.",
    description: "Unbelievable steampunk fantasy worldbuilding, Victorian mystery, and deep magic potion sequences.",
    tags: ["Mystery", "Steampunk", "Fantasy"]
  },
  {
    id: "b2",
    title: "Solo Leveling",
    author: "Chugong (Art by DUBU)",
    category: "Manhwa",
    status: "Completed",
    rating: "4.9 / 5.0",
    coverImage: "/covers/b4645141dcd85d8604c920.jpg",
    chapters: "200 Ch.",
    description: "The legendary hunter webtoon that revolutionized modern action manhwa artwork and leveling dynamics.",
    tags: ["Action", "System", "Supernatural"]
  },
  {
    id: "b3",
    title: "Omniscient Reader's Viewpoint",
    author: "Sing Shong",
    category: "Manhwa",
    status: "Reading",
    rating: "5.0 / 5.0",
    coverImage: "/covers/54e137d3ba4a3b14625b19.jpg",
    chapters: "220+ Ch.",
    description: "A solo reader survives a scenario apocalypse using intimate knowledge of his favorite finished novel.",
    tags: ["Meta-Fantasy", "Survival", "System"]
  },
  {
    id: "b4",
    title: "Shadow Slave",
    author: "Guiltythree",
    category: "Novel",
    status: "Reading",
    rating: "4.9 / 5.0",
    coverImage: "/covers/45d7de5b52c2d39c8ad317.jpg",
    chapters: "1600+ Ch.",
    description: "Dark fantasy nightmare realm survival with deep lore, smart combat strategy, and terrifying horrors.",
    tags: ["Dark Fantasy", "Survival", "Lore"]
  },
  {
    id: "b5",
    title: "The Beginning After The End",
    author: "TurtleMe",
    category: "Manhwa",
    status: "Reading",
    rating: "4.8 / 5.0",
    coverImage: "/covers/055151dfdd465c18055716.jpg",
    chapters: "180+ Ch.",
    description: "Reincarnated king Arthur Leywin navigates a high-stakes magical academy and continental war.",
    tags: ["Reincarnation", "Magic", "Adventure"]
  },
  {
    id: "b6",
    title: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    category: "Manga",
    status: "Reading",
    rating: "4.9 / 5.0",
    coverImage: "/covers/f1277488f811794f200015.jpg",
    chapters: "Part 2",
    description: "Cinematic manga panel layouts, dark comedy, and breaking traditional shonen storytelling tropes.",
    tags: ["Dark Fantasy", "Action", "Supernatural"]
  },
  {
    id: "b7",
    title: "The Greatest Estate Developer",
    author: "BK_Moon / Kim Hyunsoo",
    category: "Manhwa",
    status: "Highly Recommended",
    rating: "5.0 / 5.0",
    coverImage: "/covers/e5c3156299fb18a541ea14.jpg",
    chapters: "150+ Ch.",
    description: "Hilarious civil engineering power fantasy with unbeatable comedic facial expressions and smart estate growth.",
    tags: ["Comedy", "Engineering", "Isekai"]
  },
  {
    id: "b8",
    title: "SCT: S-Rank Hunters",
    author: "Author Collection",
    category: "Manhua",
    status: "Reading",
    rating: "4.7 / 5.0",
    coverImage: "/covers/dd89a9182581a4dffd9013.jpg",
    chapters: "120+ Ch.",
    description: "High-intensity hunter raids, guild warfare, and sharp martial cultivation design.",
    tags: ["Hunter", "Action", "Cultivation"]
  },
  {
    id: "b9",
    title: "Reverend Insanity",
    author: "Gu Zhen Ren",
    category: "Novel",
    status: "Completed",
    rating: "5.0 / 5.0",
    coverImage: "/covers/b229bf7733eeb2b0ebff12.jpg",
    chapters: "2334 Ch.",
    description: "A ruthless 500-year-old demon returns to his past utilizing Gu worms and sheer calculating genius.",
    tags: ["Dark Cultivation", "Strategy", "Masterpiece"]
  },
  {
    id: "b10",
    title: "Magic Emperor",
    author: "Night Owl",
    category: "Manhua",
    status: "Reading",
    rating: "4.8 / 5.0",
    coverImage: "/covers/34277a78f6e177bf2ef011.jpg",
    chapters: "500+ Ch.",
    description: "Demonic Emperor Zhuo Yifan reincarnates into a servant body and rebuilds his ruthless empire.",
    tags: ["Reincarnation", "Demonic Path", "Action"]
  },
  {
    id: "b11",
    title: "The Legendary Mechanic",
    author: "Chocolion",
    category: "Novel",
    status: "Completed",
    rating: "4.9 / 5.0",
    coverImage: "/covers/11cd2a93a60a27547e1b10.jpg",
    chapters: "1450 Ch.",
    description: "Han Xiao builds a galaxy-wide mechanical army from scratch inside a VR game world.",
    tags: ["Sci-Fi", "Mechanical", "Gaming"]
  }
];
