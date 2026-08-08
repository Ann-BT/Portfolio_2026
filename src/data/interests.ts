export interface BookRecommendation {
  id: string;
  title: string;
  author: string;
  category: "Novel" | "Manhwa" | "Manga" | "Manhua";
  status: "Completed" | "Ongoing" | "Reading" | "Plan to Read" | "Highly Recommended";
  rating: string;
  coverImage: string;
  chapters?: string;
  description: string;
  tags: string[];
}

export const bookRecommendations: BookRecommendation[] = [
  {
    "id": "b_1",
    "title": "A Returner's Magic Should Be Special",
    "author": "Usonan / Wookjakga",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/a_returners_magic_should_be_special.jpg",
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
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/above_ten_thousand_people.jpg",
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
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/archmage_transcending_through_regression.jpg",
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
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/astral_pet_store.jpg",
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
    "title": "Battle Game in 5 Seconds",
    "author": "Saizou Harawata / Kashiwa Miyako",
    "category": "Manga",
    "status": "Ongoing",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/battle_game_in_5_seconds.jpg",
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
    "title": "Becoming a Magic School Mage",
    "author": "Gladiator / Studio Lico",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/becoming_a_magic_school_mage.jpg",
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
    "rating": "4.5 / 5.0",
    "coverImage": "/covers/bizarre_restaurant.jpg",
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
    "rating": "4.4 / 5.0",
    "coverImage": "/covers/city_evil_king.jpg",
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
    "title": "Enrolling in the Transcendent Academy",
    "author": "Chungdae",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/enrolling_in_the_transcendent_academy.jpg",
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
    "title": "I Became a Renowned Family's Sword Prodigy",
    "author": "Jigyeong / Redice Studio",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/i_became_a_renowned_familys_sword_prodigy.jpg",
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
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/i_grow_stronger_by_eating.jpg",
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
    "title": "I'll Be Taking a Break for Personal Reasons",
    "author": "Yoo Il-sin",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/ill_be_taking_a_break_for_personal_reasons.jpg",
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
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/im_an_evil_god.jpg",
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
    "title": "Juujika no Rokunin",
    "author": "Shiryu Nakatake",
    "category": "Manga",
    "status": "Ongoing",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/juujika_no_rokunin.jpg",
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
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/karada_sagashi.jpg",
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
    "title": "Legend of Star General",
    "author": "HangMan / FanFan",
    "category": "Manhua",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/legend_of_star_general.jpg",
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
    "title": "Level up with the Gods",
    "author": "Blackajin / Oh Hyun-jun",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/level_up_with_the_gods.jpg",
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
    "title": "Leveling Beyond the Max",
    "author": "Kyung-ho",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/leveling_beyond_the_max.jpg",
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
    "title": "My Wife Came from a Thousand Years Ago",
    "author": "Xiang Tang / Jiu Lu",
    "category": "Manhua",
    "status": "Ongoing",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/my_wife_came_from_a_thousand_years_ago.jpg",
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
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/mythic_item_obtained.jpg",
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
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/necromancer_academys_genius_summoner.jpg",
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
    "title": "Necromancer, the Ultimate Scourge!",
    "author": "Moxian / FanFan",
    "category": "Manhua",
    "status": "Ongoing",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/necromancer_the_ultimate_scourge.jpeg",
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
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/omniscient_readers_viewpoint.jpg",
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
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/pick_me_up_infinite_gacha.jpg",
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
    "title": "Player can't level up",
    "author": "Avis / Redice Studio",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/player_cant_level_up.jpg",
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
    "title": "Redo of Healer Rolls for Vengeance",
    "author": "Rui Tsukiyo",
    "category": "Manga",
    "status": "Ongoing",
    "rating": "4.3 / 5.0",
    "coverImage": "/covers/redo_of_healer_rolls_for_vengeance.jpg",
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
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/regressor_instruction_manual.jpg",
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
    "title": "Reincarnation of the Suicidal Battle God",
    "author": "Blue-Deep",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/reincarnation_of_the_suicidal_battle_god.jpg",
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
    "title": "Reloaded into the Other World",
    "author": "Hye-ju",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.5 / 5.0",
    "coverImage": "/covers/reloaded_into_the_other_world.jpg",
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
    "title": "Return of the Frozen Player",
    "author": "Silvaf / Redice Studio",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/return_of_the_frozen_player.jpg",
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
    "title": "Return of the Shattered Constellation",
    "author": "Sadoyeon / Flex",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/return_of_the_shattered_constellation.jpg",
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
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/second_life_ranker.jpg",
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
    "title": "Shadow slave",
    "author": "Guiltythree",
    "category": "Novel",
    "status": "Reading",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/shadow_slave.jpg",
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
    "title": "So I'm a Cultivation Big Shot",
    "author": "Sike / Yuewen",
    "category": "Manhua",
    "status": "Ongoing",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/so_im_a_cultivation_big_shot.jpg",
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
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/solo_max_level_newbie.jpg",
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
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/spare_me_great_lord.jpg",
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
    "rating": "4.5 / 5.0",
    "coverImage": "/covers/spirit_tamer.jpg",
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
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/swordmasters_youngest_son.jpg",
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
    "title": "The 100th Regression of the Max-Level Player",
    "author": "KingS",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/the_100th_regression_of_the_max_level_player.jpg",
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
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/the_dark_magician_transmigrates_after_66666_years.jpg",
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
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/the_great_mage_returns_after_4000_years.jpg",
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
    "title": "The Naming of the Night",
    "author": "Cuttlefish / Yuewen",
    "category": "Novel",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/the_naming_of_the_night.jpg",
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
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/the_s_ranks_that_i_raised.jpg",
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
    "title": "The Strongest Son-in-Law in History",
    "author": "Silk Road",
    "category": "Manhua",
    "status": "Ongoing",
    "rating": "4.5 / 5.0",
    "coverImage": "/covers/the_strongest_son_in_law_in_history.jpg",
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
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/the_world_after_the_end.jpg",
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
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/tonikaku_kawaii.jpg",
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
    "title": "Tyrant of the Tower Defense Game",
    "author": "Gyul-\ud53c / Haru",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/tyrant_of_the_tower_defense_game.jpg",
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
    "title": "Youngest Scion of the Mages",
    "author": "Mage-K",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/youngest_scion_of_the_mages.jpg",
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
    "title": "academy genius swordmaster",
    "author": "Subin / Lico",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/academy_genius_swordmaster.jpg",
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
    "title": "berserk",
    "author": "Kentaro Miura / Studio Gaga",
    "category": "Manga",
    "status": "Ongoing",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/berserk.jpg",
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
    "title": "boundless ascension",
    "author": "2L",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/boundless_ascension.jpg",
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
    "title": "btooom",
    "author": "Junya Inoue",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/btooom.jpg",
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
    "title": "corpse party",
    "author": "Makoto Kedouin / Toshimi Shinomiya",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.5 / 5.0",
    "coverImage": "/covers/corpse_party.jpg",
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
    "title": "dark gathering",
    "author": "Kenichi Kondo",
    "category": "Manga",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/dark_gathering.jpg",
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
    "title": "dead tube",
    "author": "Mikoto Yamaguchi / Touta Kitakawa",
    "category": "Manga",
    "status": "Ongoing",
    "rating": "4.4 / 5.0",
    "coverImage": "/covers/dead_tube.jpg",
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
    "title": "demonic emperor",
    "author": "Nightingale",
    "category": "Manhua",
    "status": "Ongoing",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/demonic_emperor.jpg",
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
    "title": "devide pet evolution",
    "author": "Fei Fan",
    "category": "Manhua",
    "status": "Ongoing",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/devide_pet_evolution.jpg",
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
    "title": "dice",
    "author": "Yun Hyun-seok",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/dice.jpg",
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
    "title": "fff trash hero",
    "author": "Farnar",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/fff_trash_hero.jpg",
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
    "title": "gokurakugai",
    "author": "Yuto Sano",
    "category": "Manga",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/gokurakugai.jpg",
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
    "title": "henna ie",
    "author": "Uketsu / Kyo Muto",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/henna_ie.jpg",
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
    "title": "hero return",
    "author": "Kim Su-gon",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/hero_return.jpg",
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
    "title": "horimiya",
    "author": "HERO / Daisuke Hagiwara",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/horimiya.jpg",
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
    "title": "hunter x hunter",
    "author": "Yoshihiro Togashi",
    "category": "Manga",
    "status": "Ongoing",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/hunter_x_hunter.jpg",
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
    "title": "infinite mage",
    "author": "Kim Chi-woo / Kirian",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/infinite_mage.jpg",
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
    "title": "jigokuraku",
    "author": "Yuji Kaku",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/jigokuraku.jpg",
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
    "title": "jinrou game",
    "author": "Ryo Kawakami / Kouda 2000",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.5 / 5.0",
    "coverImage": "/covers/jinrou_game.jpg",
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
    "title": "jujutsu kaisen modulo",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/jujutsu_kaisen_modulo.jpg",
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
    "title": "jujutsu kaisen",
    "author": "Gege Akutami",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.9 / 5.0",
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
    "title": "junket bank",
    "author": "Tohru Tanaka",
    "category": "Manga",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/junket_bank.jpg",
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
    "title": "logging 10000 years into the future",
    "author": "Claw Studio",
    "category": "Manhua",
    "status": "Ongoing",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/logging_10000_years_into_the_future.jpg",
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
    "title": "martial god regressed to level 2",
    "author": "Yoon Seok-hyun",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/martial_god_regressed_to_level_2.jpg",
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
    "title": "martial peak",
    "author": "Momo / Pikapi",
    "category": "Manhua",
    "status": "Ongoing",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/martial_peak.jpg",
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
    "title": "overgeared",
    "author": "Park Saenal / Team Argo",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/overgeared.jpg",
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
    "title": "player hide his past",
    "author": "Chungdae",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/player_hide_his_past.jpg",
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
    "title": "plunderer",
    "author": "Suu Minazuki",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/plunderer.jpg",
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
    "title": "pygmalion",
    "author": "Chihiro Watanabe",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.4 / 5.0",
    "coverImage": "/covers/pygmalion.jpg",
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
    "title": "return of the 8th class magician",
    "author": "Ryu Yong / Tess",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/return_of_the_8th_class_magician.jpg",
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
    "title": "return survival",
    "author": "Kim Tae-woong",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/return_survival.jpg",
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
    "title": "shounen no abyss",
    "author": "Ryo Minenami",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/shounen_no_abyss.jpg",
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
    "title": "shuumatsu no valkyrie",
    "author": "Shinya Umemura / Ajichika",
    "category": "Manga",
    "status": "Ongoing",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/shuumatsu_no_valkyrie.jpg",
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
    "title": "solo leveling",
    "author": "Chugong / DUBU (REDICE)",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/solo_leveling.jpg",
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
    "title": "star embracing swordmaster",
    "author": "Q-T",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/star_embracing_swordmaster.jpg",
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
    "title": "sweet home",
    "author": "Carnby Kim / Youngchan Hwang",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/sweet_home.jpg",
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
    "title": "the king of knight return with god",
    "author": "Blue-Deep",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/the_king_of_knight_return_with_god.jpg",
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
    "title": "the novel extra",
    "author": "Jee Gab-Song",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/the_novel_extra.jpg",
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
    "title": "the scared ruins",
    "author": "Chen Dong",
    "category": "Manhua",
    "status": "Ongoing",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/the_scared_ruins.jpg",
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
    "title": "the wererolf game: crazy fox",
    "author": "Ryo Kawakami",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.5 / 5.0",
    "coverImage": "/covers/the_wererolf_game_crazy_fox.jpg",
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
    "title": "time limited genius dark knight",
    "author": "Jung Sun-yul",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/time_limited_genius_dark_knight.jpg",
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
    "title": "tokyo ghoul",
    "author": "Sui Ishida",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/tokyo_ghoul.jpg",
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
    "title": "tokyo underworld",
    "author": "Kousuke Asahi",
    "category": "Manga",
    "status": "Ongoing",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/tokyo_underworld.jpg",
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
    "title": "tomb raider king",
    "author": "Yuns / Redice Studio",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/tomb_raider_king.jpg",
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
    "title": "tomodachi game",
    "author": "Mikoto Yamaguchi / Yuki Sato",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/tomodachi_game.jpg",
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
    "title": "versatile mage",
    "author": "Chaos",
    "category": "Manhua",
    "status": "Ongoing",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/versatile_mage.jpg",
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
    "title": "world's strongest troll",
    "author": "Bung-gae",
    "category": "Manhwa",
    "status": "Ongoing",
    "rating": "4.6 / 5.0",
    "coverImage": "/covers/worlds_strongest_troll.jpg",
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
    "title": "yakushoku distpiari",
    "author": "Togo Subaru / Aguri Igarashi",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.5 / 5.0",
    "coverImage": "/covers/yakushoku_distpiari.jpg",
    "chapters": "25 Ch.",
    "description": "In a dark fantasy kingdom where Sub-Classes exist solely to be sacrificed as EXP fodder, Class-Master Tolza rebels against divine fate.",
    "tags": [
      "Dark Fantasy",
      "Class System",
      "Anti-Hero"
    ]
  }
];
