import styles from '@/styles/Layout.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FloatingSocials from '../FloatingSocials';
import Modal from './ModalLayout';
import { useContext, useEffect } from 'react';
import { Modal_Data } from '@/utils/context/ModalContext';

import { routes } from '@/routes/routes';
import useOnClickOutsideNav from '@/utils/hooks/useOnClickOutsideNav';
import Link from 'next/link';
import { useRef, useState } from 'react';

type LayoutProps = {
    children: React.ReactNode,
    pageTitle: string,
    pageHeader: string,
    pageImage: string,
};

export default function Layout({children, pageTitle, pageHeader, pageImage}: LayoutProps) {
    
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const navRef = useRef(null);

  useOnClickOutsideNav(navRef, ()=>{setNavOpen(false)});

  const pages = [
    routes.HOME, routes.CODING_PROJECTS, routes.CREATIVE_PROJECTS
];

    const { modalOpen } = useContext(Modal_Data);

    useEffect(()=>{
        if(modalOpen){
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
    
        }
      }, [modalOpen]);

return (
<>
{modalOpen && <Modal />}

    <header className={styles.header}>
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
        </header>
        
    <div className={styles.wrapper}>
        <motion.main 
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}
        transition={{
          scale: {
            type: "just",
          }
        }}
         >
            <div className={styles.mainHeader}>
                <h1>{pageHeader}</h1>
                <Image src={pageImage} alt={`${pageTitle} image`} width={100} height={100} />
            </div>
            {children}
        </motion.main>
    </div>
    <FloatingSocials />
</>
)
};