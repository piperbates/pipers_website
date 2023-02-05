import React from 'react';
import { techStackImages } from '../images/techStackImages';
import './Pages.scss';
import { LandingPageContent } from '../content/pageContent/LandingPageContent';

export const LandingPage = () => {
    return (
        <div className="landing-page">
            <LandingPageContent/>
            <div className="tech-stack">
                {techStackImages.map((image)=>{
                    return <img src={image.logo} alt={image.alt} key={image.alt} />
                })}
            </div>
        </div>)
}