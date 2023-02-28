import styles from '@/styles/Layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { routes } from '@/routes/routes'
import { motion } from 'framer-motion'
import FloatingSocials from '../FloatingSocials'

type LayoutProps = {
    children: React.ReactNode,
    pageTitle: string,
    pageHeader: string,
    pageImage: string,
}

export default function Layout({children, pageTitle, pageHeader, pageImage}: LayoutProps) {

    const pages = [
        routes.HOME, routes.ABOUT, routes.CODING_PROJECTS, routes.CREATIVE_PROJECTS
    ]

return (
<>
<header className={styles.header}>
            <nav className={styles.navigation}>
                <ul>
                        {
                            pages.map((page, i)=>
                            <li key={i}><Link href={page.src}>{page.header}</Link></li>)
                        }
                </ul>
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
}