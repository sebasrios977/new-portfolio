/**
 * All user-facing copy, in one place so a translation can be reviewed without
 * reading the components.
 *
 * The two objects are kept structurally identical on purpose: same keys, same
 * shape. `t()` in LanguageProvider falls back to English for any key missing
 * from Spanish, so a gap degrades to English rather than rendering the raw key.
 *
 * Not translated, deliberately: project titles and technology names are proper
 * nouns, and the skill list in data/portfolio.js is names plus numbers.
 */
export const LANGUAGES = {
  en: { label: 'EN', name: 'English' },
  es: { label: 'ES', name: 'Español' },
};

export const DEFAULT_LANGUAGE = 'en';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      toggleMenu: 'Toggle menu',
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
      toSpanish: 'Ver en español',
    },
    hero: {
      badge: 'Available for work',
      role: 'Frontend Developer',
      bio: "I build modern, accessible interfaces with purpose. I'm passionate about projects that mix clean design with real functionality — from fintech tools to visual experiences.",
      viewProjects: 'View projects →',
      contact: 'Contact',
    },
    terminal: {
      status: 'Open to work ✓',
    },
    about: {
      eyebrow: 'About',
      titleLine1: 'Frontend developer',
      titleLine2: "with a designer's eye",
      p1: "I'm a Colombian frontend developer passionate about creating web experiences that feel as good as they look. I specialize in React and love when technology solves real problems.",
      p2: 'Every project is an opportunity to learn something new — from integrating AIs like Claude to visualizing spatial data in real time. I always seek the balance between clean code and design that communicates.',
      traits: [
        { title: 'Detail-oriented',     desc: 'Every pixel and interaction matters.' },
        { title: 'API Integration',     desc: 'REST, GraphQL, AI — I connect anything.' },
        { title: 'Continuous Learning', desc: "There's always something new to master." },
        { title: 'Based in Colombia',   desc: 'Available for global remote teams.' },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: "What I've built",
      viewProject: 'View project →',
      interfaceAlt: '{title} interface',
      items: {
        1: { tag: 'Fintech · AI',  description: 'Colombian electronic invoice analyzer (DIAN / UBL 2.1). Parses XML, extracts supplier data, line items and taxes, and suggests the accounting PUC category using AI.' },
        2: { tag: 'Finance',       description: 'Subscription tracker that calculates your monthly and annual spending based on the subscriptions you enter.' },
        3: { tag: 'Educational',   description: 'Interactive solar system visualizer with real-time NASA data and 3D simulations.' },
        4: { tag: 'E-commerce',    description: 'Artisan coffee online store with shopping cart, origin filters, and a full order management system.' },
        5: { tag: 'AI · Design',   description: 'Color palette generator powered by Gemini AI. Describe a mood or theme and get a matching, ready-to-use color palette.' },
        6: { tag: 'Media',         description: 'Simple music preview player that searches the iTunes API and streams 30-second track previews.' },
      },
    },
    skills: {
      eyebrow: 'Skills',
      title: 'My tech stack',
      tools: 'Tools & environment',
    },
    contact: {
      eyebrow: 'Contact',
      titleLine1: 'Have a project?',
      titleLine2: "Let's talk.",
      intro: "I'm available for freelance projects, collaborations, and remote work opportunities. Tell me your idea and I'll get back to you within 24 hours.",
      name: 'NAME',
      email: 'EMAIL',
      subject: 'SUBJECT',
      message: 'MESSAGE',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@example.com',
      subjectPlaceholder: 'How can I help you?',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send message →',
      sending: 'Sending...',
      sent: '✓ Message sent',
      error: '⚠ Please fill in all required fields.',
    },
    footer: {
      rights: '© All rights reserved',
      builtWith: '· Built with React.',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      about: 'Perfil',
      projects: 'Proyectos',
      skills: 'Skills',
      contact: 'Contacto',
      toggleMenu: 'Abrir menú',
      toLight: 'Cambiar a tema claro',
      toDark: 'Cambiar a tema oscuro',
      toSpanish: 'View in English',
    },
    hero: {
      badge: 'Disponible para trabajar',
      role: 'Desarrollador Frontend',
      bio: 'Construyo interfaces modernas y accesibles con propósito. Me apasionan los proyectos que combinan diseño limpio con funcionalidad real — desde herramientas fintech hasta experiencias visuales.',
      viewProjects: 'Ver proyectos →',
      contact: 'Contacto',
    },
    terminal: {
      status: 'Disponible ✓',
    },
    about: {
      eyebrow: 'Perfil',
      titleLine1: 'Desarrollador frontend',
      titleLine2: 'con ojo de diseñador',
      p1: 'Soy un desarrollador frontend colombiano apasionado por crear experiencias web que se sientan tan bien como se ven. Me especializo en React y disfruto cuando la tecnología resuelve problemas reales.',
      p2: 'Cada proyecto es una oportunidad para aprender algo nuevo — desde integrar IAs como Claude hasta visualizar datos espaciales en tiempo real. Siempre busco el equilibrio entre código limpio y diseño que comunica.',
      traits: [
        { title: 'Atención al detalle',  desc: 'Cada píxel y cada interacción importan.' },
        { title: 'Integración de APIs',  desc: 'REST, GraphQL, IA — conecto lo que sea.' },
        { title: 'Aprendizaje continuo', desc: 'Siempre hay algo nuevo por dominar.' },
        { title: 'Radicado en Colombia', desc: 'Disponible para equipos remotos globales.' },
      ],
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Lo que he construido',
      viewProject: 'Ver proyecto →',
      interfaceAlt: 'Interfaz de {title}',
      items: {
        1: { tag: 'Fintech · IA',   description: 'Analizador de factura electrónica colombiana (DIAN / UBL 2.1). Procesa el XML, extrae datos del proveedor, ítems e impuestos, y sugiere la cuenta PUC contable con IA.' },
        2: { tag: 'Finanzas',       description: 'Gestor de suscripciones que calcula tu gasto mensual y anual a partir de las suscripciones que registras.' },
        3: { tag: 'Educativo',      description: 'Visualizador interactivo del sistema solar con datos de la NASA en tiempo real y simulaciones 3D.' },
        4: { tag: 'E-commerce',     description: 'Tienda de café artesanal con carrito de compras, filtros por origen y un sistema completo de gestión de pedidos.' },
        5: { tag: 'IA · Diseño',    description: 'Generador de paletas de color con Gemini AI. Describe un ambiente o tema y obtén una paleta lista para usar.' },
        6: { tag: 'Multimedia',     description: 'Reproductor que busca en la API de iTunes y reproduce adelantos de 30 segundos de cada canción.' },
      },
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Mi stack técnico',
      tools: 'Herramientas y entorno',
    },
    contact: {
      eyebrow: 'Contacto',
      titleLine1: '¿Tienes un proyecto?',
      titleLine2: 'Hablemos.',
      intro: 'Estoy disponible para proyectos freelance, colaboraciones y oportunidades de trabajo remoto. Cuéntame tu idea y te respondo en menos de 24 horas.',
      name: 'NOMBRE',
      email: 'CORREO',
      subject: 'ASUNTO',
      message: 'MENSAJE',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@ejemplo.com',
      subjectPlaceholder: '¿En qué puedo ayudarte?',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      send: 'Enviar mensaje →',
      sending: 'Enviando...',
      sent: '✓ Mensaje enviado',
      error: '⚠ Completa todos los campos obligatorios.',
    },
    footer: {
      rights: '© Todos los derechos reservados',
      builtWith: '· Hecho con React.',
    },
  },
};
