/* ══════════════════════════════════════════
   TEEN WOLF FÃS — script.js  (CORRIGIDO v2)
   ══════════════════════════════════════════ */

/* ── IMAGENS ── */
const CHAR_IMGS = {
  "Scott McCall":    "scott.jpg",
  "Stiles Stilinski":"stiles.jpg",
  "Lydia Martin":    "lydia.jpg",
  "Derek Hale":      "derek.jpg",
  "Allison Argent":  "allison.jpg",
  "Kira Yukimura":   "kira.jpg",
  "Liam Dunbar":     "liam.jpg",
  "Malia Tate":      "malia.jpg"
};

const ACTOR_IMGS = {
  "Tyler Posey":    "tylerposey.jpg",
  "Dylan O'Brien":  "dylanobrien.jpg",
  "Holland Roden":  "hollandroden.jpg",
  "Tyler Hoechlin": "tylerhoechlin.jpg"
};

/* ── DATA ── */
const ABOUT = [
  {icon:'🎬',title:'A Série',body:'Teen Wolf é uma série americana de drama sobrenatural criada por Jeff Davis, baseada no filme de 1985. Exibida na MTV entre 2011 e 2017, com 6 temporadas e 100 episódios.',tag:'Drama Sobrenatural'},
  {icon:'🌙',title:'O Enredo',body:'Scott McCall é mordido por um lobisomem e sua vida muda para sempre. Ele precisa equilibrar a escola, os amigos e um mundo sobrenatural que a maioria das pessoas nem sabe que existe.',tag:'Lobisomens & Magia'},
  {icon:'🏙️',title:'Beacon Hills',body:'Cidade fictícia da Califórnia que atua como um nexo de energia sobrenatural, atraindo lobisomens, banshees, kitsunes, druidas e outras criaturas ao longo de séculos.',tag:'Nexo Sobrenatural'},
  {icon:'🏆',title:'Legado',body:'Em 2023, um longa-metragem de continuação foi lançado no Paramount+, reunindo parte do elenco original para um último confronto épico em Beacon Hills.',tag:'Teen Wolf: The Movie'}
];

const TIMELINE = [
  {y:'2011',t:'Temporada 1 – A Mordida',p:'Scott é mordido por um Alfa desconhecido. Conheça Stiles, Lydia, Allison e Derek Hale. O terror do Alfa ameaça toda a cidade.'},
  {y:'2012',t:'Temporada 2 – O Kanima',p:'Uma criatura serpentina surge em Beacon Hills. Jackson Whittemore se transforma. Os segredos da família Argent são revelados.'},
  {y:'2013',t:'Temporada 3 – Alfa & Nogitsune',p:'A Matilha Alfa chega na primeira metade. Na segunda, um espírito demoníaco japonês — o Nogitsune — possui Stiles.'},
  {y:'2014',t:'Temporada 4 – Os Deadpool',p:'Uma lista de preços de sobrenaturais começa a circular. Kate Argent retorna como Werejaguar. O passado dos Hale volta à tona.'},
  {y:'2015',t:'Temporada 5 – Dread Doctors',p:'Cientistas sobrenaturais criam quimeras em adolescentes. A matilha se divide. Theo Raeken manipula todos para seus próprios fins.'},
  {y:'2016–17',t:'Temporada 6 – Caçador Selvagem',p:'Stiles é apagado da realidade. Na segunda parte, caçadores humanos modernos ameaçam todos os sobrenaturais da cidade.'},
  {y:'2023',t:'Teen Wolf: The Movie',p:'A Besta de Gévaudan retorna. O elenco original se reúne para um último e épico confronto que muda Beacon Hills para sempre.'}
];

