/* PlugPost — textos en español (idioma fuente) */
window.I18N = {
  code: 'es',

  nav: {
    aria: 'Navegación principal',
    brandAria: 'PlugPost inicio',
    items: [
      { id: 'producto', label: 'Producto' },
      { id: 'como', label: 'Cómo funciona' },
      { id: 'beneficios', label: 'Beneficios' },
      { id: 'especificaciones', label: 'Especificaciones' },
      { id: 'faq', label: 'FAQ' },
    ],
    cta: 'Solicitar demo',
    langAria: 'Cambiar idioma',
  },

  hero: {
    eyebrow: 'Plug & Play · Made in Spain',
    title: 'La farola que [[b]]carga[[/b]] tu coche [[g]]eléctrico[[/g]].',
    sub: 'Sustituimos farolas existentes por farolas inteligentes con cargador para vehículo eléctrico embebido. Sin obras, sin zanjas, aprovechando la red de alumbrado que ya tienes instalada.',
    cta1: 'Solicitar demo gratuita',
    cta2: 'Ver cómo funciona',
    badge: 'Cargando · 7,4 kW',
    stat: 'MENOR COSTE DE INSTALACIÓN VS PUNTO DE RECARGA TRADICIONAL',
  },

  problem: {
    eyebrow: 'El problema',
    title: 'España está por debajo del ritmo necesario para electrificar la movilidad.',
    lede: 'El Plan Director Europeo de Infraestructuras de Recarga marca un objetivo claro, pero la realidad sobre el asfalto va muy por detrás. La instalación tradicional requiere zanjas, permisos largos y obra civil costosa.',
    stats: [
      { big: '+15', sup: '%', lbl: 'Aportación del transporte a las emisiones de CO₂. La transición al vehículo eléctrico es ineludible.', source: 'Fuente — Comisión Europea' },
      { big: '300k+', sup: '', lbl: 'Puntos de recarga públicos que España necesita desplegar antes de 2030.', source: 'Fuente — Plan Director UE' },
      { big: '~70', sup: '%', lbl: 'De los hogares urbanos no dispone de plaza de parking propia donde cargar el coche.', source: 'Fuente — INE / sectorial' },
    ],
  },

  how: {
    eyebrow: 'Cómo funciona',
    title: 'Una farola. Tres pasos. Cero zanjas.',
    lede: 'Aprovechamos la red de alumbrado público existente — ese cable que duerme durante el día — para alimentar un cargador embebido en la propia farola. Sustituyes lo viejo por lo nuevo en horas, no en meses.',
    stepLabel: 'PASO',
    steps: [
      { title: 'Retiramos la farola actual', body: 'Sin abrir aceras ni cortar tráfico: el técnico desmonta la farola existente en su propia base y conexión.', illu: 'RETIRAR FAROLA' },
      { title: 'Instalamos PlugPost', body: 'Encajamos PlugPost en la misma base, reutilizamos la acometida y dejamos integrado el cargador. Adaptable en color, altura y luminaria.', illu: 'INSTALAR PLUGPOST' },
      { title: 'Listo para cargar', body: 'El cargador queda operativo y conectado. Los vecinos cargan su coche al pie de la acera; la farola sigue iluminando como siempre.', illu: 'CARGAR' },
    ],
  },

  demo: {
    eyebrow: 'Demo interactiva',
    title: 'Mira la transformación.',
    body: 'Pulsa play para ver cómo una farola tradicional se convierte en un punto de recarga operativo, sin tocar la calle.',
    caption: 'Vista esquemática · No a escala',
    stageBefore: 'FAROLA EXISTENTE',
    stageAfter: 'FAROLA PLUGPOST',
    steps: [
      { t: 'Farola existente', d: 'La luminaria estándar lleva décadas en su sitio. Solo se enciende de noche; la acometida está infrautilizada el resto del día.' },
      { t: 'PlugPost instalada', d: 'Reemplazo Plug & Play: misma base, mismo cable. Ahora con cargador embebido en la columna y luminaria LED moderna.' },
      { t: 'Cargando un coche', d: 'El vecino aparca, conecta y empieza a cargar a 7,4 kW. Energía sostenible aprovechando el superávit nocturno.' },
    ],
    pause: '❚❚ Pausar',
    restart: '↻ Reiniciar',
    play: '▶ Reproducir',
    prev: 'Anterior',
    next: 'Siguiente',
  },

  benefits: {
    eyebrow: 'Beneficios',
    title: 'Más barato, más rápido.',
    lede: 'No es solo una farola con un enchufe. Es repensar la red eléctrica urbana para que la transición al vehículo eléctrico sea posible a un coste razonable.',
    items: [
      { title: 'Cero obras civiles', body: 'Reutilizamos la base y la acometida de la farola existente. No hay que romper aceras ni hacer zanjas.' },
      { title: 'Instalación en horas', body: 'Una farola PlugPost se sustituye en una sola jornada por una pareja de instaladores. Sin permisos largos.' },
      { title: 'Energía nocturna útil', body: 'Aprovecha el superávit de producción renovable nocturno: el coche carga cuando la red está más limpia.' },
      { title: 'Conectada y telemandada', body: 'Gestión remota del cargador, monitorización de consumo, facturación y diagnóstico desde un único panel.' },
    ],
  },

  specs: {
    eyebrow: 'Especificaciones técnicas',
    title: 'Diseñada para integrarse, pensada para durar.',
    annotations: {
      luminaire: 'Luminaria LED',
      charger: 'Cargador AC 7,4 kW',
      base: 'Base existente · sin zanja',
    },
    rows: [
      { k: 'Clase eléctrica', v: 'Clase II · doble aislamiento', d: 'Sin riesgo de descarga incluso ante un fallo de la red.' },
      { k: 'Potencia de carga', v: '7,4 kW · monofásico (AC)', d: 'Compatible con la mayoría de vehículos eléctricos del mercado.' },
      { k: 'Conector', v: 'Mennekes Tipo 2 · IEC 62196', d: 'Estándar europeo. Cable de cliente o cable retráctil opcional.' },
      { k: 'Luminaria', v: 'LED 60-150 W · 3000-4000 K', d: 'Configurable en color y altura para igualar tu mobiliario actual.' },
      { k: 'Conectividad', v: '4G · OCPP 1.6 / 2.0', d: 'Telemetría, facturación y gestión remota desde un panel único.' },
      { k: 'Instalación', v: 'Plug & Play sobre base existente', d: 'Una pareja de instaladores en ~2 horas. Sin obra civil.' },
      { k: 'Altura disponible', v: '6, 8, 10 y 12 m', d: 'Adaptamos también el brazo y la curvatura del poste.' },
    ],
  },

  audiences: {
    eyebrow: 'Quién compra PlugPost',
    title: 'Una solución para ayuntamientos y para empresas.',
    public: {
      lbl: 'AYUNTAMIENTOS · ENTIDADES PÚBLICAS',
      title: 'Despliegue masivo sin abrir la acera.',
      bullets: [
        'Reaprovecha la red de alumbrado existente del municipio.',
        'Subvencionable con fondos Next Generation y MOVES III.',
        'Plan piloto en 30 días: 5 farolas, un informe técnico, datos reales.',
        'Telegestión integrada con tus sistemas de smart city.',
      ],
      cta: 'Hablar con nuestro equipo público',
    },
    private: {
      lbl: 'EMPRESAS · FLOTAS · RETAIL',
      title: 'Carga para tus clientes y tu plantilla.',
      bullets: [
        'Centros comerciales, parkings privados, polígonos industriales.',
        'Modelo de facturación por uso, suscripción o gratuidad fidelizada.',
        'Tu marca en la columna: PlugPost se personaliza en color y branding.',
        'Soporte SLA 24/7 con telemonitorización remota.',
      ],
      cta: 'Cotizar para mi empresa',
    },
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Resolvemos las dudas más comunes.',
    lede: 'Si tu pregunta no está aquí, escríbenos directamente. Respondemos en menos de 24 horas laborables.',
    cta: 'Escríbenos',
    items: [
      { q: '¿Qué potencia de carga ofrece?', a: 'La unidad estándar entrega 7,4 kW en monofásico (AC) con conector Mennekes Tipo 2. Es suficiente para una carga nocturna completa de la mayoría de los vehículos eléctricos del mercado. Hay variantes superiores bajo demanda.' },
      { q: '¿Funciona con la red de alumbrado actual?', a: 'Sí. Aprovechamos que el cableado del alumbrado está infrautilizado durante el día. Hacemos un estudio previo de la red en tu municipio o instalación para confirmar capacidad y rebalanceo.' },
      { q: '¿Cómo se gestiona la facturación al usuario?', a: 'PlugPost soporta los protocolos OCPP 1.6 y 2.0, lo que permite integrarla con cualquier operador de movilidad eléctrica (eMSP) o un sistema propio. El ayuntamiento o la empresa decide el modelo: tarifa pública, suscripción, gratuidad fidelizada.' },
      { q: '¿Se puede adaptar a mi mobiliario urbano?', a: 'Sí. Adaptamos el color de la columna, su altura (6, 8, 10 o 12 m), el tipo de luminaria LED y la curvatura del brazo para que coincida con las farolas existentes. La transición visual es prácticamente nula.' },
      { q: '¿Es subvencionable?', a: 'PlugPost encaja con las líneas de ayuda Next Generation EU y MOVES III dirigidas a infraestructura de recarga pública. Acompañamos a los ayuntamientos en la presentación y justificación de la subvención.' },
    ],
  },

  contact: {
    eyebrow: 'Solicita una demo',
    title: 'Pongamos cinco farolas PlugPost en tu calle.',
    body: 'Cuéntanos quién eres y dónde quieres desplegar.',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Marta García',
      email: 'Email',
      emailPlaceholder: 'marta@municipio.es',
      org: 'Organización',
      orgPlaceholder: 'Ayuntamiento / Empresa',
      type: 'Tipo',
      units: 'Nº farolas estimado',
      message: 'Mensaje (opcional)',
      messagePlaceholder: 'Cuéntanos brevemente el caso...',
      submit: 'Solicitar demo gratuita',
      submitting: 'Enviando…',
      note: 'Respondemos en menos de 24h laborables',
      typeOptions: {
        'Ayuntamiento': 'Ayuntamiento',
        'Diputación / Comunidad': 'Diputación / Comunidad',
        'Empresa privada': 'Empresa privada',
        'Operador de movilidad': 'Operador de movilidad',
        'Otro': 'Otro',
      },
      unitOptions: {
        '1-5 (piloto)': '1-5 (piloto)',
        '5-25': '5-25',
        '25-100': '25-100',
        '100+': '100+',
      },
      errName: 'Falta tu nombre',
      errEmail: 'Email no válido',
      errOrg: 'Falta la organización',
      errSend: 'Error al enviar. Inténtalo de nuevo.',
      errNetwork: 'Error de conexión. Inténtalo de nuevo.',
      successTitle: '¡Solicitud recibida!',
      successBody: 'Te contactaremos en breve con los siguientes pasos del piloto.',
    },
  },

  footer: {
    tagline: 'La farola que carga tu coche eléctrico. Sustituimos farolas existentes por farolas inteligentes con cargador para vehículo eléctrico embebido.',
    colProduct: 'Producto',
    colCompany: 'Empresa',
    colLegal: 'Legal',
    how: 'Cómo funciona',
    benefits: 'Beneficios',
    specs: 'Especificaciones',
    forCities: 'Para municipios',
    forCompanies: 'Para empresas',
    contact: 'Contacto',
    legalNotice: 'Aviso legal',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    copyright: '© 2026 PlugPost. Hecho en España.',
    claim: 'Diseñado para acelerar la movilidad eléctrica.',
  },

  modal: { close: 'Cerrar' },

  legal: {
    aviso: {
      title: 'Aviso Legal',
      lbl: 'ES · RGPD / LSSI-CE',
      sections: [
        { h: 'Titular del sitio web', body: 'En cumplimiento con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que este sitio web es titularidad de Defcon8 Enterprise S.L., con domicilio social en Avda. Corts Catalanes, 5 Trade Center, 08173 Sant Cugat del Vallès, Barcelona, España. CIF: B-66858382.' },
        { h: 'Objeto y condiciones de uso', body: 'El presente Aviso Legal regula el acceso y uso del sitio web plugpost.es (en adelante, el "Sitio Web"), del que es titular Defcon8 Enterprise S.L. El acceso al Sitio Web atribuye la condición de Usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.' },
        { h: 'Propiedad intelectual e industrial', body: 'Todos los contenidos del Sitio Web —textos, fotografías, gráficos, imágenes, iconos, tecnología, software, logotipos, marcas, nombres comerciales y demás signos susceptibles de uso industrial y/o comercial— están sujetos a derechos de propiedad intelectual e industrial de Defcon8 Enterprise S.L. o de terceros. Queda expresamente prohibida su reproducción total o parcial sin autorización escrita.' },
        { h: 'Responsabilidad', body: 'Defcon8 Enterprise S.L. no garantiza la ausencia de errores en el acceso al Sitio Web ni en sus contenidos, aunque despliega sus mejores esfuerzos para evitarlos. PlugPost no será responsable de los daños o perjuicios derivados del uso del Sitio Web o de su imposibilidad de acceso.' },
        { h: 'Legislación aplicable y jurisdicción', body: 'Las presentes condiciones se rigen e interpretan de conformidad con la legislación española. Para la resolución de controversias, las partes se someten, con renuncia a cualquier otro fuero que pudiera corresponderles, a los Juzgados y Tribunales de Barcelona.' },
      ],
    },
    privacidad: {
      title: 'Política de Privacidad',
      lbl: 'ES · RGPD / LOPDGDD',
      sections: [
        { h: 'Responsable del tratamiento', body: 'Defcon8 Enterprise S.L. · CIF: B-66858382 · Avda. Corts Catalanes, 5 Trade Center, 08173 Sant Cugat del Vallès, Barcelona' },
        { h: 'Finalidades y base jurídica', body: 'Tratamos sus datos personales para: (a) gestionar las solicitudes de demo e información comercial recibidas a través del formulario de contacto (base: ejecución de medidas precontractuales); (b) envío de comunicaciones comerciales sobre productos y servicios de PlugPost, previa solicitud del interesado (base: consentimiento); (c) cumplimiento de obligaciones legales.' },
        { h: 'Destinatarios', body: 'Sus datos no se cederán a terceros salvo obligación legal. Contamos con proveedores de servicios cloud y CRM ubicados en el EEE o con garantías adecuadas (Cláusulas Contractuales Tipo de la Comisión Europea).' },
        { h: 'Conservación', body: 'Los datos se conservarán mientras exista una relación comercial o hasta que el interesado solicite su supresión. En cualquier caso, durante los plazos exigidos por la normativa fiscal y mercantil vigente.' },
        { h: 'Derechos', body: 'Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, portabilidad y limitación del tratamiento, adjuntando copia de su DNI. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).' },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      lbl: 'ES · RGPD / LSSI-CE',
      sections: [
        { h: '¿Qué son las cookies?', body: 'Las cookies son pequeños ficheros que se instalan en su dispositivo al visitar un sitio web. Permiten al sitio recordar sus acciones y preferencias durante un período de tiempo.' },
        { h: 'Cookies que utilizamos', body: null, list: [
          'Cookies técnicas esenciales: necesarias para el funcionamiento del sitio (sesión, preferencias de idioma). No requieren consentimiento.',
          'Cookies analíticas (Google Analytics 4, anonimizado): miden el rendimiento del sitio. Requieren consentimiento.',
          'Cookies de marketing: utilizadas para mostrar publicidad relevante. Solo se activan con consentimiento expreso.',
        ] },
        { h: 'Duración', body: 'Las cookies de sesión se eliminan al cerrar el navegador. Las cookies persistentes tienen una duración máxima de 13 meses, renovable con cada visita.' },
        { h: 'Gestión y retirada del consentimiento', body: 'Puede aceptar o rechazar cookies no esenciales mediante el panel de preferencias que aparece en su primera visita. También puede configurar su navegador para bloquear o eliminar cookies. Tenga en cuenta que la desactivación de ciertas cookies puede afectar al funcionamiento del sitio.' },
        { h: 'Más información', body: 'Para cualquier consulta sobre nuestra política de cookies, escríbanos o consulte la Agencia Española de Protección de Datos (www.aepd.es).' },
      ],
    },
  },
};
