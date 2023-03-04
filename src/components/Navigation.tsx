import { routes } from '@/routes/routes';
import styles from '@/styles/Navigation.module.css';
import useOnClickOutsideNav from '@/utils/hooks/useOnClickOutsideNav';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const pages = [
    routes.HOME, routes.ABOUT, routes.CODING_PROJECTS, routes.CREATIVE_PROJECTS
];

export function Navigation() {
    
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const navRef = useRef(null);

    useOnClickOutsideNav(navRef, ()=>{setNavOpen(false)});

    return (
    <nav className={styles.navigation} ref={navRef}>
        <button className={styles.toggleButton} onClick={()=>{navOpen ? setNavOpen(false) : setNavOpen(true)}}>{navOpen ? 'Close Menu' : 'Menu'}</button>
        <div className={navOpen ? `${styles.navOpen}` : `${styles.navClosed}`}>
            <ul>
                {
                    pages.map((page, i)=>
                    <li key={i}>
                        <Link href={page.src}>
                        <Image src={page.icon} alt={page.header} width="20" height="20" />
                        {page.header}
                        </Link></li>)
                }
            </ul>
        </div>
    </nav>
)
};