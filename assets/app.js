// ── i18n ───────────────────────────────────────────────
// Los textos viven en /assets/i18n/<idioma>.js y se cargan antes que este fichero.
const T = window.I18N;
const LANGS = [
  { code: 'es', name: 'Español', short: 'ES', path: '/es/' },
  { code: 'ca', name: 'Català',  short: 'CA', path: '/ca/' },
  { code: 'en', name: 'English', short: 'EN', path: '/en/' },
];
const LANG_KEY = 'pp_lang';

// Convierte "texto [[b]]azul[[/b]] y [[g]]verde[[/g]]" en nodos React.
function rich(str) {
  const parts = String(str).split(/\[\[(\/?[bg])\]\]/);
  const out = [];
  let tag = null;
  parts.forEach((p, i) => {
    if (i % 2 === 1) { tag = p[0] === '/' ? null : p; return; }
    if (!p) return;
    out.push(tag ? <span key={i} className={tag === 'b' ? 'accent' : 'accent-g'}>{p}</span> : p);
  });
  return out;
}

// ── Icons ──────────────────────────────────────────────
const Ico = {
  globe: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z"/></svg>
  ),
  chevron: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||14} height={p.size||14} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  ),
  bolt: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||22} height={p.size||22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z"/></svg>
  ),
  plug: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||22} height={p.size||22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v4M15 3v4"/><path d="M6 7h12v4a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6V7Z"/><path d="M12 17v4"/></svg>
  ),
  shield: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||22} height={p.size||22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 6v6c0 4.5 3 7.7 7 9 4-1.3 7-4.5 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  leaf: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||22} height={p.size||22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21c0-8 5-15 16-16-1 11-8 16-16 16Z"/><path d="M5 21c4-4 7-7 11-11"/></svg>
  ),
  clock: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||22} height={p.size||22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
  ),
  pickaxe: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||22} height={p.size||22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21 12 12"/><path d="M14 3v4l4 4-4 4v-3"/><path d="M10 10 4 4l3-1 6 6"/></svg>
  ),
  signal: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||22} height={p.size||22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h.01M7 20v-4M12 20V10M17 20V4M22 20v-8"/></svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  ),
  mail: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  phone: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||16} height={p.size||16} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg>
  ),
  plus: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||14} height={p.size||14} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
  ),
  check: (p) => (
    <svg viewBox="0 0 24 24" width={p.size||14} height={p.size||14} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
  ),
};

// ── SVG Scenes ─────────────────────────────────────────
// Geometría canónica de la farola. Origen (0,0) = centro de la base a ras de
// suelo; el mástil crece hacia -y. Todas las escenas reutilizan estos trazados
// para que la farola sea siempre la misma pieza, sólo que a otra escala.
//
// El ORDEN DE PINTADO es parte del diseño: cono → basamento → fuste → luminaria
// → módulo de carga. El módulo va el último a propósito, porque está montado
// sobre la cara frontal de la columna: así el fuste pasa por DETRÁS y nunca
// lo atraviesa.
const MAST = {
  shaft: 'M0 -60 L0 -300 C0 -372 -20 -404 -78 -414',
  head: 'M-70 -421 C-96 -434 -158 -432 -188 -415 C-193 -412 -192 -404 -185 -403 L-84 -403 C-74 -403 -66 -410 -70 -421 Z',
  cone: 'M-176 -401 L-300 0 L-24 0 L-90 -401 Z',
  // Centro de la toma: de aquí sale el cable hacia el coche.
  port: [0, -178],
};

// Farola convencional: fuste recto, brazo en ángulo y luminaria trapezoidal.
const OLD_MAST = {
  shaft: 'M0 -60 L0 -340 L-46 -384',
  head: 'M-44 -396 L-126 -396 L-138 -358 L-34 -358 Z',
  cap: 'M-128 -398 L-42 -398 L-38 -406 L-124 -406 Z',
  cone: 'M-138 -358 L-254 0 L22 0 L-34 -358 Z',
};

