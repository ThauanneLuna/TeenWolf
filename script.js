/* ══════════════════════════════════════════
   TEEN WOLF FÃS — script.js  (CORRIGIDO)
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

const QUIZZES = {
  trivia:{title:'Trivia Completo',chip:'chip-h',chipLabel:'História Geral',qs:[
    {q:'Em qual temporada o Nogitsune aparece como antagonista principal?',hint:'Ele é um espírito kitsune japonês que possui um personagem central.',opts:['T2','T3A','T3B','T4'],ans:2,ex:'O Nogitsune aparece na T3B — considerada a melhor temporada da série pela crítica e pelos fãs. Seu arco com Stiles é um dos mais complexos já escritos para uma série da MTV.'},
    {q:'O que representa a cor azul dos olhos de um lobisomem?',hint:'A cor padrão é amarela; o azul tem um significado moral muito específico.',opts:['Força máxima de Alfa','Matou um inocente','Descendência pura Hale','Iniciou a transformação'],ans:1,ex:'Na mitologia da série, olhos azuis indicam que o lobisomem tirou a vida de um inocente. Por isso Derek tem olhos azuis desde jovem — ele matou sua namorada Paige por misericórdia.'},
    {q:'Qual é a árvore sagrada que serve como nexo de poder em Beacon Hills?',opts:['Yggdrasil','Nemeton','Querquetulanae','Arbor Mundi'],ans:1,ex:'O Nemeton é a árvore druídica sacrificial no coração da floresta. Sua energia atrai criaturas sobrenaturais para Beacon Hills há séculos.'},
    {q:'Quem é a Banshee principal da série?',hint:'Ela começa a série como a "popular" da escola.',opts:['Meredith Walker','Lorraine Martin','Jennifer Blake','Lydia Martin'],ans:3,ex:'Lydia Martin é a Banshee principal, embora só descubra seus poderes completamente na T3. Seus poderes são herdados da avó Lorraine Martin.'},
    {q:'Qual animal é associado a uma Kitsune no folclore japonês?',opts:['Lobo','Corvo','Raposa','Cobra'],ans:2,ex:'Kitsune (狐) significa "raposa" em japonês. São criaturas sobrenaturais com poderes mágicos e múltiplas caudas — o número de caudas indica a idade e o poder.'},
    {q:'Em qual cidade americana Teen Wolf foi principalmente filmado?',opts:['Nova York','Atlanta','Los Angeles','Chicago'],ans:2,ex:'Teen Wolf foi quase inteiramente filmado em Los Angeles, Califórnia. A floresta de Beacon Hills é na verdade o Malibu Creek State Park.'},
    {q:'Quantas temporadas a série original de Teen Wolf possui?',opts:['4','5','6','7'],ans:2,ex:'Teen Wolf teve 6 temporadas exibidas entre 2011 e 2017 na MTV, totalizando 100 episódios.'},
    {q:'O que é o "Deadpool" que aparece na T4?',opts:['Um torneio entre matilhas','Uma lista de preços de sobrenaturais para matar','Um veneno que mata lobisomens','Um código de caçadores'],ans:1,ex:'O Deadpool é uma lista cifrada com nomes de sobrenaturais de Beacon Hills e seus preços — circulada por um computador controlado pela Banshee Meredith Walker.'},
    {q:'O que distingue um "Alfa Verdadeiro" dos outros Alfas?',opts:['Nasce com poderes maiores','Conquistou o poder pela força de caráter','Matou o maior número de inimigos','Descendente da linhagem Hale'],ans:1,ex:'Alfa Verdadeiro é alguém que se torna Alfa pela força de caráter e determinação, sem precisar matar outro Alfa — Scott é o primeiro em séculos.'},
    {q:'O que é um "Kanima" segundo a série?',opts:['Um lobo albino sobrenatural','Uma criatura serpentina que serve um mestre','Um druida corrompido','Um fantasma animal'],ans:1,ex:'O Kanima é uma mutação do lobisomem que ocorre quando o ser não consegue aceitar sua própria natureza. Sempre age sob controle de um mestre humano.'},
    {q:'Qual personagem é capturado pelo Caçador Selvagem na T6?',opts:['Scott','Derek','Lydia','Stiles'],ans:3,ex:'Stiles é apagado da realidade pelo Caçador Selvagem (Wild Hunt) no início da T6. Todos que o conheciam esquecem que ele existiu.'},
    {q:'Qual é a principal ameaça na T6B?',opts:['O Caçador Selvagem retorna','Dread Doctors evoluídos','Caçadores humanos organizados','Um novo Alfa invasor'],ans:2,ex:'A T6B foca em caçadores humanos modernos liderados por Monroe — uma alegoria sobre ódio e perseguição a minorias.'},
    {q:'O que os "Dread Doctors" fazem na T5?',opts:['Caçam Alfas','Ressuscitam mortos','Criam quimeras sobrenaturais','Tentam destruir o Nemeton'],ans:2,ex:'Os Dread Doctors criam "quimeras" — humanos com DNA de duas criaturas diferentes implantados artificialmente. A maioria não sobrevive ao processo.'},
    {q:'Qual é o papel de um "Emissário" numa matilha?',opts:['Guerreiro de elite','Conselheiro druídico','Espião de outras matilhas','Guardião dos filhotes'],ans:1,ex:'Um Emissário é um druida que serve como conselheiro de uma matilha, oferecendo conhecimento ancestral e equilíbrio. Alan Deaton é o Emissário da matilha McCall.'},
    {q:'O que são os "Oni" que aparecem na T3B?',opts:['Lobisomens orientais','Demônios japoneses que caçam o Nogitsune','Guardiões do Nemeton','Kitsunes corrompidos'],ans:1,ex:'Os Oni são demônios guerreiros da mitologia japonesa que caçam o Nogitsune. Apenas o aço da montanha os destrói.'},
    {q:'Qual personagem se infiltra na matilha como antagonista principal na T5?',opts:['Corey','Garrett','Mason','Theo Raeken'],ans:3,ex:'Theo Raeken se infiltra fingindo ser um amigo de infância de Scott. Ele trabalha para os Dread Doctors e manipula sistematicamente cada membro da matilha durante toda a T5.'},
    {q:'O que acontece com Derek ao final da série (T6)?',opts:['Morre em batalha','Se torna completamente humano','Transforma-se em lobo negro completo','Desaparece sem explicação'],ans:2,ex:'Na cena final da T6, Derek é visto transformado em um lobo negro completo — revelando que atingiu um nível de controle e poder raramente visto em lobisomens.'},
    {q:'Qual canal exibiu Teen Wolf originalmente nos EUA?',opts:['The CW','Fox','MTV','ABC Family'],ans:2,ex:'Teen Wolf foi uma produção original da MTV, exibida entre 2011 e 2017.'},
    {q:'Por que Stiles é fundamental para a matilha apesar de ser humano?',opts:['Tem poderes latentes','Sua inteligência e pesquisa salvam a matilha repetidamente','É o líder emocional do grupo','Conhece todos os segredos de Beacon Hills'],ans:1,ex:'Stiles é o estrategista e pesquisador da matilha. Em inúmeros episódios, sua inteligência e dedicação à pesquisa salvam situações que os poderes sobrenaturais sozinhos não resolveriam.'},
    {q:'Em que ano o filme Teen Wolf: The Movie foi lançado?',opts:['2021','2022','2023','2024'],ans:2,ex:'Teen Wolf: The Movie foi lançado no Paramount+ em janeiro de 2023.'}
  ]},
  personagens:{title:'Personagens',chip:'chip-p',chipLabel:'Personagens',qs:[
    {q:'Scott McCall se torna qual tipo raro de Alfa?',opts:['Alfa Genético','Alfa Verdadeiro','Alfa de Sangue','Alfa Solitário'],ans:1,ex:'Scott é um Alfa Verdadeiro — conquista o poder pela força de caráter, não por matar outro Alfa.'},
    {q:'Qual é o nome completo de Stiles Stilinski?',opts:['Władysław','Mieczysław','Stanisław','Bogusław'],ans:1,ex:'Mieczysław é um nome polonês. Toda a série trata isso como uma piada recorrente e intencional.'},
    {q:'Lydia Martin é que tipo de ser sobrenatural?',opts:['Kitsune','Werecoyote','Banshee','Druida'],ans:2,ex:'Lydia é uma Banshee — capaz de prever mortes e sentir o sobrenatural. Seus poderes são herdados da avó Lorraine Martin.'},
    {q:'Por que os olhos de Derek Hale são azuis?',opts:['Ele é um Alfa','Matou um inocente','Nasceu assim','Perdeu os poderes'],ans:1,ex:'Derek matou sua namorada adolescente Paige por misericórdia — ela estava morrendo de uma transformação mal-sucedida.'},
    {q:'Kira Yukimura é que tipo de Kitsune?',opts:['Kitsune de Fogo','Kitsune Trovão','Kitsune das Sombras','Kitsune da Cura'],ans:1,ex:'Kira é uma Kitsune Trovão, capaz de gerar e manipular eletricidade.'},
    {q:'Qual personagem passou anos como coiote antes de retornar à forma humana?',opts:['Kira','Allison','Malia','Cora'],ans:2,ex:'Malia Tate passou 8 anos como coiote após um acidente. Scott a ajuda a retornar à forma humana na T3B.'},
    {q:'Allison Argent morre em qual temporada?',opts:['T2','T3A','T3B','T4'],ans:2,ex:'Allison morre heroicamente no final da T3B, durante a batalha contra os Oni controlados pelo Nogitsune.'},
    {q:'Quem transforma Liam Dunbar em lobisomem?',opts:['Derek Hale','Peter Hale','Scott McCall','Deucalion'],ans:2,ex:'Scott morde Liam para salvá-lo de uma queda fatal no começo da T4.'},
    {q:'Qual personagem é chamado de "Daemon Machina"?',opts:['Peter Hale','Deucalion','Gerard Argent','The Beast'],ans:1,ex:'Deucalion é chamado de "Daemon Machina" — um Alfa que incorporou os poderes de seus próprios betas ao matá-los.'},
    {q:'Qual personagem se infiltra na matilha na T5 como antagonista?',opts:['Theo Raeken','Garrett','Mason','Corey'],ans:0,ex:'Theo Raeken se infiltra fingindo ser amigo de infância de Scott.'},
    {q:'Chris Argent adota o código de caçador de qual personagem?',opts:['Victoria Argent','Gerard Argent','Allison Argent','Kate Argent'],ans:2,ex:'Após a morte de Allison, Chris adota o novo código que ela criou: "Proteger aqueles que não podem se proteger".'},
    {q:'Qual personagem revela ser Banshee desde a T1?',opts:['Malia','Kira','Lydia','Meredith'],ans:2,ex:'Lydia é apresentada como humana na T1, mas seu grito sobrenatural já aparece em momentos de trauma.'}
  ]},
  sobrenatural:{title:'Mundo Sobrenatural',chip:'chip-s',chipLabel:'Sobrenatural',qs:[
    {q:'Quais são as fraquezas dos lobisomens na série?',hint:'A série reinventou as fraquezas clássicas.',opts:['Prata e luz solar','Montanha de cinza e Elleboro','Alho e água corrente','Prata e fogo sagrado'],ans:1,ex:'A série reinventou as fraquezas: montanha de cinza inibe os poderes e Elleboro (wolfsbane) é venenoso. Prata não funciona.'},
    {q:'O que é um "Werecoyote" segundo a série?',opts:['Um lobo-coiote híbrido','Um humano com poderes sobrenaturais de coiote','Um espírito animal coiote','Um druida que se transforma'],ans:1,ex:'Um Werecoyote é um humano com capacidade sobrenatural de se transformar em coiote. Malia Tate é o exemplo mais proeminente.'},
    {q:'O que é um "Emissário" em uma matilha?',opts:['Guerreiro de elite','Conselheiro druídico humano','Explorador sobrenatural','Guardião das crianças'],ans:1,ex:'Um Emissário é um druida que serve como conselheiro, oferecendo conhecimento e equilíbrio.'},
    {q:'O que distingue um Alfa Verdadeiro?',opts:['Nasce com poderes maiores','Conquista o poder pela força de caráter','Matou o maior número de inimigos','Descendente de linhagem ancestral'],ans:1,ex:'Alfa Verdadeiro conquista o status pelo caráter e determinação, sem precisar matar outro Alfa.'},
    {q:'O que faz o Caçador Selvagem com suas vítimas?',opts:['Devora suas almas','Apaga pessoas da realidade e da memória de todos','Transforma em fantasmas','Prende em dimensão paralela'],ans:1,ex:'O Caçador Selvagem apaga pessoas da realidade — elas desaparecem e todos que as conheciam esquecem que existiram.'},
    {q:'Qual é o papel de um Druida na série?',opts:['Caçar sobrenaturais','Manter o equilíbrio entre mundos natural e sobrenatural','Criar novas criaturas','Proteger o Nemeton com força física'],ans:1,ex:'Druidas na série atuam como guardiões do equilíbrio entre o mundo natural e sobrenatural.'},
    {q:'Como os Berserkers são criados na T4?',opts:['Ritual com sangue de Alfa','Fusão com ossos de urso através de magia asteca','Experimento dos Dread Doctors','Mordida do Kanima'],ans:1,ex:'Berserkers são criados através de um ritual de magia asteca com ossos de urso — a vítima perde a humanidade gradualmente.'},
    {q:'O que é uma "Quimera" no contexto da T5?',opts:['Um lobisomem de duas raças','Um humano com DNA de duas criaturas sobrenaturais implantado artificialmente','Um híbrido Kitsune-Banshee','Um sobrenatural sem matilha'],ans:1,ex:'Uma Quimera é um humano submetido a experimentos pelos Dread Doctors para receber DNA de duas criaturas diferentes.'},
    {q:'O que o Kanima possui de especial em suas garras?',opts:['Fogo sobrenatural','Veneno paralisante','Força multiplicada','Ácido que dissolve metais'],ans:1,ex:'O Kanima possui um veneno paralisante em suas garras.'},
    {q:'O que o símbolo Triskelion representa para os Hale?',opts:['Poder, velocidade e força','Alfa, Beta e Ômega','Passado, presente e futuro','Vida, morte e renascimento'],ans:1,ex:'O Triskelion da família Hale representa Alfa, Beta e Ômega — os três status de um lobisomem.'}
  ]},
  bastidores:{title:'Bastidores',chip:'chip-b',chipLabel:'Behind the Scenes',qs:[
    {q:'Onde foi filmada a "Beacon Hills High School"?',opts:['Universal Studios','Portola Middle School em Tarzana, LA','UCLA Campus','Santa Monica High School'],ans:1,ex:'A escola da série é na verdade a Portola Middle School em Tarzana, Los Angeles.'},
    {q:'Tyler Hoechlin saiu da série em qual temporada?',opts:['T3','T4','T5','T6'],ans:1,ex:'Tyler Hoechlin deixou o papel regular de Derek Hale na T4, por decisão própria.'},
    {q:'Qual ator sofreu um acidente grave durante outro projeto?',opts:['Tyler Posey','Holland Roden',"Dylan O'Brien",'Crystal Reed'],ans:2,ex:"Dylan O'Brien sofreu um grave acidente no set de Maze Runner: A Cura em 2016, atrasando a produção da T6."},
    {q:'Onde foi filmada a floresta de Beacon Hills?',opts:['Sequoia National Park','Malibu Creek State Park','Griffith Park','Santa Monica Mountains'],ans:1,ex:'A floresta de Beacon Hills foi filmada principalmente no Malibu Creek State Park, ao norte de Calabasas.'},
    {q:'Holland Roden tem qual formação acadêmica?',opts:['Teatro e Artes Cênicas','Biologia Molecular','Psicologia','Jornalismo'],ans:1,ex:'Holland Roden estudou Biologia Molecular na UCLA antes de se dedicar à atuação.'},
    {q:'Jeff Davis precisou convencer a MTV por quanto tempo?',opts:['6 meses','1 ano','Quase 2 anos','3 anos'],ans:2,ex:'Jeff Davis negociou com a MTV por quase dois anos antes de receber a aprovação para o piloto.'},
    {q:'Qual foi o único ator secundário presente em todas as 6 temporadas?',opts:['Melissa McCall','Chris Argent','Peter Hale (Ian Bohen)','Coach Finstock'],ans:2,ex:'Ian Bohen, que interpreta Peter Hale, foi o único ator recorrente a aparecer em todas as 6 temporadas.'},
    {q:'Quanto tempo levava a maquiagem das transformações?',opts:['30 minutos','1 hora','3 a 5 horas','8 horas'],ans:2,ex:'As transformações dos lobisomens levavam entre 3 e 5 horas de maquiagem prostética por dia.'},
    {q:'Qual artista NÃO está na trilha de Teen Wolf?',opts:['Hozier','Daughter','Of Monsters and Men','Billie Eilish'],ans:3,ex:'Billie Eilish não é associada à trilha de Teen Wolf. Os outros três artistas são icônicos da série.'},
    {q:'Crystal Reed pediu para sair por qual motivo?',opts:['Conflito com a produção','Queria explorar novos papéis','Lesão durante gravação','Contrato não renovado'],ans:1,ex:'Crystal Reed pediu voluntariamente para sair ao fim da T3A, querendo explorar novos personagens e projetos.'}
  ]},
  char:{
    title:'Qual Personagem Você É?',
    questions:[
      {q:'Diante de um perigo iminente, sua primeira reação é:',opts:['Entrar na frente e proteger todos','Pesquisar rapidamente qual a fraqueza do inimigo','Sentir que algo ruim está por vir antes de ver','Agir por instinto puro, sem pensar']},
      {q:'Qual é sua maior força?',opts:['Empatia e liderança natural','Inteligência e raciocínio lógico','Intuição e sensibilidade','Instinto e determinação']},
      {q:'Como você lida com seus medos?',opts:['Enfrento de frente para proteger quem amo','Pesquiso até entender e eliminar a ameaça','Aprendo a conviver e transformar em força','Prefiro ignorar e seguir em frente']},
      {q:'O que é mais importante para você?',opts:['A família que escolhi','Descobrir a verdade a qualquer custo','Entender meu propósito','Sobreviver e se adaptar']},
      {q:'Qual ambiente você prefere?',opts:['Em meio às pessoas, liderando','Na biblioteca ou pesquisando','Em silêncio, observando','Na natureza, livre']},
      {q:'Seu maior defeito é:',opts:['Colocar os outros antes de mim mesmo','Ser teimoso e obcecado com respostas','Carregar o peso do mundo sozinho','Agir sem pensar nas consequências']}
    ],
    results:[
      {name:'Scott McCall',av:'🐺',role:'Alfa Verdadeiro',desc:'Você é empático, leal e natural na liderança. Seu poder vem do coração, não da força. As pessoas confiam em você instintivamente.',traits:['Líder Nato','Empático','Protetor','Justo']},
      {name:'Stiles Stilinski',av:'⚡',role:'O Estrategista',desc:'Você é o mais inteligente da sala, sempre dois passos à frente. Sua mente é sua maior arma — e você sabe exatamente como usá-la.',traits:['Gênio','Estrategista','Leal','Engraçado']},
      {name:'Lydia Martin',av:'👸',role:'Banshee',desc:'Você carrega uma sensibilidade que vai além do normal. Intuitivo e perspicaz, sente as coisas antes que aconteçam. Sua força está na percepção.',traits:['Intuitivo','Sensível','Inteligente','Misterioso']},
      {name:'Malia Tate',av:'🦡',role:'Werecoyote',desc:'Você é direto, instintivo e adaptável. Aprende rápido, não tem paciência para rodeios e é brutalmente honesto. Sua força é inabalável.',traits:['Direto','Instintivo','Adaptável','Forte']}
    ]
  },
  ranking:{
    title:'Placar Geral',
    leaderboard:[
      {name:'LunaHale_BR',tier:'Alfa Verdadeiro',pts:2840,pct:100},
      {name:'StilesFan2011',tier:'Alfa',pts:2190,pct:77},
      {name:'BansheeQueen',tier:'Alfa',pts:1980,pct:70},
      {name:'DerekWolf',tier:'Beta',pts:1650,pct:58},
      {name:'KiraKitsune',tier:'Beta',pts:1420,pct:50},
      {name:'AllisonsLegacy',tier:'Beta',pts:1200,pct:42},
      {name:'MaliaInstinct',tier:'Beta',pts:980,pct:35},
      {name:'NemetonGuardian',tier:'Ômega',pts:720,pct:25}
    ]
  }
};

/* ── STATE ── */
let curQuiz='trivia', qIdx=0, score=0, answered=false;
let charScores=[0,0,0,0], charQ=0;
let factIdx=0;

