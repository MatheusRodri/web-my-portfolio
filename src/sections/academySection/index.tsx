import style from './style.module.css';
import { Academic } from '@/components/Academic';
import { useLanguage } from '@/context/LanguageContext';

export default function AcademicSection() {
    const { t } = useLanguage();

    return (
        <section id='education' className={`${style.academySection} reveal-on-scroll`}>
            <h2 className={style.academyTitle}>{t.academic.title}</h2>

            <div className={style.academyList}>
                {t.academic.items.map((academic, index) => (
                    <Academic 
                        key={index} 
                        institution={academic.institution} 
                        course={academic.course} 
                        period={academic.period}
                    />
                ))}
            </div> 
        </section>
    )
}