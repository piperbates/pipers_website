import styles from '@/styles/Modal.module.css';
import { Modal_Data } from '@/utils/context/ModalContext';
import useOnClickOutsideModal from '@/utils/hooks/useOnClickOutsideModal';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useRef } from 'react';

export default function ModalContent () {

    const modalRef = useRef(null);
    const { setModalOpen, modalContent, setModalContent } = useContext(Modal_Data);

    const modalClose = () => {
        setModalOpen(false);
        setModalContent(null);
    };

    useOnClickOutsideModal(modalRef, modalClose);  

    return <div className={styles.modalContent} ref={modalRef}>
        <button className={styles.closeButton} onClick={()=>modalClose()}>X</button>
        
        <h1>{modalContent?.title}</h1>

        <div className={styles.modalContentImageBox}>{modalContent && <Image src={modalContent.imageSrc} alt={modalContent?.imageAlt} fill />}</div>

        <div className={styles.modalContentDescriptionBox}>{modalContent?.description}</div>

        <div className={styles.galleryItemFooter}>
            <ul>
                {modalContent?.githubLink && <li><Link href={modalContent.githubLink} target="_blank">View on Github</Link></li>}
            {modalContent?.liveLink && <li><Link href={modalContent.liveLink} target="_blank">View Live</Link></li>}
            </ul>
        </div>

    {modalContent?.techStack &&
        <div className={styles.techStackBox}>
            {modalContent.techStack.map((tech, i)=>{
                return <div className={styles.techStackImgWrapper} key={i}><Image src={tech.logo} alt={tech.name} fill className={styles.techStackImgWrapperImg} /></div>
            })}
        </div>
    }
    </div>
};