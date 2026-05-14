import Link from "next/link";
import style from './style.module.css';
import data from '@/data/data.json';
import {FaLinkedin, FaGithub, FaMedium, FaRedditAlien, FaInstagram, FaXTwitter, FaEnvelope} from 'react-icons/fa6';
import { useLanguage } from '@/context/LanguageContext';

export function Footer(){
    const { t } = useLanguage();

    return(
        <footer id='contact' className={style.footer}>
            <div className={style.container}>
                <div className={style.top}>
                    <div className={style.contactInfo}>
                        <h2 className={style.title}>{t.nav.contact}</h2>
                        <a href={`mailto:${data.contact_user.email}`} className={style.emailLink}>
                            <FaEnvelope /> {data.contact_user.email}
                        </a>
                    </div>
                    <ul className={style.socialList}>
                        <li>
                            <Link href={data.contact_user.linkedin} target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </Link>
                        </li>
                        <li>
                            <Link href={data.contact_user.github} target="_blank" aria-label="GitHub">
                                <FaGithub />
                            </Link>
                        </li>
                        <li>
                            <Link href={data.contact_user.medium} target="_blank" aria-label="Medium">
                                <FaMedium />
                            </Link>
                        </li>
                        <li>
                            <Link href={data.contact_user.reddit} target="_blank" aria-label="Reddit">
                                <FaRedditAlien />
                            </Link>
                        </li>
                        <li>
                            <Link href={data.contact_user.instagram} target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href={data.contact_user.x} target="_blank" aria-label="X">
                                <FaXTwitter />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.bottom}>
                    <p className={style.rights}>{t.footer.rights}</p>
                </div>
            </div>
        </footer>
    )
} 