const CHARS = [
  {n:'Scott McCall',r:'Protagonista / Alfa Verdadeiro',av:'🐺',pw:'Lobisomem Alfa',d:'O primeiro Alfa Verdadeiro em séculos — conquistou o poder pelo caráter, não pela força ou violência. Sua empatia é tanto sua maior força quanto sua maior vulnerabilidade.'},
  {n:'Stiles Stilinski',r:'Melhor Amigo / Estrategista e Protagonista',av:'⚡',pw:'Inteligência Suprema',d:'O único humano da matilha por muito tempo. Seu intelecto e determinação salvaram Beacon Hills inúmeras vezes — geralmente antes que alguém soubesse do perigo.'},
  {n:'Lydia Martin',r:'Banshee',av:'👸',pw:'Presságio da Morte',d:'Inicialmente a popular da escola, Lydia é na verdade uma Banshee: capaz de prever mortes, localizar corpos e sentir o sobrenatural com precisão assustadora.'},
  {n:'Derek Hale',r:'Lobisomem / Ex-Alfa',av:'🌑',pw:'Lobisomem Hale',d:'Sobrevivente do incêndio que matou sua família. Sombrio e carregado de culpa, Derek eventualmente renuncia seus poderes voluntariamente — um ato de pura humanidade.'},
  {n:'Allison Argent',r:'Caçadora de Elite',av:'🏹',pw:'Mestre em Arqueria',d:'Descendente de uma dinastia de caçadores, Allison redefiniu o código da família para proteger inocentes. Uma das maiores heroínas da série até sua morte trágica.'},
  {n:'Kira Yukimura',r:'Kitsune Trovão',av:'🦊',pw:'Raposa Elétrica',d:'De origem japonesa, Kira é uma Kitsune Trovão cujos poderes elétricos foram essenciais na luta contra o Nogitsune. Sua jornada de autoconhecimento marca toda a T3B e T4.'},
  {n:'Liam Dunbar',r:'Beta de Scott',av:'💙',pw:'Berserker (IED)',d:'Primeiro membro transformado por Scott. Liam sofre de Transtorno Explosivo Intermitente, tornando o controle sobrenatural um desafio constante.'},
  {n:'Malia Tate',r:'Werecoyote',av:'🦡',pw:'Coyote Sobrenatural',d:'Passou anos como coiote após um acidente. Brutalmente honesta e instintiva, Malia luta para se readaptar ao mundo humano carregando enorme culpa.'}
];

const BAST = [
  {n:'01',t:'Tyler Posey',actor:'Tyler Posey',p:'Interpreta Scott McCall. Foi o único ator a aparecer em todos os 100 episódios da série original, além do filme de 2023. Seu compromisso com o papel é lendário.',tag:'Scott McCall'},
  {n:'02',t:"Dylan O'Brien",actor:"Dylan O'Brien",p:'Vive o icônico Stiles Stilinski. Sofreu um grave acidente de set durante filmagens de Maze Runner em 2016, adiando a produção da T6. Seu retorno foi celebrado mundialmente.',tag:'Stiles Stilinski'},
  {n:'03',t:'Holland Roden',actor:'Holland Roden',p:'A Lydia Martin da vida real possui memória fotográfica, assim como sua personagem. Holland estudou biologia molecular na UCLA antes de se dedicar à atuação.',tag:'Lydia Martin'},
  {n:'04',t:'Tyler Hoechlin',actor:'Tyler Hoechlin',p:'Derek Hale. Saiu da série regular na T4 por vontade própria. Hoje é reconhecido mundialmente como o Superman no Arrowverse da DC na série Superman & Lois.',tag:'Derek Hale'},
  {n:'05',t:'Locações Reais',actor:null,p:'A série foi filmada principalmente em Los Angeles. A "Beacon Hills High School" é a Portola Middle School em Tarzana, LA. A floresta foi rodada em Malibu Creek State Park.',tag:'Behind the Scenes'},
  {n:'06',t:'Trilha Sonora Icônica',actor:null,p:'Teen Wolf é famosa pela trilha alternativa. Músicas de Hozier, Daughter, Of Monsters and Men e Crystal Castles acompanharam cenas que marcaram gerações de fãs.',tag:'Soundtrack'}
];

const EGGS = [
  {icon:'🥚',title:'Número 218',body:'O quarto de hospital onde o pai de Stiles fica internado é o 218 — referência ao total de episódios do show de TV de lobisomens dos anos 80 que inspirou a série.'},
  {icon:'🎨',title:'Cores dos Olhos',body:'Os olhos dos lobisomens codificam seu passado: amarelo = padrão; azul = matou um inocente; vermelho = Alfa. Um sistema visual criado pelo Jeff Davis e mantido rigorosamente.'},
  {icon:'🌿',title:'O Triskelion Hale',body:'O símbolo da família Hale aparece discretamente em paredes, roupas e objetos durante toda a série, mesmo em cenas sem relação direta com a família.'},
  {icon:'📚',title:'Pesquisa Mitológica Real',body:'O Nogitsune é baseado no Kitsune do folclore japonês. A equipe consultou textos originais em japonês e trabalhou com consultores culturais para representar a criatura com precisão.'}
];

