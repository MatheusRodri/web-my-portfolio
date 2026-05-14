import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/data/translations';

/**
 * Component to toggle between different application languages.
 * Uses the LanguageContext to update global state.
 */
const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  // Configuration for supported languages
  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'PT', flag: 'https://flagcdn.com/w40/br.png' },
    { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'es', label: 'ES', flag: 'https://flagcdn.com/w40/es.png' },
  ];

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`lang-btn ${language === lang.code ? 'active' : ''}`}
          aria-label={`Switch to ${lang.label}`}
        >
          <img src={lang.flag} alt={`${lang.label} flag`} className="flag-img" />
          <span className="label">{lang.label}</span>
        </button>
      ))}

      {/* Scoped CSS for the LanguageSwitcher component */}
      <style jsx>{`
        .language-switcher {
          display: flex;
          gap: 0.5rem;
          background: rgba(15, 23, 42, 0.6);
          padding: 0.25rem;
          border-radius: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
        }
        .lang-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          padding: 0.4rem 0.8rem;
          border-radius: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 0.2s ease;
        }
        .lang-btn:hover {
          color: #f8fafc;
          background: rgba(255, 255, 255, 0.05);
        }
        .lang-btn.active {
          background: #3b82f6;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
        .flag-img {
          width: 24px;
          height: auto;
          border-radius: 2px;
          object-fit: cover;
        }
        @media (max-width: 640px) {
          .label {
            display: none;
          }
          .lang-btn {
            padding: 0.4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
