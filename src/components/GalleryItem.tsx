import styles from '@/styles/Gallery.module.css'
import ModalContext, { Modal_Data } from '@/utils/context/ModalContext'
import { GalleryType } from '@/utils/types/GalleryTypes'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

export default function GalleryItem ({
    title, description, imageSrc, imageAlt, githubLink, liveLink, techStack
}: GalleryType
) {
    const { modalOpen, setModalOpen, setModalContent } = useContext(Modal_Data)

    const handleClick = () => {
        setModalOpen(true)
        setModalContent({
            title, description, imageSrc, imageAlt, githubLink, liveLink, techStack
        })
    }

    return (
    <div className={styles.galleryItem} onClick={()=>{handleClick()}}>
        <div className={styles.galleryItemHeader}>
            <h1>{title}</h1>
        </div>

        <div className={styles.galleryItemContent}>
            <div className={styles.galleryItemImg}>
                <Image src={imageSrc} alt={imageAlt} width={150} height={150}/>
            </div>
        </div>
    </div>
    )
}