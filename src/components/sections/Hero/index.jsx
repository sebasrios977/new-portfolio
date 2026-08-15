import GlowDot from '../../ui/GlowDot';
import Avatar from './Avatar';
import Terminal from './Terminal';
import { useLanguage } from '../../../i18n/LanguageProvider';
import { T, alpha } from '../../../tokens';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-5 md:px-12 pt-20 pb-12 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(${alpha('border', 0.13)} 1px, transparent 1px),
            linear-gradient(90deg, ${alpha('border', 0.13)} 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Radial glow overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 70% 50%, ${T.greenDim} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-[2] max-w-[1100px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 flex-wrap">
        {/* Left — text */}
        <div className="flex-1 min-w-0 md:min-w-[440px]">
          {/* Available badge */}
          <div className="flex items-center gap-2 font-mono text-[12px] text-port-green tracking-[0.16em] uppercase mb-5">
            <GlowDot />
            {t('hero.badge')}
          </div>

          <h1 className="font-display font-bold leading-[1.1] text-port-text mb-2" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Sebastian<br />
            <span style={{ background: `linear-gradient(135deg, ${T.green}, ${T.teal})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Rios
            </span>
          </h1>

          <p className="font-display text-port-sub font-normal mb-6" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)' }}>
            {t('hero.role')}
          </p>

          <p className="font-body text-[16px] text-port-sub leading-[1.7] max-w-[420px] mb-9">
            {t('hero.bio')}
          </p>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => scrollTo('projects')}
              className="rounded-lg px-7 py-3 font-display text-[14px] font-bold cursor-pointer border-0 transition-all duration-150"
              style={{
                background: T.green,
                color: T.onGreen,
                boxShadow: `0 0 20px ${T.greenGlow}`,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 4px 28px ${T.greenGlow}`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = `0 0 20px ${T.greenGlow}`; }}
            >
              {t('hero.viewProjects')}
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="rounded-lg px-7 py-3 font-display text-[14px] font-semibold cursor-pointer transition-all duration-150"
              style={{ background: 'transparent', border: `1px solid ${T.border}`, color: T.textSub }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.green; e.currentTarget.style.color = T.green; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.textSub; }}
            >
              {t('hero.contact')}
            </button>
          </div>
        </div>

        {/* Right — avatar + terminal */}
        <div className="flex flex-col items-center gap-8 w-full md:w-auto">
          {/* <Avatar /> */}
          <Terminal />
        </div>
      </div>
    </section>
  );
}
