/*
  HALLOWEEN: THE GAME — CHALLENGES
  =================================
  Two different systems, matching how the game itself splits them:

  PROGRESSIVE CHALLENGES — tied to a specific character. Pick a character
  from the selector, see their own ordered list of challenges and what
  each one unlocks. Currently seeded with Michael's two confirmed
  collections (1978 Michael, Inmate Michael). To add a Civilian's own
  progressive collection later, or a new Michael skin's, copy this block:

    your_key: {
      label: "Display Name",
      challenges: [
        { name: "Challenge Name", description: "", unlock: "What it gives" },
      ],
    },

  and add a matching button in challenges.html's #character-filters.

  PASSIVE CHALLENGES — not tied to one character; shared collections with
  their own tiers (Tier 1 through 5, usually). Add a new collection by
  copying this block into the passiveCollections array:

    {
      name: "Collection Name",
      challenges: [
        { tier: "Tier 1", description: "", unlock: "" },
      ],
    },

  WHAT'S PRE-FILLED
  Challenge names and which skin/tint they unlock come from early public
  guides and are patchy and sometimes conflicting between sources — treat
  every "unlock" value here as unconfirmed until you verify it in-game.
  Every "description" is blank on purpose: write down what the challenge
  actually asks you to do as you find out.
*/

const progressiveChallenges = {
  michael_1978: {
    label: "1978 Michael",
    challenges: [
      { name: "They Can Run, But They Can't Hide", description: "", unlock: "1978 Tint 2" },
      { name: "No Safe Haven", description: "", unlock: "1978 Tint 3" },
      { name: "Last Second Denial", description: "", unlock: "1978 Tint 4" },
      { name: "Legend of Haddonfield", description: "", unlock: "Stitched Michael Myers skin" },
    ],
  },
  michael_inmate: {
    label: "Inmate Michael",
    challenges: [
      { name: "Orderly Dominator", description: "", unlock: "Inmate Tint 2" },
      { name: "Slow Demise", description: "", unlock: "Inmate Tint 3" },
    ],
  },
};

const passiveCollections = [
  {
    name: "Shape Mastery",
    challenges: [
      { tier: "\u201cThe Shape's Approval\u201d — Tier 5", description: "", unlock: "Samhain Michael Myers skin (unconfirmed — sources disagree)" },
    ],
  },
  {
    name: "A Study In Terror (Stalking)",
    challenges: [
      { tier: "Tier 5", description: "", unlock: "1978 Tint 5" },
    ],
  },
  {
    name: "Calculated Cruelty",
    challenges: [
      { tier: "Tier 4", description: "", unlock: "1978 Tint 6" },
    ],
  },
];
