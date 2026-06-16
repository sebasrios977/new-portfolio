import { useState } from 'react';
import GlowDot from '../ui/GlowDot';
import { T } from '../../tokens';

const LINKS = [
  { id: 'hero',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills',   label: 'Skills' },
  { id: 'contact',  label: 'Contact' },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Nav({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-12 h-[60px] border-b border-port-border"
      style={{ background: `${T.bg}cc`, backdropFilter: 'blur(12px)' }}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo('hero')}
        className="flex items-center gap-2 font-mono text-[15px] font-bold text-port-green cursor-pointer bg-transparent border-0"
      >
        <GlowDot />
        SR<span className="text-port-muted">.dev</span>
      </button>

      {/* Desktop links */}
      <div className="hidden md:flex gap-1">
        {LINKS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="rounded-md px-3.5 py-1.5 font-body text-[13px] cursor-pointer transition-all duration-200"
            style={{
              background: active === id ? T.greenDim : 'transparent',
              border: active === id ? `1px solid ${T.green}40` : '1px solid transparent',
              color: active === id ? T.green : T.textSub,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-0 cursor-pointer"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-port-sub transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-port-sub transition-all ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-port-sub transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="absolute top-[60px] left-0 right-0 flex flex-col border-b border-port-border md:hidden"
          style={{ background: `${T.bg}f0`, backdropFilter: 'blur(12px)' }}
        >
          {LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => { scrollTo(id); setMenuOpen(false); }}
              className="text-left px-6 py-3.5 font-body text-sm border-0 cursor-pointer transition-colors duration-200"
              style={{
                background: 'transparent',
                color: active === id ? T.green : T.textSub,
                borderLeft: active === id ? `2px solid ${T.green}` : '2px solid transparent',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
