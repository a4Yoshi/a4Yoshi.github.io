// Renders `perks` (from data.js) into tier tabs. Every perk appears in every
// tier — only its `percentages[tier]` value changes between tabs. No build
// step, no framework.

const TIERS = [
  { key: "common", label: "Common", level: 1 },
  { key: "rare", label: "Rare", level: 2 },
  { key: "super_rare", label: "Super Rare", level: 3 },
  { key: "epic", label: "Epic", level: 4 },
  { key: "legendary", label: "Legendary", level: 5 },
];

const grid = document.getElementById("tiers");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search");
const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));

let activeTier = "common";
let query = "";

// Fallback element used if a referenced icon file is missing (404) —
// keeps the grid from showing a broken-image icon.
function monogramEl(name) {
  const div = document.createElement("div");
  div.className = "card-icon placeholder";
  div.textContent = name.charAt(0);
  return div;
}
window.monogramEl = monogramEl;

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function iconHTML(perk) {
  if (perk.icon) {
    return `<img class="card-icon" src="${escapeHTML(perk.icon)}" alt="" loading="lazy" onerror="this.replaceWith(monogramEl('${escapeHTML(perk.name)}'))" />`;
  }
  return `<div class="card-icon placeholder">${escapeHTML(perk.name.charAt(0))}</div>`;
}

function cardHTML(perk, tier) {
  const value = perk.percentages ? perk.percentages[tier.key] : "";
  const pct = value
    ? `<span class="pct">${escapeHTML(value)}</span>`
    : `<span class="pct empty">value not logged yet</span>`;

  return `
    <article class="card" data-rarity="${tier.key}">
      <div class="card-top">
        ${iconHTML(perk)}
        <div class="card-head">
          <h3>${escapeHTML(perk.name)}</h3>
          <span class="lvl-badge">LV ${tier.level}</span>
        </div>
      </div>
      <p>${escapeHTML(perk.description)}</p>
      ${pct}
    </article>
  `;
}

function matchesQuery(perk) {
  if (!query) return true;
  const haystack = (perk.name + " " + perk.description).toLowerCase();
  return haystack.includes(query);
}

function render() {
  grid.innerHTML = "";

  const tier = TIERS.find((t) => t.key === activeTier);
  const visiblePerks = perks.filter(matchesQuery);

  emptyState.style.display = visiblePerks.length === 0 ? "block" : "none";
  if (visiblePerks.length === 0) return;

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
  render();
});

render();
