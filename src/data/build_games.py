import os
import re
import urllib.request
import json

dst_dir = "public/games"
os.makedirs(dst_dir, exist_ok=True)

# Full 102 game titles requested by user
game_list = [
    {"name": "League of Legends", "category": "CO-OP / MULTIPLAYER", "genre": "MOBA / Esports"},
    {"name": "Valorant", "category": "CO-OP / MULTIPLAYER", "genre": "Tactical FPS"},
    {"name": "CS2", "category": "CO-OP / MULTIPLAYER", "genre": "Tactical Shooter"},
    {"name": "PUBG: Battlegrounds", "category": "CO-OP / MULTIPLAYER", "genre": "Battle Royale"},
    {"name": "Naraka: Bladepoint", "category": "CO-OP / MULTIPLAYER", "genre": "Action Battle Royale"},
    {"name": "Where Winds Meet", "category": "ACTION / RPG", "genre": "Wuxia Open-World RPG"},
    {"name": "Elden Ring: Shadow of the Erdtree", "category": "SOULSLIKE / HARDCORE", "genre": "Action RPG / Soulslike"},
    {"name": "Elden Ring: Nightreign", "category": "SOULSLIKE / HARDCORE", "genre": "Action RPG"},
    {"name": "Terraria", "category": "INDIE / SURVIVAL", "genre": "2D Sandbox Survival"},
    {"name": "Core Keeper", "category": "INDIE / SURVIVAL", "genre": "Mining Sandbox RPG"},
    {"name": "It Takes Two", "category": "CO-OP / MULTIPLAYER", "genre": "Co-Op Platformer"},
    {"name": "Dark Souls III", "category": "SOULSLIKE / HARDCORE", "genre": "Action RPG / Soulslike"},
    {"name": "Sekiro: Shadows Die Twice", "category": "SOULSLIKE / HARDCORE", "genre": "Action / Soulslike"},
    {"name": "GTA: Vice City", "category": "ACTION / RPG", "genre": "Open-World Action"},
    {"name": "Marvel's Spider-Man Remastered", "category": "ACTION / RPG", "genre": "Open-World Action"},
    {"name": "The Last of Us Part II", "category": "ACTION / RPG", "genre": "Story Action Adventure"},
    {"name": "Resident Evil Requiem", "category": "HORROR / MYSTERY", "genre": "Survival Horror"},
    {"name": "Overcooked!", "category": "CO-OP / MULTIPLAYER", "genre": "Co-Op Party Cooking"},
    {"name": "Cuphead", "category": "SOULSLIKE / HARDCORE", "genre": "Run and Gun / Boss Rush"},
    {"name": "Bloodborne", "category": "SOULSLIKE / HARDCORE", "genre": "Gothic Action RPG"},
    {"name": "Stellar Blade", "category": "ACTION / RPG", "genre": "Sci-Fi Action RPG"},
    {"name": "Cyberpunk 2077", "category": "ACTION / RPG", "genre": "Open-World RPG"},
    {"name": "Palworld", "category": "INDIE / SURVIVAL", "genre": "Open-World Monster Crafting"},
    {"name": "Don't Starve Together", "category": "INDIE / SURVIVAL", "genre": "Co-Op Survival"},
    {"name": "Minecraft", "category": "INDIE / SURVIVAL", "genre": "Sandbox Survival"},
    {"name": "God of War Ragnarök", "category": "ACTION / RPG", "genre": "Action Adventure"},
    {"name": "Marvel's Spider-Man 2", "category": "ACTION / RPG", "genre": "Open-World Action"},
    {"name": "Marvel's Spider-Man: Miles Morales", "category": "ACTION / RPG", "genre": "Open-World Action"},
    {"name": "Repo", "category": "CO-OP / MULTIPLAYER", "genre": "Co-Op Horror / Heist"},
    {"name": "Peak", "category": "CO-OP / MULTIPLAYER", "genre": "Climbing Co-Op"},
    {"name": "Among Us", "category": "CO-OP / MULTIPLAYER", "genre": "Social Deduction"},
    {"name": "Dispatch", "category": "HORROR / MYSTERY", "genre": "Psychological Thriller"},
    {"name": "Hollow Knight", "category": "SOULSLIKE / HARDCORE", "genre": "Metroidvania"},
    {"name": "Hollow Knight: Silksong", "category": "SOULSLIKE / HARDCORE", "genre": "Metroidvania"},
    {"name": "Phasmophobia", "category": "HORROR / MYSTERY", "genre": "Co-Op Psychological Horror"},
    {"name": "Subnautica", "category": "INDIE / SURVIVAL", "genre": "Underwater Survival"},
    {"name": "Subnautica: Below Zero", "category": "INDIE / SURVIVAL", "genre": "Underwater Survival"},
    {"name": "Black Myth: Wukong", "category": "ACTION / RPG", "genre": "Action RPG / Wuxia"},
    {"name": "Far Cry 6", "category": "ACTION / RPG", "genre": "Open-World FPS"},
    {"name": "Geometry Dash", "category": "SOULSLIKE / HARDCORE", "genre": "Rhythm Platformer"},
    {"name": "Stardew Valley", "category": "INDIE / SURVIVAL", "genre": "Farming Life Sim"},
    {"name": "Harvest Town", "category": "INDIE / SURVIVAL", "genre": "Pixel RPG Sim"},
    {"name": "Vampire Survivors", "category": "INDIE / SURVIVAL", "genre": "Rogue-lite Bullet Hell"},
    {"name": "Raft", "category": "INDIE / SURVIVAL", "genre": "Ocean Survival Crafting"},
    {"name": "Inside", "category": "HORROR / MYSTERY", "genre": "Puzzle Platformer"},
    {"name": "Little Nightmares", "category": "HORROR / MYSTERY", "genre": "Atmospheric Horror"},
    {"name": "Little Nightmares II", "category": "HORROR / MYSTERY", "genre": "Atmospheric Horror"},
    {"name": "Little Nightmares III", "category": "HORROR / MYSTERY", "genre": "Co-Op Horror"},
    {"name": "Reanimal", "category": "HORROR / MYSTERY", "genre": "Co-Op Survival Horror"},
    {"name": "Stray", "category": "ACTION / RPG", "genre": "Cyberpunk Adventure"},
    {"name": "The Forest", "category": "HORROR / MYSTERY", "genre": "Survival Horror"},
    {"name": "A Way Out", "category": "CO-OP / MULTIPLAYER", "genre": "Co-Op Story Action"},
    {"name": "Pragmata", "category": "ACTION / RPG", "genre": "Sci-Fi Action Adventure"},
    {"name": "Green Hell", "category": "INDIE / SURVIVAL", "genre": "Amazon Jungle Survival"},
    {"name": "Split Fiction", "category": "ACTION / RPG", "genre": "Narrative Sci-Fi"},
    {"name": "Minecraft Dungeons", "category": "ACTION / RPG", "genre": "Action Dungeon Crawler"},
    {"name": "MiSide", "category": "HORROR / MYSTERY", "genre": "Psychological Horror Sim"},
    {"name": "Streamer Life Simulator", "category": "INDIE / SURVIVAL", "genre": "Life Simulation"},
    {"name": "Hades", "category": "SOULSLIKE / HARDCORE", "genre": "Rogue-lite Action"},
    {"name": "Hades II", "category": "SOULSLIKE / HARDCORE", "genre": "Rogue-lite Action"},
    {"name": "Sifu", "category": "SOULSLIKE / HARDCORE", "genre": "Kung-Fu Action"},
    {"name": "Limbo", "category": "HORROR / MYSTERY", "genre": "Puzzle Platformer"},
    {"name": "Nine Sols", "category": "SOULSLIKE / HARDCORE", "genre": "Taopunk Metroidvania"},
    {"name": "Dead Cells", "category": "SOULSLIKE / HARDCORE", "genre": "Rogue-lite Metroidvania"},
    {"name": "Dave the Diver", "category": "INDIE / SURVIVAL", "genre": "Casual RPG / Sushi Sim"},
    {"name": "Grounded", "category": "INDIE / SURVIVAL", "genre": "Co-Op Backyard Survival"},
    {"name": "Grounded 2", "category": "INDIE / SURVIVAL", "genre": "Co-Op Survival"},
    {"name": "Plants vs. Zombies: Garden Warfare", "category": "CO-OP / MULTIPLAYER", "genre": "Third-Person Shooter"},
    {"name": "Cult of the Lamb", "category": "INDIE / SURVIVAL", "genre": "Rogue-lite Base Building"},
    {"name": "The Exit 8", "category": "HORROR / MYSTERY", "genre": "Anomaly Horror Loop"},
    {"name": "Internet Cafe Simulator", "category": "INDIE / SURVIVAL", "genre": "Business Management"},
    {"name": "Valheim", "category": "INDIE / SURVIVAL", "genre": "Viking Survival Crafting"},
    {"name": "Pico Park", "category": "CO-OP / MULTIPLAYER", "genre": "Co-Op Action Puzzle"},
    {"name": "Until Dawn", "category": "HORROR / MYSTERY", "genre": "Cinematic Horror"},
    {"name": "Escape from Duckov", "category": "CO-OP / MULTIPLAYER", "genre": "Tactical Extraction"},
    {"name": "Fear & Hunger", "category": "SOULSLIKE / HARDCORE", "genre": "Dark Survival RPG"},
    {"name": "Astroneer", "category": "INDIE / SURVIVAL", "genre": "Space Exploration Sandbox"},
    {"name": "Liar's Bar", "category": "CO-OP / MULTIPLAYER", "genre": "Bluffing Party Game"},
    {"name": "60 Seconds!", "category": "INDIE / SURVIVAL", "genre": "Atomic Survival Strategy"},
    {"name": "Devour", "category": "HORROR / MYSTERY", "genre": "Co-Op Exorcism Horror"},
    {"name": "Brotato", "category": "INDIE / SURVIVAL", "genre": "Top-Down Arena Shooter"},
    {"name": "Doki Doki Literature Club!", "category": "HORROR / MYSTERY", "genre": "Psychological Horror"},
    {"name": "Unpacking", "category": "INDIE / SURVIVAL", "genre": "Zen Puzzle Sim"},
    {"name": "Melatonin", "category": "INDIE / SURVIVAL", "genre": "Rhythm Game"},
    {"name": "SUPERHOT", "category": "ACTION / RPG", "genre": "Time-Move Shooter"},
    {"name": "Pummel Party", "category": "CO-OP / MULTIPLAYER", "genre": "Co-Op Party Board Game"},
    {"name": "Road 96", "category": "ACTION / RPG", "genre": "Procedural Road-Trip Adventure"},
    {"name": "The Escapists 2", "category": "INDIE / SURVIVAL", "genre": "Prison Escape Strategy"},
    {"name": "Forager", "category": "INDIE / SURVIVAL", "genre": "2D Crafting Adventure"},
    {"name": "Mouthwashing", "category": "HORROR / MYSTERY", "genre": "Psychological Space Horror"},
    {"name": "Graveyard Keeper", "category": "INDIE / SURVIVAL", "genre": "Inaccurate Cemetery Sim"},
    {"name": "Neon Abyss", "category": "INDIE / SURVIVAL", "genre": "Rogue-lite Platformer"},
    {"name": "Neon Abyss 2", "category": "INDIE / SURVIVAL", "genre": "Rogue-lite Platformer"},
    {"name": "Bum Simulator", "category": "INDIE / SURVIVAL", "genre": "Open-World Sandbox Comedy"},
    {"name": "Kindergarten", "category": "HORROR / MYSTERY", "genre": "Dark Comedy Puzzle"},
    {"name": "Kindergarten II", "category": "HORROR / MYSTERY", "genre": "Dark Comedy Puzzle"},
    {"name": "Kindergarten III", "category": "HORROR / MYSTERY", "genre": "Dark Comedy Puzzle"},
    {"name": "60 Parsecs!", "category": "INDIE / SURVIVAL", "genre": "Sci-Fi Atomic Survival"},
    {"name": "Tinkerlands", "category": "INDIE / SURVIVAL", "genre": "2D Survival Crafting"},
    {"name": "UNO", "category": "CO-OP / MULTIPLAYER", "genre": "Classic Card Game"},
    {"name": "Enshrouded", "category": "INDIE / SURVIVAL", "genre": "Action RPG Survival"},
    {"name": "Homestead", "category": "INDIE / SURVIVAL", "genre": "Farming & Building Sim"}
]

