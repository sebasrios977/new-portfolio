import { useLanguage } from '../../i18n/LanguageProvider';
import { T, alpha } from '../../tokens';

/**
 * Language switch. Shows the language you'd get by pressing it, not the current
 * one, matching how ThemeToggle behaves — the control reads as an action.
 */
export default function LanguageToggle({ className = '' }) {
  const { lang, toggle, t } = useLanguage();
  const target = lang === 'en' ? 'ES' : 'EN';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('nav.toSpanish')}
      title={t('nav.toSpanish')}
      className={`flex items-center justify-center h-9 px-2.5 rounded-md cursor-pointer font-mono text-[12px] font-bold tracking-[0.06em] transition-colors duration-200 ${className}`}
      style={{
        background: 'transparent',
        border: `1px solid ${T.border}`,
        color: T.textSub,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = alpha('green', 0.4);
        e.currentTarget.style.color = T.green;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = T.border;
        e.currentTarget.style.color = T.textSub;
      }}
    >
      {target}
    </button>
  );
}
