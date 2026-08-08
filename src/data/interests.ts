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
    "id": "b_1",
    "title": "A Returner's Magic Should Be Special",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/a_returners_magic_should_be_special.jpg",
    "chapters": "Ch. 50",
    "description": "A Returner's Magic Should Be Special \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_2",
    "title": "Above Ten Thousand People",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/above_ten_thousand_people.jpg",
    "chapters": "Ch. 63",
    "description": "Above Ten Thousand People \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_3",
    "title": "Archmage Transcending Through Regression",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/archmage_transcending_through_regression.jpg",
    "chapters": "Ch. 76",
    "description": "Archmage Transcending Through Regression \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_4",
    "title": "Astral Pet Store",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/astral_pet_store.jpg",
    "chapters": "Ch. 89",
    "description": "Astral Pet Store \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_5",
    "title": "Battle Game in 5 Seconds",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/battle_game_in_5_seconds.jpg",
    "chapters": "Ch. 102",
    "description": "Battle Game in 5 Seconds \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_6",
    "title": "Becoming a Magic School Mage",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/becoming_a_magic_school_mage.jpg",
    "chapters": "Ch. 115",
    "description": "Becoming a Magic School Mage \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_7",
    "title": "Bizarre Restaurant",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/bizarre_restaurant.jpg",
    "chapters": "Ch. 128",
    "description": "Bizarre Restaurant \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_8",
    "title": "Enrolling in the Transcendent Academy",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/enrolling_in_the_transcendent_academy.jpg",
    "chapters": "Ch. 141",
    "description": "Enrolling in the Transcendent Academy \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_9",
    "title": "I Became a Renowned Family's Sword Prodigy",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/i_became_a_renowned_familys_sword_prodigy.jpg",
    "chapters": "Ch. 154",
    "description": "I Became a Renowned Family's Sword Prodigy \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_10",
    "title": "I'll Be Taking a Break for Personal Reasons",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/ill_be_taking_a_break_for_personal_reasons.jpg",
    "chapters": "Ch. 167",
    "description": "I'll Be Taking a Break for Personal Reasons \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_11",
    "title": "I'm An Evil God",
    "author": "Featured Creator",
    "category": "Manhua",
    "status": "Reading",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/im_an_evil_god.jpg",
    "chapters": "Ch. 180",
    "description": "I'm An Evil God \u2014 Highly recommended reading choice in Manhua.",
    "tags": [
      "Manhua",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_12",
    "title": "Juujika no Rokunin",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Highly Recommended",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/juujika_no_rokunin.jpg",
    "chapters": "Ch. 193",
    "description": "Juujika no Rokunin \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_13",
    "title": "Karada Sagashi",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/karada_sagashi.jpg",
    "chapters": "Ch. 206",
    "description": "Karada Sagashi \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_14",
    "title": "Legend of Star General",
    "author": "Featured Creator",
    "category": "Manhua",
    "status": "Reading",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/legend_of_star_general.jpg",
    "chapters": "Ch. 219",
    "description": "Legend of Star General \u2014 Highly recommended reading choice in Manhua.",
    "tags": [
      "Manhua",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_15",
    "title": "Level up with the Gods",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/level_up_with_the_gods.jpg",
    "chapters": "Ch. 232",
    "description": "Level up with the Gods \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_16",
    "title": "Leveling Beyond the Max",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/leveling_beyond_the_max.jpg",
    "chapters": "Ch. 245",
    "description": "Leveling Beyond the Max \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_17",
    "title": "My Wife Came from a Thousand Years Ago",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/my_wife_came_from_a_thousand_years_ago.jpg",
    "chapters": "Ch. 258",
    "description": "My Wife Came from a Thousand Years Ago \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_18",
    "title": "Mythic_Item_Obtained",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/mythic_item_obtained.jpg",
    "chapters": "Ch. 271",
    "description": "Mythic_Item_Obtained \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_19",
    "title": "Necromancer Academy's Genius Summoner",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/necromancer_academys_genius_summoner.jpg",
    "chapters": "Ch. 284",
    "description": "Necromancer Academy's Genius Summoner \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_20",
    "title": "Necromancer, the Ultimate Scourge!",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/necromancer_the_ultimate_scourge.jpeg",
    "chapters": "Ch. 297",
    "description": "Necromancer, the Ultimate Scourge! \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_21",
    "title": "Omniscient Reader's Viewpoint",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/omniscient_readers_viewpoint.jpg",
    "chapters": "Ch. 310",
    "description": "Omniscient Reader's Viewpoint \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_22",
    "title": "Pick Me Up Infinite Gacha",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/pick_me_up_infinite_gacha.jpg",
    "chapters": "Ch. 323",
    "description": "Pick Me Up Infinite Gacha \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_23",
    "title": "Player can't level up",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/player_cant_level_up.jpg",
    "chapters": "Ch. 336",
    "description": "Player can't level up \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_24",
    "title": "Regressor Instruction Manual",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/regressor_instruction_manual.jpg",
    "chapters": "Ch. 349",
    "description": "Regressor Instruction Manual \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_25",
    "title": "Reloaded into the Other World",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/reloaded_into_the_other_world.jpg",
    "chapters": "Ch. 362",
    "description": "Reloaded into the Other World \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_26",
    "title": "Return of the Frozen Player",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/return_of_the_frozen_player.jpg",
    "chapters": "Ch. 375",
    "description": "Return of the Frozen Player \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_27",
    "title": "Second Life Ranker",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/second_life_ranker.jpg",
    "chapters": "Ch. 388",
    "description": "Second Life Ranker \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_28",
    "title": "Shadow slave",
    "author": "Featured Creator",
    "category": "Novel",
    "status": "Completed",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/shadow_slave.jpg",
    "chapters": "Ch. 401",
    "description": "Shadow slave \u2014 Highly recommended reading choice in Novel.",
    "tags": [
      "Novel",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_29",
    "title": "So I'm a Cultivation Big Shot",
    "author": "Featured Creator",
    "category": "Novel",
    "status": "Reading",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/so_im_a_cultivation_big_shot.jpg",
    "chapters": "Ch. 414",
    "description": "So I'm a Cultivation Big Shot \u2014 Highly recommended reading choice in Novel.",
    "tags": [
      "Novel",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_30",
    "title": "Solo Max Level Newbie",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/solo_max_level_newbie.jpg",
    "chapters": "Ch. 427",
    "description": "Solo Max Level Newbie \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_31",
    "title": "Spare Me, Great Lord!",
    "author": "Featured Creator",
    "category": "Manhua",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/spare_me_great_lord.jpg",
    "chapters": "Ch. 440",
    "description": "Spare Me, Great Lord! \u2014 Highly recommended reading choice in Manhua.",
    "tags": [
      "Manhua",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_32",
    "title": "Spirit Tamer",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/spirit_tamer.jpg",
    "chapters": "Ch. 453",
    "description": "Spirit Tamer \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_33",
    "title": "Swordmaster's Youngest Son",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/swordmasters_youngest_son.jpg",
    "chapters": "Ch. 466",
    "description": "Swordmaster's Youngest Son \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_34",
    "title": "The 100th Regression of the Max-Level Player",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/the_100th_regression_of_the_max_level_player.jpg",
    "chapters": "Ch. 479",
    "description": "The 100th Regression of the Max-Level Player \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_35",
    "title": "The Dark Magician Transmigrates After 66666 Years",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/the_dark_magician_transmigrates_after_66666_years.jpg",
    "chapters": "Ch. 492",
    "description": "The Dark Magician Transmigrates After 66666 Years \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_36",
    "title": "The Great Mage Returns After 4000 Years",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/the_great_mage_returns_after_4000_years.jpg",
    "chapters": "Ch. 505",
    "description": "The Great Mage Returns After 4000 Years \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_37",
    "title": "The Naming of the Night",
    "author": "Featured Creator",
    "category": "Novel",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/the_naming_of_the_night.jpg",
    "chapters": "Ch. 518",
    "description": "The Naming of the Night \u2014 Highly recommended reading choice in Novel.",
    "tags": [
      "Novel",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_38",
    "title": "The S-Ranks That I Raised",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/the_s_ranks_that_i_raised.jpg",
    "chapters": "Ch. 531",
    "description": "The S-Ranks That I Raised \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_39",
    "title": "The Strongest Son-in-Law in History",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/the_strongest_son_in_law_in_history.jpg",
    "chapters": "Ch. 544",
    "description": "The Strongest Son-in-Law in History \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_40",
    "title": "The World After The End",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/the_world_after_the_end.jpg",
    "chapters": "Ch. 57",
    "description": "The World After The End \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_41",
    "title": "Tonikaku Kawaii",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Reading",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/tonikaku_kawaii.jpg",
    "chapters": "Ch. 70",
    "description": "Tonikaku Kawaii \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_42",
    "title": "Tyrant of the Tower Defense Game",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/tyrant_of_the_tower_defense_game.jpg",
    "chapters": "Ch. 83",
    "description": "Tyrant of the Tower Defense Game \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_43",
    "title": "Youngest Scion of the Mages",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/youngest_scion_of_the_mages.jpg",
    "chapters": "Ch. 96",
    "description": "Youngest Scion of the Mages \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_44",
    "title": "academy genius swordmaster",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/academy_genius_swordmaster.jpg",
    "chapters": "Ch. 109",
    "description": "academy genius swordmaster \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_45",
    "title": "berserk",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Highly Recommended",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/berserk.jpg",
    "chapters": "Ch. 122",
    "description": "berserk \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_46",
    "title": "btooom",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/btooom.jpg",
    "chapters": "Ch. 135",
    "description": "btooom \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_47",
    "title": "corpse party",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Reading",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/corpse_party.jpg",
    "chapters": "Ch. 148",
    "description": "corpse party \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_48",
    "title": "dark gathering",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Highly Recommended",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/dark_gathering.jpg",
    "chapters": "Ch. 161",
    "description": "dark gathering \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_49",
    "title": "dead tube",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/dead_tube.jpg",
    "chapters": "Ch. 174",
    "description": "dead tube \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_50",
    "title": "demonic emperor",
    "author": "Featured Creator",
    "category": "Manhua",
    "status": "Reading",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/demonic_emperor.jpg",
    "chapters": "Ch. 187",
    "description": "demonic emperor \u2014 Highly recommended reading choice in Manhua.",
    "tags": [
      "Manhua",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_51",
    "title": "devide pet evolution",
    "author": "Featured Creator",
    "category": "Manhua",
    "status": "Highly Recommended",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/devide_pet_evolution.jpg",
    "chapters": "Ch. 200",
    "description": "devide pet evolution \u2014 Highly recommended reading choice in Manhua.",
    "tags": [
      "Manhua",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_52",
    "title": "dice",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/dice.jpg",
    "chapters": "Ch. 213",
    "description": "dice \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_53",
    "title": "gokurakugai",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Reading",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/gokurakugai.jpg",
    "chapters": "Ch. 226",
    "description": "gokurakugai \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_54",
    "title": "henna ie",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Highly Recommended",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/henna_ie.jpg",
    "chapters": "Ch. 239",
    "description": "henna ie \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_55",
    "title": "hero return",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/hero_return.jpg",
    "chapters": "Ch. 252",
    "description": "hero return \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_56",
    "title": "horimiya",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Reading",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/horimiya.jpg",
    "chapters": "Ch. 265",
    "description": "horimiya \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_57",
    "title": "hunter x hunter",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Highly Recommended",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/hunter_x_hunter.jpg",
    "chapters": "Ch. 278",
    "description": "hunter x hunter \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_58",
    "title": "infinite mage",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/infinite_mage.jpg",
    "chapters": "Ch. 291",
    "description": "infinite mage \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_59",
    "title": "jigokuraku",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/jigokuraku.jpg",
    "chapters": "Ch. 304",
    "description": "jigokuraku \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_60",
    "title": "jinrou game",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Highly Recommended",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/jinrou_game.jpg",
    "chapters": "Ch. 317",
    "description": "jinrou game \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_61",
    "title": "jujutsu kaisen modulo",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/jujutsu_kaisen_modulo.jpg",
    "chapters": "Ch. 330",
    "description": "jujutsu kaisen modulo \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_62",
    "title": "jujutsu kaisen",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Reading",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/jujutsu_kaisen.jpg",
    "chapters": "Ch. 343",
    "description": "jujutsu kaisen \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_63",
    "title": "junket bank",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/junket_bank.jpg",
    "chapters": "Ch. 356",
    "description": "junket bank \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_64",
    "title": "logging 10000 years into the future",
    "author": "Featured Creator",
    "category": "Manhua",
    "status": "Completed",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/logging_10000_years_into_the_future.jpg",
    "chapters": "Ch. 369",
    "description": "logging 10000 years into the future \u2014 Highly recommended reading choice in Manhua.",
    "tags": [
      "Manhua",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_65",
    "title": "martial god regressed to level 2",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/martial_god_regressed_to_level_2.jpg",
    "chapters": "Ch. 382",
    "description": "martial god regressed to level 2 \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_66",
    "title": "martial peak",
    "author": "Featured Creator",
    "category": "Manhua",
    "status": "Highly Recommended",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/martial_peak.jpg",
    "chapters": "Ch. 395",
    "description": "martial peak \u2014 Highly recommended reading choice in Manhua.",
    "tags": [
      "Manhua",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_67",
    "title": "player hide his past",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/player_hide_his_past.jpg",
    "chapters": "Ch. 408",
    "description": "player hide his past \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_68",
    "title": "pygmalion",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Reading",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/pygmalion.jpg",
    "chapters": "Ch. 421",
    "description": "pygmalion \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_69",
    "title": "return of the 8th class magician",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/return_of_the_8th_class_magician.jpg",
    "chapters": "Ch. 434",
    "description": "return of the 8th class magician \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_70",
    "title": "return survival",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/return_survival.jpg",
    "chapters": "Ch. 447",
    "description": "return survival \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_71",
    "title": "shounen no abyss",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/shounen_no_abyss.jpg",
    "chapters": "Ch. 460",
    "description": "shounen no abyss \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_72",
    "title": "shuumatsu no valkyrie",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Highly Recommended",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/shuumatsu_no_valkyrie.jpg",
    "chapters": "Ch. 473",
    "description": "shuumatsu no valkyrie \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_73",
    "title": "solo leveling",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/solo_leveling.jpg",
    "chapters": "Ch. 486",
    "description": "solo leveling \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_74",
    "title": "star embracing swordmaster",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/star_embracing_swordmaster.jpg",
    "chapters": "Ch. 499",
    "description": "star embracing swordmaster \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_75",
    "title": "sweet home",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/sweet_home.jpg",
    "chapters": "Ch. 512",
    "description": "sweet home \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_76",
    "title": "the novel extra",
    "author": "Featured Creator",
    "category": "Novel",
    "status": "Completed",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/the_novel_extra.jpg",
    "chapters": "Ch. 525",
    "description": "the novel extra \u2014 Highly recommended reading choice in Novel.",
    "tags": [
      "Novel",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_77",
    "title": "the scared ruins",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/the_scared_ruins.jpg",
    "chapters": "Ch. 538",
    "description": "the scared ruins \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_78",
    "title": "the wererolf game: crazy fox",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/the_wererolf_game_crazy_fox.jpg",
    "chapters": "Ch. 51",
    "description": "the wererolf game: crazy fox \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_79",
    "title": "time limited genius dark knight",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/time_limited_genius_dark_knight.jpg",
    "chapters": "Ch. 64",
    "description": "time limited genius dark knight \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_80",
    "title": "tokyo ghoul",
    "author": "Featured Creator",
    "category": "Manga",
    "status": "Reading",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/tokyo_ghoul.jpg",
    "chapters": "Ch. 77",
    "description": "tokyo ghoul \u2014 Highly recommended reading choice in Manga.",
    "tags": [
      "Manga",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_81",
    "title": "tokyo underworld",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Highly Recommended",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/tokyo_underworld.jpg",
    "chapters": "Ch. 90",
    "description": "tokyo underworld \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_82",
    "title": "tomb raider king",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/tomb_raider_king.jpg",
    "chapters": "Ch. 103",
    "description": "tomb raider king \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_83",
    "title": "tomodachi game",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.9 / 5.0",
    "coverImage": "/covers/tomodachi_game.jpg",
    "chapters": "Ch. 116",
    "description": "tomodachi game \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_84",
    "title": "versatile mage",
    "author": "Featured Creator",
    "category": "Manhua",
    "status": "Highly Recommended",
    "rating": "5.0 / 5.0",
    "coverImage": "/covers/versatile_mage.jpg",
    "chapters": "Ch. 129",
    "description": "versatile mage \u2014 Highly recommended reading choice in Manhua.",
    "tags": [
      "Manhua",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_85",
    "title": "world's strongest troll",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Completed",
    "rating": "4.7 / 5.0",
    "coverImage": "/covers/worlds_strongest_troll.jpg",
    "chapters": "Ch. 142",
    "description": "world's strongest troll \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  },
  {
    "id": "b_86",
    "title": "yakushoku distpiari",
    "author": "Featured Creator",
    "category": "Manhwa",
    "status": "Reading",
    "rating": "4.8 / 5.0",
    "coverImage": "/covers/yakushoku_distpiari.jpg",
    "chapters": "Ch. 155",
    "description": "yakushoku distpiari \u2014 Highly recommended reading choice in Manhwa.",
    "tags": [
      "Manhwa",
      "Action",
      "Supernatural"
    ]
  }
];
