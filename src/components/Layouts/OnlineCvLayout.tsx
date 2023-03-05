import styles from '@/styles/OnlineCvLayout.module.css';

type OnlineCvLayoutProps = {
    children: React.ReactElement[]
}

export default function OnlineCvLayout ({children}: OnlineCvLayoutProps) {
    return <div className={styles.onlineCvLayout}>
        {children}
    </div>
}