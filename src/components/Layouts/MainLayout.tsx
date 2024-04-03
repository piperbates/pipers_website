import { Header } from "../Header/Header";
import styles from './Layout.module.css';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.mainContent}>
                {children}
            </div>
        </div>
    );
};