const DIARY = [
  {who:'Scott McCall',av:'🐺',date:'Outubro, Ano 1',quote:'"Ser um lobisomem não é uma maldição. É parte de quem eu sou."',body:'Hoje entendi que não preciso escolher entre ser humano e sobrenatural. Posso ser os dois. Allison me ajudou a ver isso. A matilha está crescendo — e com ela, minha responsabilidade.'},
  {who:'Stiles Stilinski',av:'⚡',date:'Novembro, Ano 3',quote:'"Às vezes ser o único humano é a maior vantagem do grupo."',body:'Enquanto todos confiam nos poderes, eu confio no meu cérebro. E hoje isso fez toda a diferença. Pesquisei o suficiente para encontrar a fraqueza do Nogitsune. Existe sempre uma solução.'},
  {who:'Lydia Martin',av:'👸',date:'Setembro, Ano 2',quote:'"Eu ouvi algo que ninguém mais ouve. Alguém vai morrer esta noite."',body:'Os gritos não param. Não importa o que eu faça — eles voltam. A Sra. Morrell disse que o que sinto é um dom ancestral. Difícil enxergar assim quando o dom te acorda às 3h.'},
  {who:'Derek Hale',av:'🌑',date:'Data desconhecida',quote:'"Confiar é um luxo que um lobisomem não pode se dar."',body:'A família Hale morreu por confiar nas pessoas erradas. Não vou cometer o mesmo erro. Mas Scott é diferente de tudo que já vi. Talvez eu precise confiar nele.'},
  {who:'Allison Argent',av:'🏹',date:'Primavera, Ano 2',quote:'"Nascemos caçadores. Mas escolhemos o que caçamos."',body:'Minha família caça sobrenaturais há séculos. Mas aprendi que nem todo sobrenatural é monstro — e nem todo humano é inocente. O código precisa mudar. Eu vou mudá-lo.'}
];

const MAP_PINS = [
  {id:'school',l:'BHHS',x:50,y:28,c:'var(--ember)',t:'Beacon Hills High School',b:'O epicentro da vida social de Scott e Stiles. Filmada na Portola Middle School em Tarzana, LA. Palco de batalhas épicas, incluindo o ataque do Kanima na T2.'},
  {id:'forest',l:'Floresta',x:22,y:52,c:'#5ecfa8',t:'Floresta de Beacon Hills',b:'Onde Scott foi mordido pelo Alfa na primeira noite. Esconde o Nemeton — a árvore druídica que serve como nexo de energia sobrenatural. Filmada em Malibu Creek State Park.'},
  {id:'loft',l:'Loft Hale',x:72,y:42,c:'var(--wolf2)',t:'Loft de Derek Hale',b:'Apartamento industrial de Derek. Palco de reuniões da matilha, treinos e decisões estratégicas. Derek transformou Erica Reyes e Boyd aqui durante a T2.'},
  {id:'hospital',l:'Hospital',x:62,y:66,c:'var(--ember)',t:'Beacon Hills Memorial',b:'O pai de Stiles foi internado várias vezes aqui. O hospital é frequentemente invadido por sobrenaturais — especialmente nas temporadas 2, 3 e 5.'},
  {id:'nemeton',l:'Nemeton',x:32,y:74,c:'var(--gold2)',t:'O Nemeton — Árvore Sagrada',b:'A árvore druídica sacrificial no coração da floresta. Cada ritual mágico a fortalece. Scott, Stiles e Allison realizaram o sacrifício dos pais aqui na T3.'},
  {id:'argent',l:'Casa Argent',x:80,y:22,c:'#e87870',t:'Residência Argent',b:'Base de operações da família de caçadores mais poderosa de Beacon Hills. O arsenal secreto no porão foi descoberto por Scott e Stiles na T1.'},
  {id:'sheriff',l:'Delegacia',x:45,y:55,c:'#8ab0d8',t:'Delegacia do Xerife',b:'O escritório do pai de Stiles, Noah Stilinski. Palco de investigações sobrenaturais disfarçadas de crimes convencionais ao longo de toda a série.'}
];

