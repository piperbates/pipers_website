import styles from '@/styles/Gallery.module.css'

type GalleryLayoutProps = {
    children: React.ReactNode
}

export default function GalleryLayout({children}: GalleryLayoutProps) {
    return <div className={styles.galleryLayout}>
        {children}
    </div>
}