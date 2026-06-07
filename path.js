/* I Belong — the menu.
   Five pages, reachable in any order from the Contents menu, with no sequence
   between them. Underneath them, set apart, sits one page: the science.
   Wrapped in its own scope so its names never collide with a page's script. */

(function () {

const STEPS = [
  { id: 'belonging', title: 'Belonging' },
  { id: 'evolution', title: 'Evolution' },
  { id: 'fire',      title: 'Around the fire' },
  { id: 'nervous-system', title: 'Nervous system' },
  { id: 'circle',    title: 'Inner and outer circle' },
];

const SCIENCE = { id: 'science', title: 'The science' };

// Flat layout: every page sits in the same folder, side by side.
function hrefFor(id) {
  if (id === 'belonging') return 'index.html';
  return id + '.html';
}

const currentId = document.body.dataset.step;
const onScience = currentId === SCIENCE.id;
const idx = STEPS.findIndex(s => s.id === currentId);

// Storage can be blocked when the page is opened from a file (file://) or in
// private modes. Wrap it so a failure never stops the navigation rendering.
function remember(key, value) {
  try { sessionStorage.setItem(key, value); } catch (e) { /* ignore */ }
}
function recall(key) {
  try { return sessionStorage.getItem(key); } catch (e) { return null; }
}

// Remember the last step on the path, so the science page can return to it.
if (!onScience && idx !== -1) {
  remember('ibelong:return', currentId);
}

// Thin, rounded chevron pointing up. Drawn as SVG so it stays crisp at any
// size and picks up the link colour through currentColor. Used by the quiet
// return-to-menu link on the science page.
const CHEV = {
  up: '<svg class="chev" viewBox="0 0 14 8" width="14" height="8" aria-hidden="true"><path d="M1.2 6.4 L7 1.6 L12.8 6.4" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

/* ---- foot: the science returns to the menu; pages have no foot links ---- */

const foot = document.getElementById('path-foot');
if (foot) {
  if (onScience) {
    const back = recall('ibelong:return') || 'belonging';
    const backStep = STEPS.find(s => s.id === back) || STEPS[0];
    foot.innerHTML =
      '<span></span>' +
      `<a class="foot-science" href="${hrefFor(backStep.id)}"><span class="nav-arrow">${CHEV.up}</span>Return</a>` +
      '<span></span>';
  } else {
    // Free menu, no sequence: no prev / next stepping between pages. The foot
    // stays empty; the Contents menu is the only way across.
    foot.innerHTML = '';
  }
}

/* ---- contents: jump to any step, with the science set apart ---- */

const opener = document.getElementById('jump-open');
const panel = document.getElementById('jump-panel');

if (panel) {
  const steps = STEPS.map((s) => {
    const cur = s.id === currentId ? ' is-current' : '';
    return `<li><a class="${cur.trim()}" href="${hrefFor(s.id)}">${s.title}</a></li>`;
  }).join('');

  const sciCur = onScience ? ' is-current' : '';
  const science =
    `<li class="jump-underneath"><a class="${sciCur.trim()}" href="${hrefFor(SCIENCE.id)}">` +
    `${SCIENCE.title}<span class="tag">underneath</span></a></li>`;

  panel.querySelector('.jump-list').innerHTML = steps + science;

  const open = () => panel.classList.add('is-open');
  const close = () => panel.classList.remove('is-open');
  if (opener) opener.addEventListener('click', open);
  const closeBtn = panel.querySelector('.jump-panel__close');
  if (closeBtn) closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

})();
