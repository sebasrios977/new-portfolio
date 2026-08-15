import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';
const DEFAULT_THEME = 'light';

/** Reads whatever the inline script in index.html already resolved. */
function currentTheme() {
  if (typeof document === 'undefined') return DEFAULT_THEME;
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : DEFAULT_THEME;
}

/**
 * Light/dark theme state.
 *
 * Light is the default for everyone; the OS preference is deliberately not
 * consulted. Only an explicit toggle changes the theme, and that choice is
 * stored, so it survives reloads and later visits.
 *
 * The initial value is read from the DOM rather than recomputed, because the
 * inline script in index.html has already applied any stored theme before React
 * mounts — recomputing here would risk a mismatch and a visible flash.
 */
export function useTheme() {
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
