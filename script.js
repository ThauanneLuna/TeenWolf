// ==========================
// TEEN WOLF FÃS — JS LIMPO
// (modo HTML manual)
// ==========================

function initPage() {
  if (document.getElementById('aboutCards')) buildIndex();
  if (document.getElementById('quizMain')) {
    buildQuizPage();
    loadQuiz('trivia');
  }
}

/* ── INDEX BUILDERS ── */
function buildIndex() {
  buildAbout();
  buildTimeline();
  buildBast();
  buildDiary();
  buildMap();
  buildGallery();
  buildTheories();
  buildEggs();
  renderFact();
  buildHeroGrid();
  window.addEventListener('scroll', navScroll);
}

function buildQuizPage() {
  window.addEventListener('scroll', navScroll);
}

/* ── ABOUT ── */
function buildAbout() {
  document.getElementById('aboutCards').innerHTML = ABOUT.map(c => `
    <div class="card-item">
      <div class="ci-icon">${c.icon}</div>
      <h3>${c.title}</h3>
      <p>${c.body}</p>
      <span class="ci-tag">${c.tag}</span>
    </div>
  `).join('');
}

/* ── TIMELINE ── */
function buildTimeline() {
  document.getElementById('timeline').innerHTML = TIMELINE.map(i => `
    <div class="tl-item">
      <div class="tl-y">${i.y}</div>
      <h4>${i.t}</h4>
      <p>${i.p}</p>
    </div>
  `).join('');
}

/* ── PERSONAGENS (AGORA MANUAL) ── */
// REMOVIDO buildChars() COMPLETAMENTE

/* ── BASTIDORES ── */
function buildBast() {
  document.getElementById('bastGrid').innerHTML = BAST.map(b => `
    <div class="bast-card">
      <div class="bast-info">
        <div class="bast-num">${b.n}</div>
        <h3>${b.t}</h3>
        <p>${b.p}</p>
        <span class="bast-tag">${b.tag}</span>
      </div>
    </div>
  `).join('');
}

/* ── DIÁRIO ── */
function buildDiary() {
  document.getElementById('diaryFeed').innerHTML = DIARY.map(d => `
    <div class="di-entry">
      <div class="di-meta">
        <div class="di-av">${d.av}</div>
        <div>
          <div class="di-who">${d.who}</div>
          <div class="di-date">${d.date}</div>
        </div>
      </div>
      <blockquote class="di-quote">${d.quote}</blockquote>
      <div class="di-body">${d.body}</div>
    </div>
  `).join('');
}

/* ── MAPA ── */
function buildMap() {
  document.getElementById('mapPins').innerHTML = MAP_PINS.map(p => `
    <div class="map-pin" style="left:${p.x}%;top:${p.y}%">
      <div class="pin-dot" style="background:${p.c}33"></div>
      <div class="pin-label">${p.l}</div>
    </div>
  `).join('');
}

/* ── GALERIA ── */
function buildGallery() {
  document.getElementById('galleryGrid').innerHTML = GALLERY.map(g => `
    <div class="gallery-item">
      ${g.e}
      <div class="gi-ov">
        <p>${g.l}</p>
        <span>${g.s}</span>
      </div>
    </div>
  `).join('');
}

/* ── TEORIAS ── */
function buildTheories() {
  document.getElementById('theoriesGrid').innerHTML = THEORIES.map(t => `
    <div class="card-item">
      <div class="ci-icon">${t.icon}</div>
      <h3>${t.title}</h3>
      <p>${t.body}</p>
      <span class="ci-tag">${t.tag}</span>
    </div>
  `).join('');
}

/* ── EASTER EGGS ── */
function buildEggs() {
  document.getElementById('eggGrid').innerHTML = EGGS.map(e => `
    <div class="card-item">
      <div class="ci-icon">${e.icon}</div>
      <h3>${e.title}</h3>
      <p>${e.body}</p>
    </div>
  `).join('');
}

/* ── FACTS ── */
let factIdx = 0;

function renderFact() {
  const n = document.getElementById('factNum');
  const t = document.getElementById('factText');
  if (!n || !t) return;

  n.textContent = FACTS[factIdx].n;
  t.textContent = FACTS[factIdx].t;
}

function nextFact() {
  factIdx = (factIdx + 1) % FACTS.length;
  renderFact();
}

function prevFact() {
  factIdx = (factIdx - 1 + FACTS.length) % FACTS.length;
  renderFact();
}

/* ── HERO GRID ── */
function buildHeroGrid() {
  const gl = document.getElementById('hgl');
  if (!gl) return;

  for (let i = 0; i < 8; i++) {
    const s = document.createElement('span');
    s.style.top = (i * 14 + 4) + '%';
    gl.appendChild(s);
  }
}

/* ── NAV ── */
function navScroll() {
  document.getElementById('nav')
    .classList.toggle('scrolled', window.scrollY > 10);
}

/* ── MENU ── */
function toggleMenu() {
  document.getElementById('mob-menu').classList.toggle('open');
}

function cm() {
  document.getElementById('mob-menu').classList.remove('open');
}

/* ── THEME ── */
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';

  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeBtn').textContent = isDark ? 'Dark' : 'Light';
}

/* ── INIT ── */
window.addEventListener('load', initPage);