const PAL = { pole: '#1F2A3D', poleHi: '#3A4868', plinth: '#2A3550', old: '#4D5A76', oldHi: '#6B7894' };

// Basamento común: pletina atornillada + zócalo con registro. El fuste
// arranca en y=-60, justo donde acaba el zócalo.
function Base({ fill, detail }) {
  return (
    <g>
      <rect x="-24" y="-8" width="48" height="8" rx="2" fill={fill} />
      <circle cx="-17" cy="-4" r="2" fill={detail} />
      <circle cx="17" cy="-4" r="2" fill={detail} />
      <path d="M-15 -8 L-12 -64 L12 -64 L15 -8 Z" fill={fill} />
      <rect x="-5" y="-50" width="10" height="28" rx="2" fill="none" stroke={detail} strokeOpacity=".6" strokeWidth="1.2" />
    </g>
  );
}

// Módulo de carga embebido. Se dibuja siempre después del fuste. Las dos
// abrazaderas (arriba y abajo) son las que lo "sujetan" visualmente a la
// columna; todo lo que va en su cara está centrado en x=0.
function ChargerModule({ id, led = true }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${id}-mod`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#1C2840" />
          <stop offset=".45" stopColor="#0E1728" />
          <stop offset="1" stopColor="#060B16" />
        </linearGradient>
      </defs>
      <rect x="-12" y="-251" width="24" height="8" rx="2" fill={PAL.poleHi} />
      <rect x="-12" y="-99" width="24" height="8" rx="2" fill={PAL.poleHi} />
      <rect x="-19" y="-244" width="38" height="146" rx="10" fill={`url(#${id}-mod)`} />
      {led && <circle cx="0" cy="-216" r="16" fill="#22C55E" opacity=".2" />}
      <circle cx="0" cy="-216" r="11" fill={led ? '#22C55E' : '#2A3550'} />
      <path d="M1.5 -224 L-4.5 -215 H-0.5 L-1.5 -208 L4.5 -217 H0.5 Z" fill={led ? '#06200E' : '#0B1220'} />
      <circle cx="0" cy="-178" r="9" fill="#050A14" stroke={PAL.poleHi} strokeWidth="1.5" />
      <circle cx="-3.5" cy="-180" r="1.4" fill={PAL.poleHi} />
      <circle cx="3.5" cy="-180" r="1.4" fill={PAL.poleHi} />
      <circle cx="0" cy="-174.5" r="1.4" fill={PAL.poleHi} />
      <rect x="-9" y="-152" width="18" height="2.5" rx="1.25" fill={PAL.poleHi} opacity=".5" />
      <rect x="-9" y="-145" width="12" height="2.5" rx="1.25" fill={PAL.poleHi} opacity=".35" />
    </g>
  );
}

function Mast({ id, led = true, coneOpacity = 1 }) {
  return (
    <g>
      {coneOpacity > 0 && <path d={MAST.cone} fill={`url(#${id}-cone)`} opacity={coneOpacity} />}
      <Base fill={PAL.plinth} detail={PAL.poleHi} />
      <path d={MAST.shaft} stroke={PAL.pole} strokeWidth="15" strokeLinecap="round" fill="none" />
      <path d={MAST.head} fill={PAL.pole} />
      {led && <ellipse cx="-133" cy="-401" rx="50" ry="6" fill="#FBD27A" opacity=".3" />}
      <rect x="-176" y="-405" width="86" height="5" rx="2.5" fill={led ? '#FBD27A' : PAL.poleHi} />
      <ChargerModule id={id} led={led} />
    </g>
  );
}

function OldMast({ id, coneOpacity = 1 }) {
  return (
    <g>
      {coneOpacity > 0 && <path d={OLD_MAST.cone} fill={`url(#${id}-cone)`} opacity={coneOpacity} />}
      <Base fill={PAL.old} detail={PAL.oldHi} />
      <path d={OLD_MAST.shaft} stroke={PAL.old} strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d={OLD_MAST.head} fill={PAL.old} />
      <path d={OLD_MAST.cap} fill={PAL.oldHi} />
      <path d="M-134 -359 L-38 -359" stroke="#FBD27A" strokeWidth="5" opacity=".75" strokeLinecap="round" />
    </g>
  );
}

