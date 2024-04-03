import styles from './Header.module.css';
import { StyledH1 } from '../Text/HeaderText';
import { StyledSpan } from '../Text/StyledFonts';
import Link from 'next/link';
import Image from 'next/image';
import piperFace from "../../assets/piperface.jpeg";

export const Header = () => {
    return (
        <header className={styles.header}>
            <StyledH1>Piper Bates CV</StyledH1>
            <div className={styles.linkBox}>
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
            <a target="_blank" href="/piper-bates-cv.pdf">
                Download CV as PDF
            </a>

        </header>
    );
};