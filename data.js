/*
  HALLOWEEN: THE GAME — PERK DATABASE
  ===================================
  This is the only file you need to touch to add or update content.

  Each perk is ONE object — no duplicating it per rarity. The fields are:

    name          - Perk Card name (as shown in-game)
    icons         - OPTIONAL overrides. Leave as {} and the site finds the
                    image itself — no editing needed. For a perk card image
                    to show up automatically, name the file:

                        NAME_IN_CAPS_WITH_UNDERSCORES_ROMANNUMERAL.png

                    placed in the /icons folder. Roman numeral matches the
                    level: I = Common, II = Rare, III = Super Rare,
                    IV = Epic, V = Legendary. Example: "Pied Piper" at Epic
                    (IV) is expected at icons/PIED_PIPER_IV.png.
                    If a filename can't follow that pattern (a typo you'd
                    rather not rename, a weird name), override it here:
                      icons: { epic: "icons/my-weird-filename.png" }
                    Only the levels you override need a key — everything
                    else still falls back to the auto-generated name.
                    No image found at either path? The card shows a colored
                    monogram instead, never a broken-image icon.
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

  SEARCH = COMPARE MODE
  Typing in the search box switches the page from "one tier at a time" to a
  side-by-side row of all 5 levels for every matching perk — so searching
  "Adrenaline" shows its Common through Legendary cards in one line, for a
  direct comparison. Clear the search to go back to normal tab browsing.

  Duplicate this block to add a brand new perk the devs add later:

    {
      name: "New Perk Name",
      icons: {},
      description: "What it does, in plain language.",
      percentages: { common: "", rare: "", super_rare: "", epic: "", legendary: "" },
    },
*/