/* ── INIT ── */
function initPage() {
  if(document.getElementById('aboutCards')) buildIndex();
  if(document.getElementById('quizMain'))   { buildQuizPage(); loadQuiz('trivia'); }
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
  window.addEventListener('scroll', navScroll);
}

function buildQuizPage() {
  window.addEventListener('scroll', navScroll);
}

function buildAbout(){
  const el = document.getElementById('aboutCards');
  if(!el) return;
  el.innerHTML = ABOUT.map(c=>`
    <div class="card-item"><div class="ci-icon">${c.icon}</div>
    <h3>${c.title}</h3><p>${c.body}</p><span class="ci-tag">${c.tag}</span></div>`).join('');
}

function buildTimeline(){
  const el = document.getElementById('timeline');
  if(!el) return;
  el.innerHTML = TIMELINE.map(i=>`
    <div class="tl-item"><div class="tl-y">${i.y}</div><h4>${i.t}</h4><p>${i.p}</p></div>`).join('');
}

function buildChars(){
  const el = document.getElementById('charGrid');
  if(!el) return;
  el.innerHTML = CHARS.map((c,i)=>{
    const img = CHAR_IMGS[c.n];
    return `<div class="char-card" onclick="toggleChar(${i})" id="cc${i}">
      ${img ? `<div class="ch-photo"><img src="${img}" alt="${c.n}"/></div>` : `<div class="ch-av">${c.av}</div>`}
      <div class="ch-name">${c.n}</div>
      <div class="ch-role">${c.r}</div>
      <span class="ch-power">${c.pw}</span>
      <div class="ch-detail"><div class="ch-detail-inner">${c.d}</div></div>
    </div>`;
  }).join('');
}

