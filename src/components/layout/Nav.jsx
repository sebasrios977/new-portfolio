import { useState } from 'react';
import GlowDot from '../ui/GlowDot';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageToggle from '../ui/LanguageToggle';
import { useLanguage } from '../../i18n/LanguageProvider';
import { T, alpha } from '../../tokens';

const LINK_IDS = ['hero', 'about', 'projects', 'skills', 'contact'];
const LABEL_KEYS = {
  hero: 'nav.home',
  about: 'nav.about',
  projects: 'nav.projects',
  skills: 'nav.skills',
  contact: 'nav.contact',
};

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Nav({ active, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-12 h-[60px] border-b border-port-border"
      style={{ background: alpha('bg', 0.8), backdropFilter: 'blur(12px)' }}
    >
      {/* Logo */}
      <button
        onClick={() => scrollTo('hero')}
        className="flex items-center gap-2 font-mono text-[15px] font-bold text-port-green cursor-pointer bg-transparent border-0"
      >
        <GlowDot />
        SR<span className="text-port-muted">.dev</span>
      </button>

      {/* Desktop links + controls */}
      <div className="hidden md:flex items-center gap-1">
        {LINK_IDS.map(id => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="rounded-md px-3.5 py-1.5 font-body text-[13px] cursor-pointer transition-all duration-200"
            style={{
              background: active === id ? T.greenDim : 'transparent',
              border: active === id ? `1px solid ${alpha('green', 0.25)}` : '1px solid transparent',
              color: active === id ? T.green : T.textSub,
            }}
          >
            {t(LABEL_KEYS[id])}
          </button>
        ))}
        <div className="flex items-center gap-2 ml-3">
          <LanguageToggle />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>

      {/* Mobile: both controls stay outside the burger so they're reachable
          without opening the menu first. */}
      <div className="md:hidden flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <button
          className="flex flex-col gap-1.5 p-1 ml-1 bg-transparent border-0 cursor-pointer"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={t('nav.toggleMenu')}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-port-sub transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-port-sub transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-port-sub transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="absolute top-[60px] left-0 right-0 flex flex-col border-b border-port-border md:hidden"
          style={{ background: alpha('bg', 0.94), backdropFilter: 'blur(12px)' }}
        >
          {LINK_IDS.map(id => (
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
              {t(LABEL_KEYS[id])}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
