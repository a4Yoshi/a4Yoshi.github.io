# Halloween: The Game — Perk Codex

A simple, no-build-step wiki for the Perk Cards in *Halloween: The Game* (IllFonic), organized by rarity tier, since none currently exists.

## Files

| File | What it's for |
|---|---|
| `index.html` | The page structure. You shouldn't need to touch this. |
| `style.css` | Colors, layout, the rarity outline styling. |
| `script.js` | Renders the cards from `data.js` and handles search/filter. |
| `data.js` | **Edit this one.** Every perk's name, rarity, level, percentage, icon, description — plus the five tier descriptions. |
| `icons/` | Optional. Drop your own perk screenshots here and point to them from `data.js`. Empty by default — the site falls back to a colored monogram. |

## Adding or correcting a perk

Open `data.js` and either edit an existing entry or copy this block for a new one. Each perk is written **once** — one name, one icon, one description — with all five level numbers sitting together in a single `percentages` table, so there's nothing to copy-paste per rarity:

```js
{
  name: "Perk Name",
  icon: "",                     // optional, e.g. "icons/perk-name.png"
  description: "What it does.", // shown at every level, written once
  percentages: {
    common: "5%",      // Lv1 — leave "" if you don't know it yet
    rare: "10%",        // Lv2
    super_rare: "15%",  // Lv3
    epic: "20%",         // Lv4
    legendary: "25%",   // Lv5
  },
},
```

Save, refresh the page (or push to GitHub) — no build step, no framework, nothing to compile. Every perk now shows up under every tier tab automatically; switching tabs just swaps which number from `percentages` is displayed.

## Putting this on GitHub Pages (free hosting)

1. **Create the repo.** On GitHub, click **New repository**, name it something like `halloween-perks-wiki`, keep it public, and don't initialize it with a README (you already have one).
2. **Push these files.** From inside this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial perk codex"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/halloween-perks-wiki.git
   git push -u origin main
   ```
3. **Turn on Pages.** In the repo, go to **Settings → Pages**. Under "Build and deployment," set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
4. **Wait ~1 minute**, then your site is live at:
   ```
   https://YOUR-USERNAME.github.io/halloween-perks-wiki/
   ```
5. **Updating later:** edit `data.js` locally, then:
   ```bash
   git add data.js
   git commit -m "Update perk tiers"
   git push
   ```
   GitHub Pages redeploys automatically in under a minute.

## Notes on the data

The game currently has 49–51 publicly documented Perk Cards (names and effect text confirmed via in-game text and guide sites as of the September 2026 patch). **Rarity tiers and exact percentages are not officially published** — every perk in `data.js` starts as `rarity: "common"` with an empty `percentage` as a neutral placeholder. Fill those in as you and your community confirm them from actual rolls.

The five `tierDescriptions` at the bottom of `data.js` (what Common/Rare/Super Rare/Epic/Legendary generally mean) are also starting placeholders — rewrite them once real patterns emerge from your rolls.

## Images

There's no official perk art available to pull in automatically. Each card supports an optional `icon` path (see `icons/README.md`); until you add your own, cards show a clean colored monogram instead so nothing looks broken.

**If an image you added isn't showing up**, check these in order — they cover almost every case:

1. **Open the file directly, not by double-clicking `index.html`.** Browsers sometimes block local file-to-file loading when you open a page straight from disk (`file:///...`). Instead, run a tiny local server from inside the project folder:
   ```bash
   python3 -m http.server 8000
   ```
   then visit `http://localhost:8000` in your browser. This also matches how GitHub Pages actually serves the site, so it's the more reliable way to test.
2. **Check the path is exact and case-sensitive.** `icon: "icons/Adrenaline.PNG"` will NOT match a file saved as `adrenaline.png` — GitHub Pages' server treats those as different files even if your own computer doesn't.
3. **Check the path has no leading slash.** Use `icons/adrenaline.png`, not `/icons/adrenaline.png`.
4. **Open your browser's DevTools → Network tab**, reload, and look for the image request in red (404). It'll show you the exact URL it tried to load — compare that letter-for-letter against your actual filename in `icons/`.

If the image is missing or still 404s, the card automatically falls back to the colored monogram rather than showing a broken-image icon.
