// Renders `progressiveChallenges` and `passiveCollections` (from
// challenges-data.js). The character filter buttons are generated
// automatically from the keys in progressiveChallenges, so adding a new
// character there adds its button here with no HTML editing needed.

const characterFilters = document.getElementById("character-filters");
const progressiveList = document.getElementById("progressive-list");
const passiveList = document.getElementById("passive-list");

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}

function challengeHTML(item, index) {
  const unlock = item.unlock
    ? `<span class="unlock">Unlocks: ${escapeHTML(item.unlock)}</span>`
    : "";
  const desc = item.description
    ? `<p>${escapeHTML(item.description)}</p>`
    : `<p><em>Description not logged yet.</em></p>`;
  return `
    <div class="challenge">
      <span class="num">#${index + 1}</span>
      <h4>${escapeHTML(item.name)}</h4>
      ${desc}
      ${unlock}
    </div>
  `;
}

function passiveTierHTML(item) {
  const unlock = item.unlock
    ? `<span class="unlock">Unlocks: ${escapeHTML(item.unlock)}</span>`
    : "";
  const desc = item.description
    ? `<p>${escapeHTML(item.description)}</p>`
    : `<p><em>Description not logged yet.</em></p>`;
  return `
    <div class="challenge">
      <h4>${escapeHTML(item.tier)}</h4>
      ${desc}
      ${unlock}
    </div>
  `;
}

function renderProgressive(key) {
  const char = progressiveChallenges[key];
  progressiveList.innerHTML = `
    <p class="tier-desc" style="margin-top: 0;">${char.challenges.length} challenge${char.challenges.length === 1 ? "" : "s"} in the ${escapeHTML(char.label)} collection.</p>
    ${char.challenges.map(challengeHTML).join("")}
  `;
}

function buildCharacterFilters() {
  const keys = Object.keys(progressiveChallenges);
  characterFilters.innerHTML = keys
    .map(
      (key, i) =>
        `<button class="filter-btn" data-char="${escapeHTML(key)}" aria-pressed="${i === 0}">${escapeHTML(progressiveChallenges[key].label)}</button>`
    )
    .join("");

  Array.from(characterFilters.querySelectorAll(".filter-btn")).forEach((btn) => {
    btn.addEventListener("click", () => {
      characterFilters.querySelectorAll(".filter-btn").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      renderProgressive(btn.dataset.char);
    });
  });

  if (keys.length) renderProgressive(keys[0]);
}

function renderPassive() {
  passiveList.innerHTML = passiveCollections
    .map(
      (collection) => `
        <div class="tier-desc" style="margin: 18px 0 8px;"><strong style="color: var(--text);">${escapeHTML(collection.name)}</strong></div>
        ${collection.challenges.map(passiveTierHTML).join("")}
      `
    )
    .join("");
}

buildCharacterFilters();
renderPassive();
