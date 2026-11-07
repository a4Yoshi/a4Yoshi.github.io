/*
  HALLOWEEN: THE GAME — XP TABLES
  ================================
  Two separate tables: one for Michael's own progression, one for the
  Civilian/Profile side. The game actually has a few different progression
  tracks (Profile Level, a character's own Level, Prestige) — if you find
  you need more than one table per side, just duplicate the "rows" array
  under a new key (e.g. michaelPrestige) and add a matching button in
  xp.html's sub-tab row.

  Each row is:
    { level: 1, xp: "1,000", unlock: "What you get at this level" }

  Leave xp or unlock as "" if you don't know it yet — the table just shows
  a blank cell. Add as many rows as you want; nothing else needs editing.
*/

const xpData = {
  michael: {
    label: "Michael",
    columns: ["Level", "XP Required", "Unlock"],
    rows: [
      { level: 1, xp: "", unlock: "" },
      { level: 2, xp: "", unlock: "" },
      { level: 3, xp: "", unlock: "" },
      { level: 4, xp: "", unlock: "" },
      { level: 5, xp: "", unlock: "" },
      // Known reference point — Michael's own Prestige track, separate
      // from his regular level-ups:
      { level: "Prestige 1", xp: "", unlock: "Scorched Michael Myers skin" },
    ],
  },
  civilians: {
    label: "Civilians",
    columns: ["Level", "XP Required", "Unlock"],
    rows: [
      { level: 1, xp: "", unlock: "" },
      { level: 2, xp: "", unlock: "" },
      { level: 3, xp: "", unlock: "" },
      { level: 4, xp: "", unlock: "" },
      { level: 5, xp: "", unlock: "" },
      // Known reference point — this is Profile Level, which may be a
      // separate track from individual Civilian character levels:
      { level: 55, xp: "", unlock: "Annie Brackett (playable Civilian)" },
    ],
  },
};
