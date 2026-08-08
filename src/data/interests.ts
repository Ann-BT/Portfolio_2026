export interface Novel {
  title: string;
  author: string;
  status: "Reading" | "Completed" | "On Hold" | "Plan to Read";
  progress: string;
  note: string;
}

export interface Manga {
  title: string;
  author: string;
  status: "Reading" | "Completed" | "On Hold" | "Plan to Read";
  progress: string;
  note: string;
}

export interface Track {
  title: string;
  artist: string;
  youtubeUrl: string;
}

export const novels: Novel[] = [
  {
    title: "Lord of the Mysteries",
    author: "Cuttlefish That Loves Diving",
    status: "Completed",
    progress: "1432 Chapters",
    note: "Unbelievable world-building, Steampunk fantasy, and deep magic/potion systems. The absolute gold standard of web novels."
  },
  {
    title: "Shadow Slave",
    author: "Guiltythree",
    status: "Reading",
    progress: "Chapter 1600+",
    note: "Intense survival story, rich dark-fantasy lore, and incredibly smart combat designs. The Spell system is highly engaging."
  },
  {
    title: "The Legendary Mechanic",
    author: "Chocolion",
    status: "Completed",
    progress: "1450 Chapters",
    note: "Perfect mix of gaming, sci-fi, and comedy. Following Han Xiao build an entire mechanical empire from scratch is extremely satisfying."
  }
];

export const manga: Manga[] = [
  {
    title: "Solo Leveling",
    author: "Chugong",
    status: "Completed",
    progress: "200 Chapters",
    note: "Incredible manhwa art by DUBU (REDICE Studio). A classic hunter-leveling narrative that defined the modern webtoon design."
  },
  {
    title: "Omniscient Reader's Viewpoint",
    author: "Sing Shong",
    status: "Reading",
    progress: "Chapter 220+",
    note: "A unique meta-narrative where a single reader tries to survive a scenario-driven apocalypse based on the novel he finished."
  },
  {
    title: "Chainsaw Man",
    author: "Tatsuki Fujimoto",
    status: "Reading",
    progress: "Part 2",
    note: "Wild, unpredictable pacing, cinematic layout storytelling, and complex characters that break standard shonen tropes."
  }
];

export const musicTracks: Track[] = [
  {
    title: "Neon Blade",
    artist: "MoonDeity",
    youtubeUrl: "https://www.youtube.com/watch?v=YT1Z1D8dO0o"
  },
  {
    title: "Metamorphosis",
    artist: "INTERWORLD",
    youtubeUrl: "https://www.youtube.com/watch?v=F0B7HDiY-10"
  },
  {
    title: "RAVE",
    artist: "Dxrk 🔥",
    youtubeUrl: "https://www.youtube.com/watch?v=H74tN7eO138"
  }
];
