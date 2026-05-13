// ────────────────────────────────────────────────────────────
// NAVIGATION
// ────────────────────────────────────────────────────────────
export const navigation = [
  { label: 'Plataformas', href: '#plataformas' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Formación', href: '#formacion' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contacto', href: '#contacto' },
]

// ────────────────────────────────────────────────────────────
// HERO BADGES — métricas integradas, no sección aparte
// ────────────────────────────────────────────────────────────
export const heroBadges = [
  { value: 5, prefix: '+', duration: 1, label: 'años en producción', tone: 'cyan' },
  { value: 300, prefix: '+', duration: 1.5, label: 'tiendas online trabajadas', tone: 'cyan' },
  { value: 'PrestaShop', label: 'Front-end Developer · Certificación', tone: 'violet' },
  { value: 'Full Stack', label: 'frontend · backend · servidores', tone: 'emerald' },
]

// ────────────────────────────────────────────────────────────
// PLATFORMS — 3 tarjetas expandibles
// resumen visible + sub-bloques al abrir
// ────────────────────────────────────────────────────────────
export const platforms = [
  {
    id: 'prestashop',
    title: 'PrestaShop',
    icon: 'Store',
    accent: 'cyan',
    lead: 'Especialización principal · certificación oficial',
    summary:
      'Módulos a medida, multitienda, compatibilidades con Addons, errores 500, checkout y back office. Donde más profundo trabajo.',
    chips: ['Módulos', 'Multitienda', 'Addons', 'Symfony'],
    groups: [
      {
        title: 'Desarrollo de módulos y funcionalidades',
        items: [
          'Desarrollo de módulos propios.',
          'Adaptación y mantenimiento de módulos existentes.',
          'Uso de hooks, plantillas, controladores y configuraciones de back office.',
          'Creación de funcionalidades a medida adaptadas a la operativa de cada tienda.',
          'Publicación, revisión y mantenimiento de módulos en PrestaShop Addons.',
        ],
      },
      {
        title: 'Personalización de tienda y experiencia de compra',
        items: [
          'Personalización de temas, plantillas .tpl y componentes visuales.',
          'Ajustes en ficha de producto, categorías, carrito y checkout.',
          'Corrección de errores visuales y adaptación responsive.',
          'Configuración de promociones, descuentos, reglas de carrito y estados de pedido.',
        ],
      },
      {
        title: 'Incidencias, compatibilidad y producción',
        items: [
          'Resolución de errores 500, errores PHP/Smarty e incidencias en back office.',
          'Diagnóstico de conflictos entre módulos, tema, versión de PrestaShop y servidor.',
          'Revisión de logs, permisos, caché, SSL y configuración del entorno.',
          'Validación de pagos, envíos, emails transaccionales y flujo completo de compra.',
          'Corrección de problemas relacionados con emails de pedido, estados de pedido y notificaciones automáticas.',
        ],
      },
      {
        title: 'Rendimiento, SEO técnico y mantenimiento',
        items: [
          'Optimización de velocidad, caché, imágenes, CSS y JavaScript.',
          'Revisión de módulos que afectan al rendimiento.',
          'Configuración de URLs amigables, metadatos, sitemaps, redirecciones 301 e indexación básica.',
          'Actualizaciones controladas, copias de seguridad y pruebas antes de producción.',
        ],
      },
      {
        title: 'Documentos, emails, datos e integraciones',
        items: [
          'Personalización de facturas, albaranes y documentos PDF.',
          'Personalización de plantillas de correo transaccional en PrestaShop.',
          'Adaptación visual y funcional de emails de pedido, cambios de estado y comunicaciones automáticas.',
          'Importación, exportación y ajuste de datos de productos, pedidos o clientes.',
          'Integración con APIs externas, analítica, píxeles, transportistas o pasarelas de pago.',
          'Trabajo con entornos multitienda y configuraciones específicas por tienda.',
        ],
      },
    ],
  },
  {
    id: 'shopify',
    title: 'Shopify',
    icon: 'ShoppingCart',
    accent: 'violet',
    lead: 'Personalización avanzada de temas',
    summary:
      'Liquid, secciones, bloques, snippets, productos, colecciones, variantes, metafields, apps y funcionalidades con JavaScript.',
    chips: ['Liquid', 'Metafields', 'Apps', 'JS'],
    groups: [
      {
        title: 'Personalización de temas y Liquid',
        items: [
          'Personalización de temas Shopify mediante Liquid, secciones, bloques y snippets.',
          'Adaptación visual de páginas de producto, colecciones, carrito y otras plantillas de la tienda.',
          'Ajustes en cabecera, navegación, menús, footer, banners y bloques promocionales.',
          'Creación y modificación de componentes visuales adaptados al diseño y necesidades del cliente.',
          'Ajustes responsive para mejorar la experiencia en móvil, tablet y escritorio.',
        ],
      },
      {
        title: 'Catálogo, productos y contenido dinámico',
        items: [
          'Configuración de productos, colecciones, variantes y opciones de producto.',
          'Uso de metafields para ampliar y mostrar información personalizada en productos o colecciones.',
          'Adaptación de fichas de producto con contenido dinámico y bloques personalizados.',
          'Organización del catálogo y ajustes visuales en listados de colección.',
          'Revisión y ajuste de contenidos, imágenes, textos y datos de producto.',
        ],
      },
      {
        title: 'Funcionalidades frontend y experiencia de usuario',
        items: [
          'Desarrollo de funcionalidades específicas con JavaScript.',
          'Mejora de interacciones en ficha de producto, colecciones, carrito y navegación.',
          'Implementación de elementos interactivos como sliders, banners, tabs, acordeones o bloques personalizados.',
          'Corrección de errores visuales entre dispositivos y navegadores.',
          'Mejora de usabilidad y experiencia móvil en puntos clave de la tienda.',
        ],
      },
      {
        title: 'Apps, desarrollos privados e integraciones',
        items: [
          'Instalación, configuración y adaptación visual de apps en Shopify.',
          'Creación y configuración de apps privadas para Shopify según necesidades específicas del proyecto.',
          'Desarrollo de soluciones personalizadas conectadas con la tienda mediante apps privadas.',
          'Resolución de conflictos entre apps, tema y funcionalidades existentes.',
          'Integración de píxeles de seguimiento, herramientas de analítica y scripts externos.',
          'Configuración técnica de herramientas relacionadas con marketing, medición o seguimiento.',
          'Revisión del impacto de apps y scripts en el funcionamiento de la tienda.',
        ],
      },
      {
        title: 'Mantenimiento, soporte y publicación de cambios',
        items: [
          'Revisión y ajuste de tiendas tras cambios en tema, apps o configuración.',
          'Optimización de imágenes, CSS, JavaScript y recursos que afectan al rendimiento.',
          'Pruebas funcionales antes y después de publicar cambios.',
          'Soporte técnico a clientes sobre gestión de productos, colecciones, variantes, metafields y secciones del tema.',
          'Traducción de necesidades del cliente a soluciones visuales, funcionales o técnicas dentro del ecosistema Shopify.',
        ],
      },
    ],
  },
  {
    id: 'wordpress',
    title: 'WordPress',
    icon: 'Layers',
    accent: 'emerald',
    lead: 'Mantenimiento, personalización y SEO técnico',
    summary:
      'Setup, temas, plugins, constructores visuales, SEO técnico, rendimiento y seguridad sobre sitios en producción.',
    chips: ['Temas', 'Plugins', 'SEO', 'Elementor'],
    groups: [
      {
        title: 'Instalación, configuración y mantenimiento',
        items: [
          'Instalación y configuración de sitios WordPress.',
          'Configuración de ajustes generales, usuarios, roles, permisos, menús, páginas, entradas y medios.',
          'Mantenimiento de sitios WordPress mediante actualizaciones controladas de núcleo, temas y plugins.',
          'Copias de seguridad, restauraciones y revisión de estabilidad antes y después de cambios importantes.',
          'Configuración de SMTP, correos del sitio y resolución de errores tras actualizaciones.',
        ],
      },
      {
        title: 'Diseño, temas y experiencia visual',
        items: [
          'Personalización de temas WordPress y creación o adaptación de child themes.',
          'Maquetación con HTML/CSS dentro de WordPress.',
          'Personalización de cabeceras, pies, menús, páginas interiores y bloques visuales.',
          'Trabajo con constructores visuales como Elementor, WPBakery, Divi u otros.',
          'Creación de landing pages, ajustes responsive, corrección de errores visuales y optimización de experiencia móvil.',
        ],
      },
      {
        title: 'Plugins, compatibilidad y funcionalidades',
        items: [
          'Instalación, configuración y adaptación de plugins según necesidades del proyecto.',
          'Resolución de conflictos entre plugins, tema y versión de WordPress.',
          'Configuración de plugins de caché, SEO, seguridad, formularios, multidioma, cookies y RGPD.',
          'Configuración de formularios de contacto y protección contra spam.',
          'Adaptación de funcionalidades existentes para mejorar la gestión o el comportamiento del sitio.',
        ],
      },
      {
        title: 'Desarrollo y personalización avanzada',
        items: [
          'Creación de custom post types y campos personalizados.',
          'Modificación de functions.php y adaptación de funcionalidades del tema.',
          'Ajustes personalizados mediante PHP, HTML, CSS y JavaScript.',
          'Adaptación de estructuras de contenido para facilitar la gestión del sitio.',
          'Desarrollo de soluciones a medida dentro del ecosistema WordPress.',
        ],
      },
      {
        title: 'SEO técnico, analítica y rendimiento',
        items: [
          'Configuración de Yoast SEO, Rank Math u otros plugins SEO.',
          'Revisión de metatítulos, metadescripciones, sitemaps, redirecciones 301 e indexación básica.',
          'Integración de Google Analytics, Google Tag Manager, Search Console y píxeles de seguimiento.',
          'Optimización de imágenes, caché, minificación de CSS/JS y revisión de Core Web Vitals.',
          'Mejora del rendimiento y estructura técnica del sitio.',
        ],
      },
      {
        title: 'Seguridad, estabilidad y soporte',
        items: [
          'Instalación y configuración de plugins de seguridad.',
          'Configuración de backups automáticos, revisión de permisos y configuración de SSL.',
          'Limpieza o revisión de malware cuando aplica.',
          'Revisión de logs, errores PHP y problemas de estabilidad.',
          'Soporte técnico sobre gestión del sitio, resolución de incidencias y validación tras cambios o actualizaciones.',
        ],
      },
    ],
  },
]

// ────────────────────────────────────────────────────────────
// EXPERIENCE — 5 bloques agrupados, sin nube de marcas
// ────────────────────────────────────────────────────────────
export const experience = {
  company: 'Artdinamica',
  role: 'Desarrollador Full Stack',
  period: 'sept. 2021 — actualidad',
  location: 'Madrid, España',
  intro:
    'Desarrollo, mantenimiento y evolución de tiendas online y sitios web. Perfil full stack, foco en producción y trato directo con cliente.',
  blocks: [
    {
      title: 'Desarrollo e-commerce',
      icon: 'ShoppingCart',
      text: 'Tiendas en PrestaShop, Shopify y WordPress. Frontend con HTML, CSS, JavaScript y Liquid; backend con PHP, Symfony y MySQL.',
    },
    {
      title: 'Módulos y personalización',
      icon: 'Layers',
      text: 'Módulos PrestaShop a medida, adaptación de módulos existentes, personalización de temas y trabajo con Addons.',
    },
    {
      title: 'Incidencias y producción',
      icon: 'LifeBuoy',
      text: 'Resolución de errores 500, checkout, carrito, pagos, envíos, emails transaccionales y validación antes de campañas en tiendas activas.',
    },
    {
      title: 'Rendimiento y SEO técnico',
      icon: 'Gauge',
      text: 'Core Web Vitals, caché, imágenes, redirecciones 301, sitemaps, indexación e integración de Analytics, GTM y Search Console.',
    },
    {
      title: 'Cliente y negocio',
      icon: 'BadgeCheck',
      text: 'Recogida de requisitos, propuestas técnicas, soporte directo y traducción de necesidades de negocio a soluciones reales.',
    },
  ],
}

// ────────────────────────────────────────────────────────────
// EDUCATION & CERTIFICATION — cert con protagonismo
// ────────────────────────────────────────────────────────────
export const certification = {
  title: 'PrestaShop Front-end Developer',
  issuer: 'PrestaShop',
  description:
    'Certificación oficial en desarrollo frontend para PrestaShop. Acredita la personalización, adaptación y desarrollo visual de tiendas dentro del ecosistema.',
  tags: ['PrestaShop', 'Frontend', 'E-commerce'],
}

export const education = [
  {
    center: 'Cesur',
    title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
    period: 'sept. 2020 — jun. 2022',
    detail:
      'Base técnica en PHP, JavaScript, Symfony, MySQL y arquitectura de aplicaciones web.',
    highlight: 'Calificación media 9,36',
    honors: ['Programación', 'Desarrollo web en entorno servidor', 'Diseño de interfaces web', 'Proyecto Final de Ciclo'],
  },
  {
    center: 'IES Las Musas',
    title: 'Técnico Superior en Administración y Finanzas',
    period: 'sept. 2018 — jun. 2020',
    detail:
      'Visión de negocio aplicada a e-commerce: pedidos, facturación, pagos, procesos internos e integraciones.',
  },
]

// ────────────────────────────────────────────────────────────
// STACK — 7 grupos según brief
// ────────────────────────────────────────────────────────────
export const stack = [
  {
    title: 'Plataformas / CMS',
    items: ['PrestaShop', 'Shopify', 'WordPress'],
  },
  {
    title: 'Lenguajes',
    items: ['PHP', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Liquid'],
  },
  {
    title: 'Backend y bases de datos',
    items: ['Symfony', 'MySQL'],
  },
  {
    title: 'E-commerce',
    items: [
      'Módulos PrestaShop',
      'PrestaShop Addons',
      'Shopify Apps',
      'Multitienda',
      'Checkout',
      'Carrito',
      'Pedidos',
      'Reglas de carrito',
      'Emails transaccionales',
      'Facturas y albaranes PDF',
    ],
  },
  {
    title: 'WordPress',
    items: [
      'Temas WordPress',
      'Child themes',
      'Plugins WordPress',
      'Elementor',
      'WPBakery',
      'Divi',
      'Custom post types',
      'Campos personalizados',
      'functions.php',
      'Yoast SEO',
      'Rank Math',
    ],
  },
  {
    title: 'SEO, analítica y rendimiento',
    items: [
      'SEO técnico',
      'Core Web Vitals',
      'Caché',
      'Optimización de imágenes',
      'Minificación CSS/JS',
      'Sitemaps',
      'Redirecciones 301',
      'Google Analytics',
      'Google Tag Manager',
      'Search Console',
      'Píxeles de seguimiento',
    ],
  },
  {
    title: 'Herramientas y entorno técnico',
    items: [
      'Git',
      'FTP/SFTP',
      'cPanel',
      'Plesk',
      'Hosting',
      'DNS',
      'SSL',
      'Logs de servidor',
      'Copias de seguridad',
      'Entornos de prueba',
      'Subidas a producción',
    ],
  },
  {
    title: 'IA aplicada al desarrollo',
    items: [
      'ChatGPT',
      'Claude Code',
      'Codex',
      'Gemini',
      'Perplexity',
      'Programación asistida',
      'Debugging y revisión de código',
      'Refactorización',
      'Documentación técnica',
      'Redacción SEO',
      'Investigación técnica',
      'Generación de imágenes',
      'Optimización de flujos de trabajo',
    ],
  },
]
