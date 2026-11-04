// Renders `perks` (from data.js) into rarity-grouped sections, and wires
// up the search box + filter pills. No build step, no framework.

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

let activeRarity = "common";
let query = "";

function iconHTML(perk) {
  if (perk.icon) {
    return `<img class="card-icon" src="${escapeHTML(perk.icon)}" alt="" loading="lazy" onerror="this.replaceWith(monogramEl('${escapeHTML(perk.name)}'))" />`;
  }
  return `<div class="card-icon placeholder">${escapeHTML(perk.name.charAt(0))}</div>`;
}

function cardHTML(perk) {
  const pct = perk.percentage
    ? `<span class="pct">${escapeHTML(perk.percentage)}</span>`
    : `<span class="pct empty">value not logged yet</span>`;

  return `
    <article class="card" data-rarity="${perk.rarity}">
      <div class="card-top">
        ${iconHTML(perk)}
        <div class="card-head">
          <h3>${escapeHTML(perk.name)}</h3>
          <span class="lvl-badge">LV ${perk.level}</span>
        </div>
      </div>
      <p>${escapeHTML(perk.description)}</p>
      ${pct}
    </article>
  `;
}

// Fallback element used if a referenced icon file is missing (404).
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

function matchesQuery(perk) {
  if (!query) return true;
  const haystack = (perk.name + " " + perk.description).toLowerCase();
  return haystack.includes(query);
}

function render() {
  grid.innerHTML = "";
  let totalShown = 0;

  TIERS.forEach((tier) => {
    if (activeRarity !== tier.key) return;

    const tierPerks = perks.filter(
      (p) => p.rarity === tier.key && matchesQuery(p)
    );
    if (tierPerks.length === 0) return;

    totalShown += tierPerks.length;

    const section = document.createElement("section");
    section.className = "tier";
    section.dataset.rarity = tier.key;
    section.innerHTML = `
      <div class="tier-head">
        <span class="dot"></span>
        <h2>${tier.label}</h2>
        <span class="count">${tierPerks.length} perk${tierPerks.length === 1 ? "" : "s"}</span>
      </div>
      <p class="tier-desc">${escapeHTML(tierDescriptions[tier.key] || "")}</p>
      <div class="grid">
        ${tierPerks.map(cardHTML).join("")}
      </div>
    `;
    grid.appendChild(section);
  });

  emptyState.style.display = totalShown === 0 ? "block" : "none";
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeRarity = btn.dataset.rarity;
    filterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    render();
  });
});

searchInput.addEventListener("input", (e) => {
  query = e.target.value.trim().toLowerCase();
  render();
});

render();
