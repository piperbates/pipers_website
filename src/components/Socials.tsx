import { socials, SocialsType } from "@/utils/socials";
import Link from "next/link";
import styles from '@/styles/Socials.module.css'
import Image from "next/image";

type SocialsPropType = {
    showIcon?: boolean,
}

export default function Socials({showIcon}: SocialsPropType) {
    
    return <ul className={styles.socials}>
        {socials.map((social: SocialsType, i)=>{
            return <li key={i}>
                <Link href={social.link} target={"_blank"} className={styles.socialLink}>
                
                    {showIcon 
                        ? <div className={styles.iconWrapper}><Image src={social.icon} alt="" width="50" height="50" /></div>
                        : <span>{social.name}</span>
                    }
                    
                    
                    </Link>
            </li>
        })}
    </ul>
}