"use client"; // This is a client component 👈🏽

import { useState } from 'react';
import styles from './CollapsableBox.module.css';

type CollapsableBoxType = {
    children: React.ReactNode,
    boxBig?: boolean
}

export const CollapsableBox = ({ children, boxBig }: CollapsableBoxType) => {

    return (
        <div className={`
        ${styles.boxContent} 
        ${boxBig ?
                styles.boxExpanded :
                styles.boxSmall}`}>

            {children}
        </div>
    );
};