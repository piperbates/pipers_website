import React from 'react'
import './FloatingLinks.scss'

export const FloatingLinks = () => {
    return <div className='floating-links'>
        <ul>
            <li>
                <a href='https://www.linkedin.com/in/piperbates' target='_blank' rel="noreferrer">
                    <i className="fab fa-linkedin-in" />
                </a>
            </li>
            <li>
                <a href='https://github.com/piperbates' target='_blank' rel="noreferrer">
                    <i className="fab fa-github" />
                </a>
            </li>
        </ul>
    </div>
}