const FACTS = [
  {n:'Fato 1 / 12',t:"Dylan O'Brien quase não foi escalado para Stiles. Jeff Davis passou meses em audições frustradas antes de encontrar o ator perfeito para o personagem que acabaria roubando a série."},
  {n:'Fato 2 / 12',t:'O nome completo de Stiles — Mieczysław Stilinski — é polonês e impronunciável. Isso foi mantido como piada recorrente pelo Jeff Davis ao longo de todas as 6 temporadas.'},
  {n:'Fato 3 / 12',t:'Tyler Posey e Tyler Hoechlin se tornaram amigos próximos durante as gravações. Eles se apelidaram internamente de "Os Tylers" e mantêm contato até hoje.'},
  {n:'Fato 4 / 12',t:'Crystal Reed pediu para sair da série ao fim da T3A por decisão própria, querendo explorar novos papéis. A produção aceitou e criou uma das mortes mais impactantes da história da MTV.'},
  {n:'Fato 5 / 12',t:"O Nogitsune é considerado o melhor antagonista da série. O efeito de Stiles 'possuído' foi parcialmente alcançado com Dylan O'Brien gravando cenas duplas em um mesmo plano."},
  {n:'Fato 6 / 12',t:'Jeff Davis precisou convencer a MTV por quase dois anos antes de receber luz verde para o piloto de Teen Wolf. A emissora estava hesitante em apostar no drama sobrenatural.'},
  {n:'Fato 7 / 12',t:'Teen Wolf foi filmado quase inteiramente em Los Angeles, mas toda a pesquisa de locações para a floresta foi feita em Malibu Creek State Park, ao norte de Calabasas.'},
  {n:'Fato 8 / 12',t:"Ian Bohen (Peter Hale) foi o único ator secundário a aparecer em todas as 6 temporadas além do trio principal Tyler Posey, Holland Roden e Dylan O'Brien."},
  {n:'Fato 9 / 12',t:'Playlists de "Teen Wolf Soundtrack" no Spotify chegam a mais de 5 milhões de streams acumulados, especialmente das temporadas 3 e 4.'},
  {n:'Fato 10 / 12',t:'Os efeitos de maquiagem para as transformações dos lobisomens levavam entre 3 e 5 horas para serem aplicados. Tyler Posey chegou a dormir na cadeira de maquiagem antes das filmagens.'},
  {n:'Fato 11 / 12',t:'Beacon Hills foi parcialmente inspirada em cidades reais do norte da Califórnia. Jeff Davis cresceu perto de Sacramento e quis criar uma cidade americana "normal" com um segredo sobrenatural.'},
  {n:'Fato 12 / 12',t:'O filme Teen Wolf: The Movie (2023) foi desenvolvido por Jeff Davis como homenagem aos fãs que mantiveram a série viva por mais de uma década nas redes sociais.'}
];

/* ── STATE ── */
let factIdx = 0;

/* ── INIT ── */
/* FIX: uma única função initPage sem redeclaração problemática */
function initPage() {
  if (document.getElementById('aboutCards')) buildIndex();
  if (document.getElementById('quizMain'))   { buildQuizPage(); loadQuiz('trivia'); }
  if (document.getElementById('tcinCards'))  buildTcinTimeline();
  if (document.getElementById('quotesGrid')) buildQuotes();
}

/* ── INDEX BUILDERS ── */
function buildIndex() {
  buildAbout();
  buildTimeline();
  buildChars();
  buildBast();
  buildDiary();
  buildMap();
  buildEggs();
  renderFact();
  buildHeroGrid();
  buildTcinTimeline();
  buildQuotes();
  window.addEventListener('scroll', navScroll);
}

function buildQuizPage() {
  window.addEventListener('scroll', navScroll);
}

function buildAbout() {
  const el = document.getElementById('aboutCards');
  if (!el) return;
  el.innerHTML = ABOUT.map(c => `
    <div class="card-item"><div class="ci-icon">${c.icon}</div>
    <h3>${c.title}</h3><p>${c.body}</p><span class="ci-tag">${c.tag}</span></div>`).join('');
}

function buildTimeline() {
  const el = document.getElementById('timeline');
  if (!el) return;
  el.innerHTML = TIMELINE.map(i => `
    <div class="tl-item"><div class="tl-y">${i.y}</div><h4>${i.t}</h4><p>${i.p}</p></div>`).join('');
}

function buildChars() {
  const el = document.getElementById('charGrid');
  if (!el) return;
  el.innerHTML = CHARS.map((c, i) => {
    const img = CHAR_IMGS[c.n];
    return `<div class="char-card" onclick="toggleChar(${i})" id="cc${i}">
      ${img ? `<div class="ch-photo"><img src="${img}" alt="${c.n}" loading="lazy"/></div>` : `<div class="ch-av">${c.av}</div>`}
      <div class="ch-name">${c.n}</div>
      <div class="ch-role">${c.r}</div>
      <span class="ch-power">${c.pw}</span>
      <div class="ch-detail"><div class="ch-detail-inner">${c.d}</div></div>
    </div>`;
  }).join('');
}

function toggleChar(i) {
  document.getElementById('cc' + i).classList.toggle('open');
}

function buildBast() {
  const el = document.getElementById('bastGrid');
  if (!el) return;
  el.innerHTML = BAST.map(b => {
    const img = b.actor && ACTOR_IMGS[b.actor];
    return `<div class="bast-card">
      ${img ? `<div class="bast-photo"><img src="${img}" alt="${b.t}" loading="lazy"/></div>` : ''}
      <div class="bast-info">${!img ? `<div class="bast-num">${b.n}</div>` : ''}
      <h3>${b.t}</h3><p>${b.p}</p><span class="bast-tag">${b.tag}</span></div>
    </div>`;
  }).join('');
}

