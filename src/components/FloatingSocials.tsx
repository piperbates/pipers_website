import styles from '@/styles/Layout.module.css'

export default function FloatingSocials() {
    return <div className={styles.floatingSocials}>
        <ul>
            <li>
                <a href='https://www.linkedin.com/in/piperbates' target='_blank' rel="noreferrer">
                    LinkedIn
                </a>
            </li>
            <li>
                <a href='https://github.com/piperbates' target='_blank' rel="noreferrer">
                    Github
                </a>
            </li>
        </ul>
    </div>
}