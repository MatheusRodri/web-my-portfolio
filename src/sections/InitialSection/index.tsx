import Image from 'next/image';
import style from './style.module.css';
import imageProfile from '../../../public/assets/Perfil.jpg'
import { useLanguage } from '@/context/LanguageContext';

export default function InitialSection() {
    const { t } = useLanguage();

    return (
        <section className={`${style.initialSection} reveal-on-scroll`} id='home'>
            <div className={`${style.initialText} scroll-to-text`}>
                <h1 className={style.title}>{t.hero.title}</h1>
                <p className={style.subtitle}>{t.hero.subtitle}</p>
                <p className={style.description}>
                    {t.hero.resume}
                </p>
                <div className={style.ctaGroup}>
                    <a href="#contact" className={style.primaryBtn}>{t.nav.contact}</a>
                    <a href="#projects" className={style.secondaryBtn}>{t.nav.projects}</a>
                </div>
            </div>
            <div className={style.initialImage}>
                <div className={style.imageContainer}>
                    <Image src={imageProfile} alt='Matheus Rodrigues' priority/>
                </div>
            </div>
        </section>
    )
}