function buildDiary() {
  const el = document.getElementById('diaryFeed');
  if (!el) return;
  el.innerHTML = DIARY.map(d => `
    <div class="di-entry">
      <div class="di-meta"><div class="di-av">${d.av}</div>
      <div><div class="di-who">${d.who}</div><div class="di-date">${d.date}</div></div></div>
      <blockquote class="di-quote">${d.quote}</blockquote>
      <div class="di-body">${d.body}</div>
    </div>`).join('');
}

function buildMap() {
  const el = document.getElementById('mapPins');
  if (!el) return;
  el.innerHTML = MAP_PINS.map(p => `
    <div class="map-pin" style="left:${p.x}%;top:${p.y}%" onclick="showPopup('${p.id}',event)">
      <div class="pin-dot" style="color:${p.c};background:${p.c}33"></div>
      <div class="pin-label">${p.l}</div>
    </div>`).join('');
}

function showPopup(id, e) {
  const p = MAP_PINS.find(x => x.id === id);
  const popup = document.getElementById('mapPopup');
  const rect = document.getElementById('mapArea').getBoundingClientRect();
  const pinRect = e.currentTarget.getBoundingClientRect();
  popup.style.left = (pinRect.left - rect.left) + 'px';
  popup.style.top  = (pinRect.top  - rect.top + 20) + 'px';
  document.getElementById('popTitle').textContent = p.t;
  document.getElementById('popBody').textContent  = p.b;
  popup.classList.add('show');
  e.stopPropagation();
}

function closePopup() { document.getElementById('mapPopup').classList.remove('show'); }
document.addEventListener('click', closePopup);

function buildEggs() {
  const el = document.getElementById('eggGrid');
  if (!el) return;
  el.innerHTML = EGGS.map(e => `
    <div class="card-item"><div class="ci-icon">${e.icon}</div>
    <h3>${e.title}</h3><p>${e.body}</p></div>`).join('');
}

function renderFact() {
  const numEl  = document.getElementById('factNum');
  const textEl = document.getElementById('factText');
  if (!numEl || !textEl) return;
  numEl.textContent  = FACTS[factIdx].n;
  textEl.textContent = FACTS[factIdx].t;
}

function nextFact() { factIdx = (factIdx + 1) % FACTS.length; renderFact(); }
function prevFact() { factIdx = (factIdx - 1 + FACTS.length) % FACTS.length; renderFact(); }

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
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 10);
  const sections = ['home','serie','timeline-exp','timeline-cinema','personagens','bastidores','diario','mapa','curiosidades','frases','contato'];
  let cur = 'home';
  sections.forEach(s => {
    const el = document.getElementById(s);
    if (el && window.scrollY >= el.offsetTop - 100) cur = s;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active',
      a.getAttribute('href') === '#' + cur ||
      (a.getAttribute('href') === 'quizzes.html' && cur === 'quizzes')
    );
  });
}

function toggleMenu() { document.getElementById('mob-menu').classList.toggle('open'); }
function cm() { document.getElementById('mob-menu').classList.remove('open'); }

function toggleTheme() {
  const html   = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeBtn').textContent = isDark ? 'Dark' : 'Light';
}

/* ── CUSTOM CURSOR ──
   FIX: o elemento já existe no HTML — apenas movemos e alternamos .active.
   Não criamos o elemento via JS para evitar duplicação.
─────────────────────────────────────────────── */
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  if (!cursor) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

function bindCursorHover() {
  document.querySelectorAll('a, button, .char-card, .card-item, .map-pin').forEach(el => {
    el.addEventListener('mouseenter', () => cursor && cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('active'));
  });
}

window.addEventListener('load', bindCursorHover);

/* ══════════════════════════════════════════════════
   TIMELINE CINEMATOGRÁFICA
══════════════════════════════════════════════════ */

