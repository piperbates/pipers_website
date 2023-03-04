import styles from '@/styles/Layout.module.css';
import Socials from './Socials';
import { socials } from '@/utils/socials';

export default function FloatingSocials() {

    const filterSocials = (social: string) => { 
        return socials.filter((item)=> item.name.toLowerCase() === social.toLowerCase())
    }

    const github = filterSocials('github')
    const linkedIn = filterSocials('linkedin')
    const medium = filterSocials('blog')

    const socialsToShow = [
            ...github,
            ...linkedIn,
            ...medium
    ]

    return <div className={styles.floatingSocials}>
        <Socials socials={socialsToShow} showIcon/>
    </div>
};