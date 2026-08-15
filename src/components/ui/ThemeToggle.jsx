import { FaSun, FaMoon } from 'react-icons/fa6';
import { T, alpha } from '../../tokens';

/**
 * Theme switch. Shows the theme you'd get by pressing it, not the current one,
 * so the icon reads as an action rather than a status.
 */
export default function ThemeToggle({ theme, onToggle, className = '' }) {
  const goingToLight = theme === 'dark';
  const label = goingToLight ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className={`flex items-center justify-center w-9 h-9 rounded-md cursor-pointer transition-colors duration-200 ${className}`}
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
      {goingToLight ? <FaSun size={14} /> : <FaMoon size={14} />}
    </button>
  );
}
