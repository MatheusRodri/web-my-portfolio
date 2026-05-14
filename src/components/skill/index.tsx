import style from './style.module.css';

interface SkillProps {
    name: string;
    img: string;
}

export function Skill({name,img}: SkillProps) {
    return (
        <div className={`${style.skill} glass-card`}>
            <div className={style.imageWrapper}>
                <img src={img} alt={name} className={style.skillImage} />
            </div>
            <span className={style.skillName}>{name}</span>
        </div>
    )
}