function toggleChar(i){ document.getElementById('cc'+i).classList.toggle('open'); }

function buildBast(){
  const el = document.getElementById('bastGrid');
  if(!el) return;
  el.innerHTML = BAST.map(b=>{
    const img = b.actor && ACTOR_IMGS[b.actor];
    return `<div class="bast-card">
      ${img ? `<div class="bast-photo"><img src="${img}" alt="${b.t}"/></div>` : ''}
      <div class="bast-info">${!img ? `<div class="bast-num">${b.n}</div>` : ''}
      <h3>${b.t}</h3><p>${b.p}</p><span class="bast-tag">${b.tag}</span></div>
    </div>`;
  }).join('');
}

function buildDiary(){
  const el = document.getElementById('diaryFeed');
  if(!el) return;
  el.innerHTML = DIARY.map(d=>`
    <div class="di-entry">
      <div class="di-meta"><div class="di-av">${d.av}</div>
      <div><div class="di-who">${d.who}</div><div class="di-date">${d.date}</div></div></div>
      <blockquote class="di-quote">${d.quote}</blockquote>
      <div class="di-body">${d.body}</div>
    </div>`).join('');
}

function buildMap(){
  const el = document.getElementById('mapPins');
  if(!el) return;
  el.innerHTML = MAP_PINS.map(p=>`
    <div class="map-pin" style="left:${p.x}%;top:${p.y}%" onclick="showPopup('${p.id}',event)">
      <div class="pin-dot" style="color:${p.c};background:${p.c}33"></div>
      <div class="pin-label">${p.l}</div>
    </div>`).join('');
}

