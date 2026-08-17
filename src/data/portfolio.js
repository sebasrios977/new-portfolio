import reservoImg       from '../assets/reservo.jpg';
import facturaxmlImg    from '../assets/facturaxml.png';
import subtrackImg      from '../assets/subtrack.png';
import spaceExplorerImg from '../assets/space-explorer.jpg';
import coffeeShopImg    from '../assets/coffee-shop.jpg';
import aiPaletteImg     from '../assets/ai-palette.png';
import previewMusicImg  from '../assets/preview-music.jpg';

export const PROJECTS = [
  {
    // `featured` gets the wide, full-row treatment at the top of the grid.
    // Only one project should carry it — a second one would read as a tie.
    id: 7,
    featured: true,
    title: 'Reservo',
    tagColor: '#60A5FA',
    tech: ['React', 'Zustand', 'Tailwind CSS', 'Express', 'MongoDB'],
    color: '#60A5FA',
    image: reservoImg,
    link: 'https://app.tureservo.com/',
  },
  {
    id: 1,
    title: 'FacturaXML',
    tagColor: '#00E587',
    tech: ['React', 'Claude API', 'XML Parser', 'PUC Colombia'],
    color: '#00E587',
    image: facturaxmlImg,
    link: 'https://factura-xml.netlify.app/',
  },
  {
    id: 2,
    title: 'Subtrack',
    tagColor: '#A78BFA',
    tech: ['React', 'Zustand'],
    color: '#A78BFA',
    image: subtrackImg,
    link: 'https://subtrackmonthlyexpenses.netlify.app/',
  },
  {
    id: 3,
    title: 'Space Explorer',
    tagColor: '#38BDF8',
    tech: ['React', 'CSS', 'React Router'],
    color: '#38BDF8',
    image: spaceExplorerImg,
    link: 'https://spacetourism-srr.netlify.app/#/space/home',
  },
  {
    id: 4,
    title: 'Coffee Shop',
    tagColor: '#FB923C',
    tech: ['React', 'Context API', 'Stripe'],
    color: '#FB923C',
    image: coffeeShopImg,
    link: 'https://coffee-srr.netlify.app/menu',
  },
  {
    id: 5,
    title: 'AI Palette',
    tagColor: '#F472B6',
    tech: ['React', 'Tailwind CSS', 'Gemini AI'],
    color: '#F472B6',
    image: aiPaletteImg,
    link: 'https://ai-palette.netlify.app/',
  },
  {
    id: 6,
    title: 'Preview Music',
    tagColor: '#22D3EE',
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
