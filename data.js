/*
  HALLOWEEN: THE GAME — PERK DATABASE
  ===================================
  This is the only file you need to touch to add or update content.

  Each perk is one object. The fields are:

    name        - Perk Card name (as shown in-game)
    rarity      - one of: "common" | "rare" | "super_rare" | "epic" | "legendary"
    level       - 1 to 5 (matches rarity tier, kept separate in case the game
                  ever splits level from rarity, e.g. upgraded copies)
    percentage  - the perk's effect strength, as a string so you can write
                  "15%", "+2.5s", "1.3x", ranges, etc. Leave "" if unknown.
    description - plain-language explanation of what the perk does

  WHAT'S PRE-FILLED
  The names and base descriptions below come from the game's own published
  Perk Card list (effects confirmed as of the Sep 2026 patch notes / guides).
  The developers have NOT published official rarity tiers or percentages per
  card, so every perk currently defaults to rarity: "common" and an empty
  percentage. As you discover a card's real tier and numbers in-game, just
  edit that one line — the site re-sorts and re-colors itself automatically.

  Duplicate this block to add a brand new perk the devs add later:

    {
      name: "New Perk Name",
      rarity: "epic",
      level: 4,
      percentage: "20%",
      description: "What it does, in plain language.",
    },
*/

const perks = [
  { name: "Adrenaline", rarity: "common", level: 1, percentage: "", description: "Increases stamina recharge speed." },
  { name: "Aura of Awareness", rarity: "common", level: 1, percentage: "", description: "Increases the personal radius that prevents Michael from using Shape Jump." },
  { name: "Barricade", rarity: "common", level: 1, percentage: "", description: "Makes locked doors more resistant to destruction." },
  { name: "Breakfall", rarity: "common", level: 1, percentage: "", description: "Increases recovery speed after landing." },
  { name: "Brimstone Fuse", rarity: "common", level: 1, percentage: "", description: "Makes Firecrackers disorient Michael for a longer duration." },
  { name: "Brutal Cleave", rarity: "common", level: 1, percentage: "", description: "Increases Heavy Attack melee damage." },
  { name: "Bullet Belt", rarity: "common", level: 1, percentage: "", description: "Increases the amount of ammunition you can carry per stack." },
  { name: "Clotting", rarity: "common", level: 1, percentage: "", description: "Increases health regeneration speed." },
  { name: "Contender", rarity: "common", level: 1, percentage: "", description: "Increases melee damage." },
  { name: "Convincing Plea", rarity: "common", level: 1, percentage: "", description: "Reduces the arrival timer for incoming Police waves after filling the Police Badge." },
  { name: "Dead Shot", rarity: "common", level: 1, percentage: "", description: "Increases critical damage with ranged weapons." },
  { name: "Deaden", rarity: "common", level: 1, percentage: "", description: "Makes the noise pings you generate less visible." },
  { name: "Dying Breath", rarity: "common", level: 1, percentage: "", description: "Increases your chance of escaping Michael's grabs while at low health." },
  { name: "Elusory", rarity: "common", level: 1, percentage: "", description: "Slows the rate at which Michael builds Stalk progress on you." },
  { name: "Exit Strategy", rarity: "common", level: 1, percentage: "", description: "Increases the distance from which escape routes can be discovered." },
  { name: "Fade to Black", rarity: "common", level: 1, percentage: "", description: "Causes Stalk tiers to degrade faster while hiding in a hiding spot." },
  { name: "Field Triage", rarity: "common", level: 1, percentage: "", description: "Increases the use speed of Healing Spray and Med-Kits." },
  { name: "Frantic", rarity: "common", level: 1, percentage: "", description: "Adds more Police presence when you successfully complete a call." },
  { name: "Ghost", rarity: "common", level: 1, percentage: "", description: "Increases the natural Stalk degradation rate." },
  { name: "Glass Walker", rarity: "common", level: 1, percentage: "", description: "Reduces damage taken when diving through windows." },
  { name: "Grave Footing", rarity: "common", level: 1, percentage: "", description: "Reduces the chance of tripping while exhausted or terrified." },
  { name: "Guardian Shadow", rarity: "common", level: 1, percentage: "", description: "Reduces damage taken by Residents following you." },
  { name: "Hardened", rarity: "common", level: 1, percentage: "", description: "Increases resistance to blunt damage." },
  { name: "Iron Ankles", rarity: "common", level: 1, percentage: "", description: "Reduces fall damage." },
  { name: "Knockout", rarity: "common", level: 1, percentage: "", description: "Makes Michael remain downed longer when you help knock him down." },
  { name: "Lethal Pitch", rarity: "common", level: 1, percentage: "", description: "Increases damage dealt by thrown items and weapons." },
  { name: "Liquid Courage", rarity: "common", level: 1, percentage: "", description: "Increases melee damage while intoxicated." },
  { name: "Panic Contagion", rarity: "common", level: 1, percentage: "", description: "Increases movement speed after successfully helping a Resident escape." },
  { name: "Panic Driver", rarity: "common", level: 1, percentage: "", description: "Reduces damage taken by cars while driving them." },
  { name: "Pied Piper", rarity: "common", level: 1, percentage: "", description: "Increases the number of Residents who can follow you." },
  { name: "Relentless Steel", rarity: "common", level: 1, percentage: "", description: "Increases melee weapon durability." },
  { name: "Repair Expert", rarity: "common", level: 1, percentage: "", description: "Gives you a chance not to consume a Repair Kit when using it." },
  { name: "Reveler", rarity: "common", level: 1, percentage: "", description: "Increases the duration of intoxication and certain other status effects." },
  { name: "Scavenger", rarity: "common", level: 1, percentage: "", description: "Increases progress during the hiding spot rummage minigame." },
  { name: "Shared Desperation", rarity: "common", level: 1, percentage: "", description: "Makes Residents deal more damage after you give them a weapon." },
  { name: "Shield of Law", rarity: "common", level: 1, percentage: "", description: "Reduces Fear gain while within 15 meters of a Police Officer." },
  { name: "Silver Tongue", rarity: "common", level: 1, percentage: "", description: "Gives you more time to achieve a perfect result during conversation minigames." },
  { name: "Sixth Sense", rarity: "common", level: 1, percentage: "", description: "Allows you to hear Michael breathing during Shape Jump from a greater distance." },
  { name: "Slippery", rarity: "common", level: 1, percentage: "", description: "Reduces the difficulty of the struggle minigame when Michael grabs you." },
  { name: "Smooth Talker", rarity: "common", level: 1, percentage: "", description: "Increases the perfect zone of the dispatch call skill check." },
  { name: "Solid Foundation", rarity: "common", level: 1, percentage: "", description: "Increases Poise, improving your ability to contribute toward knocking Michael down." },
  { name: "Stubborn", rarity: "common", level: 1, percentage: "", description: "Increases movement speed while wounded." },
  { name: "Survival Intuition", rarity: "common", level: 1, percentage: "", description: "Automatically marks one random escape location on your map." },
  { name: "Thick Skin", rarity: "common", level: 1, percentage: "", description: "Increases resistance to sharp damage." },
  { name: "Trespasser", rarity: "common", level: 1, percentage: "", description: "Allows you to pick locked doors by holding the interaction button for a set duration." },
  { name: "Unphased", rarity: "common", level: 1, percentage: "", description: "Reduces Fear buildup." },
  { name: "Unwinded", rarity: "common", level: 1, percentage: "", description: "Reduces stamina consumption from all actions." },
  { name: "Voice of Reason", rarity: "common", level: 1, percentage: "", description: "Reduces Fear gained by Residents following you." },
  { name: "Wired", rarity: "common", level: 1, percentage: "", description: "Each Pop you consume permanently reduces incoming Fear for the rest of the match." },
  { name: "Witness State", rarity: "common", level: 1, percentage: "", description: "Reveals the outlines of nearby Residents." },
  { name: "Wound Mender", rarity: "common", level: 1, percentage: "", description: "Increases the amount of health restored by healing items." },
];
