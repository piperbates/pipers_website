import React from 'react';
import './Footer.scss';
import { personalDetails } from '../../constants';

import './Footer.scss'

export const Footer = () => {
    return (
    <footer>
        <div className='footer-box'>
            <ul>
                <li>© Piper Bates 2023</li>
                <li>
                    <a 
                        href={personalDetails.linkedIn} 
                        target='_blank' 
                        rel="noreferrer">
                            linkedIn
                    </a>
                </li>
                <li><a 
                        href={personalDetails.github}
                        target='_blank' 
                        rel="noreferrer">
                            gitHub
                    </a></li>
                <li>{personalDetails.email}</li>
            </ul>
        </div>
    </footer>)
}