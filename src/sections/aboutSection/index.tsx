import style from './style.module.css';
import { useLanguage } from '@/context/LanguageContext';

export function AboutSection() {
    const { t } = useLanguage();

    return (
        <section id="about" className={`${style.aboutSection} reveal-on-scroll`}>
            <div className={style.aboutContent} >
                <h2 className={style.aboutTitle}>{t.about.title}</h2>
                <div className="glass-card">
                    <p className={style.aboutText}>
                        {t.about.content}
                    </p>
                </div>
            </div>
        </section>
    )
}