import styles from '@/styles/Layout.module.css'
import Socials from './Socials'

export default function FloatingSocials() {
    return <div className={styles.floatingSocials}>
        <Socials showIcon/>
    </div>
}