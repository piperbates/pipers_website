import { socials, SocialsType } from "@/utils/socials";
import Link from "next/link";
import styles from '@/styles/Socials.module.css';
import Image from "next/image";

type SocialsPropType = {
    showIcon?: boolean,
    socials: SocialsType[]
};

export default function Socials({socials, showIcon}: SocialsPropType) {

    return <ul className={styles.socials}>
        {socials.map((social: SocialsType, i)=>{
            if(social.name.toLowerCase() === "telephone" || social.name.toLowerCase() === "email" ) {
                return (
                <li>
                    <Image src={social.icon} alt={social.name} width="10" height="10" /> {social.link}
                </li>)
            }
            
            return <li key={i}>
                <Link href={social.link} target={"_blank"} className={styles.socialLink}>
                    {showIcon 
                        ? <div className={styles.iconWrapper}><Image src={social.icon} alt="" width="30" height="30" /></div>
                        : <span>{social.name}</span>
                    }
                </Link>
            </li>
        })}
    </ul>
};