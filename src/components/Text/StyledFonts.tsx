import { courierPrime } from "@/utils/fonts";
import styles from './Text.module.css';

export const StyledP = ({ children }: { children: string }) => {
    return (
        <p className={`
            ${courierPrime.className} 
            ${styles.paragraph}
        `}>
            {children}
        </p>
    );
};


export const SmallText = ({ children }: { children: string }) => {
    return (
        <p className={`
            ${courierPrime.className} 
            ${styles.smallText}
        `}>
            {children}
        </p>
    );
};

export const StyledSpan = ({ children }: { children: string }) => {
    return (
        <p className={`
            ${courierPrime.className} 
            ${styles.span}
        `}>
            {children}
        </p>
    );
};