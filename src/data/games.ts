export interface GameShowcase {
  id: string;
  title: string;
  category: string;
  genre: string;
  status: string;
  coverImage: string;
  description: string;
  tags: string[];
}

export const gameShowcaseList: GameShowcase[] = [
  {
    "id": "g_1",
    "title": "League of Legends",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "MOBA / Competitive",
    "status": "Favorite",
    "coverImage": "/games/league_of_legends.jpg",
    "description": "Strategic 5v5 team battle where champions push lanes, claim objectives, and outplay opponents.",
    "tags": [
      "CO-OP",
      "MOBA"
    ]
  },
  {
    "id": "g_2",
    "title": "Valorant",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Tactical FPS",
    "status": "Played",
    "coverImage": "/games/valorant.jpg",
    "description": "Precision 5v5 character-based tactical shooter combining gunplay with unique agent abilities.",
    "tags": [
      "CO-OP",
      "Tactical FPS"
    ]
  },
  {
    "id": "g_3",
    "title": "CS2",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Tactical FPS",
    "status": "Masterpiece",
    "coverImage": "/games/cs2.jpg",
    "description": "The landmark competitive tactical first-person shooter featuring iconic bomb defousal mode.",
    "tags": [
      "CO-OP",
      "Tactical FPS"
    ]
  },
  {
    "id": "g_4",
    "title": "PUBG: Battlegrounds",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Battle Royale",
    "status": "Favorite",
    "coverImage": "/games/pubg_battlegrounds.jpg",
    "description": "100-player tactical battle royale where players land, loot, and battle to be the last survivor.",
    "tags": [
      "CO-OP",
      "Battle Royale"
    ]
  },
  {
    "id": "g_5",
    "title": "Naraka: Bladepoint",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Action Battle Royale",
    "status": "Played",
    "coverImage": "/games/naraka_bladepoint.jpg",
    "description": "60-player martial arts battle royale featuring grappling hooks, fluid melee combat, and mythical transformations.",
    "tags": [
      "CO-OP",
      "Action Battle Royale"
    ]
  },
  {
    "id": "g_6",
    "title": "Where Winds Meet",
    "category": "ACTION / RPG",
    "genre": "Wuxia Open-World RPG",
    "status": "Masterpiece",
    "coverImage": "/games/where_winds_meet.jpg",
    "description": "Epic open-world Wuxia action RPG set during Ten Kingdoms China featuring martial arts acrobatics.",
    "tags": [
      "ACTION",
      "Wuxia Open-World RPG"
    ]
  },
  {
    "id": "g_7",
    "title": "Elden Ring: Shadow of the Erdtree",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Action RPG",
    "status": "Favorite",
    "coverImage": "/games/elden_ring_shadow_of_the_erdtree.jpg",
    "description": "Massive dark expansion to Elden Ring introducing the Land of Shadow, new weapons, and grueling bosses.",
    "tags": [
      "SOULSLIKE",
      "Action RPG"
    ]
  },
  {
    "id": "g_8",
    "title": "Elden Ring: Nightreign",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Action RPG",
    "status": "Played",
    "coverImage": "/games/elden_ring_nightreign.jpg",
    "description": "Dark fantasy action RPG set in the Lands Between, mastering dodging, parrying, and weapon skills.",
    "tags": [
      "SOULSLIKE",
      "Action RPG"
    ]
  },
  {
    "id": "g_9",
    "title": "Terraria",
    "category": "INDIE / SURVIVAL",
    "genre": "2D Sandbox Survival",
    "status": "Masterpiece",
    "coverImage": "/games/terraria.jpg",
    "description": "2D action-adventure sandbox filled with mining, crafting, boss battles, and infinite building creativity.",
    "tags": [
      "INDIE",
      "2D Sandbox Survival"
    ]
  },
  {
    "id": "g_10",
    "title": "Core Keeper",
    "category": "INDIE / SURVIVAL",
    "genre": "Mining Sandbox RPG",
    "status": "Favorite",
    "coverImage": "/games/core_keeper.jpg",
    "description": "1-8 player mining sandbox adventure exploring an ancient cavern filled with relics, crops, and bosses.",
    "tags": [
      "INDIE",
      "Mining Sandbox RPG"
    ]
  },
  {
    "id": "g_11",
    "title": "It Takes Two",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Co-Op Platformer",
    "status": "Played",
    "coverImage": "/games/it_takes_two.jpg",
    "description": "Co-op platform adventure following Cody and May, featuring inventive co-op mechanics in every chapter.",
    "tags": [
      "CO-OP",
      "Co-Op Platformer"
    ]
  },
  {
    "id": "g_12",
    "title": "Dark Souls III",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Action RPG",
    "status": "Masterpiece",
    "coverImage": "/games/dark_souls_iii.jpg",
    "description": "Dark, atmospheric action RPG featuring intense melee combat, intricate level design, and legendary bosses.",
    "tags": [
      "SOULSLIKE",
      "Action RPG"
    ]
  },
  {
    "id": "g_13",
    "title": "Sekiro: Shadows Die Twice",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Action",
    "status": "Favorite",
    "coverImage": "/games/sekiro_shadows_die_twice.jpg",
    "description": "Precision-focused ninja action game mastering posture balance, deflect timing, and prosthetic tools.",
    "tags": [
      "SOULSLIKE",
      "Action"
    ]
  },
  {
    "id": "g_14",
    "title": "GTA: Vice City",
    "category": "ACTION / RPG",
    "genre": "Open-World Action",
    "status": "Played",
    "coverImage": "/games/gta_vice_city.jpg",
    "description": "Classic 1980s neon open-world action adventure following Tommy Vercetti's rise to criminal kingpin.",
    "tags": [
      "ACTION",
      "Open-World Action"
    ]
  },
  {
    "id": "g_15",
    "title": "Marvel's Spider-Man Remastered",
    "category": "ACTION / RPG",
    "genre": "Open-World Action",
    "status": "Masterpiece",
    "coverImage": "/games/marvels_spider_man_remastered.jpg",
    "description": "Thrilling open-world web-slinging across New York City featuring fluid acrobatic combat.",
    "tags": [
      "ACTION",
      "Open-World Action"
    ]
  },
  {
    "id": "g_16",
    "title": "The Last of Us Part II",
    "category": "ACTION / RPG",
    "genre": "Story Action",
    "status": "Favorite",
    "coverImage": "/games/the_last_of_us_part_ii.jpg",
    "description": "Emotionally charged post-apocalyptic narrative following Ellie's vengeful journey through Seattle.",
    "tags": [
      "ACTION",
      "Story Action"
    ]
  },
  {
    "id": "g_17",
    "title": "Resident Evil Requiem",
    "category": "HORROR / MYSTERY",
    "genre": "Survival Horror",
    "status": "Played",
    "coverImage": "/games/resident_evil_requiem.jpg",
    "description": "Tense survival horror featuring resource management, biohazard puzzles, and horrific creatures.",
    "tags": [
      "HORROR",
      "Survival Horror"
    ]
  },
  {
    "id": "g_18",
    "title": "Overcooked!",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Co-Op Party Cooking",
    "status": "Masterpiece",
    "coverImage": "/games/overcooked.jpg",
    "description": "Chaotic 1-4 player co-op cooking game serving meals under ridiculous kitchen conditions.",
    "tags": [
      "CO-OP",
      "Co-Op Party Cooking"
    ]
  },
  {
    "id": "g_19",
    "title": "Cuphead",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Run & Gun Boss Rush",
    "status": "Favorite",
    "coverImage": "/games/cuphead.jpg",
    "description": "1930s cartoon-style boss rush platformer featuring hand-drawn animation and tough-as-nails battles.",
    "tags": [
      "SOULSLIKE",
      "Run & Gun Boss Rush"
    ]
  },
  {
    "id": "g_20",
    "title": "Bloodborne",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Gothic Action RPG",
    "status": "Played",
    "coverImage": "/games/bloodborne.jpg",
    "description": "Victorian gothic horror action RPG hunting nightmare beasts through the blood-drenched streets of Yharnam.",
    "tags": [
      "SOULSLIKE",
      "Gothic Action RPG"
    ]
  },
  {
    "id": "g_21",
    "title": "Stellar Blade",
    "category": "ACTION / RPG",
    "genre": "Sci-Fi Action RPG",
    "status": "Masterpiece",
    "coverImage": "/games/stellar_blade.jpg",
    "description": "Fast-paced sci-fi combat game following Eve fighting Naytiba monstrosities on a ruined Earth.",
    "tags": [
      "ACTION",
      "Sci-Fi Action RPG"
    ]
  },
  {
    "id": "g_22",
    "title": "Cyberpunk 2077",
    "category": "ACTION / RPG",
    "genre": "Open-World RPG",
    "status": "Favorite",
    "coverImage": "/games/cyberpunk_2077.jpg",
    "description": "Futuristic open-world RPG set in Night City, featuring cyberware upgrades, hacking, and deep narrative choices.",
    "tags": [
      "ACTION",
      "Open-World RPG"
    ]
  },
  {
    "id": "g_23",
    "title": "Palworld",
    "category": "INDIE / SURVIVAL",
    "genre": "Open-World Monster Crafting",
    "status": "Played",
    "coverImage": "/games/palworld.jpg",
    "description": "Open-world survival crafting game where players collect, battle, and automate tasks with creature Pals.",
    "tags": [
      "INDIE",
      "Open-World Monster Crafting"
    ]
  },
  {
    "id": "g_24",
    "title": "Don't Starve Together",
    "category": "INDIE / SURVIVAL",
    "genre": "Co-Op Survival",
    "status": "Masterpiece",
    "coverImage": "/games/dont_starve_together.jpg",
    "description": "Unforgiving wilderness co-op survival game filled with strange creatures, dark magic, and seasonal threats.",
    "tags": [
      "INDIE",
      "Co-Op Survival"
    ]
  },
  {
    "id": "g_25",
    "title": "Minecraft",
    "category": "INDIE / SURVIVAL",
    "genre": "3D Sandbox Survival",
    "status": "Favorite",
    "coverImage": "/games/minecraft.jpg",
    "description": "Iconic voxel sandbox building and survival game exploring infinite procedural worlds.",
    "tags": [
      "INDIE",
      "3D Sandbox Survival"
    ]
  },
  {
    "id": "g_26",
    "title": "God of War Ragnar\u00f6k",
    "category": "ACTION / RPG",
    "genre": "Action Adventure",
    "status": "Played",
    "coverImage": "/games/god_of_war_ragnar\u00f6k.jpg",
    "description": "Epic Norse action adventure following Kratos and Atreus battling gods across Nine Realms.",
    "tags": [
      "ACTION",
      "Action Adventure"
    ]
  },
  {
    "id": "g_27",
    "title": "Marvel's Spider-Man 2",
    "category": "ACTION / RPG",
    "genre": "Open-World Action",
    "status": "Masterpiece",
    "coverImage": "/games/marvels_spider_man_2.jpg",
    "description": "Peter Parker and Miles Morales team up against Venom and Kraven in an expanded New York City.",
    "tags": [
      "ACTION",
      "Open-World Action"
    ]
  },
  {
    "id": "g_28",
    "title": "Marvel's Spider-Man: Miles Morales",
    "category": "ACTION / RPG",
    "genre": "Open-World Action",
    "status": "Favorite",
    "coverImage": "/games/marvels_spider_man_miles_morales.jpg",
    "description": "Miles Morales masters bio-electric venom blasts and camouflage to protect Harlem.",
    "tags": [
      "ACTION",
      "Open-World Action"
    ]
  },
  {
    "id": "g_29",
    "title": "Repo",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Co-Op Horror Heist",
    "status": "Played",
    "coverImage": "/games/repo.jpg",
    "description": "Tense co-op horror heist game repossessing high-value items while evading monstrous entities.",
    "tags": [
      "CO-OP",
      "Co-Op Horror Heist"
    ]
  },
  {
    "id": "g_30",
    "title": "Peak",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Climbing Co-Op",
    "status": "Masterpiece",
    "coverImage": "/games/peak.jpg",
    "description": "Precision co-op climbing game conquering dangerous mountain peaks through teamwork and rope physics.",
    "tags": [
      "CO-OP",
      "Climbing Co-Op"
    ]
  },
  {
    "id": "g_31",
    "title": "Among Us",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Social Deduction",
    "status": "Favorite",
    "coverImage": "/games/among_us.jpg",
    "description": "Multiplayer party game of teamwork and betrayal as crewmates prepare a spaceship while hunting impostors.",
    "tags": [
      "CO-OP",
      "Social Deduction"
    ]
  },
  {
    "id": "g_32",
    "title": "Dispatch",
    "category": "HORROR / MYSTERY",
    "genre": "Psychological Thriller",
    "status": "Played",
    "coverImage": "/games/dispatch.jpg",
    "description": "Tense 911 dispatch operator simulation handling terrifying emergency calls in real time.",
    "tags": [
      "HORROR",
      "Psychological Thriller"
    ]
  },
  {
    "id": "g_33",
    "title": "Hollow Knight",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Metroidvania",
    "status": "Masterpiece",
    "coverImage": "/games/hollow_knight.jpg",
    "description": "Atmospheric 2D action metroidvania exploring the ruined bug kingdom of Hallownest.",
    "tags": [
      "SOULSLIKE",
      "Metroidvania"
    ]
  },
  {
    "id": "g_34",
    "title": "Hollow Knight: Silksong",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Metroidvania",
    "status": "Favorite",
    "coverImage": "/games/hollow_knight_silksong.jpg",
    "description": "Highly anticipated metroidvania sequel following Hornet hunting across a vast haunted kingdom.",
    "tags": [
      "SOULSLIKE",
      "Metroidvania"
    ]
  },
  {
    "id": "g_35",
    "title": "Phasmophobia",
    "category": "HORROR / MYSTERY",
    "genre": "Co-Op Horror",
    "status": "Played",
    "coverImage": "/games/phasmophobia.jpg",
    "description": "4-player co-op psychological horror hunting evidence of paranormal entities using ghost hunting gear.",
    "tags": [
      "HORROR",
      "Co-Op Horror"
    ]
  },
  {
    "id": "g_36",
    "title": "Subnautica",
    "category": "INDIE / SURVIVAL",
    "genre": "Underwater Survival",
    "status": "Masterpiece",
    "coverImage": "/games/subnautica.jpg",
    "description": "Open-world underwater survival adventure crafting submarines and exploring alien ocean depths.",
    "tags": [
      "INDIE",
      "Underwater Survival"
    ]
  },
  {
    "id": "g_37",
    "title": "Subnautica: Below Zero",
    "category": "INDIE / SURVIVAL",
    "genre": "Underwater Survival",
    "status": "Favorite",
    "coverImage": "/games/subnautica_below_zero.jpg",
    "description": "Freezing underwater survival expansion exploring icy sub-zero biomes on planet 4546B.",
    "tags": [
      "INDIE",
      "Underwater Survival"
    ]
  },
  {
    "id": "g_38",
    "title": "Black Myth: Wukong",
    "category": "ACTION / RPG",
    "genre": "Wuxia Action RPG",
    "status": "Played",
    "coverImage": "/games/black_myth_wukong.jpg",
    "description": "Stunning action RPG inspired by Journey to the West, commanding staff transformations and spells.",
    "tags": [
      "ACTION",
      "Wuxia Action RPG"
    ]
  },
  {
    "id": "g_39",
    "title": "Far Cry 6",
    "category": "ACTION / RPG",
    "genre": "Open-World FPS",
    "status": "Masterpiece",
    "coverImage": "/games/far_cry_6.jpg",
    "description": "Tropical guerrilla open-world shooter fighting to overthrow dictator Anton Castillo in Yara.",
    "tags": [
      "ACTION",
      "Open-World FPS"
    ]
  },
  {
    "id": "g_40",
    "title": "Geometry Dash",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Rhythm Platformer",
    "status": "Favorite",
    "coverImage": "/games/geometry_dash.jpg",
    "description": "Rhythm-based platformer jumping, flying, and flipping through geometric obstacle courses.",
    "tags": [
      "SOULSLIKE",
      "Rhythm Platformer"
    ]
  },
  {
    "id": "g_41",
    "title": "Stardew Valley",
    "category": "INDIE / SURVIVAL",
    "genre": "Farming Life Sim",
    "status": "Played",
    "coverImage": "/games/stardew_valley.jpg",
    "description": "Charming farming RPG building an overgrown farm plot into a thriving home with crops and livestock.",
    "tags": [
      "INDIE",
      "Farming Life Sim"
    ]
  },
  {
    "id": "g_42",
    "title": "Harvest Town",
    "category": "INDIE / SURVIVAL",
    "genre": "Pixel Life Sim",
    "status": "Masterpiece",
    "coverImage": "/games/harvest_town.jpg",
    "description": "Pixel-art farming life sim featuring crop cultivation, fishing, exploration, and town relationship building.",
    "tags": [
      "INDIE",
      "Pixel Life Sim"
    ]
  },
  {
    "id": "g_43",
    "title": "Vampire Survivors",
    "category": "INDIE / SURVIVAL",
    "genre": "Rogue-lite Bullet Hell",
    "status": "Favorite",
    "coverImage": "/games/vampire_survivors.jpg",
    "description": "Addictive casual rogue-lite bullet hell mowing down thousands of night creatures with auto-firing weapons.",
    "tags": [
      "INDIE",
      "Rogue-lite Bullet Hell"
    ]
  },
  {
    "id": "g_44",
    "title": "Raft",
    "category": "INDIE / SURVIVAL",
    "genre": "Ocean Survival Crafting",
    "status": "Played",
    "coverImage": "/games/raft.jpg",
    "description": "Ocean survival adventure expanding a wooden raft while fending off hungry sharks.",
    "tags": [
      "INDIE",
      "Ocean Survival Crafting"
    ]
  },
  {
    "id": "g_45",
    "title": "Inside",
    "category": "HORROR / MYSTERY",
    "genre": "Puzzle Platformer",
    "status": "Masterpiece",
    "coverImage": "/games/inside.jpg",
    "description": "Dark, narrative-driven puzzle platformer following a boy drawn into the heart of a sinister project.",
    "tags": [
      "HORROR",
      "Puzzle Platformer"
    ]
  },
  {
    "id": "g_46",
    "title": "Little Nightmares",
    "category": "HORROR / MYSTERY",
    "genre": "Atmospheric Horror",
    "status": "Favorite",
    "coverImage": "/games/little_nightmares.jpg",
    "description": "Dark fairytale puzzle platformer helping Six escape the Maw, a vast vessel inhabited by corrupted souls.",
    "tags": [
      "HORROR",
      "Atmospheric Horror"
    ]
  },
  {
    "id": "g_47",
    "title": "Little Nightmares II",
    "category": "HORROR / MYSTERY",
    "genre": "Atmospheric Horror",
    "status": "Played",
    "coverImage": "/games/little_nightmares_ii.jpg",
    "description": "Tense horror adventure following Mono and Six navigating the distorted Signal Tower.",
    "tags": [
      "HORROR",
      "Atmospheric Horror"
    ]
  },
  {
    "id": "g_48",
    "title": "Little Nightmares III",
    "category": "HORROR / MYSTERY",
    "genre": "Co-Op Horror",
    "status": "Masterpiece",
    "coverImage": "/games/little_nightmares_iii.jpg",
    "description": "Co-op horror adventure helping Low and Alone escape the Nowhere through shadowy puzzle domains.",
    "tags": [
      "HORROR",
      "Co-Op Horror"
    ]
  },
  {
    "id": "g_49",
    "title": "Reanimal",
    "category": "HORROR / MYSTERY",
    "genre": "Co-Op Survival Horror",
    "status": "Favorite",
    "coverImage": "/games/reanimal.jpg",
    "description": "Dark co-op horror adventure following brother and sister rescuing kidnapped friends on a twisted island.",
    "tags": [
      "HORROR",
      "Co-Op Survival Horror"
    ]
  },
  {
    "id": "g_50",
    "title": "Stray",
    "category": "ACTION / RPG",
    "genre": "Cyberpunk Adventure",
    "status": "Played",
    "coverImage": "/games/stray.jpg",
    "description": "Third-person cat adventure exploring neon-lit alleyways of a decaying cybercity inhabited by robots.",
    "tags": [
      "ACTION",
      "Cyberpunk Adventure"
    ]
  },
  {
    "id": "g_51",
    "title": "The Forest",
    "category": "HORROR / MYSTERY",
    "genre": "Survival Horror",
    "status": "Masterpiece",
    "coverImage": "/games/the_forest.jpg",
    "description": "First-person survival horror building shelters and crafting weapons against cannibalistic mutants.",
    "tags": [
      "HORROR",
      "Survival Horror"
    ]
  },
  {
    "id": "g_52",
    "title": "A Way Out",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Co-Op Story Action",
    "status": "Favorite",
    "coverImage": "/games/a_way_out.jpg",
    "description": "Mandatory split-screen co-op adventure escaping prison and surviving on the run as Leo and Vincent.",
    "tags": [
      "CO-OP",
      "Co-Op Story Action"
    ]
  },
  {
    "id": "g_53",
    "title": "Pragmata",
    "category": "ACTION / RPG",
    "genre": "Sci-Fi Action",
    "status": "Played",
    "coverImage": "/games/pragmata.jpg",
    "description": "Dystopian sci-fi action adventure set on a futuristic moon base with suit technology.",
    "tags": [
      "ACTION",
      "Sci-Fi Action"
    ]
  },
  {
    "id": "g_54",
    "title": "Green Hell",
    "category": "INDIE / SURVIVAL",
    "genre": "Amazon Survival",
    "status": "Masterpiece",
    "coverImage": "/games/green_hell.jpg",
    "description": "Brutal Amazonian jungle survival simulation monitoring physical health, infections, and psychological sanity.",
    "tags": [
      "INDIE",
      "Amazon Survival"
    ]
  },
  {
    "id": "g_55",
    "title": "Split Fiction",
    "category": "ACTION / RPG",
    "genre": "Narrative Sci-Fi",
    "status": "Favorite",
    "coverImage": "/games/split_fiction.jpg",
    "description": "Mind-bending narrative sci-fi adventure shifting realities between parallel dimensions.",
    "tags": [
      "ACTION",
      "Narrative Sci-Fi"
    ]
  },
  {
    "id": "g_56",
    "title": "Minecraft Dungeons",
    "category": "ACTION / RPG",
    "genre": "Dungeon Crawler",
    "status": "Played",
    "coverImage": "/games/minecraft_dungeons.jpg",
    "description": "Isometric action dungeon crawler set in the Minecraft universe battling Villager forces.",
    "tags": [
      "ACTION",
      "Dungeon Crawler"
    ]
  },
  {
    "id": "g_57",
    "title": "MiSide",
    "category": "HORROR / MYSTERY",
    "genre": "Psychological Horror",
    "status": "Masterpiece",
    "coverImage": "/games/miside.jpg",
    "description": "Disturbing psychological horror simulation entering a mobile game companion's surreal apartment.",
    "tags": [
      "HORROR",
      "Psychological Horror"
    ]
  },
  {
    "id": "g_58",
    "title": "Streamer Life Simulator",
    "category": "INDIE / SURVIVAL",
    "genre": "Life Simulation",
    "status": "Favorite",
    "coverImage": "/games/streamer_life_simulator.jpg",
    "description": "Comprehensive streamer career sim building PC rigs, broadcasting games, and managing subscriber income.",
    "tags": [
      "INDIE",
      "Life Simulation"
    ]
  },
  {
    "id": "g_59",
    "title": "Hades",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Rogue-lite Action",
    "status": "Played",
    "coverImage": "/games/hades.jpg",
    "description": "God-like rogue-lite hack-and-slash defying the God of the Dead to escape the Underworld.",
    "tags": [
      "SOULSLIKE",
      "Rogue-lite Action"
    ]
  },
  {
    "id": "g_60",
    "title": "Hades II",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Rogue-lite Action",
    "status": "Masterpiece",
    "coverImage": "/games/hades_ii.jpg",
    "description": "Chthonic rogue-lite sequel following Melino\u00eb mastering witch magic to battle Titan Kronos.",
    "tags": [
      "SOULSLIKE",
      "Rogue-lite Action"
    ]
  },
  {
    "id": "g_61",
    "title": "Sifu",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Kung-Fu Action",
    "status": "Favorite",
    "coverImage": "/games/sifu.jpg",
    "description": "Third-person beat-em-up featuring realistic Pak Mei kung-fu combat and a aging magic amulet mechanic.",
    "tags": [
      "SOULSLIKE",
      "Kung-Fu Action"
    ]
  },
  {
    "id": "g_62",
    "title": "Limbo",
    "category": "HORROR / MYSTERY",
    "genre": "Puzzle Platformer",
    "status": "Played",
    "coverImage": "/games/limbo.jpg",
    "description": "Iconic monochrome puzzle platformer navigating a haunting, trap-filled forest to find a lost sister.",
    "tags": [
      "HORROR",
      "Puzzle Platformer"
    ]
  },
  {
    "id": "g_63",
    "title": "Nine Sols",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Taopunk Metroidvania",
    "status": "Masterpiece",
    "coverImage": "/games/nine_sols.jpg",
    "description": "Lore-rich 2D action metroidvania combining Sekiro-inspired deflection with Taopunk fantasy.",
    "tags": [
      "SOULSLIKE",
      "Taopunk Metroidvania"
    ]
  },
  {
    "id": "g_64",
    "title": "Dead Cells",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Rogue-lite Metroidvania",
    "status": "Favorite",
    "coverImage": "/games/dead_cells.jpg",
    "description": "Rogue-lite action platformer combining rogue-like replayability with fast-paced combat.",
    "tags": [
      "SOULSLIKE",
      "Rogue-lite Metroidvania"
    ]
  },
  {
    "id": "g_65",
    "title": "Dave the Diver",
    "category": "INDIE / SURVIVAL",
    "genre": "Casual RPG Sim",
    "status": "Played",
    "coverImage": "/games/dave_the_diver.jpg",
    "description": "Charming hybrid casual RPG exploring the Blue Hole ocean by day and running a sushi restaurant by night.",
    "tags": [
      "INDIE",
      "Casual RPG Sim"
    ]
  },
  {
    "id": "g_66",
    "title": "Grounded",
    "category": "INDIE / SURVIVAL",
    "genre": "Co-Op Backyard Survival",
    "status": "Masterpiece",
    "coverImage": "/games/grounded.jpg",
    "description": "First-person co-op survival game shrunk down to insect size in a suburban backyard.",
    "tags": [
      "INDIE",
      "Co-Op Backyard Survival"
    ]
  },
  {
    "id": "g_67",
    "title": "Grounded 2",
    "category": "INDIE / SURVIVAL",
    "genre": "Co-Op Survival",
    "status": "Favorite",
    "coverImage": "/games/grounded_2.jpg",
    "description": "Expanded backyard co-op survival building fortresses against mutated backyard bugs.",
    "tags": [
      "INDIE",
      "Co-Op Survival"
    ]
  },
  {
    "id": "g_68",
    "title": "Plants vs. Zombies: Garden Warfare",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Third-Person Shooter",
    "status": "Played",
    "coverImage": "/games/plants_vs_zombies_garden_warfare.jpg",
    "description": "Whimsical third-person multiplayer shooter clashing Plants against Zombies in suburban battlegrounds.",
    "tags": [
      "CO-OP",
      "Third-Person Shooter"
    ]
  },
  {
    "id": "g_69",
    "title": "Cult of the Lamb",
    "category": "INDIE / SURVIVAL",
    "genre": "Rogue-lite Base Building",
    "status": "Masterpiece",
    "coverImage": "/games/cult_of_the_lamb.jpg",
    "description": "Charming dark rogue-lite building a loyal woodland cult to destroy false prophets.",
    "tags": [
      "INDIE",
      "Rogue-lite Base Building"
    ]
  },
  {
    "id": "g_70",
    "title": "The Exit 8",
    "category": "HORROR / MYSTERY",
    "genre": "Anomaly Loop Horror",
    "status": "Favorite",
    "coverImage": "/games/the_exit_8.jpg",
    "description": "Short walking simulator searching for anomalies in a infinitely looping Japanese subway station.",
    "tags": [
      "HORROR",
      "Anomaly Loop Horror"
    ]
  },
  {
    "id": "g_71",
    "title": "Internet Cafe Simulator",
    "category": "INDIE / SURVIVAL",
    "genre": "Business Sim",
    "status": "Played",
    "coverImage": "/games/internet_cafe_simulator.jpg",
    "description": "Comprehensive internet cafe management sim building gaming rigs, managing crypto, and satisfying customers.",
    "tags": [
      "INDIE",
      "Business Sim"
    ]
  },
  {
    "id": "g_72",
    "title": "Valheim",
    "category": "INDIE / SURVIVAL",
    "genre": "Viking Survival",
    "status": "Masterpiece",
    "coverImage": "/games/valheim.jpg",
    "description": "1-10 player Viking survival game exploring procedurally generated purgatory biomes and building longhouses.",
    "tags": [
      "INDIE",
      "Viking Survival"
    ]
  },
  {
    "id": "g_73",
    "title": "Pico Park",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Co-Op Action Puzzle",
    "status": "Favorite",
    "coverImage": "/games/pico_park.jpg",
    "description": "Cooperative 2-8 player puzzle action game where every player must work together to clear stages.",
    "tags": [
      "CO-OP",
      "Co-Op Action Puzzle"
    ]
  },
  {
    "id": "g_74",
    "title": "Until Dawn",
    "category": "HORROR / MYSTERY",
    "genre": "Cinematic Horror",
    "status": "Played",
    "coverImage": "/games/until_dawn.jpg",
    "description": "Interactive narrative horror game where eight friends attempt to survive Wendigos on Blackwood Mountain.",
    "tags": [
      "HORROR",
      "Cinematic Horror"
    ]
  },
  {
    "id": "g_75",
    "title": "Escape from Duckov",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Tactical Extraction",
    "status": "Masterpiece",
    "coverImage": "/games/escape_from_duckov.jpg",
    "description": "Tense tactical extraction shooter looting high-value gear and escaping hostile zones.",
    "tags": [
      "CO-OP",
      "Tactical Extraction"
    ]
  },
  {
    "id": "g_76",
    "title": "Fear & Hunger",
    "category": "SOULSLIKE / HARDCORE",
    "genre": "Dark Survival RPG",
    "status": "Favorite",
    "coverImage": "/games/fear_hunger.jpg",
    "description": "Brutal, unforgiving dark fantasy RPG exploring a nightmare dungeon filled with ancient cosmic horrors.",
    "tags": [
      "SOULSLIKE",
      "Dark Survival RPG"
    ]
  },
  {
    "id": "g_77",
    "title": "Astroneer",
    "category": "INDIE / SURVIVAL",
    "genre": "Space Exploration",
    "status": "Played",
    "coverImage": "/games/astroneer.jpg",
    "description": "Interplanetary sandbox adventure terrain-moulding distant planets and building space bases.",
    "tags": [
      "INDIE",
      "Space Exploration"
    ]
  },
  {
    "id": "g_78",
    "title": "Liar's Bar",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Bluffing Party Game",
    "status": "Masterpiece",
    "coverImage": "/games/liars_bar.jpg",
    "description": "First-person multiplayer bluffing game playing cards, calling out lies, and playing Russian roulette.",
    "tags": [
      "CO-OP",
      "Bluffing Party Game"
    ]
  },
  {
    "id": "g_79",
    "title": "60 Seconds!",
    "category": "INDIE / SURVIVAL",
    "genre": "Atomic Survival",
    "status": "Favorite",
    "coverImage": "/games/60_seconds.jpg",
    "description": "Dark comedy atomic survival strategy scavenging supplies in 60 seconds before hunkering in a fallout shelter.",
    "tags": [
      "INDIE",
      "Atomic Survival"
    ]
  },
  {
    "id": "g_80",
    "title": "Devour",
    "category": "HORROR / MYSTERY",
    "genre": "Co-Op Exorcism Horror",
    "status": "Played",
    "coverImage": "/games/devour.jpg",
    "description": "1-4 player co-op survival horror stopping possessed cultists before they drag players to hell.",
    "tags": [
      "HORROR",
      "Co-Op Exorcism Horror"
    ]
  },
  {
    "id": "g_81",
    "title": "Brotato",
    "category": "INDIE / SURVIVAL",
    "genre": "Top-Down Arena Shooter",
    "status": "Masterpiece",
    "coverImage": "/games/brotato.jpg",
    "description": "Top-down arena shooter roguelite playing a potato wielding up to 6 weapons to fight alien swarms.",
    "tags": [
      "INDIE",
      "Top-Down Arena Shooter"
    ]
  },
  {
    "id": "g_82",
    "title": "Doki Doki Literature Club!",
    "category": "HORROR / MYSTERY",
    "genre": "Psychological Horror",
    "status": "Favorite",
    "coverImage": "/games/doki_doki_literature_club.jpg",
    "description": "Acclaimed psychological horror visual novel subverting high school dating sim tropes.",
    "tags": [
      "HORROR",
      "Psychological Horror"
    ]
  },
  {
    "id": "g_83",
    "title": "Unpacking",
    "category": "INDIE / SURVIVAL",
    "genre": "Zen Puzzle Sim",
    "status": "Played",
    "coverImage": "/games/unpacking.jpg",
    "description": "Zen puzzle game pulling possessions out of boxes and fitting them into new living spaces over a lifetime.",
    "tags": [
      "INDIE",
      "Zen Puzzle Sim"
    ]
  },
  {
    "id": "g_84",
    "title": "Melatonin",
    "category": "INDIE / SURVIVAL",
    "genre": "Rhythm Game",
    "status": "Masterpiece",
    "coverImage": "/games/melatonin.jpg",
    "description": "Charming rhythm game exploring the relationship between dreams and reality through pastel beats.",
    "tags": [
      "INDIE",
      "Rhythm Game"
    ]
  },
  {
    "id": "g_85",
    "title": "SUPERHOT",
    "category": "ACTION / RPG",
    "genre": "Time-Move Shooter",
    "status": "Favorite",
    "coverImage": "/games/superhot.jpg",
    "description": "FPS where time moves only when you move, executing bullet-time strategy against red glass enemies.",
    "tags": [
      "ACTION",
      "Time-Move Shooter"
    ]
  },
  {
    "id": "g_86",
    "title": "Pummel Party",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Co-Op Party Game",
    "status": "Played",
    "coverImage": "/games/pummel_party.jpg",
    "description": "4-8 player online party game competing in board game minigames with absurd weaponry.",
    "tags": [
      "CO-OP",
      "Co-Op Party Game"
    ]
  },
  {
    "id": "g_87",
    "title": "Road 96",
    "category": "ACTION / RPG",
    "genre": "Procedural Road Trip",
    "status": "Masterpiece",
    "coverImage": "/games/road_96.jpg",
    "description": "Procedural narrative road-trip adventure escaping a authoritarian country on a hitchhiking journey.",
    "tags": [
      "ACTION",
      "Procedural Road Trip"
    ]
  },
  {
    "id": "g_88",
    "title": "The Escapists 2",
    "category": "INDIE / SURVIVAL",
    "genre": "Prison Escape Strategy",
    "status": "Favorite",
    "coverImage": "/games/the_escapists_2.jpg",
    "description": "Tactical prison escape game crafting tools, adhering to routines, and executing escape plans.",
    "tags": [
      "INDIE",
      "Prison Escape Strategy"
    ]
  },
  {
    "id": "g_89",
    "title": "Forager",
    "category": "INDIE / SURVIVAL",
    "genre": "2D Crafting Adventure",
    "status": "Played",
    "coverImage": "/games/forager.jpg",
    "description": "2D open-world crafting game gathering resources, buying land tiles, and expanding gear networks.",
    "tags": [
      "INDIE",
      "2D Crafting Adventure"
    ]
  },
  {
    "id": "g_90",
    "title": "Mouthwashing",
    "category": "HORROR / MYSTERY",
    "genre": "Psychological Space Horror",
    "status": "Masterpiece",
    "coverImage": "/games/mouthwashing.jpg",
    "description": "First-person retro psychological horror following the stranded crew of a space freighter after a crash.",
    "tags": [
      "HORROR",
      "Psychological Space Horror"
    ]
  },
  {
    "id": "g_91",
    "title": "Graveyard Keeper",
    "category": "INDIE / SURVIVAL",
    "genre": "Cemetery Sim",
    "status": "Favorite",
    "coverImage": "/games/graveyard_keeper.jpg",
    "description": "Inaccurate medieval cemetery management sim building grave sites, handling organs, and expanding businesses.",
    "tags": [
      "INDIE",
      "Cemetery Sim"
    ]
  },
  {
    "id": "g_92",
    "title": "Neon Abyss",
    "category": "INDIE / SURVIVAL",
    "genre": "Rogue-lite Platformer",
    "status": "Played",
    "coverImage": "/games/neon_abyss.jpg",
    "description": "Frantic rogue-lite action platformer blasting through evolving dungeons with stacking item synergies.",
    "tags": [
      "INDIE",
      "Rogue-lite Platformer"
    ]
  },
  {
    "id": "g_93",
    "title": "Neon Abyss 2",
    "category": "INDIE / SURVIVAL",
    "genre": "Rogue-lite Platformer",
    "status": "Masterpiece",
    "coverImage": "/games/neon_abyss_2.jpg",
    "description": "High-octane rogue-lite platformer sequel featuring neon bullet hell guns and expanded dungeons.",
    "tags": [
      "INDIE",
      "Rogue-lite Platformer"
    ]
  },
  {
    "id": "g_94",
    "title": "Bum Simulator",
    "category": "INDIE / SURVIVAL",
    "genre": "Open-World Sandbox",
    "status": "Favorite",
    "coverImage": "/games/bum_simulator.jpg",
    "description": "Comedy sandbox adventure mastering urban homelessness, taming pigeons, and building cardboard empires.",
    "tags": [
      "INDIE",
      "Open-World Sandbox"
    ]
  },
  {
    "id": "g_95",
    "title": "Kindergarten",
    "category": "HORROR / MYSTERY",
    "genre": "Dark Comedy Puzzle",
    "status": "Played",
    "coverImage": "/games/kindergarten.jpg",
    "description": "Abstract puzzle adventure surviving a bizarre elementary school day filled with dark secrets.",
    "tags": [
      "HORROR",
      "Dark Comedy Puzzle"
    ]
  },
  {
    "id": "g_96",
    "title": "Kindergarten II",
    "category": "HORROR / MYSTERY",
    "genre": "Dark Comedy Puzzle",
    "status": "Masterpiece",
    "coverImage": "/games/kindergarten_ii.jpg",
    "description": "Dark comedy puzzle sequel navigating a new school district filled with absurd quests and assassinations.",
    "tags": [
      "HORROR",
      "Dark Comedy Puzzle"
    ]
  },
  {
    "id": "g_97",
    "title": "Kindergarten III",
    "category": "HORROR / MYSTERY",
    "genre": "Dark Comedy Puzzle",
    "status": "Favorite",
    "coverImage": "/games/kindergarten_iii.jpg",
    "description": "The third installment of the dark comedy Kindergarten puzzle saga with new bizarre school quests.",
    "tags": [
      "HORROR",
      "Dark Comedy Puzzle"
    ]
  },
  {
    "id": "g_98",
    "title": "60 Parsecs!",
    "category": "INDIE / SURVIVAL",
    "genre": "Sci-Fi Atomic Survival",
    "status": "Played",
    "coverImage": "/games/60_parsecs.jpg",
    "description": "Atomic space age survival strategy scavenging a space station in 60 seconds and surviving deep space.",
    "tags": [
      "INDIE",
      "Sci-Fi Atomic Survival"
    ]
  },
  {
    "id": "g_99",
    "title": "Tinkerlands",
    "category": "INDIE / SURVIVAL",
    "genre": "2D Survival Crafting",
    "status": "Masterpiece",
    "coverImage": "/games/tinkerlands.jpg",
    "description": "2D action survival crafting game exploring an enchanted island, building settlements, and battling bosses.",
    "tags": [
      "INDIE",
      "2D Survival Crafting"
    ]
  },
  {
    "id": "g_100",
    "title": "UNO",
    "category": "CO-OP / MULTIPLAYER",
    "genre": "Classic Card Game",
    "status": "Favorite",
    "coverImage": "/games/uno.jpg",
    "description": "The iconic digital card matching game featuring custom rules, voice chat, and multiplayer lobbies.",
    "tags": [
      "CO-OP",
      "Classic Card Game"
    ]
  },
  {
    "id": "g_101",
    "title": "Enshrouded",
    "category": "INDIE / SURVIVAL",
    "genre": "Action RPG Survival",
    "status": "Played",
    "coverImage": "/games/enshrouded.jpg",
    "description": "16-player co-op action RPG survival building base castles and exploring a fog-shrouded realm.",
    "tags": [
      "INDIE",
      "Action RPG Survival"
    ]
  },
  {
    "id": "g_102",
    "title": "Homestead",
    "category": "INDIE / SURVIVAL",
    "genre": "Farming & Building Sim",
    "status": "Masterpiece",
    "coverImage": "/games/homestead.jpg",
    "description": "Relaxing homestead farming and crafting sim cultivating land, building cabins, and raising livestock.",
    "tags": [
      "INDIE",
      "Farming & Building Sim"
    ]
  }
];
