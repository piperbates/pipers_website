import Image from "next/image";
import { StyledH1 } from "../Text/HeaderText";
import styles from './Layout.module.css';
import { StyledSpan } from "../Text/StyledFonts";
import Link from "next/link";
import piperFace from "../../assets/piperface.jpeg";


export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <StyledH1>Piper Bates CV</StyledH1>
                <div className={styles.linkBox}>
                    <div className={styles.pipersInfo}>
                        <Image
                            src={piperFace.src}
                            alt="Pipers Face"
                            width="75"
                            height="75"
                            style={{ borderRadius: 50 }} />
                        <div>
                            <StyledSpan>07982 938 994</StyledSpan>
                            <StyledSpan>piperbates42@gmail.com</StyledSpan>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <Link
                            target='_blank'
                            href="http://www.github.com/piperbates">
                            Github
                        </Link>
                        <Link
                            target='_blank'
                            href="http://www.linkedin.com/in/piperbates">
                            LinkedIn</Link>
                    </div>
                </div>
                <div className={styles.cvBox}>
                    <a target="_blank" href="/piper-bates-cv.pdf">
                        Download CV as PDF
                    </a>
                    <a target="_blank" href="/piper-bates-cv.docx">
                        Download CV as word doc
                    </a>
                </div>

            </header>
            <div className={styles.mainContent}>
                {children}
            </div>
            <footer className={styles.footer}>
                &copy; Piper Bates 2024
            </footer>
        </div>
    );
};