function showPopup(id, e){
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

function closePopup(){ document.getElementById('mapPopup').classList.remove('show'); }
document.addEventListener('click', closePopup);

/* BUG CORRIGIDO: buildGallery e buildTheories removidas —
   os elementos galleryGrid e theoriesGrid não existem no HTML */

function buildEggs(){
  const el = document.getElementById('eggGrid');
  if(!el) return;
  el.innerHTML = EGGS.map(e=>`
    <div class="card-item"><div class="ci-icon">${e.icon}</div>
    <h3>${e.title}</h3><p>${e.body}</p></div>`).join('');
}

function renderFact(){
  const numEl  = document.getElementById('factNum');
  const textEl = document.getElementById('factText');
  if(!numEl || !textEl) return;
  numEl.textContent  = FACTS[factIdx].n;
  textEl.textContent = FACTS[factIdx].t;
}

function nextFact(){ factIdx = (factIdx + 1) % FACTS.length; renderFact(); }
function prevFact(){ factIdx = (factIdx - 1 + FACTS.length) % FACTS.length; renderFact(); }

function buildHeroGrid(){
  const gl = document.getElementById('hgl');
  if(!gl) return;
  for(let i = 0; i < 8; i++){
    const s = document.createElement('span');
    s.style.top = (i * 14 + 4) + '%';
    gl.appendChild(s);
  }
}

/* ── QUIZ ENGINE ── */
function loadQuiz(type){
  curQuiz = type; qIdx = 0; score = 0; answered = false;
  charScores = [0,0,0,0]; charQ = 0;
  document.querySelectorAll('.qsb').forEach(b => b.classList.remove('on'));
  const btn = document.getElementById('btn-'+type);
  if(btn) btn.classList.add('on');
  if(type === 'ranking'){ renderRanking(); return; }
  if(type === 'char')   { renderCharQuiz(); return; }
  renderQuestion();
}

function renderQuestion(){
  const m  = document.getElementById('quizMain');
  const qz = QUIZZES[curQuiz];
  if(!qz || !qz.qs){ m.innerHTML='<p style="color:var(--text2);padding:20px">Quiz indisponível.</p>'; return; }
  const total = qz.qs.length;
  if(qIdx >= total){ renderResult(); return; }
  const q = qz.qs[qIdx];
  const labels = ['A','B','C','D'];
  const pct = Math.round((qIdx / total) * 100);
  answered = false;
  m.innerHTML = `
    <div class="qz-top">
      <div class="qz-top-row">
        <span class="qz-step">Pergunta ${qIdx+1} de ${total}</span>
        <span class="qz-pts">🏆 ${score} pts</span>
      </div>
      <div class="qz-pbar"><div class="qz-pfill" style="width:${pct}%"></div></div>
    </div>
    <span class="qz-chip ${qz.chip}">${qz.chipLabel}</span>
    <div class="qz-q">${q.q}</div>
    ${q.hint ? `<div class="qz-hint">💡 ${q.hint}</div>` : ''}
    <div class="qz-opts">
      ${q.opts.map((o,i)=>`
        <button class="qz-opt" onclick="answerQ(${i})" id="opt${i}">
          <span class="qz-opt-l">${labels[i]}</span>${o}
        </button>`).join('')}
    </div>
    <div class="qz-explain" id="qzExplain"><strong>Explicação:</strong> ${q.ex||''}</div>
    <button class="qz-next" id="qzNext" onclick="nextQuestion()">${qIdx+1 < total ? 'Próxima' : 'Ver Resultado'}</button>`;
}

function answerQ(i){
  if(answered) return;
  answered = true;
  const q = QUIZZES[curQuiz].qs[qIdx];
  document.querySelectorAll('.qz-opt').forEach(o => o.disabled = true);
  document.getElementById('opt'+q.ans).classList.add('correct');
  if(i !== q.ans) document.getElementById('opt'+i).classList.add('wrong');
  else score += 100;
  document.getElementById('qzExplain').classList.add('show');
  document.getElementById('qzNext').classList.add('show');
}

function nextQuestion(){
  qIdx++;
  if(qIdx >= QUIZZES[curQuiz].qs.length) renderResult();
  else renderQuestion();
}

function renderResult(){
  const total = QUIZZES[curQuiz].qs.length;
  const pct = Math.round((score / (total * 100)) * 100);
  let title, msg;
  if(pct >= 90)     { title='Alfa Verdadeiro!';      msg='Impressionante! Você conhece Teen Wolf melhor que a maioria do fandom.'; }
  else if(pct >= 70){ title='Membro da Matilha';     msg='Ótimo resultado! Você claramente é um fã dedicado. Alguns detalhes escaparam, mas sua base é sólida.'; }
  else if(pct >= 50){ title='Beta em Formação';      msg='Bom trabalho! Você conhece o básico da série, mas há ainda muito a descobrir.'; }
  else              { title='Novato em Beacon Hills'; msg='Não desanime — cada episódio assistido é um passo a mais. Reveja a série e tente novamente!'; }
  document.getElementById('quizMain').innerHTML = `
    <div class="qz-result show">
      <div class="qz-ring"><div><div class="qz-rs">${pct}%</div><div class="qz-rt">Acertos</div></div></div>
      <div class="qz-rtitle">${title}</div>
      <div class="qz-rmsg">${msg}</div>
      <div class="qz-bars">
        <div class="qz-brow"><span class="qz-blabel">Precisão</span><div class="qz-btrack"><div class="qz-bfill" style="width:${pct}%"></div></div><span class="qz-bval">${pct}%</span></div>
        <div class="qz-brow"><span class="qz-blabel">Pontos</span><div class="qz-btrack"><div class="qz-bfill" style="width:${pct}%"></div></div><span class="qz-bval">${score}</span></div>
        <div class="qz-brow"><span class="qz-blabel">Questões</span><div class="qz-btrack"><div class="qz-bfill" style="width:100%"></div></div><span class="qz-bval">${total}</span></div>
      </div>
      <div>
        <button class="btn-restart" onclick="loadQuiz('${curQuiz}')">Tentar Novamente</button>
        <button class="btn btn-f" onclick="loadQuiz('ranking')">Ver Ranking</button>
      </div>
    </div>`;
}

/* ── CHAR QUIZ ── */
function renderCharQuiz(){
  const qz = QUIZZES.char;
  if(charQ >= qz.questions.length){ renderCharResult(); return; }
  const q = qz.questions[charQ];
  const letters = ['A','B','C','D'];
  document.getElementById('quizMain').innerHTML = `
    <div class="chq-wrap">
      <div style="font-family:'Space Mono',monospace;font-size:.6rem;color:var(--text3);letter-spacing:.1em;text-transform:uppercase;margin-bottom:16px">
        Pergunta ${charQ+1} de ${qz.questions.length}
      </div>
      <div class="chq-q">${q.q}</div>
      <div class="chq-opts">
        ${q.opts.map((o,i)=>`
          <div class="chq-opt" onclick="answerChar(${i})">
            <span class="chq-ol">${letters[i]}</span>
            <span class="chq-ot">${o}</span>
          </div>`).join('')}
      </div>
    </div>`;
}

function answerChar(i){
  charScores[i] = (charScores[i] || 0) + 1;
  charQ++;
  if(charQ >= QUIZZES.char.questions.length) renderCharResult();
  else renderCharQuiz();
}

function renderCharResult(){
  const maxIdx = charScores.indexOf(Math.max(...charScores));
  const r = QUIZZES.char.results[maxIdx];
  const img = CHAR_IMGS[r.name];
  document.getElementById('quizMain').innerHTML = `
    <div class="chq-result show">
      ${img ? `<div class="chq-rphoto"><img src="${img}" alt="${r.name}"/></div>` : `<div class="chq-rav">${r.av}</div>`}
      <div class="chq-rname">${r.name}</div>
      <div class="chq-rrole">${r.role}</div>
      <div class="chq-rdesc">${r.desc}</div>
      <div class="chq-traits">${r.traits.map(t=>`<span class="chq-trait">${t}</span>`).join('')}</div>
      <button class="btn-restart" onclick="loadQuiz('char')">Refazer</button>
    </div>`;
}

/* ── RANKING ── */
function renderRanking(){
  const lb = QUIZZES.ranking.leaderboard;
  document.getElementById('quizMain').innerHTML = `
    <div class="qz-top" style="margin-bottom:16px">
      <div class="qz-top-row"><span class="qz-step">Placar Global</span><span class="qz-pts">🏆 Top Fãs</span></div>
    </div>
    <p style="font-family:'Crimson Pro',serif;font-size:.95rem;color:var(--text2);margin-bottom:16px;font-style:italic">
      Os maiores conhecedores do universo Teen Wolf de toda a comunidade brasileira.
    </p>
    <div class="lb-wrap">
      ${lb.map((r,i)=>`
        <div class="lb-row">
          <span class="lb-pos">${i+1}</span>
          <div class="lb-name">${r.name}<div class="lb-tier">${r.tier}</div></div>
          <div class="lb-btrack"><div class="lb-bfill" style="width:${r.pct}%"></div></div>
          <span class="lb-pts">${r.pts}</span>
        </div>`).join('')}
    </div>
    <div style="margin-top:20px;text-align:center">
      <button class="btn btn-f" onclick="loadQuiz('trivia')">Jogar para entrar no ranking</button>
    </div>`;
}

/* ── CONTATO ── */
/* BUG CORRIGIDO: submitContact removida — elemento #cOk não existe no HTML */

/* ── NAV ── */
function navScroll(){
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 10);

  /* BUG CORRIGIDO: timeline-exp adicionada às seções rastreadas */
  const sections = ['home','serie','timeline-exp','personagens','bastidores','diario','mapa','curiosidades','contato'];
  let cur = 'home';
  sections.forEach(s => {
    const el = document.getElementById(s);
    if(el && window.scrollY >= el.offsetTop - 100) cur = s;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active',
      a.getAttribute('href') === '#' + cur ||
      (a.getAttribute('href') === 'quizzes.html' && cur === 'quizzes')
    );
  });
}