// Coche. Origen (0,0) = punto de contacto con la calzada, centrado.
function Car() {
  return (
    <g transform="translate(-85,-35)">
      <rect x="0" y="-20" width="170" height="42" rx="14" fill="#0B1220" />
      <path d="M20 -20 q5 -22 30 -22 h70 q25 0 30 22" fill="#1F2A3D" />
      <path d="M30 -18 q4 -16 24 -16 h62 q20 0 24 16 Z" fill="#3A4868" />
      <circle cx="36" cy="22" r="13" fill="#0B1220" stroke="#3A4868" strokeWidth="2" />
      <circle cx="134" cy="22" r="13" fill="#0B1220" stroke="#3A4868" strokeWidth="2" />
      <circle cx="36" cy="22" r="5" fill="#5A6688" />
      <circle cx="134" cy="22" r="5" fill="#5A6688" />
    </g>
  );
}

// Cimentación reutilizada: la misma losa sostiene la farola vieja y PlugPost.
function Foundation() {
  return (
    <g>
      <ellipse cx="0" cy="3" rx="50" ry="7" fill="#000000" opacity=".35" />
      <rect x="-36" y="-3" width="72" height="6" rx="2" fill="#17223A" />
    </g>
  );
}

function ConeGradient({ id, strength = 0.35 }) {
  return (
    <linearGradient id={`${id}-cone`} x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stopColor="#FBD27A" stopOpacity={strength} />
      <stop offset="1" stopColor="#FBD27A" stopOpacity="0" />
    </linearGradient>
  );
}

function HeroScene() {
  return (
    <svg className="scene" viewBox="0 0 600 620" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <defs><ConeGradient id="hero" /></defs>
      <g transform="translate(390,452) scale(.82)"><Mast id="hero" /></g>
      <g transform="translate(195,478)"><Car /></g>
      <circle cx="390" cy="306" r="4.5" fill="#22C55E" />
      <path d="M390 306 C 372 350, 330 404, 264 412" stroke="#22C55E" strokeWidth="3" fill="none" strokeDasharray="5 4" strokeLinecap="round">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.2s" repeatCount="indefinite" />
      </path>
      <circle cx="264" cy="412" r="4" fill="#22C55E" />
    </svg>
  );
}

// ── Escena animada por scroll ──────────────────
// `p` va de 0 a 1 y recorre los tres pasos: retirar → instalar → cargar.
// Los tramos se solapan con los cortes de paso (1/3 y 2/3) para que cada
// gesto termine justo cuando el texto de su paso deja de estar activo.
function TransformScene({ p }) {
  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const seg = (a, b) => clamp01((p - a) / (b - a));
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const easeIn = (t) => t * t * t;

  const lift = seg(0.10, 0.32);     // se retira la farola existente
  const drop = seg(0.34, 0.56);     // baja PlugPost sobre la misma base
  const arrive = seg(0.70, 0.86);   // llega el coche
  const plug = seg(0.87, 0.96);     // se enchufa

  const oldY = -easeIn(lift) * 680;
  const oldOp = 1 - clamp01((lift - 0.55) / 0.45);
  const newY = -(1 - easeOut(drop)) * 680;
  const newOp = clamp01(drop * 8);
  const led = p >= 0.60;
  const coneOp = seg(0.60, 0.68);
  const carX = -(1 - easeOut(arrive)) * 420;
  const sx = 350 + MAST.port[0] * 0.72;
  const sy = 392 + MAST.port[1] * 0.72;

  return (
    <svg className="tf-svg" viewBox="0 0 560 448" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <ConeGradient id="tf" strength={0.3} />
        <ConeGradient id="tfold" strength={0.2} />
      </defs>
      <rect x="0" y="392" width="560" height="56" fill="#070D1A" />
      <path d="M0 420 H560" stroke="#FFFFFF" strokeOpacity=".2" strokeWidth="3" strokeDasharray="24 20" />
      <g transform="translate(350,392)"><Foundation /></g>
      {oldOp > 0.01 && (
        <g opacity={oldOp} transform={`translate(350,392) scale(.72) rotate(${-lift * 3}) translate(0,${oldY})`}>
          <OldMast id="tfold" coneOpacity={1 - lift} />
        </g>
      )}
      {newOp > 0.01 && (
        <g opacity={newOp} transform={`translate(350,392) scale(.72) translate(0,${newY})`}>
          <Mast id="tf" led={led} coneOpacity={coneOp} />
        </g>
      )}
      {arrive > 0.01 && (
        <g opacity={clamp01(arrive * 6)} transform={`translate(${165 + carX},392)`}><Car /></g>
      )}
      {plug > 0.01 && (
        <g opacity={plug}>
          <circle cx={sx} cy={sy} r="4.5" fill="#22C55E" />
          <path d={`M${sx} ${sy} C ${sx - 26} ${sy + 46}, ${sx - 92} ${sy + 86}, 236 352`} stroke="#22C55E" strokeWidth="3" fill="none" strokeDasharray="5 4" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite" />
          </path>
          <circle cx="236" cy="352" r="4.5" fill="#22C55E" />
        </g>
      )}
    </svg>
  );
}

