import { useState } from 'react';
import styles from '@/components/Header/styles.module.css';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useLanguage();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1 className={styles.logoText}>MR.</h1>
            </div>
            
            <nav className={`${styles.nav} ${menuOpen ? styles.navActive : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#skills" onClick={() => setMenuOpen(false)}>{t.nav.skills}</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#experience" onClick={() => setMenuOpen(false)}>{t.nav.experience}</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#education" onClick={() => setMenuOpen(false)}>{t.nav.academic}</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#projects" onClick={() => setMenuOpen(false)}>{t.nav.projects}</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a>
                    </li>
                </ul>
            </nav>

            <div className={styles.actions}>
                <LanguageSwitcher />
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
                    aria-label="Menu"
                    onClick={toggleMenu}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>
        </header>
    );
}