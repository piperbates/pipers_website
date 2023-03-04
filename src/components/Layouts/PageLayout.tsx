import styles from '@/styles/Layout.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FloatingSocials from '../FloatingSocials';
import Modal from './ModalLayout';
import { useContext, useEffect } from 'react';
import { Modal_Data } from '@/utils/context/ModalContext';
import { Navigation } from '../Navigation';

type LayoutProps = {
    children: React.ReactNode,
    pageTitle: string,
    pageHeader: string,
    pageImage: string,
};

export default function Layout({children, pageTitle, pageHeader, pageImage}: LayoutProps) {
    
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
            <Navigation />
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