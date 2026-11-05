/*
  HALLOWEEN: THE GAME — PERK DATABASE
  ===================================
  This is the only file you need to touch to add or update content.

  Each perk is ONE object — no duplicating it per rarity. The fields are:

    name          - Perk Card name (as shown in-game)
    icon          - optional path to an image, e.g. "icons/adrenaline.png".
                    Leave "" and the card shows a colored monogram instead.
                    This is the SAME icon shown at every level — this site
                    can't pull art out of the game itself, only what you add
                    yourself to the /icons folder.
    description   - plain-language explanation of what the perk does.
                    Written ONCE — it's shown no matter which tier tab is
                    open, so you never need to retype it per rarity.
    percentages   - the perk's effect strength AT EACH LEVEL, as one small
                    table: { common: "5%", rare: "10%", super_rare: "15%",
                    epic: "20%", legendary: "25%" }. Leave any value as ""
                    if you don't know that level's number yet — that tier's
                    card will just say "value not logged yet" until you fill
                    it in. Levels map to rarities as: common = Lv1, rare =
                    Lv2, super_rare = Lv3, epic = Lv4, legendary = Lv5.

  WHAT'S PRE-FILLED
  Every perk's name and description come from the game's own published Perk
  Card list. Percentages are NOT officially published for any level, so
  every percentages value starts blank — fill them in as you confirm them.

  Duplicate this block to add a brand new perk the devs add later:

    {
      name: "New Perk Name",
      icon: "",
      description: "What it does, in plain language.",
      percentages: { common: "", rare: "", super_rare: "", epic: "", legendary: "" },
    },
*/

