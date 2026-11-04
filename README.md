# Halloween: The Game — Perk Codex

A simple, no-build-step wiki for the Perk Cards in *Halloween: The Game* (IllFonic), organized by rarity tier, since none currently exists.

## Files

| File | What it's for |
|---|---|
| `index.html` | The page structure. You shouldn't need to touch this. |
| `style.css` | Colors, layout, the rarity outline styling. |
| `script.js` | Renders the cards from `data.js` and handles search/filter. |
| `data.js` | **Edit this one.** Every perk's name, rarity, level, percentage, description. |

## Adding or correcting a perk

Open `data.js` and either edit an existing entry or copy this block for a new one:

```js
{
  name: "Perk Name",
  rarity: "epic",       // common | rare | super_rare | epic | legendary
  level: 4,              // 1–5, matches rarity
  percentage: "20%",     // the effect's strength — leave "" if you don't know it yet
  description: "What it does.",
},
```

Save, refresh the page (or push to GitHub) — no build step, no framework, nothing to compile.

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
