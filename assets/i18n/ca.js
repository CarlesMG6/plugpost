/* PlugPost — textos en català */
window.I18N = {
  code: 'ca',

  nav: {
    aria: 'Navegació principal',
    brandAria: 'PlugPost inici',
    items: [
      { id: 'producto', label: 'Producte' },
      { id: 'como', label: 'Com funciona' },
      { id: 'beneficios', label: 'Beneficis' },
      { id: 'especificaciones', label: 'Especificacions' },
      { id: 'faq', label: 'FAQ' },
    ],
    cta: 'Demanar demo',
    langAria: 'Canviar d’idioma',
  },

  hero: {
    eyebrow: 'Plug & Play · Made in Spain',
    title: 'El fanal que [[b]]carrega[[/b]] el teu cotxe [[g]]elèctric[[/g]].',
    sub: 'Substituïm fanals existents per fanals intel·ligents amb carregador per a vehicle elèctric incorporat. Sense obres, sense rases, aprofitant la xarxa d’enllumenat que ja tens instal·lada.',
    cta1: 'Demanar demo gratuïta',
    cta2: 'Veure com funciona',
    badge: 'Carregant · 7,4 kW',
    stat: 'MENOR COST D’INSTAL·LACIÓ VS PUNT DE RECÀRREGA TRADICIONAL',
  },

  problem: {
    eyebrow: 'El problema',
    title: 'Espanya està per sota del ritme necessari per electrificar la mobilitat.',
    lede: 'El Pla Director Europeu d’Infraestructures de Recàrrega marca un objectiu clar, però la realitat sobre l’asfalt va molt endarrerida. La instal·lació tradicional requereix rases, permisos llargs i obra civil costosa.',
    stats: [
      { big: '+15', sup: '%', lbl: 'Aportació del transport a les emissions de CO₂. La transició al vehicle elèctric és ineludible.', source: 'Font — Comissió Europea' },
      { big: '300k+', sup: '', lbl: 'Punts de recàrrega públics que Espanya necessita desplegar abans del 2030.', source: 'Font — Pla Director UE' },
      { big: '~70', sup: '%', lbl: 'De les llars urbanes no disposa de plaça d’aparcament pròpia on carregar el cotxe.', source: 'Font — INE / sectorial' },
    ],
  },

  how: {
    eyebrow: 'Com funciona',
    title: 'Un fanal. Tres passos. Zero rases.',
    lede: 'Aprofitem la xarxa d’enllumenat públic existent — aquell cable que dorm durant el dia — per alimentar un carregador incorporat al mateix fanal. Substitueixes el vell pel nou en hores, no en mesos.',
    stepLabel: 'PAS',
    steps: [
      { title: 'Retirem el fanal actual', body: 'Sense obrir voreres ni tallar el trànsit: el tècnic desmunta el fanal existent a la seva pròpia base i connexió.', illu: 'RETIRAR FANAL' },
      { title: 'Instal·lem PlugPost', body: 'Encaixem PlugPost a la mateixa base, reutilitzem l’escomesa i deixem integrat el carregador. Adaptable en color, alçada i lluminària.', illu: 'INSTAL·LAR PLUGPOST' },
      { title: 'A punt per carregar', body: 'El carregador queda operatiu i connectat. Els veïns carreguen el cotxe al peu de la vorera; el fanal continua il·luminant com sempre.', illu: 'CARREGAR' },
    ],
  },

  demo: {
    eyebrow: 'Demo interactiva',
    title: 'Mira la transformació.',
    body: 'Prem play per veure com un fanal tradicional es converteix en un punt de recàrrega operatiu, sense tocar el carrer.',
    caption: 'Vista esquemàtica · No a escala',
    stageBefore: 'FANAL EXISTENT',
    stageAfter: 'FANAL PLUGPOST',
    steps: [
      { t: 'Fanal existent', d: 'La lluminària estàndard fa dècades que és al seu lloc. Només s’encén de nit; l’escomesa està infrautilitzada la resta del dia.' },
      { t: 'PlugPost instal·lat', d: 'Reemplaçament Plug & Play: mateixa base, mateix cable. Ara amb carregador incorporat a la columna i lluminària LED moderna.' },
      { t: 'Carregant un cotxe', d: 'El veí aparca, connecta i comença a carregar a 7,4 kW. Energia sostenible aprofitant el superàvit nocturn.' },
    ],
    pause: '❚❚ Pausar',
    restart: '↻ Reiniciar',
    play: '▶ Reproduir',
    prev: 'Anterior',
    next: 'Següent',
  },

  benefits: {
    eyebrow: 'Beneficis',
    title: 'Més barat, més ràpid.',
    lede: 'No és només un fanal amb un endoll. És repensar la xarxa elèctrica urbana perquè la transició al vehicle elèctric sigui possible a un cost raonable.',
    items: [
      { title: 'Zero obres civils', body: 'Reutilitzem la base i l’escomesa del fanal existent. No cal trencar voreres ni fer rases.' },
      { title: 'Instal·lació en hores', body: 'Un fanal PlugPost se substitueix en una sola jornada per una parella d’instal·ladors. Sense permisos llargs.' },
      { title: 'Energia nocturna útil', body: 'Aprofita el superàvit de producció renovable nocturn: el cotxe carrega quan la xarxa està més neta.' },
      { title: 'Connectat i telegestionat', body: 'Gestió remota del carregador, monitoratge de consum, facturació i diagnòstic des d’un únic panell.' },
    ],
  },

  specs: {
    eyebrow: 'Especificacions tècniques',
    title: 'Dissenyat per integrar-se, pensat per durar.',
    annotations: {
      luminaire: 'Lluminària LED',
      charger: 'Carregador AC 7,4 kW',
      base: 'Base existent · sense rasa',
    },
    rows: [
      { k: 'Classe elèctrica', v: 'Classe II · doble aïllament', d: 'Sense risc de descàrrega fins i tot davant d’una fallada de la xarxa.' },
      { k: 'Potència de càrrega', v: '7,4 kW · monofàsic (AC)', d: 'Compatible amb la majoria de vehicles elèctrics del mercat.' },
      { k: 'Connector', v: 'Mennekes Tipus 2 · IEC 62196', d: 'Estàndard europeu. Cable de client o cable retràctil opcional.' },
      { k: 'Lluminària', v: 'LED 60-150 W · 3000-4000 K', d: 'Configurable en color i alçada per igualar el teu mobiliari actual.' },
      { k: 'Connectivitat', v: '4G · OCPP 1.6 / 2.0', d: 'Telemetria, facturació i gestió remota des d’un panell únic.' },
      { k: 'Instal·lació', v: 'Plug & Play sobre base existent', d: 'Una parella d’instal·ladors en ~2 hores. Sense obra civil.' },
      { k: 'Alçada disponible', v: '6, 8, 10 i 12 m', d: 'Adaptem també el braç i la curvatura de la columna.' },
    ],
  },

  audiences: {
    eyebrow: 'Qui compra PlugPost',
    title: 'Una solució per a ajuntaments i per a empreses.',
    public: {
      lbl: 'AJUNTAMENTS · ENTITATS PÚBLIQUES',
      title: 'Desplegament massiu sense obrir la vorera.',
      bullets: [
        'Reaprofita la xarxa d’enllumenat existent del municipi.',
        'Subvencionable amb fons Next Generation i MOVES III.',
        'Pla pilot en 30 dies: 5 fanals, un informe tècnic, dades reals.',
        'Telegestió integrada amb els teus sistemes de smart city.',
      ],
      cta: 'Parlar amb el nostre equip públic',
    },
    private: {
      lbl: 'EMPRESES · FLOTES · RETAIL',
      title: 'Càrrega per als teus clients i la teva plantilla.',
      bullets: [
        'Centres comercials, aparcaments privats, polígons industrials.',
        'Model de facturació per ús, subscripció o gratuïtat fidelitzada.',
        'La teva marca a la columna: PlugPost es personalitza en color i branding.',
        'Suport SLA 24/7 amb telemonitoratge remot.',
      ],
      cta: 'Demanar pressupost per a la meva empresa',
    },
  },

  faq: {
    eyebrow: 'Preguntes freqüents',
    title: 'Resolem els dubtes més habituals.',
    lede: 'Si la teva pregunta no hi és, escriu-nos directament. Responem en menys de 24 hores laborables.',
    cta: 'Escriu-nos',
    items: [
      { q: 'Quina potència de càrrega ofereix?', a: 'La unitat estàndard lliura 7,4 kW en monofàsic (AC) amb connector Mennekes Tipus 2. És suficient per a una càrrega nocturna completa de la majoria dels vehicles elèctrics del mercat. Hi ha variants superiors sota comanda.' },
      { q: 'Funciona amb la xarxa d’enllumenat actual?', a: 'Sí. Aprofitem que el cablejat de l’enllumenat està infrautilitzat durant el dia. Fem un estudi previ de la xarxa al teu municipi o instal·lació per confirmar-ne la capacitat i el reequilibri.' },
      { q: 'Com es gestiona la facturació a l’usuari?', a: 'PlugPost admet els protocols OCPP 1.6 i 2.0, cosa que permet integrar-lo amb qualsevol operador de mobilitat elèctrica (eMSP) o un sistema propi. L’ajuntament o l’empresa decideix el model: tarifa pública, subscripció, gratuïtat fidelitzada.' },
      { q: 'Es pot adaptar al meu mobiliari urbà?', a: 'Sí. Adaptem el color de la columna, la seva alçada (6, 8, 10 o 12 m), el tipus de lluminària LED i la curvatura del braç perquè coincideixi amb els fanals existents. La transició visual és pràcticament nul·la.' },
      { q: 'És subvencionable?', a: 'PlugPost encaixa amb les línies d’ajut Next Generation EU i MOVES III dirigides a infraestructura de recàrrega pública. Acompanyem els ajuntaments en la presentació i justificació de la subvenció.' },
    ],
  },

  contact: {
    eyebrow: 'Demana una demo',
    title: 'Posem cinc fanals PlugPost al teu carrer.',
    body: 'Explica’ns qui ets i on vols desplegar.',
    form: {
      name: 'Nom',
      namePlaceholder: 'Marta Garcia',
      email: 'Email',
      emailPlaceholder: 'marta@municipi.cat',
      org: 'Organització',
      orgPlaceholder: 'Ajuntament / Empresa',
      type: 'Tipus',
      units: 'Nre. de fanals estimat',
      message: 'Missatge (opcional)',
      messagePlaceholder: 'Explica’ns breument el cas...',
      submit: 'Demanar demo gratuïta',
      submitting: 'Enviant…',
      note: 'Responem en menys de 24 h laborables',
      typeOptions: {
        'Ayuntamiento': 'Ajuntament',
        'Diputación / Comunidad': 'Diputació / Comunitat',
        'Empresa privada': 'Empresa privada',
        'Operador de movilidad': 'Operador de mobilitat',
        'Otro': 'Altres',
      },
      unitOptions: {
        '1-5 (piloto)': '1-5 (pilot)',
        '5-25': '5-25',
        '25-100': '25-100',
        '100+': '100+',
      },
      errName: 'Falta el teu nom',
      errEmail: 'Email no vàlid',
      errOrg: 'Falta l’organització',
      errSend: 'Error en enviar. Torna-ho a provar.',
      errNetwork: 'Error de connexió. Torna-ho a provar.',
      successTitle: 'Sol·licitud rebuda!',
      successBody: 'Et contactarem molt aviat amb els següents passos del pilot.',
    },
  },

  footer: {
    tagline: 'El fanal que carrega el teu cotxe elèctric. Substituïm fanals existents per fanals intel·ligents amb carregador per a vehicle elèctric incorporat.',
    colProduct: 'Producte',
    colCompany: 'Empresa',
    colLegal: 'Legal',
    how: 'Com funciona',
    benefits: 'Beneficis',
    specs: 'Especificacions',
    forCities: 'Per a municipis',
    forCompanies: 'Per a empreses',
    contact: 'Contacte',
    legalNotice: 'Avís legal',
    privacy: 'Privacitat',
    cookies: 'Cookies',
    copyright: '© 2026 PlugPost. Fet a Espanya.',
    claim: 'Dissenyat per accelerar la mobilitat elèctrica.',
  },

  modal: { close: 'Tancar' },

  legal: {
    aviso: {
      title: 'Avís Legal',
      lbl: 'ES · RGPD / LSSI-CE',
      sections: [
        { h: 'Titular del lloc web', body: 'En compliment de l’article 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), s’informa que aquest lloc web és titularitat de Defcon8 Enterprise S.L., amb domicili social a l’Avda. Corts Catalanes, 5 Trade Center, 08173 Sant Cugat del Vallès, Barcelona, Espanya. CIF: B-66858382.' },
        { h: 'Objecte i condicions d’ús', body: 'Aquest Avís Legal regula l’accés i l’ús del lloc web plugpost.es (en endavant, el "Lloc Web"), del qual és titular Defcon8 Enterprise S.L. L’accés al Lloc Web atribueix la condició d’Usuari i implica l’acceptació plena i sense reserves de totes les disposicions incloses en aquest Avís Legal.' },
        { h: 'Propietat intel·lectual i industrial', body: 'Tots els continguts del Lloc Web —textos, fotografies, gràfics, imatges, icones, tecnologia, programari, logotips, marques, noms comercials i altres signes susceptibles d’ús industrial i/o comercial— estan subjectes a drets de propietat intel·lectual i industrial de Defcon8 Enterprise S.L. o de tercers. Queda expressament prohibida la seva reproducció total o parcial sense autorització escrita.' },
        { h: 'Responsabilitat', body: 'Defcon8 Enterprise S.L. no garanteix l’absència d’errors en l’accés al Lloc Web ni en els seus continguts, tot i que hi esmerça els seus millors esforços per evitar-los. PlugPost no serà responsable dels danys o perjudicis derivats de l’ús del Lloc Web o de la impossibilitat d’accedir-hi.' },
        { h: 'Legislació aplicable i jurisdicció', body: 'Aquestes condicions es regeixen i s’interpreten de conformitat amb la legislació espanyola. Per a la resolució de controvèrsies, les parts se sotmeten, amb renúncia a qualsevol altre fur que els pogués correspondre, als Jutjats i Tribunals de Barcelona.' },
      ],
    },
    privacidad: {
      title: 'Política de Privacitat',
      lbl: 'ES · RGPD / LOPDGDD',
      sections: [
        { h: 'Responsable del tractament', body: 'Defcon8 Enterprise S.L. · CIF: B-66858382 · Avda. Corts Catalanes, 5 Trade Center, 08173 Sant Cugat del Vallès, Barcelona' },
        { h: 'Finalitats i base jurídica', body: 'Tractem les seves dades personals per a: (a) gestionar les sol·licituds de demo i informació comercial rebudes a través del formulari de contacte (base: execució de mesures precontractuals); (b) enviament de comunicacions comercials sobre productes i serveis de PlugPost, prèvia sol·licitud de l’interessat (base: consentiment); (c) compliment d’obligacions legals.' },
        { h: 'Destinataris', body: 'Les seves dades no se cediran a tercers llevat d’obligació legal. Comptem amb proveïdors de serveis cloud i CRM ubicats a l’EEE o amb garanties adequades (Clàusules Contractuals Tipus de la Comissió Europea).' },
        { h: 'Conservació', body: 'Les dades es conservaran mentre existeixi una relació comercial o fins que l’interessat en sol·liciti la supressió. En qualsevol cas, durant els terminis exigits per la normativa fiscal i mercantil vigent.' },
        { h: 'Drets', body: 'Pot exercir els seus drets d’accés, rectificació, supressió, oposició, portabilitat i limitació del tractament, adjuntant còpia del seu DNI. També té dret a presentar una reclamació davant l’Agencia Española de Protección de Datos (www.aepd.es).' },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      lbl: 'ES · RGPD / LSSI-CE',
      sections: [
        { h: 'Què són les cookies?', body: 'Les cookies són petits fitxers que s’instal·len al seu dispositiu en visitar un lloc web. Permeten al lloc recordar les seves accions i preferències durant un període de temps.' },
        { h: 'Cookies que utilitzem', body: null, list: [
          'Cookies tècniques essencials: necessàries per al funcionament del lloc (sessió, preferències d’idioma). No requereixen consentiment.',
          'Cookies analítiques (Google Analytics 4, anonimitzat): mesuren el rendiment del lloc. Requereixen consentiment.',
          'Cookies de màrqueting: utilitzades per mostrar publicitat rellevant. Només s’activen amb consentiment exprés.',
        ] },
        { h: 'Durada', body: 'Les cookies de sessió s’eliminen en tancar el navegador. Les cookies persistents tenen una durada màxima de 13 mesos, renovable amb cada visita.' },
        { h: 'Gestió i retirada del consentiment', body: 'Pot acceptar o rebutjar cookies no essencials mitjançant el panell de preferències que apareix en la seva primera visita. També pot configurar el seu navegador per bloquejar o eliminar cookies. Tingui en compte que la desactivació de determinades cookies pot afectar el funcionament del lloc.' },
        { h: 'Més informació', body: 'Per a qualsevol consulta sobre la nostra política de cookies, escrigui’ns o consulti l’Agencia Española de Protección de Datos (www.aepd.es).' },
      ],
    },
  },
};
