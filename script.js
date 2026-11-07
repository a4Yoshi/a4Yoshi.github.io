// Renders `perks` (from data.js) into tier tabs. Every perk appears in every
// tier — only its `percentages[tier]` value (and its card image) changes
// between tabs. No build step, no framework.

const TIERS = [
  { key: "common", label: "Common", level: 1, roman: "I" },
  { key: "rare", label: "Rare", level: 2, roman: "II" },
  { key: "super_rare", label: "Super Rare", level: 3, roman: "III" },
  { key: "epic", label: "Epic", level: 4, roman: "IV" },
  { key: "legendary", label: "Legendary", level: 5, roman: "V" },
];

const grid = document.getElementById("tiers");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search");
const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));

let activeTier = "common";
let query = "";

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// Fallback element used if a perk has no image (or the image 404s) — a
// colored monogram instead of a broken-image icon. `sizeClass` carries over
// the same "sm" modifier the <img> it's replacing would have had, so sizing
// stays correct in both the big grid cards and the small compare-row cards.
function monogramEl(name, sizeClass) {
  const div = document.createElement("div");
  div.className = `card-icon placeholder ${sizeClass || ""}`.trim();
  div.textContent = name.charAt(0);
  return div;
}
window.monogramEl = monogramEl;

// The naming convention: "Pied Piper" at Epic (IV) -> icons/PIED_PIPER_IV.png
function autoIconPath(name, tier) {
  const slug = name
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return `icons/${slug}_${tier.roman}.png`;
}

function iconPathFor(perk, tier) {
  if (perk.icons && perk.icons[tier.key]) return perk.icons[tier.key];
  return autoIconPath(perk.name, tier);
}

function iconHTML(perk, tier, size) {
  const src = iconPathFor(perk, tier);
  const sizeModifier = size === "sm" ? "sm" : "";
  const sizeClass = `card-icon ${sizeModifier}`.trim();
  return `<img class="${sizeClass}" data-rarity="${tier.key}" src="${escapeHTML(src)}" alt="" loading="lazy" onerror="this.replaceWith(monogramEl('${escapeHTML(perk.name)}', '${sizeModifier}'))" />`;
}

function cardHTML(perk, tier) {
  const value = perk.percentages ? perk.percentages[tier.key] : "";
  const pct = value
    ? `<span class="pct">${escapeHTML(value)}</span>`
    : `<span class="pct empty">value not logged yet</span>`;

  return `
    <article class="card" data-rarity="${tier.key}">
      <div class="card-media" data-rarity="${tier.key}">
        ${iconHTML(perk, tier)}
      </div>
      <div class="card-body">
        <h3>${escapeHTML(perk.name)}</h3>
        <p>${escapeHTML(perk.description)}</p>
        ${pct}
      </div>
    </article>
  `;
}

// Compact single-level card used inside a comparison row.
function compareCardHTML(perk, tier) {
  const value = perk.percentages ? perk.percentages[tier.key] : "";
  const pct = value ? escapeHTML(value) : "—";
  return `
    <div class="mini-card" data-rarity="${tier.key}">
      <div class="card-media sm" data-rarity="${tier.key}">
        ${iconHTML(perk, tier, "sm")}
      </div>
      <span class="mini-label">${tier.label}</span>
      <span class="mini-pct">${pct}</span>
    </div>
  `;
}

function compareRowHTML(perk) {
  return `
    <div class="compare-row">
      <div class="compare-head">
        <h3>${escapeHTML(perk.name)}</h3>
        <p>${escapeHTML(perk.description)}</p>
      </div>
      <div class="compare-levels">
        ${TIERS.map((t) => compareCardHTML(perk, t)).join("")}
      </div>
    </div>
  `;
}

function matchesQuery(perk) {
  if (!query) return true;
  const haystack = (perk.name + " " + perk.description).toLowerCase();
  return haystack.includes(query);
}

function render() {
  grid.innerHTML = "";
  const visiblePerks = perks.filter(matchesQuery);

  emptyState.style.display = visiblePerks.length === 0 ? "block" : "none";
  if (visiblePerks.length === 0) return;

  if (query) {
    // Compare mode: every matching perk, all 5 levels side by side.
    const wrap = document.createElement("section");
    wrap.className = "compare-wrap";
    wrap.innerHTML = `
      <div class="tier-head compare">
        <h2>Comparing ${visiblePerks.length} perk${visiblePerks.length === 1 ? "" : "s"}</h2>
        <span class="count">across all 5 levels</span>
      </div>
      ${visiblePerks.map(compareRowHTML).join("")}
    `;
    grid.appendChild(wrap);
    return;
  }

  const tier = TIERS.find((t) => t.key === activeTier);
  const section = document.createElement("section");
  section.className = "tier";
  section.dataset.rarity = tier.key;
  section.innerHTML = `
    <div class="tier-head">
      <span class="dot"></span>
      <h2>${tier.label}</h2>
      <span class="count">${visiblePerks.length} perk${visiblePerks.length === 1 ? "" : "s"}</span>
    </div>
    <p class="tier-desc">${escapeHTML(tierDescriptions[tier.key] || "")}</p>
    <div class="grid">
      ${visiblePerks.map((p) => cardHTML(p, tier)).join("")}
    </div>
  `;
  grid.appendChild(section);
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeTier = btn.dataset.rarity;
    filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    render();
  });
});

searchInput.addEventListener("input", (e) => {
  query = e.target.value.trim().toLowerCase();
  document.getElementById("filters").classList.toggle("disabled", !!query);
  render();
});

render();
