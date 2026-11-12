
import { createContext, useEffect, useState } from 'react';

const ThemeLanguageContext = createContext(null);

export function ThemeLanguageProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('site-theme') || 'dark';
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('site-language') || 'en';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('site-language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark'
    );
  };

  const toggleLanguage = () => {
    setLanguage((currentLanguage) =>
      currentLanguage === 'en' ? 'st' : 'en'
    );
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
    language,
    setLanguage,
    toggleLanguage,
  };

  return (
    <ThemeLanguageContext.Provider value={value}>
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export default ThemeLanguageContext;
