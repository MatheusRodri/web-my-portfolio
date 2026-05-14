import { Skill } from '@/components/skill';
import style from './style.module.css';
import data from '@/data/data.json';
import { useLanguage } from '@/context/LanguageContext';

export default function SkillSection() {
    const { t } = useLanguage();

    return (
        <section id='skills' className={`${style.skillSection} reveal-on-scroll` }>
            <h2 className={style.skillTitle}>{t.skills.title}</h2>

                <div className={style.skillList}>
                    {data.Skills_user.map((skill, index) => (
                        <Skill key={index} name={skill.name} img={skill.img} />
                    ))}
                </div> 
        </section>
    )
}