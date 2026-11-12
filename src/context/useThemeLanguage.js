
import { useContext } from 'react';
import ThemeLanguageContext from './ThemeLanguageContext';

export function useThemeLanguage() {
  const context = useContext(ThemeLanguageContext);

  if (!context) {
    throw new Error(
      'useThemeLanguage must be used inside ThemeLanguageProvider.'
    );
  }

  return context;
}