const perks = [
  {
    name: "Adrenaline",
    icons: {},
    description: "Increases stamina recharge speed.",
    percentages: { common: "8%", rare: "12%", super_rare: "20%", epic: "", legendary: "30%" },
  },
  {
    name: "Aura of Awareness",
    icons: {},
    description: "Increases the personal radius that prevents Michael from using Shape Jump.",
    percentages: { common: "15%", rare: "25%", super_rare: "40%", epic: "50%", legendary: "" },
  },
  {
    name: "Barricade",
    icons: {},
    description: "Makes locked doors more resistant to destruction.",
    percentages: { common: "30%", rare: "40%", super_rare: "", epic: "60%", legendary: "" },
  },
  {
    name: "Breakfall",
    icons: {},
    description: "Increases recovery speed after landing.",
    percentages: { common: "5%", rare: "10%", super_rare: "12%", epic: "17%", legendary: "" },
  },
  {
    name: "Brimstone Fuse",
    icons: {},
    description: "Makes Firecrackers disorient Michael for a longer duration.",
    percentages: { common: "", rare: "20%", super_rare: "35%", epic: "50%", legendary: "" },
  },
  {
    name: "Brutal Cleave",
    icons: {},
    description: "Increases Heavy Attack melee damage.",
    percentages: { common: "10%", rare: "15%", super_rare: "20%", epic: "", legendary: "35%" },
  },
  {
    name: "Bullet Belt",
    icons: {},
    description: "Increases the amount of ammunition you can carry per stack.",
    percentages: { common: "10%", rare: "20%", super_rare: "35%", epic: "", legendary: "" },
  },
  {
    name: "Clotting",
    icons: {},
    description: "Increases health regeneration speed.",
    percentages: { common: "5%", rare: "", super_rare: "", epic: "", legendary: "35" },
  },
  {
    name: "Contender",
    icons: {},
    description: "Increases melee damage.",
    percentages: { common: "5%", rare: "", super_rare: "10%", epic: "15%", legendary: "20%" },
  },
  {
    name: "Convincing Plea",
    icons: {},
    description: "Reduces the arrival timer for incoming Police waves after filling the Police Badge.",
    percentages: { common: "10%", rare: "20%", super_rare: "35%", epic: "", legendary: "65%" },
  },
  {
    name: "Dead Shot",
    icons: {},
    description: "Increases critical damage with ranged weapons.",
    percentages: { common: "15%", rare: "20%", super_rare: "", epic: "", legendary: "" },
  },
  {
    name: "Deaden",
    icons: {},
    description: "Makes the noise pings you generate less visible.",
    percentages: { common: "20%", rare: "30%", super_rare: "", epic: "30%", legendary: "" },
  },
  {
    name: "Dying Breath",
    icons: {},
    description: "Increases your chance of escaping Michael's grabs while at low health.",
    percentages: { common: "15%", rare: "20%", super_rare: "", epic: "30%", legendary: "" },
  },
  {
    name: "Elusory",
    icons: {},
    description: "Slows the rate at which Michael builds Stalk progress on you.",
    percentages: { common: "10%", rare: "", super_rare: "", epic: "30", legendary: "50" },
  },
  {
    name: "Exit Strategy",
    icons: {},
    description: "Increases the distance from which escape routes can be discovered.",
    percentages: { common: "25%", rare: "35%", super_rare: "", epic: "", legendary: "" },
  },
  {
    name: "Fade to Black",
    icons: {},
    description: "Causes Stalk tiers to degrade faster while hiding in a hiding spot.",
    percentages: { common: "15%", rare: "", super_rare: "30%", epic: "", legendary: "" },
  },
  {
    name: "Field Triage",
    icons: {},
    description: "Increases the use speed of Healing Spray and Med-Kits.",
    percentages: { common: "10%", rare: "15%", super_rare: "", epic: "30%", legendary: "" },
  },
  {
    name: "Frantic",
    icons: {},
    description: "Adds more Police presence when you successfully complete a call.",
    percentages: { common: "", rare: "25%", super_rare: "35%", epic: "", legendary: "" },
  },
  {
    name: "Ghost",
    icons: {},
    description: "Increases the natural Stalk degradation rate.",
    percentages: { common: "", rare: "15%", super_rare: "20%", epic: "25%", legendary: "" },
  },
  {
    name: "Glass Walker",
    icons: {},
    description: "Reduces damage taken when diving through windows.",
    percentages: { common: "10%", rare: "15%", super_rare: "20%", epic: "", legendary: "" },
  },
  {
    name: "Grave Footing",
    icons: {},
    description: "Reduces the chance of tripping while exhausted or terrified.",
    percentages: { common: "20%", rare: "", super_rare: "", epic: "", legendary: "90%" },
  },
  {
    name: "Guardian Shadow",
    icons: {},
    description: "Reduces damage taken by Residents following you.",
    percentages: { common: "", rare: "20%", super_rare: "30%", epic: "", legendary: "" },
  },
  {
    name: "Hardened",
    icons: {},
    description: "Increases resistance to blunt damage.",
    percentages: { common: "10%", rare: "", super_rare: "", epic: "30%", legendary: "" },
  },
  {
    name: "Iron Ankles",
    icons: {},
    description: "Reduces fall damage.",
    percentages: { common: "10%", rare: "15%", super_rare: "20%", epic: "35%", legendary: "50%" },
  },
  {
    name: "Knockout",
    icons: {},
    description: "Makes Michael remain downed longer when you help knock him down.",
    percentages: { common: "10%", rare: "15%", super_rare: "20%", epic: "", legendary: "35%" },
  },
  {
    name: "Lethal Pitch",
    icons: {},
    description: "Increases damage dealt by thrown items and weapons.",
    percentages: { common: "10%", rare: "15%", super_rare: "20%", epic: "25%", legendary: "" },
  },
  {
    name: "Liquid Courage",
    icons: {},
    description: "Increases melee damage while intoxicated.",
    percentages: { common: "5%", rare: "10%", super_rare: "", epic: "", legendary: "35%" },
  },
  {
    name: "Panic Contagion",
    icons: {},
    description: "Increases movement speed after successfully helping a Resident escape.",
    percentages: { common: "1.5%", rare: "2%", super_rare: "2.3%", epic: "2.7%", legendary: "3%" },
  },
  {
    name: "Panic Drive",
    icons: {},
    description: "Reduces damage taken by cars while driving them.",
    percentages: { common: "25%", rare: "", super_rare: "50%", epic: "60%", legendary: "" },
  },
  {
    name: "Pied Piper",
    // Your uploaded file is "PIEP_PIPER_II.png" — the auto-generated name
    // would be "PIED_PIPER_II.png" (correct spelling). Rename the file to
    // match and you can delete this override entirely.
    icons: { rare: "icons/PIEP_PIPER_II.png" },
    description: "Increases the number of Residents who can follow you.",
    percentages: { common: "1", rare: "1", super_rare: "1", epic: "1", legendary: "1" },
  },
  {
    name: "Relentless Steel",
    icons: {},
    description: "Increases melee weapon durability.",
    percentages: { common: "10%", rare: "", super_rare: "", epic: "30%", legendary: "40%" },
  },
  {
    name: "Repair Expert",
    icons: {},
    description: "Gives you a chance not to consume a Repair Kit when using it.",
    percentages: { common: "20%", rare: "", super_rare: "", epic: "35%", legendary: "" },
  },
  {
    name: "Reveler",
    icons: {},
    description: "Increases the duration of intoxication and certain other status effects.",
    percentages: { common: "15%", rare: "30%", super_rare: "", epic: "75%", legendary: "100%" },
  },
  {
    name: "Scavenger",
    icons: {},
    description: "Increases progress during the hiding spot rummage minigame.",
    percentages: { common: "10%", rare: "15%", super_rare: "25%", epic: "30%", legendary: "" },
  },
  {
    name: "Shared Desperation",
    icons: {},
    description: "Makes Residents deal more damage after you give them a weapon.",
    percentages: { common: "15%", rare: "", super_rare: "30%", epic: "", legendary: "" },
  },
  {
    name: "Shield of Law",
    icons: {},
    description: "Reduces Fear gain while within 15 meters of a Police Officer.",
    percentages: { common: "", rare: "25%", super_rare: "40%", epic: "", legendary: "" },
  },
  {
    name: "Silver Tongue",
    icons: {},
    description: "Gives you more time to achieve a perfect result during conversation minigames.",
    percentages: { common: "15%", rare: "", super_rare: "25%", epic: "30%", legendary: "" },
  },
  {
    name: "Sixth Sense",
    icons: {},
    description: "Allows you to hear Michael breathing during Shape Jump from a greater distance.",
    percentages: { common: "2m", rare: "3.5m", super_rare: "5m", epic: "", legendary: "" },
  },
  {
    name: "Slippery",
    icons: {},
    description: "Reduces the difficulty of the struggle minigame when Michael grabs you.",
    percentages: { common: "15%", rare: "17%", super_rare: "", epic: "22%", legendary: "25%" },
  },
  {
    name: "Smooth Talker",
    icons: {},
    description: "Increases the perfect zone of the dispatch call skill check.",
    percentages: { common: "10%", rare: "15%", super_rare: "", epic: "30%", legendary: "50%" },
  },
  {
    name: "Solid Foundation",
    icons: {},
    description: "Increases Poise, improving your ability to contribute toward knocking Michael down.",
    percentages: { common: "5%", rare: "10%", super_rare: "20%", epic: "", legendary: "" },
  },
  {
    name: "Stubborn",
    icons: {},
    description: "Increases movement speed while wounded.",
    percentages: { common: "10%", rare: "15%", super_rare: "20%", epic: "", legendary: "30%" },
  },
  {
    name: "Survival Intuition",
    icons: {},
    description: "Automatically marks one random escape location on your map.",
    percentages: { common: "1", rare: "1", super_rare: "1", epic: "1", legendary: "1" },
  },
  {
    name: "Survival Rage",
    // Your uploaded file is "SURVIVIAL_RAGE_IV.png" — the auto-generated
    // name would be "SURVIVAL_RAGE_IV.png" (correct spelling). Rename the
    // file to match and you can delete this override entirely.
    icons: { epic: "icons/SURVIVIAL_RAGE_IV.png" },
    description: "When Terrified, melee damage is increased.",
    percentages: { common: "10%", rare: "15%", super_rare: "20%", epic: "", legendary: "30%" },
  },
  {
    name: "Thick Skin",
    icons: {},
    description: "Increases resistance to sharp damage.",
    percentages: { common: "10%", rare: "", super_rare: "18%", epic: "", legendary: "28%" },
  },
  {
    name: "Trespasser",
    icons: {},
    description: "Allows you to pick locked doors by holding the interaction button for a set duration.",
    percentages: { common: "", rare: "4.5s", super_rare: "", epic: "", legendary: "" },
  },
  {
    name: "Unphased",
    icons: {},
    description: "Reduces Fear buildup.",
    percentages: { common: "", rare: "20%", super_rare: "35%", epic: "50%", legendary: "" },
  },
  {
    name: "Unwinded",
    icons: {},
    description: "Reduces stamina consumption from all actions.",
    percentages: { common: "", rare: "15%", super_rare: "18%", epic: "", legendary: "" },
  },
  {
    name: "Voice of Reason",
    icons: {},
    description: "Reduces Fear gained by Residents following you.",
    percentages: { common: "15%", rare: "25%", super_rare: "40%", epic: "60%", legendary: "" },
  },
  {
    name: "Wired",
    icons: {},
    description: "Each Pop you consume permanently reduces incoming Fear for the rest of the match.",
    percentages: { common: "10%", rare: "", super_rare: "15%", epic: "", legendary: "20%" },
  },
  {
    name: "Witness State",
    icons: {},
    description: "Reveals the outlines of nearby Residents.",
    percentages: { common: "15m", rare: "20m", super_rare: "25m", epic: "", legendary: "50m" },
  },
  {
    name: "Wound Mender",
    icons: {},
    description: "Increases the amount of health restored by healing items.",
    percentages: { common: "5%", rare: "", super_rare: "20%", epic: "", legendary: "" },
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
  common: "Discription: m = meters, s = seconds",
  rare: "Discription: m = meters, s = seconds",
  super_rare: "Discription: m = meters, s = seconds",
  epic: "Discription: m = meters, s = seconds",
  legendary: "Discription: m = meters, s = seconds",
};
