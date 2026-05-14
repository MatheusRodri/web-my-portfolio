import style from './style.module.css';

interface AcademicProps {
    institution: string;
    course: string;
    period: string;
}

export function Academic({institution,course,period}:AcademicProps) {
    return (
        <div className={`${style.academic} glass-card`}>
            <div className={style.info}>
                <h3 className={style.institution}>{institution}</h3>
                <p className={style.course}>{course}</p>
            </div>
            <div className={style.period}>{period}</div>
        </div>
    )
}