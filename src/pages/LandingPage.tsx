import React from 'react';
import './Pages.scss';
import { LandingPageContent } from '../content/pageContent/LandingPageContent';
import { techStack } from '../content/techStack';

export const LandingPage = () => {
    return (
        <div className="landing-page">
            <LandingPageContent/>
            <div className="tech-stack">
                <img src={techStack.react.logo} alt={techStack.react.name} />
                <img src={techStack.redux.logo} alt={techStack.redux.name} />
                <img src={techStack.typescript.logo} alt={techStack.typescript.name} />
            </div>
        </div>)
}