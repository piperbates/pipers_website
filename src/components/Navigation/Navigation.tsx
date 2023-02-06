import React, { useRef, useState } from 'react';
import { Link, Route } from "wouter";
import useOnClickOutside from '../../hooks/useOnClickOutside';

import { PageTitles, PageValues } from '../../PageValues';
import './Navigation.scss'

export const Navigation = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navRef = useRef<HTMLLIElement>(null);

    // useOnClickOutside(navRef, ()=> {setNavOpen(false)})
    

   return <nav>
        
        <button onClick={()=>{
                setNavOpen(!navOpen);
            }}>
            <i className="fas fa-solid fa-bars"></i>
        </button>
        <div className={navOpen ? 'nav__menu-open' : 'nav__menu-closed'}>
        <ul>
            <Route path="/">
                <li ref={navRef}>
                    <a href={`#${PageValues.TOP}`}>
                        <i className="fas fa-home icon"/>
                        Home
                    </a>
                </li>
                <li ref={navRef}>
                    <a href={`#${PageValues.PROJECTS}`}>
                        <i className="fas fa-code icon"/>
                        {PageTitles.PROJECTS}
                    </a>
                </li>
                <li ref={navRef}>
                    <a href={`#${PageValues.ABOUT}`}>
                        <i className="fas fa-grin-beam icon"/>
                        {PageTitles.ABOUT}
                    </a>
                </li>
                <li ref={navRef}>
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
        </div>
    </nav>
}