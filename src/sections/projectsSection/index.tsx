import { Project } from '@/components/Project';
import style from './style.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function ProjectsSection() {
    const { t } = useLanguage();

    return (
        <section id='projects' className={`${style.projectSection} reveal-on-scroll`}>
            <h2 className={style.projectTitle}>{t.projects.title}</h2>

            <div className={style.projectList}>
                {t.projects.items.map((project, index) => (
                    <Project key={index} name={project.name} description={project.description} techs={project.techs} link={project.link}  />
                ))}
            </div> 
        </section>
    )
}