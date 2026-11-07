// Renders `xpData` (from xp-data.js) as a simple table, switched by the
// Michael / Civilians buttons.

const xpFilterButtons = Array.from(document.querySelectorAll("#xp-filters .filter-btn"));
const xpTitle = document.getElementById("xp-title");
const xpCount = document.getElementById("xp-count");
const xpHead = document.getElementById("xp-head");
const xpBody = document.getElementById("xp-body");

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}

function renderXP(sideKey) {
  const side = xpData[sideKey];
  xpTitle.textContent = side.label;
  xpCount.textContent = `${side.rows.length} row${side.rows.length === 1 ? "" : "s"}`;

  xpHead.innerHTML = side.columns.map((c) => `<th>${escapeHTML(c)}</th>`).join("");

  xpBody.innerHTML = side.rows
    .map((row) => {
      const cells = [row.level, row.xp || "—", row.unlock || "—"];
      return `<tr>${cells.map((c) => `<td>${escapeHTML(c)}</td>`).join("")}</tr>`;
    })
    .join("");
}

xpFilterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    xpFilterButtons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    renderXP(btn.dataset.side);
  });
});

renderXP("michael");