function SpecsCallout() {
  return (
    <svg viewBox="0 0 360 460" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <defs><ConeGradient id="spec" strength={0.22} /></defs>
      <g transform="translate(190,440) scale(.81)"><Mast id="spec" /></g>
      <line x1="16" y1="440" x2="344" y2="440" stroke="#8995AE" strokeWidth="1" strokeDasharray="3 4" opacity=".4" />
    </svg>
  );
}

// ── PlugPost Logo ─────────────────────────────────────
// La altura la fija el CSS (.brand img / .footer-brand img) para poder
// reducirla en móvil; un `style` inline aquí ganaría a la media query.
// width/height llevan el tamaño natural para que el navegador reserve
// la proporción correcta antes de descargar la imagen.
function PlugPostLogo() {
  return (
    <img
      src="/assets/logo.png"
      alt="PlugPost"
      width="349"
      height="200"
    />
  );
}

// ── Scroll spy ─────────────────────────────────────────
function useScrollSpy(ids) {
  const [active, setActive] = React.useState('');
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids.join('|')]);
  return active;
}

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('section');
    els.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    setTimeout(() => document.querySelectorAll('.hero').forEach(el => el.classList.add('in')), 50);
    return () => io.disconnect();
  }, []);
}

// ── Language switcher ──────────────────────────────────
function LangSwitcher() {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  const current = LANGS.filter(l => l.code === T.code)[0] || LANGS[0];
  // Al elegir idioma guardamos la preferencia para que la raíz no vuelva a redirigir.
  const choose = (l) => (e) => {
    try { localStorage.setItem(LANG_KEY, l.code); } catch (err) {}
    if (l.code === T.code) { e.preventDefault(); setOpen(false); }
  };
  return (
    <div className={`lang ${open ? 'open' : ''}`} ref={ref}>
      <button
        className="lang-btn"
        onClick={() => setOpen(o => !o)}
        aria-label={T.nav.langAria}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <Ico.globe size={16}/>
        <span className="code">{current.short}</span>
        <span className="caret"><Ico.chevron size={14}/></span>
      </button>
      <div className="lang-menu">
        {LANGS.map(l => (
          <a
            key={l.code}
            href={l.path + window.location.hash}
            hrefLang={l.code}
            lang={l.code}
            className={l.code === T.code ? 'active' : ''}
            onClick={choose(l)}
          >
            <span className="name">{l.name}</span>
            <span className="code">{l.short}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ── Header ─────────────────────────────────────────────
function Header({ activeSection }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const nav = T.nav.items;
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-row">
        <a href="#top" className="brand" aria-label={T.nav.brandAria}>
          <PlugPostLogo/>
        </a>
        <nav className="nav" aria-label={T.nav.aria}>
          {nav.map(n => (
            <a key={n.id} href={`#${n.id}`} className={activeSection === n.id ? 'active' : ''}>{n.label}</a>
          ))}
        </nav>
        <div className="header-cta">
          <LangSwitcher/>
          <a href="#contacto" className="btn btn-primary btn-sm">{T.nav.cta}</a>
        </div>
      </div>
    </header>
  );
}

// ── Hero ───────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow green"><span className="dot"></span>{T.hero.eyebrow}</span>
          <h1 className="h1" style={{ marginTop: 18 }}>
            {rich(T.hero.title)}
          </h1>
          <p className="lede hero-sub">
            {T.hero.sub}
          </p>
          <div className="hero-cta">
            <a href="#contacto" className="btn btn-blue">{T.hero.cta1} <Ico.arrow/></a>
            <a href="#como" className="btn btn-ghost">{T.hero.cta2}</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-badge">
            <span className="pulse"></span>
            {T.hero.badge}
          </div>
          <HeroScene/>
          <div className="hero-stat">
            <div className="lbl">{T.hero.stat}</div>
          </div>
          <div className="stars"></div>
          <div className="ground"></div>
          <div className="road-stripes"></div>
        </div>
      </div>
    </section>
  );
}

// ── Problem ────────────────────────────────────────────
function Problem() {
  return (
    <section id="problema">
      <div className="container">
        <div style={{ maxWidth: 760 }}>
          <span className="eyebrow"><span className="dot"></span>{T.problem.eyebrow}</span>
          <h2 className="h2" style={{ marginTop: 16 }}>
            {T.problem.title}
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            {T.problem.lede}
          </p>
        </div>
        <div className="problem-grid">
          {T.problem.stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <div className="big">{s.big}{s.sup && <sup>{s.sup}</sup>}</div>
              <div className="lbl">{s.lbl}</div>
              <div className="source">{s.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How it works ───────────────────────────────────────
// Los tres pasos se recorren con el scroll: la escena queda fija (sticky)
// mientras la lista de pasos avanza. El progreso 0→1 del raíl alimenta a la
// vez el paso activo y la animación de la farola.
function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return reduced;
}

// El raíl mide 100vh (lo que ocupa la escena fija) + el recorrido útil.
// p = cuánto llevamos recorrido de ese tramo útil.
function useScrollProgress(ref, enabled) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const read = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      // El recorrido util es lo que sobresale por debajo del panel pegajoso,
      // asi que medimos ese panel en vez de fiarnos de innerHeight.
      const inner = el.firstElementChild;
      const stickyH = inner ? inner.getBoundingClientRect().height : window.innerHeight;
      const span = r.height - stickyH;
      if (span <= 0) { setP(r.top <= 0 ? 1 : 0); return; }
      setP(Math.min(1, Math.max(0, -r.top / span)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(read); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    read();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);
  return p;
}

function HowItWorks() {
  const reduced = usePrefersReducedMotion();
  const track = React.useRef(null);
  const scrolled = useScrollProgress(track, !reduced);
  const p = reduced ? 1 : scrolled;
  const idx = Math.min(2, Math.max(0, Math.floor(p * 3)));
  const local = Math.min(1, Math.max(0, p * 3 - idx));

  return (
    <section id="como" className="how">
      <div className="container">
        <div className="how-head">
          <div>
            <span className="eyebrow green"><span className="dot"></span>{T.how.eyebrow}</span>
            <h2 className="h2" style={{ marginTop: 16 }}>
              {T.how.title}
            </h2>
          </div>
          <p className="lede">
            {T.how.lede}
          </p>
        </div>

        <div className={`tf-track ${reduced ? 'is-static' : ''}`} ref={track}>
          <div className="tf-inner">
            <ol className="tf-steps">
              {T.how.steps.map((s, i) => (
                <li
                  key={i}
                  className={`tf-step ${i === idx ? 'is-active' : ''} ${i < idx ? 'is-done' : ''}`}
                >
                  <span className="tf-num">{'0' + (i + 1)}</span>
                  <div className="tf-copy">
                    <h3>{s.title}</h3>
                    <div className="tf-body"><p>{s.body}</p></div>
                  </div>
                  <span className="tf-bar">
                    <i style={{ transform: `scaleX(${i < idx ? 1 : i === idx ? local : 0})` }} />
                  </span>
                </li>
              ))}
            </ol>

            <div className="tf-stage">
              <span className="tf-caption">{T.demo.caption}</span>
              <TransformScene p={p} />
              <span className={`tf-pill ${p >= 0.9 ? 'is-on' : ''}`}>
                <span className="dot"></span>{T.hero.badge}
              </span>
              <span className="tf-phase">{T.demo.steps[idx].t}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Benefits ───────────────────────────────────────────
function Benefits() {
  const icons = ['pickaxe', 'clock', 'leaf', 'signal'];
  const tones = ['', '', 'green', 'green'];
  const items = T.benefits.items.map((b, i) => ({ icon: icons[i], tone: tones[i], title: b.title, body: b.body }));
  return (
    <section id="beneficios">
      <div className="container">
        <div style={{ maxWidth: 760 }}>
          <span className="eyebrow"><span className="dot"></span>{T.benefits.eyebrow}</span>
          <h2 className="h2" style={{ marginTop: 16 }}>{T.benefits.title}</h2>
          <p className="lede" style={{ marginTop: 18 }}>
            {T.benefits.lede}
          </p>
        </div>
        <div className="benefits-grid">
          {items.map(b => {
            const Icon = Ico[b.icon];
            return (
              <div key={b.title} className={`benefit ${b.tone === 'green' ? 'green' : ''}`}>
                <div className="ico"><Icon size={22}/></div>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Specs ──────────────────────────────────────────────
function Specs() {
  const specs = T.specs.rows;
  return (
    <section id="especificaciones">
      <div className="container">
        <div style={{ maxWidth: 760 }}>
          <span className="eyebrow"><span className="dot"></span>{T.specs.eyebrow}</span>
          <h2 className="h2" style={{ marginTop: 16 }}>{T.specs.title}</h2>
        </div>
        <div className="specs-grid">
          <div className="specs-visual">
            <SpecsCallout/>
            <div className="annotate" style={{ top: '14%', left: '60%' }}>{T.specs.annotations.luminaire}</div>
            <div className="annotate" style={{ top: '52%', left: '60%' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }}></span>
              {T.specs.annotations.charger}
            </div>
            <div className="annotate" style={{ bottom: '14%', left: '8%' }}>{T.specs.annotations.base}</div>
          </div>
          <div>
            <div className="specs-list">
              {specs.map(s => (
                <div className="spec-row" key={s.k}>
                  <div className="k">{s.k}</div>
                  <div className="v">{s.v}<small>{s.d}</small></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Audiences ──────────────────────────────────────────
function Audiences() {
  return (
    <section id="audiencias">
      <div className="container">
        <div style={{ maxWidth: 760 }}>
          <span className="eyebrow green"><span className="dot"></span>{T.audiences.eyebrow}</span>
          <h2 className="h2" style={{ marginTop: 16 }}>{T.audiences.title}</h2>
        </div>
        <div className="audiences-grid">
          <div className="audience">
            <div className="lbl">{T.audiences.public.lbl}</div>
            <h3>{T.audiences.public.title}</h3>
            <ul>
              {T.audiences.public.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <a href="#contacto" className="btn btn-primary cta">{T.audiences.public.cta} <Ico.arrow/></a>
          </div>
          <div className="audience dark">
            <div className="lbl">{T.audiences.private.lbl}</div>
            <h3>{T.audiences.private.title}</h3>
            <ul>
              {T.audiences.private.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <a href="#contacto" className="btn btn-blue cta">{T.audiences.private.cta} <Ico.arrow/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ────────────────────────────────────────────────
function FAQ() {
  const items = T.faq.items;
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq-wrap">
          <div>
            <span className="eyebrow"><span className="dot"></span>{T.faq.eyebrow}</span>
            <h2 className="h2" style={{ marginTop: 16 }}>{T.faq.title}</h2>
            <p className="lede" style={{ marginTop: 18 }}>
              {T.faq.lede}
            </p>
            <a href="#contacto" className="btn btn-ghost" style={{ marginTop: 24 }}>
              <Ico.mail size={16}/>
              {T.faq.cta}
            </a>
          </div>
          <div className="faq-list">
            {items.map((it, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  <span>{it.q}</span>
                  <span className="toggle"><Ico.plus size={14}/></span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">{it.a}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA Final ──────────────────────────────────────────
function CTAFinal() {
  // Los `value` de los selects se mantienen en español a propósito: así el aviso
  // de Formspree llega siempre con las mismas etiquetas, sea cual sea el idioma.
  const F = T.contact.form;
  const [form, setForm] = React.useState({ name: '', email: '', org: '', type: 'Ayuntamiento', units: '5-25', message: '' });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [serverError, setServerError] = React.useState('');
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = F.errName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = F.errEmail;
    if (!form.org.trim()) e.org = F.errOrg;
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setServerError('');
    try {
      const res = await fetch('https://formspree.io/f/xnjydvlp', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          '_subject': 'New Demo Request — PlugPost',
          'Name': form.name,
          'Email': form.email,
          'Organization': form.org,
          'Type': form.type,
          'Estimated Lamps': form.units,
          'Message': form.message,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setServerError(data.errors ? data.errors.map(e => e.message).join(', ') : F.errSend);
      }
    } catch {
      setServerError(F.errNetwork);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section id="contacto" className="cta-final">
      <div className="container">
        <div className="cta-card">
          <div>
            <span className="eyebrow green" style={{ background: 'rgba(34,197,94,.12)' }}><span className="dot"></span>{T.contact.eyebrow}</span>
            <h2 style={{ marginTop: 16 }}>
              {T.contact.title}
            </h2>
            <p>
              {T.contact.body}
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Ico.phone size={16}/>
                <span>+34 620 988 517</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Ico.phone size={16}/>
                <span>+34 619 817 462</span>
              </div>
            </div>
          </div>
          <div className="form-wrap">
            {!sent ? (
              <form className="form-card" onSubmit={onSubmit} noValidate>
                <div className="form-grid">
                  <div className={`form-row ${errors.name ? 'error' : ''}`}>
                    <label htmlFor="f-name">{F.name}</label>
                    <input id="f-name" type="text" placeholder={F.namePlaceholder} value={form.name} onChange={e => update('name', e.target.value)}/>
                    {errors.name && <div className="err">{errors.name}</div>}
                  </div>
                  <div className={`form-row ${errors.email ? 'error' : ''}`}>
                    <label htmlFor="f-email">{F.email}</label>
                    <input id="f-email" type="email" placeholder={F.emailPlaceholder} value={form.email} onChange={e => update('email', e.target.value)}/>
                    {errors.email && <div className="err">{errors.email}</div>}
                  </div>
                </div>
                <div className={`form-row ${errors.org ? 'error' : ''}`}>
                  <label htmlFor="f-org">{F.org}</label>
                  <input id="f-org" type="text" placeholder={F.orgPlaceholder} value={form.org} onChange={e => update('org', e.target.value)}/>
                  {errors.org && <div className="err">{errors.org}</div>}
                </div>
                <div className="form-grid">
                  <div className="form-row">
                    <label htmlFor="f-type">{F.type}</label>
                    <select id="f-type" value={form.type} onChange={e => update('type', e.target.value)}>
                      {Object.keys(F.typeOptions).map(v => (
                        <option key={v} value={v}>{F.typeOptions[v]}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="f-units">{F.units}</label>
                    <select id="f-units" value={form.units} onChange={e => update('units', e.target.value)}>
                      {Object.keys(F.unitOptions).map(v => (
                        <option key={v} value={v}>{F.unitOptions[v]}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="f-msg">{F.message}</label>
                  <textarea id="f-msg" rows="3" placeholder={F.messagePlaceholder} value={form.message} onChange={e => update('message', e.target.value)}></textarea>
                </div>
                <button type="submit" className="form-submit" disabled={submitting}>
                  {submitting ? F.submitting : F.submit}
                </button>
                {serverError && (
                  <div style={{ fontSize: 13, color: '#f87171', textAlign: 'center', marginTop: 4 }}>{serverError}</div>
                )}
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.4)', fontFamily: 'JetBrains Mono, monospace', textAlign: 'center' }}>
                  {F.note}
                </div>
              </form>
            ) : (
              <div className="form-card form-success">
                <div className="check"><Ico.check size={24}/></div>
                <h4>{F.successTitle}</h4>
                <p>{F.successBody}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────
function Footer({ onLegal }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <PlugPostLogo/>
            <p>{T.footer.tagline}</p>
          </div>
          <div>
            <h5>{T.footer.colProduct}</h5>
            <ul>
              <li><a href="#como">{T.footer.how}</a></li>
              <li><a href="#beneficios">{T.footer.benefits}</a></li>
              <li><a href="#especificaciones">{T.footer.specs}</a></li>
            </ul>
          </div>
          <div>
            <h5>{T.footer.colCompany}</h5>
            <ul>
              <li><a href="#audiencias">{T.footer.forCities}</a></li>
              <li><a href="#audiencias">{T.footer.forCompanies}</a></li>
              <li><a href="#contacto">{T.footer.contact}</a></li>
            </ul>
          </div>
          <div>
            <h5>{T.footer.colLegal}</h5>
            <ul>
              <li><a href="#" onClick={e => { e.preventDefault(); onLegal('aviso'); }}>{T.footer.legalNotice}</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); onLegal('privacidad'); }}>{T.footer.privacy}</a></li>
              <li><a href="#" onClick={e => { e.preventDefault(); onLegal('cookies'); }}>{T.footer.cookies}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>{T.footer.copyright}</div>
          <div className="mono">{T.footer.claim}</div>
        </div>
      </div>
    </footer>
  );
}


// ── Legal Modal System ─────────────────────────────────
const LEGAL_CONTENT = T.legal;

function LegalModal({ id, onClose }) {
  const content = LEGAL_CONTENT[id];
  const overlayRef = React.useRef(null);
  React.useEffect(() => {
    if (!id) return;
    requestAnimationFrame(() => {
      if (overlayRef.current) overlayRef.current.classList.add('visible');
    });
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [id]);
  const handleClose = () => {
    if (overlayRef.current) {
      overlayRef.current.classList.remove('visible');
      setTimeout(onClose, 260);
    }
  };
  const handleOverlay = (e) => { if (e.target === overlayRef.current) handleClose(); };
  if (!id || !content) return null;
  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleOverlay}>
      <div className="modal-box" role="dialog" aria-modal="true" aria-label={content.title}>
        <div className="modal-header">
          <div>
            <div className="mono-lbl" style={{ marginBottom: 4 }}>{content.lbl}</div>
            <h3>{content.title}</h3>
          </div>
          <button className="modal-close" onClick={handleClose} aria-label={T.modal.close}>✕</button>
        </div>
        <div className="modal-body">
          {content.sections.map((s, i) => (
            <div key={i}>
              <h4>{s.h}</h4>
              {s.body && <p>{s.body}</p>}
              {s.list && <ul>{s.list.map((li, j) => <li key={j}>{li}</li>)}</ul>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── App ────────────────────────────────────────────────
function App() {
  const active = useScrollSpy(['producto','como','beneficios','especificaciones','faq']);
  const [legalModal, setLegalModal] = React.useState(null);
  useReveal();
  return (
    <>
      <Header activeSection={active}/>
      <div id="producto">
        <Hero/>
      </div>
      <Problem/>
      <HowItWorks/>
      <Benefits/>
      <Specs/>
      <Audiences/>
      <FAQ/>
      <CTAFinal/>
      <Footer onLegal={setLegalModal}/>
      <LegalModal id={legalModal} onClose={() => setLegalModal(null)}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
