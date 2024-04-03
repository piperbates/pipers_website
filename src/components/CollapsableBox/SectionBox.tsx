"use client"; // This is a client component 👈🏽

import { useState } from "react";
import { StyledH2, StyledH3 } from "../Text/HeaderText";
import { CollapsableBox } from "./CollapsableBox";
import styles from './CollapsableBox.module.css';

type SectionBoxTypes = {
    title: string,
    titleSmall?: boolean,
    openOnLoad?: boolean
    children: React.ReactNode
};

export const SectionBox = ({
    title,
    titleSmall,
    openOnLoad,
    children,
}: SectionBoxTypes) => {
    const [isExpanded, setIsExpanded] = useState(openOnLoad);

    const newTitle = `${title} ${isExpanded ? "V" : ">"}`;

    return (
        <div>
            <button
                className={styles.titleButton}
                onClick={() => {
                    setIsExpanded(!isExpanded);
                }}>
                {titleSmall
                    ? <StyledH3>{newTitle}</StyledH3>
                    : <StyledH2>{newTitle}</StyledH2>
                }

            </button>
            <CollapsableBox boxBig={isExpanded}>
                <div>{children}</div>
            </CollapsableBox>
        </div>
    );
};
