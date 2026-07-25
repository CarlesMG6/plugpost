/* PlugPost — English copy */
window.I18N = {
  code: 'en',

  nav: {
    aria: 'Main navigation',
    brandAria: 'PlugPost home',
    items: [
      { id: 'producto', label: 'Product' },
      { id: 'como', label: 'How it works' },
      { id: 'beneficios', label: 'Benefits' },
      { id: 'especificaciones', label: 'Specs' },
      { id: 'faq', label: 'FAQ' },
    ],
    cta: 'Book a demo',
    langAria: 'Change language',
  },

  hero: {
    eyebrow: 'Plug & Play · Made in Spain',
    title: 'The streetlight that [[b]]charges[[/b]] your [[g]]electric[[/g]] car.',
    sub: 'We replace existing streetlights with smart streetlights that have an EV charger built in. No roadworks, no trenching — using the public lighting network you already have in place.',
    cta1: 'Book a free demo',
    cta2: 'See how it works',
    badge: 'Charging · 7.4 kW',
    stat: 'LOWER INSTALLATION COST VS A TRADITIONAL CHARGING POINT',
  },

  problem: {
    eyebrow: 'The problem',
    title: 'Spain is falling short of the pace needed to electrify mobility.',
    lede: 'The European Alternative Fuels Infrastructure plan sets a clear target, but the reality on the ground lags far behind. Traditional installation means trenching, lengthy permits and expensive civil works.',
    stats: [
      { big: '+15', sup: '%', lbl: 'Transport’s share of CO₂ emissions. The shift to electric vehicles is unavoidable.', source: 'Source — European Commission' },
      { big: '300k+', sup: '', lbl: 'Public charging points Spain needs to roll out before 2030.', source: 'Source — EU infrastructure plan' },
      { big: '~70', sup: '%', lbl: 'Of urban households have no parking space of their own where they could charge a car.', source: 'Source — INE / industry data' },
    ],
  },

  how: {
    eyebrow: 'How it works',
    title: 'One streetlight. Three steps. Zero trenching.',
    lede: 'We tap into the existing public lighting network — that cable sitting idle all day — to power a charger built into the streetlight itself. You swap old for new in hours, not months.',
    stepLabel: 'STEP',
    steps: [
      { title: 'We remove the current streetlight', body: 'No digging up pavements, no road closures: the technician takes down the existing streetlight at its own base and connection.', illu: 'REMOVE LIGHT' },
      { title: 'We install PlugPost', body: 'PlugPost slots onto the same base, reuses the existing power supply and comes with the charger already integrated. Colour, height and luminaire can all be matched.', illu: 'INSTALL PLUGPOST' },
      { title: 'Ready to charge', body: 'The charger is live and connected. Residents charge their car right at the kerb; the streetlight keeps lighting the street as it always did.', illu: 'CHARGE' },
    ],
  },

  demo: {
    eyebrow: 'Interactive demo',
    title: 'Watch the transformation.',
    body: 'Hit play to see how a conventional streetlight becomes a working charging point, without touching the street.',
    caption: 'Schematic view · Not to scale',
    stageBefore: 'EXISTING STREETLIGHT',
    stageAfter: 'PLUGPOST STREETLIGHT',
    steps: [
      { t: 'Existing streetlight', d: 'The standard luminaire has been in place for decades. It only switches on at night; the power supply sits underused the rest of the day.' },
      { t: 'PlugPost installed', d: 'A Plug & Play replacement: same base, same cable. Now with a charger built into the column and a modern LED luminaire.' },
      { t: 'Charging a car', d: 'A resident parks, plugs in and starts charging at 7.4 kW. Sustainable energy that puts the night-time surplus to work.' },
    ],
    pause: '❚❚ Pause',
    restart: '↻ Restart',
    play: '▶ Play',
    prev: 'Previous',
    next: 'Next',
  },

  benefits: {
    eyebrow: 'Benefits',
    title: 'Cheaper, and faster.',
    lede: 'This is not just a streetlight with a socket. It is a rethink of the urban electrical grid so the switch to electric vehicles becomes affordable.',
    items: [
      { title: 'Zero civil works', body: 'We reuse the base and the power supply of the existing streetlight. No breaking up pavements, no trenching.' },
      { title: 'Installed in hours', body: 'A PlugPost streetlight is swapped in a single day by a two-person crew. No drawn-out permits.' },
      { title: 'Night-time energy put to use', body: 'It taps the surplus of renewable generation at night: the car charges when the grid is at its cleanest.' },
      { title: 'Connected and remotely managed', body: 'Remote charger management, consumption monitoring, billing and diagnostics from a single dashboard.' },
    ],
  },

  specs: {
    eyebrow: 'Technical specifications',
    title: 'Designed to blend in, built to last.',
    annotations: {
      luminaire: 'LED luminaire',
      charger: 'AC charger 7.4 kW',
      base: 'Existing base · no trenching',
    },
    rows: [
      { k: 'Electrical class', v: 'Class II · double insulation', d: 'No shock hazard, even in the event of a grid fault.' },
      { k: 'Charging power', v: '7.4 kW · single-phase (AC)', d: 'Compatible with most electric vehicles on the market.' },
      { k: 'Connector', v: 'Mennekes Type 2 · IEC 62196', d: 'European standard. Customer-supplied cable or optional retractable cable.' },
      { k: 'Luminaire', v: 'LED 60-150 W · 3000-4000 K', d: 'Colour and height configurable to match your existing street furniture.' },
      { k: 'Connectivity', v: '4G · OCPP 1.6 / 2.0', d: 'Telemetry, billing and remote management from a single dashboard.' },
      { k: 'Installation', v: 'Plug & Play onto the existing base', d: 'A two-person crew in around 2 hours. No civil works.' },
      { k: 'Available heights', v: '6, 8, 10 and 12 m', d: 'We match the bracket and the curvature of the column too.' },
    ],
  },

  audiences: {
    eyebrow: 'Who buys PlugPost',
    title: 'One solution for municipalities and for businesses.',
    public: {
      lbl: 'MUNICIPALITIES · PUBLIC BODIES',
      title: 'Large-scale rollout without digging up the pavement.',
      bullets: [
        'Reuses the municipality’s existing street lighting network.',
        'Eligible for Next Generation EU and MOVES III funding.',
        'Pilot scheme in 30 days: 5 streetlights, a technical report, real data.',
        'Remote management that integrates with your smart city systems.',
      ],
      cta: 'Talk to our public sector team',
    },
    private: {
      lbl: 'BUSINESS · FLEETS · RETAIL',
      title: 'Charging for your customers and your staff.',
      bullets: [
        'Shopping centres, private car parks, industrial estates.',
        'Pay-per-use, subscription or free-for-loyalty billing models.',
        'Your brand on the column: PlugPost is customised in colour and branding.',
        '24/7 SLA support with remote monitoring.',
      ],
      cta: 'Get a quote for my company',
    },
  },

  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'The questions we get asked most.',
    lede: 'If yours is not here, write to us directly. We reply within 24 working hours.',
    cta: 'Write to us',
    items: [
      { q: 'How much charging power does it deliver?', a: 'The standard unit delivers 7.4 kW single-phase (AC) through a Mennekes Type 2 connector. That is enough for a full overnight charge for most electric vehicles on the market. Higher-power variants are available on request.' },
      { q: 'Does it work with the current street lighting network?', a: 'Yes. We take advantage of the fact that lighting cabling is underused during the day. We run a prior survey of the network in your municipality or facility to confirm capacity and rebalancing.' },
      { q: 'How is billing handled for the end user?', a: 'PlugPost supports the OCPP 1.6 and 2.0 protocols, so it can be integrated with any e-mobility service provider (eMSP) or with your own system. The council or the company chooses the model: public tariff, subscription, or free as a loyalty perk.' },
      { q: 'Can it be matched to my street furniture?', a: 'Yes. We adapt the colour of the column, its height (6, 8, 10 or 12 m), the type of LED luminaire and the curvature of the bracket so it matches the existing streetlights. The visual change is practically imperceptible.' },
      { q: 'Is it eligible for public funding?', a: 'PlugPost fits the Next Generation EU and MOVES III funding lines aimed at public charging infrastructure. We support municipalities through the application and the reporting that follows.' },
    ],
  },

  contact: {
    eyebrow: 'Book a demo',
    title: 'Let’s put five PlugPost streetlights on your street.',
    body: 'Tell us who you are and where you want to deploy.',
    form: {
      name: 'Name',
      namePlaceholder: 'Marta García',
      email: 'Email',
      emailPlaceholder: 'marta@municipality.eu',
      org: 'Organisation',
      orgPlaceholder: 'Council / Company',
      type: 'Type',
      units: 'Estimated no. of streetlights',
      message: 'Message (optional)',
      messagePlaceholder: 'Tell us briefly about your case...',
      submit: 'Book a free demo',
      submitting: 'Sending…',
      note: 'We reply within 24 working hours',
      typeOptions: {
        'Ayuntamiento': 'City / town council',
        'Diputación / Comunidad': 'Provincial / regional government',
        'Empresa privada': 'Private company',
        'Operador de movilidad': 'Mobility operator',
        'Otro': 'Other',
      },
      unitOptions: {
        '1-5 (piloto)': '1-5 (pilot)',
        '5-25': '5-25',
        '25-100': '25-100',
        '100+': '100+',
      },
      errName: 'Your name is missing',
      errEmail: 'Invalid email address',
      errOrg: 'Organisation is missing',
      errSend: 'Something went wrong. Please try again.',
      errNetwork: 'Connection error. Please try again.',
      successTitle: 'Request received!',
      successBody: 'We will be in touch shortly with the next steps for the pilot.',
    },
  },

  footer: {
    tagline: 'The streetlight that charges your electric car. We replace existing streetlights with smart streetlights that have an EV charger built in.',
    colProduct: 'Product',
    colCompany: 'Company',
    colLegal: 'Legal',
    how: 'How it works',
    benefits: 'Benefits',
    specs: 'Specs',
    forCities: 'For municipalities',
    forCompanies: 'For businesses',
    contact: 'Contact',
    legalNotice: 'Legal notice',
    privacy: 'Privacy',
    cookies: 'Cookies',
    copyright: '© 2026 PlugPost. Made in Spain.',
    claim: 'Designed to accelerate electric mobility.',
  },

  modal: { close: 'Close' },

  legal: {
    aviso: {
      title: 'Legal Notice',
      lbl: 'ES · GDPR / LSSI-CE',
      sections: [
        { h: 'Website owner', body: 'In accordance with article 10 of Spanish Law 34/2002 of 11 July, on Information Society Services and Electronic Commerce (LSSI-CE), this website is owned by Defcon8 Enterprise S.L., with registered office at Avda. Corts Catalanes, 5 Trade Center, 08173 Sant Cugat del Vallès, Barcelona, Spain. Tax ID (CIF): B-66858382.' },
        { h: 'Purpose and terms of use', body: 'This Legal Notice governs access to and use of the website plugpost.es (hereinafter, the "Website"), owned by Defcon8 Enterprise S.L. Accessing the Website confers the status of User and implies full and unreserved acceptance of every provision set out in this Legal Notice.' },
        { h: 'Intellectual and industrial property', body: 'All content on the Website — text, photographs, graphics, images, icons, technology, software, logos, trademarks, trade names and any other sign capable of industrial and/or commercial use — is subject to the intellectual and industrial property rights of Defcon8 Enterprise S.L. or of third parties. Reproduction in whole or in part without written authorisation is expressly prohibited.' },
        { h: 'Liability', body: 'Defcon8 Enterprise S.L. does not warrant that access to the Website or its content will be free of errors, although it makes its best efforts to prevent them. PlugPost shall not be liable for any damage or loss arising from use of the Website or from any inability to access it.' },
        { h: 'Governing law and jurisdiction', body: 'These terms are governed by and construed in accordance with Spanish law. For the resolution of any dispute, the parties submit, waiving any other jurisdiction to which they may be entitled, to the Courts and Tribunals of Barcelona.' },
      ],
    },
    privacidad: {
      title: 'Privacy Policy',
      lbl: 'ES · GDPR / LOPDGDD',
      sections: [
        { h: 'Data controller', body: 'Defcon8 Enterprise S.L. · Tax ID (CIF): B-66858382 · Avda. Corts Catalanes, 5 Trade Center, 08173 Sant Cugat del Vallès, Barcelona' },
        { h: 'Purposes and legal basis', body: 'We process your personal data in order to: (a) handle demo requests and commercial enquiries received through the contact form (basis: pre-contractual measures); (b) send commercial communications about PlugPost products and services, where requested by the data subject (basis: consent); (c) comply with legal obligations.' },
        { h: 'Recipients', body: 'Your data will not be disclosed to third parties except where legally required. We work with cloud and CRM service providers located in the EEA or offering adequate safeguards (European Commission Standard Contractual Clauses).' },
        { h: 'Retention', body: 'Data will be kept for as long as a commercial relationship exists or until the data subject requests its deletion. In any event, for the periods required by applicable tax and commercial legislation.' },
        { h: 'Your rights', body: 'You may exercise your rights of access, rectification, erasure, objection, portability and restriction of processing by enclosing a copy of your ID document. You also have the right to lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).' },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      lbl: 'ES · GDPR / LSSI-CE',
      sections: [
        { h: 'What are cookies?', body: 'Cookies are small files placed on your device when you visit a website. They allow the site to remember your actions and preferences over a period of time.' },
        { h: 'Cookies we use', body: null, list: [
          'Essential technical cookies: required for the site to work (session, language preference). No consent needed.',
          'Analytics cookies (Google Analytics 4, anonymised): they measure site performance. Consent required.',
          'Marketing cookies: used to display relevant advertising. Only activated with express consent.',
        ] },
        { h: 'Duration', body: 'Session cookies are deleted when you close your browser. Persistent cookies last a maximum of 13 months, renewable on each visit.' },
        { h: 'Managing and withdrawing consent', body: 'You can accept or reject non-essential cookies through the preferences panel shown on your first visit. You can also configure your browser to block or delete cookies. Please note that disabling certain cookies may affect how the site works.' },
        { h: 'More information', body: 'For any query about our cookie policy, write to us or consult the Spanish Data Protection Agency (www.aepd.es).' },
      ],
    },
  },
};
