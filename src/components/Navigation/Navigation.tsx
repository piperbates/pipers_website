import React from 'react';
import { Link, Route } from "wouter";

import { PageTitles, PageValues } from '../../PageValues';
import './Navigation.scss'

export const Navigation = () => {
   return <nav>
        <ul>
            <Route path="/">
                <li>
                    <a href={`#${PageValues.TOP}`}>
                        <i className="fas fa-home icon"/>
                        Home
                    </a>
                </li>
                <li>
                    <a href={`#${PageValues.PROJECTS}`}>
                        <i className="fas fa-code icon"/>
                        {PageTitles.PROJECTS}
                    </a>
                </li>
                <li>
                    <a href={`#${PageValues.ABOUT}`}>
                        <i className="fas fa-grin-beam icon"/>
                        {PageTitles.ABOUT}
                    </a>
                </li>
                <li>
                    <a href={`#${PageValues.CREATIVE}`}>
                        <i className="fas fa-paint-brush icon"/>
                        {PageTitles.CREATIVE}
                    </a>
                </li>
                {/* <li>
                    <Link href={PageValues.ONLINE_CV}>
                        <i className="fas fa-solid fa-book icon" />
                        {PageTitles.ONLINE_CV}
                    </Link>
                </li> */}
            </Route>
            <Route path="/online_cv">
            <li>
                <Link href={`./#${PageValues.TOP}`}>
                    <i className="fas fa-home icon"/>
                    Home
                </Link>
            </li>

            </Route>
        </ul>
    </nav>
}