function toggleMenu(){ document.getElementById('mob-menu').classList.toggle('open'); }
function cm(){ document.getElementById('mob-menu').classList.remove('open'); }

function toggleTheme(){
  const html  = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeBtn').textContent = isDark ? 'Dark' : 'Light';
}

window.addEventListener('load', initPage);

/* ── CUSTOM CURSOR ──
   BUG CORRIGIDO: cursor não é mais criado via JS —
   o elemento já existe no HTML (<div class="cursor" id="cursor">).
   Apenas movemos e alternamos a classe .active aqui.
─────────────────────────────────────────────────── */
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  if(!cursor) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

function bindCursorHover(){
  document.querySelectorAll('a, button, .char-card, .card-item, .map-pin').forEach(el => {
    el.addEventListener('mouseenter', () => cursor && cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('active'));
  });
}

/* Vincula após buildIndex popular o DOM */
window.addEventListener('load', bindCursorHover);

/* ══════════════════════════════════════════════════════════
   COLE NO FINAL DO script.js
   TIMELINE CINEMATOGRÁFICA + FRASES ICÔNICAS
   ══════════════════════════════════════════════════════ */

/* ── DATA: TIMELINE CINEMATOGRÁFICA ── */
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
    desc: 'Um espírito demoníaco japonês — o Nogitsune — possui o corpo de Stiles. O único humano da matilha se torna a maior ameaça que Beacon Hills já enfrentou. Dylan O\'Brien entrega a performance mais aclamada de toda a série em cenas duplas memoráveis.',
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
    desc: 'Cientistas sobrenaturais com capacetes victorianos criam "quimeras" — humanos com DNA de duas criaturas implantado à força. A maioria não sobrevive ao processo. Theo Raeken infiltra a matilha para os Doutores, dividindo o grupo.',
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

