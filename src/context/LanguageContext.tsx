import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, TranslationType } from '../data/translations';

/**
 * Interface defining the shape of the language context
 */
interface LanguageContextType {
  language: Language; // Current selected language (pt, en, es)
  setLanguage: (lang: Language) => void; // Function to update the language
  t: TranslationType; // The current translation object based on the selected language
}

// Create the context with an undefined initial value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Provider component that wraps the application to provide language state
 */
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pt');

  // Initialize language from localStorage or browser preferences on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguageState(savedLanguage);
    } else {
      // Automatic browser language detection
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en' || browserLang === 'es' || browserLang === 'pt') {
        setLanguageState(browserLang as Language);
      }
    }
  }, []);

  /**
   * Updates the global language state and persists it to localStorage
   */
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Memoize or directly select the translation object based on current state
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Custom hook to easily access the language context in functional components
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
