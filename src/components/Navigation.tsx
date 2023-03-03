import { routes } from '@/routes/routes';
// import styles from '@/styles/Layout.module.css';
import styles from '@/styles/Navigation.module.css';

import Image from 'next/image';
import Link from 'next/link';
import homeIcon from '../images/icons/house-solid.svg';


const pages = [
    routes.HOME, routes.ABOUT, routes.CODING_PROJECTS, routes.CREATIVE_PROJECTS
]

export function Navigation() {
    return <nav className={styles.navigation}>
                <ul>
                        {
                            pages.map((page, i)=>
                            <li key={i}>
                              <Link href={page.src}>
                                {page.header}
                                <Image src={page.icon} alt={page.header} width="20" height="20" />

                                </Link></li>)
                        }
                </ul>
            </nav>
}