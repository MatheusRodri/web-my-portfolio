import Link from 'next/link';
import style from './style.module.css';
import { useLanguage } from '@/context/LanguageContext';

interface  ProjectProps {
    name: string;
    techs: string;
    description: string;
    link: string;
}

export function Project({ name, description, techs, link }: ProjectProps) {
    const { t } = useLanguage();

    return (
        <div className={`${style.project} glass-card`}>
            <div className={style.content}>
                <h3 className={style.name}>{name}</h3>
                <p className={style.description}>{description}</p>
                <div className={style.techList}>
                    {techs.split(',').map((tech, i) => (
                        <span key={i} className={style.techBadge}>{tech.trim()}</span>
                    ))}
                </div>
            </div>
            <div className={style.footer}>
                <Link href={link} target="_blank" className={style.projectLink}>
                    {t.projects.viewProject}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </Link>
            </div>
        </div>
    )
}