const TCIN_DATA = [
  {
    season: 'Temporada 1',
    year: '2011',
    emoji: '🌕',
    gradStart: '#1a0a00',
    gradEnd: '#2a1000',
    title: 'A Mordida que Mudou Tudo',
    threat: '⚠ Ameaça: O Alfa',
    desc: 'Scott McCall é mordido na floresta por um lobisomem Alfa desconhecido. Em segundos, sua vida ordinária em Beacon Hills se transforma para sempre. Stiles, seu melhor amigo, mergulha junto no caos sobrenatural.',
    chars: ['Scott McCall', 'Stiles Stilinski', 'Allison Argent', 'Derek Hale', 'Lydia Martin', 'O Alfa'],
    highlight: '"Nenhum monstro nasce monstro — algo o transforma." A T1 estabelece o tom moral de toda a série.'
  },
  {
    season: 'Temporada 2',
    year: '2012',
    emoji: '🐍',
    gradStart: '#001a0a',
    gradEnd: '#00150a',
    title: 'O Kanima Desperta',
    threat: '⚠ Ameaça: Kanima',
    desc: 'Uma criatura serpentina com veneno paralisante aterroriza Beacon Hills. Jackson Whittemore descobre que sua transformação deu errado — ele não é um lobisomem, mas algo mais antigo e sombrio. Os segredos mortais da família Argent vêm à tona.',
    chars: ['Scott', 'Stiles', 'Derek', 'Jackson', 'Allison', 'Gerard Argent'],
    highlight: 'O Kanima só existe quando alguém não consegue aceitar a si mesmo — uma das metáforas mais ricas da série.'
  },
  {
    season: 'Void Stiles',
    year: '2013',
    emoji: '👁',
    gradStart: '#0a000a',
    gradEnd: '#150015',
    title: 'O Nogitsune Toma Controle',
    threat: '⚠ Ameaça: Nogitsune',
    desc: "Um espírito demoníaco japonês — o Nogitsune — possui o corpo de Stiles. O único humano da matilha se torna a maior ameaça que Beacon Hills já enfrentou. Dylan O'Brien entrega a performance mais aclamada de toda a série em cenas duplas memoráveis.",
    chars: ['Stiles / Nogitsune', 'Scott', 'Lydia', 'Allison', 'Oni', 'Kira Yukimura'],
    highlight: '"Chaos has come again." — A frase que define o arco mais sombrio e premiado da série, T3B.'
  },
  {
    season: 'Temporada 4',
    year: '2014',
    emoji: '💀',
    gradStart: '#1a1000',
    gradEnd: '#150c00',
    title: 'Deadpool — Preço por Cabeça',
    threat: '⚠ Ameaça: O Deadpool',
    desc: 'Uma lista cifrada de sobrenaturais com preços em dólares circula pela cidade. Kate Argent retorna transformada em Werejaguar. Berserkers astecas dominam o arsenal de La Iglesia. Dinheiro e vingança se tornam as maiores ameaças.',
    chars: ['Scott', 'Derek', 'Liam Dunbar', 'Malia Tate', 'Kate Argent', 'Peter Hale'],
    highlight: 'A T4 introduz Liam — o primeiro Beta transformado por Scott — e aprofunda o legado da família Hale.'
  },
  {
    season: 'Dread Doctors',
    year: '2015',
    emoji: '⚗️',
    gradStart: '#001015',
    gradEnd: '#000d12',
    title: 'Experimentos Proibidos',
    threat: '⚠ Ameaça: Dread Doctors',
    desc: 'Cientistas sobrenaturais com capacetes vitorianos criam "quimeras" — humanos com DNA de duas criaturas implantado à força. A maioria não sobrevive ao processo. Theo Raeken infiltra a matilha para os Doutores, dividindo o grupo.',
    chars: ['Scott', 'Stiles', 'Lydia', 'Liam', 'Theo Raeken', 'Dread Doctors'],
    highlight: 'A divisão da matilha na T5 é considerada o arco mais tenso da série — a confiança entre os personagens chega ao limite.'
  },
  {
    season: 'Ghost Riders',
    year: '2016–17',
    emoji: '🌪',
    gradStart: '#050510',
    gradEnd: '#08081a',
    title: 'O Caçador Selvagem Apaga Stiles',
    threat: '⚠ Ameaça: Wild Hunt',
    desc: 'Os Ghost Riders da Wild Hunt apagam Stiles da realidade. Todos que o amavam esquecem que ele existiu. Scott, Lydia e Malia lutam contra memórias apagadas para salvar o melhor amigo que não conseguem lembrar. O retorno de Stiles é um dos momentos mais emocionantes da TV dos anos 2010.',
    chars: ['Stiles', 'Scott', 'Lydia', 'Malia', 'Ghost Riders', 'Liam'],
    highlight: '"Só me lembro de que havia algo — mas não consigo lembrar o quê." O esquecimento como horror psicológico.'
  }
];

let tcinIdx = 0;

