import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

/** Reads whatever the inline script in index.html already resolved. */
function currentTheme() {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

/**
 * Light/dark theme state.
 *
 * The initial value is read from the DOM rather than recomputed, because the
 * inline script in index.html has already applied the right theme before React
 * mounts — recomputing here would risk a mismatch and a visible flash.
 *
 * Until the visitor picks a theme, the site follows the OS setting and keeps
 * following it if that changes. Choosing a theme stores it and stops the
 * automatic following, which is what an explicit choice should mean.
 */
export function useTheme() {
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = e => {
      if (localStorage.getItem(STORAGE_KEY)) return; // user chose; don't override
      setTheme(e.matches ? 'light' : 'dark');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Private mode or blocked storage: the toggle still works for this visit.
      }
      return next;
    });
  }, []);

  return [theme, toggle];
}