# Image URL generator map or search engine helper
cover_urls = {
    "League of Legends": "https://cdn1.epicgames.com/offer/24b9b5e323bc40eeaab6894c7702a0c4/EGS_LeagueofLegends_RiotGames_S2_1200x1600-7b84944d51688ab895e381014167e411",
    "Valorant": "https://cdn1.epicgames.com/offer/cbd5b02664ea4ca2997640c3cb223b8e/EGS_VALORANT_RiotGames_S2_1200x1600-b6016e6d1b248a3359d95cf287efebae",
    "CS2": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
    "PUBG: Battlegrounds": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
    "Naraka: Bladepoint": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/699130/header.jpg",
    "Elden Ring: Shadow of the Erdtree": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2778580/header.jpg",
    "Elden Ring: Nightreign": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
    "Terraria": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
    "Core Keeper": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1621690/header.jpg",
    "It Takes Two": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
    "Dark Souls III": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg",
    "Sekiro: Shadows Die Twice": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
    "Cyberpunk 2077": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
    "Palworld": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg",
    "Don't Starve Together": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/322330/header.jpg",
    "Minecraft": "https://cdn1.epicgames.com/offer/9773aa1dd43142e9a7e0ed3d0a20f9c7/EGS_MinecraftJavaBedrockEdition_MojangStudios_S2_1200x1600-4b2072124501a3cfb5e7d23d8c11e749",
    "Black Myth: Wukong": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg",
    "Hollow Knight": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
    "Phasmophobia": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg",
    "Subnautica": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg",
    "Stardew Valley": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
    "Vampire Survivors": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1794680/header.jpg",
    "Raft": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/648800/header.jpg",
    "Stray": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1183840/header.jpg",
    "The Forest": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg",
    "Hades": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
    "Hades II": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145350/header.jpg",
    "Dead Cells": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg",
    "Dave the Diver": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1868140/header.jpg",
    "Valheim": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/header.jpg",
    "Cult of the Lamb": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1313140/header.jpg",
    "Doki Doki Literature Club!": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1388880/header.jpg",
    "Enshrouded": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1203620/header.jpg"
}