function buildTcinTimeline() {
  const container = document.getElementById('tcinCards');
  const dots = document.getElementById('tcinDots');
  if (!container || !dots) return;

  container.innerHTML = TCIN_DATA.map((d, i) => `
    <div class="tcin-card ${i === 0 ? 'active' : ''}" id="tcinCard${i}">
      <div class="tcin-visual">
        <div class="tcin-visual-bg" style="background:linear-gradient(135deg,${d.gradStart},${d.gradEnd})">
          <span style="filter:drop-shadow(0 0 30px rgba(200,68,10,.4))">${d.emoji}</span>
        </div>
        <div class="tcin-visual-overlay">
          <div class="tcin-season-label">${d.season}</div>
          <div class="tcin-year">${d.year}</div>
        </div>
      </div>
      <div class="tcin-info">
        <div class="tcin-threat-badge">${d.threat}</div>
        <h3 class="tcin-title">${d.title}</h3>
        <p class="tcin-desc">${d.desc}</p>
        <div>
          <div class="tcin-chars-title">Personagens envolvidos</div>
          <div class="tcin-chars-list">
            ${d.chars.map(c => `<span class="tcin-char-chip">${c}</span>`).join('')}
          </div>
        </div>
        <div class="tcin-highlight">${d.highlight}</div>
      </div>
    </div>
  `).join('');

  dots.innerHTML = TCIN_DATA.map((_, i) =>
    `<div class="tcin-dot ${i === 0 ? 'active' : ''}" onclick="tcinGoTo(${i})"></div>`
  ).join('');

  tcinUpdateProgress();
}

function tcinUpdateProgress() {
  const fill = document.getElementById('tcinFill');
  if (fill) {
    fill.style.width = ((tcinIdx / (TCIN_DATA.length - 1)) * 100) + '%';
  }
  document.querySelectorAll('.tcin-dot').forEach((d, i) => {
    d.classList.toggle('active', i === tcinIdx);
  });
  const bg = document.getElementById('tcinBg');
  if (bg) {
    const d = TCIN_DATA[tcinIdx];
    bg.style.background = `radial-gradient(ellipse 60% 60% at 50% 40%, ${d.gradEnd}80, transparent 70%)`;
  }
}

function tcinGoTo(idx) {
  if (idx === tcinIdx) return;
  const prev = document.getElementById('tcinCard' + tcinIdx);
  const next = document.getElementById('tcinCard' + idx);
  if (!prev || !next) return;

  const goingRight = idx > tcinIdx;

  prev.classList.remove('active');
  prev.classList.add(goingRight ? 'exit-left' : 'exit-right');

  next.style.transform = `translateX(${goingRight ? '60px' : '-60px'})`;
  next.style.opacity = '0';
  next.classList.add('active');

  requestAnimationFrame(() => {
    next.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(.16,1,.3,1)';
    next.style.transform = 'translateX(0)';
    next.style.opacity = '1';
  });

  setTimeout(() => {
    prev.classList.remove('exit-left', 'exit-right');
    prev.style.transform = '';
    prev.style.opacity = '';
  }, 650);

  tcinIdx = idx;
  tcinUpdateProgress();
}

function tcinGo(dir) {
  const next = (tcinIdx + dir + TCIN_DATA.length) % TCIN_DATA.length;
  tcinGoTo(next);
}

document.addEventListener('keydown', e => {
  const section = document.getElementById('timeline-cinema');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const inView = rect.top < window.innerHeight && rect.bottom > 0;
  if (!inView) return;
  if (e.key === 'ArrowRight') tcinGo(1);
  if (e.key === 'ArrowLeft')  tcinGo(-1);
});

/* ══════════════════════════════════════════════════
   FRASES ICÔNICAS
══════════════════════════════════════════════════ */

const QUOTES_DATA = [
  {en:'We protect those who cannot protect themselves.',pt:'Protegemos aqueles que não conseguem se proteger.',char:'Allison',season:'Código dos Argent'},
  {en:'Be your own anchor.',pt:'Seja sua própria âncora.',char:'Derek',season:'Temporada 3'},
  {en:'Not all monsters do monstrous things.',pt:'Nem todos os monstros fazem coisas monstruosas.',char:'Lydia',season:'Temporada 3'},
  {en:'Chaos has come again.',pt:'O caos voltou.',char:'Stiles',season:'Void Stiles — T3B'},
  {en:"I'm still figuring out this whole wolf thing.",pt:'Ainda estou descobrindo essa coisa toda de lobisomem.',char:'Scott',season:'Temporada 1'},
  {en:'Everyone has a story. This is yours.',pt:'Todo mundo tem uma história. Essa é a sua.',char:'Deaton',season:'Emissário'},
  {en:"I'm the alpha. I'm always the alpha.",pt:'Sou o Alfa. Sempre serei o Alfa.',char:'Peter',season:'Temporada 1'},
  {en:'The only way you get through hell is to keep moving.',pt:'A única forma de atravessar o inferno é continuar em movimento.',char:'Stiles',season:'Temporada 5'}
];

