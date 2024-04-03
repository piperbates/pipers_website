import { pressStart, courierPrime } from "@/utils/fonts";
import styles from './Text.module.css';

export const StyledH1 = ({ children }: { children: string }) => {
    return (<h1 className={`
        ${pressStart.className} 
        ${styles.header}
        ${styles.header1}
    `}>
        {children}
    </h1>);
};

export const StyledH2 = ({ children }: { children: string }) => {
    return (<h2 className={`
        ${pressStart.className} 
        ${styles.header}
        ${styles.header2}
    `}>
        {children}
    </h2>);
};

export const StyledH3 = ({ children }: { children: string }) => {
    return (<h3 className={`
        ${courierPrime.className} 
        ${styles.header}
        ${styles.header3}
    `}>
        {children}
    </h3>);
};

export const StyledH4 = ({ children }: { children: string }) => {
    return (<h4 className={`
        ${courierPrime.className} 
        ${styles.header}
        ${styles.header4}
    `}>
        {children}
    </h4>);
};

export const StyledH5 = ({ children }: { children: string }) => {
    return (<h5 className={`
        ${courierPrime.className} 
        ${styles.header}
        ${styles.header5}
    `}>
        {children}
    </h5>);
};