/* ── STATE TIMELINE ── */
let tcinIdx = 0;

/* ── INIT TIMELINE ── */
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
  /* background dinâmico */
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

/* teclado */
document.addEventListener('keydown', e => {
  const section = document.getElementById('timeline-cinema');
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const inView = rect.top < window.innerHeight && rect.bottom > 0;
  if (!inView) return;
  if (e.key === 'ArrowRight') tcinGo(1);
  if (e.key === 'ArrowLeft')  tcinGo(-1);
});

/* ── DATA: FRASES ICÔNICAS ── */
const QUOTES_DATA = [
  {
    en: 'We protect those who cannot protect themselves.',
    pt: 'Protegemos aqueles que não conseguem se proteger.',
    char: 'Allison',
    season: 'Código dos Argent'
  },
  {
    en: 'Be your own anchor.',
    pt: 'Seja sua própria âncora.',
    char: 'Derek',
    season: 'Temporada 3'
  },
  {
    en: 'Not all monsters do monstrous things.',
    pt: 'Nem todos os monstros fazem coisas monstruosas.',
    char: 'Lydia',
    season: 'Temporada 3'
  },
  {
    en: 'Chaos has come again.',
    pt: 'O caos voltou.',
    char: 'Stiles',
    season: 'Void Stiles — T3B'
  },
  {
    en: "I'm still figuring out this whole wolf thing.",
    pt: 'Ainda estou descobrindo essa coisa toda de lobisomem.',
    char: 'Scott',
    season: 'Temporada 1'
  },
  {
    en: 'Everyone has a story. This is yours.',
    pt: 'Todo mundo tem uma história. Essa é a sua.',
    char: 'Deaton',
    season: 'Emissário'
  },
  {
    en: "I'm the alpha. I'm always the alpha.",
    pt: 'Sou o Alfa. Sempre serei o Alfa.',
    char: 'Peter',
    season: 'Temporada 1'
  },
  {
    en: 'The only way you get through hell is to keep moving.',
    pt: 'A única forma de atravessar o inferno é continuar em movimento.',
    char: 'Stiles',
    season: 'Temporada 5'
  }
];

