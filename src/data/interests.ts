export interface BookRecommendation {
  id: string;
  title: string;
  author: string;
  category: "Novel" | "Manhwa" | "Manga" | "Manhua";
  coverImage: string;
  description: string;
  chapters?: string;
  status: "Completed" | "Ongoing" | "Reading";
  tags: string[];
}

export const bookRecommendations: BookRecommendation[] = [
  {
    "id": "b_1",
    "title": "A Returner's Magic Should Be Special",
    "author": "Usonan / Wookjakga",
    "category": "Manhwa",
    "status": "Completed",
    "coverImage": "/books/a_returners_magic_should_be_special.jpg?v=1786421072",
    "chapters": "270 Ch.",
    "description": "Desir Arman travels 13 years into the past after humanity's annihilation in the Shadow Labyrinth, reforming his academy allies to prevent apocalyptic doom.",
    "tags": [
      "Regression",
      "Magic",
      "Strategy"
    ]
  },
  {
    "id": "b_2",
    "title": "Above Ten Thousand People",
    "author": "Yeyu / Boyi",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/above_ten_thousand_people.jpg?v=1786421072",
    "chapters": "260+ Ch.",
    "description": "Yi Feng believes he is an ordinary mortal with no cultivation talent, completely oblivious to the fact that his casual chores and pets awe supreme immortal lords.",
    "tags": [
      "Comedy",
      "Misunderstanding",
      "Cultivation"
    ]
  },
  {
    "id": "b_3",
    "title": "Archmage Transcending Through Regression",
    "author": "Nodou / Kim Hyeong-jun",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/archmage_transcending_through_regression.jpg?v=1786421072",
    "chapters": "90+ Ch.",
    "description": "Mikhail, the realm's strongest archmage, regresses to his youth to rectify past magical mistakes and rebuild his mana core from scratch.",
    "tags": [
      "Regression",
      "Magic Academy",
      "Overpowered"
    ]
  },
  {
    "id": "b_4",
    "title": "Astral Pet Store",
    "author": "Ancient Gu / Yuewen",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/astral_pet_store.jpg?v=1786421072",
    "chapters": "140+ Ch.",
    "description": "Su Ping inherits a modest pet shop paired with a divine breeding system, raising ordinary beasts into terrifying cosmic titans.",
    "tags": [
      "Pet Breeding",
      "System",
      "Action"
    ]
  },
  {
    "id": "b_5",
    "title": "Battle Game In 5 Seconds",
    "author": "Saizou Harawata / Kashiwa Miyako",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/battle_game_in_5_seconds.jpg?v=1786421072",
    "chapters": "200+ Ch.",
    "description": "Akira Shiroyanagi uses his unique psychological ability \u2014 'the power the opponent thinks you have' \u2014 to outsmart lethal battle royale contenders.",
    "tags": [
      "Mind Games",
      "Battle Royale",
      "Superpowers"
    ]
  },
  {
    "id": "b_6",
    "title": "Becoming A Magic School Mage",
    "author": "Gladiator / Studio Lico",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/becoming_a_magic_school_mage.jpg?v=1786421072",
    "chapters": "75+ Ch.",
    "description": "An overworked modern academic is transmigrated into a harsh magic academy, using empirical scientific logic to revolutionize arcane spells.",
    "tags": [
      "Magic Academy",
      "Transmigration",
      "Fantasy"
    ]
  },
  {
    "id": "b_7",
    "title": "Bizarre Restaurant",
    "author": "Red-A",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/bizarre_restaurant.jpg?v=1786421072",
    "chapters": "60+ Ch.",
    "description": "Hunter Kang Seung-woo opens an otherworldly diner, serving magical cuisine prepared from high-tier dungeon monster ingredients.",
    "tags": [
      "Cooking",
      "Dungeon",
      "Slice of Life"
    ]
  },
  {
    "id": "b_8",
    "title": "City Evil King",
    "author": "Fei Fan",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/city_evil_king.jpg?v=1786421072",
    "chapters": "180+ Ch.",
    "description": "A former demonic monarch reincarnates into a modern metropolis, crushing corrupt urban syndicates with ancient martial techniques.",
    "tags": [
      "Urban Cultivation",
      "Reincarnation",
      "Action"
    ]
  },
  {
    "id": "b_9",
    "title": "Enrolling In The Transcendent Academy",
    "author": "Chungdae",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/enrolling_in_the_transcendent_academy.jpg?v=1786421072",
    "chapters": "110+ Ch.",
    "description": "Drowning in debt, hunter Seo-jun receives a mysterious scholarship to an academy attended by gods, celestial immortals, and mythical heroes.",
    "tags": [
      "Academy",
      "Gods System",
      "Hunter"
    ]
  },
  {
    "id": "b_10",
    "title": "I Became A Renowned Family's Sword Prodigy",
    "author": "Jigyeong / Redice Studio",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/i_became_a_renowned_familys_sword_prodigy.jpg?v=1786421072",
    "chapters": "105+ Ch.",
    "description": "Baek Yu-seol enters a fantasy game as a discarded noble with a broken mana system, mastering pure swordsmanship to stop world destruction.",
    "tags": [
      "Swordsmanship",
      "Academy",
      "Game World"
    ]
  },
  {
    "id": "b_11",
    "title": "I Grow Stronger By Eating",
    "author": "Chalguksu",
    "category": "Manhwa",
    "status": "Completed",
    "coverImage": "/books/i_grow_stronger_by_eating.jpg?v=1786421072",
    "chapters": "91 Ch.",
    "description": "Petros possesses the 'Predator' ability, devouring monster flesh to absorb their physical traits, magic abilities, and biological advantages.",
    "tags": [
      "Monster Evolution",
      "Dark Hero",
      "Action"
    ]
  },
  {
    "id": "b_12",
    "title": "I'll Be Taking A Break For Personal Reasons",
    "author": "Yoo Il-sin",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/ill_be_taking_a_break_for_personal_reasons.jpg?v=1786421072",
    "chapters": "85+ Ch.",
    "description": "An exhausted web novel author awakens a god-like administrative authority interface, gaining absolute control over real-world dungeon stats.",
    "tags": [
      "System",
      "Dungeon",
      "Comedy"
    ]
  },
  {
    "id": "b_13",
    "title": "I'm An Evil God",
    "author": "Shiyanjia",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/im_an_evil_god.jpg?v=1786421072",
    "chapters": "450+ Ch.",
    "description": "Xie Yan transmigrates across multiple martial and demonic worlds, accumulating emotion points to upgrade martial arts techniques.",
    "tags": [
      "World Hopping",
      "Cultivation",
      "Demonic Path"
    ]
  },
  {
    "id": "b_14",
    "title": "Juujika No Rokunin",
    "author": "Shiryu Nakatake",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/juujika_no_rokunin.jpg?v=1786421072",
    "chapters": "160+ Ch.",
    "description": "After his family is brutally murdered by five sadistic bullies, Shun Uruma undergoes secret WW2 military training to exact ruthless revenge.",
    "tags": [
      "Psychological",
      "Revenge",
      "Tragedy"
    ]
  },
  {
    "id": "b_15",
    "title": "Karada Sagashi",
    "author": "Welzard / Katsutoshi Murase",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/karada_sagashi.jpg?v=1786421072",
    "chapters": "153 Ch.",
    "description": "Six high school students are trapped in a deadly midnight time loop, forced to search for the dismembered body parts of a Red Person victim.",
    "tags": [
      "Horror",
      "Time Loop",
      "Survival"
    ]
  },
  {
    "id": "b_16",
    "title": "Legend Of Star General",
    "author": "HangMan / FanFan",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/legend_of_star_general.jpg?v=1786421072",
    "chapters": "220+ Ch.",
    "description": "Song Yunfeng commands high-tech mech suits and cosmic star power, defending intergalactic human bastions against alien swarms.",
    "tags": [
      "Mecha",
      "Sci-Fi",
      "Cultivation"
    ]
  },
  {
    "id": "b_17",
    "title": "Level Up With The Gods",
    "author": "Blackajin / Oh Hyun-jun",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/level_up_with_the_gods.jpg?v=1786421072",
    "chapters": "110+ Ch.",
    "description": "Kim Yu-won regresses back to the bottom of the Tower after the Outer Gods defeat the High Gods, climbing at breaking speed to avert cosmic extinction.",
    "tags": [
      "Regression",
      "Tower Climbing",
      "Mythology"
    ]
  },
  {
    "id": "b_18",
    "title": "Leveling Beyond The Max",
    "author": "Kyung-ho",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/leveling_beyond_the_max.jpg?v=1786421072",
    "chapters": "95+ Ch.",
    "description": "Trapped in the Void for millennia, Cha Shin-hyun breaks past maximum level caps, returning to Earth to effortlessly annihilate rank-S gates.",
    "tags": [
      "Overpowered",
      "Dungeon",
      "Action"
    ]
  },
  {
    "id": "b_19",
    "title": "My Wife Came From A Thousand Years Ago",
    "author": "Xiang Tang / Jiu Lu",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/my_wife_came_from_a_thousand_years_ago.jpg?v=1786421072",
    "chapters": "240+ Ch.",
    "description": "Tang Ruowei, a skilled female sword master from ancient China, suddenly teleports into modern Shanghai, learning modern life under Xu Qing.",
    "tags": [
      "Romance",
      "Slice of Life",
      "Reverse Isekai"
    ]
  },
  {
    "id": "b_20",
    "title": "Mythic_Item_Obtained",
    "author": "Jung Seon-yul",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/mythic_item_obtained.jpg?v=1786421072",
    "chapters": "100+ Ch.",
    "description": "Jae-hyun stumbles upon Odin's lost eye artifact, unlocking mythic Norse magic spellbooks and instant stat growth.",
    "tags": [
      "Norse Mythology",
      "Magic",
      "System"
    ]
  },
  {
    "id": "b_21",
    "title": "Necromancer Academy's Genius Summoner",
    "author": "Sora / Redice Studio",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/necromancer_academys_genius_summoner.jpg?v=1786421072",
    "chapters": "85+ Ch.",
    "description": "Simon Polentia, born with immense natural dark mana, enters Kizen Necromancy Academy, commanding undead legions with brilliant strategy.",
    "tags": [
      "Necromancy",
      "Academy",
      "Dark Magic"
    ]
  },
  {
    "id": "b_22",
    "title": "Necromancer, The Ultimate Scourge!",
    "author": "Moxian / FanFan",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/necromancer_the_ultimate_scourge.jpeg?v=1786421072",
    "chapters": "130+ Ch.",
    "description": "Lin Mo shifts to a hidden SSS-tier Necromancer class, summoning endless skeleton armies that gain passive infinite stack buffs.",
    "tags": [
      "Necromancy",
      "System",
      "Overpowered"
    ]
  },
  {
    "id": "b_23",
    "title": "Omniscient Reader's Viewpoint",
    "author": "Sing Shong / Sleepy-C (REDICE)",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/omniscient_readers_viewpoint.jpg?v=1786421072",
    "chapters": "220+ Ch.",
    "description": "Kim Dokja, the sole reader of a 3,000-chapter web novel, uses his intimate plot knowledge to navigate a real-world scenario apocalypse alongside protagonist Yoo Joonghyuk.",
    "tags": [
      "Meta-Fantasy",
      "Survival",
      "Constellations",
      "Masterpiece"
    ]
  },
  {
    "id": "b_24",
    "title": "Pick Me Up Infinite Gacha",
    "author": "Hermod / WASABACK",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/pick_me_up_infinite_gacha.jpg?v=1786421072",
    "chapters": "100+ Ch.",
    "description": "Loki, a top 5 global mobile gacha player, is summoned into the game as a 1-star trash hero, leading low-rarity units through brutal dungeon floors.",
    "tags": [
      "Gacha Game",
      "Dark Fantasy",
      "Tactical Survival"
    ]
  },
  {
    "id": "b_25",
    "title": "Player Can't Level Up",
    "author": "Avis / Redice Studio",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/player_cant_level_up.jpg?v=1786421072",
    "chapters": "150+ Ch.",
    "description": "Kim Gi-gyu remains stuck at level 1 for 5 years until awakening the unique ability to link and evolve sentient ego weapons.",
    "tags": [
      "Ego Weapons",
      "Tower Climbing",
      "Action"
    ]
  },
  {
    "id": "b_26",
    "title": "Redo Of Healer Rolls For Vengeance",
    "author": "Rui Tsukiyo",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/redo_of_healer_rolls_for_vengeance.jpg?v=1786421072",
    "chapters": "50+ Ch.",
    "description": "Healer Keyaru rewinds time to exact brutal vengeance upon the heroes who exploited and abused his healing abilities.",
    "tags": [
      "Dark Fantasy",
      "Revenge",
      "Mature"
    ]
  },
  {
    "id": "b_27",
    "title": "Regressor Instruction Manual",
    "author": "Dramafire / Blue Catus",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/regressor_instruction_manual.jpg?v=1786421072",
    "chapters": "120+ Ch.",
    "description": "Lee Kiyoung uses his Mind's Eye skill to manipulate powerful regressor Kim Hyunsung, operating as the master strategist behind the scenes.",
    "tags": [
      "Mind Manipulation",
      "Dark Hero",
      "Strategy"
    ]
  },
  {
    "id": "b_28",
    "title": "Reincarnation Of The Suicidal Battle God",
    "author": "Blue-Deep",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/reincarnation_of_the_suicidal_battle_god.jpg?v=1786421072",
    "chapters": "100+ Ch.",
    "description": "Zephyr, the last surviving human in the war against the Demon God Tartaros, is granted a second chance by the gods to rewrite humanity's downfall.",
    "tags": [
      "Regression",
      "High Fantasy",
      "Masterpiece"
    ]
  },
  {
    "id": "b_29",
    "title": "Reloaded Into The Other World",
    "author": "Hye-ju",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/reloaded_into_the_other_world.jpg?v=1786421072",
    "chapters": "70+ Ch.",
    "description": "A veteran military sniper transmigrates into a magical kingdom, pairing firearms technology with mana enhancement.",
    "tags": [
      "Firearms",
      "Isekai",
      "Action"
    ]
  },
  {
    "id": "b_30",
    "title": "Return Of The Frozen Player",
    "author": "Silvaf / Redice Studio",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/return_of_the_frozen_player.jpg?v=1786421072",
    "chapters": "115+ Ch.",
    "description": "Seo Jun-ho awakens 25 years after sacrificing himself to freeze the Frost Queen, resuming his mission to thaw his frozen party members.",
    "tags": [
      "Ice Magic",
      "Dungeon",
      "Return"
    ]
  },
  {
    "id": "b_31",
    "title": "Return Of The Shattered Constellation",
    "author": "Sadoyeon / Flex",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/return_of_the_shattered_constellation.jpg?v=1786421072",
    "chapters": "110+ Ch.",
    "description": "Lee Chang-sun, a fallen divine constellation, descends into a mortal body to reclaim his divine throne and exact vengeance on betrayers.",
    "tags": [
      "Constellation",
      "Regression",
      "Action"
    ]
  },
  {
    "id": "b_32",
    "title": "Second Life Ranker",
    "author": "Nong Nong / Sa Doo",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/second_life_ranker.jpg?v=1786421072",
    "chapters": "170+ Ch.",
    "description": "Yeon-woo inherits his twin brother's pocket watch and journal, entering the Obelisk tower to hunt down the teammates who betrayed his brother.",
    "tags": [
      "Tower Climbing",
      "Revenge",
      "Draconic Power"
    ]
  },
  {
    "id": "b_33",
    "title": "Shadow Slave",
    "author": "Guiltythree",
    "category": "Novel",
    "status": "Ongoing",
    "coverImage": "/books/shadow_slave.jpg?v=1786421072",
    "chapters": "1600+ Ch.",
    "description": "Sunless, a clever slum youth infected by the Nightmare Spell, navigates dark fantasy realms. Features incredible worldbuilding, smart tactical combat, and deep lore.",
    "tags": [
      "Dark Fantasy",
      "Nightmare Spell",
      "Tactical Combat",
      "Masterpiece"
    ]
  },
  {
    "id": "b_34",
    "title": "So I'm A Cultivation Big Shot",
    "author": "Sike / Yuewen",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/so_im_a_cultivation_big_shot.jpg?v=1786421072",
    "chapters": "210+ Ch.",
    "description": "Li Nianfan lives as an ordinary man whose casual calligraphy, tea brewing, and poetry trigger heavenly tribulations and immortal awakenings.",
    "tags": [
      "Comedy",
      "Cultivation",
      "Overpowered"
    ]
  },
  {
    "id": "b_35",
    "title": "Solo Max Level Newbie",
    "author": "WAN.Z / Redice Studio",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/solo_max_level_newbie.jpg?v=1786421072",
    "chapters": "140+ Ch.",
    "description": "Kang Jin-hyuk, the only gaming streamer who cleared the impossible 'Tower of Trials', uses hidden floor secrets to dominate when the tower becomes real.",
    "tags": [
      "Tower",
      "Gaming Knowledge",
      "Overpowered"
    ]
  },
  {
    "id": "b_36",
    "title": "Spare Me, Great Lord!",
    "author": "The Reader That Loves Diving",
    "category": "Manhua",
    "status": "Completed",
    "coverImage": "/books/spare_me_great_lord.jpg?v=1786421072",
    "chapters": "500 Ch.",
    "description": "Lu Shu gains a unique system powered by negative distress points, taunting rivals and enemies to convert their annoyance into supreme physical cultivation.",
    "tags": [
      "Comedy",
      "System",
      "Cultivation"
    ]
  },
  {
    "id": "b_37",
    "title": "Spirit Tamer",
    "author": "Moxian",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/spirit_tamer.jpg?v=1786421072",
    "chapters": "130+ Ch.",
    "description": "A young spirit contractor binds rare elemental beasts, climbing regional tournaments to uncover ancient spirit secrets.",
    "tags": [
      "Spirit Beast",
      "Tournament",
      "Action"
    ]
  },
  {
    "id": "b_38",
    "title": "Swordmaster's Youngest Son",
    "author": "AZI / Redice Studio",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/swordmasters_youngest_son.jpg?v=1786421072",
    "chapters": "120+ Ch.",
    "description": "Jin Runcandel, exiled trash son of the world's strongest sword clan, makes a pact with the Shadow God Solderet and regresses to master dual sword and magic.",
    "tags": [
      "Swordsmanship",
      "Shadow Magic",
      "Regression"
    ]
  },
  {
    "id": "b_39",
    "title": "The 100th Regression Of The Max-Level Player",
    "author": "KingS",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/the_100th_regression_of_the_max_level_player.jpg?v=1786421072",
    "chapters": "60+ Ch.",
    "description": "Ryu Min reaches his final 100th regression attempt in a death game, using total future knowledge to clear divine death scenarios.",
    "tags": [
      "Regression",
      "Death Game",
      "Action"
    ]
  },
  {
    "id": "b_40",
    "title": "The Dark Magician Transmigrates After 66666 Years",
    "author": "TARU / Pasol",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/the_dark_magician_transmigrates_after_66666_years.jpg?v=1786421072",
    "chapters": "110+ Ch.",
    "description": "Diablo Volfir, the supreme dark archmage sealed by 12 corruption gods, awakens 66,666 years later as young noble Jamie Welton.",
    "tags": [
      "Reincarnation",
      "Dark Magic",
      "Nobility"
    ]
  },
  {
    "id": "b_41",
    "title": "The Great Mage Returns After 4000 Years",
    "author": "Barnacle / Redice Studio",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/the_great_mage_returns_after_4000_years.jpg?v=1786421072",
    "chapters": "180+ Ch.",
    "description": "Lucas Trowman, history's greatest 9-star archmage, returns 4,000 years after being trapped by Demigods, taking over the body of suicidal student Frey Blake.",
    "tags": [
      "Archmage",
      "Demigods",
      "Reincarnation"
    ]
  },
  {
    "id": "b_42",
    "title": "The Naming Of The Night",
    "author": "Cuttlefish / Yuewen",
    "category": "Novel",
    "status": "Completed",
    "coverImage": "/books/the_naming_of_the_night.jpg?v=1786421072",
    "chapters": "1000 Ch.",
    "description": "Qing Chen discovers a cyberpunk world where transmigrators swap bodies between high-tech futuristic metropolises and modern Earth.",
    "tags": [
      "Cyberpunk",
      "World Hopping",
      "Masterpiece"
    ]
  },
  {
    "id": "b_43",
    "title": "The S-Ranks That I Raised",
    "author": "Geunseo / Serang",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/the_s_ranks_that_i_raised.jpg?v=1786421072",
    "chapters": "120+ Ch.",
    "description": "F-rank hunter Han Yo-jin sacrifices himself for his S-rank brother, regressing with the ability to nurture and buff S-rank hunters.",
    "tags": [
      "Support Skill",
      "Regression",
      "Brotherhood"
    ]
  },
  {
    "id": "b_44",
    "title": "The Strongest Son-in-Law In History",
    "author": "Silk Road",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/the_strongest_son_in_law_in_history.jpg?v=1786421072",
    "chapters": "160+ Ch.",
    "description": "Shen Lang transmigrates into a matriarchal noble estate, using modern chemistry and tactical military strategy to rise to supreme power.",
    "tags": [
      "Kingdom Building",
      "Transmigration",
      "Strategy"
    ]
  },
  {
    "id": "b_45",
    "title": "The World After The End",
    "author": "Sing Shong / Undead Gamja",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/the_world_after_the_end.jpg?v=1786421072",
    "chapters": "120+ Ch.",
    "description": "Jae-hwan refuses to use the Regression Stone when humanity falls, thrusting his thrust skill through the illusion towers into the Abyss.",
    "tags": [
      "Abyss",
      "Existential Fantasy",
      "Masterpiece"
    ]
  },
  {
    "id": "b_46",
    "title": "Tonikaku Kawaii",
    "author": "Kenjiro Hata",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/tonikaku_kawaii.jpg?v=1786421072",
    "chapters": "250+ Ch.",
    "description": "Nasa Yuzaki survives a traffic accident after being saved by Tsukasa, proposing marriage on the spot in a wholesome mystery romance.",
    "tags": [
      "Romance",
      "Wholesome",
      "Slice of Life"
    ]
  },
  {
    "id": "b_47",
    "title": "Tyrant Of The Tower Defense Game",
    "author": "Gyul-\ud53c / Haru",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/tyrant_of_the_tower_defense_game.jpg?v=1786421072",
    "chapters": "95+ Ch.",
    "description": "Ash, a hardcore gamer, transmigrates into Prince Ash of Stage 0 in an impossible tower defense strategy RPG, managing morale and brutal monster waves.",
    "tags": [
      "Tower Defense",
      "Strategy",
      "Hardcore"
    ]
  },
  {
    "id": "b_48",
    "title": "Youngest Scion Of The Mages",
    "author": "Mage-K",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/youngest_scion_of_the_mage.jpg?v=1786421072",
    "chapters": "70+ Ch.",
    "description": "Luan, born into a legendary archmage house with broken mana channels, uses ancient breathing techniques to forge a brand new mana core.",
    "tags": [
      "Magic Clan",
      "Cultivation",
      "Action"
    ]
  },
  {
    "id": "b_49",
    "title": "Academy Genius Swordmaster",
    "author": "Subin / Lico",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/academy_genius_swordmaster.jpg?v=1786421072",
    "chapters": "70+ Ch.",
    "description": "Ronan, a disgraced frontline soldier, regresses to his academy days, using raw instincts and sword techniques to slay cosmic disasters.",
    "tags": [
      "Swordsmanship",
      "Academy",
      "Regression"
    ]
  },
  {
    "id": "b_50",
    "title": "Berserk",
    "author": "Kentaro Miura / Studio Gaga",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/berserk.jpg?v=1786421072",
    "chapters": "375+ Ch.",
    "description": "Guts' dark, legendary journey as the Black Swordsman against fate, terrifying apostles, and the God Hand. The ultimate dark fantasy masterpiece.",
    "tags": [
      "Dark Fantasy",
      "Tragedy",
      "Masterpiece"
    ]
  },
  {
    "id": "b_51",
    "title": "Boundless Ascension",
    "author": "2L",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/boundless_ascension.jpg?v=1786421072",
    "chapters": "80+ Ch.",
    "description": "Sung Sung-hyun enters the Trial Tower, acquiring passive stat absorption and infinite technique fusion to surpass high rankers.",
    "tags": [
      "Tower",
      "Growth",
      "Action"
    ]
  },
  {
    "id": "b_52",
    "title": "Btooom",
    "author": "Junya Inoue",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/btooom.jpg?v=1786421072",
    "chapters": "121 Ch.",
    "description": "Top-ranked gamer Ryota Sakamoto wakes up trapped on a deserted island, forced to play a real-life death match using specialized BIM bombs.",
    "tags": [
      "Battle Royale",
      "Survival",
      "Action"
    ]
  },
  {
    "id": "b_53",
    "title": "Corpse Party",
    "author": "Makoto Kedouin / Toshimi Shinomiya",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/corpse_party.jpg?v=1786421072",
    "chapters": "47 Ch.",
    "description": "Students performing a ritual charm are transported to Heavenly Host Elementary School, an alternate dimensional haunt haunted by vengeful child ghosts.",
    "tags": [
      "Horror",
      "Gore",
      "Psychological"
    ]
  },
  {
    "id": "b_54",
    "title": "Dark Gathering",
    "author": "Kenichi Kondo",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/dark_gathering.jpg?v=1786421072",
    "chapters": "60+ Ch.",
    "description": "Keitaro Gentoga, a spiritual medium magnetic to malevolent ghosts, assists child prodigy Yayoi Hozuki in capturing evil spirits to fight a god.",
    "tags": [
      "Horror",
      "Occult",
      "Exorcism"
    ]
  },
  {
    "id": "b_55",
    "title": "Dead Tube",
    "author": "Mikoto Yamaguchi / Touta Kitakawa",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/dead_tube.jpg?v=1786421072",
    "chapters": "90+ Ch.",
    "description": "Cameraman Tomohiro Machiya is dragged into Dead Tube, a dark web video sharing platform where extreme violence and crime yield millions in cash.",
    "tags": [
      "Psychological",
      "Thriller",
      "Mature"
    ]
  },
  {
    "id": "b_56",
    "title": "Demonic Emperor",
    "author": "Nightingale",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/demonic_emperor.jpg?v=1786421072",
    "chapters": "520+ Ch.",
    "description": "Zhuo Yifan, the formidable Demonic Emperor, is betrayed and reincarnated into a powerless house steward, using cunning dark arts to rise.",
    "tags": [
      "Demonic Path",
      "Reincarnation",
      "Mastermind"
    ]
  },
  {
    "id": "b_57",
    "title": "Devide Pet Evolution",
    "author": "Fei Fan",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/devide_pet_evolution.jpg?v=1786421072",
    "chapters": "100+ Ch.",
    "description": "Gao Peng awakens the Monster Data Eye, breeding mutated divine beasts through rare evolutionary paths.",
    "tags": [
      "Monster Breeding",
      "System",
      "Action"
    ]
  },
  {
    "id": "b_58",
    "title": "Dice",
    "author": "Yun Hyun-seok",
    "category": "Manhwa",
    "status": "Completed",
    "coverImage": "/books/dice.jpg?v=1786421072",
    "chapters": "386 Ch.",
    "description": "Bullied student Dongtae discovers mystery Dice that alter physical beauty, intelligence, and stats in exchange for completing ominous tasks.",
    "tags": [
      "Psychological",
      "Supernatural",
      "System"
    ]
  },
  {
    "id": "b_59",
    "title": "Fff Trash Hero",
    "author": "Farnar",
    "category": "Manhwa",
    "status": "Completed",
    "coverImage": "/books/fff_trash_hero.jpg?v=1786421072",
    "chapters": "145 Ch.",
    "description": "Kang Han-soo slays the Demon King after 10 agonizing years, only to receive an 'F' in personality and get sent back to day 1 of summoning.",
    "tags": [
      "Anti-Hero",
      "Comedy",
      "Regression"
    ]
  },
  {
    "id": "b_60",
    "title": "Gokurakugai",
    "author": "Yuto Sano",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/gokurakugai.jpg?v=1786421072",
    "chapters": "20+ Ch.",
    "description": "Tao and Alma run a troubleshooter office in a chaotic district, hunting grotesque monsters known as Magatsu born from human corpses.",
    "tags": [
      "Action",
      "Supernatural",
      "Stunning Art"
    ]
  },
  {
    "id": "b_61",
    "title": "Henna Ie",
    "author": "Uketsu / Kyo Muto",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/henna_ie.jpg?v=1786421072",
    "chapters": "25 Ch.",
    "description": "An architect analyzes a strange Tokyo house floor plan, uncovering hidden double walls, secret murder passages, and sinister rituals.",
    "tags": [
      "Mystery",
      "Psychological",
      "Architectural Horror"
    ]
  },
  {
    "id": "b_62",
    "title": "Hero Return",
    "author": "Kim Su-gon",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/hero_return.jpg?v=1786421072",
    "chapters": "90+ Ch.",
    "description": "The world's strongest hero Kim Sung-bin dies in battle, waking up 20 years later to find corrupt guilds misusing his legacy.",
    "tags": [
      "Return",
      "Hero",
      "Action"
    ]
  },
  {
    "id": "b_63",
    "title": "Horimiya",
    "author": "HERO / Daisuke Hagiwara",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/horimiya.jpg?v=1786421072",
    "chapters": "125 Ch.",
    "description": "Popular Kyoko Hori and quiet pierced Miyamura discover each other's secret home personalities, developing a sweet and genuine romance.",
    "tags": [
      "Romance",
      "School Life",
      "Masterpiece"
    ]
  },
  {
    "id": "b_64",
    "title": "Hunter X Hunter",
    "author": "Yoshihiro Togashi",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/hunter_x_hunter.jpg?v=1786421072",
    "chapters": "400+ Ch.",
    "description": "Gon Freecss embarks on a journey to become a Hunter and find his father, featuring complex Nen combat logic and incredible arcs.",
    "tags": [
      "Adventure",
      "Nen System",
      "Masterpiece"
    ]
  },
  {
    "id": "b_65",
    "title": "Infinite Mage",
    "author": "Kim Chi-woo / Kirian",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/infinite_mage.jpg?v=1786421072",
    "chapters": "80+ Ch.",
    "description": "Shirone, a commoner boy abandoned in a stable, unlocks mathematical infinity comprehension to cast unprecedented spatial mana magic.",
    "tags": [
      "Magic",
      "Infinity Mana",
      "Academy"
    ]
  },
  {
    "id": "b_66",
    "title": "Jigokuraku",
    "author": "Yuji Kaku",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/jigokuraku.jpg?v=1786421072",
    "chapters": "127 Ch.",
    "description": "Ninja Gabimaru the Hollow is offered a pardon if he can retrieve the Elixir of Life from a terrifying, mutant-infested island paradise.",
    "tags": [
      "Ninja",
      "Supernatural",
      "Masterpiece"
    ]
  },
  {
    "id": "b_67",
    "title": "Jinrou Game",
    "author": "Ryo Kawakami / Kouda 2000",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/jinrou_game.jpg?v=1786421072",
    "chapters": "30 Ch.",
    "description": "High school students are kidnapped into a real-life Werewolf Mafia game, forced to vote and execute classmates each night.",
    "tags": [
      "Death Game",
      "Psychological",
      "Suspense"
    ]
  },
  {
    "id": "b_68",
    "title": "Jujutsu Kaisen Modulo",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/jujutsu_kaisen_modulo.jpg?v=1786421072",
    "chapters": "Featured",
    "description": "jujutsu kaisen modulo \u2014 Highly compelling plot in Manga series.",
    "tags": [
      "Manga",
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "b_69",
    "title": "Jujutsu Kaisen",
    "author": "Gege Akutami",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/covers/jujutsu_kaisen.jpg",
    "chapters": "271 Ch.",
    "description": "Yuji Itadori swallows Ryomen Sukuna's cursed finger, joining Jujutsu High sorcerers to purge dangerous cursed spirits.",
    "tags": [
      "Sorcery",
      "Curses",
      "Action"
    ]
  },
  {
    "id": "b_70",
    "title": "Junket Bank",
    "author": "Tohru Tanaka",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/junket_bank.jpg?v=1786421072",
    "chapters": "140+ Ch.",
    "description": "Karasuma Bank operates high-stakes underground gambling rooms for VIPs, where debt equals organ harvesting and psychological warfare.",
    "tags": [
      "Gambling",
      "Psychological",
      "Mind Games"
    ]
  },
  {
    "id": "b_71",
    "title": "Logging 10000 Years Into The Future",
    "author": "Claw Studio",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/logging_10000_years_into_the_future.jpg?v=1786421072",
    "chapters": "110+ Ch.",
    "description": "Lu Sheng enters a dream world 10,000 years in the future, learning futuristic martial techniques and gene martial arts to dominate modern martial arts.",
    "tags": [
      "Future Knowledge",
      "Martial Arts",
      "Overpowered"
    ]
  },
  {
    "id": "b_72",
    "title": "Martial God Regressed To Level 2",
    "author": "Yoon Seok-hyun",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/martial_god_regressed_to_level_2.jpg?v=1786421072",
    "chapters": "60+ Ch.",
    "description": "Seong Ji-han regresses to the tutorial stage of the Planetary League, utilizing ancient Korean martial arts to solo cosmic invaders.",
    "tags": [
      "Regression",
      "Martial Arts",
      "System"
    ]
  },
  {
    "id": "b_73",
    "title": "Martial Peak",
    "author": "Momo / Pikapi",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/martial_peak.jpg?v=1786421072",
    "chapters": "3500+ Ch.",
    "description": "Yang Kai, a lowly trial disciple at High Heaven Pavilion, discovers a mysterious Black Book, beginning a epic journey to the peak of martial dao.",
    "tags": [
      "Cultivation",
      "Martial Dao",
      "Epic Journey"
    ]
  },
  {
    "id": "b_74",
    "title": "Overgeared",
    "author": "Park Saenal / Team Argo",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/overgeared.jpg?v=1786421072",
    "chapters": "210+ Ch.",
    "description": "Shin Young-woo (Grid) unlocks Pagma's Successor blacksmith class in VR game Satisfy, forging god-tier equipment to outgeared every raid boss.",
    "tags": [
      "Blacksmithing",
      "VRMMO",
      "Overpowered"
    ]
  },
  {
    "id": "b_75",
    "title": "Player Hide His Past",
    "author": "Chungdae",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/player_hide_his_past.jpg?v=1786421072",
    "chapters": "55+ Ch.",
    "description": "Lee Hoyeol is transmigrated into his old embarrassing middle school chuunibyou game persona, Grand Duke Grandfell, wielding noble magic.",
    "tags": [
      "Chuunibyou",
      "Comedy",
      "Magic"
    ]
  },
  {
    "id": "b_76",
    "title": "Plunderer",
    "author": "Suu Minazuki",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/plunderer.jpg?v=1786421072",
    "chapters": "82 Ch.",
    "description": "In a post-apocalyptic world governed by numbers and counts, Licht Bach hides his identity as a legendary 300-year-old Ace soldier.",
    "tags": [
      "Action",
      "Post-Apocalyptic",
      "Mystery"
    ]
  },
  {
    "id": "b_77",
    "title": "Pygmalion",
    "author": "Chihiro Watanabe",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/pygmalion.jpg?v=1786421072",
    "chapters": "19 Ch.",
    "description": "During a local mascot festival, life-sized plush mascots suddenly come to life, slaughtering attendees in a violent survival horror spree.",
    "tags": [
      "Horror",
      "Mascot Gore",
      "Survival"
    ]
  },
  {
    "id": "b_78",
    "title": "Return Of The 8th Class Magician",
    "author": "Ryu Yong / Tess",
    "category": "Manhwa",
    "status": "Completed",
    "coverImage": "/books/return_of_the_8th_class_magician.jpg?v=1786421072",
    "chapters": "81 Ch.",
    "description": "Ian Page, the world's first 8th-class archmage, is poisoned by his greedy emperor friend, regressing 30 years to reshape the empire.",
    "tags": [
      "Archmage",
      "Regression",
      "Completed"
    ]
  },
  {
    "id": "b_79",
    "title": "Return Survival",
    "author": "Kim Tae-woong",
    "category": "Manhwa",
    "status": "Completed",
    "coverImage": "/books/return_survival.jpg?v=1786421072",
    "chapters": "136 Ch.",
    "description": "Yoohan survives 3 years in a zombie apocalypse before dying, regressing to 6 months before the outbreak to build an impenetrable bunker compound.",
    "tags": [
      "Zombie Apocalypse",
      "Regression",
      "Survival"
    ]
  },
  {
    "id": "b_80",
    "title": "Shounen No Abyss",
    "author": "Ryo Minenami",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/shounen_no_abyss.jpg?v=1786421072",
    "chapters": "180 Ch.",
    "description": "Reiji Kurose lives trapped in a hopeless rural town. A chance meeting with a retired idol drags him into a deep psychological abyss.",
    "tags": [
      "Psychological",
      "Drama",
      "Tragedy"
    ]
  },
  {
    "id": "b_81",
    "title": "Shuumatsu No Valkyrie",
    "author": "Shinya Umemura / Ajichika",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/shuumatsu_no_valkyrie.jpg?v=1786421072",
    "chapters": "90+ Ch.",
    "description": "13 grand 1-on-1 duels between gods and human historical legends determine whether humanity deserves survival or total extinction.",
    "tags": [
      "Gods vs Humans",
      "Tournament",
      "Epic Battles"
    ]
  },
  {
    "id": "b_82",
    "title": "Solo Leveling",
    "author": "Chugong / DUBU (REDICE)",
    "category": "Manhwa",
    "status": "Completed",
    "coverImage": "/books/solo_leveling.jpg?v=1786421072",
    "chapters": "200 Ch.",
    "description": "Sung Jin-woo, the weakest E-rank hunter, awakens a secret quest system after a double dungeon incident, rising as the Shadow Monarch.",
    "tags": [
      "Shadow Monarch",
      "Hunter",
      "Masterpiece"
    ]
  },
  {
    "id": "b_83",
    "title": "Star Embracing Swordmaster",
    "author": "Q-T",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/star_embracing_swordmaster.jpg?v=1786421072",
    "chapters": "65+ Ch.",
    "description": "Vlad, a street urchin in the slums, gains a star-blessed sword artifact, honing pure sword heart techniques to protect his comrades.",
    "tags": [
      "Swordsmanship",
      "Growth",
      "Fantasy"
    ]
  },
  {
    "id": "b_84",
    "title": "Sweet Home",
    "author": "Carnby Kim / Youngchan Hwang",
    "category": "Manhwa",
    "status": "Completed",
    "coverImage": "/books/sweet_home.jpg?v=1786421072",
    "chapters": "140 Ch.",
    "description": "Reclusive teenager Cha Hyun-soo and apartment residents fight to survive as humans transform into monsters based on their innermost desires.",
    "tags": [
      "Horror",
      "Monster Apocalypse",
      "Masterpiece"
    ]
  },
  {
    "id": "b_85",
    "title": "The King Of Knight Return With God",
    "author": "Blue-Deep",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/the_king_of_knight_return_with_god.jpg?v=1786421072",
    "chapters": "60+ Ch.",
    "description": "King Leon, the last holy knight king of an otherworldly realm, transmigrates to modern Earth, hunting dimensional demons with holy aura.",
    "tags": [
      "Holy Knight",
      "Reverse Isekai",
      "Action"
    ]
  },
  {
    "id": "b_86",
    "title": "The Novel Extra",
    "author": "Jee Gab-Song",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/the_novel_extra.jpg?v=1786421072",
    "chapters": "100+ Ch.",
    "description": "Kim Hajin is transmigrated as a extra mob character Kim Chundong into his own novel, surviving using precision sniper marksmanship.",
    "tags": [
      "Transmigration",
      "Sniper",
      "Academy"
    ]
  },
  {
    "id": "b_87",
    "title": "The Scared Ruins",
    "author": "Chen Dong",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/the_scared_ruins.jpg?v=1786421072",
    "chapters": "150+ Ch.",
    "description": "Modern Earth undergoes a post-apocalyptic cosmic awakening, unlocking ancient ruins, mutated beasts, and divine martial fruits.",
    "tags": [
      "Post-Apocalyptic",
      "Cultivation",
      "Action"
    ]
  },
  {
    "id": "b_88",
    "title": "The Wererolf Game: Crazy Fox",
    "author": "Ryo Kawakami",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/the_wererolf_game_crazy_fox.jpg?v=1786421072",
    "chapters": "28 Ch.",
    "description": "Ayaka Morii is assigned the 'Fox' role in the lethal Werewolf death game, aiming to survive alone while tricking both Villagers and Werewolves.",
    "tags": [
      "Death Game",
      "Psychological",
      "Fox Role"
    ]
  },
  {
    "id": "b_89",
    "title": "Time Limited Genius Dark Knight",
    "author": "Jung Sun-yul",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/time_limited_genius_dark_knight.jpg?v=1786421072",
    "chapters": "70+ Ch.",
    "description": "Yoo Seon-woo enters game 'Inner Fantasy' as incurable weak prince Nox von Reinherz, utilizing dark magic techniques before his timer runs out.",
    "tags": [
      "Dark Knight",
      "Game World",
      "Strategy"
    ]
  },
  {
    "id": "b_90",
    "title": "Tokyo Ghoul",
    "author": "Sui Ishida",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/tokyo_ghoul.jpg?v=1786421072",
    "chapters": "143 Ch.",
    "description": "Ken Kaneki becomes a half-ghoul after a fatal encounter, forced to navigate the secret flesh-eating ghoul society hidden in Tokyo.",
    "tags": [
      "Dark Fantasy",
      "Psychological",
      "Masterpiece"
    ]
  },
  {
    "id": "b_91",
    "title": "Tokyo Underworld",
    "author": "Kousuke Asahi",
    "category": "Manga",
    "status": "Ongoing",
    "coverImage": "/books/tokyo_underworld.jpg?v=1786421072",
    "chapters": "80+ Ch.",
    "description": "Rumors speak of a subterranean Tokyo execution ground beneath the city where criminals and monsters fight in lethal underground arenas.",
    "tags": [
      "Underground",
      "Action",
      "Survival"
    ]
  },
  {
    "id": "b_92",
    "title": "Tomb Raider King",
    "author": "Yuns / Redice Studio",
    "category": "Manhwa",
    "status": "Completed",
    "coverImage": "/books/tomb_raider_king.jpg?v=1786421072",
    "chapters": "411 Ch.",
    "description": "Seo Joo-heon regresses 15 years after being betrayed by his employer, stealing divine god relics from tomb dungeons worldwide.",
    "tags": [
      "Relic Heist",
      "Regression",
      "Action"
    ]
  },
  {
    "id": "b_93",
    "title": "Tomodachi Game",
    "author": "Mikoto Yamaguchi / Yuki Sato",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/tomodachi_game.jpg?v=1786421072",
    "chapters": "127 Ch.",
    "description": "Yuuichi Katagiri and his friends are kidnapped into Tomodachi Game to pay off a 20-million-yen debt, revealing Yuuichi's dark mastermind intellect.",
    "tags": [
      "Psychological",
      "Mastermind",
      "Death Game"
    ]
  },
  {
    "id": "b_94",
    "title": "Versatile Mage",
    "author": "Chaos",
    "category": "Manhua",
    "status": "Ongoing",
    "coverImage": "/books/versatile_mage.jpg?v=1786421072",
    "chapters": "1000+ Ch.",
    "description": "Mo Fan wakes up in a parallel modern Earth where magic is taught in school, awakening dual elements (Lightning and Fire) as a rare genius.",
    "tags": [
      "Dual Magic",
      "Urban Fantasy",
      "Action"
    ]
  },
  {
    "id": "b_95",
    "title": "World's Strongest Troll",
    "author": "Bung-gae",
    "category": "Manhwa",
    "status": "Ongoing",
    "coverImage": "/books/worlds_strongest_troll.jpg?v=1786421072",
    "chapters": "60+ Ch.",
    "description": "F-rank player Jaegyu plays VR game 'Arcadia' with maximum chaotic creativity, out-trolling high-rank guild masters.",
    "tags": [
      "VRMMO",
      "Comedy",
      "Troll Player"
    ]
  },
  {
    "id": "b_96",
    "title": "Yakushoku Distpiari",
    "author": "Togo Subaru / Aguri Igarashi",
    "category": "Manga",
    "status": "Completed",
    "coverImage": "/books/yakushoku_distpiari.jpg?v=1786421072",
    "chapters": "25 Ch.",
    "description": "In a dark fantasy kingdom where Sub-Classes exist solely to be sacrificed as EXP fodder, Class-Master Tolza rebels against divine fate.",
    "tags": [
      "Dark Fantasy",
      "Class System",
      "Anti-Hero"
    ]
  },
  {
    "id": "book-1786421072-0",
    "title": "Creepy Pharmacist: All My Patients Are Horrific",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/creepy_pharmacist_all_my_patients_are_horrific.jpg?v=1786421072",
    "description": "Featured recommendation: Creepy Pharmacist: All My Patients Are Horrific.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-1",
    "title": "Talent-swallowing Magician",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/talent_swallowing_magician.jpg?v=1786421072",
    "description": "Featured recommendation: Talent-swallowing Magician.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-2",
    "title": "How To Live As A Villain",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/how_to_live_as_a_villain.jpg?v=1786421072",
    "description": "Featured recommendation: How To Live As A Villain.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-3",
    "title": "Great Doctor Ling Ran",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/great_doctor_ling_ran.jpg?v=1786421072",
    "description": "Featured recommendation: Great Doctor Ling Ran.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-4",
    "title": "Return Of The Unrivaled Spear Knight",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/return_of_the_unrivaled_spear_knight.jpg?v=1786421072",
    "description": "Featured recommendation: Return Of The Unrivaled Spear Knight.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-5",
    "title": "Is This Hero For Real",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/is_this_hero_for_real.jpg?v=1786421072",
    "description": "Featured recommendation: Is This Hero For Real.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-6",
    "title": "I Used To Be A Boss",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/i_used_to_be_a_boss.jpg?v=1786421072",
    "description": "Featured recommendation: I Used To Be A Boss.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-7",
    "title": "The Lord's Coins Aren't Decreasing",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_lords_coins_arent_decreasing.jpg?v=1786421072",
    "description": "Featured recommendation: The Lord's Coins Aren't Decreasing.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-8",
    "title": "The Newbie Is Too Strong",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_newbie_is_too_strong.jpg?v=1786421072",
    "description": "Featured recommendation: The Newbie Is Too Strong.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-9",
    "title": "Parallel Paradise",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/parallel_paradise.jpg?v=1786421072",
    "description": "Featured recommendation: Parallel Paradise.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-10",
    "title": "Global Freeze: I Created An Apocalypse Shelter",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/global_freeze_i_created_an_apocalypse_shelter.jpg?v=1786421072",
    "description": "Featured recommendation: Global Freeze: I Created An Apocalypse Shelter.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-11",
    "title": "Chi Wo Hau Boukoku No Oujo",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/chi_wo_hau_boukoku_no_oujo.jpg?v=1786421072",
    "description": "Featured recommendation: Chi Wo Hau Boukoku No Oujo.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-12",
    "title": "Boku No Hero Academia",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/boku_no_hero_academia.jpg?v=1786421072",
    "description": "Featured recommendation: Boku No Hero Academia.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-13",
    "title": "Starting A Livestream In The Underworld: Who Dares To Join",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/starting_a_livestream_in_the_underworld_who_dares_to_joinjpg.jpg?v=1786421072",
    "description": "Featured recommendation: Starting A Livestream In The Underworld: Who Dares To Join.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-14",
    "title": "Nano Machine",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/nano_machine.jpg?v=1786421072",
    "description": "Featured recommendation: Nano Machine.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-15",
    "title": "One Punch Man",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/one_punch_man.jpg?v=1786421072",
    "description": "Featured recommendation: One Punch Man.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-16",
    "title": "Black Clover",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/black_clover.jpg?v=1786421072",
    "description": "Featured recommendation: Black Clover.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-17",
    "title": "The Priest Of Corruption",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_priest_of_corruption.jpg?v=1786421072",
    "description": "Featured recommendation: The Priest Of Corruption.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-18",
    "title": "Shotgun Boy",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/shotgun_boy.jpg?v=1786421072",
    "description": "Featured recommendation: Shotgun Boy.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-19",
    "title": "Reinforced Wood Stick",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/reinforced_wood_stick.jpg?v=1786421072",
    "description": "Featured recommendation: Reinforced Wood Stick.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-20",
    "title": "Global Ghost Control: I Have A Billion Ghosts Inside Me",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/global_ghost_control_i_have_a_billion_ghosts_inside_me.jpg?v=1786421072",
    "description": "Featured recommendation: Global Ghost Control: I Have A Billion Ghosts Inside Me.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-21",
    "title": "To Be A Power In The Shadows",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/to_be_a_power_in_the_shadows.jpg?v=1786421072",
    "description": "Featured recommendation: To Be A Power In The Shadows.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-22",
    "title": "Kengan Ashura",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/kengan_ashura.jpg?v=1786421072",
    "description": "Featured recommendation: Kengan Ashura.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-23",
    "title": "Infinity Mailman",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/infinity_mailman.jpg?v=1786421072",
    "description": "Featured recommendation: Infinity Mailman.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-24",
    "title": "Baki",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/baki.jpg?v=1786421072",
    "description": "Featured recommendation: Baki.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-25",
    "title": "The Hero Has Returned",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_hero_has_returned.jpg?v=1786421072",
    "description": "Featured recommendation: The Hero Has Returned.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-26",
    "title": "The Max Level Hero Has Returned!",
    "author": "Various Authors",
    "category": "Manhwa",
    "coverImage": "/books/the_max_level_hero_has_returned.jpg?v=1786421072",
    "description": "Featured recommendation: The Max Level Hero Has Returned!.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-27",
    "title": "The_constellations_are_my_disciples",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_constellations_are_my_disciples.jpg?v=1786421072",
    "description": "Featured recommendation: The_constellations_are_my_disciples.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-28",
    "title": "The Return Of The Disaster Class Hero",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_return_of_the_disaster_class_hero.jpg?v=1786421072",
    "description": "Featured recommendation: The Return Of The Disaster Class Hero.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-29",
    "title": "Incoming Mr. High Energy",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/incoming_mr_high_energy.jpg?v=1786421072",
    "description": "Featured recommendation: Incoming Mr. High Energy.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-30",
    "title": "Warrior High School",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/warrior_high_school.jpg?v=1786421072",
    "description": "Featured recommendation: Warrior High School.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-31",
    "title": "Updater",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/updater.jpg?v=1786421072",
    "description": "Featured recommendation: Updater.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-32",
    "title": "Solo Bug Player",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/solo_bug_player.jpg?v=1786421072",
    "description": "Featured recommendation: Solo Bug Player.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-33",
    "title": "Return Of The Blossoming Blade",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/return_of_the_blossoming_blade.jpg?v=1786421072",
    "description": "Featured recommendation: Return Of The Blossoming Blade.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-34",
    "title": "No1 Grandmaster In History",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/no1_grandmaster_in_history.jpg?v=1786421072",
    "description": "Featured recommendation: No1 Grandmaster In History.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-35",
    "title": "The Self-disciplined Me Is Practically Invincible",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_self_disciplined_me_is_practically_invincible.jpg?v=1786421072",
    "description": "Featured recommendation: The Self-disciplined Me Is Practically Invincible.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-36",
    "title": "Trash Of The Count's Family",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/trash_of_the_counts_family.jpg?v=1786421072",
    "description": "Featured recommendation: Trash Of The Count's Family.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-37",
    "title": "Ranker's Return",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/rankers_return.jpg?v=1786421072",
    "description": "Featured recommendation: Ranker's Return.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-38",
    "title": "I'm A Godfather In Another World",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/im_a_godfather_in_another_world.jpg?v=1786421072",
    "description": "Featured recommendation: I'm A Godfather In Another World.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-39",
    "title": "The Frenzy Of Evolution",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_frenzy_of_evolution.jpg?v=1786421072",
    "description": "Featured recommendation: The Frenzy Of Evolution.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-40",
    "title": "The Jobless Guy Who Has Come To Slay",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_jobless_guy_who_has_come_to_slay.jpg?v=1786421072",
    "description": "Featured recommendation: The Jobless Guy Who Has Come To Slay.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-41",
    "title": "The First Order",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_first_order.jpg?v=1786421072",
    "description": "Featured recommendation: The First Order.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-42",
    "title": "Latna Saga: Survival Of A Sword King",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/latna_saga_survival_of_a_sword_king.jpg?v=1786421072",
    "description": "Featured recommendation: Latna Saga: Survival Of A Sword King.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-43",
    "title": "The Greatest Estate Developer",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_greatest_estate_developer.jpg?v=1786421072",
    "description": "Featured recommendation: The Greatest Estate Developer.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-44",
    "title": "I'm Really Not The Demon God Lackey",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/im_really_not_the_demon_god_lackey.jpg?v=1786421072",
    "description": "Featured recommendation: I'm Really Not The Demon God Lackey.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-45",
    "title": "Op Tier Providence: Secretly Cultivate For A Thousand Years",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/op_tier_providence_secretly_cultivate_for_a_thousand_years.jpg?v=1786421072",
    "description": "Featured recommendation: Op Tier Providence: Secretly Cultivate For A Thousand Years.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-46",
    "title": "Zomgan",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/zomgan.jpg?v=1786421072",
    "description": "Featured recommendation: Zomgan.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-47",
    "title": "Revenge Of The Iron Blooded Sword Horn",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/revenge_of_the_iron_blooded_sword_horn.jpg?v=1786421072",
    "description": "Featured recommendation: Revenge Of The Iron Blooded Sword Horn.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-48",
    "title": "My Home Hero",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/my_home_hero.jpg?v=1786421072",
    "description": "Featured recommendation: My Home Hero.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-49",
    "title": "Off To An Invincible Start",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/off_to_an_invincible_start.jpg?v=1786421072",
    "description": "Featured recommendation: Off To An Invincible Start.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-50",
    "title": "Becoming A Sword Deity By Expanding My Sword Domain",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/becoming_a_sword_deity_by_expanding_my_sword_domain.jpg?v=1786421072",
    "description": "Featured recommendation: Becoming A Sword Deity By Expanding My Sword Domain.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-51",
    "title": "The Eternal Supreme",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_eternal_supreme.jpg?v=1786421072",
    "description": "Featured recommendation: The Eternal Supreme.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-52",
    "title": "The Gamer",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_gamer.jpg?v=1786421072",
    "description": "Featured recommendation: The Gamer.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-53",
    "title": "Poison-eating Healer",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/poison_eating_healer.jpg?v=1786421072",
    "description": "Featured recommendation: Poison-eating Healer.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-54",
    "title": "The Begining After The End",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_begining_after_the_end.jpg?v=1786421072",
    "description": "Featured recommendation: The Begining After The End.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-55",
    "title": "Dungeon Reset",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/dungeon_reset.jpg?v=1786421072",
    "description": "Featured recommendation: Dungeon Reset.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-56",
    "title": "Sss Class Suicide Hunter",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/sss_class_suicide_hunter.jpg?v=1786421072",
    "description": "Featured recommendation: Sss Class Suicide Hunter.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-57",
    "title": "I Have 90 Billion Licking Gold",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/i_have_90_billion_licking_gold.jpg?v=1786421072",
    "description": "Featured recommendation: I Have 90 Billion Licking Gold.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-58",
    "title": "Hitori No Shita - The Outcast",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/hitori_no_shita_the_outcast.jpg?v=1786421072",
    "description": "Featured recommendation: Hitori No Shita - The Outcast.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-59",
    "title": "The Extra Academy Survival Guide",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_extra_academy_survival_guide.jpg?v=1786421072",
    "description": "Featured recommendation: The Extra Academy Survival Guide.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-60",
    "title": "Hero Killer",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/hero_killer.jpg?v=1786421072",
    "description": "Featured recommendation: Hero Killer.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-61",
    "title": "Myst Might Mayhem",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/myst_might_mayhem.jpg?v=1786421072",
    "description": "Featured recommendation: Myst Might Mayhem.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-62",
    "title": "Get Dropped Into Ghost Story",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/get_dropped_into_ghost_story.jpg?v=1786421072",
    "description": "Featured recommendation: Get Dropped Into Ghost Story.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-63",
    "title": "The Problematic Child Of The Magic Tower",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_problematic_child_of_the_magic_tower.jpg?v=1786421072",
    "description": "Featured recommendation: The Problematic Child Of The Magic Tower.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-64",
    "title": "Eternally Regressing Knight",
    "author": "Various Authors",
    "category": "Manhwa",
    "coverImage": "/books/eternally_regressing_knight.jpg?v=1786421072",
    "description": "Featured recommendation: Eternally Regressing Knight.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-65",
    "title": "I Killed An Academy Player",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/i_killed_an_academy_player.jpg?v=1786421072",
    "description": "Featured recommendation: I Killed An Academy Player.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-66",
    "title": "The Last Adventurer",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_last_adventurer.jpg?v=1786421072",
    "description": "Featured recommendation: The Last Adventurer.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-67",
    "title": "The Archmage Restaurant",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_archmage_restaurant.jpg?v=1786421072",
    "description": "Featured recommendation: The Archmage Restaurant.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-68",
    "title": "I Really Didn't Want To Be Reborn",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/i_really_didnt_want_to_be_reborn.jpg?v=1786421072",
    "description": "Featured recommendation: I Really Didn't Want To Be Reborn.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-69",
    "title": "Zombiepapa",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/zombiepapa.jpg?v=1786421072",
    "description": "Featured recommendation: Zombiepapa.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-70",
    "title": "Reverend Insanity",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/reverend_insanity.jpg?v=1786421072",
    "description": "Featured recommendation: Reverend Insanity.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-71",
    "title": "Regressed Mercenary's Machination",
    "author": "Various Authors",
    "category": "Manhwa",
    "coverImage": "/books/regressed_mercenarys_machination.jpg?v=1786421072",
    "description": "Featured recommendation: Regressed Mercenary's Machination.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-72",
    "title": "Reincarnator",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/reincarnator.jpg?v=1786421072",
    "description": "Featured recommendation: Reincarnator.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-73",
    "title": "Return Of The Sword God Rank Civil Servant",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/return_of_the_sword_god_rank_civil_servant.jpg?v=1786421072",
    "description": "Featured recommendation: Return Of The Sword God Rank Civil Servant.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-74",
    "title": "Regressing As The Reincarnated Bastard Of The Sword Clan",
    "author": "Various Authors",
    "category": "Manhwa",
    "coverImage": "/books/regressing_as_the_reincarnated_bastard_of_the_sword_clan.jpg?v=1786421072",
    "description": "Featured recommendation: Regressing As The Reincarnated Bastard Of The Sword Clan.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-75",
    "title": "Dungeon Odyssey",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/dungeon_odyssey.jpg?v=1786421072",
    "description": "Featured recommendation: Dungeon Odyssey.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-76",
    "title": "My Passive Skills Are Invincible",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/my_passive_skills_are_invincible.jpg?v=1786421072",
    "description": "Featured recommendation: My Passive Skills Are Invincible.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-77",
    "title": "Reincarnated As A Genius Prodigy Of A Prestigious Family",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/reincarnated_as_a_genius_prodigy_of_a_prestigious_family.jpg?v=1786421072",
    "description": "Featured recommendation: Reincarnated As A Genius Prodigy Of A Prestigious Family.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-78",
    "title": "Became A Part-time Employee For Gods",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/became_a_part_time_employee_for_gods.jpg?v=1786421072",
    "description": "Featured recommendation: Became A Part-time Employee For Gods.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-79",
    "title": "Juvenile Prison",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/juvenile_prison.jpg?v=1786421072",
    "description": "Featured recommendation: Juvenile Prison.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-80",
    "title": "F Class Destiny Hunter",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/f_class_destiny_hunter.jpg?v=1786421072",
    "description": "Featured recommendation: F Class Destiny Hunter.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-81",
    "title": "The More I Die, The More Invincible I Become",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_more_i_die_the_more_invincible_i_become.jpg?v=1786421072",
    "description": "Featured recommendation: The More I Die, The More Invincible I Become.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-82",
    "title": "Your Talent Is Mine",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/your_talent_is_mine.jpg?v=1786421072",
    "description": "Featured recommendation: Your Talent Is Mine.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-83",
    "title": "Dragon Devouring Mage",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/dragon_devouring_mage.jpg?v=1786421072",
    "description": "Featured recommendation: Dragon Devouring Mage.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-84",
    "title": "A Dragonslayer's Peerless Regression",
    "author": "Various Authors",
    "category": "Manhwa",
    "coverImage": "/books/a_dragonslayers_peerless_regression.jpg?v=1786421072",
    "description": "Featured recommendation: A Dragonslayer's Peerless Regression.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-85",
    "title": "Genius Archer Streamer",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/genius_archer_streamer.jpg?v=1786421072",
    "description": "Featured recommendation: Genius Archer Streamer.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-86",
    "title": "The 31st Piece Turn The Table",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_31st_piece_turn_the_table.jpg?v=1786421072",
    "description": "Featured recommendation: The 31st Piece Turn The Table.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-87",
    "title": "Return From The Abyss",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/return_from_the_abyss.jpg?v=1786421072",
    "description": "Featured recommendation: Return From The Abyss.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-88",
    "title": "Sss Grade Saint Knight",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/sss_grade_saint_knight.jpg?v=1786421072",
    "description": "Featured recommendation: Sss Grade Saint Knight.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-89",
    "title": "Catastrophic Priest",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/catastrophic_priest.jpg?v=1786421072",
    "description": "Featured recommendation: Catastrophic Priest.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-90",
    "title": "The Irregular Of The Royal Academy Of Magic",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_irregular_of_the_royal_academy_of_magic.jpg?v=1786421072",
    "description": "Featured recommendation: The Irregular Of The Royal Academy Of Magic.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-91",
    "title": "Mushoku Tensei",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/mushoku_tensei.jpg?v=1786421072",
    "description": "Featured recommendation: Mushoku Tensei.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-92",
    "title": "The Rebirth Of An 8th Circle Wizard",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_rebirth_of_an_8th_circle_wizard.jpg?v=1786421072",
    "description": "Featured recommendation: The Rebirth Of An 8th Circle Wizard.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-93",
    "title": "I'm Not That Kind Of Talent",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/im_not_that_kind_of_talent.jpg?v=1786421072",
    "description": "Featured recommendation: I'm Not That Kind Of Talent.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-94",
    "title": "Dao Of The Bizarre Immortal",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/dao_of_the_bizarre_immortal.jpg?v=1786421072",
    "description": "Featured recommendation: Dao Of The Bizarre Immortal.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-95",
    "title": "I'm The Shadow God Level Assassin",
    "author": "Various Authors",
    "category": "Manhwa",
    "coverImage": "/books/im_the_shadow_god_level_assassin.jpg?v=1786421072",
    "description": "Featured recommendation: I'm The Shadow God Level Assassin.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-96",
    "title": "The Return Of The Mythical Archmage",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_return_of_the_mythical_archmage.jpg?v=1786421072",
    "description": "Featured recommendation: The Return Of The Mythical Archmage.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-97",
    "title": "My School Life Pretending To Be A Worthless Person",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/my_school_life_pretending_to_be_a_worthless_person.jpg?v=1786421072",
    "description": "Featured recommendation: My School Life Pretending To Be A Worthless Person.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-98",
    "title": "Lag, Ultimated Passive",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/lag_ultimated_passive.jpeg?v=1786421072",
    "description": "Featured recommendation: Lag, Ultimated Passive.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-99",
    "title": "I Returned As Fff Class Witch Hunter",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/i_returned_as_fff_class_witch_hunter.jpg?v=1786421072",
    "description": "Featured recommendation: I Returned As Fff Class Witch Hunter.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-100",
    "title": "Skeleton Soldier Couldn't Protect Dungeon",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/skeleton_soldier_couldnt_protect_dungeon.jpeg?v=1786421072",
    "description": "Featured recommendation: Skeleton Soldier Couldn't Protect Dungeon.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-101",
    "title": "Ragna Crimson",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/ragna_crimson.jpg?v=1786421072",
    "description": "Featured recommendation: Ragna Crimson.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-102",
    "title": "The Nebula's Civilization",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_nebulas_civilization.jpg?v=1786421072",
    "description": "Featured recommendation: The Nebula's Civilization.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-103",
    "title": "Her Summon",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/her_summon.jpg?v=1786421072",
    "description": "Featured recommendation: Her Summon.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-104",
    "title": "Eat And Level Up",
    "author": "Various Authors",
    "category": "Manhwa",
    "coverImage": "/books/eat_and_level_up.jpg?v=1786421072",
    "description": "Featured recommendation: Eat And Level Up.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-105",
    "title": "Steel Eating Player",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/steel_eating_player.jpg?v=1786421072",
    "description": "Featured recommendation: Steel Eating Player.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-106",
    "title": "Return Of The Sss-class Ranker",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/return_of_the_sss_class_ranker.jpg?v=1786421072",
    "description": "Featured recommendation: Return Of The Sss-class Ranker.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-107",
    "title": "I Am The Strongest Boss",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/i_am_the_strongest_boss.jpg?v=1786421072",
    "description": "Featured recommendation: I Am The Strongest Boss.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-108",
    "title": "Level Up With Skills",
    "author": "Various Authors",
    "category": "Manhwa",
    "coverImage": "/books/level_up_with_skills.jpg?v=1786421072",
    "description": "Featured recommendation: Level Up With Skills.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-109",
    "title": "Hell Difficulty Tutorial",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/hell_difficulty_tutorial.jpg?v=1786421072",
    "description": "Featured recommendation: Hell Difficulty Tutorial.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-110",
    "title": "Reborn As The Enemy Prince",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/reborn_as_the_enemy_prince.jpg?v=1786421072",
    "description": "Featured recommendation: Reborn As The Enemy Prince.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-111",
    "title": "Past Life Returner",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/past_life_returner.jpg?v=1786421072",
    "description": "Featured recommendation: Past Life Returner.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-112",
    "title": "The Dungeon Master",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/the_dungeon_master.jpg?v=1786421072",
    "description": "Featured recommendation: The Dungeon Master.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-113",
    "title": "Return Of The Martial Art Genuis",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/return_of_the_martial_art_genuis.jpg?v=1786421072",
    "description": "Featured recommendation: Return Of The Martial Art Genuis.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-114",
    "title": "To Hell With Being A Saint, I'm A Doctor",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/to_hell_with_being_a_saint_im_a_doctor.jpg?v=1786421072",
    "description": "Featured recommendation: To Hell With Being A Saint, I'm A Doctor.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-115",
    "title": "Food Truck Owner Inside Dungeon",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/food_truck_owner_inside_dungeon.jpg?v=1786421072",
    "description": "Featured recommendation: Food Truck Owner Inside Dungeon.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-116",
    "title": "Kagurabachi",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/kagurabachi.jpg?v=1786421072",
    "description": "Featured recommendation: Kagurabachi.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  },
  {
    "id": "book-1786421072-117",
    "title": "Chainsaw Man",
    "author": "Various Authors",
    "category": "Manga",
    "coverImage": "/books/chainsaw_man.jpg?v=1786421072",
    "description": "Featured recommendation: Chainsaw Man.",
    "status": "Completed",
    "tags": [
      "Action",
      "Fantasy"
    ]
  }
];
