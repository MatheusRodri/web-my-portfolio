import style from './style.module.css';
import { Experience } from '@/components/Experience';
import { useLanguage } from '@/context/LanguageContext';

export default function ExperienceSection() {
    const { t } = useLanguage();

    return (
        <section id='experience' className={`${style.experienceSection} reveal-on-scroll`}>
            <h2 className={style.experienceTitle}>{t.experience.title}</h2>

            <div className={style.experienceList}>
                {t.experience.items.map((experience, index) => (
                    <Experience 
                        key={index} 
                        company={experience.company} 
                        role={experience.role} 
                        period={experience.period} 
                        description={experience.description} 
                        techs={experience.techs}
                    />
                ))}
            </div> 
        </section>
    )
}