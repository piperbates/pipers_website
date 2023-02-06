import React from 'react';
import { AboutPageContent } from '../content/pageContent/AboutPageContent';
import piperFace from '../images/piperface.jpeg'

export const AboutPage = () => {
   
    return <div className="about-page">
        <img src={piperFace} alt="Piper" />
        <AboutPageContent />
    </div>
}