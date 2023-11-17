import styles from '@/styles/Gallery.module.css';
import { Modal_Data } from '@/utils/context/ModalContext';
import { GalleryType } from '@/utils/types/GalleryTypes';
import Image from 'next/image';
import { useContext } from 'react';
import pressStart2P from '@/utils/pressStart2P';

export default function GalleryItem ({
    title, description, imageSrc, imageAlt, githubLink, liveLink, techStack
}: GalleryType
) {
    const { setModalOpen, setModalContent } = useContext(Modal_Data);

    const handleClick = () => {
        setModalOpen(true)
        setModalContent({
            title, description, imageSrc, imageAlt, githubLink, liveLink, techStack
        })
    };

    return (
    <div className={styles.galleryItem} onClick={()=>{handleClick()}}>
        <div className={styles.galleryItemHeader}>
            <h1 className={pressStart2P.className}>{title}</h1>
        </div>

        <div className={styles.galleryItemContent}>
            <div className={styles.galleryItemImg}>
                <Image src={imageSrc} alt={imageAlt} width={150} height={150}/>
            </div>
        </div>
    </div>
    )
};