const perks = [
  {
    name: "Adrenaline",
    icon: "",
    description: "Increases stamina recharge speed.",
    percentages: { common: "", rare: "12%", super_rare: "20%", epic: "", legendary: "30%" },
  },
  {
    name: "Aura of Awareness",
    icon: "",
    description: "Increases the personal radius that prevents Michael from using Shape Jump.",
    percentages: { common: "", rare: "", super_rare: "40%", epic: "50%", legendary: "" },
  },
  {
    name: "Barricade",
    icon: "",
    description: "Makes locked doors more resistant to destruction.",
    percentages: { common: "30%", rare: "", super_rare: "", epic: "", legendary: "" },
  },
  {
    name: "Breakfall",
    icon: "",
    description: "Increases recovery speed after landing.",
    percentages: { common: "5%", rare: "10%", super_rare: "12%", epic: "", legendary: "" },
  },
  {
    name: "Brimstone Fuse",
    icon: "",
    description: "Makes Firecrackers disorient Michael for a longer duration.",
    percentages: { common: "", rare: "", super_rare: "35%", epic: "50%", legendary: "" },
  },
  {
    name: "Brutal Cleave",
    icon: "",
    description: "Increases Heavy Attack melee damage.",
    percentages: { common: "10%", rare: "", super_rare: "20", epic: "", legendary: "35%" },
  },
  {
    name: "Bullet Belt",
    icon: "",
    description: "Increases the amount of ammunition you can carry per stack.",
    percentages: { common: "", rare: "10%", super_rare: "35", epic: "", legendary: "" },
  },
  {
    name: "Clotting",
    icon: "",
    description: "Increases health regeneration speed.",
    percentages: { common: "", rare: "", super_rare: "", epic: "", legendary: "35" },
  },
  {
    name: "Contender",
    icon: "",
    description: "Increases melee damage.",
    percentages: { common: "", rare: "", super_rare: "", epic: "15%", legendary: "20%" },
  },
  {
    name: "Convincing Plea",
    icon: "",
    description: "Reduces the arrival timer for incoming Police waves after filling the Police Badge.",
    percentages: { common: "", rare: "", super_rare: "", epic: "", legendary: "65%" },
  },
  {
    name: "Dead Shot",
    icon: "",
    description: "Increases critical damage with ranged weapons.",
    percentages: { common: "15%", rare: "20%", super_rare: "", epic: "", legendary: "" },
  },
  {
    name: "Deaden",
    icon: "",
    description: "Makes the noise pings you generate less visible.",
    percentages: { common: "20%", rare: "", super_rare: "", epic: "30%", legendary: "" },
  },
  {
    name: "Dying Breath",
    icon: "",
    description: "Increases your chance of escaping Michael's grabs while at low health.",
    percentages: { common: "", rare: "", super_rare: "", epic: "30%", legendary: "" },
  },
  {
    name: "Elusory",
    icon: "",
    description: "Slows the rate at which Michael builds Stalk progress on you.",
    percentages: { common: "10%", rare: "", super_rare: "", epic: "30", legendary: "50" },
  },
  {
    name: "Exit Strategy",
    icon: "",
    description: "Increases the distance from which escape routes can be discovered.",
    percentages: { common: "", rare: "35%", super_rare: "", epic: "", legendary: "" },
  },
  {
    name: "Fade to Black",
    icon: "",
    description: "Causes Stalk tiers to degrade faster while hiding in a hiding spot.",
    percentages: { common: "15%", rare: "", super_rare: "30%", epic: "", legendary: "" },
  },
  {
    name: "Field Triage",
    icon: "",
    description: "Increases the use speed of Healing Spray and Med-Kits.",
    percentages: { common: "10%", rare: "", super_rare: "", epic: "30%", legendary: "" },
  },
  {
    name: "Frantic",
    icon: "",
    description: "Adds more Police presence when you successfully complete a call.",
    percentages: { common: "", rare: "", super_rare: "35%", epic: "", legendary: "" },
  },
  {
    name: "Ghost",
    icon: "",
    description: "Increases the natural Stalk degradation rate.",
    percentages: { common: "", rare: "", super_rare: "20%", epic: "25%", legendary: "" },
  },
  {
    name: "Glass Walker",
    icon: "",
    description: "Reduces damage taken when diving through windows.",
    percentages: { common: "10%", rare: "", super_rare: "20%", epic: "", legendary: "" },
  },
  {
    name: "Grave Footing",
    icon: "",
    description: "Reduces the chance of tripping while exhausted or terrified.",
    percentages: { common: "", rare: "", super_rare: "", epic: "", legendary: "90%" },
  },
  {
    name: "Guardian Shadow",
    icon: "",
    description: "Reduces damage taken by Residents following you.",
    percentages: { common: "", rare: "20%", super_rare: "30%", epic: "", legendary: "" },
  },
  {
    name: "Hardened",
    icon: "",
    description: "Increases resistance to blunt damage.",
    percentages: { common: "10%", rare: "", super_rare: "", epic: "30%", legendary: "" },
  },
  {
    name: "Iron Ankles",
    icon: "",
    description: "Reduces fall damage.",
    percentages: { common: "", rare: "", super_rare: "", epic: "35%", legendary: "50%" },
  },
  {
    name: "Knockout",
    icon: "",
    description: "Makes Michael remain downed longer when you help knock him down.",
    percentages: { common: "", rare: "", super_rare: "20%", epic: "", legendary: "35%" },
  },
  {
    name: "Lethal Pitch",
    icon: "",
    description: "Increases damage dealt by thrown items and weapons.",
    percentages: { common: "", rare: "", super_rare: "20%", epic: "25%", legendary: "" },
  },
  {
    name: "Liquid Courage",
    icon: "",
    description: "Increases melee damage while intoxicated.",
    percentages: { common: "5%", rare: "", super_rare: "", epic: "", legendary: "35%" },
  },
  {
    name: "Panic Contagion",
    icon: "",
    description: "Increases movement speed after successfully helping a Resident escape.",
    percentages: { common: "1.5%", rare: "", super_rare: "2.3%", epic: "2.7%", legendary: "3%" },
  },
  {
    name: "Panic Drive",
    icon: "",
    description: "Reduces damage taken by cars while driving them.",
    percentages: { common: "", rare: "", super_rare: "", epic: "60%", legendary: "" },
  },
  {
    name: "Pied Piper",
    icon: "",
    description: "Increases the number of Residents who can follow you.",
    percentages: { common: "1", rare: "1", super_rare: "1", epic: "1", legendary: "1" },
  },
  {
    name: "Relentless Steel",
    icon: "",
    description: "Increases melee weapon durability.",
    percentages: { common: "10%", rare: "", super_rare: "", epic: "30%", legendary: "40%" },
  },
  {
    name: "Repair Expert",
    icon: "",
    description: "Gives you a chance not to consume a Repair Kit when using it.",
    percentages: { common: "", rare: "", super_rare: "", epic: "35%", legendary: "" },
  },
  {
    name: "Reveler",
    icon: "",
    description: "Increases the duration of intoxication and certain other status effects.",
    percentages: { common: "15%", rare: "", super_rare: "", epic: "75%", legendary: "100%" },
  },
  {
    name: "Scavenger",
    icon: "",
    description: "Increases progress during the hiding spot rummage minigame.",
    percentages: { common: "", rare: "15%", super_rare: "", epic: "30%", legendary: "" },
  },
  {
    name: "Shared Desperation",
    icon: "",
    description: "Makes Residents deal more damage after you give them a weapon.",
    percentages: { common: "15%", rare: "", super_rare: "30%", epic: "", legendary: "" },
  },
  {
    name: "Shield of Law",
    icon: "",
    description: "Reduces Fear gain while within 15 meters of a Police Officer.",
    percentages: { common: "", rare: "", super_rare: "40%", epic: "", legendary: "" },
  },
  {
    name: "Silver Tongue",
    icon: "",
    description: "Gives you more time to achieve a perfect result during conversation minigames.",
    percentages: { common: "15%", rare: "", super_rare: "", epic: "30%", legendary: "" },
  },
  {
    name: "Sixth Sense",
    icon: "",
    description: "Allows you to hear Michael breathing during Shape Jump from a greater distance.",
    percentages: { common: "2m", rare: "3.5m", super_rare: "5m", epic: "", legendary: "" },
  },
  {
    name: "Slippery",
    icon: "",
    description: "Reduces the difficulty of the struggle minigame when Michael grabs you.",
    percentages: { common: "15%", rare: "17%", super_rare: "", epic: "22%", legendary: "25%" },
  },
  {
    name: "Smooth Talker",
    icon: "",
    description: "Increases the perfect zone of the dispatch call skill check.",
    percentages: { common: "10%", rare: "15%", super_rare: "", epic: "30%", legendary: "50%" },
  },
  {
    name: "Solid Foundation",
    icon: "",
    description: "Increases Poise, improving your ability to contribute toward knocking Michael down.",
    percentages: { common: "5%", rare: "10%", super_rare: "20%", epic: "", legendary: "" },
  },
  {
    name: "Stubborn",
    icon: "",
    description: "Increases movement speed while wounded.",
    percentages: { common: "", rare: "", super_rare: "20%", epic: "", legendary: "30%" },
  },
  {
    name: "Survival Intuition",
    icon: "",
    description: "Automatically marks one random escape location on your map.",
    percentages: { common: "1", rare: "1", super_rare: "1", epic: "1", legendary: "1" },
  },
  {
    name: "Survival Rage",
    icon: "",
    description: "When Terrified, melee damage is increased.",
    percentages: { common: "10%", rare: "", super_rare: "20%", epic: "", legendary: "30%" },
  },  
  {
    name: "Thick Skin",
    icon: "",
    description: "Increases resistance to sharp damage.",
    percentages: { common: "10%", rare: "", super_rare: "18%", epic: "", legendary: "28%" },
  },
  {
    name: "Trespasser",
    icon: "",
    description: "Allows you to pick locked doors by holding the interaction button for a set duration.",
    percentages: { common: "", rare: "4.5s", super_rare: "", epic: "", legendary: "" },
  },
  {
    name: "Unphased",
    icon: "",
    description: "Reduces Fear buildup.",
    percentages: { common: "", rare: "20%", super_rare: "", epic: "", legendary: "" },
  },
  {
    name: "Unwinded",
    icon: "",
    description: "Reduces stamina consumption from all actions.",
    percentages: { common: "", rare: "20%", super_rare: "18%", epic: "", legendary: "" },
  },
  {
    name: "Voice of Reason",
    icon: "",
    description: "Reduces Fear gained by Residents following you.",
    percentages: { common: "15%", rare: "", super_rare: "", epic: "60%", legendary: "" },
  },
  {
    name: "Wired",
    icon: "",
    description: "Each Pop you consume permanently reduces incoming Fear for the rest of the match.",
    percentages: { common: "10%", rare: "", super_rare: "", epic: "", legendary: "20%" },
  },
  {
    name: "Witness State",
    icon: "",
    description: "Reveals the outlines of nearby Residents. (m = meters)",
    percentages: { common: "", rare: "", super_rare: "", epic: "", legendary: "50m" },
  },
  {
    name: "Wound Mender",
    icon: "",
    description: "Increases the amount of health restored by healing items.",
    percentages: { common: "", rare: "", super_rare: "20%", epic: "", legendary: "" },
  },
];

/*
  TIER DESCRIPTIONS
  ==================
  Shown under each section heading. These are written as general, editable
  placeholders describing what each tier tends to mean — rewrite them once
  you've confirmed real patterns from your own rolls (e.g. "Epic perks tend
  to add a new mechanic rather than just a bigger number").
*/

const tierDescriptions = {
  common: "The baseline tier. Cheapest to roll and the one you'll see most often — solid, modest effects you'll build most decks around.",
  rare: "A noticeable step up from Common. Same kind of effects, stronger numbers, and a bit harder to pull from a standard roll.",
  super_rare: "Meaningfully harder to roll. Effects here start doing more than just a bigger percentage — some add a secondary benefit on top of the core effect.",
  epic: "High-impact perks. Strong enough to shape how you play a Civilian, and worth spending extra Perk Points on a roll to chase.",
  legendary: "The rarest tier in the game. The strongest version of an effect, or a perk that does something no other tier offers at all.",
};
