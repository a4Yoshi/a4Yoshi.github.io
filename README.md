# Halloween: The Game — Haddonfield Codex

A simple, no-build-step wiki for *Halloween: The Game* (IllFonic): Perk Cards by level, XP progression, and Challenges, since none of this exists publicly yet.

Three pages, linked by the nav bar at the top of each: **Perks** (`index.html`), **XP** (`xp.html`), **Challenges** (`challenges.html`). They share one `style.css` so the look stays consistent.

## Files

| File | What it's for |
|---|---|
| `index.html` / `xp.html` / `challenges.html` | Page structure. You shouldn't need to touch these except to add a nav link if you ever add a 4th page. |
| `style.css` | Colors, layout, card styling — shared by all three pages. |
| `data.js` | **Edit this.** Every perk: name, description, per-level percentages, optional icon overrides. |
| `xp-data.js` | **Edit this.** The Michael and Civilians XP tables. |
| `challenges-data.js` | **Edit this.** Progressive (per-character) and Passive (shared) challenge collections. |
| `script.js` / `xp.js` / `challenges.js` | Rendering logic for each page — shouldn't need editing. |
| `icons/` | Your own card images go here (see below). |

## Perks: adding or correcting one

Open `data.js` and either edit an existing entry or copy this block for a new one. One name, one description, and all five level numbers sit together in a single `percentages` table — nothing to copy-paste per rarity:

```js
{
  name: "Perk Name",
  icons: {},                    // leave {} — images are found automatically, see below
  description: "What it does.", // shown at every level, written once
  percentages: {
    common: "5%",       // Lv1
    rare: "10%",         // Lv2
    super_rare: "15%",   // Lv3
    epic: "20%",          // Lv4
    legendary: "25%",    // Lv5
  },
},
```

## Perk card images

Every perk card looks for its own image automatically — **you don't need to edit `data.js` at all to add one.** Just name the file:

```
NAME_IN_CAPS_WITH_UNDERSCORES_ROMANNUMERAL.png
```

and drop it in `icons/`. The roman numeral is the level: **I** = Common, **II** = Rare, **III** = Super Rare, **IV** = Epic, **V** = Legendary.

Examples:
- "Sixth Sense" at Common → `icons/SIXTH_SENSE_I.png`
- "Pied Piper" at Rare → `icons/PIED_PIPER_II.png`
- "Thick Skin" at Super Rare → `icons/THICK_SKIN_III.png`

If a card has no image yet (or the filename doesn't match), it just shows a clean colored monogram instead — never a broken-image icon.

**If a filename can't follow the convention** (a typo in a file you don't want to rename, an odd name), override it for just that perk and level in `data.js`:

```js
icons: { epic: "icons/my-weird-filename.png" },
```

Two of your uploaded files are already wired up this way because of small typos in the filenames themselves:
- `icons/PIEP_PIPER_II.png` → should be `PIED_PIPER_II.png`
- `icons/SURVIVIAL_RAGE_IV.png` → should be `SURVIVAL_RAGE_IV.png`

Easiest fix: rename those two files to the correct spelling and delete their `icons: {...}` override lines in `data.js` (there's a comment above each one) — then every perk follows the exact same automatic system with nothing special about these two.

**If an image still isn't showing**, open the project with a local server rather than double-clicking `index.html`:
```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`. This also matches exactly how GitHub Pages serves the real site. Check your browser's DevTools → Network tab for a red 404 if it's still not loading — that'll show you the exact filename it expected.

## Comparing all 5 levels of one perk

Type into the search box on the Perks page. Instead of one tier at a time, matching perks switch to a row showing all five levels side by side — their icon, percentage, and roman numeral — for a direct comparison. Clear the search to go back to normal tab browsing.

## XP page

`xp-data.js` holds two tables (Michael, Civilians), each a plain list of rows:

```js
{ level: 5, xp: "2,500", unlock: "Something you get at this level" },
```

Leave `xp` or `unlock` as `""` for a blank cell. Add as many rows as you want.

## Challenges page

`challenges-data.js` holds two separate systems, matching how the game splits them:

- **Progressive Challenges** — tied to one character. The page builds its selector buttons automatically from whatever characters you add to the `progressiveChallenges` object, so adding a new one is just adding a new entry — no HTML to touch.
- **Passive Challenges** — shared collections with their own tiers, not tied to a specific character. Add a new collection to the `passiveCollections` array.

Both are seeded with the few challenge names and unlocks that are already public (early guides disagree on some of the exact unlocks, so treat those as unconfirmed until you see them in-game) — descriptions are left blank for you to fill in as you play.

## Putting this on GitHub Pages (free hosting)

1. **Create the repo.** On GitHub, click **New repository**, name it something like `halloween-codex`, keep it public, and don't initialize it with a README (you already have one).
2. **Push these files.** From inside this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial codex: Perks, XP, Challenges"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/halloween-codex.git
   git push -u origin main
   ```
3. **Turn on Pages.** In the repo, go to **Settings → Pages**. Under "Build and deployment," set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
4. **Wait ~1 minute**, then your site is live at:
   ```
   https://YOUR-USERNAME.github.io/halloween-codex/
   ```
5. **Updating later:** edit whichever `-data.js` file, or drop a new image in `icons/`, then:
   ```bash
   git add .
   git commit -m "Update data"
   git push
   ```
   GitHub Pages redeploys automatically in under a minute.
