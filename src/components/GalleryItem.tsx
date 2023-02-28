import styles from '@/styles/Gallery.module.css'
import { GalleryType } from '@/utils/types/GalleryTypes'
import Image from 'next/image'
import Link from 'next/link'

export default function GalleryItem ({header, img, githubLink, liveLink, techStack}: GalleryType) {

    return <div className={styles.galleryItem}>
        <div className={styles.galleryItemHeader}>
            {header}
        </div>

        <div className={styles.galleryItemContent}>
            <div className={styles.galleryItemText}></div>

            <div className={styles.galleryItemImg}>
                <Image src={img} alt={header} width={100} height={100}/>
            </div>
        </div>

        <div className={styles.galleryItemFooter}>
            {githubLink && <Link href={githubLink}>View on Github</Link>}
            {liveLink && <Link href={liveLink}>View Live</Link>}
        </div>
    </div>
}