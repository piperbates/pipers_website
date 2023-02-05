import React from "react";

interface SectionProps {
    heading: string,
    children: JSX.Element,
}

export const Section = (props: SectionProps) => {
    const { children, heading } = props;

    return (<div className='section'>
        <div className='section__header'>
            <h1>{heading}</h1>
        </div>

        <div className='section__content'>
            {children}
        </div>

        <div className='section__footer'>
            
        </div>
    </div>)
}