def clean_filename(name):
    clean = re.sub(r"[^\w\s-]", "", name).strip().lower()
    clean = re.sub(r"[-\s]+", "_", clean)
    return clean + ".jpg"

processed_games = []

for idx, item in enumerate(game_list):
    name = item["name"]
    clean_name = clean_filename(name)
    dst_path = os.path.join(dst_dir, clean_name)
    
    # Generate fallback/placeholder cover SVG or download
    img_url = cover_urls.get(name, f"https://images.placeholders.dev/?width=600&height=800&text={urllib.parse.quote(name)}&bgColor=%23181818&textColor=%23ffffff")

    processed_games.append({
        "id": f"g_{idx+1}",
        "title": name,
        "category": item["category"],
        "genre": item["genre"],
        "status": "Played" if idx % 2 == 0 else "Favorite",
        "coverImage": f"/games/{clean_name}",
        "externalUrl": img_url,
        "description": f"Featured gaming showcase: {name}. Outstanding gameplay mechanics and immersive experience in {item['genre']}."
    })

ts_content = f"""export interface GameShowcase {{
  id: string;
  title: string;
  category: string;
  genre: string;
  status: string;
  coverImage: string;
  externalUrl?: string;
  description: string;
}}

export const gameShowcaseList: GameShowcase[] = {json.dumps(processed_games, indent=2)};
"""

with open("src/data/games.ts", "w") as out:
    out.write(ts_content)

print(f"Successfully generated metadata for all {len(processed_games)} games!")
