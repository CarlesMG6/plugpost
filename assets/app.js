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
function HeroScene() {
  return (
    <svg className="scene" viewBox="0 0 600 620" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <g transform="translate(330,0)">
        <rect x="-14" y="380" width="28" height="80" rx="3" fill="#2A3550"/>
        <rect x="-12" y="300" width="24" height="60" rx="4" fill="#0B1220"/>
        <circle cx="0" cy="324" r="11" fill="#22C55E"/>
        <path d="M-2 318 l-3 8 h4 l-1 6 5-8 h-4 l-1-6 z" fill="#06200E"/>
        <path d="M0 380 C 0 280, 0 200, -60 140" stroke="#2A3550" strokeWidth="8" fill="none" strokeLinecap="round"/>
        <path d="M-60 140 q-40 -10 -90 8 q-5 2 -3 8 q3 10 30 14 q35 6 70 -10 q5 -3 -7 -20 Z" fill="#1F2A3D"/>
        <ellipse cx="-110" cy="160" rx="35" ry="4" fill="#FBD27A" opacity=".5"/>
        <path d="M-145 158 L -260 320 L 5 320 L -88 158 Z" fill="url(#cone)"/>
      </g>
      <g transform="translate(110,440)">
        <rect x="0" y="-20" width="170" height="42" rx="14" fill="#0B1220"/>
        <path d="M20 -20 q5 -22 30 -22 h70 q25 0 30 22" fill="#1F2A3D"/>
        <path d="M30 -18 q4 -16 24 -16 h62 q20 0 24 16 Z" fill="#3A4868"/>
        <circle cx="36" cy="22" r="13" fill="#0B1220" stroke="#3A4868" strokeWidth="2"/>
        <circle cx="134" cy="22" r="13" fill="#0B1220" stroke="#3A4868" strokeWidth="2"/>
        <circle cx="36" cy="22" r="5" fill="#5A6688"/>
        <circle cx="134" cy="22" r="5" fill="#5A6688"/>
      </g>
      <path d="M330 324 C 280 360, 260 420, 240 420" stroke="#22C55E" strokeWidth="3" fill="none" strokeDasharray="5 4" strokeLinecap="round">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.2s" repeatCount="indefinite"/>
      </path>
      <circle cx="240" cy="420" r="4" fill="#22C55E"/>
      <defs>
        <linearGradient id="cone" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FBD27A" stopOpacity=".35"/>
          <stop offset="1" stopColor="#FBD27A" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function DemoStage({ step }) {
  return (
    <svg className="scene-svg" viewBox="0 0 600 420" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <defs>
        <linearGradient id="cone2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FBD27A" stopOpacity=".25"/>
          <stop offset="1" stopColor="#FBD27A" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {step === 0 && (
        <g transform="translate(300, 30)">
          <rect x="-10" y="280" width="20" height="60" rx="2" fill="#1B2540"/>
          <rect x="-6" y="60" width="12" height="220" fill="#1B2540"/>
          <rect x="-44" y="44" width="60" height="18" rx="2" fill="#1B2540"/>
          <rect x="-44" y="62" width="60" height="6" fill="#3A4868"/>
          <path d="M-44 70 L -100 220 L 16 220 L 16 70 Z" fill="url(#cone2)"/>
          <text x="0" y="365" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="rgba(255,255,255,.35)" letterSpacing="1">{T.demo.stageBefore}</text>
        </g>
      )}
      {step >= 1 && (
        <g transform="translate(300, 30)">
          <rect x="-12" y="280" width="24" height="60" rx="2" fill="#1F2A3D"/>
          <rect x="-10" y="200" width="20" height="60" rx="3" fill="#0B1220" stroke="#22C55E" strokeOpacity=".4"/>
          <circle cx="0" cy="222" r="9" fill="#22C55E">
            <animate attributeName="opacity" values="1;.6;1" dur="2s" repeatCount="indefinite"/>
          </circle>
          <path d="M-2 217 l-3 7 h4 l-1 5 5-7 h-4 l-1-5 z" fill="#06200E"/>
          <path d="M0 280 C 0 200, 0 140, -55 90" stroke="#1F2A3D" strokeWidth="7" fill="none" strokeLinecap="round"/>
          <path d="M-55 90 q-35 -10 -78 6 q-5 2 -3 7 q3 8 26 11 q30 5 60 -8 q5 -3 -5 -16 Z" fill="#1F2A3D"/>
          <ellipse cx="-94" cy="106" rx="28" ry="3" fill="#FBD27A" opacity=".6"/>
          <path d="M-126 105 L -210 240 L 5 240 L -73 105 Z" fill="url(#cone2)"/>
          <text x="0" y="365" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="rgba(34,197,94,.65)" letterSpacing="1">{T.demo.stageAfter}</text>
        </g>
      )}
      {step === 2 && (
        <g transform="translate(80, 320)">
          <rect x="0" y="-18" width="150" height="38" rx="12" fill="#0F1828"/>
          <path d="M18 -18 q4 -20 26 -20 h62 q22 0 26 20" fill="#1F2A3D"/>
          <path d="M28 -16 q4 -14 22 -14 h54 q18 0 22 14 Z" fill="#3A4868"/>
          <circle cx="32" cy="20" r="11" fill="#0B1220" stroke="#3A4868" strokeWidth="2"/>
          <circle cx="118" cy="20" r="11" fill="#0B1220" stroke="#3A4868" strokeWidth="2"/>
        </g>
      )}
      {step === 2 && (
        <>
          <path d="M300 252 C 260 280, 240 320, 210 320" stroke="#22C55E" strokeWidth="3" fill="none" strokeDasharray="5 4" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite"/>
          </path>
          <circle cx="210" cy="320" r="4" fill="#22C55E"/>
        </>
      )}
    </svg>
  );
}

function StepIllustration({ step }) {
  if (step === 1) {
    return (
      <svg viewBox="0 0 200 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <g>
          <rect x="92" y="120" width="16" height="30" rx="2" fill="#8995AE"/>
          <rect x="96" y="40" width="8" height="80" fill="#8995AE" opacity=".5"/>
          <rect x="70" y="32" width="40" height="12" rx="2" fill="#8995AE" opacity=".5"/>
          <path d="M120 70 q20 -30 50 -30" stroke="#1E63F5" strokeWidth="1.5" fill="none" strokeDasharray="3 3"/>
          <path d="M170 40 l-6 -3 l1 7 z" fill="#1E63F5"/>
        </g>
        <text x="100" y="155" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#8995AE" letterSpacing="1">{T.how.steps[0].illu}</text>
      </svg>
    );
  }
  if (step === 2) {
    return (
      <svg viewBox="0 0 200 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(100, 14)">
          <rect x="-8" y="100" width="16" height="30" rx="2" fill="#1F2A3D"/>
          <rect x="-6" y="60" width="12" height="40" rx="2" fill="#0B1220"/>
          <circle cx="0" cy="74" r="5" fill="#22C55E"/>
          <path d="M0 60 C 0 30, 0 18, -28 0" stroke="#1F2A3D" strokeWidth="4" fill="none"/>
          <path d="M-28 0 q-20 -6 -42 4 q-3 1 -1 4 q3 5 16 6 q16 3 32 -4 q3 -2 -5 -10 Z" fill="#1F2A3D"/>
          <path d="M40 -20 q-10 25 -30 35" stroke="#1E63F5" strokeWidth="1.5" fill="none" strokeDasharray="3 3"/>
          <path d="M10 15 l3 -6 l-7 1 z" fill="#1E63F5"/>
        </g>
        <text x="100" y="155" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#8995AE" letterSpacing="1">{T.how.steps[1].illu}</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(130, 14)">
        <rect x="-6" y="100" width="12" height="30" rx="2" fill="#1F2A3D"/>
        <rect x="-5" y="64" width="10" height="36" rx="2" fill="#0B1220"/>
        <circle cx="0" cy="78" r="4" fill="#22C55E"/>
        <path d="M0 64 C 0 36, 0 22, -22 6" stroke="#1F2A3D" strokeWidth="3.5" fill="none"/>
        <path d="M-22 6 q-16 -4 -36 4 q-2 1 0 3 q2 4 13 5 q14 2 28 -4 q3 -2 -3 -8 Z" fill="#1F2A3D"/>
      </g>
      <g transform="translate(40, 100)">
        <rect x="0" y="-12" width="70" height="22" rx="6" fill="#0F1828"/>
        <path d="M8 -12 q3 -12 14 -12 h26 q11 0 14 12" fill="#1F2A3D"/>
        <circle cx="16" cy="12" r="6" fill="#0B1220"/>
        <circle cx="54" cy="12" r="6" fill="#0B1220"/>
      </g>
      <path d="M130 86 q-20 14 -40 14" stroke="#22C55E" strokeWidth="2" fill="none" strokeDasharray="3 3">
        <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1s" repeatCount="indefinite"/>
      </path>
      <text x="100" y="155" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#8995AE" letterSpacing="1">{T.how.steps[2].illu}</text>
    </svg>
  );
}

function SpecsCallout() {
  return (
    <svg viewBox="0 0 360 460" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(180, 30)">
        <rect x="-14" y="380" width="28" height="40" rx="2" fill="#1F2A3D"/>
        <rect x="-13" y="270" width="26" height="100" rx="4" fill="#0B1220" stroke="#1E63F5" strokeOpacity=".3"/>
        <circle cx="0" cy="296" r="9" fill="#22C55E"/>
        <path d="M-2 290 l-3 8 h4 l-1 6 5-8 h-4 l-1-6 z" fill="#06200E"/>
        <rect x="-7" y="320" width="14" height="6" rx="1" fill="#1E63F5" opacity=".6"/>
        <rect x="-7" y="330" width="14" height="2" rx="1" fill="#3A4868"/>
        <rect x="-7" y="336" width="10" height="2" rx="1" fill="#3A4868"/>
        <path d="M0 370 C 0 260, 0 160, -70 100" stroke="#1F2A3D" strokeWidth="8" fill="none" strokeLinecap="round"/>
        <path d="M-70 100 q-42 -12 -94 8 q-5 2 -3 8 q3 10 32 14 q38 6 76 -10 q5 -3 -7 -20 Z" fill="#1F2A3D"/>
        <ellipse cx="-118" cy="124" rx="40" ry="4" fill="#FBD27A" opacity=".7"/>
      </g>
      <line x1="20" y1="420" x2="340" y2="420" stroke="#8995AE" strokeWidth="1" strokeDasharray="3 4" opacity=".4"/>
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
function HowItWorks() {
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
        <div className="steps">
          {[1,2,3].map((s, i) => (
            <div className="step" key={s}>
              <div className="num">{T.how.stepLabel} 0{s}</div>
              <div className="illu"><StepIllustration step={s}/></div>
              <h3>{T.how.steps[i].title}</h3>
              <p>{T.how.steps[i].body}</p>
            </div>
          ))}
        </div>
        <PlugPlayDemo/>
      </div>
    </section>
  );
}

// ── Plug & Play Demo ───────────────────────────────────
function PlugPlayDemo() {
  const [step, setStep] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const timer = React.useRef(null);
  React.useEffect(() => {
    if (!playing) return;
    timer.current = setTimeout(() => {
      setStep(s => {
        if (s >= 2) { setPlaying(false); return s; }
        return s + 1;
      });
    }, 1800);
    return () => clearTimeout(timer.current);
  }, [step, playing]);
  const labels = T.demo.steps;
  return (
    <div className="demo" style={{ marginTop: 56 }}>
      <div className="demo-side">
        <span className="eyebrow green" style={{ alignSelf: 'flex-start' }}><span className="dot"></span>{T.demo.eyebrow}</span>
        <h3>{T.demo.title}</h3>
        <p>{T.demo.body}</p>
        <div className="demo-progress">
          {[0,1,2].map(i => (
            <div key={i} className={`bar ${i < step ? 'done' : ''} ${i === step ? 'active' : ''}`}>
              <div className="fill" style={{ width: i < step ? '100%' : i === step && playing ? '100%' : i === step ? '40%' : '0%', transition: i === step && playing ? 'width 1.7s linear' : 'width .2s' }}/>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 13, marginTop: 4, color: 'rgba(255,255,255,.85)', fontFamily: 'Sora, sans-serif', fontWeight: 600 }}>
          {labels[step].t}
        </div>
        <p style={{ fontSize: 13.5 }}>{labels[step].d}</p>
        <div className="demo-controls">
          <button className="primary" onClick={() => { if (step >= 2) { setStep(0); setPlaying(true); } else setPlaying(p => !p); }}>
            {playing ? T.demo.pause : step >= 2 ? T.demo.restart : T.demo.play}
          </button>
          <button onClick={() => { setPlaying(false); setStep(s => Math.max(0, s-1)); }}>{T.demo.prev}</button>
          <button onClick={() => { setPlaying(false); setStep(s => Math.min(2, s+1)); }}>{T.demo.next}</button>
        </div>
      </div>
      <div className="demo-stage">
        <div className="caption">{T.demo.caption}</div>
        <DemoStage step={step}/>
        <div className="ground"></div>
        <div className="stripes"></div>
      </div>
    </div>
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
