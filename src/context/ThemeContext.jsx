
import {
  createContext,
  useEffect,
  useState,
} from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('makhakhe-theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    try {
      localStorage.setItem('makhakhe-theme', theme);
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark'
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDark: theme === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