/* ── BUILD FRASES ── */
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
        <button class="quote-btn" onclick="copyQuote(${i}, this)" title="Copiar frase">
          📋 Copiar
        </button>
        <button class="quote-btn" onclick="downloadQuote(${i})" title="Baixar como imagem">
          ⬇ Imagem
        </button>
        <button class="quote-btn" onclick="shareQuote(${i})" title="Compartilhar">
          ↗ Share
        </button>
      </div>
    </div>
  `).join('');

  /* toast container */
  if (!document.getElementById('quoteToast')) {
    const toast = document.createElement('div');
    toast.id = 'quoteToast';
    toast.className = 'quote-toast';
    document.body.appendChild(toast);
  }

  /* canvas oculto para download */
  if (!document.getElementById('quoteCanvas')) {
    const canvas = document.createElement('canvas');
    canvas.id = 'quoteCanvas';
    document.body.appendChild(canvas);
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

  /* fundo */
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#0d0c0a');
  bg.addColorStop(1, '#1c1510');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  /* borda ember */
  ctx.strokeStyle = 'rgba(200,68,10,.4)';
  ctx.lineWidth = 2;
  ctx.strokeRect(28, 28, W - 56, H - 56);

  /* linha topo */
  const lg = ctx.createLinearGradient(28, 28, W - 28, 28);
  lg.addColorStop(0, '#c8440a');
  lg.addColorStop(1, '#e8b860');
  ctx.strokeStyle = lg;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(28, 28); ctx.lineTo(W - 28, 28);
  ctx.stroke();

  /* aspas grandes */
  ctx.font = '900 140px Georgia, serif';
  ctx.fillStyle = 'rgba(200,68,10,.12)';
  ctx.fillText('"', 50, 170);

  /* texto EN */
  ctx.font = 'italic 700 32px Georgia, serif';
  ctx.fillStyle = '#f0ead8';
  ctx.textAlign = 'center';
  wrapText(ctx, `"${q.en}"`, W / 2, 210, W - 140, 44);

  /* texto PT */
  ctx.font = 'italic 400 20px Georgia, serif';
  ctx.fillStyle = '#6a6050';
  ctx.textAlign = 'center';
  wrapText(ctx, q.pt, W / 2, 340, W - 140, 30);

  /* personagem */
  ctx.font = '700 14px monospace';
  ctx.fillStyle = '#c8440a';
  ctx.textAlign = 'center';
  ctx.fillText(`— ${q.char.toUpperCase()}  ·  ${q.season.toUpperCase()}  ·  TEEN WOLF`, W / 2, H - 55);

  /* logo */
  ctx.font = '400 11px monospace';
  ctx.fillStyle = 'rgba(255,255,255,.15)';
  ctx.fillText('BEACON HILLS — TEEN WOLF FÃS', W / 2, H - 32);

  /* download */
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
  }
  ctx.fillText(line, x, curY);
}

function shareQuote(idx) {
  const q = QUOTES_DATA[idx];
  const text = `"${q.en}" — ${q.char}, Teen Wolf`;
  if (navigator.share) {
    navigator.share({ title: 'Teen Wolf Fãs', text }).catch(() => {});
  } 
  else {
    navigator.clipboard.writeText(text);
    showToast('Link copiado para compartilhar! 🐺');
  }
}

/* ── INTEGRAR NO initPage ── */
const _origInitPage = typeof initPage === 'function' ? initPage : null;

function initPage() {
  if (_origInitPage) _origInitPage();

  /* timeline cinematográfica */
  if (document.getElementById('tcinCards')) buildTcinTimeline();

  /* frases */
  if (document.getElementById('quotesGrid')) buildQuotes();
}

/* garantia: se já rodou, executa diretamente */
if (document.readyState === 'complete') {
  if (document.getElementById('tcinCards')) buildTcinTimeline();
  if (document.getElementById('quotesGrid')) buildQuotes();
}
window.onload = initPage;
