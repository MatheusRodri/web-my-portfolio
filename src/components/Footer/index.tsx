import Link from "next/link";
import style from './style.module.css';
import data from '@/data/data.json';
import {FaLinkedin, FaGithub, FaMedium, FaRedditAlien, FaInstagram, FaXTwitter} from 'react-icons/fa6';

export function Footer(){
    return(
        <footer id='contact' className={`${style.footerContainer} reveal-on-scroll`}>
            <ul className={style.footerList}>
                <li className={style.footerItem}>
                    <Link href={data.contact_user.linkedin} className={style.footerLink}>
                        <FaLinkedin className={style.footerIcon} />
                        <span className={style.footerText}>LinkedIn</span>
                    </Link>
                </li>
                <li className={style.footerItem}>
                    <Link href={data.contact_user.github} className={style.footerLink}>
                        <FaGithub className={style.footerIcon} />
                        <span className={style.footerText}>GitHub</span>
                    </Link>
                </li>
                <li className={style.footerItem}>
                    <Link href={data.contact_user.medium} className={style.footerLink}>
                        <FaMedium className={style.footerIcon} />
                        <span className={style.footerText}>Medium</span>
                    </Link>
                </li>
                <li className={style.footerItem}>
                    <Link href={data.contact_user.reddit} className={style.footerLink}>
                        <FaRedditAlien className={style.footerIcon} />
                        <span className={style.footerText}>Reddit</span>
                    </Link>
                </li>
                <li className={style.footerItem}>
                    <Link href={data.contact_user.instagram} className={style.footerLink}>
                        <FaInstagram className={style.footerIcon}/>
                        <span className={style.footerText}>Instagram</span>
                    </Link>
                </li>
                <li className={style.footerItem}>
                    <Link href={data.contact_user.x} className={style.footerLink}>
                        <FaXTwitter className={style.footerIcon} />
                        <span className={style.footerText}>X</span>
                    </Link>
                </li>
            </ul>
        </footer>
    )
} 