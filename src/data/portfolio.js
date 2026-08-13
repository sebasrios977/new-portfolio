import facturaxmlImg    from '../assets/facturaxml.png';
import subtrackImg      from '../assets/subtrack.png';
import spaceExplorerImg from '../assets/space-explorer.jpg';
import coffeeShopImg    from '../assets/coffee-shop.jpg';
import aiPaletteImg     from '../assets/ai-palette.png';
import previewMusicImg  from '../assets/preview-music.jpg';

export const PROJECTS = [
  {
    id: 1,
    title: 'FacturaXML',
    tag: 'Fintech · AI',
    tagColor: '#00E587',
    description:
      'Colombian electronic invoice analyzer (DIAN / UBL 2.1). Parses XML, extracts supplier data, line items and taxes, and suggests the accounting PUC category using AI.',
    tech: ['React', 'Claude API', 'XML Parser', 'PUC Colombia'],
    color: '#00E587',
    image: facturaxmlImg,
    link: 'https://factura-xml.netlify.app/',
  },
  {
    id: 2,
    title: 'Subtrack',
    tag: 'Finance',
    tagColor: '#A78BFA',
    description:
      'Subscription tracker that calculates your monthly and annual spending based on the subscriptions you enter.',
    tech: ['React', 'Zustand'],
    color: '#A78BFA',
    image: subtrackImg,
    link: 'https://subtrackmonthlyexpenses.netlify.app/',
  },
  {
    id: 3,
    title: 'Space Explorer',
    tag: 'Educational',
    tagColor: '#38BDF8',
    description:
      'Interactive solar system visualizer with real-time NASA data and 3D simulations.',
    tech: ['React', 'CSS', 'React Router'],
    color: '#38BDF8',
    image: spaceExplorerImg,
    link: 'https://spacetourism-srr.netlify.app/#/space/home',
  },
  {
    id: 4,
    title: 'Coffee Shop',
    tag: 'E-commerce',
    tagColor: '#FB923C',
    description:
      'Artisan coffee online store with shopping cart, origin filters, and a full order management system.',
    tech: ['React', 'Context API', 'Stripe'],
    color: '#FB923C',
    image: coffeeShopImg,
    link: 'https://coffee-srr.netlify.app/menu',
  },
  {
    id: 5,
    title: 'AI Palette',
    tag: 'AI · Design',
    tagColor: '#F472B6',
    description:
      'Color palette generator powered by Gemini AI. Describe a mood or theme and get a matching, ready-to-use color palette.',
    tech: ['React', 'Tailwind CSS', 'Gemini AI'],
    color: '#F472B6',
    image: aiPaletteImg,
    link: 'https://ai-palette.netlify.app/',
  },
  {
    id: 6,
    title: 'Preview Music',
    tag: 'Media',
    tagColor: '#22D3EE',
    description:
      'Simple music preview player that searches the iTunes API and streams 30-second track previews.',
    tech: ['Vue', 'iTunes API'],
    color: '#22D3EE',
    image: previewMusicImg,
    link: 'https://previewmusicsr.netlify.app/',
  },
];

export const SKILLS = [
  { name: 'React',        level: 85 },
  { name: 'JavaScript',   level: 80 },
  { name: 'HTML / CSS',   level: 90 },
  { name: 'Tailwind CSS', level: 75 },
  { name: 'Git & GitHub', level: 70 },
  { name: 'Node.js',      level: 55 },
  { name: 'REST APIs',    level: 75 },
  { name: 'TypeScript',   level: 70 },
  { name: 'Angular',      level: 80 },
  { name: 'Vue',          level: 90 },
  { name: 'Sass',         level: 80 },
  { name: 'Flutter',      level: 80 },
  { name: 'PHP',          level: 70 },
  { name: 'SQL',          level: 85 },
];

export const TOOLS = [
  'VS Code',
  'Figma',
  'Claude AI',
  'Postman',
  'GitHub Pages',
  'npm',
  'Chrome DevTools',
];
