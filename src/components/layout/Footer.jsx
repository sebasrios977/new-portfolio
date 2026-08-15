import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { useLanguage } from '../../i18n/LanguageProvider';
import { T } from '../../tokens';

const SOCIALS = [
  { label: 'GitHub',   Icon: FaGithub,   href: 'https://github.com/sebasrios977' },
  { label: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/sebastianriosrico' },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 md:px-12 py-6 border-t border-port-border">
      <p className="font-mono text-xs text-port-muted">
        {t('footer.rights')} {new Date().getFullYear()} <span className="text-port-green">Sebastian Rios</span> {t('footer.builtWith')}
      </p>

      <div className="flex gap-5">
        {SOCIALS.map(({ label, Icon, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-port-muted transition-colors duration-150 hover:text-port-green"
            style={{ color: T.textMuted }}
            onMouseEnter={e => { e.currentTarget.style.color = T.green; }}
            onMouseLeave={e => { e.currentTarget.style.color = T.textMuted; }}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </footer>
  );
}