function buildQuotes() {
  const grid = document.getElementById('quotesGrid');
  if (!grid) return;

  grid.innerHTML = QUOTES_DATA.map((q, i) => `
    <div class="quote-card" data-char="${q.char}" data-idx="${i}">
      <div class="quote-mark">"</div>
      <div class="quote-text-en">${q.en}</div>
      <div class="quote-text-pt">${q.pt}</div>
      <div class="quote-char">${q.char} &nbsp;·&nbsp; ${q.season}</div>
      <div class="quote-actions">
        <button class="quote-btn" onclick="copyQuote(${i}, this)" title="Copiar frase">📋 Copiar</button>
        <button class="quote-btn" onclick="downloadQuote(${i})" title="Baixar como imagem">⬇ Imagem</button>
        <button class="quote-btn" onclick="shareQuote(${i})" title="Compartilhar">↗ Share</button>
      </div>
    </div>
  `).join('');

  /* FIX: toast container — evita criar duplicado se já existir */
  if (!document.getElementById('quoteToast')) {
    const toast = document.createElement('div');
    toast.id = 'quoteToast';
    toast.className = 'quote-toast';
    document.body.appendChild(toast);
  }
}

function showToast(msg) {
  const t = document.getElementById('quoteToast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

function copyQuote(idx, btn) {
  const q = QUOTES_DATA[idx];
  const text = `"${q.en}"\n— ${q.char}, Teen Wolf\n\n"${q.pt}"`;
  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    btn.textContent = '✓ Copiado';
    showToast('Frase copiada! 🐺');
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.textContent = '📋 Copiar';
    }, 2000);
  }).catch(() => showToast('Erro ao copiar'));
}

function downloadQuote(idx) {
  const q = QUOTES_DATA[idx];
  const canvas = document.getElementById('quoteCanvas');
  if (!canvas) return;

  const W = 900, H = 500;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#0d0c0a');
  bg.addColorStop(1, '#1c1510');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = 'rgba(200,68,10,.4)';
  ctx.lineWidth = 2;
  ctx.strokeRect(28, 28, W - 56, H - 56);

  const lg = ctx.createLinearGradient(28, 28, W - 28, 28);
  lg.addColorStop(0, '#c8440a');
  lg.addColorStop(1, '#e8b860');
  ctx.strokeStyle = lg;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(28, 28); ctx.lineTo(W - 28, 28);
  ctx.stroke();

  ctx.font = '900 140px Georgia, serif';
  ctx.fillStyle = 'rgba(200,68,10,.12)';
  ctx.fillText('"', 50, 170);

  ctx.font = 'italic 700 32px Georgia, serif';
  ctx.fillStyle = '#f0ead8';
  ctx.textAlign = 'center';
  wrapText(ctx, `"${q.en}"`, W / 2, 210, W - 140, 44);

  ctx.font = 'italic 400 20px Georgia, serif';
  ctx.fillStyle = '#6a6050';
  ctx.textAlign = 'center';
  wrapText(ctx, q.pt, W / 2, 340, W - 140, 30);

  ctx.font = '700 14px monospace';
  ctx.fillStyle = '#c8440a';
  ctx.textAlign = 'center';
  ctx.fillText(`— ${q.char.toUpperCase()}  ·  ${q.season.toUpperCase()}  ·  TEEN WOLF`, W / 2, H - 55);

  ctx.font = '400 11px monospace';
  ctx.fillStyle = 'rgba(255,255,255,.15)';
  ctx.fillText('BEACON HILLS — TEEN WOLF FÃS', W / 2, H - 32);

  const link = document.createElement('a');
  link.download = `teenwolf-frase-${idx + 1}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('Imagem baixada! 🎬');
}

function wrapText(ctx, text, x, y, maxW, lineH) {
  const words = text.split(' ');
  let line = '';
  let curY = y;
  words.forEach(word => {
    const test = line + word + ' ';
    if (ctx.measureText(test).width > maxW && line !== '') {
      ctx.fillText(line, x, curY);
      line = word + ' ';
      curY += lineH;
    } else {
      line = test;
    }
  });
  ctx.fillText(line, x, curY);
}

function shareQuote(idx) {
  const q = QUOTES_DATA[idx];
  const text = `"${q.en}" — ${q.char}, Teen Wolf`;
  if (navigator.share) {
    navigator.share({ title: 'Teen Wolf Fãs', text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text);
    showToast('Link copiado para compartilhar! 🐺');
  }
}

/* ── INICIALIZAÇÃO ÚNICA ── */
/* FIX: removida a redeclaração de initPage que causava override */
window.addEventListener('load', initPage);
