import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { translations, DEFAULT_LANGUAGE } from './translations';

const STORAGE_KEY = 'lang';
const LanguageContext = createContext(null);

function storedLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored in translations ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

/** Walks a dotted path ('hero.badge') through an object. */
function resolve(source, path) {
  return path.split('.').reduce((value, key) => (value == null ? undefined : value[key]), source);
}

/**
 * Site language.
 *
 * English is the default for everyone; the browser's language is deliberately
 * not consulted, so the site reads the same for every first-time visitor.
 * Switching stores the choice, which then wins on later visits.
 *
 * Copy is reached through context rather than props because every section needs
 * it — threading strings down the tree would touch every component signature.
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(storedLanguage);

  // Keeps the document language honest for screen readers and translation tools.
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggle = useCallback(() => {
    setLang(prev => {
      const next = prev === 'en' ? 'es' : 'en';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Blocked storage: the switch still works for this visit.
      }
      return next;
    });
  }, []);

  const value = useMemo(() => {
    /**
     * Looks up copy by dotted path. Falls back to English when a key is missing
     * from the active language, so a gap in a translation shows English text
     * rather than a raw key.
     */
    const t = path => {
      const hit = resolve(translations[lang], path);
      if (hit !== undefined) return hit;
      const fallback = resolve(translations[DEFAULT_LANGUAGE], path);
      if (fallback === undefined && import.meta.env.DEV) {
        console.warn(`[i18n] missing translation key: ${path}`);
      }
      return fallback !== undefined ? fallback : path;
    };
    return { lang, setLang, toggle, t };
  }, [lang, toggle]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
