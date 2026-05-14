import style from './style.module.css';

interface ExperienceProps {
    company: string;
    role: string;
    period: string;
    description: string;
    techs: string;
}

export function Experience({company,role,period,description,techs}:ExperienceProps) {
    return (
        <div className={`${style.experience} glass-card`}>
            <div className={style.header}>
                <div className={style.mainInfo}>
                    <h3 className={style.company}>{company}</h3>
                    <p className={style.role}>{role}</p>
                </div>
                <div className={style.period}>{period}</div>
            </div>

            <div className={style.content}>
                <p className={style.description}>{description}</p>
                <div className={style.techList}>
                    {techs.split(',').map((tech, i) => (
                        <span key={i} className={style.techBadge}>{tech.trim()}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}